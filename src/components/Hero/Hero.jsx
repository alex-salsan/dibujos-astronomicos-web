import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './hero.css'

import viaLactea from '../../assets/images/ViaLactea.jpg'
import luna from '../../assets/images/luna.jpg'
import caha from '../../assets/images/CAHA.jpg'
import m42 from '../../assets/images/M42.jpg'
import comoSeHizo from '../../assets/images/ComoSeHizo.png'
import sobreMi from '../../assets/images/SobreMi.jpg'

const slides = [
  { img: viaLactea, label: null, link: null },
  { img: luna, label: 'Galería', link: '/gallery' },
  { img: caha, label: 'CAHA', link: '/caha' },
  { img: m42, label: 'Galería', link: '/gallery' },
  { img: comoSeHizo, label: 'Cómo lo hice', link: '/how-i-do-it' },
  { img: sobreMi, label: 'Sobre mí', link: '/about' }
]

export const Hero = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    console.log('useEffect ejecutado')  // ← añade esto
      const handleScroll = () => {
        console.log('scroll detectado')

          const container = containerRef.current
          const track = trackRef.current

          console.log('scrollY:', window.scrollY)
          console.log('rect.top:', container?.getBoundingClientRect().top)

          if (!container || !track) return

          const rect = container.getBoundingClientRect()
          const scrolled = -rect.top
          const maxScroll = container.offsetHeight - window.innerHeight

          if (scrolled < 0 || scrolled > maxScroll) return

          const progress = scrolled / maxScroll
          const maxTranslate = (slides.length - 1) * window.innerWidth

          track.style.transform = `translateX(-${progress * maxTranslate}px)`
      }

        document.addEventListener('scroll', handleScroll)

      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
  }, [])

  return (
    <section ref={containerRef} className="slides-container">
      <div className="slides-sticky">
        <div ref={trackRef} className="slides-track">
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <img src={slide.img} alt={`Slide ${index + 1}`} />

              {index === 0 && (
                <div className="hero-content">
                  <h1>Jesús Salado Castro</h1>
                  <p className="hero-quote">"Capturando el cosmos, trazo a trazo"</p>
                </div>
              )}

              {slide.label && (
                <div className="slide-label">
                  {slide.label}
                </div>
              )}

              {slide.link && (
                <Link
                  to={slide.link}
                  className="slide-overlay-link"
                  aria-label={`Ir a ${slide.label}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}