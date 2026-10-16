# 1일 1등록 챌린지 (Atomy)

참가자가 매일 **회원등록 인증**과 **PV 인증** 사진을 올리는 챌린지 웹앱. 한국어/태국어. 관리자 화면 포함.
사용자는 한국어로 소통하는 비개발자(애터미 사업 리더)예요. 설명은 쉬운 한국어로, 결과는 바로 쓸 수 있는 형태로 드려요.

## 구조
- `public/index.html` : 앱 전체(참가자 화면 + 관리자 화면). 외부 라이브러리 없이 HTML/CSS/JS 한 파일. 로고는 base64로 내장.
- `supabase/migrations/*.sql` : DB 스키마와 함수(RPC). 번호 순서대로 적용.
- `design/` : 로고 원본(`atomy-logo-original.jpg`)과 파랑으로 바꾼 로고(`atomy-logo-blue.png`).
- `tools/make_logo.py` : 로고 원본 → 파랑 투명 PNG + base64 생성.
- `tools/preview.py` : 가짜 데이터로 화면 스크린샷 생성(디자인 확인용, 서버 접속 없음).
- `netlify.toml` : 배포 설정(`public/` 폴더를 그대로 배포).

## 운영 중인 환경 (이미 만들어져 있음)
- Netlify 사이트: `daily-1reg-challenge` (site id `01dd8155-0ed6-4c21-b456-828506b7b3dd`), 주소 `https://daily-1reg-challenge.netlify.app`
  - 참가자: `/?lang=ko`, `/?lang=th` / 관리자: `/?admin=1`
  - 배포 완료. 코드를 바꾸면 `public/`을 다시 배포해야 반영됨.
- Supabase 프로젝트: `daily-1reg-challenge` (ref `dtfanubnnfzazqgxriuo`, 서울 리전)
  - URL `https://dtfanubnnfzazqgxriuo.supabase.co`, 공개(anon) 키는 `public/index.html` 상단의 `KEY` 상수에 있음(공개용 키라 코드에 있어도 됨).
  - 0001~0006 마이그레이션 적용 완료. 사진 버킷 `certs`(공개) 있음.
  - 기존 팩 챌린지(`peel-off-mask-challenge`)와는 완전히 별개 프로젝트.
- 관리자 비밀번호는 DB에 해시로만 저장. 초기값은 사용자에게 따로 전달했고, 바꾸는 것을 권장. **비밀번호를 코드·문서에 적지 말 것.**

## 핵심 규칙
- 하루 완료 = 같은 날 `reg` 1장 이상 **그리고** `pv` 1장 이상. 사진은 하루에 여러 장 가능.
- 하루 기준은 참가자 나라의 자정(KR=Asia/Seoul, TH=Asia/Bangkok). 서버(DB) 시간으로 판정하며 화면에서 날짜를 정하지 않음.
- 기간이 설정되지 않았거나 범위 밖이면 인증이 막힘(`period_not_set`, `not_started`, `ended`).
- 테이블은 RLS로 잠겨 있고, 모든 접근은 `security definer` 함수(RPC)로만. 관리자 함수는 첫 인자 `pw`로 비밀번호 확인.
- 참가자는 당일 올린 자기 사진만 삭제 가능. 관리자는 모든 사진 삭제 가능.
- 참가자는 링크에서 **직접 이름을 입력**해 등록(`enter_name`). 관리자는 참가자를 입력하지 않음(관리자 화면에 등록 기능 없음).
- 이름 중복 판정은 `name_key_of()`(공백류 제거 + 소문자 + NFC). `participants.name_key` 유니크. 같은 이름을 입력하면 확인 후 기존 계정으로 로그인(다른 사람 대신 인증 허용).
- 참가자 화면에 '이름 변경 · 로그아웃' 버튼 있음(localStorage `d1_me` 삭제).
- 관리자 '합치기'는 인증 기록을 대상 계정으로 옮기고 옛 id/이름을 `participant_aliases`에 남김. `get_me`·`enter_name`이 alias를 따라감. 사진 파일은 옛 폴더에 그대로 있어도 URL이 유효함.
- 설정(기간·PV 목표·완주 기준·제목·소개)은 **나라별**로 `country_settings`(KR/TH)에 저장. 한국·태국은 동시에 진행하지 않음. 참가자는 자기 나라 설정을 따름. `challenge_settings`는 관리자 비밀번호(`admin_hash`)만 사용(날짜·제목 컬럼은 폐기).
- 관리자 화면은 상단에서 나라(KR/TH)를 고르면 모든 탭이 그 나라 기준.
- 관리자 화면 탭: 현황 / 일별 인증샷 / 완주자(특별상·CSV) / 참가자 관리 / 설정.

## 작업 규칙
- DB를 바꿀 때는 기존 마이그레이션을 고치지 말고 `0004_...sql`처럼 **새 파일을 추가**하고, 운영 DB에도 같은 SQL을 적용할 것.
- 화면 문구는 `index.html`의 `T = { ko: {...}, th: {...} }`에 있음. 한국어를 바꾸면 태국어도 같이 바꿀 것.
- 색상은 애터미 블루(`#00B5EF`)와 흰색이 기본. `:root`의 CSS 변수(`--main`, `--main2` 등)로 관리.
- HTML에 외부 JS 라이브러리를 추가하지 말 것(휴대폰·인앱 브라우저에서도 바로 열려야 함). 폰트만 Google Fonts 사용.
- 수정 후 점검: `python3 tools/preview.py` 로 화면을 확인하고, 스크립트 문법은 아래로 확인.
  ```
  python3 -c "import re;print(re.search(r'<script>(.*)</script>',open('public/index.html',encoding='utf-8').read(),re.S).group(1))" > /tmp/check.js && node --check /tmp/check.js
  ```
- 코드를 바꾼 뒤 배포까지 해야 사용자가 볼 수 있음(README의 배포 방법 참고).
- 사용자가 만든 다른 사이트(`atomy-martchange`, `atomy-8core`, `atomy-beauty`, `peel-off-mask-challenge` 등)는 건드리지 말 것. 파일을 올릴 때 사이트를 헷갈리면 다른 사이트가 덮어써짐.
