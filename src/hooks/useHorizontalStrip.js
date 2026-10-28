import { useEffect, useEffectEvent } from 'react'
import { clamp } from '../utils/scroll'

export const DESKTOP_QUERY = '(min-width: 900px)'

const EASE = 0.1           // suavizado: cuanto menor, más inercia
const DRAG_THRESHOLD = 5   // px antes de considerar que es un arrastre y no un clic
const DRAG_SPEED = 1.5
const FLICK = 12           // cuánto sigue deslizando al soltar tras un arrastre rápido
const KEY_STEP = 0.5       // fracción de pantalla por pulsación de flecha

// Convierte el scroll vertical de la página en desplazamiento horizontal de
// `trackRef` (solo en escritorio). El contenedor se alarga lo justo para
// recorrer la tira entera. onFrame({ x, desktop }) se llama en cada frame
// en que cambia algo, también en móvil.
export const useHorizontalStrip = ({ containerRef, trackRef, onFrame }) => {
  const notify = useEffectEvent(onFrame)

  useEffect(() => {
    const container = containerRef.current
    const track = trackRef.current
    const desktop = window.matchMedia(DESKTOP_QUERY)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const scrollTo = (top) => window.scrollTo({ top, behavior: 'instant' })

    let current = 0
    let frame = null
    let drag = null
    let suppressClick = false

    const maxX = () => Math.max(track.scrollWidth - window.innerWidth, 0)

    const render = () => {
      frame = null

      if (!desktop.matches) {
        current = 0
        track.style.transform = ''
        notify({ x: 0, desktop: false })
        return
      }

      const target = clamp(-container.getBoundingClientRect().top, 0, maxX())
      current = reduceMotion ? target : current + (target - current) * EASE
      if (Math.abs(target - current) < 0.5) current = target

      track.style.transform = `translate3d(${-current}px, 0, 0)`
      notify({ x: current, desktop: true })

      if (current !== target) schedule()
    }

    const schedule = () => {
      if (frame === null) frame = requestAnimationFrame(render)
    }

    const measure = () => {
      container.style.height = desktop.matches ? `${maxX() + window.innerHeight}px` : ''
      schedule()
    }

    // Arrastrar con el ratón
    const onPointerDown = (event) => {
      if (!desktop.matches || event.pointerType !== 'mouse' || event.button !== 0) return
      drag = { startX: event.clientX, lastX: event.clientX, velocity: 0, scroll: window.scrollY, moved: false }
    }

    const onPointerMove = (event) => {
      if (!drag) return
      const dx = event.clientX - drag.startX
      if (!drag.moved && Math.abs(dx) > DRAG_THRESHOLD) {
        drag.moved = true
        track.classList.add('is-dragging')
      }
      if (!drag.moved) return

      drag.velocity = event.clientX - drag.lastX
      drag.lastX = event.clientX
      scrollTo(drag.scroll - dx * DRAG_SPEED)
    }

    const onPointerUp = () => {
      if (!drag) return
      if (drag.moved) {
        suppressClick = true
        track.classList.remove('is-dragging')
        scrollTo(window.scrollY - drag.velocity * DRAG_SPEED * FLICK)
      }
      drag = null
    }

    // Un arrastre no debe abrir el enlace sobre el que se suelta
    const onClick = (event) => {
      if (!suppressClick) return
      suppressClick = false
      event.preventDefault()
      event.stopPropagation()
    }

    // Deslizar en horizontal con el trackpad
    const onWheel = (event) => {
      if (!desktop.matches || Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return
      event.preventDefault()
      scrollTo(window.scrollY + event.deltaX)
    }

    const onKeyDown = (event) => {
      if (!desktop.matches || event.target.closest('input, textarea, select')) return
      const step = window.innerWidth * KEY_STEP
      if (event.key === 'ArrowRight') scrollTo(window.scrollY + step)
      if (event.key === 'ArrowLeft') scrollTo(window.scrollY - step)
    }

    const resizeObserver = new ResizeObserver(measure)
    resizeObserver.observe(track)
    measure()

    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', measure)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('wheel', onWheel, { passive: false })
    track.addEventListener('pointerdown', onPointerDown)
    track.addEventListener('click', onClick, true)
    desktop.addEventListener('change', measure)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', measure)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('wheel', onWheel)
      track.removeEventListener('pointerdown', onPointerDown)
      track.removeEventListener('click', onClick, true)
      desktop.removeEventListener('change', measure)
      if (frame !== null) cancelAnimationFrame(frame)
      container.style.height = ''
    }
  }, [containerRef, trackRef])
}
