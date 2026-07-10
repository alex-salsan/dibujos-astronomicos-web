import './m42.css'

const M42 = () => {
  return (
    <article className="article-m42">
      <header className="article-header">
        <h1>M42 – Gran Nebulosa de Orión</h1>
        <p className="article-meta">12 de enero, 2025 · Patio de casa</p>
      </header>

      <img
        src="/images/notebook/m42.jpg"
        alt="Dibujo de M42, Gran Nebulosa de Orión"
        className="article-image"
      />

      <section className="article-body">
        <p>
          Observación a bajo aumento, destaca la forma de ala y la zona
          central alrededor del Trapecio. La nebulosidad se extiende de
          forma difusa hacia el norte, con un contraste notable en la
          región del Trapecio.
        </p>
      </section>
    </article>
  )
}

export default M42