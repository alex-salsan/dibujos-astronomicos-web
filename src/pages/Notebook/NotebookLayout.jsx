import { Link, useParams } from 'react-router-dom'
import './notebook-layout.css'

const categories = [
  { id: 1, name: 'Nebulosas', slug: 'nebulosas' },
  { id: 2, name: 'Galaxias', slug: 'galaxias' },
  { id: 3, name: 'Cúmulos', slug: 'cumulos' },
  { id: 4, name: 'Planetarias', slug: 'planetarias' },
  { id: 5, name: 'Otros', slug: 'otros' },
]

export const NotebookLayout = ({ children }) => {
  const { category } = useParams()

  return (
    <div className="notebook-layout">
      <aside className="notebook-sidebar">
        <h2>Catálogo</h2>
        <ul>
          {categories.map(cat => (
            <li key={cat.id} className={cat.slug === category ? 'is-active' : ''}>
              <Link to={`/notebook/${cat.slug}`}>{cat.name}</Link>
            </li>
          ))}
        </ul>
      </aside>

      <main className="notebook-main">{children}</main>
    </div>
  )
}