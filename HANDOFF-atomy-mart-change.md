# Atomy Mart Change Calculator — 인수인계 (새 채팅 시작용)

작성: 2026-11-16 · 브랜치: `claude/atomy-mart-typography-contrast-xz8xus` (※ main에는 아직 병합되지 않음)

## 1. 프로젝트 한 줄 요약
애터미 마트체인지 계산기. **단일 HTML 파일** `Atomy Mart Change Calculator.html` 하나에 7개 언어(ko, en, th, ja, zh, bd, tr)가 들어 있고,
가족 수 선택 → 생활용품 체크 → PV 합계·누적 PV·달성 횟수·예상 캐시백 계산 → 결과 링크 복사 흐름이다. 대상 사용자는 40~60대 회원.

## 2. 파일 / 버전 (같은 폴더, 되돌리기용)
| 파일 | 의미 |
|---|---|
| `Atomy Mart Change Calculator.before.html` | **맨 처음 원본** (디자인 변경 전) |
| `….v1-typography.html` | 글씨 크기·대비만 개선한 버전 |
| `….v2-design.html` | 브랜드 블루 새 디자인 (튀르키예어 추가 전) |
| `….v3-turkish.html` | **지금 상태 = 새 작업의 비교 기준(baseline)** — 튀르키예어 포함 |
| `Atomy Mart Change Calculator.html` | 작업 대상 (현재는 v3와 동일) |
| `tools/verify-calc.js` | 수정 전후 계산·링크 동일성 자동 검증 |
| `.claude/skills/ui-ux-pro-max/` | UI/UX 디자인 스킬 (설치됨) |

다른 파일(`index.html`, `martchange-next/`, `martchange_global_5langs/` 등)은 건드리지 않았고 이번 작업 범위가 아니다.

## 3. 지켜온 원칙 (새 디자인에서도 유지 권장)
1. 계산 로직·수식·입력 항목·결과 값 불변. 링크 주소와 `?lang=`, `fam`, `items`, `opts` URL 파라미터 코드 불변.
2. 수정 전에 현재 파일을 `.vN-…html` 로 복사해 백업.
3. 수정 후 반드시 검증: `node tools/verify-calc.js "<백업파일>" "Atomy Mart Change Calculator.html"` → `RESULT: PASS` 확인
   (7개 언어 × 2 시나리오의 계산 결과 + 링크 코드 비교). 화면은 360px 폭에서 가로 넘침이 없는지 Playwright 스크린샷으로 확인.
4. 외부에서 받은 코드(예: ui-ux-pro-max 의 Python 스크립트)는 보안 검사로 실행이 차단될 수 있음 → SKILL.md 의 지침·데이터(CSV)를 읽어 참고하는 방식으로 사용.

## 4. 현재 디자인 (v3)
- CSS 변수: `--brand:#00B5EF`(애터미 블루) `--primary:#0077B6` `--primary-dk:#005A8C` `--ink:#10283f` `--muted:#3d5266` `--soft:#e8f6fd` `--accent:#FFC21A`
- 터치 영역: 버튼 54~58px, 체크박스 28px, 항목 행 64px+, 가족 버튼 124px. 본문 16px, 항목명 16px, 결과 숫자 20px, 캐시백 44px.
- 상단: 로고(base64 내장) → 언어 버튼(flex-wrap, 7개라 3줄로 나뉨) → 밝은 헤더. 언어 바는 sticky 아님.
- 알려진 디자인 이슈: 언어 버튼 3줄(2·3·2)이라 첫 화면이 길다 / 헤더가 길어 가족 선택이 아래로 밀림.

