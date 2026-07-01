import { useEffect, useRef } from 'react'
import PortfolioController from './scene.js'
import Loader from './components/Loader.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Other from './components/Other.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    // Defaults match the prototype's rendered props: motion auto · heroScene
    // core · glitch 0.5 · gridSpeed 1 · HUD on.
    const controller = new PortfolioController(root, {})
    controller.mount()
    return () => controller.unmount()
  }, [])

  return (
    <div
      ref={rootRef}
      style={{
        background: '#06070c',
        color: '#eafcff',
        fontFamily: "'IBM Plex Sans KR',system-ui,sans-serif",
        position: 'relative',
        overflowX: 'hidden',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <Loader />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Other />
      <Contact />
    </div>
  )
}
