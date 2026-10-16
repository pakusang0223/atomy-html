-- 0003_admin_day_view.sql
-- 관리자 '일일 인증 현황': 선택한 날짜에 모든 참가자가 올린 인증을 한 번에 조회.

create or replace function public.admin_day_view(pw text, p_date date) returns json
language plpgsql security definer set search_path = public as $$
begin
  if not admin_ok(pw) then raise exception 'unauthorized'; end if;
  return coalesce((
    select json_agg(json_build_object(
      'id', p.id, 'name', p.name, 'country', p.country,
      'certs', (select coalesce(json_agg(json_build_object('id', c.id, 'kind', c.kind, 'image_path', c.image_path, 'note', c.note, 'uploaded_at', c.uploaded_at) order by c.uploaded_at), '[]'::json)
                from certifications c where c.participant_id = p.id and c.challenge_date = p_date)
    ) order by p.country, p.name) from participants p), '[]'::json);
end $$;
