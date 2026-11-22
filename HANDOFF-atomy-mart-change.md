# Atomy Mart Change Calculator — 인수인계 (새 채팅 시작용)

갱신: 2026-11-22 · 브랜치: `claude/atomy-mart-typography-contrast-xz8xus` (※ main에는 아직 병합되지 않음) · 마지막 커밋 `19476ee`

## 1. 프로젝트 한 줄 요약
애터미 마트체인지 계산기. **단일 HTML 파일** `Atomy Mart Change Calculator.html` 하나에 7개 언어(ko, en, th, ja, zh, bd, tr)가 들어 있고,
가족 수(+선택 사항 연령대) → 생활용품 체크 → PV 합계·누적 PV·달성 횟수·예상 캐시백 → 결과 링크 복사 흐름이다. 대상 사용자는 40~60대 회원.
파일 하나로 열린다(사진·글꼴·아이콘 모두 파일 안에 내장, 약 450KB).

## 2. 지금 해야 할 일
**일본어(ja) 제품이 모두 들어 있지 않다 → `JA_CATS` 보완.**
- 현재 `JA_CATS`: ja_food 9개, ja_health 21개, ja_cosmetics 19개, ja_hairbody 15개, ja_home 8개. 일본 설정: 통화 円, 달성 기준 300,000 PV, 1회 캐시백 6,000円.
- 일본 사이트(jp.atomy.com) 제품 목록 스크린샷을 **카테고리별로 맨 위부터** 받아서 빠진 제품(이름·PV)을 추가한다. 일부만 보이는 스크린샷은 빠지는 제품이 생긴다(터키어 때 겪음).
- 각 나라는 제품 구성과 환율 계산이 다르므로 **나라별 데이터는 따로 둔다**(한국 데이터를 복사하지 않는다).

## 3. 파일 / 버전
| 파일 | 의미 |
|---|---|
| `Atomy Mart Change Calculator.html` | **작업 대상 = 현재 최종본** (v25 와 동일) |
| `….before.html` | 맨 처음 원본(디자인 변경 전) |
| `….v1-typography.html` / `v2-design` / `v3-turkish` | 예전 단계 백업 |
| `….v4-design.html` | **디자인 적용 직후(제품 추가 전) 기준선** — 검증 비교용 |
| `….v24-pill-blue.html`, `….v25-step2-no-desc.html` | 최근 스냅샷. 새 작업 전에 현재 파일을 `.v26-…html` 로 복사해 백업 |
| `tools/verify-calc.js` | 예전 검증(앞 N개 선택). **제품을 추가하면 선택 범위가 달라져 FAIL** → 아래 `verify-same-ids.js` 사용 |
| `tools/verify-same-ids.js` | **제품 추가 후 검증**: 기준 파일의 항목 id 를 그대로 선택해 계산·링크가 같은지 비교 |
| `tools/check-ui.js` | **화면 점검**: 360px 가로 넘침, 언어 메뉴 클릭 가능 여부, 오류 (7개 언어 × 3단계) |

중간 백업(v5~v23)은 로컬 폴더에만 있고 저장소에는 없다.

## 4. 반드시 지킬 원칙
1. **계산 로직·수식·링크 주소·`?lang=`, `fam`, `items`, `opts` URL 파라미터 코드는 바꾸지 않는다.** 제품(데이터)을 추가·수정하는 것은 허용.
2. **item id 는 전 언어에서 유일**해야 한다(URL 공유에 사용). 새 id 예: `f15`, `f16`, `h13`(아자몰 쌀·골드 에그·컬리케일).
3. 수정 전에 현재 파일을 `.vN-…html` 로 복사해 백업.
4. 수정 후 **둘 다 PASS** 확인:
   - `node tools/verify-same-ids.js "<기준 html>" "Atomy Mart Change Calculator.html"` (제품 추가 후에는 이것. 새 제품의 합계는 직접 선택해 확인)
   - `node tools/check-ui.js "Atomy Mart Change Calculator.html" [스크린샷 폴더]` (360px, 7개 언어)
   - Playwright 는 저장소에 없다 → 임시 폴더에서 `npm i playwright` 후 `NODE_PATH=<그 폴더>/node_modules node tools/…` 로 실행(브라우저는 `npx playwright install chromium`).
