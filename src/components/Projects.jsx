const REVEAL_TR =
  'opacity .7s cubic-bezier(.16,.84,.44,1), transform .7s cubic-bezier(.16,.84,.44,1)'
const CARD_TR =
  'border-color .25s, box-shadow .25s, opacity .75s cubic-bezier(.16,.84,.44,1), transform .75s cubic-bezier(.16,.84,.44,1), filter .75s cubic-bezier(.16,.84,.44,1)'

const cardHidden = {
  opacity: 0,
  transform: 'translateY(46px) scale(.985)',
  filter: 'blur(6px)',
}

function TicketTag({ label, tone }) {
  const tones = {
    problem: { border: '1px solid rgba(255,46,151,.4)', color: '#ff9ecb' },
    cause: { border: '1px solid rgba(174,185,201,.35)', color: '#aeb9c9' },
    fix: { border: '1px solid rgba(0,240,255,.4)', color: '#7ef9ff' },
    result: { border: '1px solid rgba(0,240,255,.6)', color: '#06070c', background: '#00f0ff' },
  }
  return (
    <span
      style={{
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: '9.5px',
        letterSpacing: '.1em',
        padding: '2px 6px',
        borderRadius: '2px',
        marginRight: '8px',
        ...tones[tone],
      }}
    >
      {label}
    </span>
  )
}

