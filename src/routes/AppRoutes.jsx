import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { Navbar } from '../components/Navbar/Navbar'

const HomePage = lazy(() => import('../pages/Home/HomePage'))
const GalleryIndexPage = lazy(() => import('../pages/Gallery/GalleryIndexPage'))
const NotebookCategoryPage = lazy(() => import('../pages/NotebookCategory/NotebookCategoryPage'))
const CahaPage = lazy(() => import('../pages/Caha/CahaPage'))
const HowIDoItPage = lazy(() => import('../pages/HowIDoIt/HowIDoItPage'))
const AboutPage = lazy(() => import('../pages/About/AboutPage'))

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />

          {/* Índice del cuaderno de campo */}
          <Route path='/gallery' element={<GalleryIndexPage />} />

          {/* Categorías del cuaderno de campo */}
          <Route path='/gallery/nebulosas' element={<NotebookCategoryPage category="nebulosas" />} />
          <Route path='/gallery/galaxias' element={<NotebookCategoryPage category="galaxias" />} />
          <Route path='/gallery/cumulos' element={<NotebookCategoryPage category="cumulos" />} />
          <Route path='/gallery/planetarias' element={<NotebookCategoryPage category="planetarias" />} />
          <Route path='/gallery/otros' element={<NotebookCategoryPage category="otros" />} />

          <Route path='/caha' element={<CahaPage />} />
          <Route path='/how-i-do-it' element={<HowIDoItPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}