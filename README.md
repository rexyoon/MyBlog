# 정재윤 / rexyoon — 사이버펑크 풀스택 포트폴리오

A cyberpunk × glitch single-page developer portfolio, implemented in **React + Vite**
from the Claude Design prototype in [`project/`](./project).

Void-black canvas, cyan/magenta neon accents, a Three.js hero (rotating neon
icosahedron core + orbital rings over an infinite synthwave grid), a terminal
"INITIALIZING…" boot loader, RGB-split name glitch, an isometric 3D neon stat
graph, and scroll-reveal sections that grow calmer toward the bottom for
readability.

## Stack

- **React 18** + **Vite 5**
- **Three.js** (`0.128.x`) for the hero WebGL scene
- Fonts: JetBrains Mono (headings/labels/data) + IBM Plex Sans KR (body), via Google Fonts

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

```
index.html                 # entry, fonts + favicon
src/
  main.jsx                 # React root
  App.jsx                  # composes sections, mounts the scene controller
  index.css                # tokens, keyframes, hover states, reduced-motion
  scene.js                 # PortfolioController — Three.js hero scene, boot
                           #   loader, scroll reveals, stat-bar animation,
                           #   parallax, RGB glitch (ported from the prototype)
  components/
    Loader.jsx             # terminal boot sequence
    Hero.jsx               # 3D hero, glitching name, HUD corners, scroll cue
    About.jsx              # intro, headline stats, isometric stat graph, stack
    Projects.jsx           # KoALa (featured/LIVE), Hancare, MuYang
    Experience.jsx         # K사 / S사 SI field log (anonymized)
    Other.jsx              # 숨 여행,틈 (award), POP:CON, JARVIS archive
    Contact.jsx            # GitHub + email CTAs, footer
```

## Behaviour notes

- **Hero scene** defaults to `core` (the prototype's default). The controller also
  contains the `sun`, `wave`, and `grid` variants from the design; swap by passing
  props to `PortfolioController` in `App.jsx`.
- **Motion** auto-adapts: full on desktop, lighter particle/glitch load on mobile
  (`pointer: coarse` / narrow viewports), and a static single-frame render under
  `prefers-reduced-motion: reduce`.
- If WebGL is unavailable, the hero falls back to a static neon-grid gradient.
- The contact email is kept as `happyjj407@naver.com`, matching the final design.

## Design source

The original Claude Design handoff bundle lives under [`project/`](./project)
(HTML/CSS/JS prototype + assets) and [`chats/`](./chats) (the design conversation).
This React app recreates that prototype's visual output.
# MyBlog
