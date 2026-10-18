// AUTO-GENERATED from martchange_global_5langs/martchange_th.html — do not hand-edit CATEGORIES/templates, re-run the extractor instead.
const locale = {
  code: 'th',
  htmlLang: 'th',
  title: "เครื่องคำนวณ อะโทมี่ มาร์ทเชนจ์",
  fontLink: "https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;700;800&display=swap",
  fontFamily: "'Noto Sans Thai',system-ui,sans-serif",
  css: "\n*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}\nbody{font-family:'Noto Sans Thai',system-ui,sans-serif;background:#eef2f7;color:#1e293b;line-height:1.6;padding-bottom:80px;}\n.header{background:linear-gradient(145deg,#0086B3 0%,#00B5EF 55%,#33C4F3 100%);color:#fff;padding:28px 20px 32px;text-align:center;}\n.badge{display:inline-block;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.4);border-radius:20px;padding:4px 14px;font-size:12px;font-weight:700;letter-spacing:1px;margin-bottom:12px;}\n.header h1{font-size:20px;font-weight:800;line-height:1.45;margin-bottom:8px;}\n.header h1 span{background:#facc15;color:#1e293b;border-radius:4px;padding:0 4px;}\n.header p{font-size:13px;opacity:0.88;margin-bottom:4px;}\n.tip{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,0.15);border-radius:20px;padding:5px 14px;font-size:12px;margin-top:8px;}\n.steps{display:flex;background:#fff;border-bottom:1px solid #e2e8f0;position:sticky;top:0;z-index:100;}\n.step{flex:1;text-align:center;padding:14px 4px;font-size:12px;font-weight:700;color:#94a3b8;border-bottom:3px solid transparent;cursor:pointer;}\n.step.active{color:#0086B3;border-bottom-color:#00B5EF;}\n.step.done{color:#22c55e;border-bottom-color:#22c55e;}\n.step-num{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;border:2px solid currentColor;font-size:11px;margin-bottom:4px;}\n.section{display:none;padding:20px 16px;}\n.section.active{display:block;}\n.card{background:#fff;border-radius:16px;padding:20px;margin-bottom:16px;box-shadow:0 1px 4px rgba(0,0,0,.06);}\n.info-box{background:#E6F8FE;border-left:3px solid #00B5EF;border-radius:0 8px 8px 0;padding:12px 14px;margin-bottom:20px;font-size:13px;color:#006B8F;line-height:1.7;}\n.family-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px;}\n.family-btn{background:#fff;border:2px solid #e2e8f0;border-radius:14px;padding:18px 12px;text-align:center;cursor:pointer;transition:all .2s;}\n.family-btn.selected{border-color:#00B5EF;background:#E6F8FE;}\n.family-btn .icon{font-size:28px;margin-bottom:6px;}\n.family-btn .label{font-size:14px;font-weight:700;}\n.family-btn .sub{font-size:11px;color:#64748b;margin-top:2px;}\n.next-btn{width:100%;padding:16px;background:#00B5EF;color:#fff;border:none;border-radius:14px;font-size:16px;font-weight:700;cursor:pointer;}\n.next-btn:disabled{background:#cbd5e1;cursor:not-allowed;}\n.cat-header{display:flex;justify-content:space-between;align-items:center;padding:14px 16px;background:#f8fafc;border-radius:10px 10px 0 0;border:1px solid #e2e8f0;cursor:pointer;user-select:none;}\n.cat-header .cat-name{font-size:14px;font-weight:700;display:flex;align-items:center;gap:8px;}\n.cat-header .cat-pv{font-size:12px;color:#0086B3;font-weight:700;}\n.cat-header .arrow{transition:transform .3s;color:#94a3b8;}\n.cat-header.open .arrow{transform:rotate(180deg);}\n.cat-body{border:1px solid #e2e8f0;border-top:none;border-radius:0 0 10px 10px;overflow:hidden;display:none;}\n.cat-body.open{display:block;}\n.select-all-row{display:flex;justify-content:flex-end;padding:8px 14px;background:#f8fafc;border-bottom:1px solid #f1f5f9;}\n.select-all-btn{font-size:12px;color:#0086B3;font-weight:600;cursor:pointer;background:none;border:none;padding:0;}\n.item-row{display:flex;align-items:center;padding:11px 14px;border-bottom:1px solid #f1f5f9;gap:10px;cursor:pointer;}\n.item-row:last-child{border-bottom:none;}\n.item-check{width:20px;height:20px;border:2px solid #cbd5e1;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s;}\n.item-check.checked{background:#00B5EF;border-color:#00B5EF;color:#fff;}\n.item-name{flex:1;font-size:13px;}\n.item-pv{font-size:12px;color:#64748b;white-space:nowrap;}\n.half-badge{background:#fef3c7;color:#d97706;border-radius:4px;padding:1px 5px;font-size:10px;font-weight:700;margin-left:4px;}\n.cat-wrap{margin-bottom:12px;}\n.result-card{background:#fff;border-radius:16px;padding:22px;margin-bottom:14px;box-shadow:0 2px 8px rgba(0,0,0,.08);}\n.result-label{font-size:12px;color:#64748b;font-weight:600;margin-bottom:4px;}\n.result-big{font-size:32px;font-weight:800;color:#1e293b;}\n.result-big span{font-size:16px;font-weight:600;color:#64748b;margin-left:4px;}\n.cashback-card{background:linear-gradient(135deg,#0086B3,#33C4F3);color:#fff;border-radius:16px;padding:22px;margin-bottom:14px;}\n.cashback-card .label{font-size:13px;opacity:.85;margin-bottom:6px;}\n.cashback-card .amount{font-size:36px;font-weight:800;}\n.cashback-card .sub{font-size:12px;opacity:.75;margin-top:6px;}\n.cat-result{border-bottom:1px solid #f1f5f9;padding:10px 0;display:flex;justify-content:space-between;font-size:13px;}\n.cat-result:last-child{border-bottom:none;}\n.reset-btn{width:100%;padding:14px;background:#f1f5f9;color:#64748b;border:none;border-radius:14px;font-size:14px;font-weight:700;cursor:pointer;margin-top:8px;}\n.share-btn{width:100%;padding:14px;background:#22c55e;color:#fff;border:none;border-radius:14px;font-size:14px;font-weight:700;cursor:pointer;margin-top:8px;}\n.pv-bar-wrap{background:#f1f5f9;border-radius:10px;overflow:hidden;height:10px;margin:10px 0 4px;}\n.pv-bar{height:100%;background:linear-gradient(90deg,#00B5EF,#66CFF5);border-radius:10px;transition:width .5s ease;}\n.pv-sub{display:flex;justify-content:space-between;font-size:11px;color:#94a3b8;}\n.age-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:20px;}\n.age-btn{background:#fff;border:2px solid #e2e8f0;border-radius:12px;padding:14px 6px;text-align:center;cursor:pointer;font-size:13px;font-weight:700;transition:all .2s;}\n.age-btn.selected{border-color:#00B5EF;background:#E6F8FE;color:#0086B3;}\n.section-label{font-size:13px;font-weight:700;color:#475569;margin:4px 0 10px;}\n",
  badge: "atom美 AZA · มาร์ทเชนจ์",
  headlineHTML: "ถ้าเปลี่ยนค่าใช้จ่ายของครอบครัว<br>มาใช้ที่ <span>อะโทมี่ มาร์ท</span><br>คาดว่าจะได้รับ แคชแบ็ก เท่าไหร่? 💰",
  sub1: "เลือกสินค้าอุปโภคบริโภคที่ครอบครัวใช้เป็นประจำ",
  sub2: "คำนวณ แคชแบ็ก โดยอ้างอิงจาก พีวี ของสินค้าที่เลือก",
  tip: "💡 พีวี = คะแนนสะสมจากการซื้อสินค้า อะโทมี่",
  stepLabels: [{"num":"1","label":"ครอบครัว"},{"num":"2","label":"สินค้า"},{"num":"3","label":"ผลลัพธ์"}],
  infoBoxHTML: "📌 ระยะเวลาการคำนวณขึ้นอยู่กับจำนวนสมาชิกในครอบครัว<br>\n    <strong>1–2 คน → คิด 6 เดือน &nbsp;|&nbsp; 3 คนขึ้นไป → คิด 12 เดือน</strong>",
  familyOptions: [{"size":1,"months":6,"icon":"🧑","label":"1 คน","sub":"คิด 6 เดือน"},{"size":2,"months":6,"icon":"👫","label":"2 คน","sub":"คิด 6 เดือน"},{"size":3,"months":12,"icon":"👨‍👩‍👧","label":"3 คน","sub":"คิด 12 เดือน"},{"size":4,"months":12,"icon":"👨‍👩‍👧‍👦","label":"4 คนขึ้นไป","sub":"คิด 12 เดือน"}],
  ageHeading: "ช่วงอายุ",
  ageOptions: [{"key":"20","label":"ต่ำกว่า 30"},{"key":"30","label":"30-39"},{"key":"40","label":"40-49"},{"key":"50","label":"50-59"},{"key":"60","label":"60 ขึ้นไป"}],
  nextBtn1Text: "ขั้นต่อไป → เลือกสินค้า",
  nextBtn2Text: "ขั้นต่อไป → ดูผลลัพธ์",
  resetBtnText: "🔄 เริ่มใหม่",
  shareBtnText: "🔗 แชร์ผลลัพธ์",
  selectAllText: "เลือกทั้งหมด",
  step2NoteHTML: null,
  shareTitle: "เครื่องคำนวณ อะโทมี่ มาร์ทเชนจ์",
  fallbackAlertText: "คัดลอกแล้ว! วางในแชทเพื่อส่งได้เลย",

  CASHBACK_PER_UNIT: 2000,
  CASHBACK_UNIT_PV: 300000,
  CURRENCY: "฿",
  PV_LABEL: "พีวี",

  CATEGORIES: [
  {name:'💊 อาหารเสริม', half:true, items:[
    {n:'เฮโมฮิม (3 กล่อง)',pv:186000},
    {n:'โพรไบโอติก 10+ (2 กล่อง)',pv:60000},
    {n:'โพรโพลิส พลัส (2 กล่อง)',pv:40800},
    {n:'สไปรูลิน่า (2 กล่อง)',pv:20400},
    {n:'วิตามิน ซี (2 กล่อง)',pv:14400},
    {n:'มัลติวิตามินสำหรับเด็ก (2 กล่อง)',pv:10000},
    {n:'เอฟรีไทม์ (1 กล่อง)',pv:32000},
    {n:'ลูทีน (1 กล่อง)',pv:14400},
    {n:'แอสตาแซนธิน (1 กล่อง)',pv:16000},
    {n:'น้ำโนนิ (1 กล่อง)',pv:31500},
    {n:'ดูแลผิว (ผลิตภัณฑ์เสริมสุขภาพ)',pv:16000},
    {n:'โอเมก้า 3 (1 กล่อง)',pv:10000},
  ]},
  {name:'💄 เครื่องสำอาง', half:true, items:[
    {n:'แอบโซลูท เซลแอคทีฟ เซ็ต',pv:140000},
    {n:'เดอะ เฟม เซ็ต',pv:80000},
    {n:'วิวิด เซ็ต',pv:62000},
    {n:'สกิน พลัส เซ็ต',pv:24000},
    {n:'ซีวีด คอลลาเจน แอมพูล',pv:24000},
    {n:'คุชชั่น ฟาวน์เดชั่น',pv:12000},
    {n:'ครีมกันแดด เอสพีเอฟ 50+',pv:8000},
    {n:'อายครีม',pv:12000},
    {n:'ลิปแคร์',pv:5000},
    {n:'บีบีครีม',pv:8000},
    {n:'โทนเนอร์และอิมัลชั่น เซ็ต',pv:18000},
  ]},
  {name:'🧴 เส้นผมและร่างกาย', half:true, items:[
    {n:'อาร์วี แฮร์แคร์ เซ็ต (แชมพู+ครีมนวด)',pv:14000},
    {n:'แชมพูดูแลหนังศีรษะ',pv:10000},
    {n:'มาส์กทรีตเมนต์บำรุงผม',pv:8000},
    {n:'เซรั่มบำรุงผมซิลกี้ รีแพร์',pv:9000},
    {n:'ครีมอาบน้ำ',pv:7000},
    {n:'สบู่เหลวล้างมือ',pv:3000},
    {n:'แฮนด์ครีม',pv:5000},
    {n:'โลชั่นบำรุงผิวกาย',pv:8000},
    {n:'ครีมบำรุงเท้า',pv:4000},
    {n:'เกลือแช่ตัว',pv:6000},
    {n:'ผลิตภัณฑ์ระงับกลิ่นกาย',pv:4000},
    {n:'ยาสีฟัน',pv:3000},
    {n:'ชุดแปรงสีฟัน',pv:2000},
  ]},
  {name:'👶 สำหรับเด็ก', half:false, items:[
    {n:'โลชั่นเด็ก',pv:8000},
    {n:'แชมพูเด็ก',pv:6000},
    {n:'ครีมอาบน้ำเด็ก',pv:6000},
    {n:'ยาสีฟันเด็ก',pv:3000},
    {n:'ทิชชู่เปียกเด็ก',pv:4000},
  ]},
  {name:'🏠 ของใช้ในบ้าน', half:true, items:[
    {n:'ผงซักฟอก',pv:12000},
    {n:'น้ำยาล้างจาน',pv:6000},
    {n:'น้ำยาปรับผ้านุ่ม',pv:5000},
    {n:'น้ำยาทำความสะอาดอเนกประสงค์',pv:8000},
    {n:'น้ำยาล้างห้องน้ำ',pv:4000},
    {n:'ฝักบัวอาบน้ำ',pv:15000},
    {n:'ไดร์เป่าผม',pv:18000},
    {n:'กระดาษชำระ (1แพ็ค)',pv:5000},
    {n:'ถุงขยะ',pv:2000},
    {n:'สเปรย์ทำความสะอาด',pv:6000},
    {n:'ผ้าเช็ดทำความสะอาด',pv:4000},
    {n:'น้ำยาล้างพื้น',pv:5000},
    {n:'สบู่ก้อน',pv:3000},
    {n:'แปรงสีฟัน',pv:2000},
    {n:'ฟิลเตอร์กรองอากาศอะโทมี่ คอมเพล็กซ์ ฟิลเตอร์',pv:19500},
  ]},
],

  renderCategory: (cat, ci, catPV, checked, PV_LABEL) => `
      <div class="cat-header" id="ch${ci}" onclick="toggleCat(${ci})">
        <div class="cat-name">${cat.name}</div>
        <div style="display:flex;align-items:center;gap:8px">
          <span class="cat-pv" id="cpv${ci}">${catPV>0?catPV.toLocaleString()+' พีวี':''}</span>
          ${cat.half?'<span class="half-badge">×½</span>':''}
          <span class="arrow" id="arr${ci}">▼</span>
        </div>
      </div>
      <div class="cat-body" id="cb${ci}">
        <div class="select-all-row"><button class="select-all-btn" onclick="selectAll(${ci},event)">เลือกทั้งหมด</button></div>
        ${cat.items.map((item,ii)=>`
          <div class="item-row" onclick="toggleItem(${ci},${ii})">
            <div class="item-check ${checked[ci+'_'+ii]?'checked':''}" id="ic${ci}_${ii}">✓</div>
            <div class="item-name">${item.n}</div>
            <div class="item-pv">${item.pv.toLocaleString()} พีวี</div>
          </div>`).join('')}
      </div>`,

  renderResult: ({totalPV, pct, months, units, CURRENCY, CASHBACK_PER_UNIT, PV_LABEL, cashback, catRows}) => `
    <div class="result-card">
      <div class="result-label">พีวี รวมต่อเดือน</div>
      <div class="result-big">${totalPV.toLocaleString()}<span>พีวี</span></div>
      <div class="pv-bar-wrap"><div class="pv-bar" style="width:${pct}%"></div></div>
      <div class="pv-sub"><span>0</span><span>เป้าหมาย: 300,000 พีวี</span></div>
    </div>
    <div class="cashback-card">
      <div class="label">📦 แคชแบ็ก โดยประมาณใน ${months} เดือน (${units} ครั้ง × ${CURRENCY}${CASHBACK_PER_UNIT.toLocaleString()})</div>
      <div class="amount">${CURRENCY}${cashback.toLocaleString()}</div>
      <div class="sub">ทุก 300,000 พีวี = ${CURRENCY}${CASHBACK_PER_UNIT.toLocaleString()} แคชแบ็ก</div>
    </div>
    <div class="result-card">
      <div class="result-label">รายละเอียดตามหมวดหมู่</div>
      ${catRows||'<div style="color:#94a3b8;font-size:13px">ยังไม่ได้เลือกสินค้า</div>'}
    </div>`,

  renderCatRow: (cat, pv, PV_LABEL) => `<div class="cat-result"><span>${cat.name}${cat.half?' <span style="font-size:11px;color:#d97706">(×½)</span>':''}</span><span style="font-weight:700">${pv.toLocaleString()} พีวี</span></div>`,

  buildShareText: ({familyLabel, ageLabel, totalPV, months, CURRENCY, cashback}) => `📦 ผลลัพธ์ อะโทมี่ มาร์ทเชนจ์
👪 ${familyLabel} · ${ageLabel}
💳 พีวี ต่อเดือน: ${totalPV.toLocaleString()} พีวี
💰 ${months} เดือน แคชแบ็ก โดยประมาณ: ${CURRENCY}${cashback.toLocaleString()}

👉 ลองเช็คของคุณเอง`,
};

export default locale;
