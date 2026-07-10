import { Link } from 'react-router-dom'
import './notebook.css'

const categories = [
  { id: 1, name: 'Nebulosas', slug: 'nebulosas' },
  { id: 2, name: 'Galaxias', slug: 'galaxias' },
  { id: 3, name: 'Cúmulos', slug: 'cumulos' },
  { id: 4, name: 'Planetarias', slug: 'planetarias' },
  { id: 5, name: 'Otros', slug: 'otros' },
]

const NotebookIndexPage = () => {
  return (
    <div className="notebook-index">
      <header className="notebook-index-header">
        <h1>Cuaderno de Campo</h1>
        <p>Catálogo de objetos del cielo profundo y planetarias.</p>
      </header>

      <div className="notebook-index-grid">
        {categories.map(cat => (
          <Link key={cat.id} to={`/notebook/${cat.slug}`} className="notebook-index-card">
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NotebookIndexPage