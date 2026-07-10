import React from 'react'
import { Link } from 'react-router-dom'
import { ArticleCard } from '../../components/ArticleCard/ArticleCard'
import './gallery.css'

const categories = [
  { id: 1, name: 'Nebulosas', slug: 'nebulosas' },
  { id: 2, name: 'Galaxias', slug: 'galaxias' },
  { id: 3, name: 'Cúmulos', slug: 'cumulos' },
  { id: 4, name: 'Planetarias', slug: 'planetarias' },
  { id: 5, name: 'Otros', slug: 'otros' },
]

const articles = [
  { id: 1, title: 'Título del artículo 1', date: '12 de junio, 2025' },
  { id: 2, title: 'Título del artículo 2', date: '13 de junio, 2025' },
  { id: 3, title: 'Título del artículo 3', date: '14 de junio, 2025' },
]

const GalleryIndexPage = () => {
  return (
    <div className="gallery">
      <header className="gallery-header">
        <h1>Cuaderno de campo</h1>
        <p>
          Dibujos y observaciones organizados por categorías del cielo profundo.
        </p>
      </header>

      <section className="gallery-categories">
        {categories.map((category) => (
          <div key={category.id} className='category-card'>
            <Link to={`/gallery/${category.slug}`}>
              <h3>{category.name}</h3>
            </Link>
          </div>
        ))}
      </section>

      <section className='gallery-latest'>
        <h2>Últimos artículos</h2>
        <p>
          Una selección reciente de dibujos y observaciones publicadas.
        </p>

        <div className='articles-grid'>
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default GalleryIndexPage