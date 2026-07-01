export default function Loader() {
  return (
    <div
      data-loader
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: '#06070c',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 1,
        transition: 'opacity .6s ease',
      }}
    >
      <div style={{ width: 'min(560px,86vw)', fontFamily: "'JetBrains Mono',monospace" }}>
        <div
          data-boot-lines
          style={{
            fontSize: 'clamp(11px,2.4vw,13px)',
            lineHeight: 1.95,
            color: 'rgba(0,240,255,.85)',
            minHeight: '150px',
          }}
        />
        <div
          style={{
            marginTop: '16px',
            fontSize: 'clamp(13px,3vw,15px)',
            color: '#eafcff',
            letterSpacing: '.14em',
          }}
        >
          INITIALIZING
          <span style={{ animation: 'blink 1s step-end infinite' }}>…</span>
        </div>
        <div
          style={{
            marginTop: '12px',
            height: '3px',
            background: 'rgba(0,240,255,.14)',
            borderRadius: '2px',
            overflow: 'hidden',
          }}
        >
          <div
            data-boot-bar
            style={{
              height: '100%',
              width: '0%',
              background: 'linear-gradient(90deg,#00f0ff,#ff2e97)',
              boxShadow: '0 0 12px rgba(0,240,255,.7)',
              transition: 'width .22s ease',
            }}
          />
        </div>
      </div>
    </div>
  )
}
