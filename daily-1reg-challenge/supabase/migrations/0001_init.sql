-- 0001_init.sql
-- 1일 1등록 챌린지: 기본 테이블, 함수(RPC), 사진 저장소
--
-- 사용 전 아래 'CHANGE_ME_ADMIN_PASSWORD'를 실제 관리자 비밀번호로 바꾸세요.
-- (운영 중인 DB에는 이미 적용되어 있고, 비밀번호는 관리자 화면 > 비밀번호 변경에서 바꿀 수 있어요.)

create extension if not exists pgcrypto with schema extensions;

-- 챌린지 설정 (1행 고정)
create table public.challenge_settings (
  id int primary key default 1 check (id = 1),
  title_ko text not null default '1일 1등록 챌린지',
  title_th text not null default 'ชาเลนจ์ 1 วัน 1 ลงทะเบียน',
  tagline_ko text not null default '매일 1등록 · 1만PV 이상! 인증하고 함께 완주해요',
  tagline_th text not null default 'ลงทะเบียน 1 ราย/วัน และ 10,000 PV ขึ้นไป ส่งรูปยืนยันแล้วไปให้ถึงเส้นชัยด้วยกัน!',
  start_date date,
  end_date date,
  goal_pv int not null default 10000,
  required_days int,               -- null이면 기간 전체 일수를 모두 채워야 완주
  admin_hash text not null,
  updated_at timestamptz not null default now()
);
insert into public.challenge_settings (id, admin_hash)
values (1, extensions.crypt('CHANGE_ME_ADMIN_PASSWORD', extensions.gen_salt('bf')));

-- 참가자
create table public.participants (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  country text not null default 'KR' check (country in ('KR','TH')),
  created_at timestamptz not null default now()
);

-- 인증 사진 (하루에 여러 장 가능)
create table public.certifications (
  id uuid primary key default gen_random_uuid(),
  participant_id uuid not null references public.participants(id) on delete cascade,
  challenge_date date not null,
  image_path text not null,
  note text,
  uploaded_at timestamptz not null default now()
);
create index certifications_pid_date_idx on public.certifications (participant_id, challenge_date);

-- RLS: 테이블은 직접 접근 금지. 모든 접근은 아래 security definer 함수(RPC)로만 이루어져요.
alter table public.challenge_settings enable row level security;
alter table public.participants enable row level security;
alter table public.certifications enable row level security;

-- 나라별 시간대 (하루 기준: 해당 나라 자정)
create or replace function public.tz_for(c text) returns text
language sql immutable as $$ select case c when 'TH' then 'Asia/Bangkok' else 'Asia/Seoul' end $$;

-- 관리자 비밀번호 확인 (외부에서 직접 호출 불가)
create or replace function public.admin_ok(pw text) returns boolean
language sql security definer set search_path = public, extensions as $$
  select exists(select 1 from challenge_settings where id = 1 and admin_hash = extensions.crypt(pw, admin_hash))
$$;
revoke execute on function public.admin_ok(text) from public, anon, authenticated;

-- 참가자 화면: 설정 + 참가자 목록 + 오늘 날짜
create or replace function public.get_public_state() returns json
language sql security definer set search_path = public as $$
  select json_build_object(
    'settings', (select json_build_object('title_ko',title_ko,'title_th',title_th,'tagline_ko',tagline_ko,'tagline_th',tagline_th,'start_date',start_date,'end_date',end_date,'goal_pv',goal_pv,'required_days',required_days) from challenge_settings where id = 1),
    'today', json_build_object('KR',(now() at time zone 'Asia/Seoul')::date,'TH',(now() at time zone 'Asia/Bangkok')::date),
    'participants', coalesce((
      select json_agg(json_build_object(
        'id',p.id,'name',p.name,'country',p.country,
        'days',(select count(distinct c.challenge_date) from certifications c where c.participant_id = p.id),
        'today_done',exists(select 1 from certifications c where c.participant_id = p.id and c.challenge_date = (now() at time zone tz_for(p.country))::date)
      ) order by p.name) from participants p), '[]'::json)
  )
$$;

-- 내 인증 목록
create or replace function public.get_my_certs(p_id uuid) returns json
language sql security definer set search_path = public as $$
  select coalesce(json_agg(json_build_object('id',id,'challenge_date',challenge_date,'image_path',image_path,'note',note,'uploaded_at',uploaded_at) order by uploaded_at desc), '[]'::json)
  from certifications where participant_id = p_id
$$;

-- 인증 등록 (기간·날짜는 서버 시간 기준으로 검사)
create or replace function public.add_certification(p_id uuid, p_path text, p_note text default null) returns json
language plpgsql security definer set search_path = public as $$
declare s challenge_settings; pc text; d date; newid uuid;
begin
  select * into s from challenge_settings where id = 1;
  select country into pc from participants where id = p_id;
  if pc is null then raise exception 'participant_not_found'; end if;
  if s.start_date is null or s.end_date is null then raise exception 'period_not_set'; end if;
  d := (now() at time zone tz_for(pc))::date;
  if d < s.start_date then raise exception 'not_started'; end if;
  if d > s.end_date then raise exception 'ended'; end if;
  if p_path is null or p_path !~ ('^' || p_id::text || '/') then raise exception 'bad_path'; end if;
  insert into certifications (participant_id, challenge_date, image_path, note)
  values (p_id, d, p_path, nullif(left(p_note, 200), '')) returning id into newid;
  return json_build_object('id', newid, 'challenge_date', d);
