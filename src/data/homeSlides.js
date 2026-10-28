import viaLactea from '../assets/images/ViaLactea.jpg'
import luna from '../assets/images/luna.jpg'
import caha from '../assets/images/CAHA.jpg'
import m42 from '../assets/images/M42.jpg'
import comoSeHizo from '../assets/images/ComoSeHizo.png'
import sobreMi from '../assets/images/SobreMi.jpg'

// Láminas de la home. La primera es la portada.
// kicker es la etiqueta pequeña sobre el título.
// target, ra y dec alimentan el indicador de coordenadas (J2000):
// ra en horas decimales, dec en grados decimales.
export const homeSlides = [
  { img: viaLactea, label: null, link: null, target: 'Centro galáctico', ra: 17.7611, dec: -29.0078 },
  // La Luna se mueve: estas son orientativas, cámbialas por las de la noche del dibujo
  {
    img: luna, label: 'Cuaderno de campo', link: '/notebook', kicker: 'Luna',
    target: 'Luna', ra: 2.5, dec: 14,
  },
  // Cénit de Calar Alto: la declinación coincide con la latitud del observatorio
  {
    img: caha, label: 'CAHA', link: 'https://www.caha.es', kicker: 'Observatorio de Calar Alto',
    target: 'Cénit de Calar Alto', ra: 6, dec: 37.2236,
  },
  {
    img: m42, label: 'Cuaderno de campo', link: '/notebook', kicker: 'Nebulosa de Orión · M42',
    target: 'M42 · Nebulosa de Orión', ra: 5.5881, dec: -5.3911,
  },
  {
    img: comoSeHizo, label: 'Cómo lo hice', link: '/notebook', kicker: 'M42 a gran escala',
    target: 'M42 · a gran escala', ra: 5.5881, dec: -5.3911,
  },
  {
    img: sobreMi, label: 'Sobre mí', link: '/about', kicker: 'Jesús Salado Castro',
    target: 'Polaris', ra: 2.5303, dec: 89.2641,
  },
]
