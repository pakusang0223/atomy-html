# 1일 1등록 챌린지

매일 **회원등록 인증**과 **PV 인증(1만PV 이상)** 사진을 올리고, 두 가지를 모두 올린 날을 완료로 세는 챌린지 웹앱이에요.
한국어·태국어, 관리자 화면 포함. 휴대폰 브라우저와 카카오톡·LINE 인앱 브라우저에서 바로 열려요.

## 주소 (배포 후)

| 용도 | 주소 |
|---|---|
| 한국어 참가자 | `https://daily-1reg-challenge.netlify.app/?lang=ko` |
| 태국어 참가자 | `https://daily-1reg-challenge.netlify.app/?lang=th` |
| 관리자 | `https://daily-1reg-challenge.netlify.app/?admin=1` |

## 폴더

```
public/index.html            앱 전체 (이 폴더가 그대로 배포됨)
supabase/migrations/         DB 스키마·함수 (0001 → 0006 순서)
design/                      로고 원본·파랑 로고
tools/make_logo.py           로고 → 파랑 투명 PNG/base64
tools/preview.py             가짜 데이터로 화면 스크린샷 생성
netlify.toml                 배포 설정
CLAUDE.md                    Claude Code용 작업 안내
```

## 쓰는 법 (운영자)

1. 관리자 주소로 들어가 비밀번호를 입력해요.
2. 관리자 화면 맨 위에서 **🇰🇷 한국 / 🇹🇭 태국**을 고르고, **⚙️ 설정**에서 그 나라의 시작일·종료일, PV 목표, 완주 기준 일수, 제목·소개 문구를 저장해요. 설정은 나라별로 따로 저장되고(한국과 태국은 동시에 하지 않아도 돼요), 현황·일별 인증샷·완주자·참가자 관리도 선택한 나라 기준으로 보여요. 기간을 설정하기 전에는 인증이 막혀요.
3. 참가자 주소(한국어/태국어)를 카카오톡·LINE에 공유해요. **참가자는 링크에서 직접 이름을 입력**해 시작해요. 관리자가 참가자를 입력할 필요가 없어요.
4. 관리자 화면 탭
   - **📊 현황**: 오늘 완료/일부 인원, 참가자별 진행(완료일수·사진 수), 사진 확인·삭제
   - **📸 일별 인증샷**: 날짜별로 전원의 등록·PV 사진을 한 번에 보기, "미완료자만 보기"
   - **🏅 완주자**: 완주 기준을 채운 참가자, 특별상(후보·수상) 표시, 전체 현황 CSV
   - **👥 참가자 관리**: 이름 변경, 같은 사람 계정 합치기, 선택 삭제(사진 없는 참가자 한 번에 선택)
   - **⚙️ 설정**: 기간·문구·완주 기준·비밀번호

### 이름·중복 규칙
- 이름은 띄어쓰기·영문 대소문자를 구분하지 않아요. "홍길동"과 "홍 길동", "John Kim"과 "john kim"은 같은 이름이에요.
- 이미 있는 이름을 입력하면 "이미 등록된 이름이에요. 이어서 인증할까요?" 확인 후 그 계정으로 들어가요. 연장자 대신 인증하는 경우도 이 방법으로 들어가요.
- 참가자 화면 위쪽의 **이름 변경 · 로그아웃** 버튼으로 다른 이름으로 들어갈 수 있어요.
- 같은 사람이 이름을 다르게 입력해 계정이 쪼개지면 관리자 > 참가자 관리에서 **합치기**. 합쳐진 옛 이름으로 들어와도 합쳐진 계정으로 이어져요.

### 인증 규칙
- 회원등록 인증과 PV 인증이 따로 있고, 둘 다 1장 이상이어야 그날이 완료예요.
- 사진은 자정까지 몇 장이든 올릴 수 있어요. 자기 사진은 당일에만 직접 지울 수 있어요.
- 하루의 기준은 한국 참가자는 한국 시간, 태국 참가자는 태국 시간 자정이에요.

## 개발 환경 만들기 (처음부터 새로 만들 때)

이미 운영 중인 Supabase·Netlify가 있으면 이 부분은 건너뛰어도 돼요.

