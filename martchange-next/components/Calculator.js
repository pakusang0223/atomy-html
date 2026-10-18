'use client';

import { useEffect, useRef, useState } from 'react';
import { getSupabase } from '../lib/supabaseClient';

export default function Calculator({ locale }) {
  const [familySize, setFamilySize] = useState(0);
  const [months, setMonths] = useState(0);
  const [ageGroup, setAgeGroup] = useState('');
  const [checked, setChecked] = useState({});
  const [openCats, setOpenCats] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  const sessionIdRef = useRef(null);
  const sbRef = useRef(null);
  const saveTimerRef = useRef(null);
  const stateRef = useRef({});
  stateRef.current = { familySize, months, ageGroup, checked, currentStep };

  function getCatPV(ci) {
    const cat = locale.CATEGORIES[ci];
    let sum = 0;
    cat.items.forEach((item, ii) => {
      if (checked[ci + '_' + ii]) sum += item.pv;
    });
    return cat.half ? Math.round(sum * 0.5) : sum;
  }

  function getTotalPV(checkedState) {
    const c = checkedState || checked;
    let t = 0;
    locale.CATEGORIES.forEach((cat, ci) => {
      let sum = 0;
      cat.items.forEach((item, ii) => {
        if (c[ci + '_' + ii]) sum += item.pv;
      });
      t += cat.half ? Math.round(sum * 0.5) : sum;
    });
    return t;
  }

  function saveState() {
    const sb = sbRef.current;
    const sessionId = sessionIdRef.current;
    if (!sb || !sessionId) return;
    clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      const s = stateRef.current;
      const totalPV = getTotalPV(s.checked);
      const cashback = s.months ? Math.floor((totalPV / locale.CASHBACK_UNIT_PV) * s.months) * locale.CASHBACK_PER_UNIT : 0;
      sb.from('martchange_sessions').upsert({
        id: sessionId, country: locale.code,
        family_size: s.familySize || null, months: s.months || null,
        age_group: s.ageGroup || null, checked: s.checked,
        step: s.currentStep, total_pv: totalPV, cashback,
        completed: s.currentStep === 3, updated_at: new Date().toISOString(),
      }).then(() => {}).catch(() => {});
    }, 500);
  }

  function getSessionId() {
    try {
      const url = new URL(window.location.href);
      let id = url.searchParams.get('sid');
      if (!id) id = localStorage.getItem('mc_sid_' + locale.code);
      if (!id) id = crypto.randomUUID();
      localStorage.setItem('mc_sid_' + locale.code, id);
      if (url.searchParams.get('sid') !== id) {
        url.searchParams.set('sid', id);
        window.history.replaceState({}, '', url.toString());
      }
      return id;
    } catch (e) {
      return crypto.randomUUID();
    }
  }

  // ---- global bridges for the raw HTML injected via dangerouslySetInnerHTML ----
  useEffect(() => {
    window.toggleItem = (ci, ii) => {
      setChecked((prev) => ({ ...prev, [ci + '_' + ii]: !prev[ci + '_' + ii] }));
    };
    window.toggleCat = (ci) => {
      setOpenCats((prev) => ({ ...prev, [ci]: !prev[ci] }));
    };
    window.selectAll = (ci, e) => {
      if (e) e.stopPropagation();
      const cat = locale.CATEGORIES[ci];
      setChecked((prev) => {
        const anyUnchecked = cat.items.some((_, ii) => !prev[ci + '_' + ii]);
        const next = { ...prev };
        cat.items.forEach((_, ii) => { next[ci + '_' + ii] = anyUnchecked; });
        return next;
      });
      setOpenCats({ [ci]: true });
    };
    return () => {
      delete window.toggleItem;
      delete window.toggleCat;
      delete window.selectAll;
    };
  }, [locale]);

  useEffect(() => {
    saveState();
  }, [familySize, months, ageGroup, checked, currentStep]);

  // ---- session restore on mount ----
  useEffect(() => {
    let cancelled = false;
    async function init() {
      try {
        const sb = getSupabase();
        sbRef.current = sb;
        const sessionId = getSessionId();
        sessionIdRef.current = sessionId;
        const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 4000));
        const { data } = await Promise.race([
          sb.from('martchange_sessions').select('*').eq('id', sessionId).maybeSingle(),
          timeout,
        ]);
        if (cancelled) return;
        if (data) {
          setFamilySize(data.family_size || 0);
          setMonths(data.months || 0);
          setAgeGroup(data.age_group || '');
          setChecked(data.checked || {});
          const savedStep = data.step || 1;
          setCurrentStep(Math.min(savedStep, 3));
          sb.from('martchange_sessions').update({
            visit_count: (data.visit_count || 1) + 1,
            last_seen_at: new Date().toISOString(),
          }).eq('id', sessionId).then(() => {}).catch(() => {});
        } else {
          await sb.from('martchange_sessions').insert({ id: sessionId, country: locale.code, visit_count: 1 });
        }
      } catch (e) {
        // calculator still works without backend
      }
    }
    init();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // sync open/closed classes onto the freshly-rendered category list after every render
  useEffect(() => {
    Object.entries(openCats).forEach(([ci, isOpen]) => {
      const h = document.getElementById('ch' + ci);
      const b = document.getElementById('cb' + ci);
      if (h && b) {
        h.classList.toggle('open', !!isOpen);
        b.classList.toggle('open', !!isOpen);
      }
    });
  });

  function selectFamily(size, m) {
    setFamilySize(size);
    setMonths(m);
  }

  function selectAge(g) {
    setAgeGroup(g);
  }

  function goStep(n) {
    if (n === 2 && !(familySize && ageGroup)) return;
    setCurrentStep(n);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function resetAll() {
    setFamilySize(0);
    setMonths(0);
    setChecked({});
    setAgeGroup('');
    setOpenCats({});
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function shareResult() {
    const url = window.location.href;
    const totalPV = getTotalPV();
    const cashback = months ? Math.floor((totalPV / locale.CASHBACK_UNIT_PV) * months) * locale.CASHBACK_PER_UNIT : 0;
    const familyLabel = familySize ? (locale.familyOptions.find((f) => f.size === familySize)?.label || '') : '';
    const ageLabel = ageGroup ? (locale.ageOptions.find((a) => a.key === ageGroup)?.label || '') : '';
    const text = locale.buildShareText({ familyLabel, ageLabel, totalPV, months, CURRENCY: locale.CURRENCY, cashback });
    if (navigator.share) {
      navigator.share({ title: locale.shareTitle, text, url }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text + '\n' + url).then(() => alert(locale.fallbackAlertText));
    }
  }

  const catListHtml = locale.CATEGORIES.map((cat, ci) => {
    const catPV = getCatPV(ci);
    const inner = locale.renderCategory(cat, ci, catPV, checked, locale.PV_LABEL);
    return `<div class="cat-wrap">${inner}</div>`;
  }).join('');

  let resultHtml = '';
  if (currentStep === 3) {
    const totalPV = getTotalPV();
    const units = Math.floor((totalPV / locale.CASHBACK_UNIT_PV) * months);
    const cashback = units * locale.CASHBACK_PER_UNIT;
    const pct = Math.min((totalPV / locale.CASHBACK_UNIT_PV) * 100, 100);
    let catRows = '';
    locale.CATEGORIES.forEach((cat, ci) => {
      const pv = getCatPV(ci);
      if (pv > 0) catRows += locale.renderCatRow(cat, pv, locale.PV_LABEL);
    });
    resultHtml = locale.renderResult({
      totalPV, pct, months, units,
      CURRENCY: locale.CURRENCY, CASHBACK_PER_UNIT: locale.CASHBACK_PER_UNIT,
      PV_LABEL: locale.PV_LABEL, cashback, catRows,
    });
  }

  return (
    <>
      <link href={locale.fontLink} rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: locale.css }} />
      <style dangerouslySetInnerHTML={{ __html: '.logo-bar{background:#fff;padding:14px 20px 12px;text-align:center;border-bottom:3px solid #00B5EF;}.logo-bar img{height:44px;width:auto;display:inline-block;}' }} />
      <div className="logo-bar">
        <img src="/atomy-logo.png" alt="Atomy" />
      </div>
      <div className="header">
        <div className="badge">{locale.badge}</div>
        <h1 dangerouslySetInnerHTML={{ __html: locale.headlineHTML }} />
        <p>{locale.sub1}</p>
        <p>{locale.sub2}</p>
        <div className="tip">{locale.tip}</div>
      </div>

      <div className="steps">
        {locale.stepLabels.map((s, i) => {
          const n = i + 1;
          const cls = ['step'];
          if (currentStep === n) cls.push('active');
          else if (currentStep > n) cls.push('done');
          return (
            <div key={n} className={cls.join(' ')} onClick={() => goStep(n)}>
              <div className="step-num">{s.num}</div><br />{s.label}
            </div>
          );
        })}
      </div>

      <div className="section active" style={{ display: currentStep === 1 ? 'block' : 'none' }}>
        <div className="info-box" dangerouslySetInnerHTML={{ __html: locale.infoBoxHTML }} />
        <div className="family-grid">
          {locale.familyOptions.map((f) => (
            <div
              key={f.size}
              className={'family-btn' + (familySize === f.size ? ' selected' : '')}
              onClick={() => selectFamily(f.size, f.months)}
            >
              <div className="icon">{f.icon}</div>
              <div className="label">{f.label}</div>
              <div className="sub">{f.sub}</div>
            </div>
          ))}
        </div>
        <div className="section-label">{locale.ageHeading}</div>
        <div className="age-grid">
          {locale.ageOptions.map((a) => (
            <div
              key={a.key}
              className={'age-btn' + (ageGroup === a.key ? ' selected' : '')}
              onClick={() => selectAge(a.key)}
            >
              {a.label}
            </div>
          ))}
        </div>
        <button className="next-btn" disabled={!(familySize && ageGroup)} onClick={() => goStep(2)}>
          {locale.nextBtn1Text}
        </button>
      </div>

      <div className="section" style={{ display: currentStep === 2 ? 'block' : 'none' }}>
        {locale.step2NoteHTML && <div className="kr-note" dangerouslySetInnerHTML={{ __html: locale.step2NoteHTML }} />}
        <div dangerouslySetInnerHTML={{ __html: catListHtml }} />
        <button className="next-btn" style={{ marginTop: 8 }} onClick={() => goStep(3)}>
          {locale.nextBtn2Text}
        </button>
      </div>

      <div className="section" style={{ display: currentStep === 3 ? 'block' : 'none' }}>
        <div dangerouslySetInnerHTML={{ __html: resultHtml }} />
        <button className="reset-btn" onClick={resetAll}>{locale.resetBtnText}</button>
        <button className="share-btn" onClick={shareResult}>{locale.shareBtnText}</button>
      </div>
    </>
  );
}
