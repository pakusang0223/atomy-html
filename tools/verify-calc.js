// 디자인 수정 전후로 "계산 결과"와 "링크"가 같은지 검증한다.
// 사용: node tools/verify-calc.js "<수정 전 html>" "<수정 후 html>"
// 예)   node tools/verify-calc.js "Atomy Mart Change Calculator.v2-design.html" "Atomy Mart Change Calculator.html"
// 요구: Playwright (Claude Code 클라우드 환경에는 기본 설치됨)
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const [oldF, newF] = process.argv.slice(2).map(f => path.resolve(f));
if (!oldF || !newF) { console.error('usage: node tools/verify-calc.js <old.html> <new.html>'); process.exit(2); }

const linkSig = f => crypto.createHash('md5').update(
  (fs.readFileSync(f, 'utf8').match(/https?:\/\/[^"' )`<>]*|\?lang=[^'"&`]*|searchParams\.[a-z]*\([^)]*\)|get\('[a-z]*'\)|set\('[a-z]*'/g) || []).sort().join('\n')
).digest('hex');

async function calc(browser, file, lang, fam, n) {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const errs = [];
  page.on('pageerror', e => errs.push(e.message));
  await page.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  await page.goto('file://' + file + '?lang=' + lang);
  const res = await page.evaluate(({ fam, n }) => {
    document.getElementById('fam-' + fam).click();
    goToStep2();
    const ids = getCategories().flatMap(c => c.items).slice(0, n).map(i => i.id);
    ids.forEach(id => document.getElementById('chk-' + id).click());
    goToStep3();
    const g = id => document.getElementById(id).textContent.trim().replace(/\s+/g, ' ');
    return { items: ids.length, total: g('res-total-pv'), months: g('res-months'), cum: g('res-cumulative'),
             times: g('res-times'), cash: g('res-cashback'), breakdown: g('res-breakdown') };
  }, { fam, n });
  await page.close();
  return { res, errs };
}

(async () => {
  const browser = await chromium.launch();
  const langsOf = async f => { const p = await browser.newPage(); await p.route(/fonts\./, r => r.abort()); await p.goto('file://' + f); const l = await p.evaluate(() => Object.keys(LANG_DATA)); await p.close(); return l; };
  const langs = (await langsOf(newF)).filter(l => true);
  const oldLangs = await langsOf(oldF);
  let allOk = true;
  console.log('| 언어 | 시나리오 | 총합 PV | 개월 | 누적 PV | 횟수 | 캐시백 | 결과 |\n|---|---|---|---|---|---|---|---|');
  for (const lang of langs) {
    if (!oldLangs.includes(lang)) { console.log(`| ${lang} | (수정 전 파일에 없는 신규 언어 — 비교 제외) | | | | | | ➖ |`); continue; }
    for (const [fam, n] of [[1, 12], [3, 30]]) {
      const a = await calc(browser, oldF, lang, fam, n), b = await calc(browser, newF, lang, fam, n);
      const ok = JSON.stringify(a.res) === JSON.stringify(b.res) && b.errs.length === 0;
      allOk = allOk && ok;
      console.log(`| ${lang} | ${fam}인·앞 ${n}개 | ${b.res.total} | ${b.res.months} | ${b.res.cum} | ${b.res.times} | ${b.res.cash} | ${ok ? '✅ 동일' : '❌ 다름 ' + b.errs.join(';')} |`);
    }
  }
  const linkOk = linkSig(oldF) === linkSig(newF);
  console.log('\n링크·URL 파라미터 코드:', linkOk ? '✅ 동일' : '❌ 다름');
  console.log(allOk && linkOk ? '\nRESULT: PASS' : '\nRESULT: FAIL');
  await browser.close();
  process.exit(allOk && linkOk ? 0 : 1);
})();
