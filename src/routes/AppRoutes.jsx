import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { ScrollToTop } from '../components/ScrollToTop/ScrollToTop'

const HomePage = lazy(() => import('../pages/Home/HomePage'))
const NotebookIndexPage = lazy(() => import('../pages/Notebook/NotebookIndexPage'))
const NotebookCategoryPage = lazy(() => import('../pages/Notebook/NotebookCategoryPage'))
const NotebookArticlePage = lazy(() => import('../pages/Notebook/NotebookArticlePage'))
const CahaPage = lazy(() => import('../pages/Caha/CahaPage'))
const HowIDoItPage = lazy(() => import('../pages/HowIDoIt/HowIDoItPage'))
const AboutPage = lazy(() => import('../pages/About/AboutPage'))

export const AppRoutes = () => {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/notebook' element={<NotebookIndexPage />} />
          <Route path='/notebook/:category' element={<NotebookCategoryPage />} />
          <Route path='/notebook/:category/:articleSlug' element={<NotebookArticlePage />} />
          <Route path='/caha' element={<CahaPage />} />
          <Route path='/how-i-do-it' element={<HowIDoItPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}