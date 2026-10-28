import { Link, useLocation, useNavigate } from 'react-router-dom'
import { formatRa, formatDec } from '../../utils/coordinates'
import './notFound.css'

// Convierte la ruta en unas coordenadas fijas: la misma URL "apunta"
// siempre al mismo trozo de cielo vacío.
const pathToCoords = (path) => {
  let hash = 0
  for (const char of path) hash = (hash * 31 + char.charCodeAt(0)) >>> 0
  return {
    ra: (hash % 86400) / 3600,
    dec: ((hash >>> 8) % 1800) / 10 - 90,
  }
}

const NotFoundPage = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { ra, dec } = pathToCoords(pathname)

  // Si se ha entrado directamente (sin historial dentro de la web), volver
  // atrás sacaría al usuario del sitio, así que se le lleva a la portada.
  const canGoBack = window.history.state?.idx > 0
  const goBack = () => (canGoBack ? navigate(-1) : navigate('/'))

  return (
    <main className="not-found">
      <div className="nf-eyepiece" aria-hidden="true">
        <span className="nf-code">404</span>
      </div>

      <div className="nf-readout" aria-hidden="true">
        <p className="nf-target">
          <span className="nf-status" />
          Objeto no catalogado
        </p>
        <p className="nf-row"><span className="nf-key">AR</span>{formatRa(ra)}</p>
        <p className="nf-row"><span className="nf-key">Dec</span>{formatDec(dec)}</p>
      </div>

      <h1>Aquí no hay nada que dibujar</h1>
      <p className="nf-text">
        Has apuntado el telescopio a una región vacía del cielo. La página que
        buscas no existe o ha cambiado de sitio.
      </p>

      <div className="nf-actions">
        <button type="button" className="nf-button" onClick={goBack}>
          ← Volver a la página anterior
        </button>
        <Link to="/" className="nf-button nf-button-primary">
          Ir al inicio
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage
