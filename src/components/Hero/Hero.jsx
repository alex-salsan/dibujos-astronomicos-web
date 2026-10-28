import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { homeSlides } from '../../data/homeSlides'
import { useHorizontalStrip } from '../../hooks/useHorizontalStrip'
import { clamp } from '../../utils/scroll'
import { CelestialCoords } from '../CelestialCoords/CelestialCoords'
import './hero.css'

const [cover, ...plates] = homeSlides

// Composición de cada lámina, en el mismo orden que `plates`. Medidas pensadas
// para la proporción de cada imagen; la alternancia de alineaciones da el ritmo.
const LAYOUTS = [
  { align: 'end', width: 'min(54vh, 40vw)', height: '54vh' },
  { align: 'start', width: 'min(96vh, 62vw)', height: '48vh', headingFirst: true },
  { align: 'center', width: 'min(50vh, 38vw)', height: '54vh' },
  { align: 'end', width: 'min(84vh, 56vw)', height: '48vh', headingFirst: true },
  { align: 'start', width: 'min(56vh, 42vw)', height: '48vh' },
]

const PARALLAX = 6 // % que se desplaza la imagen dentro de su marco

const pad = (n) => String(n).padStart(2, '0')

const isExternal = (url) => /^https?:\/\//.test(url)

// Enlaces internos con el router; externos en pestaña nueva
const PageLink = ({ to, ...props }) =>
  isExternal(to)
    ? <a href={to} target="_blank" rel="noopener noreferrer" {...props} />
    : <Link to={to} {...props} />

const ScrollHint = () => (
  <div className="strip-hint" aria-hidden="true">
    <span>Desliza o arrastra</span>
    <svg width="110" height="20" viewBox="0 0 110 20">
      <line className="strip-hint-line" x1="0" y1="10" x2="88" y2="10" />
      <circle className="strip-hint-ring" cx="99" cy="10" r="8" pathLength="1" />
      <circle className="strip-hint-dot" cx="99" cy="10" r="2" />
    </svg>
  </div>
)

const Plate = ({ slide, number, layout }) => (
  <article
    className={`strip-item align-${layout.align}`}
    style={{ '--media-w': layout.width, '--media-h': layout.height }}
    data-coords
  >
    <PageLink to={slide.link} className="strip-link" draggable={false}>
      <span className="strip-index">{pad(number)} / {pad(plates.length)}</span>
      <div className={`strip-content ${layout.headingFirst ? 'heading-first' : ''}`}>
        <div className="strip-media">
          <img src={slide.img} alt={slide.target} draggable={false} />
        </div>
        <div className="strip-heading">
          <p className="strip-kicker">{slide.kicker}</p>
          <h2>{slide.label}</h2>
        </div>
      </div>
    </PageLink>
  </article>
)

// Posición (índice decimal) del elemento que está en el centro de la pantalla
const centeredPosition = (elements, horizontal) => {
  const viewportCenter = (horizontal ? window.innerWidth : window.innerHeight) / 2
  const centers = elements.map((el) => {
    const rect = el.getBoundingClientRect()
    return horizontal ? rect.left + rect.width / 2 : rect.top + rect.height / 2
  })

  if (viewportCenter <= centers[0]) return 0
  for (let i = 0; i < centers.length - 1; i++) {
    if (viewportCenter < centers[i + 1]) {
      return i + (viewportCenter - centers[i]) / (centers[i + 1] - centers[i])
    }
  }
  return centers.length - 1
}

export const Hero = () => {
  const containerRef = useRef(null)
  const trackRef = useRef(null)
  const endRef = useRef(null)
  const coordsRef = useRef(null)

  useEffect(() => {
    document.body.classList.add('no-scrollbar')
    return () => {
      document.body.classList.remove('no-scrollbar')
    }
  }, [])

  useHorizontalStrip({
    containerRef,
    trackRef,
    onFrame: ({ x, desktop }) => {
      const track = trackRef.current
      const items = [...track.querySelectorAll('[data-coords]')]

      // Hueco final para que la última lámina pueda quedar centrada
      const last = items[items.length - 1]
      endRef.current.style.width = desktop
        ? `${Math.max(window.innerWidth / 2 - last.offsetWidth / 2, 0)}px`
        : ''

      // Cuánto ha tapado la tira a la portada (0..1), para oscurecerla
      const covered = desktop ? x / window.innerWidth : window.scrollY / window.innerHeight
      containerRef.current.style.setProperty('--strip-x', x)
      containerRef.current.style.setProperty('--covered', clamp(covered, 0, 1))

      if (desktop) {
        for (const img of track.querySelectorAll('.strip-media img')) {
          const rect = img.parentElement.getBoundingClientRect()
          if (rect.right < 0 || rect.left > window.innerWidth) continue
          const offset = (rect.left + rect.width / 2 - window.innerWidth / 2) / window.innerWidth
          img.style.transform = `translateX(${clamp(offset, -1, 1) * -PARALLAX}%)`
        }
      }

      coordsRef.current?.update(centeredPosition(items, desktop))
    },
  })

  return (
    <section ref={containerRef} className="strip">
      <div className="strip-sticky">
        {/* La portada queda fija detrás; la tira pasa por encima y la tapa */}
        <header className="strip-hero">
          <img className="strip-hero-img" src={cover.img} alt="" draggable={false} />
          <div className="strip-hero-content">
            <p className="strip-kicker">Dibujo astronómico</p>
            <h1>Jesús Salado Castro</h1>
            <p className="strip-hero-quote">"Capturando el cosmos, trazo a trazo"</p>
          </div>
          <ScrollHint />
        </header>

        <div ref={trackRef} className="strip-track">
          {/* Hueco transparente del tamaño de la portada; sirve de referencia para las coordenadas */}
          <div className="strip-spacer" aria-hidden="true" data-coords />

          {plates.map((slide, index) => (
            <Plate
              key={index}
              slide={slide}
              number={index + 1}
              layout={LAYOUTS[index % LAYOUTS.length]}
            />
          ))}

          <div ref={endRef} className="strip-end" aria-hidden="true" />
        </div>

        <CelestialCoords ref={coordsRef} targets={homeSlides} />
      </div>
    </section>
  )
}
