const CHIP_VARIANTS = {
  neutral: { border: '1px solid rgba(120,150,180,.22)', color: '#cdd8e6' },
  cyan: { border: '1px solid rgba(0,240,255,.22)', color: '#bfeefc' },
  magenta: { border: '1px solid rgba(255,46,151,.22)', color: '#ffc4e1' },
}

function Chip({ variant = 'neutral', children }) {
  return (
    <span
      style={{
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: '11px',
        padding: '4px 9px',
        borderRadius: '3px',
        ...CHIP_VARIANTS[variant],
      }}
    >
      {children}
    </span>
  )
}

const STACK = [
  { label: 'LANG', variant: 'neutral', items: ['Java 17', 'TypeScript', 'JavaScript', 'Python'] },
  {
    label: 'BACKEND',
    variant: 'cyan',
    items: ['Spring Boot', 'Spring MVC', 'Spring Security', 'JPA', 'MyBatis', 'FastAPI'],
  },
  {
    label: 'FRONTEND',
    variant: 'neutral',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Zustand', 'JSP / jQuery'],
  },
  { label: 'DATABASE', variant: 'neutral', items: ['MySQL', 'Oracle', 'MariaDB'] },
  {
    label: 'DEVOPS',
    variant: 'neutral',
    items: ['AWS · EC2 / S3 / Route53', 'Docker', 'GitHub Actions', 'Git'],
  },
  {
    label: 'API',
    variant: 'magenta',
    items: ['TossPayments', 'PortOne', 'Kakao Maps', 'JWT', 'OpenAI'],
  },
]

const STAT_CELLS = [
  { n: '06', label: '기획~배포 프로젝트', accent: false },
  { n: '03', label: '1인 풀스택', accent: false },
  { n: '01', label: '공모전 수상', accent: false },
  { n: 'SI', label: '대기업 SI 실무', accent: true },
]

