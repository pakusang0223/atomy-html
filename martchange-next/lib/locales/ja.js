// AUTO-GENERATED from martchange_global_5langs/martchange_ja.html — do not hand-edit CATEGORIES/templates, re-run the extractor instead.
const locale = {
  code: 'ja',
  htmlLang: 'ja',
  title: "Atomy マートチェンジ 計算機",
  fontLink: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;800&display=swap",
  fontFamily: "'Noto Sans JP','Hiragino Sans',system-ui,sans-serif",
  css: "\n*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}\nbody{font-family:'Noto Sans JP','Hiragino Sans',system-ui,sans-serif;background:#eef2f7;color:#1e293b;line-height:1.6;padding-bottom:80px;}\n.header{background:linear-gradient(145deg,#0086B3 0%,#00B5EF 55%,#33C4F3 100%);color:#fff;padding:28px 20px 32px;text-align:center;}\n.badge{display:inline-block;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.4);border-radius:20px;padding:4px 14px;font-size:12px;font-weight:700;letter-spacing:1px;margin-bottom:12px;}\n.header h1{font-size:20px;font-weight:800;line-height:1.45;margin-bottom:8px;}\n.header h1 span{background:#facc15;color:#1e293b;border-radius:4px;padding:0 4px;}\n.header p{font-size:13px;opacity:0.88;margin-bottom:4px;}\n.tip{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,0.15);border-radius:20px;padding:5px 14px;font-size:12px;margin-top:8px;}\n.steps{display:flex;background:#fff;border-bottom:1px solid #e2e8f0;position:sticky;top:0;z-index:100;}\n.step{flex:1;text-align:center;padding:14px 4px;font-size:12px;font-weight:700;color:#94a3b8;border-bottom:3px solid transparent;cursor:pointer;}\n.step.active{color:#0086B3;border-bottom-color:#00B5EF;}\n.step.done{color:#22c55e;border-bottom-color:#22c55e;}\n.step-num{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;border:2px solid currentColor;font-size:11px;margin-bottom:4px;}\n.section{display:none;padding:20px 16px;}\n.section.active{display:block;}\n.info-box{background:#E6F8FE;border-left:3px solid #00B5EF;border-radius:0 8px 8px 0;padding:12px 14px;margin-bottom:20px;font-size:13px;color:#006B8F;line-height:1.7;}\n.family-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px;}\n.family-btn{background:#fff;border:2px solid #e2e8f0;border-radius:14px;padding:18px 12px;text-align:center;cursor:pointer;transition:all .2s;}\n.family-btn.selected{border-color:#00B5EF;background:#E6F8FE;}\n.family-btn .icon{font-size:28px;margin-bottom:6px;}\n.family-btn .label{font-size:14px;font-weight:700;}\n.family-btn .sub{font-size:11px;color:#64748b;margin-top:2px;}\n.next-btn{width:100%;padding:16px;background:#00B5EF;color:#fff;border:none;border-radius:14px;font-size:16px;font-weight:700;cursor:pointer;}\n.next-btn:disabled{background:#cbd5e1;cursor:not-allowed;}\n.cat-header{display:flex;justify-content:space-between;align-items:center;padding:14px 16px;background:#f8fafc;border-radius:10px 10px 0 0;border:1px solid #e2e8f0;cursor:pointer;user-select:none;}\n.cat-header .cat-name{font-size:14px;font-weight:700;}\n.cat-header .cat-pv{font-size:12px;color:#0086B3;font-weight:700;}\n.cat-header .arrow{transition:transform .3s;color:#94a3b8;}\n.cat-header.open .arrow{transform:rotate(180deg);}\n.cat-body{border:1px solid #e2e8f0;border-top:none;border-radius:0 0 10px 10px;overflow:hidden;display:none;}\n.cat-body.open{display:block;}\n.select-all-row{display:flex;justify-content:flex-end;padding:8px 14px;background:#f8fafc;border-bottom:1px solid #f1f5f9;}\n.select-all-btn{font-size:12px;color:#0086B3;font-weight:600;cursor:pointer;background:none;border:none;padding:0;}\n.item-row{display:flex;align-items:center;padding:11px 14px;border-bottom:1px solid #f1f5f9;gap:10px;cursor:pointer;}\n.item-row:last-child{border-bottom:none;}\n.item-check{width:20px;height:20px;border:2px solid #cbd5e1;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s;}\n.item-check.checked{background:#00B5EF;border-color:#00B5EF;color:#fff;}\n.item-name{flex:1;font-size:13px;}\n.item-pv{font-size:12px;color:#64748b;white-space:nowrap;}\n.half-badge{background:#fef3c7;color:#d97706;border-radius:4px;padding:1px 5px;font-size:10px;font-weight:700;margin-left:4px;}\n.cat-wrap{margin-bottom:12px;}\n.result-card{background:#fff;border-radius:16px;padding:22px;margin-bottom:14px;box-shadow:0 2px 8px rgba(0,0,0,.08);}\n.result-label{font-size:12px;color:#64748b;font-weight:600;margin-bottom:4px;}\n.result-big{font-size:32px;font-weight:800;color:#1e293b;}\n.result-big span{font-size:16px;font-weight:600;color:#64748b;margin-left:4px;}\n.cashback-card{background:linear-gradient(135deg,#0086B3,#33C4F3);color:#fff;border-radius:16px;padding:22px;margin-bottom:14px;}\n.cashback-card .label{font-size:13px;opacity:.85;margin-bottom:6px;}\n.cashback-card .amount{font-size:36px;font-weight:800;}\n.cashback-card .sub{font-size:12px;opacity:.75;margin-top:6px;}\n.cat-result{border-bottom:1px solid #f1f5f9;padding:10px 0;display:flex;justify-content:space-between;font-size:13px;}\n.cat-result:last-child{border-bottom:none;}\n.reset-btn{width:100%;padding:14px;background:#f1f5f9;color:#64748b;border:none;border-radius:14px;font-size:14px;font-weight:700;cursor:pointer;margin-top:8px;}\n.share-btn{width:100%;padding:14px;background:#22c55e;color:#fff;border:none;border-radius:14px;font-size:14px;font-weight:700;cursor:pointer;margin-top:8px;}\n.pv-bar-wrap{background:#f1f5f9;border-radius:10px;overflow:hidden;height:10px;margin:10px 0 4px;}\n.pv-bar{height:100%;background:linear-gradient(90deg,#00B5EF,#66CFF5);border-radius:10px;transition:width .5s ease;}\n.pv-sub{display:flex;justify-content:space-between;font-size:11px;color:#94a3b8;}\n.age-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:20px;}\n.age-btn{background:#fff;border:2px solid #e2e8f0;border-radius:12px;padding:14px 6px;text-align:center;cursor:pointer;font-size:13px;font-weight:700;transition:all .2s;}\n.age-btn.selected{border-color:#00B5EF;background:#E6F8FE;color:#0086B3;}\n.section-label{font-size:13px;font-weight:700;color:#475569;margin:4px 0 10px;}\n",
  badge: "atom美 AZA · マートチェンジ",
  headlineHTML: "家族の生活費を<span>Atomyマート</span>に<br>切り替えたら、キャッシュバックは<br>いくらになる？💰",
  sub1: "普段使っている日用品をチェックしてください。",
  sub2: "選んだ商品のPVをもとに予想キャッシュバックを計算します。",
  tip: "💡 PV＝Atomy商品購入で積み立てられるポイント基準",
  stepLabels: [{"num":"1","label":"家族構成"},{"num":"2","label":"商品選択"},{"num":"3","label":"結果表示"}],
  infoBoxHTML: "📌 家族構成によって適用期間が変わります。<br>\n    <strong>2人以下 → 6ヶ月基準 &nbsp;|&nbsp; 3人以上 → 12ヶ月基準</strong>",
  familyOptions: [{"size":1,"months":6,"icon":"🧑","label":"1人家族","sub":"6ヶ月適用"},{"size":2,"months":6,"icon":"👫","label":"2人家族","sub":"6ヶ月適用"},{"size":3,"months":12,"icon":"👨‍👩‍👧","label":"3人家族","sub":"12ヶ月適用"},{"size":4,"months":12,"icon":"👨‍👩‍👧‍👦","label":"4人以上","sub":"12ヶ月適用"}],
  ageHeading: "年代",
  ageOptions: [{"key":"20","label":"20代以下"},{"key":"30","label":"30代"},{"key":"40","label":"40代"},{"key":"50","label":"50代"},{"key":"60","label":"60代以上"}],
  nextBtn1Text: "次へ → 商品チェック",
  nextBtn2Text: "次へ → 結果を見る",
  resetBtnText: "🔄 最初からやり直す",
  shareBtnText: "🔗 結果をシェア",
  selectAllText: "すべて選択",
  step2NoteHTML: null,
  shareTitle: "Atomyマートチェンジ計算機",
  fallbackAlertText: "コピーしました！トークアプリに貼り付けて送ってみてください。",

  CASHBACK_PER_UNIT: 6000,
  CASHBACK_UNIT_PV: 300000,
  CURRENCY: "¥",
  PV_LABEL: "PV",

  CATEGORIES: [
  {name:'🍚 食品', half:false, items:[
    {n:'じゃがいもラーメン(1箱)',pv:12000},
    {n:'マヌカハニー',pv:18000},
    {n:'ABCジュース(1箱)',pv:15000},
    {n:'紅参ジュース(1箱)',pv:36000},
    {n:'黒にんにく',pv:14000},
    {n:'ナッツ&ドライフルーツ',pv:8000},
    {n:'ごま油',pv:5000},
    {n:'海苔(1セット)',pv:6000},
    {n:'子供用おやつセット',pv:8000},
  ]},
  {name:'💊 サプリメント', half:true, items:[
    {n:'HemoHIM(3箱)',pv:186000},
    {n:'フコイダン(1箱)',pv:46000},
    {n:'紅参丹(1箱)',pv:40000},
    {n:'GMZ(1箱)',pv:32000},
    {n:'ノニジュース(1箱)',pv:31500},
    {n:'Probiotic 10+(2箱)',pv:60000},
    {n:'Propolis Plus(2箱)',pv:40800},
    {n:'Spirulina(2箱)',pv:20400},
    {n:'Vitamin C(2箱)',pv:14400},
    {n:'ルテイン(1箱)',pv:14400},
    {n:'アスタキサンチン(1箱)',pv:16000},
    {n:'オメガ3(1箱)',pv:10000},
    {n:'EVERYTIME(1箱)',pv:32000},
    {n:'子供用マルチビタミン(2箱)',pv:10000},
    {n:'カルシウム&マグネシウム(1箱)',pv:12000},
    {n:'コエンザイムQ10(1箱)',pv:16000},
    {n:'ビタミンD(1箱)',pv:10000},
    {n:'鉄分サプリ(1箱)',pv:8000},
    {n:'コラーゲン(1箱)',pv:14000},
    {n:'グルコサミン(1箱)',pv:20000},
    {n:'ミルクシスル(1箱)',pv:12000},
  ]},
  {name:'💄 化粧品', half:true, items:[
    {n:'Absolute CellActive セット',pv:140000},
    {n:'美容液/プレステージ',pv:80000},
    {n:'THE FAME セット',pv:80000},
    {n:'VVID セット',pv:62000},
    {n:'A-ライン セット',pv:50000},
    {n:'SKIN PLUS セット',pv:24000},
    {n:'海藻コラーゲンアンプル',pv:24000},
    {n:'クッションファンデ',pv:12000},
    {n:'日焼け止めSPF50+',pv:8000},
    {n:'アイクリーム',pv:12000},
    {n:'リップケアセット',pv:5000},
    {n:'BBクリーム',pv:8000},
    {n:'化粧水&乳液セット',pv:18000},
    {n:'クレンジングフォーム',pv:7000},
    {n:'マスクパック(1箱)',pv:15000},
    {n:'アイシャドウ',pv:10000},
    {n:'リップスティック',pv:6000},
    {n:'ファンデーション',pv:14000},
    {n:'パウダー',pv:9000},
  ]},
  {name:'🧴 ヘア&ボディ', half:true, items:[
    {n:'RVヘアケアセット(シャンプー+トリートメント)',pv:14000},
    {n:'スカルプケアシャンプー',pv:10000},
    {n:'ヘアトリートメントマスク',pv:8000},
    {n:'シルキーリペアセラム',pv:9000},
    {n:'ボディウォッシュ',pv:7000},
    {n:'ハンドウォッシュ',pv:3000},
    {n:'ハンドクリーム',pv:5000},
    {n:'ボディローション',pv:8000},
    {n:'フットクリーム',pv:4000},
    {n:'デオドラント',pv:4000},
    {n:'歯磨き粉',pv:3000},
    {n:'歯ブラシセット',pv:2000},
    {n:'入浴剤',pv:6000},
    {n:'スカルプエッセンス',pv:12000},
    {n:'ヘアオイル',pv:9000},
  ]},
  {name:'🏠 ホームケア', half:true, items:[
    {n:'洗濯洗剤(液体)',pv:12000},
    {n:'洗濯洗剤(粉末)',pv:10000},
    {n:'食器洗い洗剤',pv:6000},
    {n:'柔軟剤',pv:5000},
    {n:'多目的クリーナー',pv:8000},
    {n:'トイレ用洗剤',pv:4000},
    {n:'キッチン用スプレー',pv:6000},
    {n:'除菌ウェットティッシュ',pv:4000},
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
        <div class="select-all-row"><button class="select-all-btn" onclick="selectAll(${ci},event)">すべて選択</button></div>
        ${cat.items.map((item,ii)=>`
          <div class="item-row" onclick="toggleItem(${ci},${ii})">
            <div class="item-check ${checked[ci+'_'+ii]?'checked':''}" id="ic${ci}_${ii}">✓</div>
            <div class="item-name">${item.n}</div>
            <div class="item-pv">${item.pv.toLocaleString()} PV</div>
          </div>`).join('')}
      </div>`,

  renderResult: ({totalPV, pct, months, units, CURRENCY, CASHBACK_PER_UNIT, PV_LABEL, cashback, catRows}) => `
    <div class="result-card">
      <div class="result-label">月間PV合計</div>
      <div class="result-big">${totalPV.toLocaleString()}<span>PV</span></div>
      <div class="pv-bar-wrap"><div class="pv-bar" style="width:${pct}%"></div></div>
      <div class="pv-sub"><span>0</span><span>目標：30万PV</span></div>
    </div>
    <div class="cashback-card">
      <div class="label">📦 ${months}ヶ月間の予想キャッシュバック（${units}回 × ${CURRENCY}${CASHBACK_PER_UNIT.toLocaleString()}）</div>
      <div class="amount">${CURRENCY}${cashback.toLocaleString()}</div>
      <div class="sub">30万PVごとに${CURRENCY}${CASHBACK_PER_UNIT.toLocaleString()}のキャッシュバック</div>
    </div>
    <div class="result-card">
      <div class="result-label">カテゴリ別内訳</div>
      ${catRows||'<div style="color:#94a3b8;font-size:13px">商品が選択されていません</div>'}
    </div>`,

  renderCatRow: (cat, pv, PV_LABEL) => `<div class="cat-result"><span>${cat.name}${cat.half?' <span style="font-size:11px;color:#d97706">(×½適用)</span>':''}</span><span style="font-weight:700">${pv.toLocaleString()} PV</span></div>`,

  buildShareText: ({familyLabel, ageLabel, totalPV, months, CURRENCY, cashback}) => `📦 Atomyマートチェンジ計算結果
👪 ${familyLabel} · ${ageLabel}
💳 月間PV: ${totalPV.toLocaleString()} PV
💰 ${months}ヶ月予想キャッシュバック: ${CURRENCY}${cashback.toLocaleString()}

👉 チェックしてみる`,
};

export default locale;
