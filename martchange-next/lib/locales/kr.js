// AUTO-GENERATED from martchange_global_5langs/martchange_kr.html — do not hand-edit CATEGORIES/templates, re-run the extractor instead.
const locale = {
  code: 'kr',
  htmlLang: 'ko',
  title: "애터미 마트체인지 계산기",
  fontLink: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;800&display=swap",
  fontFamily: "'Noto Sans KR',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",
  css: "\n*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}\nbody{font-family:'Noto Sans KR',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#eef2f7;color:#1e293b;line-height:1.5;padding-bottom:80px;}\n.header{background:linear-gradient(145deg,#1341a8 0%,#2563eb 55%,#3b82f6 100%);color:#fff;padding:28px 20px 32px;text-align:center;}\n.badge{display:inline-block;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.4);border-radius:20px;padding:4px 14px;font-size:12px;font-weight:700;letter-spacing:1px;margin-bottom:12px;}\n.header h1{font-size:22px;font-weight:800;line-height:1.4;margin-bottom:8px;}\n.header h1 span{background:#facc15;color:#1e293b;border-radius:4px;padding:0 4px;}\n.header p{font-size:13px;opacity:0.88;margin-bottom:6px;}\n.tip{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,0.15);border-radius:20px;padding:5px 14px;font-size:12px;margin-top:8px;}\n.steps{display:flex;background:#fff;border-bottom:1px solid #e2e8f0;position:sticky;top:0;z-index:100;}\n.step{flex:1;text-align:center;padding:14px 4px;font-size:12px;font-weight:700;color:#94a3b8;border-bottom:3px solid transparent;cursor:pointer;transition:all .2s;}\n.step.active{color:#2563eb;border-bottom-color:#2563eb;}\n.step.done{color:#22c55e;border-bottom-color:#22c55e;}\n.step-num{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;border:2px solid currentColor;font-size:11px;margin-bottom:4px;}\n.section{display:none;padding:20px 16px;}\n.section.active{display:block;}\n.card{background:#fff;border-radius:16px;padding:20px;margin-bottom:16px;box-shadow:0 1px 4px rgba(0,0,0,.06);}\n.card-title{font-size:15px;font-weight:700;margin-bottom:4px;display:flex;align-items:center;gap:8px;}\n.info-box{background:#eff6ff;border-left:3px solid #2563eb;border-radius:0 8px 8px 0;padding:12px 14px;margin-bottom:20px;font-size:13px;color:#1e40af;line-height:1.6;}\n.family-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px;}\n.family-btn{background:#fff;border:2px solid #e2e8f0;border-radius:14px;padding:18px 12px;text-align:center;cursor:pointer;transition:all .2s;}\n.family-btn:hover{border-color:#93c5fd;}\n.family-btn.selected{border-color:#2563eb;background:#eff6ff;}\n.family-btn .icon{font-size:28px;margin-bottom:6px;}\n.family-btn .label{font-size:14px;font-weight:700;}\n.family-btn .sub{font-size:11px;color:#64748b;margin-top:2px;}\n.next-btn{width:100%;padding:16px;background:#2563eb;color:#fff;border:none;border-radius:14px;font-size:16px;font-weight:700;cursor:pointer;transition:background .2s;}\n.next-btn:disabled{background:#cbd5e1;cursor:not-allowed;}\n.next-btn:hover:not(:disabled){background:#1d4ed8;}\n.cat-header{display:flex;justify-content:space-between;align-items:center;padding:14px 16px;background:#f8fafc;border-radius:10px 10px 0 0;border:1px solid #e2e8f0;cursor:pointer;user-select:none;}\n.cat-header .cat-name{font-size:14px;font-weight:700;display:flex;align-items:center;gap:8px;}\n.cat-header .cat-pv{font-size:12px;color:#2563eb;font-weight:700;}\n.cat-header .arrow{transition:transform .3s;color:#94a3b8;}\n.cat-header.open .arrow{transform:rotate(180deg);}\n.cat-body{border:1px solid #e2e8f0;border-top:none;border-radius:0 0 10px 10px;overflow:hidden;display:none;}\n.cat-body.open{display:block;}\n.select-all-row{display:flex;justify-content:flex-end;padding:8px 14px;background:#f8fafc;border-bottom:1px solid #f1f5f9;}\n.select-all-btn{font-size:12px;color:#2563eb;font-weight:600;cursor:pointer;background:none;border:none;padding:0;}\n.item-row{display:flex;align-items:center;padding:11px 14px;border-bottom:1px solid #f1f5f9;gap:10px;cursor:pointer;transition:background .15s;}\n.item-row:last-child{border-bottom:none;}\n.item-row:hover{background:#f8fafc;}\n.item-check{width:20px;height:20px;border:2px solid #cbd5e1;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s;}\n.item-check.checked{background:#2563eb;border-color:#2563eb;color:#fff;}\n.item-name{flex:1;font-size:13px;}\n.item-pv{font-size:12px;color:#64748b;white-space:nowrap;}\n.half-badge{background:#fef3c7;color:#d97706;border-radius:4px;padding:1px 5px;font-size:10px;font-weight:700;margin-left:4px;}\n.cat-wrap{margin-bottom:12px;}\n.result-card{background:#fff;border-radius:16px;padding:22px;margin-bottom:14px;box-shadow:0 2px 8px rgba(0,0,0,.08);}\n.result-label{font-size:12px;color:#64748b;font-weight:600;margin-bottom:4px;}\n.result-big{font-size:32px;font-weight:800;color:#1e293b;}\n.result-big span{font-size:16px;font-weight:600;color:#64748b;margin-left:4px;}\n.cashback-card{background:linear-gradient(135deg,#1341a8,#3b82f6);color:#fff;border-radius:16px;padding:22px;margin-bottom:14px;}\n.cashback-card .label{font-size:13px;opacity:.85;margin-bottom:6px;}\n.cashback-card .amount{font-size:36px;font-weight:800;}\n.cashback-card .sub{font-size:12px;opacity:.75;margin-top:6px;}\n.cat-result{border-bottom:1px solid #f1f5f9;padding:10px 0;display:flex;justify-content:space-between;font-size:13px;}\n.cat-result:last-child{border-bottom:none;}\n.reset-btn{width:100%;padding:14px;background:#f1f5f9;color:#64748b;border:none;border-radius:14px;font-size:14px;font-weight:700;cursor:pointer;margin-top:8px;}\n.share-btn{width:100%;padding:14px;background:#22c55e;color:#fff;border:none;border-radius:14px;font-size:14px;font-weight:700;cursor:pointer;margin-top:8px;}\n.pv-bar-wrap{background:#f1f5f9;border-radius:10px;overflow:hidden;height:10px;margin:10px 0 4px;}\n.pv-bar{height:100%;background:linear-gradient(90deg,#2563eb,#60a5fa);border-radius:10px;transition:width .5s ease;}\n.pv-sub{display:flex;justify-content:space-between;font-size:11px;color:#94a3b8;}\n.age-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:20px;}\n.age-btn{background:#fff;border:2px solid #e2e8f0;border-radius:12px;padding:14px 6px;text-align:center;cursor:pointer;font-size:13px;font-weight:700;transition:all .2s;}\n.age-btn.selected{border-color:#2563eb;background:#eff6ff;color:#1341a8;}\n.section-label{font-size:13px;font-weight:700;color:#475569;margin:4px 0 10px;}\n",
  badge: "atom美 AZA · 마트체인지",
  headlineHTML: "가족 생활비를<br><span>애터미 마트</span>로 바꾸면<br>캐시백은 얼마나 될까요? 💰",
  sub1: "평소 사용하는 생필품을 체크해보세요.",
  sub2: "선택한 상품의 PV를 기준으로 예상 캐시백을 계산합니다.",
  tip: "💡 PV＝애터미 상품 구매 시 적립되는 포인트 기준",
  stepLabels: [{"num":"1","label":"가족구성"},{"num":"2","label":"상품선택"},{"num":"3","label":"결과보기"}],
  infoBoxHTML: "📌 가족 구성에 따라 적용 기간이 달라집니다.<br>\n    <strong>2인 이하 → 6개월 기준 &nbsp;|&nbsp; 3인 이상 → 12개월 기준</strong>",
  familyOptions: [{"size":1,"months":6,"icon":"🧑","label":"1인가구","sub":"6개월 적용"},{"size":2,"months":6,"icon":"👫","label":"2인가구","sub":"6개월 적용"},{"size":3,"months":12,"icon":"👨‍👩‍👧","label":"3인가구","sub":"12개월 적용"},{"size":4,"months":12,"icon":"👨‍👩‍👧‍👦","label":"4인 이상","sub":"12개월 적용"}],
  ageHeading: "연령대",
  ageOptions: [{"key":"20","label":"20대 이하"},{"key":"30","label":"30대"},{"key":"40","label":"40대"},{"key":"50","label":"50대"},{"key":"60","label":"60대 이상"}],
  nextBtn1Text: "다음 → 상품 체크",
  nextBtn2Text: "다음 → 결과보기",
  resetBtnText: "🔄 처음부터 다시하기",
  shareBtnText: "🔗 결과 공유하기",
  selectAllText: "전체선택",
  step2NoteHTML: null,
  shareTitle: "애터미 마트체인지 계산기",
  fallbackAlertText: "결과가 복사되었습니다! 카카오톡 등에 붙여넣어 보내보세요.",

  CASHBACK_PER_UNIT: 58000,
  CASHBACK_UNIT_PV: 300000,
  CURRENCY: "₩",
  PV_LABEL: "PV",

  CATEGORIES: [
  {name:'💊 건강기능식품', half:true, items:[
    {n:'헤모힘(3박스)',pv:186000},{n:'애터미 유산균 10+(2박스)',pv:60000},
    {n:'프로폴리스 플러스(2박스)',pv:40800},{n:'스피루리나(2박스)',pv:20400},
    {n:'비타민C(2박스)',pv:14400},{n:'어린이 멀티비타민(2박스)',pv:10000},
    {n:'에브리타임(1박스)',pv:32000},{n:'루테인(1박스)',pv:14400},
    {n:'아스타잔틴(1박스)',pv:16000},{n:'관절건강(1박스)',pv:20000},
    {n:'오메가3(1박스)',pv:10000},{n:'노니주스(1박스)',pv:31500},
  ]},
  {name:'💄 스킨케어', half:true, items:[
    {n:'앱솔루트 셀액티브 세트',pv:140000},{n:'VVID 세트',pv:62000},
    {n:'더페임 세트',pv:80000},{n:'스킨플러스 세트',pv:24000},
    {n:'해조콜라겐 앰플',pv:24000},{n:'선크림 SPF50+',pv:8000},
    {n:'립케어 세트',pv:5000},{n:'아이크림',pv:12000},
  ]},
  {name:'🧴 헤어&바디', half:true, items:[
    {n:'샴푸+린스 세트',pv:14000},{n:'두피케어 샴푸',pv:10000},
    {n:'헤어트리트먼트',pv:8000},{n:'바디워시',pv:7000},
    {n:'핸드워시',pv:3000},{n:'핸드크림',pv:5000},
  ]},
  {name:'🏠 홈케어', half:true, items:[
    {n:'세탁세제',pv:12000},{n:'주방세제',pv:6000},
    {n:'다목적 클리너',pv:8000},{n:'섬유유연제',pv:5000},
    {n:'화장실 세제',pv:4000},
  ]},
  {name:'🍚 식품', half:false, items:[
    {n:'홍삼진액(1박스)',pv:36000},{n:'ABC주스(1박스)',pv:15000},
    {n:'라면(1박스)',pv:12000},{n:'어린이 간식세트',pv:8000},
    {n:'마누카꿀',pv:18000},
  ]},
  {name:'👶 유아동', half:false, items:[
    {n:'유아로션',pv:8000},{n:'유아샴푸',pv:6000},
    {n:'기저귀(1팩)',pv:20000},{n:'어린이 치약',pv:3000},
  ]},
],

  renderCategory: (cat, ci, catPV, checked, PV_LABEL) => `
      <div class="cat-header" id="ch${ci}" onclick="toggleCat(${ci})">
        <div class="cat-name">${cat.name}</div>
        <div style="display:flex;align-items:center;gap:8px">
          <span class="cat-pv" id="cpv${ci}">${catPV>0?catPV.toLocaleString()+' PV':''}</span>
          ${cat.half?'<span class="half-badge">×½</span>':''}
          <span class="arrow" id="arr${ci}">▼</span>
        </div>
      </div>
      <div class="cat-body" id="cb${ci}">
        <div class="select-all-row"><button class="select-all-btn" onclick="selectAll(${ci},event)">전체선택</button></div>
        ${cat.items.map((item,ii)=>`
          <div class="item-row" onclick="toggleItem(${ci},${ii})">
            <div class="item-check ${checked[ci+'_'+ii]?'checked':''}" id="ic${ci}_${ii}">✓</div>
            <div class="item-name">${item.n}</div>
            <div class="item-pv">${item.pv.toLocaleString()} PV</div>
          </div>`).join('')}
      </div>`,

  renderResult: ({totalPV, pct, months, units, CURRENCY, CASHBACK_PER_UNIT, PV_LABEL, cashback, catRows}) => `
    <div class="result-card">
      <div class="result-label">월간 PV 합계</div>
      <div class="result-big">${totalPV.toLocaleString()}<span>PV</span></div>
      <div class="pv-bar-wrap"><div class="pv-bar" style="width:${pct}%"></div></div>
      <div class="pv-sub"><span>0</span><span>목표: 30만 PV</span></div>
    </div>
    <div class="cashback-card">
      <div class="label">📦 ${months}개월간 예상 캐시백 (${units}회 × ${CURRENCY}${CASHBACK_PER_UNIT.toLocaleString()})</div>
      <div class="amount">${CURRENCY}${cashback.toLocaleString()}</div>
      <div class="sub">30만 PV마다 ${CURRENCY}${CASHBACK_PER_UNIT.toLocaleString()} 캐시백</div>
    </div>
    <div class="result-card">
      <div class="result-label">카테고리별 내역</div>
      ${catRows||'<div style="color:#94a3b8;font-size:13px">선택된 상품이 없습니다</div>'}
    </div>`,

  renderCatRow: (cat, pv, PV_LABEL) => `<div class="cat-result"><span>${cat.name}${cat.half?' <span style="font-size:11px;color:#d97706">(×½ 적용)</span>':''}</span><span style="font-weight:700">${pv.toLocaleString()} PV</span></div>`,

  buildShareText: ({familyLabel, ageLabel, totalPV, months, CURRENCY, cashback}) => `📦 애터미 마트체인지 계산 결과
👪 ${familyLabel} · ${ageLabel}
💳 월간 PV: ${totalPV.toLocaleString()} PV
💰 ${months}개월 예상 캐시백: ${CURRENCY}${cashback.toLocaleString()}

👉 나도 확인하기`,
};

export default locale;
