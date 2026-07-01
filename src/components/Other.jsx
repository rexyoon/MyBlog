const ROW_TR =
  'opacity .6s cubic-bezier(.16,.84,.44,1), transform .6s cubic-bezier(.16,.84,.44,1), background .2s'

const rowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '20px',
  flexWrap: 'wrap',
  padding: '22px 6px',
  borderBottom: '1px solid rgba(0,240,255,.1)',
  textDecoration: 'none',
  opacity: 0,
  transform: 'translateY(24px)',
  transition: ROW_TR,
}

export default function Other() {
  return (
    <section
      data-screen-label="Other"
      style={{
        position: 'relative',
        background: '#06070c',
        padding: 'clamp(72px,10vw,150px) clamp(22px,5vw,64px)',
        borderBottom: '1px solid rgba(0,240,255,.09)',
      }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <div
          data-reveal
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: '12px',
            letterSpacing: '.28em',
            color: '#00f0ff',
            marginBottom: '16px',
            opacity: 0,
            transform: 'translateY(30px)',
            transition:
              'opacity .7s cubic-bezier(.16,.84,.44,1), transform .7s cubic-bezier(.16,.84,.44,1)',
          }}
        >
          // 004 — ARCHIVE
        </div>
        <h2
          data-reveal
          style={{
            margin: '0 0 clamp(28px,4vw,40px)',
            fontFamily: "'JetBrains Mono',monospace",
            fontWeight: 800,
            fontSize: 'clamp(1.9rem,5.2vw,3.4rem)',
            letterSpacing: '-.01em',
            color: '#eafcff',
            opacity: 0,
            transform: 'translateY(34px)',
            transition:
              'opacity .7s cubic-bezier(.16,.84,.44,1), transform .7s cubic-bezier(.16,.84,.44,1)',
          }}
        >
          OTHER <span style={{ color: '#ff2e97' }}>// 기타 · 수상</span>
        </h2>

        <div style={{ borderTop: '1px solid rgba(0,240,255,.1)' }}>
          {/* 숨 여행, 틈 — award */}
          <a
            href="https://github.com/SoomTeum"
            target="_blank"
            rel="noopener"
            data-reveal
            className="row-award"
            style={rowStyle}
          >
            <div style={{ minWidth: '220px', flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontWeight: 700, fontSize: '1.05rem', color: '#eafcff' }}>
                  숨 여행, 틈
                </span>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '9.5px', letterSpacing: '.14em', padding: '3px 8px', borderRadius: '3px', border: '1px solid rgba(168,85,247,.5)', color: '#c9a6ff', background: 'rgba(168,85,247,.12)' }}>
                  ★ AWARD · 수상
                </span>
              </div>
              <div style={{ fontFamily: "'IBM Plex Sans KR',sans-serif", fontSize: '.9rem', color: '#aeb9c9', lineHeight: 1.5 }}>
                관광데이터 기반 여행 서비스 · 2025 한국관광공사 관광데이터 활용 공모전 수상작
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10.5px', color: 'rgba(174,185,201,.65)' }}>Frontend · 팀</span>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11.5px', letterSpacing: '.08em', color: '#00f0ff' }}>REPO ↗</span>
            </div>
          </a>

          {/* POP:CON */}
          <a
            href="https://github.com/kdt-codearchitect"
            target="_blank"
            rel="noopener"
            data-reveal
            className="row-cyan"
            style={rowStyle}
          >
            <div style={{ minWidth: '220px', flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontWeight: 700, fontSize: '1.05rem', color: '#eafcff' }}>POP:CON</span>
              </div>
              <div style={{ fontFamily: "'IBM Plex Sans KR',sans-serif", fontSize: '.9rem', color: '#aeb9c9', lineHeight: 1.5 }}>
                JWT 인증·PortOne 결제·카카오 지도 검색을 갖춘 온라인 편의점 쇼핑몰
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10.5px', color: 'rgba(174,185,201,.65)' }}>Backend · 6인/4주</span>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11.5px', letterSpacing: '.08em', color: '#00f0ff' }}>REPO ↗</span>
            </div>
          </a>

          {/* JARVIS */}
          <a
            href="https://github.com/codebuilderrex"
            target="_blank"
            rel="noopener"
            data-reveal
            className="row-cyan"
            style={rowStyle}
          >
            <div style={{ minWidth: '220px', flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontWeight: 700, fontSize: '1.05rem', color: '#eafcff' }}>JARVIS</span>
              </div>
              <div style={{ fontFamily: "'IBM Plex Sans KR',sans-serif", fontSize: '.9rem', color: '#aeb9c9', lineHeight: 1.5 }}>
                제스처 인식 기반 AI 비서 — 손동작으로 제어하는 인터페이스 실험
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10.5px', color: 'rgba(174,185,201,.65)' }}>Full-stack · Python · FastAPI</span>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11.5px', letterSpacing: '.08em', color: '#00f0ff' }}>REPO ↗</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