export default function Projects() {
  return (
    <section
      data-screen-label="Projects"
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
            transition: REVEAL_TR,
          }}
        >
          // 002
        </div>
        <h2
          data-reveal
          style={{
            margin: '0 0 14px',
            fontFamily: "'JetBrains Mono',monospace",
            fontWeight: 800,
            fontSize: 'clamp(1.9rem,5.2vw,3.4rem)',
            letterSpacing: '-.01em',
            color: '#eafcff',
            opacity: 0,
            transform: 'translateY(34px)',
            transition: REVEAL_TR,
          }}
        >
          PROJECTS <span style={{ color: '#ff2e97' }}>// TRAINING LOG</span>
        </h2>
        <p
          data-reveal
          style={{
            fontFamily: "'IBM Plex Sans KR',sans-serif",
            fontSize: 'clamp(1rem,1.5vw,1.1rem)',
            lineHeight: 1.7,
            color: '#aeb9c9',
            maxWidth: '56ch',
            margin: '0 0 clamp(36px,5vw,52px)',
            opacity: 0,
            transform: 'translateY(30px)',
            transition: REVEAL_TR,
          }}
        >
          혼자 설계·구현한 실서비스와 진행 중인 프로젝트입니다. KoALa는 실제 동작하는 서비스,
          Hancare·무양은 개발 중 UI 설계(목업)입니다.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
            gap: 'clamp(18px,2.4vw,26px)',
          }}
        >
          {/* ===== FEATURED: KoALa ===== */}
          <article
            data-reveal
            className="card-featured"
            style={{
              gridColumn: '1 / -1',
              position: 'relative',
              padding: 'clamp(24px,3.2vw,36px)',
              background: 'linear-gradient(180deg, rgba(12,17,27,.62), rgba(6,7,12,.55))',
              border: '1px solid rgba(0,240,255,.28)',
              borderRadius: '6px',
              ...cardHidden,
              transition: CARD_TR,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '12px',
                flexWrap: 'wrap',
                marginBottom: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '12px', color: 'rgba(120,150,180,.6)' }}>
                  01
                </span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: '10px',
                    letterSpacing: '.16em',
                    padding: '5px 9px',
                    borderRadius: '3px',
                    border: '1px solid rgba(0,240,255,.4)',
                    color: '#7ef9ff',
                    background: 'rgba(0,240,255,.08)',
                  }}
                >
                  ★ FEATURED
                </span>
              </div>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: '10px',
                  letterSpacing: '.16em',
                  padding: '5px 9px',
                  borderRadius: '3px',
                  border: '1px solid rgba(0,240,255,.5)',
                  color: '#00f0ff',
                  background: 'rgba(0,240,255,.1)',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#00f0ff',
                    boxShadow: '0 0 8px #00f0ff',
                    animation: 'blink 1.6s step-end infinite',
                  }}
                />
                LIVE · 실서비스
              </span>
            </div>
            <h3
              style={{
                margin: 0,
                fontFamily: "'JetBrains Mono',monospace",
                fontWeight: 800,
                fontSize: 'clamp(1.5rem,2.8vw,2rem)',
                color: '#eafcff',
                letterSpacing: '-.01em',
              }}
            >
              KoALa{' '}
              <span style={{ fontFamily: "'IBM Plex Sans KR',sans-serif", fontWeight: 500, fontSize: '.62em', color: 'rgba(174,185,201,.75)' }}>
                아트소품 판매 포털
              </span>
            </h3>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11.5px', letterSpacing: '.03em', color: 'rgba(0,240,255,.6)', margin: '8px 0 16px' }}>
              Full-stack (1인) · 웹 + 모바일 · 2026.03 – 07
            </div>
            <p
              style={{
                fontFamily: "'IBM Plex Sans KR',sans-serif",
                fontSize: '1rem',
                lineHeight: 1.72,
                color: '#c2ccda',
                margin: '0 0 22px',
                maxWidth: '64ch',
              }}
            >
              한 명이 백엔드·웹·모바일을 모두 설계·구현해 실제로 동작하는 아트소품 이커머스 포털.
              토스페이먼츠 결제부터 주문 완료까지 실제 구매 흐름을 구현했습니다.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
                gap: 'clamp(16px,2vw,24px)',
                marginBottom: '22px',
              }}
            >
              <div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10.5px', letterSpacing: '.2em', color: 'rgba(0,240,255,.7)', marginBottom: '12px' }}>
                  FEATURES
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    '회원·상품·장바구니·주문·결제·위시리스트 REST API 설계',
                    '토스페이먼츠 결제 연동 — 결제 성공 후 주문 저장·완료 처리',
                    '마이페이지·주문내역 등 로그인 기능을 웹·모바일 양쪽 제공',
                  ].map((f, i) => (
                    <div key={i} style={{ display: 'flex', gap: '9px', fontFamily: "'IBM Plex Sans KR',sans-serif", fontSize: '.92rem', lineHeight: 1.55, color: '#b7c2d1' }}>
                      <span style={{ color: '#00f0ff', flex: 'none' }}>▸</span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ border: '1px solid rgba(0,240,255,.18)', borderRadius: '5px', background: 'rgba(0,240,255,.03)', padding: '16px 18px' }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10.5px', letterSpacing: '.14em', color: 'rgba(0,240,255,.75)', marginBottom: '13px' }}>
                  TROUBLESHOOTING — 웹·모바일 토큰 갱신
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                  <div style={{ fontFamily: "'IBM Plex Sans KR',sans-serif", fontSize: '.86rem', lineHeight: 1.5, color: '#aeb9c9' }}>
                    <TicketTag label="문제" tone="problem" />같은 API를 공유하는데 일정 시간 뒤 한쪽 세션이 끊김
                  </div>
                  <div style={{ fontFamily: "'IBM Plex Sans KR',sans-serif", fontSize: '.86rem', lineHeight: 1.5, color: '#aeb9c9' }}>
                    <TicketTag label="원인" tone="cause" />토큰 저장 위치·갱신 시점 차이로 재발급 흐름이 클라이언트마다 어긋남
                  </div>
                  <div style={{ fontFamily: "'IBM Plex Sans KR',sans-serif", fontSize: '.86rem', lineHeight: 1.5, color: '#aeb9c9' }}>
                    <TicketTag label="해결" tone="fix" />클라이언트별 저장 방식을 정리하고 만료 감지→리프레시 재발급을 공통화
                  </div>
                  <div style={{ fontFamily: "'IBM Plex Sans KR',sans-serif", fontSize: '.86rem', lineHeight: 1.5, color: '#d7e2ee' }}>
                    <TicketTag label="결과" tone="result" />웹·모바일 모두에서 세션이 끊기지 않고 일관 유지
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
                paddingTop: '18px',
                borderTop: '1px solid rgba(0,240,255,.1)',
              }}
            >
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', letterSpacing: '.03em', color: 'rgba(0,240,255,.7)' }}>
                Java · Spring Boot · JWT · TypeScript (Web·Mobile) · TossPayments
              </div>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a
                  href="https://koala-art.co.kr/"
                  target="_blank"
                  rel="noopener"
                  className="link-site"
                  style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11.5px', letterSpacing: '.08em', color: '#00f0ff', textDecoration: 'none', borderBottom: '1px solid rgba(0,240,255,.3)', paddingBottom: '2px' }}
                >
                  SITE ↗
                </a>
                <a
                  href="https://github.com/heron-Arso"
                  target="_blank"
                  rel="noopener"
                  className="link-repo"
                  style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11.5px', letterSpacing: '.08em', color: '#aeb9c9', textDecoration: 'none', borderBottom: '1px solid rgba(174,185,201,.25)', paddingBottom: '2px' }}
                >
                  REPO ↗
                </a>
              </div>
            </div>
          </article>

          {/* ===== Hancare ===== */}
          <article
            data-reveal
            className="card-dev"
            style={{
              position: 'relative',
              padding: 'clamp(22px,3vw,30px)',
              background: 'linear-gradient(180deg, rgba(12,17,27,.6), rgba(6,7,12,.55))',
              border: '1px solid rgba(120,150,180,.16)',
              borderRadius: '5px',
              ...cardHidden,
              transition: CARD_TR,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '12px', color: 'rgba(120,150,180,.6)' }}>02</span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: '10px',
                  letterSpacing: '.14em',
                  padding: '5px 9px',
                  borderRadius: '3px',
                  border: '1px solid rgba(255,46,151,.5)',
                  color: '#ff8fc6',
                  background: 'rgba(255,46,151,.1)',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff2e97', boxShadow: '0 0 8px #ff2e97' }} />
                DEV · UI
              </span>
            </div>
            <h3 style={{ margin: 0, fontFamily: "'JetBrains Mono',monospace", fontWeight: 800, fontSize: 'clamp(1.35rem,2.4vw,1.7rem)', color: '#eafcff', letterSpacing: '-.01em' }}>
              Hancare{' '}
              <span style={{ fontFamily: "'IBM Plex Sans KR',sans-serif", fontWeight: 500, fontSize: '.62em', color: 'rgba(174,185,201,.75)' }}>한의원 예약·검색</span>
            </h3>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', letterSpacing: '.03em', color: 'rgba(0,240,255,.6)', margin: '7px 0 14px' }}>
              Full-stack (1인) · 모바일 · 2026.06 – 08
            </div>
            <p style={{ fontFamily: "'IBM Plex Sans KR',sans-serif", fontSize: '.95rem', lineHeight: 1.65, color: '#b7c2d1', margin: '0 0 16px' }}>
              증상 기반으로 주변 한의원을 찾아 예약·관리하는 모바일 서비스. 검진결과·처방전은 암호화
              보관하도록 설계했습니다.
            </p>
            <div style={{ border: '1px solid rgba(255,46,151,.2)', borderRadius: '5px', background: 'rgba(255,46,151,.03)', padding: '14px 16px', margin: '0 0 18px' }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10px', letterSpacing: '.12em', color: 'rgba(255,142,198,.9)', marginBottom: '9px' }}>
                ★ 핵심 설계 — 접근성 (노인 / 일반)
              </div>
              <p style={{ fontFamily: "'IBM Plex Sans KR',sans-serif", fontSize: '.85rem', lineHeight: 1.55, color: '#b7c2d1', margin: '0 0 11px' }}>
                같은 정보 구조를 유지하면서 밀도·크기만 다르게 — “누가 쓰는지”를 고려한 제품적 접근.
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10px', padding: '4px 8px', border: '1px solid rgba(120,150,180,.25)', borderRadius: '3px', color: '#cdd8e6' }}>
                  노인 모드 · 큰 글씨·터치
                </span>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10px', padding: '4px 8px', border: '1px solid rgba(120,150,180,.25)', borderRadius: '3px', color: '#cdd8e6' }}>
                  일반 모드 · 높은 밀도
                </span>
              </div>
            </div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', letterSpacing: '.04em', color: 'rgba(0,240,255,.7)', marginBottom: '18px' }}>
              Java · Spring Boot · TypeScript
            </div>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="https://github.com/hancare-orgnazation"
                target="_blank"
                rel="noopener"
                className="link-repo"
                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11.5px', letterSpacing: '.08em', color: '#aeb9c9', textDecoration: 'none', borderBottom: '1px solid rgba(174,185,201,.25)', paddingBottom: '2px' }}
              >
                REPO ↗
              </a>
            </div>
          </article>

          {/* ===== MuYang ===== */}
          <article
            data-reveal
            className="card-dev"
            style={{
              position: 'relative',
              padding: 'clamp(22px,3vw,30px)',
              background: 'linear-gradient(180deg, rgba(12,17,27,.6), rgba(6,7,12,.55))',
              border: '1px solid rgba(120,150,180,.16)',
              borderRadius: '5px',
              ...cardHidden,
              transition: CARD_TR,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '12px', color: 'rgba(120,150,180,.6)' }}>03</span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: '10px',
                  letterSpacing: '.14em',
                  padding: '5px 9px',
                  borderRadius: '3px',
                  border: '1px solid rgba(255,46,151,.5)',
                  color: '#ff8fc6',
                  background: 'rgba(255,46,151,.1)',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff2e97', boxShadow: '0 0 8px #ff2e97' }} />
                DEV · UI
              </span>
            </div>
            <h3 style={{ margin: 0, fontFamily: "'JetBrains Mono',monospace", fontWeight: 800, fontSize: 'clamp(1.35rem,2.4vw,1.7rem)', color: '#eafcff', letterSpacing: '-.01em' }}>
              MuYang{' '}
              <span style={{ fontFamily: "'IBM Plex Sans KR',sans-serif", fontWeight: 500, fontSize: '.6em', color: 'rgba(174,185,201,.7)' }}>무양 · 반려동물 이커머스</span>
            </h3>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', letterSpacing: '.03em', color: 'rgba(0,240,255,.6)', margin: '7px 0 14px' }}>
              Full-stack (1인) · 모바일 · 2026.05 – 09
            </div>
            <p style={{ fontFamily: "'IBM Plex Sans KR',sans-serif", fontSize: '.95rem', lineHeight: 1.65, color: '#b7c2d1', margin: '0 0 18px' }}>
              반려동물과 보호자를 위한 모바일 이커머스. 상품 상세·장바구니·마이페이지 등 핵심 화면을
              네이비·크림 톤으로 일관되게 설계했습니다.
            </p>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', letterSpacing: '.04em', color: 'rgba(0,240,255,.7)', marginBottom: '18px' }}>
              Java · Spring Boot · TypeScript
            </div>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="https://github.com/muyangshop"
                target="_blank"
                rel="noopener"
                className="link-repo"
                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11.5px', letterSpacing: '.08em', color: '#aeb9c9', textDecoration: 'none', borderBottom: '1px solid rgba(174,185,201,.25)', paddingBottom: '2px' }}
              >
                REPO ↗
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
