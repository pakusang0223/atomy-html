'use client';

import { useState } from 'react';
import { getSupabase } from '../../lib/supabaseClient';

const ACCESS_CODE = 'atomy8core2026';
const COUNTRY_NAMES = { kr: '🇰🇷 한국', ja: '🇯🇵 일본', zh: '🇨🇳 중국', en: '🌐 영어권', bd: '🇧🇩 방글라데시', th: '🇹🇭 태국' };
const AGE_NAMES = { '20': '20대 이하', '30': '30대', '40': '40대', '50': '50대', '60': '60대 이상', unknown: '미입력' };

function fmt(n) {
  return (n || 0).toLocaleString();
}

export default function AdminPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [pw, setPw] = useState('');
  const [pwErr, setPwErr] = useState('');
  const [stats, setStats] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function checkPw() {
    if (pw === ACCESS_CODE) {
      setUnlocked(true);
      load();
    } else {
      setPwErr('접속코드가 올바르지 않습니다.');
    }
  }

  async function load() {
    setLoading(true);
    setError('');
    try {
      const sb = getSupabase();
      const { data, error } = await sb.rpc('get_martchange_stats');
      if (error) throw error;
      setStats(data);
    } catch (e) {
      setError(e.message || String(e));
    } finally {
      setLoading(false);
    }
  }

  const wrapStyle = {
    fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans KR',sans-serif",
    background: '#eef2f7', color: '#1e293b', minHeight: '100vh', padding: '24px 16px 60px',
  };

  if (!unlocked) {
    return (
      <div style={wrapStyle}>
        <div style={{ maxWidth: 340, margin: '80px auto', background: '#fff', borderRadius: 16, padding: 28, boxShadow: '0 2px 8px rgba(0,0,0,.08)', textAlign: 'center' }}>
          <div style={{ fontSize: 28, marginBottom: 8 }}>🔒</div>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>관리자 접속코드</div>
          <div style={{ fontSize: 12, color: '#64748b' }}>외부에 공유하지 마세요</div>
          <input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && checkPw()}
            placeholder="접속코드 입력"
            style={{ width: '100%', padding: 12, border: '1px solid #cbd5e1', borderRadius: 10, margin: '14px 0', fontSize: 14 }}
          />
          <button
            onClick={checkPw}
            style={{ width: '100%', padding: 12, background: '#2563eb', color: '#fff', border: 'none', borderRadius: 10, fontWeight: 700, cursor: 'pointer' }}
          >
            확인
          </button>
          {pwErr && <div style={{ color: '#dc2626', fontSize: 12, marginTop: 8 }}>{pwErr}</div>}
        </div>
      </div>
    );
  }

  const completionRate = stats && stats.total_sessions ? Math.round((stats.completed_sessions / stats.total_sessions) * 100) : 0;

  return (
    <div style={wrapStyle}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <h1 style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>📊 마트체인지 계산기 이용 현황</h1>
        {stats && (
          <div style={{ fontSize: 12, color: '#64748b', marginBottom: 24 }}>
            마지막 업데이트: {new Date(stats.generated_at).toLocaleString('ko-KR')}
          </div>
        )}
        <button
          onClick={load}
          style={{ padding: '10px 16px', background: '#f1f5f9', color: '#334155', border: 'none', borderRadius: 10, fontWeight: 700, fontSize: 13, cursor: 'pointer', marginBottom: 20 }}
        >
          🔄 새로고침
        </button>

        {loading && <div style={{ color: '#94a3b8', fontSize: 13 }}>불러오는 중...</div>}
        {error && <div style={{ color: '#dc2626', fontSize: 13, padding: 12, background: '#fef2f2', borderRadius: 10, marginBottom: 16 }}>데이터를 불러오지 못했습니다: {error}</div>}

        {stats && !loading && (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 12, marginBottom: 24 }}>
              {[
                ['총 접속(세션)', fmt(stats.total_sessions)],
                ['결과까지 완료', fmt(stats.completed_sessions)],
                ['완료율', `${completionRate}%`],
                ['평균 예상 PV', fmt(stats.avg_pv)],
                ['평균 예상 캐시백', fmt(stats.avg_cashback)],
              ].map(([label, value]) => (
                <div key={label} style={{ background: '#fff', borderRadius: 14, padding: 16, boxShadow: '0 1px 4px rgba(0,0,0,.06)' }}>
                  <div style={{ fontSize: 12, color: '#64748b', fontWeight: 600, marginBottom: 6 }}>{label}</div>
                  <div style={{ fontSize: 24, fontWeight: 800 }}>{value}</div>
                </div>
              ))}
            </div>

            <Section title="🌍 국가별(언어별) 현황">
              {stats.by_country?.length ? (
                <Table
                  head={['국가', '세션 수', '총 접속 횟수', '완료', '평균 캐시백']}
                  rows={stats.by_country.map((r) => [
                    COUNTRY_NAMES[r.country] || r.country, fmt(r.visits), fmt(r.total_opens), fmt(r.completed), fmt(r.avg_cashback),
                  ])}
                />
              ) : <Empty />}
            </Section>

            <Section title="👤 연령대별 분포">
              {stats.by_age_group?.length ? (
                <Table
                  head={['연령대', '인원 수']}
                  rows={stats.by_age_group.map((r) => [AGE_NAMES[r.age_group] || r.age_group, fmt(r.cnt)])}
                />
              ) : <Empty />}
            </Section>

            <Section title="👨‍👩‍👧 가족 수별 분포">
              {stats.by_family_size?.length ? (
                <Table
                  head={['가족 수', '인원 수']}
                  rows={stats.by_family_size.map((r) => [`${r.family_size}인`, fmt(r.cnt)])}
                />
              ) : <Empty />}
            </Section>
          </>
        )}
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ background: '#fff', borderRadius: 14, padding: 18, marginBottom: 16, boxShadow: '0 1px 4px rgba(0,0,0,.06)' }}>
      <h2 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>{title}</h2>
      {children}
    </div>
  );
}

function Table({ head, rows }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
      <thead>
        <tr>
          {head.map((h) => (
            <th key={h} style={{ textAlign: 'left', padding: '8px 6px', borderBottom: '1px solid #f1f5f9', color: '#64748b', fontWeight: 600, fontSize: 12 }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} style={{ padding: '8px 6px', borderBottom: '1px solid #f1f5f9' }}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Empty() {
  return <div style={{ color: '#94a3b8', fontSize: 13, padding: '8px 0' }}>데이터 없음</div>;
}