1. **Supabase 새 프로젝트**를 만들어요(리전 서울 권장).
2. SQL Editor에서 `supabase/migrations/0001_init.sql` → `0002` → `0003` → `0004` → `0005` → `0006` 순서로 실행해요.
   `0001`의 `CHANGE_ME_ADMIN_PASSWORD`는 먼저 실제 관리자 비밀번호로 바꿔요.
3. Project Settings > API에서 **Project URL**과 **anon(공개) 키**를 복사해, `public/index.html` 상단의 `SB`, `KEY`에 넣어요.
4. **Netlify**에서 새 사이트를 만들고 아래 방법으로 배포해요.

## 배포

### 방법 A. 끌어다 놓기 (가장 쉬움, PC 권장)
1. app.netlify.com 로그인 → `daily-1reg-challenge` 사이트 → **Deploys** 탭
2. `public` 폴더(또는 `index.html` 하나만 넣은 폴더)를 끌어다 놓아요.
   - 폴더 안에 `index.html`이 바로 보이게 올려야 해요.

### 방법 B. 명령어 (Netlify CLI)
```bash
npm i -g netlify-cli
netlify login
netlify deploy --prod --dir=public --site=01dd8155-0ed6-4c21-b456-828506b7b3dd
```

배포 후 확인:
- 참가자 주소가 열리고 이름 목록이 나오는지
- 관리자 주소에서 비밀번호로 로그인되는지
- 휴대폰에서 사진 한 장을 올려 보고, 관리자 일일 현황에 보이는지(그 뒤 지우기)

## 화면 확인 (서버 없이)

```bash
pip install playwright && playwright install chromium
python3 tools/preview.py
# → tools/out/ko.png, th.png, admin.png 생성 (예시 이름·데이터로 그린 그림)
```

## 로고 바꾸기

`design/atomy-logo-original.jpg`(검은 배경에 흰 글씨)를 새 이미지로 교체한 뒤:
```bash
python3 tools/make_logo.py
```
`design/atomy-logo-blue.png`가 만들어지고, base64 문자열(`design/atomy-logo-blue.b64.txt`)이 출력돼요.
`public/index.html`의 `<img class="logo" src="data:image/png;base64,...">` 부분을 이 문자열로 교체해요.

## DB 변경하기

기존 마이그레이션 파일은 고치지 말고 `supabase/migrations/0004_이름.sql`처럼 **새 파일**을 추가해요.
그리고 같은 SQL을 Supabase SQL Editor(또는 Claude Code의 Supabase 연결)로 운영 DB에도 실행해요.

### 함수 목록
| 함수 | 쓰는 곳 |
|---|---|
| `get_public_state()` | 참가자 화면: 설정·참가자·오늘 날짜 |
| `get_my_certs(p_id)` | 내 인증 목록 |
| `add_certification(p_id, p_kind, p_path, p_note)` | 인증 등록(기간·날짜는 서버가 검사) |
| `delete_my_cert(p_id, p_cert)` | 내 사진 삭제(당일만) |
| `get_me(p_id)` | 저장된 id로 내 계정 확인(합쳐진 옛 id 포함) |
| `enter_name(p_name, p_country)` | 이름 입력: 같은 이름이면 기존 계정, 없으면 새로 만듦 |
| `admin_login / admin_overview / admin_day_view / admin_get_certs` | 관리자 조회 |
| `admin_save_country_settings / admin_delete_cert / admin_change_password` | 관리자 변경(설정은 나라별) |
| `admin_rename_participant / admin_merge_participants / admin_delete_participants / admin_set_award` | 참가자 관리·특별상 |

## 알아둘 점 (한계)

- 참가자는 이름만 입력해서 들어와요(로그인 없음). 링크를 받은 사람은 이미 등록된 다른 사람 이름으로도 들어가 인증할 수 있어요(연장자 대신 인증하는 경우를 위해 의도한 방식).
- 사진 저장소(`certs`)는 공개 주소 방식이라, 사진 주소를 아는 사람은 열 수 있어요.
- 관리자 비밀번호는 관리자 화면에서 바꿀 수 있어요. 초기 비밀번호는 꼭 바꿔 주세요.
- 무료 플랜의 Supabase는 일정 기간 사용이 없으면 일시 정지될 수 있어요. 챌린지 직전에 한 번 열어 확인하세요.
- 사진은 올릴 때 긴 변 1600px, JPEG로 줄여서 저장해요(휴대폰 사진 용량 절약).
