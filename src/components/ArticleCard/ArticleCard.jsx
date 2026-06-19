import React from 'react'
import './articleCard.css'

export const ArticleCard = ({article}) => {
  return (
    <article className="article-card">
        <img src={article.image} alt={article.title} />
        <div className="article-card-info">
            <h3>{article.title}</h3>
            <p>{article.date}</p>
        </div>
    </article>
  )
}