5. 디자인을 바꿀 때는 **일본어·중국어(띄어쓰기 없음), 태국어·벵골어(글자 높이)까지 확인**한다. 과거에 일본어 가로 넘침(`word-break:keep-all`)과 결과 화면에서 언어 메뉴가 프레임에 가려지는 문제를 놓친 적이 있다.
6. 시안(목업)을 먼저 보여주고 확정 후 적용하는 방식으로 진행해 왔다.

## 5. 현재 디자인·구조 (제품 작업 때 알아둘 것)
- **상단**: 로고 + 언어 드롭다운(`#lang-toggle`, `.lang-menu`, 버튼은 `.lang-btn[data-lang]`). `.topbar` 는 `z-index:500` (프레임 위로 메뉴가 보이게 함).
- **색**: 애터미 블루 `#00B0E8`(로고에서 추출), `--primary:#0077B6`, 초록 CTA `#15803D`, 강조 노랑 `#FFC21A`. 알약(마트체인지)은 1·2단계 파랑, 3단계 흰색.
- **아이콘**: 이모지 대신 SVG 라인 아이콘. (a) 인라인 `<symbol>` 스프라이트, (b) CSS 마스크 아이콘(`:is(#header-pv-note,#family-q,…)::before`). **카테고리 이름 맨 앞의 이모지(🍚💊🧴…)는 아이콘 선택용 키(`CAT_ICONS`/`catIcon()`)이므로 지우지 말 것**(화면에는 표시되지 않음).
- **단계별 제목/설명**: 스크립트 끝쪽 `HEADER COPY PER STEP` 블록의 `COPY` 객체(7개 언어 × 1~3단계). 2단계 설명 줄은 CSS 로 숨김(카드 제목과 중복). 
- **연령대 선택**(1단계, 선택 사항): `AGE GROUP` 블록. 결과 화면에만 표시하며 **계산·공유 링크에는 들어가지 않는다**.
- **첫 화면 배경**: `.bg1`(마트 통로 사진, `--photo` data URI) + 반투명 프레임(`body:has(#section-1.active) …`).
- **결과 화면 배경**: `.pbg` 에 제품 타일 20장(4열 × 5줄, -9° 사선) + 로고 블루 반투명 프레임. 타일은 사용자가 준 제품 이미지를 자르지 않고 여백만 채워 사용.
- **글꼴**: 한국어 Noto Sans KR 등은 Google Fonts, **태국어는 LINE Seed Sans TH(OFL)를 파일 안에 내장**(Thai+Latin 부분집합 woff). 일본어·중국어는 `body.lang-ja *, body.lang-zh *{word-break:normal}` 로 글자 사이 줄바꿈 허용.
- 데이터: `LANG_DATA`(언어별 설정 + `ui` 문구), `KO_CATS / JA_CATS / TH_CATS / EN_CATS / ZH_CATS / TR_CATS`(카테고리 → items `{id,name,pv}`, 선택형은 `type:'select', options:[{label,pv}]`), `getCategories()` switch(bd 는 KO_CATS 공유 — **한국어 제품 목록이 방글라데시 화면에도 그대로 나옴**).
- `showCashback:false`(en, tr)이면 캐시백 금액 대신 "달성 횟수" 표시. `halfCats` 는 50% 반영 카테고리 id 목록.
- 새 언어를 추가한다면: `LANG_DATA` · `*_CATS` · `getCategories()` · `init()` 허용 언어 배열 · 언어 메뉴 버튼 · `COPY`·`AGE` 번역 · 필요 시 `body.lang-xx` 폰트 CSS.

