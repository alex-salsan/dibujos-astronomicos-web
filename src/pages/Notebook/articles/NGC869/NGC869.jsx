import './ngc869.css'

const NGC869 = () => {
  return (
    <article className="article-ngc869">
      <header className="article-header">
        <h1>NGC 869, una singularidad estelar en el corazón de Perseo</h1>
        <p className="article-meta">Junio de 2025 · CAHA, telescopio de 1,23 m</p>
      </header>

      <img
        src="/images/notebook/ngc869-hero.jpg"
        alt="Dibujo de NGC 869 desde el telescopio de 1,23 m del CAHA"
        className="article-image"
      />

      <section className="article-intro">
        <p>
          Un asterismo del doble cúmulo de Perseo forma una simetría tan
          precisa que resulta casi imposible de explicar en un universo
          aleatorio: cinco estrellas dispuestas en forma de herradura
          alrededor de una supergigante central.
        </p>
      </section>

      <section className="article-section">
        <h2>Descripción, observación y morfología</h2>
        <p>
          {/* Aquí pega el texto real que te mande tu padre para esta sección */}
        </p>
      </section>

      <section className="article-section">
        <h2>Una cuestión de probabilidad</h2>
        <p>
          {/* Sección sobre las probabilidades matemáticas del asterismo */}
        </p>
      </section>

      <section className="article-section">
        <h2>¿Qué pudo trazar esta geometría?</h2>
        <p>
          {/* Sección especulativa sobre el origen de la forma */}
        </p>
      </section>

      <footer className="article-footer">
        <p className="article-location">Chiclana de la Frontera</p>
      </footer>
    </article>
  )
}

export default NGC869