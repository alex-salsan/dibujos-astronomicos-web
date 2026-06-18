import React from 'react'
import { Link } from 'react-router-dom'
import './gallery.css'

const categories = [
  { 
    id: 1, 
    name: 'Nebulosas', 
    slug: 'nebulosas', 
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800' 
  },
  { 
    id: 2, 
    name: 'Cúmulos', 
    slug: 'cumulos', 
    image: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=800' 
  },
  { 
    id: 3, 
    name: 'Planetas', 
    slug: 'planetas', 
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800' 
  },
]

const GalleryPage = () => {
  return (
    <div className="gallery">
      <section className="gallery-categories">
        <h1>Galería</h1>
        {categories.map((category) => (
          <div key={category.id} className='category-card'>
            <Link to={`/gallery/${category.slug}`}>
              <img src={category.image} alt={category.name} />
              <h3>{category.name}</h3>
            </Link>
          </div>
        ))}
      </section>

      <section className="gallery-latest">
        <h2>Últimos artículos</h2>
      </section>
    </div>
  )
}

export default GalleryPage