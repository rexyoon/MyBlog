import * as THREE from 'three'

/**
 * PortfolioController — framework-agnostic port of the Claude Design DC logic
 * class. Drives the Three.js hero scene (core/sun/wave/grid), the terminal boot
 * loader, scroll reveals, the isometric stat bars, mouse parallax, and the
 * occasional RGB glitch — with reduced-motion and mobile fallbacks.
 *
 * Mirrors the behaviour of `rexyoon Portfolio.dc.html`; defaults match the
 * prototype's rendered props (motion auto · heroScene core · glitch 0.5 ·
 * gridSpeed 1 · HUD on).
 */
export default class PortfolioController {
  constructor(root, props = {}) {
    this.root = root
    this.params = {
      motion: props.motion || 'auto',
      glitch: props.glitchIntensity == null ? 0.5 : props.glitchIntensity,
      gridSpeed: props.gridSpeed == null ? 1 : props.gridSpeed,
      heroScene: props.heroScene || 'core',
      showHud: props.showHud == null ? true : props.showHud,
    }
  }

  mount() {
    const root = this.root
    if (!root) return
    const reduceMQ = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    this.mobile =
      window.innerWidth < 760 || window.matchMedia('(pointer:coarse)').matches
    let mode = this.params.motion
    if (mode === 'auto') mode = reduceMQ ? 'static' : this.mobile ? 'lite' : 'full'
    if (reduceMQ) mode = 'static'
    this.mode = mode
    this.reduced = mode === 'static'

    if (!this.params.showHud)
      root.querySelectorAll('[data-hud]').forEach((n) => (n.style.display = 'none'))

    this._bootTimers = []
    this.runBoot()
    this.loadThree()
    this.setupGauges()
    this.setupReveals()
    this.setupParallax()
    this._onResize = () => this.onResize()
    window.addEventListener('resize', this._onResize)
    this._safety = setTimeout(() => this.reveal(), 4500)
  }

  unmount() {
    this.teardown()
  }

  teardown() {
    this._dead = true
    if (this._raf) cancelAnimationFrame(this._raf)
    if (this._onResize) window.removeEventListener('resize', this._onResize)
    if (this._onMove) window.removeEventListener('pointermove', this._onMove)
    if (this._safety) clearTimeout(this._safety)
    if (this._bootTimers) this._bootTimers.forEach(clearTimeout)
    if (this.renderer) {
      try {
        this.renderer.dispose()
        const c = this.renderer.domElement
        if (c && c.parentNode) c.parentNode.removeChild(c)
      } catch (e) {}
    }
  }

  runBoot() {
    const box = this.root.querySelector('[data-boot-lines]')
    const bar = this.root.querySelector('[data-boot-bar]')
    const lines = [
      'SYS://rexyoon — cold boot',
      '> mount /dev/portfolio ........ [OK]',
      '> load neon_grid.glsl ......... [OK]',
      '> spin up render_core ........ [OK]',
      '> auth: JWT handshake ......... [OK]',
      '> STATUS: ONLINE',
    ]
    if (this.reduced) {
      if (box) box.innerHTML = lines.map((l) => '<div>' + l + '</div>').join('')
      if (bar) bar.style.width = '100%'
      this._bootTimers.push(
        setTimeout(() => {
          this.bootDone = true
          this.tryReveal()
        }, 450),
      )
      return
    }
    let i = 0
    const step = () => {
      if (this._dead) return
      if (i < lines.length) {
        const d = document.createElement('div')
        d.textContent = lines[i]
        d.style.opacity = '0'
        d.style.transition = 'opacity .2s'
        if (box) {
          box.appendChild(d)
          requestAnimationFrame(() => {
            d.style.opacity = '1'
          })
        }
        if (bar) bar.style.width = Math.round(((i + 1) / lines.length) * 100) + '%'
        i++
        this._bootTimers.push(setTimeout(step, 185))
      } else {
        this._bootTimers.push(
          setTimeout(() => {
            this.bootDone = true
            this.tryReveal()
          }, 260),
        )
      }
    }
    step()
  }

