// 제품을 추가·삭제한 뒤에도 "기존 항목의 계산 결과"가 그대로인지 검증한다.
// (tools/verify-calc.js 는 "앞 N개"를 고르기 때문에 제품을 추가하면 선택 범위가 달라져 실패한다.
//  이 도구는 기준 파일에서 고른 항목 id 를 그대로 현재 파일에서 선택해 결과를 비교한다.)
//
// 사용: node tools/verify-same-ids.js "<기준(수정 전) html>" "<현재 html>"
// 예)   node tools/verify-same-ids.js "Atomy Mart Change Calculator.v25-step2-no-desc.html" "Atomy Mart Change Calculator.html"
// 요구: Playwright (프로젝트 밖 임시 폴더에 설치해도 됨 → NODE_PATH=<그 폴더>/node_modules node tools/verify-same-ids.js ...)
//
// 비교 항목: 총합 PV · 누적 PV · 달성 횟수 · 캐시백 · 카테고리별 내역(이모지·공백 무시) + 링크/URL 파라미터 코드
// 새로 추가한 항목의 값은 이 도구가 아니라 직접 선택해서 확인한다.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const [oldF, newF] = process.argv.slice(2).map(f => f && path.resolve(f));
if (!oldF || !newF) { console.error('usage: node tools/verify-same-ids.js <baseline.html> <current.html>'); process.exit(2); }

const linkSig = f => crypto.createHash('md5').update(
  (fs.readFileSync(f, 'utf8').match(/https?:\/\/[^"' )`<>]*|\?lang=[^'"&`]*|searchParams\.[a-z]*\([^)]*\)|get\('[a-z]*'\)|set\('[a-z]*'/g) || []).sort().join('\n')
).digest('hex');

async function run(browser, file, lang, fam, ids, n) {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const errs = [];
  page.on('pageerror', e => errs.push(e.message));
  await page.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  await page.goto('file://' + file + '?lang=' + lang);
  const res = await page.evaluate(({ fam, ids, n }) => {
    document.getElementById('fam-' + fam).click();
    goToStep2();
    const list = ids || getCategories().flatMap(c => c.items).slice(0, n).map(i => i.id);
    list.forEach(id => document.getElementById('chk-' + id).click());
    goToStep3();
    const g = id => document.getElementById(id).textContent.replace(/[\u{1F000}-\u{1FAFF}☀-➿️‍]/gu, '').trim().replace(/\s+/g, ' ');
    return { list, total: g('res-total-pv'), months: g('res-months'), cum: g('res-cumulative'), times: g('res-times'),
             cash: g('res-cashback'), breakdown: g('res-breakdown').replace(/\s+/g, '') };
  }, { fam, ids, n });
  await page.close();
  return { res, errs };
}

(async () => {
  const browser = await chromium.launch();
  const langsOf = async f => { const p = await browser.newPage(); await p.route(/fonts\./, r => r.abort()); await p.goto('file://' + f); const l = await p.evaluate(() => Object.keys(LANG_DATA)); await p.close(); return l; };
  const langs = await langsOf(newF);
  const oldLangs = await langsOf(oldF);
  let ok = true;
  console.log('| 언어 | 시나리오 | 총합 PV | 캐시백 | 결과 |\n|---|---|---|---|---|');
  for (const lang of langs) {
    if (!oldLangs.includes(lang)) { console.log(`| ${lang} | (기준 파일에 없는 신규 언어 — 비교 제외) | | | ➖ |`); continue; }
    for (const [fam, n] of [[1, 12], [3, 30]]) {
      const a = await run(browser, oldF, lang, fam, null, n);
      const b = await run(browser, newF, lang, fam, a.res.list, n);
      const same = JSON.stringify(a.res) === JSON.stringify(b.res) && b.errs.length === 0;
      ok = ok && same;
      console.log(`| ${lang} | ${fam}인·기존 ${n}개 | ${b.res.total} | ${b.res.cash} | ${same ? '✅ 동일' : '❌ 다름 ' + b.errs.join(';')} |`);
    }
  }
  const link = linkSig(oldF) === linkSig(newF);
  ok = ok && link;
  console.log('\n링크·URL 파라미터 코드:', link ? '✅ 동일' : '❌ 다름');
  console.log(ok ? '\nRESULT: PASS' : '\nRESULT: FAIL');
  await browser.close();
  process.exit(ok ? 0 : 1);
})();