export default function About() {
  return (
    <section
      data-screen-label="About"
      style={{
        position: 'relative',
        background: '#06070c',
        padding: 'clamp(72px,10vw,150px) clamp(22px,5vw,64px)',
        borderBottom: '1px solid rgba(0,240,255,.09)',
      }}
    >
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: 'clamp(40px,6vw,80px)',
          alignItems: 'start',
        }}
      >
        {/* left column */}
        <div>
          <div
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: '12px',
              letterSpacing: '.28em',
              color: '#00f0ff',
              marginBottom: '20px',
            }}
          >
            // ABOUT — 001
          </div>
          <h2
            style={{
              margin: '0 0 22px',
              fontFamily: "'IBM Plex Sans KR',sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.9rem,4.4vw,3rem)',
              lineHeight: 1.18,
              letterSpacing: '-.01em',
              color: '#eafcff',
            }}
          >
            화면부터 서버까지,
            <br />
            서비스를 끝까지 만든다.
          </h2>
          <p
            style={{
              fontFamily: "'IBM Plex Sans KR',sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(1rem,1.5vw,1.12rem)',
              lineHeight: 1.78,
              color: '#aeb9c9',
              maxWidth: '44ch',
              margin: '0 0 16px',
            }}
          >
            백엔드·웹·모바일·배포까지 제품 전체를 혼자 설계·구현해 온 풀스택 개발자입니다.
            인증·결제·데이터처럼 무겁고 까다로운 부분을 끝까지 파고들어, 실제로 안정적으로
            동작하게 만드는 걸 좋아합니다.
          </p>
          <p
            style={{
              fontFamily: "'IBM Plex Sans KR',sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(1rem,1.5vw,1.12rem)',
              lineHeight: 1.78,
              color: '#aeb9c9',
              maxWidth: '44ch',
              margin: 0,
            }}
          >
            대기업 SI 현장에서 관리자 시스템을 개발·유지보수하며, 앱 버그를 넘어 인프라 계층
            트러블슈팅까지 직접 다뤄 왔습니다.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1px',
              marginTop: 'clamp(28px,4vw,40px)',
              background: 'rgba(0,240,255,.14)',
              border: '1px solid rgba(0,240,255,.14)',
              borderRadius: '6px',
              overflow: 'hidden',
            }}
          >
            {STAT_CELLS.map((c) => (
              <div key={c.n} style={{ background: '#06070c', padding: 'clamp(16px,2vw,20px)' }}>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontWeight: 800,
                    fontSize: 'clamp(1.7rem,3vw,2.3rem)',
                    color: c.accent ? '#ff2e97' : '#00f0ff',
                    lineHeight: 1,
                    textShadow: c.accent
                      ? '0 0 18px rgba(255,46,151,.3)'
                      : '0 0 18px rgba(0,240,255,.35)',
                  }}
                >
                  {c.n}
                </div>
                <div
                  style={{
                    fontFamily: "'IBM Plex Sans KR',sans-serif",
                    fontSize: '12.5px',
                    color: '#aeb9c9',
                    marginTop: '9px',
                  }}
                >
                  {c.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* right column */}
        <div>
          <div
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: '12px',
              letterSpacing: '.22em',
              color: 'rgba(0,240,255,.85)',
              marginBottom: '24px',
            }}
          >
            STAT MATRIX{' '}
            <span style={{ color: 'rgba(174,185,201,.6)' }}>// TRAINING LOAD</span>
          </div>

          <StatGraph />

          <div style={{ marginTop: 'clamp(30px,4vw,42px)' }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: '12px',
                letterSpacing: '.22em',
                color: 'rgba(0,240,255,.85)',
                marginBottom: '16px',
              }}
            >
              STACK <span style={{ color: 'rgba(174,185,201,.6)' }}>// DETAIL</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
              {STACK.map((row) => (
                <div
                  key={row.label}
                  style={{
                    display: 'flex',
                    gap: '12px',
                    flexWrap: 'wrap',
                    alignItems: 'baseline',
                  }}
                >
                  <span
                    style={{
                      flex: '0 0 82px',
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: '10.5px',
                      letterSpacing: '.14em',
                      color: 'rgba(174,185,201,.6)',
                    }}
                  >
                    {row.label}
                  </span>
                  <span style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                    {row.items.map((it) => (
                      <Chip key={it} variant={row.variant}>
                        {it}
                      </Chip>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Isometric 3D neon bar graph — bars carry data-bar so the controller can
   animate them rising from the floor on scroll-in. */
function StatGraph() {
  const barStyle = (glow) => ({
    transformBox: 'fill-box',
    transformOrigin: '50% 100%',
    transition: 'transform .85s cubic-bezier(.16,.84,.44,1)',
    filter: glow,
  })
  const CY_GLOW = 'drop-shadow(0 0 5px rgba(0,240,255,.45))'
  const MG_GLOW = 'drop-shadow(0 0 6px rgba(255,46,151,.5))'
  const gridLine = { stroke: 'rgba(0,240,255,.10)', strokeDasharray: '3 5' }
  const valFont = { font: "700 15px 'JetBrains Mono',monospace" }
  const labFont = { font: "500 10px 'JetBrains Mono',monospace", letterSpacing: '1px' }
  const scaleFont = { font: "400 8px 'JetBrains Mono',monospace", fill: 'rgba(174,185,201,.5)' }

  return (
    <div data-statgraph style={{ marginTop: '2px' }}>
      <svg
        viewBox="0 40 452 256"
        style={{ width: '100%', height: 'auto', maxWidth: '520px', display: 'block', overflow: 'visible' }}
      >
        <line x1="20" y1="58" x2="432" y2="58" style={gridLine} />
        <line x1="20" y1="108" x2="432" y2="108" style={gridLine} />
        <line x1="20" y1="158" x2="432" y2="158" style={gridLine} />
        <line x1="20" y1="208" x2="432" y2="208" style={gridLine} />
        <line x1="20" y1="58" x2="20" y2="258" stroke="rgba(0,240,255,.18)" />
        <line x1="20" y1="258" x2="432" y2="258" stroke="rgba(0,240,255,.35)" />
        <text x="15" y="61" textAnchor="end" style={scaleFont}>100</text>
        <text x="15" y="111" textAnchor="end" style={scaleFont}>75</text>
        <text x="15" y="161" textAnchor="end" style={scaleFont}>50</text>
        <text x="15" y="211" textAnchor="end" style={scaleFont}>25</text>

        <g data-bar style={barStyle(CY_GLOW)}>
          <polygon points="30,258 88,258 88,74 30,74" fill="rgba(0,240,255,.10)" stroke="#00f0ff" strokeWidth="1.4" />
          <polygon points="88,258 106,248 106,64 88,74" fill="rgba(0,240,255,.22)" stroke="rgba(0,240,255,.55)" strokeWidth="1.1" />
          <polygon points="30,74 88,74 106,64 48,64" fill="rgba(0,240,255,.5)" stroke="#7ef9ff" strokeWidth="1.1" />
        </g>
        <g data-bar style={barStyle(CY_GLOW)}>
          <polygon points="136,258 194,258 194,98 136,98" fill="rgba(0,240,255,.10)" stroke="#00f0ff" strokeWidth="1.4" />
          <polygon points="194,258 212,248 212,88 194,98" fill="rgba(0,240,255,.22)" stroke="rgba(0,240,255,.55)" strokeWidth="1.1" />
          <polygon points="136,98 194,98 212,88 154,88" fill="rgba(0,240,255,.5)" stroke="#7ef9ff" strokeWidth="1.1" />
        </g>
        <g data-bar style={barStyle(CY_GLOW)}>
          <polygon points="242,258 300,258 300,110 242,110" fill="rgba(0,240,255,.10)" stroke="#00f0ff" strokeWidth="1.4" />
          <polygon points="300,258 318,248 318,100 300,110" fill="rgba(0,240,255,.22)" stroke="rgba(0,240,255,.55)" strokeWidth="1.1" />
          <polygon points="242,110 300,110 318,100 260,100" fill="rgba(0,240,255,.5)" stroke="#7ef9ff" strokeWidth="1.1" />
        </g>
        <g data-bar style={barStyle(MG_GLOW)}>
          <polygon points="348,258 406,258 406,134 348,134" fill="rgba(255,46,151,.10)" stroke="#ff2e97" strokeWidth="1.4" />
          <polygon points="406,258 424,248 424,124 406,134" fill="rgba(255,46,151,.22)" stroke="rgba(255,46,151,.55)" strokeWidth="1.1" />
          <polygon points="348,134 406,134 424,124 366,124" fill="rgba(255,46,151,.5)" stroke="#ff9ecb" strokeWidth="1.1" />
        </g>

        <text x="68" y="56" textAnchor="middle" style={{ ...valFont, fill: '#eafcff' }}>92</text>
        <text x="174" y="80" textAnchor="middle" style={{ ...valFont, fill: '#eafcff' }}>80</text>
        <text x="280" y="92" textAnchor="middle" style={{ ...valFont, fill: '#eafcff' }}>74</text>
        <text x="386" y="116" textAnchor="middle" style={{ ...valFont, fill: '#ff9ecb' }}>62</text>
        <text x="59" y="278" textAnchor="middle" style={{ ...labFont, fill: 'rgba(0,240,255,.75)' }}>BACKEND</text>
        <text x="165" y="278" textAnchor="middle" style={{ ...labFont, fill: 'rgba(0,240,255,.75)' }}>FRONTEND</text>
        <text x="271" y="278" textAnchor="middle" style={{ ...labFont, fill: 'rgba(0,240,255,.75)' }}>DATABASE</text>
        <text x="377" y="278" textAnchor="middle" style={{ ...labFont, fill: 'rgba(255,46,151,.8)' }}>DEVOPS</text>
      </svg>
    </div>
  )
}
