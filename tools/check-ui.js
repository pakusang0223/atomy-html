// 화면 점검: 360px 폭에서 7개 언어 × 3단계의 "가로 넘침", 언어 메뉴 클릭 가능 여부, 단계별 제목, 오류를 확인한다.
// (디자인이나 문구를 바꾼 뒤 반드시 실행. 과거에 일본어 가로 넘침·결과 화면에서 언어 메뉴가 가려지는 문제를 놓친 적이 있다.)
//
// 사용: node tools/check-ui.js "<현재 html>" [스크린샷 저장 폴더]
// 요구: Playwright (NODE_PATH=<설치 폴더>/node_modules 로 지정 가능)
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const file = process.argv[2] && path.resolve(process.argv[2]);
const outDir = process.argv[3] && path.resolve(process.argv[3]);
if (!file) { console.error('usage: node tools/check-ui.js <current.html> [screenshot-dir]'); process.exit(2); }
if (outDir) fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  let ok = true;
  console.log('| 언어 | 1단계 넘침 | 2단계 넘침 | 3단계 넘침 | 언어 메뉴 가려짐(1/2/3단계) | 오류 | 결과 |\n|---|---|---|---|---|---|---|');
  for (const lang of ['ko', 'en', 'th', 'ja', 'zh', 'bd', 'tr']) {
    const p = await browser.newPage({ viewport: { width: 360, height: 760 }, deviceScaleFactor: 2 });
    const errs = [];
    p.on('pageerror', e => errs.push(e.message));
    await p.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
    await p.goto('file://' + file + '?lang=' + lang);
    const over = () => p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    const blocked = async () => {
      await p.evaluate(() => window.scrollTo(0, 0)); await p.waitForTimeout(250);
      await p.click('#lang-toggle');
      const n = await p.evaluate(() => [...document.querySelectorAll('.lang-btn')].filter(b => { const r = b.getBoundingClientRect(); return !b.contains(document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2)); }).length);
      await p.keyboard.press('Escape');
      return n;
    };
    const o = [], bl = [];
    o.push(await over()); bl.push(await blocked());
    if (outDir) await p.screenshot({ path: path.join(outDir, `${lang}-1.png`) });
    await p.click('#fam-3'); await p.click('#btn-next-1'); await p.waitForTimeout(300);
    const heads = await p.$$('.accordion-header'); await heads[0].click();
    const chks = await p.$$('.item-checkbox'); await chks[0].click();
    o.push(await over()); bl.push(await blocked());
    if (outDir) { await p.evaluate(() => window.scrollTo(0, 0)); await p.waitForTimeout(250); await p.screenshot({ path: path.join(outDir, `${lang}-2.png`) }); }
    await p.click('#sticky-btn-txt'); await p.waitForTimeout(500);
    o.push(await over()); bl.push(await blocked());
    if (outDir) { await p.evaluate(() => window.scrollTo(0, 0)); await p.waitForTimeout(250); await p.screenshot({ path: path.join(outDir, `${lang}-3.png`) }); }
    const good = o.every(x => x === 0) && bl.every(x => x === 0) && errs.length === 0;
    ok = ok && good;
    console.log(`| ${lang} | ${o[0]} | ${o[1]} | ${o[2]} | ${bl.join('/')} | ${errs.length ? errs.join(';') : '없음'} | ${good ? '✅' : '❌'} |`);
    await p.close();
  }
  console.log(ok ? '\nRESULT: PASS' : '\nRESULT: FAIL');
  await browser.close();
  process.exit(ok ? 0 : 1);
})();