end $$;

-- 내 사진 삭제 (당일 것만)
create or replace function public.delete_my_cert(p_id uuid, p_cert uuid) returns boolean
language plpgsql security definer set search_path = public as $$
declare pc text; n int;
begin
  select country into pc from participants where id = p_id;
  delete from certifications where id = p_cert and participant_id = p_id
    and challenge_date = (now() at time zone tz_for(pc))::date;
  get diagnostics n = row_count;
  return n > 0;
end $$;

-- ---------- 관리자 ----------
create or replace function public.admin_login(pw text) returns boolean
language sql security definer set search_path = public as $$ select public.admin_ok(pw) $$;

create or replace function public.admin_overview(pw text) returns json
language plpgsql security definer set search_path = public as $$
begin
  if not admin_ok(pw) then raise exception 'unauthorized'; end if;
  return json_build_object(
    'settings', (select json_build_object('title_ko',title_ko,'title_th',title_th,'tagline_ko',tagline_ko,'tagline_th',tagline_th,'start_date',start_date,'end_date',end_date,'goal_pv',goal_pv,'required_days',required_days) from challenge_settings where id = 1),
    'participants', coalesce((
      select json_agg(json_build_object(
        'id',p.id,'name',p.name,'country',p.country,
        'days',(select count(distinct c.challenge_date) from certifications c where c.participant_id = p.id),
        'photos',(select count(*) from certifications c where c.participant_id = p.id),
        'dates',(select coalesce(json_agg(distinct c.challenge_date), '[]'::json) from certifications c where c.participant_id = p.id)
      ) order by p.name) from participants p), '[]'::json)
  );
end $$;

create or replace function public.admin_get_certs(pw text, p_id uuid) returns json
language plpgsql security definer set search_path = public as $$
begin
  if not admin_ok(pw) then raise exception 'unauthorized'; end if;
  return (select coalesce(json_agg(json_build_object('id',id,'challenge_date',challenge_date,'image_path',image_path,'note',note,'uploaded_at',uploaded_at) order by uploaded_at desc), '[]'::json) from certifications where participant_id = p_id);
end $$;

create or replace function public.admin_save_settings(pw text, p_start date, p_end date, p_title_ko text, p_title_th text, p_tagline_ko text, p_tagline_th text, p_goal_pv int, p_required_days int) returns boolean
language plpgsql security definer set search_path = public as $$
begin
  if not admin_ok(pw) then raise exception 'unauthorized'; end if;
  if p_start is not null and p_end is not null and p_end < p_start then raise exception 'bad_period'; end if;
  update challenge_settings set start_date = p_start, end_date = p_end,
    title_ko = coalesce(nullif(p_title_ko,''), title_ko), title_th = coalesce(nullif(p_title_th,''), title_th),
    tagline_ko = coalesce(nullif(p_tagline_ko,''), tagline_ko), tagline_th = coalesce(nullif(p_tagline_th,''), tagline_th),
    goal_pv = coalesce(p_goal_pv, goal_pv), required_days = p_required_days, updated_at = now()
  where id = 1;
  return true;
end $$;

create or replace function public.admin_add_participants(pw text, p_names text[], p_country text) returns int
language plpgsql security definer set search_path = public as $$
declare n int;
begin
  if not admin_ok(pw) then raise exception 'unauthorized'; end if;
  if p_country not in ('KR','TH') then raise exception 'bad_country'; end if;
  insert into participants (name, country)
  select distinct btrim(x), p_country from unnest(p_names) x where btrim(x) <> ''
  on conflict (name) do nothing;
  get diagnostics n = row_count;
  return n;
end $$;

create or replace function public.admin_delete_participant(pw text, p_id uuid) returns boolean
language plpgsql security definer set search_path = public as $$
begin
  if not admin_ok(pw) then raise exception 'unauthorized'; end if;
  delete from participants where id = p_id;
  return true;
end $$;

create or replace function public.admin_delete_cert(pw text, p_cert uuid) returns boolean
language plpgsql security definer set search_path = public as $$
begin
  if not admin_ok(pw) then raise exception 'unauthorized'; end if;
  delete from certifications where id = p_cert;
  return true;
end $$;

create or replace function public.admin_change_password(pw text, new_pw text) returns boolean
language plpgsql security definer set search_path = public, extensions as $$
begin
  if not admin_ok(pw) then raise exception 'unauthorized'; end if;
  if length(coalesce(new_pw,'')) < 6 then raise exception 'weak_password'; end if;
  update challenge_settings set admin_hash = extensions.crypt(new_pw, extensions.gen_salt('bf')) where id = 1;
  return true;
end $$;

-- ---------- 사진 저장소 ----------
-- 파일명은 {participant_id}/{종류}-{시간}-{랜덤}.jpg 형식. 공개 버킷(주소를 아는 사람만 열람 가능한 URL).
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('certs', 'certs', true, 6291456, array['image/jpeg','image/png','image/webp'])
on conflict (id) do nothing;

create policy "anon can upload cert photos" on storage.objects
  for insert to anon with check (bucket_id = 'certs');
