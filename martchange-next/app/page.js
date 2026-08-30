const LANGS = [
  { code: 'kr', label: '한국어' },
  { code: 'ja', label: '日本語' },
  { code: 'zh', label: '中文' },
  { code: 'en', label: 'English' },
  { code: 'bd', label: 'বাংলা' },
  { code: 'th', label: 'ไทย' },
];

export default function Home() {
  return (
    <div style={{ fontFamily: 'system-ui,sans-serif', padding: 40, textAlign: 'center' }}>
      <h1 style={{ fontSize: 20, marginBottom: 24 }}>Atomy Mart Change Calculator</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 280, margin: '0 auto' }}>
        {LANGS.map((l) => (
          <a
            key={l.code}
            href={`/${l.code}`}
            style={{
              display: 'block', padding: '14px', background: '#2563eb', color: '#fff',
              borderRadius: 12, textDecoration: 'none', fontWeight: 700,
            }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}
