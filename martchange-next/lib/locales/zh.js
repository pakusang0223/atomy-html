// AUTO-GENERATED from martchange_global_5langs/martchange_zh.html — do not hand-edit CATEGORIES/templates, re-run the extractor instead.
const locale = {
  code: 'zh',
  htmlLang: 'zh',
  title: "艾多美 换购计算器",
  fontLink: "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700;800&display=swap",
  fontFamily: "'Noto Sans SC','PingFang SC','Microsoft YaHei',system-ui,sans-serif",
  css: "\n*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}\nbody{font-family:'Noto Sans SC','PingFang SC','Microsoft YaHei',system-ui,sans-serif;background:#eef2f7;color:#1e293b;line-height:1.6;padding-bottom:80px;}\n.header{background:linear-gradient(145deg,#0086B3 0%,#00B5EF 55%,#33C4F3 100%);color:#fff;padding:28px 20px 32px;text-align:center;}\n.badge{display:inline-block;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.4);border-radius:20px;padding:4px 14px;font-size:12px;font-weight:700;letter-spacing:1px;margin-bottom:12px;}\n.header h1{font-size:20px;font-weight:800;line-height:1.45;margin-bottom:8px;}\n.header h1 span{background:#facc15;color:#1e293b;border-radius:4px;padding:0 4px;}\n.header p{font-size:13px;opacity:0.88;margin-bottom:4px;}\n.tip{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,0.15);border-radius:20px;padding:5px 14px;font-size:12px;margin-top:8px;}\n.steps{display:flex;background:#fff;border-bottom:1px solid #e2e8f0;position:sticky;top:0;z-index:100;}\n.step{flex:1;text-align:center;padding:14px 4px;font-size:12px;font-weight:700;color:#94a3b8;border-bottom:3px solid transparent;cursor:pointer;}\n.step.active{color:#0086B3;border-bottom-color:#00B5EF;}\n.step.done{color:#22c55e;border-bottom-color:#22c55e;}\n.step-num{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;border:2px solid currentColor;font-size:11px;margin-bottom:4px;}\n.section{display:none;padding:20px 16px;}\n.section.active{display:block;}\n.info-box{background:#E6F8FE;border-left:3px solid #00B5EF;border-radius:0 8px 8px 0;padding:12px 14px;margin-bottom:20px;font-size:13px;color:#006B8F;line-height:1.7;}\n.family-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px;}\n.family-btn{background:#fff;border:2px solid #e2e8f0;border-radius:14px;padding:18px 12px;text-align:center;cursor:pointer;transition:all .2s;}\n.family-btn.selected{border-color:#00B5EF;background:#E6F8FE;}\n.family-btn .icon{font-size:28px;margin-bottom:6px;}\n.family-btn .label{font-size:14px;font-weight:700;}\n.family-btn .sub{font-size:11px;color:#64748b;margin-top:2px;}\n.next-btn{width:100%;padding:16px;background:#00B5EF;color:#fff;border:none;border-radius:14px;font-size:16px;font-weight:700;cursor:pointer;}\n.next-btn:disabled{background:#cbd5e1;cursor:not-allowed;}\n.cat-header{display:flex;justify-content:space-between;align-items:center;padding:14px 16px;background:#f8fafc;border-radius:10px 10px 0 0;border:1px solid #e2e8f0;cursor:pointer;user-select:none;}\n.cat-header .cat-name{font-size:14px;font-weight:700;}\n.cat-header .cat-pv{font-size:12px;color:#0086B3;font-weight:700;}\n.cat-header .arrow{transition:transform .3s;color:#94a3b8;}\n.cat-header.open .arrow{transform:rotate(180deg);}\n.cat-body{border:1px solid #e2e8f0;border-top:none;border-radius:0 0 10px 10px;overflow:hidden;display:none;}\n.cat-body.open{display:block;}\n.select-all-row{display:flex;justify-content:flex-end;padding:8px 14px;background:#f8fafc;border-bottom:1px solid #f1f5f9;}\n.select-all-btn{font-size:12px;color:#0086B3;font-weight:600;cursor:pointer;background:none;border:none;padding:0;}\n.item-row{display:flex;align-items:center;padding:11px 14px;border-bottom:1px solid #f1f5f9;gap:10px;cursor:pointer;}\n.item-row:last-child{border-bottom:none;}\n.item-check{width:20px;height:20px;border:2px solid #cbd5e1;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s;}\n.item-check.checked{background:#00B5EF;border-color:#00B5EF;color:#fff;}\n.item-name{flex:1;font-size:13px;}\n.item-pv{font-size:12px;color:#64748b;white-space:nowrap;}\n.half-badge{background:#fef3c7;color:#d97706;border-radius:4px;padding:1px 5px;font-size:10px;font-weight:700;margin-left:4px;}\n.cat-wrap{margin-bottom:12px;}\n.result-card{background:#fff;border-radius:16px;padding:22px;margin-bottom:14px;box-shadow:0 2px 8px rgba(0,0,0,.08);}\n.result-label{font-size:12px;color:#64748b;font-weight:600;margin-bottom:4px;}\n.result-big{font-size:32px;font-weight:800;color:#1e293b;}\n.result-big span{font-size:16px;font-weight:600;color:#64748b;margin-left:4px;}\n.cashback-card{background:linear-gradient(135deg,#0086B3,#33C4F3);color:#fff;border-radius:16px;padding:22px;margin-bottom:14px;}\n.cashback-card .label{font-size:13px;opacity:.85;margin-bottom:6px;}\n.cashback-card .amount{font-size:36px;font-weight:800;}\n.cashback-card .sub{font-size:12px;opacity:.75;margin-top:6px;}\n.cat-result{border-bottom:1px solid #f1f5f9;padding:10px 0;display:flex;justify-content:space-between;font-size:13px;}\n.cat-result:last-child{border-bottom:none;}\n.reset-btn{width:100%;padding:14px;background:#f1f5f9;color:#64748b;border:none;border-radius:14px;font-size:14px;font-weight:700;cursor:pointer;margin-top:8px;}\n.share-btn{width:100%;padding:14px;background:#22c55e;color:#fff;border:none;border-radius:14px;font-size:14px;font-weight:700;cursor:pointer;margin-top:8px;}\n.pv-bar-wrap{background:#f1f5f9;border-radius:10px;overflow:hidden;height:10px;margin:10px 0 4px;}\n.pv-bar{height:100%;background:linear-gradient(90deg,#00B5EF,#66CFF5);border-radius:10px;transition:width .5s ease;}\n.pv-sub{display:flex;justify-content:space-between;font-size:11px;color:#94a3b8;}\n.age-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:20px;}\n.age-btn{background:#fff;border:2px solid #e2e8f0;border-radius:12px;padding:14px 6px;text-align:center;cursor:pointer;font-size:13px;font-weight:700;transition:all .2s;}\n.age-btn.selected{border-color:#00B5EF;background:#E6F8FE;color:#0086B3;}\n.section-label{font-size:13px;font-weight:700;color:#475569;margin:4px 0 10px;}\n",
  badge: "艾多美 · 换购计算器",
  headlineHTML: "把家庭日常消费切换到<br><span>艾多美商城</span>后<br>预计能获得多少返现？💰",
  sub1: "勾选您家庭日常使用的生活必需品",
  sub2: "根据所选商品的艾分计算预期返现金额",
  tip: "💡 艾分＝购买艾多美商品时累积的积分基准",
  stepLabels: [{"num":"1","label":"家庭成员"},{"num":"2","label":"选择商品"},{"num":"3","label":"查看结果"}],
  infoBoxHTML: "📌 适用期限根据家庭成员人数而变化。<br>\n    <strong>2人以下 → 6个月基准 &nbsp;|&nbsp; 3人以上 → 12个月基准</strong>",
  familyOptions: [{"size":1,"months":6,"icon":"🧑","label":"1人家庭","sub":"6个月适用"},{"size":2,"months":6,"icon":"👫","label":"2人家庭","sub":"6个月适用"},{"size":3,"months":12,"icon":"👨‍👩‍👧","label":"3人家庭","sub":"12个月适用"},{"size":4,"months":12,"icon":"👨‍👩‍👧‍👦","label":"4人以上","sub":"12个月适用"}],
  ageHeading: "年龄段",
  ageOptions: [{"key":"20","label":"20岁以下"},{"key":"30","label":"30多岁"},{"key":"40","label":"40多岁"},{"key":"50","label":"50多岁"},{"key":"60","label":"60岁以上"}],
  nextBtn1Text: "下一步 → 选择商品",
  nextBtn2Text: "下一步 → 查看结果",
  resetBtnText: "🔄 重新开始",
  shareBtnText: "🔗 分享结果",
  selectAllText: "全选",
  step2NoteHTML: null,
  shareTitle: "艾多美换购计算器",
  fallbackAlertText: "已复制！可以粘贴发送给朋友了。",

  CASHBACK_PER_UNIT: 315,
  CASHBACK_UNIT_PV: 3000,
  CURRENCY: "¥",
  PV_LABEL: "艾分",

  CATEGORIES: [
  {name:'💊 健康食品', half:true, items:[
    {n:'HemoHIM(3盒)',pv:1860},
    {n:'诺丽果汁(1盒)',pv:315},
    {n:'益生菌 10+(2盒)',pv:600},
    {n:'蜂胶Plus(2盒)',pv:408},
    {n:'螺旋藻(2盒)',pv:204},
    {n:'维生素C(2盒)',pv:144},
    {n:'儿童复合维生素(2盒)',pv:100},
    {n:'EVERYTIME(1盒)',pv:320},
    {n:'叶黄素(1盒)',pv:144},
    {n:'虾青素(1盒)',pv:160},
    {n:'Omega-3(1盒)',pv:100},
    {n:'钙镁片(1盒)',pv:120},
  ]},
  {name:'💄 化妆品', half:true, items:[
    {n:'Absolute CellActive套装',pv:1400},
    {n:'THE FAME套装',pv:800},
    {n:'VVID套装',pv:620},
    {n:'SKIN PLUS套装',pv:240},
    {n:'海藻胶原蛋白精华',pv:240},
    {n:'气垫粉底',pv:120},
    {n:'防晒霜SPF50+',pv:80},
    {n:'眼霜',pv:120},
    {n:'润唇套装',pv:50},
    {n:'BB霜',pv:80},
    {n:'水乳套装',pv:180},
  ]},
  {name:'🧴 护发护体', half:true, items:[
    {n:'RV护发套装(洗发水+护发素)',pv:140},
    {n:'头皮护理洗发水',pv:100},
    {n:'护发膜',pv:80},
    {n:'顺滑修护精华',pv:90},
    {n:'沐浴露',pv:70},
    {n:'洗手液',pv:30},
    {n:'护手霜',pv:50},
    {n:'身体乳',pv:80},
    {n:'牙膏',pv:30},
    {n:'牙刷套装',pv:20},
  ]},
  {name:'🏠 家居清洁', half:true, items:[
    {n:'洗衣液',pv:120},
    {n:'洗洁精',pv:60},
    {n:'柔顺剂',pv:50},
    {n:'多功能清洁剂',pv:80},
    {n:'马桶清洁剂',pv:40},
    {n:'厨房清洁喷雾',pv:60},
  ]},
  {name:'🍚 食品', half:false, items:[
    {n:'红参饮料(1盒)',pv:360},
    {n:'ABC果蔬汁(1盒)',pv:150},
    {n:'土豆拉面(1箱)',pv:120},
    {n:'麦卢卡蜂蜜',pv:180},
    {n:'坚果干果',pv:80},
  ]},
  {name:'👶 婴幼儿', half:false, items:[
    {n:'婴儿乳液',pv:80},
    {n:'婴儿洗发水',pv:60},
    {n:'儿童牙膏',pv:30},
    {n:'婴儿湿巾',pv:40},
  ]},
],

  renderCategory: (cat, ci, catPV, checked, PV_LABEL) => `
      <div class="cat-header" id="ch${ci}" onclick="toggleCat(${ci})">
        <div class="cat-name">${cat.name}${cat.half?'<span class="half-badge">×½</span>':''}</div>
        <div style="display:flex;align-items:center;gap:8px">
          <span class="cat-pv" id="cpv${ci}">${catPV>0?catPV.toLocaleString()+' '+PV_LABEL:''}</span>
          <span class="arrow" id="arr${ci}">▼</span>
        </div>
      </div>
      <div class="cat-body" id="cb${ci}">
        <div class="select-all-row"><button class="select-all-btn" onclick="selectAll(${ci},event)">全选</button></div>
        ${cat.items.map((item,ii)=>`
          <div class="item-row" onclick="toggleItem(${ci},${ii})">
            <div class="item-check ${checked[ci+'_'+ii]?'checked':''}" id="ic${ci}_${ii}">✓</div>
            <div class="item-name">${item.n}</div>
            <div class="item-pv">${item.pv.toLocaleString()} ${PV_LABEL}</div>
          </div>`).join('')}
      </div>`,

  renderResult: ({totalPV, pct, months, units, CURRENCY, CASHBACK_PER_UNIT, PV_LABEL, cashback, catRows}) => `
    <div class="result-card">
      <div class="result-label">每月${PV_LABEL}合计</div>
      <div class="result-big">${totalPV.toLocaleString()}<span>${PV_LABEL}</span></div>
      <div class="pv-bar-wrap"><div class="pv-bar" style="width:${pct}%"></div></div>
      <div class="pv-sub"><span>0</span><span>目标：3,000 ${PV_LABEL}</span></div>
    </div>
    <div class="cashback-card">
      <div class="label">📦 ${months}个月预期返现（${units}次 × ${CURRENCY}${CASHBACK_PER_UNIT}）</div>
      <div class="amount">${CURRENCY}${cashback.toLocaleString()}</div>
      <div class="sub">每3,000 ${PV_LABEL} = ${CURRENCY}${CASHBACK_PER_UNIT} 返现</div>
    </div>
    <div class="result-card">
      <div class="result-label">各类别明细</div>
      ${catRows||'<div style="color:#94a3b8;font-size:13px">尚未选择商品</div>'}
    </div>`,

  renderCatRow: (cat, pv, PV_LABEL) => `<div class="cat-result"><span>${cat.name}${cat.half?' <span style="font-size:11px;color:#d97706">(×½适用)</span>':''}</span><span style="font-weight:700">${pv.toLocaleString()} ${PV_LABEL}</span></div>`,

  buildShareText: ({familyLabel, ageLabel, totalPV, months, CURRENCY, cashback}) => `📦 艾多美换购计算结果
👪 ${familyLabel} · ${ageLabel}
💳 月度PV: ${totalPV.toLocaleString()} PV
💰 ${months}个月预计返现: ${CURRENCY}${cashback.toLocaleString()}

👉 立即测算`,
};

export default locale;
