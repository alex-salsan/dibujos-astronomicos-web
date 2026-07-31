import '../../styles/article.css'
import './AboutPage.css'

const AboutPage = () => {
  return (
    <article className="article-content about-page">
      <header className="article-header">
        <h1>Sobre mí</h1>
        <p className="article-meta">Jesús Salado Castro</p>
      </header>

      <img
        src="/src/assets/images/jesus_salado_castro.png"
        alt="Jesús Salado Castro"
        className="article-image article-image-about"
      />

      <section className="article-intro">
        <p className="article-intro-label">QUIÉN SOY</p>
        <p>
          Soy licenciado en Bellas Artes y actualmente educador de ESO, profesor y director de la EMA, Escuela Municipal de Artes de Chiclana de la Frontera.
        </p>
      </section>

      <section className="article-section">
        <h2>El origen de una afición</h2>
        <p>
          Hace décadas hubo en televisión dos espacios vinculados con la astronomía y la naturaleza: dos series documentales que a algunos nos han marcado nuestras aficiones desde la infancia.
        </p>

        <blockquote className="about-quote">
          <p>"El hombre y la tierra"</p>
          <span>Félix Rodríguez de la Fuente</span>
        </blockquote>

        <blockquote className="about-quote">
          <p>"Cosmos"</p>
          <span>Carl Sagan</span>
        </blockquote>

        <p>
          De la primera nos llevamos, principalmente, el amor por la naturaleza. De la segunda, el afán por descubrir los misterios del cielo.
        </p>
      </section>

      <section className="article-section">
        <h2>Otras aficiones</h2>
        <p>A todo esto se le unen otras pasiones que forman parte de mi día a día:</p>
        <ul className="article-list">
          <li>El dibujo y la pintura</li>
          <li>La fotografía</li>
          <li>La montaña</li>
          <li>Los viajes</li>
        </ul>
      </section>

      <section className="article-section">
        <h2>Los cuadernos de campo</h2>
        <p>
          A esto hay que añadir el estímulo del autoaprendizaje, los proyectos de construcción y la creación artística, que constituyen el motor de arranque de mis cuadernos de campo del cielo y de la naturaleza.
        </p>
        <p>
          En ellos se materializan mis observaciones, representadas sobre el papel para que me sirvan como guía e historial de lo observado.
        </p>
        <p>
          Durante más de una década he dibujado lo que veía a través de mis telescopios artesanos bajo el impresionante cielo de Calar Alto, en Almería. Ahora los muestro a través de esta web, con el objetivo de que sirvan de guía del cielo para los aficionados a la astronomía.
        </p>
      </section>

      <section className="contact-card">
        <h2>Contacto</h2>
        <p>
          <a href="mailto:contacto@jesussalado.com">contacto@jesussalado.com</a>
        </p>
        <p>
          <a href="http://www.jesussalado.com/" target="_blank" rel="noopener noreferrer">
            www.jesussalado.com
          </a>
        </p>
      </section>
    </article>
  )
}

export default AboutPage