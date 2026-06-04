import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const HomePage = lazy(() => import('../pages/Home/HomePage'))
const GalleryPage = lazy(() => import('../pages/Gallery/GalleryPage'))
const CahaPage = lazy(() => import('../pages/Caha/CahaPage'))
const HowIDoItPage = lazy(() => import('../pages/HowIDoIt/HowIDoItPage'))
const AboutPage = lazy(() => import('../pages/About/AboutPage'))

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/caha' element={<CahaPage />} />
          <Route path='/how-i-do-it' element={<HowIDoItPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
