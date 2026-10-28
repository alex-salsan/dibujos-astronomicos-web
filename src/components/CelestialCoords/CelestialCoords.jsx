import { useImperativeHandle, useRef } from 'react'
import { smoothstep } from '../../utils/scroll'
import { formatRa, formatDec } from '../../utils/coordinates'
import './celestialCoords.css'

// Indicador de progreso: el "telescopio" apunta a cada objeto de `targets`
// y las coordenadas van girando mientras se mueve entre uno y otro.
// Quien lo usa llama a ref.current.update(position), donde position es un
// índice decimal (1.5 = a medio camino entre el objeto 1 y el 2).
export const CelestialCoords = ({ targets, ref }) => {
  const rootRef = useRef(null)
  const targetRef = useRef(null)
  const raRef = useRef(null)
  const decRef = useRef(null)

  useImperativeHandle(ref, () => ({
    update(position) {
      const from = Math.min(Math.floor(position), targets.length - 1)
      const t = position - from
      // Se queda quieto cerca de cada objeto y se mueve en el tramo central
      const eased = smoothstep(0.15, 0.85, t)

      const a = targets[from]
      const b = targets[Math.min(from + 1, targets.length - 1)]

      // Camino más corto en ascensión recta (da la vuelta en 24h)
      let deltaRa = b.ra - a.ra
      if (deltaRa > 12) deltaRa -= 24
      if (deltaRa < -12) deltaRa += 24

      raRef.current.textContent = formatRa((a.ra + deltaRa * eased + 24) % 24)
      decRef.current.textContent = formatDec(a.dec + (b.dec - a.dec) * eased)
      targetRef.current.textContent = (eased < 0.5 ? a : b).target
      rootRef.current.classList.toggle('is-slewing', eased > 0.02 && eased < 0.98)
      rootRef.current.style.setProperty('--progress', position / (targets.length - 1))
    },
  }), [targets])

  return (
    <div ref={rootRef} className="celestial-coords" aria-hidden="true">
      <div className="cc-target">
        <span className="cc-status" />
        <span ref={targetRef}>{targets[0].target}</span>
      </div>
      <div className="cc-row">
        <span className="cc-key">AR</span>
        <span ref={raRef}>{formatRa(targets[0].ra)}</span>
      </div>
      <div className="cc-row">
        <span className="cc-key">Dec</span>
        <span ref={decRef}>{formatDec(targets[0].dec)}</span>
      </div>
      <div className="cc-track">
        {targets.map((_, index) => (
          <span
            key={index}
            className="cc-tick"
            style={{ left: `${(index / (targets.length - 1)) * 100}%` }}
          />
        ))}
        <span className="cc-bar" />
      </div>
    </div>
  )
}