  loadThree() {
    // three is bundled (imported), so it is available synchronously.
    try {
      this.initThree()
    } catch (e) {
      console.warn('three init failed', e)
      this.threeFailed = true
      this.showFallback()
    }
    this.threeReady = true
    this.tryReveal()
  }

  showFallback() {
    const f = this.root.querySelector('[data-fallback]')
    if (f) f.style.opacity = '1'
  }

  tryReveal() {
    if (this.bootDone && (this.threeReady || this.threeFailed)) this.reveal()
  }

  reveal() {
    if (this._revealed || this._dead) return
    this._revealed = true
    if (this._safety) clearTimeout(this._safety)
    const loader = this.root.querySelector('[data-loader]')
    if (loader) {
      loader.style.opacity = '0'
      loader.style.pointerEvents = 'none'
      setTimeout(() => {
        if (loader) loader.style.display = 'none'
      }, 600)
    }
    const hero = this.root.querySelector('[data-hero-content]')
    if (hero) {
      hero.style.opacity = '1'
      hero.style.transform = 'none'
    }
    if (!this.reduced) {
      this.root.querySelectorAll('[data-ghost]').forEach((g, idx) => {
        const anim =
          idx === 0 ? 'gCyan 5.5s linear infinite' : 'gMag 5.5s linear infinite'
        g.style.animation = 'none'
        void g.offsetWidth
        g.style.animation = anim
      })
    }
  }

  buildFigure(color, opacity) {
    const grp = new THREE.Group()
    const mat = new THREE.MeshBasicMaterial({
      color,
      wireframe: true,
      transparent: true,
      opacity,
    })
    grp.userData.mat = mat
    const add = (geo, x, y, z, rx, ry, rz) => {
      const m = new THREE.Mesh(geo, mat)
      m.position.set(x, y, z)
      m.rotation.set(rx || 0, ry || 0, rz || 0)
      grp.add(m)
    }
    add(new THREE.IcosahedronGeometry(0.42, 1), 0, 1.78, 0)
    add(new THREE.CylinderGeometry(0.16, 0.18, 0.28, 6), 0, 1.45, 0)
    add(new THREE.CylinderGeometry(0.92, 0.5, 1.55, 10), 0, 0.62, 0)
    add(new THREE.SphereGeometry(0.3, 8, 6), -0.86, 1.3, 0)
    add(new THREE.SphereGeometry(0.3, 8, 6), 0.86, 1.3, 0)
    add(new THREE.CylinderGeometry(0.2, 0.17, 0.95, 7), -1.03, 0.78, 0.02, 0, 0, 0.28)
    add(new THREE.SphereGeometry(0.16, 6, 5), -1.17, 0.28, 0.02)
    add(new THREE.CylinderGeometry(0.16, 0.12, 0.9, 7), -1.22, -0.2, 0.05, 0, 0, 0.16)
    add(new THREE.SphereGeometry(0.14, 6, 5), -1.3, -0.66, 0.06)
    add(new THREE.CylinderGeometry(0.2, 0.17, 0.95, 7), 1.03, 0.78, 0.02, 0, 0, -0.28)
    add(new THREE.SphereGeometry(0.16, 6, 5), 1.17, 0.28, 0.02)
    add(new THREE.CylinderGeometry(0.16, 0.12, 0.9, 7), 1.22, -0.2, 0.05, 0, 0, -0.16)
    add(new THREE.SphereGeometry(0.14, 6, 5), 1.3, -0.66, 0.06)
    add(new THREE.CylinderGeometry(0.5, 0.58, 0.5, 8), 0, -0.32, 0)
    add(new THREE.CylinderGeometry(0.28, 0.22, 1.05, 8), -0.26, -1.05, 0)
    add(new THREE.SphereGeometry(0.2, 7, 6), -0.26, -1.62, 0)
    add(new THREE.CylinderGeometry(0.2, 0.14, 1.0, 7), -0.26, -2.15, 0)
    add(new THREE.BoxGeometry(0.26, 0.14, 0.5), -0.26, -2.7, 0.1)
    add(new THREE.CylinderGeometry(0.28, 0.22, 1.05, 8), 0.26, -1.05, 0)
    add(new THREE.SphereGeometry(0.2, 7, 6), 0.26, -1.62, 0)
    add(new THREE.CylinderGeometry(0.2, 0.14, 1.0, 7), 0.26, -2.15, 0)
    add(new THREE.BoxGeometry(0.26, 0.14, 0.5), 0.26, -2.7, 0.1)
    grp.scale.set(1.05, 1.05, 1.05)
    return grp
  }