## 5. 코드 구조 (내용 추가할 때 알아야 할 것)
- `LANG_DATA` : 언어별 설정 + `ui` 문구. 키: `pvLabel, currency, threshold, cashbackPerHit, showCashback, halfCats(50% 반영 카테고리 id 목록)`.
- `KO_CATS / JA_CATS / TH_CATS / EN_CATS / ZH_CATS / TR_CATS` : 카테고리 → items `{id, name, pv}` (선택형은 `type:'select', options:[{label,pv}]`). **item id 는 전 언어에서 유일**해야 함 (URL 공유에 쓰임).
- `getCategories()` 의 switch 에 언어 매핑 (bd 는 KO_CATS 공유).
- 새 언어 추가 체크리스트: ① `LANG_DATA` 항목 ② `*_CATS` ③ `getCategories()` case ④ `init()` 의 허용 언어 배열 ⑤ 언어 버튼(`.lang-bar`) ⑥ 필요 시 `body.lang-xx` 폰트 CSS.
- `showCashback:false` 이면 캐시백 금액 대신 "달성 횟수"를 표시 (en, tr 이 이 방식).

## 6. 튀르키예어(tr) 현황 / 미결 사항
- tr.atomy.com 스크린샷 기준 제품 33종 반영: Gıda & İçecek 3, Takviye Edici Gıda 10(50%), Kişisel Bakım 3, Yüz Maskeleri 4(50%), Ev & Yaşam 9, Medi-cook 4(50%).
- **미결 ①** 튀르키예 "300,000 PV 달성 1회당 캐시백 TL 금액" 미확정 → 현재 횟수만 표시. 금액 확정 시 `cashbackPerHit` 입력 + `showCashback:true` 전환.
- **미결 ②** 달성 기준 300,000 PV, 6/12개월 규칙을 다른 나라와 같다고 가정함 — 확인 필요.
- **미결 ③** 스크린샷이 각 카테고리의 일부만 보였음. 빠진 제품: Kişisel Bakım 의 Ağız/Saç/El 하위탭(치약·샴푸 등), 각 카테고리 상단 제품, 기타 카테고리. 맨 위부터 스크롤한 스크린샷 필요.
- **미결 ④** "Marine Jel Maske (Nemlendirici & Yatıştırıcı)" 이름 끝 "*..." 가 잘려 "10 Adet"로 추정 입력. "Eco Kilitli Poşet 500 PV~", "Eco Kesimli Streç Film 2.000 PV~" 의 "~"(옵션별 상이 여부) 미확인.
- 50% 반영 분류(건강식품·마스크·Medi-cook)는 기존 ko/en 규칙을 따라 임의 분류한 것 — 정책 확인 후 `halfCats` 수정.

## 7. 새 채팅에서 먼저 정할 것
1. 새 디자인 방향 (참고 사이트·원하는 분위기·색, 또는 ui-ux-pro-max 기준으로 시안 2~3개 제안 받기)
2. "내용 추가"의 범위 (제품 추가? 새 섹션? 새 문구? 새 언어?) — 문구·구조 변경 허용 여부 (이전 답: 허용)
3. 완료 후 PR 생성 여부 (현재 main 미병합)

## 8. 새 채팅 첫 메시지 (복사해서 사용)
```
저장소 pakusang0223/atomy-html 의 브랜치 claude/atomy-mart-typography-contrast-xz8xus 에서 작업합니다. (main 아님)
먼저 HANDOFF-atomy-mart-change.md 를 읽고 현재 상태를 3줄로 요약해 주세요.

작업 대상: Atomy Mart Change Calculator.html
이번 작업: ① 새 디자인으로 변경 ② 내용 추가 (구체 내용은 요약 후 알려드립니다)

규칙
- 시작 전에 현재 파일을 "Atomy Mart Change Calculator.v3-turkish.html" 과 동일하게 유지(백업은 이미 있음), 새 백업이 필요하면 .v4-… 로 복사
- 계산 로직·링크·URL 파라미터 코드는 바꾸지 말 것
- ui-ux-pro-max 스킬(.claude/skills/ui-ux-pro-max)을 참고해 시안부터 보여주고, 확정 후 적용
- 수정 후 node tools/verify-calc.js 로 전후 검증(PASS), 360px 화면 스크린샷 확인
- 결과를 표와 5줄 요약으로 알려주고, 브라우저에서 볼 수 있게 열어주세요
```
