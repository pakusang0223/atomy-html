// AUTO-GENERATED from martchange_global_5langs/martchange_bd.html — do not hand-edit CATEGORIES/templates, re-run the extractor instead.
const locale = {
  code: 'bd',
  htmlLang: 'bn',
  title: "Atomy মার্ট চেঞ্জ ক্যালকুলেটর",
  fontLink: "https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;700;800&display=swap",
  fontFamily: "'Noto Sans Bengali','Noto Sans',system-ui,sans-serif",
  css: "\n*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}\nbody{font-family:'Noto Sans Bengali','Noto Sans',system-ui,sans-serif;background:#eef2f7;color:#1e293b;line-height:1.7;padding-bottom:80px;}\n.header{background:linear-gradient(145deg,#0086B3 0%,#00B5EF 55%,#33C4F3 100%);color:#fff;padding:28px 20px 32px;text-align:center;}\n.badge{display:inline-block;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.4);border-radius:20px;padding:4px 14px;font-size:12px;font-weight:700;letter-spacing:1px;margin-bottom:12px;}\n.header h1{font-size:19px;font-weight:800;line-height:1.5;margin-bottom:8px;}\n.header h1 span{background:#facc15;color:#1e293b;border-radius:4px;padding:0 4px;}\n.header p{font-size:13px;opacity:0.88;margin-bottom:4px;}\n.tip{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,0.15);border-radius:20px;padding:5px 14px;font-size:12px;margin-top:8px;}\n.steps{display:flex;background:#fff;border-bottom:1px solid #e2e8f0;position:sticky;top:0;z-index:100;}\n.step{flex:1;text-align:center;padding:14px 4px;font-size:12px;font-weight:700;color:#94a3b8;border-bottom:3px solid transparent;cursor:pointer;}\n.step.active{color:#0086B3;border-bottom-color:#00B5EF;}\n.step.done{color:#22c55e;border-bottom-color:#22c55e;}\n.step-num{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;border:2px solid currentColor;font-size:11px;margin-bottom:4px;}\n.section{display:none;padding:20px 16px;}\n.section.active{display:block;}\n.info-box{background:#E6F8FE;border-left:3px solid #00B5EF;border-radius:0 8px 8px 0;padding:12px 14px;margin-bottom:20px;font-size:13px;color:#006B8F;line-height:1.7;}\n.family-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px;}\n.family-btn{background:#fff;border:2px solid #e2e8f0;border-radius:14px;padding:18px 12px;text-align:center;cursor:pointer;transition:all .2s;}\n.family-btn.selected{border-color:#00B5EF;background:#E6F8FE;}\n.family-btn .icon{font-size:28px;margin-bottom:6px;}\n.family-btn .label{font-size:14px;font-weight:700;}\n.family-btn .sub{font-size:11px;color:#64748b;margin-top:2px;}\n.next-btn{width:100%;padding:16px;background:#00B5EF;color:#fff;border:none;border-radius:14px;font-size:16px;font-weight:700;cursor:pointer;}\n.next-btn:disabled{background:#cbd5e1;cursor:not-allowed;}\n.cat-header{display:flex;justify-content:space-between;align-items:center;padding:14px 16px;background:#f8fafc;border-radius:10px 10px 0 0;border:1px solid #e2e8f0;cursor:pointer;user-select:none;}\n.cat-header .cat-name{font-size:14px;font-weight:700;}\n.cat-header .cat-pv{font-size:12px;color:#0086B3;font-weight:700;}\n.cat-header .arrow{transition:transform .3s;color:#94a3b8;}\n.cat-header.open .arrow{transform:rotate(180deg);}\n.cat-body{border:1px solid #e2e8f0;border-top:none;border-radius:0 0 10px 10px;overflow:hidden;display:none;}\n.cat-body.open{display:block;}\n.select-all-row{display:flex;justify-content:flex-end;padding:8px 14px;background:#f8fafc;border-bottom:1px solid #f1f5f9;}\n.select-all-btn{font-size:12px;color:#0086B3;font-weight:600;cursor:pointer;background:none;border:none;padding:0;}\n.item-row{display:flex;align-items:center;padding:11px 14px;border-bottom:1px solid #f1f5f9;gap:10px;cursor:pointer;}\n.item-row:last-child{border-bottom:none;}\n.item-check{width:20px;height:20px;border:2px solid #cbd5e1;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s;}\n.item-check.checked{background:#00B5EF;border-color:#00B5EF;color:#fff;}\n.item-name{flex:1;font-size:13px;}\n.item-pv{font-size:12px;color:#64748b;white-space:nowrap;}\n.half-badge{background:#fef3c7;color:#d97706;border-radius:4px;padding:1px 5px;font-size:10px;font-weight:700;margin-left:4px;}\n.cat-wrap{margin-bottom:12px;}\n.result-card{background:#fff;border-radius:16px;padding:22px;margin-bottom:14px;box-shadow:0 2px 8px rgba(0,0,0,.08);}\n.result-label{font-size:12px;color:#64748b;font-weight:600;margin-bottom:4px;}\n.result-big{font-size:32px;font-weight:800;color:#1e293b;}\n.result-big span{font-size:16px;font-weight:600;color:#64748b;margin-left:4px;}\n.cashback-card{background:linear-gradient(135deg,#0086B3,#33C4F3);color:#fff;border-radius:16px;padding:22px;margin-bottom:14px;}\n.cashback-card .label{font-size:13px;opacity:.85;margin-bottom:6px;}\n.cashback-card .amount{font-size:36px;font-weight:800;}\n.cashback-card .sub{font-size:12px;opacity:.75;margin-top:6px;}\n.cat-result{border-bottom:1px solid #f1f5f9;padding:10px 0;display:flex;justify-content:space-between;font-size:13px;}\n.cat-result:last-child{border-bottom:none;}\n.reset-btn{width:100%;padding:14px;background:#f1f5f9;color:#64748b;border:none;border-radius:14px;font-size:14px;font-weight:700;cursor:pointer;margin-top:8px;}\n.share-btn{width:100%;padding:14px;background:#22c55e;color:#fff;border:none;border-radius:14px;font-size:14px;font-weight:700;cursor:pointer;margin-top:8px;}\n.pv-bar-wrap{background:#f1f5f9;border-radius:10px;overflow:hidden;height:10px;margin:10px 0 4px;}\n.pv-bar{height:100%;background:linear-gradient(90deg,#00B5EF,#66CFF5);border-radius:10px;transition:width .5s ease;}\n.pv-sub{display:flex;justify-content:space-between;font-size:11px;color:#94a3b8;}\n.age-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:20px;}\n.age-btn{background:#fff;border:2px solid #e2e8f0;border-radius:12px;padding:14px 6px;text-align:center;cursor:pointer;font-size:13px;font-weight:700;transition:all .2s;}\n.age-btn.selected{border-color:#00B5EF;background:#E6F8FE;color:#0086B3;}\n.section-label{font-size:13px;font-weight:700;color:#475569;margin:4px 0 10px;}\n.kr-note{background:#fefce8;border:1px solid #fde047;border-radius:8px;padding:10px 14px;font-size:12px;color:#854d0e;margin-bottom:16px;}\n",
  badge: "atom美 AZA · মার্ট চেঞ্জ",
  headlineHTML: "পারিবারিক খরচ<br><span>Atomy Mart</span>-এ পরিবর্তন করলে<br>কত ক্যাশব্যাক পাওয়া যাবে? 💰",
  sub1: "আপনার পরিবারের নিত্যপ্রয়োজনীয় পণ্যগুলো বেছে নিন।",
  sub2: "নির্বাচিত পণ্যের PV অনুযায়ী প্রত্যাশিত ক্যাশব্যাক হিসাব করুন।",
  tip: "💡 PV = Atomy পণ্য ক্রয়ের সময় জমা হওয়া পয়েন্ট",
  stepLabels: [{"num":"১","label":"পরিবার"},{"num":"২","label":"পণ্য"},{"num":"৩","label":"ফলাফল"}],
  infoBoxHTML: "📌 পরিবারের সদস্য সংখ্যা অনুযায়ী প্রয়োগের মেয়াদ পরিবর্তিত হয়।<br>\n    <strong>২ জন বা কম → ৬ মাস ভিত্তিক &nbsp;|&nbsp; ৩ জন বা বেশি → ১২ মাস ভিত্তিক</strong>",
  familyOptions: [{"size":1,"months":6,"icon":"🧑","label":"১ জন","sub":"৬ মাস প্রযোজ্য"},{"size":2,"months":6,"icon":"👫","label":"২ জন","sub":"৬ মাস প্রযোজ্য"},{"size":3,"months":12,"icon":"👨‍👩‍👧","label":"৩ জন","sub":"১২ মাস প্রযোজ্য"},{"size":4,"months":12,"icon":"👨‍👩‍👧‍👦","label":"৪ জন বা বেশি","sub":"১২ মাস প্রযোজ্য"}],
  ageHeading: "আপনার বয়স",
  ageOptions: [{"key":"20","label":"৩০ এর নিচে"},{"key":"30","label":"৩০-৩৯"},{"key":"40","label":"৪০-৪৯"},{"key":"50","label":"৫০-৫৯"},{"key":"60","label":"৬০+"}],
  nextBtn1Text: "পরবর্তী → পণ্য বেছে নিন",
  nextBtn2Text: "পরবর্তী → ফলাফল দেখুন",
  resetBtnText: "🔄 আবার শুরু করুন",
  shareBtnText: "🔗 ফলাফল শেয়ার করুন",
  selectAllText: "সব নির্বাচন করুন",
  step2NoteHTML: "※ বাংলাদেশে Atomy কর্পোরেশন এখনো চালু হয়নি। পণ্যের PV মান কোরিয়া ভিত্তিক এবং ক্যাশব্যাক কোরিয়ান ওন (₩) এ দেখানো হবে।",
  shareTitle: "Atomy Mart Change Calculator",
  fallbackAlertText: "কপি হয়েছে! চ্যাটে পেস্ট করে পাঠিয়ে দিন।",

  CASHBACK_PER_UNIT: 58000,
  CASHBACK_UNIT_PV: 300000,
  CURRENCY: "₩",
  PV_LABEL: "PV",

  CATEGORIES: [
  {name:'💊 স্বাস্থ্য সম্পূরক', half:true, items:[
    {n:'HemoHIM (৩ বক্স)',pv:186000},
    {n:'Probiotic 10+ (২ বক্স)',pv:60000},
    {n:'Propolis Plus (২ বক্স)',pv:40800},
    {n:'Spirulina (২ বক্স)',pv:20400},
    {n:'Vitamin C (২ বক্স)',pv:14400},
    {n:'শিশু মাল্টিভিটামিন (২ বক্স)',pv:10000},
    {n:'EVERYTIME (১ বক্স)',pv:32000},
    {n:'লুটেইন (১ বক্স)',pv:14400},
    {n:'অ্যাস্টাক্সান্থিন (১ বক্স)',pv:16000},
    {n:'Omega-3 (১ বক্স)',pv:10000},
    {n:'নোনি জুস (১ বক্স)',pv:31500},
    {n:'ক্যালসিয়াম & ম্যাগনেসিয়াম (১ বক্স)',pv:12000},
  ]},
  {name:'💄 স্কিনকেয়ার', half:true, items:[
    {n:'Absolute CellActive সেট',pv:140000},
    {n:'THE FAME সেট',pv:80000},
    {n:'VVID সেট',pv:62000},
    {n:'SKIN PLUS সেট',pv:24000},
    {n:'Seaweed Collagen Ampoule',pv:24000},
    {n:'সানস্ক্রিন SPF50+',pv:8000},
    {n:'আই ক্রিম',pv:12000},
    {n:'লিপ কেয়ার সেট',pv:5000},
    {n:'টোনার & ইমালশন সেট',pv:18000},
  ]},
  {name:'🧴 চুল ও শরীরের যত্ন', half:true, items:[
    {n:'RV হেয়ার কেয়ার সেট (শ্যাম্পু+কন্ডিশনার)',pv:14000},
    {n:'স্কাল্প কেয়ার শ্যাম্পু',pv:10000},
    {n:'হেয়ার ট্রিটমেন্ট মাস্ক',pv:8000},
    {n:'সিল্কি রিপেয়ার সেরাম',pv:9000},
    {n:'বডি ওয়াশ',pv:7000},
    {n:'হ্যান্ড ওয়াশ',pv:3000},
    {n:'হ্যান্ড ক্রিম',pv:5000},
    {n:'বডি লোশন',pv:8000},
    {n:'টুথপেস্ট',pv:3000},
    {n:'টুথব্রাশ সেট',pv:2000},
  ]},
  {name:'🏠 গৃহস্থালি পরিষ্কার', half:true, items:[
    {n:'লন্ড্রি ডিটার্জেন্ট',pv:12000},
    {n:'ডিশ সোপ',pv:6000},
    {n:'ফেব্রিক সফটনার',pv:5000},
    {n:'মাল্টিপার্পাস ক্লিনার',pv:8000},
    {n:'টয়লেট ক্লিনার',pv:4000},
    {n:'কিচেন স্প্রে',pv:6000},
  ]},
  {name:'🍚 খাদ্য পণ্য', half:false, items:[
    {n:'রেড জিনসেং টনিক (১ বক্স)',pv:36000},
    {n:'ABC জুস (১ বক্স)',pv:15000},
    {n:'ইন্সট্যান্ট নুডলস (১ বক্স)',pv:12000},
    {n:'মানুকা হানি',pv:18000},
    {n:'নাটস & ড্রাই ফ্রুটস',pv:8000},
  ]},
  {name:'👶 শিশু পণ্য', half:false, items:[
    {n:'বেবি লোশন',pv:8000},
    {n:'বেবি শ্যাম্পু',pv:6000},
    {n:'শিশু টুথপেস্ট',pv:3000},
    {n:'বেবি ওয়াইপস',pv:4000},
  ]},
],

  renderCategory: (cat, ci, catPV, checked, PV_LABEL) => `
      <div class="cat-header" id="ch${ci}" onclick="toggleCat(${ci})">
        <div class="cat-name">${cat.name}${cat.half?'<span class="half-badge">×½</span>':''}</div>
        <div style="display:flex;align-items:center;gap:8px">
          <span class="cat-pv" id="cpv${ci}">${catPV>0?catPV.toLocaleString()+' PV':''}</span>
          <span class="arrow" id="arr${ci}">▼</span>
        </div>
      </div>
      <div class="cat-body" id="cb${ci}">
        <div class="select-all-row"><button class="select-all-btn" onclick="selectAll(${ci},event)">সব নির্বাচন করুন</button></div>
        ${cat.items.map((item,ii)=>`
          <div class="item-row" onclick="toggleItem(${ci},${ii})">
            <div class="item-check ${checked[ci+'_'+ii]?'checked':''}" id="ic${ci}_${ii}">✓</div>
            <div class="item-name">${item.n}</div>
            <div class="item-pv">${item.pv.toLocaleString()} PV</div>
          </div>`).join('')}
      </div>`,

  renderResult: ({totalPV, pct, months, units, CURRENCY, CASHBACK_PER_UNIT, PV_LABEL, cashback, catRows}) => `
    <div class="result-card">
      <div class="result-label">মাসিক মোট PV</div>
      <div class="result-big">${totalPV.toLocaleString()}<span>PV</span></div>
      <div class="pv-bar-wrap"><div class="pv-bar" style="width:${pct}%"></div></div>
      <div class="pv-sub"><span>০</span><span>লক্ষ্যমাত্রা: ৩,০০,০০০ PV</span></div>
    </div>
    <div class="cashback-card">
      <div class="label">📦 ${months} মাসের আনুমানিক ক্যাশব্যাক (${units} বার × ${CURRENCY}${CASHBACK_PER_UNIT.toLocaleString()})</div>
      <div class="amount">${CURRENCY}${cashback.toLocaleString()}</div>
      <div class="sub">প্রতি ৩,০০,০০০ PV = ${CURRENCY}${CASHBACK_PER_UNIT.toLocaleString()} ক্যাশব্যাক (কোরিয়া ভিত্তিক)</div>
    </div>
    <div class="result-card">
      <div class="result-label">বিভাগ অনুযায়ী বিবরণ</div>
      ${catRows||'<div style="color:#94a3b8;font-size:13px">কোনো পণ্য নির্বাচিত হয়নি</div>'}
    </div>`,

  renderCatRow: (cat, pv, PV_LABEL) => `<div class="cat-result"><span>${cat.name}${cat.half?' <span style="font-size:11px;color:#d97706">(×½ প্রযোজ্য)</span>':''}</span><span style="font-weight:700">${pv.toLocaleString()} PV</span></div>`,

  buildShareText: ({familyLabel, ageLabel, totalPV, months, CURRENCY, cashback}) => `📦 Atomy মার্ট চেঞ্জ ফলাফল
👪 ${familyLabel} · ${ageLabel}
💳 মাসিক PV: ${totalPV.toLocaleString()} PV
💰 ${months} মাসের আনুমানিক ক্যাশব্যাক: ${CURRENCY}${cashback.toLocaleString()}

👉 নিজে চেক করুন`,
};

export default locale;
