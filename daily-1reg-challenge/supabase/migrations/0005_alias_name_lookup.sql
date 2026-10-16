-- 0005_alias_name_lookup.sql
-- 합쳐진 계정의 옛 이름으로 다시 들어와도 새 계정이 생기지 않고 합쳐진 계정으로 연결.

alter table public.participant_aliases add column alias_key text generated always as (public.name_key_of(alias_name)) stored;
create index participant_aliases_key_idx on public.participant_aliases (alias_key);

create or replace function public.enter_name(p_name text, p_country text) returns json
language plpgsql security definer set search_path = public as $$
declare nm text; k text; r participants;
begin
  nm := btrim(regexp_replace(normalize(coalesce(p_name, ''), NFC), '[\s 　]+', ' ', 'g'));
  k := name_key_of(nm);
  if k = '' or char_length(nm) > 30 then raise exception 'bad_name'; end if;
  if p_country not in ('KR','TH') then raise exception 'bad_country'; end if;
  select * into r from participants where name_key = k;
  if not found then
    -- 합쳐지기 전의 옛 이름으로 들어와도 합쳐진 계정으로 연결
    select p.* into r from participant_aliases a join participants p on p.id = a.participant_id
      where a.alias_key = k order by a.created_at desc limit 1;
  end if;
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
