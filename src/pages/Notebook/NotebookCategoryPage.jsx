import { Link, useParams } from 'react-router-dom'
import { NotebookLayout } from './NotebookLayout'
import { articlesData } from '../../data/articles'
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

  const articles = articlesData.filter(article => article.category === category)

  return (
    <NotebookLayout>
      <header className="notebook-main-header">
        <h1>{categoryNames[category] ?? 'Categoría'}</h1>
        <p>Catálogo de objetos del cielo profundo y planetarias.</p>
      </header>

      <section className="notebook-articles">
        {articles.length === 0 ? (
          <p className="notebook-empty">
            Aún no hay observaciones publicadas en esta categoría. Vuelve pronto.
          </p>
        ) : (
          articles.map(article => (
            <article key={article.id} className="notebook-article-card">
              <img src={article.image} alt={article.title} className="notebook-article-image" />

              <div className="notebook-article-content">
                <header>
                  <h2>{article.title}</h2>
                  <p className="notebook-article-meta">
                    <span>{article.dateLabel}</span>
                    <span> · </span>
                    <span>{article.location}</span>
                  </p>
                </header>
                <p className="notebook-article-summary">{article.summary}</p>
                <Link to={`/notebook/${category}/${article.slug}`} className="notebook-article-link">
                  Ver detalle
                </Link>
              </div>
            </article>
          ))
        )}
      </section>
    </NotebookLayout>
  )
}

export default NotebookCategoryPage