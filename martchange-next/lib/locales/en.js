// AUTO-GENERATED from martchange_global_5langs/martchange_en.html — do not hand-edit CATEGORIES/templates, re-run the extractor instead.
const locale = {
  code: 'en',
  htmlLang: 'en',
  title: "Atomy Mart Change Calculator",
  fontLink: "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700;800&display=swap",
  fontFamily: "'Noto Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",
  css: "\n*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}\nbody{font-family:'Noto Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#eef2f7;color:#1e293b;line-height:1.5;padding-bottom:80px;}\n.header{background:linear-gradient(145deg,#0086B3 0%,#00B5EF 55%,#33C4F3 100%);color:#fff;padding:28px 20px 32px;text-align:center;}\n.badge{display:inline-block;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.4);border-radius:20px;padding:4px 14px;font-size:12px;font-weight:700;letter-spacing:1px;margin-bottom:12px;}\n.header h1{font-size:22px;font-weight:800;line-height:1.35;margin-bottom:8px;}\n.header h1 span{background:#facc15;color:#1e293b;border-radius:4px;padding:0 4px;}\n.header p{font-size:13px;opacity:0.88;margin-bottom:6px;}\n.tip{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,0.15);border-radius:20px;padding:5px 14px;font-size:12px;margin-top:8px;}\n.steps{display:flex;background:#fff;border-bottom:1px solid #e2e8f0;position:sticky;top:0;z-index:100;}\n.step{flex:1;text-align:center;padding:14px 4px;font-size:12px;font-weight:700;color:#94a3b8;border-bottom:3px solid transparent;cursor:pointer;transition:all .2s;}\n.step.active{color:#0086B3;border-bottom-color:#00B5EF;}\n.step.done{color:#22c55e;border-bottom-color:#22c55e;}\n.step-num{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;border:2px solid currentColor;font-size:11px;margin-bottom:4px;}\n.section{display:none;padding:20px 16px;}\n.section.active{display:block;}\n.card{background:#fff;border-radius:16px;padding:20px;margin-bottom:16px;box-shadow:0 1px 4px rgba(0,0,0,.06);}\n.card-title{font-size:15px;font-weight:700;margin-bottom:4px;display:flex;align-items:center;gap:8px;}\n.info-box{background:#E6F8FE;border-left:3px solid #00B5EF;border-radius:0 8px 8px 0;padding:12px 14px;margin-bottom:20px;font-size:13px;color:#006B8F;line-height:1.6;}\n.family-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px;}\n.family-btn{background:#fff;border:2px solid #e2e8f0;border-radius:14px;padding:18px 12px;text-align:center;cursor:pointer;transition:all .2s;}\n.family-btn:hover{border-color:#80DAF7;}\n.family-btn.selected{border-color:#00B5EF;background:#E6F8FE;}\n.family-btn .icon{font-size:28px;margin-bottom:6px;}\n.family-btn .label{font-size:14px;font-weight:700;}\n.family-btn .sub{font-size:11px;color:#64748b;margin-top:2px;}\n.next-btn{width:100%;padding:16px;background:#00B5EF;color:#fff;border:none;border-radius:14px;font-size:16px;font-weight:700;cursor:pointer;transition:background .2s;}\n.next-btn:disabled{background:#cbd5e1;cursor:not-allowed;}\n.next-btn:hover:not(:disabled){background:#0099CC;}\n.cat-header{display:flex;justify-content:space-between;align-items:center;padding:14px 16px;background:#f8fafc;border-radius:10px 10px 0 0;border:1px solid #e2e8f0;cursor:pointer;user-select:none;}\n.cat-header .cat-name{font-size:14px;font-weight:700;display:flex;align-items:center;gap:8px;}\n.cat-header .cat-pv{font-size:12px;color:#0086B3;font-weight:700;}\n.cat-header .arrow{transition:transform .3s;color:#94a3b8;}\n.cat-header.open .arrow{transform:rotate(180deg);}\n.cat-body{border:1px solid #e2e8f0;border-top:none;border-radius:0 0 10px 10px;overflow:hidden;display:none;}\n.cat-body.open{display:block;}\n.select-all-row{display:flex;justify-content:flex-end;padding:8px 14px;background:#f8fafc;border-bottom:1px solid #f1f5f9;}\n.select-all-btn{font-size:12px;color:#0086B3;font-weight:600;cursor:pointer;background:none;border:none;padding:0;}\n.item-row{display:flex;align-items:center;padding:11px 14px;border-bottom:1px solid #f1f5f9;gap:10px;cursor:pointer;transition:background .15s;}\n.item-row:last-child{border-bottom:none;}\n.item-row:hover{background:#f8fafc;}\n.item-check{width:20px;height:20px;border:2px solid #cbd5e1;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s;}\n.item-check.checked{background:#00B5EF;border-color:#00B5EF;color:#fff;}\n.item-name{flex:1;font-size:13px;}\n.item-pv{font-size:12px;color:#64748b;white-space:nowrap;}\n.half-badge{background:#fef3c7;color:#d97706;border-radius:4px;padding:1px 5px;font-size:10px;font-weight:700;margin-left:4px;}\n.cat-wrap{margin-bottom:12px;}\n.result-card{background:#fff;border-radius:16px;padding:22px;margin-bottom:14px;box-shadow:0 2px 8px rgba(0,0,0,.08);}\n.result-label{font-size:12px;color:#64748b;font-weight:600;margin-bottom:4px;}\n.result-big{font-size:32px;font-weight:800;color:#1e293b;}\n.result-big span{font-size:16px;font-weight:600;color:#64748b;margin-left:4px;}\n.cashback-card{background:linear-gradient(135deg,#0086B3,#33C4F3);color:#fff;border-radius:16px;padding:22px;margin-bottom:14px;}\n.cashback-card .label{font-size:13px;opacity:.85;margin-bottom:6px;}\n.cashback-card .amount{font-size:36px;font-weight:800;}\n.cashback-card .sub{font-size:12px;opacity:.75;margin-top:6px;}\n.cat-result{border-bottom:1px solid #f1f5f9;padding:10px 0;display:flex;justify-content:space-between;font-size:13px;}\n.cat-result:last-child{border-bottom:none;}\n.reset-btn{width:100%;padding:14px;background:#f1f5f9;color:#64748b;border:none;border-radius:14px;font-size:14px;font-weight:700;cursor:pointer;margin-top:8px;}\n.share-btn{width:100%;padding:14px;background:#22c55e;color:#fff;border:none;border-radius:14px;font-size:14px;font-weight:700;cursor:pointer;margin-top:8px;}\n.pv-bar-wrap{background:#f1f5f9;border-radius:10px;overflow:hidden;height:10px;margin:10px 0 4px;}\n.pv-bar{height:100%;background:linear-gradient(90deg,#00B5EF,#66CFF5);border-radius:10px;transition:width .5s ease;}\n.pv-sub{display:flex;justify-content:space-between;font-size:11px;color:#94a3b8;}\n.age-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:20px;}\n.age-btn{background:#fff;border:2px solid #e2e8f0;border-radius:12px;padding:14px 6px;text-align:center;cursor:pointer;font-size:13px;font-weight:700;transition:all .2s;}\n.age-btn.selected{border-color:#00B5EF;background:#E6F8FE;color:#0086B3;}\n.section-label{font-size:13px;font-weight:700;color:#475569;margin:4px 0 10px;}\n",
  badge: "atom美 AZA · MART CHANGE",
  headlineHTML: "If you switch your family spending<br>to <span>Atomy Mart</span>, how much<br>cashback can you earn? 💰",
  sub1: "Check the daily necessities your family uses.",
  sub2: "Estimate your cashback based on PV points.",
  tip: "💡 PV = Points accumulated from Atomy purchases",
  stepLabels: [{"num":"1","label":"Family"},{"num":"2","label":"Products"},{"num":"3","label":"Result"}],
  infoBoxHTML: "📌 The application period varies by family size.<br>\n    <strong>1–2 people → 6 months &nbsp;|&nbsp; 3+ people → 12 months</strong>",
  familyOptions: [{"size":1,"months":6,"icon":"🧑","label":"1 person","sub":"6-month basis"},{"size":2,"months":6,"icon":"👫","label":"2 people","sub":"6-month basis"},{"size":3,"months":12,"icon":"👨‍👩‍👧","label":"3 people","sub":"12-month basis"},{"size":4,"months":12,"icon":"👨‍👩‍👧‍👦","label":"4+ people","sub":"12-month basis"}],
  ageHeading: "Age group",
  ageOptions: [{"key":"20","label":"Under 30"},{"key":"30","label":"30s"},{"key":"40","label":"40s"},{"key":"50","label":"50s"},{"key":"60","label":"60+"}],
  nextBtn1Text: "Next → Check Products",
  nextBtn2Text: "Next → View Result",
  resetBtnText: "🔄 Start Over",
  shareBtnText: "🔗 Share This Result",
  selectAllText: "Select All",
  step2NoteHTML: null,
  shareTitle: "Atomy Mart Change Calculator",
  fallbackAlertText: "Copied! Paste it into a chat to share.",

  CASHBACK_PER_UNIT: 58000,
  CASHBACK_UNIT_PV: 300000,
  CURRENCY: "₩",
  PV_LABEL: "PV",

  CATEGORIES: [
  {name:'💊 Health Supplements', half:true, items:[
    {n:'HemoHIM (3box)',pv:186000},{n:'Atomy Probiotic 10+(2box)',pv:60000},
    {n:'Propolis Plus(2box)',pv:40800},{n:'Spirulina(2box)',pv:20400},
    {n:'Vitamin C(2box)',pv:14400},{n:'Kids Multivitamin(2box)',pv:10000},
    {n:'EVERYTIME(1box)',pv:32000},{n:'Lutein(1box)',pv:14400},
    {n:'Astaxanthin(1box)',pv:16000},{n:'Joint Health(1box)',pv:20000},
    {n:'Omega-3(1box)',pv:10000},{n:'Noni Juice(1box)',pv:31500},
  ]},
  {name:'💄 Skincare', half:true, items:[
    {n:'Absolute CellActive Set',pv:140000},{n:'VVID Set',pv:62000},
    {n:'THE FAME Set',pv:80000},{n:'SKIN PLUS Set',pv:24000},
    {n:'Seaweed Collagen Ampoule',pv:24000},{n:'Sunscreen SPF50+',pv:8000},
    {n:'Lip Care Set',pv:5000},{n:'Eye Cream',pv:12000},
  ]},
  {name:'🧴 Hair & Body', half:true, items:[
    {n:'Shampoo+Conditioner Set',pv:14000},{n:'Scalp Care Shampoo',pv:10000},
    {n:'Hair Treatment',pv:8000},{n:'Body Wash',pv:7000},
    {n:'Hand Wash',pv:3000},{n:'Hand Cream',pv:5000},
  ]},
  {name:'🏠 Home Care', half:true, items:[
    {n:'Laundry Detergent',pv:12000},{n:'Dish Soap',pv:6000},
    {n:'All-Purpose Cleaner',pv:8000},{n:'Fabric Softener',pv:5000},
    {n:'Toilet Cleaner',pv:4000},
  ]},
  {name:'🍚 Food', half:false, items:[
    {n:'Red Ginseng Tonic(1box)',pv:36000},{n:'ABC Juice(1box)',pv:15000},
    {n:'Instant Noodles(1box)',pv:12000},{n:'Kids Snack Set',pv:8000},
    {n:'Manuka Honey',pv:18000},
  ]},
  {name:'👶 Baby & Kids', half:false, items:[
    {n:'Baby Lotion',pv:8000},{n:'Baby Shampoo',pv:6000},
    {n:'Diapers(1pack)',pv:20000},{n:'Kids Toothpaste',pv:3000},
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
        <div class="select-all-row"><button class="select-all-btn" onclick="selectAll(${ci},event)">Select All</button></div>
        ${cat.items.map((item,ii)=>`
          <div class="item-row" onclick="toggleItem(${ci},${ii})">
            <div class="item-check ${checked[ci+'_'+ii]?'checked':''}" id="ic${ci}_${ii}">✓</div>
            <div class="item-name">${item.n}</div>
            <div class="item-pv">${item.pv.toLocaleString()} PV</div>
          </div>`).join('')}
      </div>`,

  renderResult: ({totalPV, pct, months, units, CURRENCY, CASHBACK_PER_UNIT, PV_LABEL, cashback, catRows}) => `
    <div class="result-card">
      <div class="result-label">Monthly PV Total</div>
      <div class="result-big">${totalPV.toLocaleString()}<span>PV</span></div>
      <div class="pv-bar-wrap"><div class="pv-bar" style="width:${pct}%"></div></div>
      <div class="pv-sub"><span>0</span><span>Target: 300,000 PV</span></div>
    </div>
    <div class="cashback-card">
      <div class="label">📦 ${months}-month estimated cashback (${units} times × ${CURRENCY}${CASHBACK_PER_UNIT.toLocaleString()})</div>
      <div class="amount">${CURRENCY}${cashback.toLocaleString()}</div>
      <div class="sub">Every 300,000 PV = ${CURRENCY}${CASHBACK_PER_UNIT.toLocaleString()} cashback</div>
    </div>
    <div class="result-card">
      <div class="result-label">Category Breakdown</div>
      ${catRows||'<div style="color:#94a3b8;font-size:13px">No items selected</div>'}
    </div>`,

  renderCatRow: (cat, pv, PV_LABEL) => `<div class="cat-result"><span>${cat.name}${cat.half?' <span style="font-size:11px;color:#d97706">(×½ applied)</span>':''}</span><span style="font-weight:700">${pv.toLocaleString()} PV</span></div>`,

  buildShareText: ({familyLabel, ageLabel, totalPV, months, CURRENCY, cashback}) => `📦 Atomy Mart Change Result
👪 ${familyLabel} · ${ageLabel}
💳 Monthly PV: ${totalPV.toLocaleString()} PV
💰 ${months}-month estimated cashback: ${CURRENCY}${cashback.toLocaleString()}

👉 Check yours`,
};

export default locale;
