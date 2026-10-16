-- 0002_cert_kind_reg_pv.sql
-- 인증을 '회원등록(reg)'과 'PV(pv)' 두 종류로 구분.
-- 하루 완료 = 같은 날 reg 1장 이상 + pv 1장 이상.
-- 기존 add_certification(uuid, text, text)는 삭제하고, kind 인자가 있는 버전으로 교체해요.

alter table public.certifications add column kind text not null default 'reg' check (kind in ('reg','pv'));
create index certifications_pid_date_kind_idx on public.certifications (participant_id, challenge_date, kind);

drop function if exists public.add_certification(uuid, text, text);

create or replace function public.add_certification(p_id uuid, p_kind text, p_path text, p_note text default null) returns json
language plpgsql security definer set search_path = public as $$
declare s challenge_settings; pc text; d date; newid uuid;
begin
  if p_kind not in ('reg','pv') then raise exception 'bad_kind'; end if;
  select * into s from challenge_settings where id = 1;
  select country into pc from participants where id = p_id;
  if pc is null then raise exception 'participant_not_found'; end if;
  if s.start_date is null or s.end_date is null then raise exception 'period_not_set'; end if;
  d := (now() at time zone tz_for(pc))::date;
  if d < s.start_date then raise exception 'not_started'; end if;
  if d > s.end_date then raise exception 'ended'; end if;
  if p_path is null or p_path !~ ('^' || p_id::text || '/') then raise exception 'bad_path'; end if;
  insert into certifications (participant_id, kind, challenge_date, image_path, note)
  values (p_id, p_kind, d, p_path, nullif(left(p_note, 200), '')) returning id into newid;
  return json_build_object('id', newid, 'challenge_date', d, 'kind', p_kind);
end $$;

create or replace function public.get_public_state() returns json
language sql security definer set search_path = public as $$
  select json_build_object(
    'settings', (select json_build_object('title_ko',title_ko,'title_th',title_th,'tagline_ko',tagline_ko,'tagline_th',tagline_th,'start_date',start_date,'end_date',end_date,'goal_pv',goal_pv,'required_days',required_days) from challenge_settings where id = 1),
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

create or replace function public.get_my_certs(p_id uuid) returns json
language sql security definer set search_path = public as $$
  select coalesce(json_agg(json_build_object('id',id,'kind',kind,'challenge_date',challenge_date,'image_path',image_path,'note',note,'uploaded_at',uploaded_at) order by uploaded_at desc), '[]'::json)
  from certifications where participant_id = p_id
$$;

create or replace function public.admin_overview(pw text) returns json
language plpgsql security definer set search_path = public as $$
begin
  if not admin_ok(pw) then raise exception 'unauthorized'; end if;
  return json_build_object(
    'settings', (select json_build_object('title_ko',title_ko,'title_th',title_th,'tagline_ko',tagline_ko,'tagline_th',tagline_th,'start_date',start_date,'end_date',end_date,'goal_pv',goal_pv,'required_days',required_days) from challenge_settings where id = 1),
    'participants', coalesce((
      select json_agg(json_build_object(
        'id',p.id,'name',p.name,'country',p.country,
        'days',(select count(*) from (select c.challenge_date from certifications c where c.participant_id = p.id group by c.challenge_date having bool_or(c.kind='reg') and bool_or(c.kind='pv')) t),
        'reg_days',(select count(distinct c.challenge_date) from certifications c where c.participant_id = p.id and c.kind='reg'),
        'pv_days',(select count(distinct c.challenge_date) from certifications c where c.participant_id = p.id and c.kind='pv'),
        'photos',(select count(*) from certifications c where c.participant_id = p.id)
      ) order by p.name) from participants p), '[]'::json)
  );
end $$;

create or replace function public.admin_get_certs(pw text, p_id uuid) returns json
language plpgsql security definer set search_path = public as $$
begin
  if not admin_ok(pw) then raise exception 'unauthorized'; end if;
  return (select coalesce(json_agg(json_build_object('id',id,'kind',kind,'challenge_date',challenge_date,'image_path',image_path,'note',note,'uploaded_at',uploaded_at) order by uploaded_at desc), '[]'::json) from certifications where participant_id = p_id);
end $$;
