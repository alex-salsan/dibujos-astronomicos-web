import './Notebook-category.css'
import { Link } from 'react-router-dom'

const categories = [
  { id: 1, name: 'Nebulosas', slug: 'nebulosas' },
  { id: 2, name: 'Galaxias', slug: 'galaxias' },
  { id: 3, name: 'Cúmulos', slug: 'cumulos' },
  { id: 4, name: 'Planetarias', slug: 'planetarias' },
  { id: 5, name: 'Otros', slug: 'otros' },
]

const NotebookCategoryPage = ({ category }) => {
  const articles = [
    {
      id: 1,
      title: 'M42 – Gran Nebulosa de Orión',
      date: '12 de enero, 2025',
      location: 'Patio de casa',
      summary: 'Observación a bajo aumento, destaca la forma de ala y la zona central alrededor del Trapecio.',
    },
    {
      id: 2,
      title: 'M8 – Nebulosa de la Laguna',
      date: '5 de julio, 2024',
      location: 'CAHA',
      summary: 'Nebulosa muy brillante, estructura fácilmente visible incluso con contaminación lumínica moderada.',
    },
    {
      id: 3,
      title: 'NGC 7000 – Nebulosa Norteamérica',
      date: '21 de septiembre, 2023',
      location: 'Sierra de Segura',
      summary: 'Objeto extenso y difuso, mejor percibido con visión lateral y filtros de banda estrecha.',
    },
  ]

  const currentCategory =
    categories.find(cat => cat.slug === category) ?? { name: 'Categoría' }

  return (
    <div className="notebook-layout">
      <aside className="notebook-sidebar">
        <h2>Catálogo</h2>
        <ul>
          {categories.map(cat => {
            const isActive = cat.slug === category
            return (
              <li key={cat.id} className={isActive ? 'is-active' : ''}>
                <Link to={`/gallery/${cat.slug}`}>
                  {cat.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </aside>

      <main className="notebook-main">
        <header className="notebook-main-header">
          <h1>{currentCategory.name}</h1>
          <p>Catálogo de objetos del cielo profundo y planetarias.</p>
        </header>

        <section className="notebook-articles">
          {articles.map(article => (
            <article key={article.id} className="notebook-article-card">
              <header>
                <h2>{article.title}</h2>
                <p className="notebook-article-meta">
                  <span>{article.date}</span>
                  <span> · </span>
                  <span>{article.location}</span>
                </p>
              </header>
              <p className="notebook-article-summary">
                {article.summary}
              </p>
              <button className="notebook-article-link">
                Ver detalle
              </button>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}

export default NotebookCategoryPage