## 6. 배포 / 공유 링크 / 노션
- **라이브**: Netlify 사이트 `atomy-martchange` (siteId `b2a7e49e-3327-4cb3-8630-4bb21d51326e`) = `https://atomy-martchange.netlify.app/?lang=ko|en|th|ja|zh|bd|tr`. (이전 한국어 전용 페이지를 이 새 버전으로 덮어씀. 되돌리려면 Netlify 배포 기록에서 롤백.)
- **배포 방법**: index.html 하나만 든 임시 폴더를 만들고(`cp "Atomy Mart Change Calculator.html" <폴더>/index.html`), Netlify MCP `deploy-site`(siteId 지정)가 알려주는 `npx -y @netlify/mcp@latest --site-id … --proxy-path "…"` 명령을 그 폴더에서 실행. 끝난 뒤 라이브 파일의 해시가 로컬과 같은지 확인.
- **노션** "마트체인지 링크노트"(page id `34dcd716-9e46-80bb-85c8-ed61e4d200d2`): 7개 언어 링크를 위 새 주소로 교체 완료(터키어 줄 추가됨). 관리자 링크(`atomy-martchange-next.netlify.app/admin`)와 뷰티 체험단 링크는 별도 프로젝트라 그대로. 터키어 홍보 문구 블록은 아직 없음.
- `atomy-martchange-next`(Next.js 포팅, `martchange-next/`)는 별개로 계속 살아 있다. 이번 HTML 과는 코드가 다르다.

## 7. 미결 사항
- **번역 초안 확인 필요(원어민)**: 한국어 외 6개 언어의 1~3단계 제목·설명, 연령대 문구.
- **튀르키예(tr)**: ① 300,000 PV 달성 1회당 캐시백 TL 금액 미확정(현재 횟수만 표시) ② 달성 기준·6/12개월 규칙이 다른 나라와 같다는 가정 ③ 카테고리 일부 제품 누락 가능(스크린샷 일부만 확인) ④ 제품명 "Marine Jel Maske …" 끝이 잘려 "10 Adet" 추정, "Eco Kilitli Poşet 500 PV~" 등의 "~"(옵션별 상이 여부) 미확인 ⑤ 50% 반영 분류(건강식품·마스크·Medi-cook)는 임의 분류.
- 컬리케일 PV 11,000 은 **1박스 기준**으로 확정(1/2/3/6박스별 PV는 미확인).
- 1단계 제목/설명은 한국어만 사용자가 준 문구이고, 나머지 언어는 번역 초안이다.

## 8. 작업 환경 메모
- 저장소 폴더가 iCloud 안에 있어 `.git/refs` 에 `main 2` 같은 **중복 파일이 다시 생길 수 있다** → `git fetch`가 "bad object refs/heads/main 2"로 실패하면 그 파일을 `.git` 밖으로 옮긴다.
- 보안 점검이 긴 heredoc(`python3 - <<EOF`) 명령을 가끔 오탐으로 막는다 → 스크립트는 파일로 저장(Write)해서 실행.
- 외부 사이트(Unsplash/Pexels 등)는 브라우저에서 막혀 있다 → 사진·이미지는 사용자가 채팅에 넣어 준다.

## 9. 새 채팅 첫 메시지 (복사해서 사용)
```
저장소 pakusang0223/atomy-html 의 브랜치 claude/atomy-mart-typography-contrast-xz8xus 에서 작업합니다. (main 아님)
먼저 HANDOFF-atomy-mart-change.md 를 읽고 현재 상태를 3줄로 요약해 주세요.

작업: Atomy Mart Change Calculator.html 의 일본어(ja) 제품 보완 — JA_CATS 에 빠진 제품 추가.
일본 제품 목록 스크린샷은 요약 후 카테고리별로 보내겠습니다.

규칙
- 시작 전에 현재 파일을 .v26-… 로 백업
- 계산 로직·링크·URL 파라미터 코드는 바꾸지 말 것, item id 는 전 언어에서 유일하게
- 수정 후 tools/verify-same-ids.js 와 tools/check-ui.js 가 둘 다 PASS 인지 확인 (Playwright 는 임시 폴더에 설치)
- 결과를 표와 5줄 요약으로 알려주고, 확인 후 커밋·푸시·배포(Netlify atomy-martchange) 여부를 물어봐 주세요
```
