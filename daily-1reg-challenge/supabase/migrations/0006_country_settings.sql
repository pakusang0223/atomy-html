-- 0006_country_settings.sql
-- 한국과 태국은 챌린지를 동시에 하지 않으므로 기간·PV 목표·완주 기준·제목·소개 문구를 나라별로 따로 설정.
-- (challenge_settings의 날짜·제목 컬럼은 더 이상 쓰지 않고, 관리자 비밀번호(admin_hash)만 계속 사용해요.)

create table public.country_settings (
  country text primary key check (country in ('KR','TH')),
  title text not null,
  tagline text not null,
  start_date date,
  end_date date,
  goal_pv int not null default 10000,
  required_days int,               -- null이면 기간 전체 일수를 모두 채워야 완주
  updated_at timestamptz not null default now()
);
alter table public.country_settings enable row level security;

insert into public.country_settings (country, title, tagline, start_date, end_date, goal_pv, required_days)
select 'KR', title_ko, tagline_ko, start_date, end_date, goal_pv, required_days from public.challenge_settings where id = 1;
insert into public.country_settings (country, title, tagline, start_date, end_date, goal_pv, required_days)
select 'TH', title_th, tagline_th, start_date, end_date, goal_pv, required_days from public.challenge_settings where id = 1;

-- 나라별 설정 JSON: {"KR": {...}, "TH": {...}}
create or replace function public.country_settings_json() returns json
language sql stable security definer set search_path = public as $$
  select coalesce(json_object_agg(country, json_build_object(
    'title', title, 'tagline', tagline, 'start_date', start_date, 'end_date', end_date,
    'goal_pv', goal_pv, 'required_days', required_days)), '{}'::json)
  from country_settings
$$;

create or replace function public.get_public_state() returns json
language sql security definer set search_path = public as $$
  select json_build_object(
    'settings', public.country_settings_json(),
    'today', json_build_object('KR',(now() at time zone 'Asia/Seoul')::date,'TH',(now() at time zone 'Asia/Bangkok')::date),
    'participants', coalesce((
      select json_agg(json_build_object(
        'id',p.id,'name',p.name,'country',p.country,
        'days',(select count(*) from (select c.challenge_date from certifications c where c.participant_id = p.id group by c.challenge_date having bool_or(c.kind='reg') and bool_or(c.kind='pv')) t),
        'today_reg',exists(select 1 from certifications c where c.participant_id = p.id and c.kind='reg' and c.challenge_date = (now() at time zone tz_for(p.country))::date),
        'today_pv',exists(select 1 from certifications c where c.participant_id = p.id and c.kind='pv' and c.challenge_date = (now() at time zone tz_for(p.country))::date)
      ) order by p.name) from participants p), '[]'::json)
  )
$$;

-- 인증 등록: 참가자 나라의 기간으로 검사
create or replace function public.add_certification(p_id uuid, p_kind text, p_path text, p_note text default null) returns json
language plpgsql security definer set search_path = public as $$
declare s country_settings; pc text; d date; newid uuid;
begin
  if p_kind not in ('reg','pv') then raise exception 'bad_kind'; end if;
  select country into pc from participants where id = p_id;
  if pc is null then raise exception 'participant_not_found'; end if;
  select * into s from country_settings where country = pc;
  if s.start_date is null or s.end_date is null then raise exception 'period_not_set'; end if;
  d := (now() at time zone tz_for(pc))::date;
  if d < s.start_date then raise exception 'not_started'; end if;
  if d > s.end_date then raise exception 'ended'; end if;
  if p_path is null or p_path !~ ('^' || p_id::text || '/') then raise exception 'bad_path'; end if;
  insert into certifications (participant_id, kind, challenge_date, image_path, note)
  values (p_id, p_kind, d, p_path, nullif(left(p_note, 200), '')) returning id into newid;
  return json_build_object('id', newid, 'challenge_date', d, 'kind', p_kind);
end $$;

-- 관리자 개요: settings 를 나라별 구조로
create or replace function public.admin_overview(pw text) returns json
language plpgsql security definer set search_path = public as $$
begin
  if not admin_ok(pw) then raise exception 'unauthorized'; end if;
  return json_build_object(
    'settings', public.country_settings_json(),
    'today', json_build_object('KR',(now() at time zone 'Asia/Seoul')::date,'TH',(now() at time zone 'Asia/Bangkok')::date),
    'participants', coalesce((
      select json_agg(json_build_object(
        'id',p.id,'name',p.name,'country',p.country,'created_at',p.created_at,
        'days',(select count(*) from (select c.challenge_date from certifications c where c.participant_id = p.id group by c.challenge_date having bool_or(c.kind='reg') and bool_or(c.kind='pv')) t),
        'reg_days',(select count(distinct c.challenge_date) from certifications c where c.participant_id = p.id and c.kind='reg'),
        'pv_days',(select count(distinct c.challenge_date) from certifications c where c.participant_id = p.id and c.kind='pv'),
        'photos',(select count(*) from certifications c where c.participant_id = p.id),
        'today_reg',exists(select 1 from certifications c where c.participant_id = p.id and c.kind='reg' and c.challenge_date = (now() at time zone tz_for(p.country))::date),
        'today_pv',exists(select 1 from certifications c where c.participant_id = p.id and c.kind='pv' and c.challenge_date = (now() at time zone tz_for(p.country))::date),
        'is_candidate',coalesce(a.is_candidate,false),
        'is_winner',coalesce(a.is_winner,false)
      ) order by p.name)
      from participants p left join special_awards a on a.participant_id = p.id), '[]'::json)
  );
end $$;

-- 나라별 설정 저장 (기존 단일 설정 저장 함수는 제거)
drop function if exists public.admin_save_settings(text, date, date, text, text, text, text, int, int);

create or replace function public.admin_save_country_settings(pw text, p_country text, p_start date, p_end date, p_title text, p_tagline text, p_goal_pv int, p_required_days int) returns boolean
language plpgsql security definer set search_path = public as $$
begin
  if not admin_ok(pw) then raise exception 'unauthorized'; end if;
  if p_country not in ('KR','TH') then raise exception 'bad_country'; end if;
  if p_start is not null and p_end is not null and p_end < p_start then raise exception 'bad_period'; end if;
  update country_settings set start_date = p_start, end_date = p_end,
    title = coalesce(nullif(btrim(p_title),''), title), tagline = coalesce(nullif(btrim(p_tagline),''), tagline),
    goal_pv = coalesce(p_goal_pv, goal_pv), required_days = p_required_days, updated_at = now()
  where country = p_country;
  return true;
end $$;