  buildStage() {
    this.stage = new THREE.Group()
    this.scene.add(this.stage)
    const k = this.params.heroScene || 'core'
    this.sceneKind = k
    this._baseX = 0
    if (k === 'figure') {
      this.buildSceneFigure()
      this.camZ = 12
      this.lookAt = new THREE.Vector3(0, 0.25, -1)
    } else if (k === 'sun') {
      this.buildSceneSun()
      this.camZ = 12
      this.lookAt = new THREE.Vector3(0, 1.5, -8)
    } else if (k === 'wave') {
      this.buildSceneWave()
      this.camZ = 11
      this.lookAt = new THREE.Vector3(0, -0.3, -3)
    } else if (k === 'grid') {
      this.camZ = 12
      this.lookAt = new THREE.Vector3(0, 0.2, -4)
    } else {
      this.buildSceneCore()
      this.camZ = 9.5
      this.lookAt = new THREE.Vector3(0, 0.9, -0.4)
    }
  }

  buildSceneCore() {
    const g = new THREE.Group()
    const ico = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.7, 1),
      new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        wireframe: true,
        transparent: true,
        opacity: 0.85,
      }),
    )
    g.add(ico)
    const coreObj = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.58, 1),
      new THREE.MeshBasicMaterial({
        color: 0x9df6ff,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
      }),
    )
    g.add(coreObj)
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.4, 0.02, 6, 64),
      new THREE.MeshBasicMaterial({
        color: 0xff2e97,
        wireframe: true,
        transparent: true,
        opacity: 0.5,
      }),
    )
    ring.rotation.x = Math.PI * 0.5
    g.add(ring)
    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.05, 0.015, 6, 64),
      new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        wireframe: true,
        transparent: true,
        opacity: 0.32,
      }),
    )
    ring2.rotation.x = Math.PI * 0.33
    ring2.rotation.y = 0.4
    g.add(ring2)
    const ghost = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.7, 1),
      new THREE.MeshBasicMaterial({
        color: 0xff2e97,
        wireframe: true,
        transparent: true,
        opacity: 0,
      }),
    )
    ghost.visible = false
    g.add(ghost)
    g.position.set(0, 0.9, 0)
    this.stage.add(g)
    this.core = { g, ico, coreObj, ring, ring2, ghost }
    this.gTarget = g
    this.gGhost = ghost
    this.gGhostMat = ghost.material
  }

  buildSceneSun() {
    const seg = 64
    const geo = new THREE.CircleGeometry(5.2, seg)
    const posAttr = geo.attributes.position
    const colorArr = new Float32Array(posAttr.count * 3)
    const top = new THREE.Color(0x00f0ff),
      bot = new THREE.Color(0xff2e97)
    for (let i = 0; i < posAttr.count; i++) {
      const yy = posAttr.getY(i)
      const tt = Math.max(0, Math.min(1, (yy / 5.2 + 1) / 2))
      const c = bot.clone().lerp(top, tt)
      colorArr[i * 3] = c.r
      colorArr[i * 3 + 1] = c.g
      colorArr[i * 3 + 2] = c.b
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colorArr, 3))
    const sun = new THREE.Mesh(
      geo,
      new THREE.MeshBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.95,
        fog: false,
      }),
    )
    sun.position.set(0, 2.4, -18)
    this.stage.add(sun)
    const halo = new THREE.Mesh(
      new THREE.CircleGeometry(6.6, seg),
      new THREE.MeshBasicMaterial({
        color: 0xff2e97,
        transparent: true,
        opacity: 0.12,
        blending: THREE.AdditiveBlending,
        fog: false,
      }),
    )
    halo.position.set(0, 2.4, -18.2)
    this.stage.add(halo)
    const bars = new THREE.Group()
    const barMat = new THREE.MeshBasicMaterial({ color: 0x06070c, fog: false })
    for (let i = 0; i < 7; i++) {
      const hh = 0.16 + i * 0.06
      const bar = new THREE.Mesh(new THREE.PlaneGeometry(11, hh), barMat)
      bar.position.set(0, -0.35 - i * 0.66, 0)
      bars.add(bar)
    }
    bars.position.set(0, 2.4, -17.8)
    this.stage.add(bars)
    this.sun = sun
    this.sunBars = bars
    this.sunHalo = halo
    this.gTarget = sun
    this.gGhost = null
    this.gGhostMat = null
  }

  buildSceneWave() {
    const s = this.mobile ? 26 : 46
    const geo = new THREE.PlaneGeometry(28, 26, s, s)
    const mesh = new THREE.Mesh(
      geo,
      new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        wireframe: true,
        transparent: true,
        opacity: 0.5,
      }),
    )
    mesh.rotation.x = -Math.PI / 2.05
    mesh.position.set(0, -1.5, -3)
    this.stage.add(mesh)
    this.wave = { mesh, geo, base: geo.attributes.position.array.slice(0) }
    this.gTarget = mesh
    this.gGhost = null
    this.gGhostMat = null
  }

  buildSceneFigure() {
    const fig = this.buildFigure(0x00f0ff, 0.9)
    const ghost = this.buildFigure(0xff2e97, 0.0)
    ghost.visible = false
    fig.position.y = 0.4
    ghost.position.y = 0.4
    this.stage.add(fig)
    this.stage.add(ghost)
    this.fig = fig
    this.ghost = ghost
    this.gTarget = fig
    this.gGhost = ghost
    this.gGhostMat = ghost.userData.mat
  }

  updateStage(t) {
    const k = this.sceneKind
    if (k === 'core' && this.core) {
      const c = this.core
      c.g.rotation.y = t * 0.25 + this._mx * 0.5
      c.g.rotation.x = this._my * 0.25
      c.ico.rotation.x = t * 0.16
      c.ico.rotation.y = t * 0.2
      c.coreObj.scale.setScalar(1 + Math.sin(t * 2.2) * 0.09)
      c.ring.rotation.z = t * 0.5
      c.ring2.rotation.z = -t * 0.34
      if (c.ghost) c.ghost.rotation.copy(c.ico.rotation)
      this.updateGlitch(t)
    } else if (k === 'figure' && this.fig) {
      this.fig.rotation.y = Math.sin(t * 0.5) * 0.12 + this._mx * 0.5
      this.fig.rotation.x = this._my * 0.12
      this.fig.scale.y = 1.05 * (1 + Math.sin(t * 1.4) * 0.012)
      this.fig.position.y = 0.4 + Math.sin(t * 0.6) * 0.05
      if (this.ghost) {
        this.ghost.rotation.copy(this.fig.rotation)
        this.ghost.position.y = this.fig.position.y
        this.ghost.scale.copy(this.fig.scale)
      }
      this.updateGlitch(t)
    } else if (k === 'sun' && this.sun) {
      const y = 2.4 + Math.sin(t * 0.5) * 0.06
      this.sun.position.y = y
      if (this.sunBars) this.sunBars.position.y = y
      if (this.sunHalo) this.sunHalo.position.y = y
      this.updateGlitch(t)
    } else if (k === 'wave' && this.wave) {
      const p = this.wave.geo.attributes.position,
        b = this.wave.base
      for (let i = 0; i < p.count; i++) {
        const x = b[i * 3],
          yv = b[i * 3 + 1]
        p.setZ(i, Math.sin(x * 0.5 + t * 1.2) * 0.5 + Math.cos(yv * 0.5 + t * 0.9) * 0.5)
      }
      p.needsUpdate = true
      this.wave.mesh.rotation.z = this._mx * 0.12
      this.updateGlitch(t)
    }
  }

  clearStage() {
    if (this.stage) {
      this.scene.remove(this.stage)
      this.stage.traverse((o) => {
        if (o.geometry) o.geometry.dispose()
        if (o.material) {
          if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose())
          else o.material.dispose()
        }
      })
    }
    this.stage = null
    this.core = null
    this.sun = null
    this.sunBars = null
    this.sunHalo = null
    this.wave = null
    this.fig = null
    this.ghost = null
    this.gTarget = null
    this.gGhost = null
    this.gGhostMat = null
  }

  rebuildStage() {
    this.clearStage()
    this.buildStage()
    if (this.mode === 'static') this.renderOnce()
  }

  initThree() {
    const host = this.root.querySelector('[data-three]')
    const w = host.clientWidth || window.innerWidth
    const h = host.clientHeight || window.innerHeight
    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x06070c, 18, 82)
    const cam = new THREE.PerspectiveCamera(58, w / h, 0.1, 160)
    cam.position.set(0, 1.6, 12)
    const renderer = new THREE.WebGLRenderer({
      antialias: !this.mobile,
      alpha: true,
      powerPreference: 'high-performance',
    })
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, this.mobile ? 1.5 : 2))
    renderer.setSize(w, h)
    renderer.domElement.style.display = 'block'
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    host.appendChild(renderer.domElement)
    this.scene = scene
    this.camera = cam
    this.renderer = renderer
    this.host = host

    const div = this.mobile ? 60 : 120
    const grid = new THREE.GridHelper(240, div, 0xff2e97, 0x0a8ea0)
    grid.material.transparent = true
    grid.material.opacity = 0.5
    grid.position.y = -2
    scene.add(grid)
    this.grid = grid
    this.cell = 240 / div

    this._defLook = new THREE.Vector3(0, 0.4, -1)
    this.buildStage()

    const pcount = this.reduced ? 0 : this.mobile ? 40 : 130
    if (pcount > 0) {
      const g = new THREE.BufferGeometry()
      const arr = new Float32Array(pcount * 3)
      for (let i = 0; i < pcount; i++) {
        arr[i * 3] = (Math.random() - 0.5) * 44
        arr[i * 3 + 1] = Math.random() * 22 - 4
        arr[i * 3 + 2] = (Math.random() - 0.5) * 44 - 6
      }
      g.setAttribute('position', new THREE.BufferAttribute(arr, 3))
      const m = new THREE.PointsMaterial({
        color: 0x00f0ff,
        size: 0.06,
        transparent: true,
        opacity: 0.7,
      })
      this.pts = new THREE.Points(g, m)
      scene.add(this.pts)
    }

    this._clock = new THREE.Clock()
    this._gEnd = 0
    this._gNext = 2
    if (this.mode === 'static') this.renderOnce()
    else this.animate()
  }

  renderOnce() {
    if (!this.renderer) return
    this._mx = 0.12
    this._my = 0.03
    if (this.grid) this.grid.position.z = 0
    this.updateStage(0.6)
    const asp = this.camera.aspect || 1
    const zb = asp < 1 ? (1 / asp - 1) * 4 : 0
    this.camera.position.set(0.2, 1.63, (this.camZ || 12) + zb)
    this.camera.lookAt(this.lookAt || this._defLook)
    this.renderer.render(this.scene, this.camera)
  }

  updateGlitch(t) {
    const gi = this.params.glitch
    const tgt = this.gTarget
    if (!tgt) return
    if (gi <= 0) {
      if (this.gGhost) this.gGhost.visible = false
      tgt.position.x = this._baseX || 0
      return
    }
    if (t < this._gEnd) {
      const j = Math.random() - 0.5
      tgt.position.x = (this._baseX || 0) + j * 0.22 * gi
      if (this.gGhost) {
        this.gGhost.visible = true
        this.gGhost.position.x = -j * 0.3 * gi
        if (this.gGhostMat) this.gGhostMat.opacity = 0.5
      }
    } else {
      if (this._gEnd !== 0) {
        tgt.position.x = this._baseX || 0
        if (this.gGhost) {
          this.gGhost.visible = false
          this.gGhost.position.x = 0
          if (this.gGhostMat) this.gGhostMat.opacity = 0
        }
        this._gEnd = 0
      }
      if (t >= this._gNext) {
        this._gEnd = t + 0.08 + Math.random() * 0.09
        this._gNext = t + (2.6 + Math.random() * 4) / (0.4 + gi)
      }
    }
  }

  animate() {
    if (this._dead || this.mode === 'static') {
      this._raf = null
      return
    }
    this._raf = requestAnimationFrame(() => this.animate())
    const t = this._clock.getElapsedTime()
    const gs = 2.2 * this.params.gridSpeed * (this.mobile ? 0.7 : 1)
    if (this.grid) this.grid.position.z = (t * gs) % this.cell
    this._mx = (this._mx || 0) + ((this._tmx || 0) - (this._mx || 0)) * 0.05
    this._my = (this._my || 0) + ((this._tmy || 0) - (this._my || 0)) * 0.05
    this.camera.position.x = this._mx * 1.8
    this.camera.position.y = 1.6 + this._my * 0.9
    const asp = this.camera.aspect || 1
    const zb = asp < 1 ? (1 / asp - 1) * 4 : 0
    this.camera.position.z = (this.camZ || 12) + zb
    this.camera.lookAt(this.lookAt || this._defLook)
    this.updateStage(t)
    if (this.pts) {
      this.pts.position.y = (t * 0.3) % 1
      this.pts.rotation.y = t * 0.02
    }
    this.renderer.render(this.scene, this.camera)
  }

  setupParallax() {
    if (this.reduced || this.mobile) return
    this._onMove = (e) => {
      this._tmx = (e.clientX / window.innerWidth) * 2 - 1
      this._tmy = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', this._onMove, { passive: true })
  }

  onResize() {
    if (!this.renderer || !this.host) return
    const w = this.host.clientWidth,
      h = this.host.clientHeight
    if (!w || !h) return
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(w, h)
    if (this.mode === 'static') this.renderOnce()
  }

  setupGauges() {
    const graph = this.root.querySelector('[data-statgraph]')
    if (!graph) return
    const bars = Array.prototype.slice.call(graph.querySelectorAll('[data-bar]'))
    if (!bars.length) return
    const TR = 'transform .85s cubic-bezier(.16,.84,.44,1)'
    const grow = () => {
      bars.forEach((b) => {
        b.style.transition = 'none'
        b.style.transform = 'scaleY(0.02)'
      })
      void graph.getBoundingClientRect()
      bars.forEach((b, i) => {
        setTimeout(() => {
          if (this._dead) return
          b.style.transition = TR
          b.style.transform = 'scaleY(1)'
        }, 120 + i * 130)
      })
    }
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            grow()
            io.disconnect()
          }
        })
      },
      { threshold: 0.3 },
    )
    io.observe(graph)
  }

  setupReveals() {
    const els = Array.prototype.slice.call(this.root.querySelectorAll('[data-reveal]'))
    if (!els.length) return
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => this.doReveal(e, false))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            this.doReveal(en.target, true)
            io.unobserve(en.target)
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -7% 0px' },
    )
    els.forEach((e) => io.observe(e))
  }

  doReveal(el, stagger) {
    let d = 0
    if (stagger) {
      const parent = el.parentElement
      const sibs = parent
        ? Array.prototype.slice.call(parent.querySelectorAll(':scope > [data-reveal]'))
        : [el]
      const idx = Math.max(0, sibs.indexOf(el))
      d = idx * 95
    }
    setTimeout(() => {
      if (this._dead) return
      el.style.opacity = '1'
      el.style.transform = 'none'
      el.style.filter = 'none'
    }, d)
  }
}
