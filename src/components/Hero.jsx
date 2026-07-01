const hudBase = {
  position: 'absolute',
  zIndex: 8,
  fontFamily: "'JetBrains Mono',monospace",
}

export default function Hero() {
  return (
    <section
      data-screen-label="Hero"
      style={{
        position: 'relative',
        minHeight: '100svh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid rgba(0,240,255,.12)',
      }}
    >
      <div data-three style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
      <div
        data-fallback
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          opacity: 0,
          transition: 'opacity .5s',
          background:
            'radial-gradient(120% 80% at 50% 118%, rgba(255,46,151,.16), transparent 58%),radial-gradient(100% 60% at 50% 4%, rgba(0,240,255,.10), transparent 60%),repeating-linear-gradient(0deg, rgba(0,240,255,.07) 0 1px, transparent 1px 46px),repeating-linear-gradient(90deg, rgba(0,240,255,.05) 0 1px, transparent 1px 46px),#06070c',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          background:
            'radial-gradient(120% 90% at 50% 116%, rgba(255,46,151,.14), transparent 55%),radial-gradient(80% 55% at 50% 0%, rgba(0,240,255,.07), transparent 60%)',
        }}
      />
      {/* scanlines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 6,
          pointerEvents: 'none',
          mixBlendMode: 'overlay',
          opacity: 0.5,
          background:
            'repeating-linear-gradient(0deg, rgba(0,0,0,0) 0 2px, rgba(0,0,0,.55) 2px 3px)',
        }}
      />
      {/* vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 6,
          pointerEvents: 'none',
          boxShadow: 'inset 0 0 180px 40px rgba(3,4,8,.82)',
        }}
      />

      {/* HUD corners */}
      <div
        data-hud
        style={{
          ...hudBase,
          top: 'clamp(16px,3vw,30px)',
          left: 'clamp(16px,3vw,30px)',
          fontSize: '11px',
          letterSpacing: '.14em',
          color: 'rgba(0,240,255,.72)',
          animation: 'hudflk 6s ease-in-out infinite',
        }}
      >
        <div
          style={{
            width: '24px',
            height: '24px',
            borderLeft: '1px solid rgba(0,240,255,.45)',
            borderTop: '1px solid rgba(0,240,255,.45)',
            marginBottom: '9px',
          }}
        />
        SYS://rexyoon
      </div>
      <div
        data-hud
        style={{
          ...hudBase,
          top: 'clamp(16px,3vw,30px)',
          right: 'clamp(16px,3vw,30px)',
          fontSize: '11px',
          letterSpacing: '.14em',
          color: 'rgba(0,240,255,.72)',
          textAlign: 'right',
          animation: 'hudflk 6s ease-in-out infinite .5s',
        }}
      >
        <div
          style={{
            width: '24px',
            height: '24px',
            borderRight: '1px solid rgba(0,240,255,.45)',
            borderTop: '1px solid rgba(0,240,255,.45)',
            margin: '0 0 9px auto',
          }}
        />
        STATUS: ONLINE{' '}
        <span style={{ color: '#00f0ff', animation: 'blink 1.4s step-end infinite' }}>●</span>
      </div>
      <div
        data-hud
        style={{
          ...hudBase,
          bottom: 'clamp(16px,3vw,30px)',
          left: 'clamp(16px,3vw,30px)',
          fontSize: '10.5px',
          letterSpacing: '.12em',
          color: 'rgba(0,240,255,.55)',
          lineHeight: 1.7,
        }}
      >
        RENDER: WEBGL
        <br />
        GRID: SYNTH—07
        <br />
        CORE: STABLE
        <div
          style={{
            width: '24px',
            height: '24px',
            borderLeft: '1px solid rgba(0,240,255,.4)',
            borderBottom: '1px solid rgba(0,240,255,.4)',
            marginTop: '9px',
          }}
        />
      </div>
      <div
        data-hud
        style={{
          ...hudBase,
          bottom: 'clamp(16px,3vw,30px)',
          right: 'clamp(16px,3vw,30px)',
          fontSize: '10.5px',
          letterSpacing: '.12em',
          color: 'rgba(0,240,255,.55)',
          lineHeight: 1.7,
          textAlign: 'right',
        }}
      >
        LAT 37.55 · LON 126.99
        <br />
        SESSION #A1—REX
        <br />
        ENC: AES—256
        <div
          style={{
            width: '24px',
            height: '24px',
            borderRight: '1px solid rgba(0,240,255,.4)',
            borderBottom: '1px solid rgba(0,240,255,.4)',
            margin: '9px 0 0 auto',
          }}
        />
      </div>

      {/* content */}
      <div
        data-hero-content
        style={{
          position: 'relative',
          zIndex: 5,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(22px,5vw,64px)',
          opacity: 0,
          transform: 'translateY(14px)',
          transition:
            'opacity .7s ease, transform .7s cubic-bezier(.2,.85,.25,1)',
        }}
      >
        <div
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 'clamp(11px,1.4vw,13px)',
            letterSpacing: '.34em',
            color: '#00f0ff',
            marginBottom: 'clamp(16px,2.5vw,26px)',
            textShadow: '0 0 18px rgba(0,240,255,.5)',
          }}
        >
          SYS://rexyoon — FULL-STACK
        </div>
        <h1
          style={{
            margin: 0,
            fontFamily: "'IBM Plex Sans KR',sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(3rem,11vw,8rem)',
            lineHeight: 0.94,
            letterSpacing: '-.02em',
            whiteSpace: 'nowrap',
          }}
        >
          <span
            style={{
              position: 'relative',
              display: 'inline-block',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                position: 'relative',
                zIndex: 2,
                color: '#eafcff',
                textShadow: '0 0 34px rgba(0,240,255,.25)',
              }}
            >
              정재윤
            </span>
            <span
              data-ghost
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 1,
                color: '#00f0ff',
                mixBlendMode: 'screen',
                opacity: 0,
                animation: 'gCyan 5.5s linear infinite',
              }}
            >
              정재윤
            </span>
            <span
              data-ghost
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 1,
                color: '#ff2e97',
                mixBlendMode: 'screen',
                opacity: 0,
                animation: 'gMag 5.5s linear infinite',
              }}
            >
              정재윤
            </span>
          </span>
        </h1>
        <div
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontWeight: 500,
            fontSize: 'clamp(1.1rem,3.2vw,2rem)',
            color: '#00f0ff',
            letterSpacing: '.02em',
            marginTop: 'clamp(8px,1.5vw,14px)',
            textShadow: '0 0 22px rgba(0,240,255,.4)',
          }}
        >
          / rexyoon
          <span style={{ animation: 'blink 1.05s step-end infinite' }}>_</span>
        </div>
        <p
          style={{
            fontFamily: "'IBM Plex Sans KR',sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(1.05rem,2.2vw,1.5rem)',
            lineHeight: 1.6,
            color: '#d7e2ee',
            margin: 'clamp(22px,3.5vw,34px) 0 0',
            maxWidth: '30ch',
          }}
        >
          화면부터 서버까지 단련한{' '}
          <span style={{ color: '#fff', fontWeight: 600 }}>풀스택 개발자</span>
        </p>
        <div
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 'clamp(10px,1.3vw,12px)',
            letterSpacing: '.24em',
            color: 'rgba(174,185,201,.75)',
            marginTop: 'clamp(16px,2.4vw,24px)',
          }}
        >
          BACKEND · FULL-STACK · LIVE SERVICE &amp; SI
        </div>
      </div>

      {/* scroll cue */}
      <div
        data-hud
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 'clamp(18px,3vw,30px)',
          transform: 'translateX(-50%)',
          zIndex: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '9px',
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: '10px',
          letterSpacing: '.34em',
          color: 'rgba(0,240,255,.7)',
        }}
      >
        SCROLL
        <div
          style={{
            position: 'relative',
            width: '1px',
            height: '34px',
            background: 'linear-gradient(rgba(0,240,255,.5), transparent)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '-1.5px',
              width: '4px',
              height: '8px',
              borderRadius: '2px',
              background: '#00f0ff',
              boxShadow: '0 0 8px #00f0ff',
              animation: 'bob 1.8s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </section>
  )
}
