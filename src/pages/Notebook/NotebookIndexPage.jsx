import { Link } from 'react-router-dom'
import { articlesData } from '../../data/articles'
import './notebook.css'

const categories = [
  { id: 1, name: 'Nebulosas', slug: 'nebulosas', image: '/images/notebook/nebulosas.png' },
  { id: 2, name: 'Galaxias', slug: 'galaxias', image: '/images/notebook/galaxias.png' },
  { id: 3, name: 'Cúmulos', slug: 'cumulos', image: '/images/notebook/cumulos.png' },
  { id: 4, name: 'Planetarias', slug: 'planetarias', image: '/images/notebook/planetarias.png' },
  { id: 5, name: 'Otros', slug: 'otros', image: '/images/notebook/otros.png' },
]

const NotebookIndexPage = () => {
  const latestArticles = [...articlesData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)

  return (
    <div className="notebook">
      <header className="notebook-header">
        <h1>Cuaderno de Campo</h1>
        <p>Catálogo de objetos del cielo profundo y planetarias, organizado por tipo de observación.</p>
      </header>

      <section className="notebook-categories">
        {categories.map(cat => (
          <div key={cat.id} className="category-card">
            <Link to={`/notebook/${cat.slug}`}>
              <img src={cat.image} alt={cat.name} />
              <h3>{cat.name}</h3>
            </Link>
          </div>
        ))}
      </section>

      <section className="notebook-latest">
        <h2>Últimas observaciones</h2>
        <p>Los dibujos y anotaciones más recientes del cuaderno de campo.</p>

        <div className="articles-grid">
          {latestArticles.map(article => (
            <Link
              key={article.id}
              to={`/notebook/${article.category}/${article.slug}`}
              className="category-card"
            >
              <h3>{article.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default NotebookIndexPage