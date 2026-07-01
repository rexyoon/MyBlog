export default function Contact() {
  return (
    <section
      data-screen-label="Contact"
      style={{
        position: 'relative',
        background: '#06070c',
        padding: 'clamp(80px,11vw,160px) clamp(22px,5vw,64px) clamp(40px,6vw,64px)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '12px', letterSpacing: '.28em', color: '#00f0ff', marginBottom: '20px' }}>
          // 005 — CONTACT
        </div>
        <h2
          style={{
            margin: '0 0 20px',
            fontFamily: "'IBM Plex Sans KR',sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem,5.5vw,3.6rem)',
            lineHeight: 1.12,
            letterSpacing: '-.01em',
            color: '#eafcff',
          }}
        >
          함께 <span style={{ color: '#00f0ff', textShadow: '0 0 26px rgba(0,240,255,.4)' }}>단단한 것</span>을 만들어요.
        </h2>
        <p
          style={{
            fontFamily: "'IBM Plex Sans KR',sans-serif",
            fontSize: 'clamp(1rem,1.6vw,1.15rem)',
            lineHeight: 1.7,
            color: '#aeb9c9',
            maxWidth: '44ch',
            margin: '0 0 clamp(30px,4vw,40px)',
          }}
        >
          새로운 문제, 무거운 백엔드, 재밌는 실험 — 언제든 환영입니다.
        </p>
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <a
            href="https://github.com/rexyoon"
            target="_blank"
            rel="noopener"
            className="btn-github"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: '13px',
              letterSpacing: '.1em',
              color: '#00f0ff',
              textDecoration: 'none',
              padding: '15px 26px',
              border: '1px solid rgba(0,240,255,.5)',
              borderRadius: '4px',
              background: 'rgba(0,240,255,.06)',
              transition: 'background .22s, box-shadow .22s, color .22s',
            }}
          >
            GITHUB ↗ github.com/rexyoon
          </a>
          <a
            href="mailto:happyjj407@naver.com"
            className="btn-email"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: '13px',
              letterSpacing: '.1em',
              color: '#ff8fc6',
              textDecoration: 'none',
              padding: '15px 26px',
              border: '1px solid rgba(255,46,151,.5)',
              borderRadius: '4px',
              background: 'rgba(255,46,151,.06)',
              transition: 'background .22s, box-shadow .22s, color .22s',
            }}
          >
            EMAIL ↗ happyjj407@naver.com
          </a>
        </div>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', letterSpacing: '.1em', color: 'rgba(174,185,201,.55)', marginTop: '26px' }}>
          REPOS: heron-Arso · hancare-orgnazation · muyangshop · codebuilderrex · SoomTeum ·
          kdt-codearchitect
        </div>
      </div>
      <div
        style={{
          maxWidth: '1120px',
          margin: 'clamp(56px,8vw,90px) auto 0',
          paddingTop: '24px',
          borderTop: '1px solid rgba(0,240,255,.12)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: '11px',
          letterSpacing: '.1em',
          color: 'rgba(174,185,201,.55)',
        }}
      >
        <span>© 2026 정재윤 / rexyoon</span>
        <span>
          SYS://rexyoon · STATUS: <span style={{ color: '#00f0ff' }}>ONLINE</span>
        </span>
      </div>
    </section>
  )
}
