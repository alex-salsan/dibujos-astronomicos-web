import { Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { NotebookLayout } from './NotebookLayout'
import { articles } from './articles'

const NotebookArticlePage = () => {
  const { articleSlug } = useParams()
  const ArticleComponent = articles[articleSlug]

  if (!ArticleComponent) {
    return (
      <NotebookLayout>
        <p>Artículo no encontrado.</p>
      </NotebookLayout>
    )
  }

  return (
    <NotebookLayout>
      <Suspense fallback={<div>Cargando artículo...</div>}>
        <ArticleComponent />
      </Suspense>
    </NotebookLayout>
  )
}

export default NotebookArticlePage