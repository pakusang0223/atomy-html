-- 0004_self_signup_admin_tools.sql
-- 1) 참가자가 링크에서 직접 이름을 입력해 시작 (관리자는 참가자를 입력하지 않음)
-- 2) 띄어쓰기·영문 대소문자가 달라도 같은 이름으로 취급 (name_key 유니크)
-- 3) 관리자: 이름 변경 / 참가자 합치기 / 선택 삭제 / 특별상 표시
--    합쳐진 옛 링크(옛 id)는 participant_aliases 로 계속 작동

-- ---------- 이름 정규화 ----------
-- 공백류(일반·전각·NBSP·보이지 않는 공백)를 모두 없애고 소문자로. 한글 자모 조합 차이(NFC)도 맞춤.
create or replace function public.name_key_of(n text) returns text
language sql immutable as $$
  select lower(regexp_replace(normalize(coalesce(n, ''), NFC), '[\s ​-‍﻿　]+', '', 'g'))
$$;

alter table public.participants
  add column name_key text generated always as (public.name_key_of(name)) stored;
create unique index participants_namekey_uidx on public.participants (name_key);

-- ---------- 합쳐진 옛 계정 id → 현재 계정 ----------
create table public.participant_aliases (
  alias_id uuid primary key,
  participant_id uuid not null references public.participants(id) on delete cascade,
  alias_name text,
  created_at timestamptz not null default now()
);
alter table public.participant_aliases enable row level security;

-- ---------- 특별상 (후보/수상) ----------
create table public.special_awards (
  participant_id uuid primary key references public.participants(id) on delete cascade,
  is_candidate boolean not null default false,
  is_winner boolean not null default false
);
alter table public.special_awards enable row level security;

-- ---------- 참가자 화면 ----------
-- 저장된 id로 내 계정 찾기 (합쳐진 옛 id면 합쳐진 계정을 돌려줌). 없으면 null.
create or replace function public.get_me(p_id uuid) returns json
language sql security definer set search_path = public as $$
  select json_build_object('id', p.id, 'name', p.name, 'country', p.country)
  from participants p
  where p.id = coalesce((select a.participant_id from participant_aliases a where a.alias_id = p_id), p_id)
$$;

-- 이름 입력: 같은 이름(띄어쓰기·대소문자 무시)이 있으면 status='exists' 로 기존 계정을, 없으면 새로 만들어 'created'.
create or replace function public.enter_name(p_name text, p_country text) returns json
language plpgsql security definer set search_path = public as $$
declare nm text; k text; r participants;
begin
  nm := btrim(regexp_replace(normalize(coalesce(p_name, ''), NFC), '[\s 　]+', ' ', 'g'));
  k := name_key_of(nm);
  if k = '' or char_length(nm) > 30 then raise exception 'bad_name'; end if;
  if p_country not in ('KR','TH') then raise exception 'bad_country'; end if;
  select * into r from participants where name_key = k;
  if found then
    return json_build_object('status','exists','id',r.id,'name',r.name,'country',r.country);
  end if;
  begin
    insert into participants (name, country) values (nm, p_country) returning * into r;
  exception when unique_violation then
    select * into r from participants where name_key = k;
    return json_build_object('status','exists','id',r.id,'name',r.name,'country',r.country);
  end;
  return json_build_object('status','created','id',r.id,'name',r.name,'country',r.country);
end $$;

-- ---------- 관리자 ----------
-- 관리자는 참가자를 직접 등록하지 않음
drop function if exists public.admin_add_participants(text, text[], text);

create or replace function public.admin_overview(pw text) returns json
language plpgsql security definer set search_path = public as $$
begin
  if not admin_ok(pw) then raise exception 'unauthorized'; end if;
  return json_build_object(
    'settings', (select json_build_object('title_ko',title_ko,'title_th',title_th,'tagline_ko',tagline_ko,'tagline_th',tagline_th,'start_date',start_date,'end_date',end_date,'goal_pv',goal_pv,'required_days',required_days) from challenge_settings where id = 1),
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

-- 이름 변경 (같은 이름으로 볼 수 있는 계정이 있으면 거절 → 같은 사람이면 '합치기' 사용)
create or replace function public.admin_rename_participant(pw text, p_id uuid, p_name text) returns boolean
language plpgsql security definer set search_path = public as $$
declare nm text;
begin
  if not admin_ok(pw) then raise exception 'unauthorized'; end if;
  nm := btrim(regexp_replace(normalize(coalesce(p_name, ''), NFC), '[\s 　]+', ' ', 'g'));
  if name_key_of(nm) = '' or char_length(nm) > 30 then raise exception 'bad_name'; end if;
  if exists (select 1 from participants where name_key = name_key_of(nm) and id <> p_id) then raise exception 'name_taken'; end if;
  update participants set name = nm where id = p_id;
  return found;
end $$;

-- 선택한 참가자 삭제 (인증 기록도 함께 삭제)
create or replace function public.admin_delete_participants(pw text, p_ids uuid[]) returns int
language plpgsql security definer set search_path = public as $$
declare n int;
begin
  if not admin_ok(pw) then raise exception 'unauthorized'; end if;
  delete from participants where id = any(p_ids);
  get diagnostics n = row_count;
  return n;
end $$;

-- 같은 사람이 여러 계정으로 쪼개졌을 때 하나로 합치기 (인증 기록을 모두 옮김, 옛 링크는 계속 작동)
create or replace function public.admin_merge_participants(pw text, p_target uuid, p_sources uuid[]) returns json
language plpgsql security definer set search_path = public as $$
declare srcs uuid[]; moved int; n int;
begin
  if not admin_ok(pw) then raise exception 'unauthorized'; end if;
  select coalesce(array_agg(distinct s), '{}') into srcs from unnest(p_sources) s where s <> p_target;
  if cardinality(srcs) = 0 or cardinality(srcs) > 30 then raise exception 'bad_sources'; end if;
  if not exists (select 1 from participants where id = p_target) then raise exception 'not_found'; end if;
  select count(*) into n from participants where id = any(srcs);
  if n <> cardinality(srcs) then raise exception 'not_found'; end if;

  update certifications set participant_id = p_target where participant_id = any(srcs);
  get diagnostics moved = row_count;

  insert into special_awards (participant_id, is_candidate, is_winner)
  select p_target, bool_or(is_candidate), bool_or(is_winner) from special_awards
  where participant_id = p_target or participant_id = any(srcs)
  having count(*) > 0
  on conflict (participant_id) do update set is_candidate = excluded.is_candidate, is_winner = excluded.is_winner;

  update participant_aliases set participant_id = p_target where participant_id = any(srcs);
  insert into participant_aliases (alias_id, participant_id, alias_name)
  select id, p_target, name from participants where id = any(srcs)
  on conflict (alias_id) do update set participant_id = excluded.participant_id;

  delete from participants where id = any(srcs);
  return json_build_object('merged', n, 'moved_photos', moved);
end $$;

-- 특별상 후보/수상 표시
create or replace function public.admin_set_award(pw text, p_id uuid, p_candidate boolean, p_winner boolean) returns boolean
language plpgsql security definer set search_path = public as $$
begin
  if not admin_ok(pw) then raise exception 'unauthorized'; end if;
  insert into special_awards (participant_id, is_candidate, is_winner) values (p_id, p_candidate, p_winner)
  on conflict (participant_id) do update set is_candidate = excluded.is_candidate, is_winner = excluded.is_winner;
  return true;
end $$;
