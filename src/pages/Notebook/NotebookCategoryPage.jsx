import { Link, useParams } from 'react-router-dom'
import { NotebookLayout } from './NotebookLayout'
import './notebook-category.css'

const categoryNames = {
  nebulosas: 'Nebulosas',
  galaxias: 'Galaxias',
  cumulos: 'Cúmulos',
  planetarias: 'Planetarias',
  otros: 'Otros',
}

const NotebookCategoryPage = () => {
  const { category } = useParams()

  const articles = [
    {
      id: 1,
      slug: 'm42',
      title: 'M42 – Gran Nebulosa de Orión',
      date: '12 de enero, 2025',
      location: 'Patio de casa',
      summary: 'Observación a bajo aumento, destaca la forma de ala y la zona central alrededor del Trapecio.',
    },
    {
      id: 2,
      slug: 'm8',
      title: 'M8 – Nebulosa de la Laguna',
      date: '5 de julio, 2024',
      location: 'CAHA',
      summary: 'Nebulosa muy brillante, estructura fácilmente visible incluso con contaminación lumínica moderada.',
    },
  ]

  return (
    <NotebookLayout>
      <header className="notebook-main-header">
        <h1>{categoryNames[category] ?? 'Categoría'}</h1>
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
            <p className="notebook-article-summary">{article.summary}</p>
            <Link to={`/notebook/${category}/${article.slug}`} className="notebook-article-link">
              Ver detalle
            </Link>
          </article>
        ))}
      </section>
    </NotebookLayout>
  )
}

export default NotebookCategoryPage