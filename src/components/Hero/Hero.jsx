import React from 'react'
import './hero.css'

import viaLactea from '../../assets/images/ViaLactea.jpg'
import asdf from '../../assets/images/M42.jpg'

export const Hero = () => {
  return (
    <section className="hero">
        <div className='hero-overlay'>
            <img src={asdf} alt="Via Lactea" />
        </div>

        <div className='hero-content'>
            <h1>Jesús Salado Castro</h1>
            <p className='hero-quote'>"Capturando el cosmos, trazo a trazo"</p>
        </div>
    </section>
  )
}
