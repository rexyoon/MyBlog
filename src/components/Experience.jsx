const REVEAL_TR =
  'opacity .7s cubic-bezier(.16,.84,.44,1), transform .7s cubic-bezier(.16,.84,.44,1)'
const EXP_CARD_TR =
  'opacity .7s cubic-bezier(.16,.84,.44,1), transform .7s cubic-bezier(.16,.84,.44,1), border-color .25s'

function Bullet({ children }) {
  return (
    <div style={{ display: 'flex', gap: '9px', fontFamily: "'IBM Plex Sans KR',sans-serif", fontSize: '.9rem', lineHeight: 1.55, color: '#b7c2d1' }}>
      <span style={{ color: '#00f0ff', flex: 'none' }}>▸</span>
      {children}
    </div>
  )
}

function TicketTag({ label, tone }) {
  const tones = {
    problem: { border: '1px solid rgba(255,46,151,.4)', color: '#ff9ecb' },
    cause: { border: '1px solid rgba(174,185,201,.35)', color: '#aeb9c9' },
    fix: { border: '1px solid rgba(0,240,255,.4)', color: '#7ef9ff' },
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

const expCardStyle = {
  position: 'relative',
  padding: 'clamp(22px,3vw,30px)',
  background: 'linear-gradient(180deg, rgba(12,17,27,.5), rgba(6,7,12,.5))',
  border: '1px solid rgba(120,150,180,.14)',
  borderLeft: '2px solid rgba(0,240,255,.45)',
  borderRadius: '5px',
  opacity: 0,
  transform: 'translateY(40px)',
  transition: EXP_CARD_TR,
}

export default function Experience() {
  return (
    <section
      data-screen-label="Experience"
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
          // 003 — FIELD LOG
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
          EXPERIENCE <span style={{ color: '#ff2e97' }}>// 실무 · SI</span>
        </h2>
        <p
          data-reveal
          style={{
            fontFamily: "'IBM Plex Sans KR',sans-serif",
            fontSize: 'clamp(1rem,1.5vw,1.1rem)',
            lineHeight: 1.7,
            color: '#aeb9c9',
            maxWidth: '58ch',
            margin: '0 0 clamp(36px,5vw,52px)',
            opacity: 0,
            transform: 'translateY(30px)',
            transition: REVEAL_TR,
          }}
        >
          대기업 SI 현장에서 관리자 시스템 개발·유지보수와 프론트엔드 구축을 맡았습니다.
          회사명(K사·S사)은 보안상 익명 처리했습니다.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
            gap: 'clamp(18px,2.4vw,26px)',
          }}
        >
          {/* K사 */}
          <article data-reveal className="card-exp" style={expCardStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', flexWrap: 'wrap', marginBottom: '12px' }}>
              <h3 style={{ margin: 0, fontFamily: "'JetBrains Mono',monospace", fontWeight: 800, fontSize: 'clamp(1.2rem,2.2vw,1.5rem)', color: '#eafcff' }}>
                K사{' '}
                <span style={{ fontFamily: "'IBM Plex Sans KR',sans-serif", fontWeight: 500, fontSize: '.62em', color: 'rgba(174,185,201,.75)' }}>건축자재 대기업</span>
              </h3>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: "'JetBrains Mono',monospace", fontSize: '10.5px', letterSpacing: '.06em', color: '#00f0ff', whiteSpace: 'nowrap' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#00f0ff', boxShadow: '0 0 6px #00f0ff', animation: 'blink 1.6s step-end infinite' }} />
                2026.03 – 현재
              </span>
            </div>
            <div style={{ fontFamily: "'IBM Plex Sans KR',sans-serif", fontSize: '.95rem', color: '#d7e2ee', marginBottom: '8px' }}>
              관리자 시스템 기능 개발 · 유지보수
            </div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10.5px', letterSpacing: '.03em', color: 'rgba(0,240,255,.6)', marginBottom: '16px' }}>
              Java 17 · Spring MVC · JSP · MyBatis · Oracle · Tomcat 9
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '18px' }}>
              <Bullet>
                관리자 화면 파일 암호화(AES) 업로드 기능 신규 개발 — 기획팀 자료 배포를 백엔드팀
                의존 없이 독립 운영하도록 개선
              </Bullet>
              <Bullet>파일명 중복을 AJAX 비동기로 실시간 검사 (XSSFilter 특수문자 이슈 해결)</Bullet>
            </div>
            <div style={{ border: '1px solid rgba(0,240,255,.16)', borderRadius: '5px', background: 'rgba(0,240,255,.03)', padding: '14px 16px' }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10px', letterSpacing: '.12em', color: 'rgba(0,240,255,.75)', marginBottom: '11px' }}>
                TROUBLESHOOTING — Tomcat HTTP 400
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontFamily: "'IBM Plex Sans KR',sans-serif", fontSize: '.83rem', lineHeight: 1.5, color: '#aeb9c9' }}>
                  <TicketTag label="문제" tone="problem" />운영 중 특정 요청에서 HTTP 400 반복 발생
                </div>
                <div style={{ fontFamily: "'IBM Plex Sans KR',sans-serif", fontSize: '.83rem', lineHeight: 1.5, color: '#aeb9c9' }}>
                  <TicketTag label="원인" tone="cause" />IPv6 loopback(::1) 요청의 HTTPS 핸드셰이크가 평문 HTTP 커넥터로 유입돼 파싱 실패
                </div>
                <div style={{ fontFamily: "'IBM Plex Sans KR',sans-serif", fontSize: '.83rem', lineHeight: 1.5, color: '#d7e2ee' }}>
                  <TicketTag label="해결" tone="fix" />프로토콜·포트 매핑을 정리해 근본 원인 해결 (앱 버그가 아닌 인프라 계층 문제로 구분)
                </div>
              </div>
            </div>
          </article>

          {/* S사 */}
          <article data-reveal className="card-exp" style={expCardStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', flexWrap: 'wrap', marginBottom: '12px' }}>
              <h3 style={{ margin: 0, fontFamily: "'JetBrains Mono',monospace", fontWeight: 800, fontSize: 'clamp(1.2rem,2.2vw,1.5rem)', color: '#eafcff' }}>
                S사{' '}
                <span style={{ fontFamily: "'IBM Plex Sans KR',sans-serif", fontWeight: 500, fontSize: '.62em', color: 'rgba(174,185,201,.75)' }}>대기업</span>
              </h3>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10.5px', letterSpacing: '.06em', color: 'rgba(174,185,201,.6)', whiteSpace: 'nowrap' }}>
                2026.04 – 05
              </span>
            </div>
            <div style={{ fontFamily: "'IBM Plex Sans KR',sans-serif", fontSize: '.95rem', color: '#d7e2ee', marginBottom: '8px' }}>
              KIE 데이터 라벨링 툴 프론트엔드
            </div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10.5px', letterSpacing: '.03em', color: 'rgba(0,240,255,.6)', marginBottom: '16px' }}>
              React · TypeScript · Zustand
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Bullet>AI 모델(KIE) 학습용 데이터 라벨링 툴 프론트엔드 구축</Bullet>
              <Bullet>모델 학습 상태를 실시간 폴링으로 표시하는 UI 및 진행률·epoch·step 메트릭 시각화</Bullet>
              <Bullet>HTTP/HTTPS 포트 혼용 CORS 오류를 proxy 설정으로 해결</Bullet>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
