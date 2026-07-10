import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHomePage = location.pathname === '/';

  useEffect (() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav
        className={
          `navbar
           ${isHomePage ? 'navbar-transparent' : ''}
           ${scrolled ? 'navbar-scrolled' : ''}`
        }
      >
        <div className='nav-container'>
          <div className="nav-logo">
            <Link to="/">Jesús Salado</Link>
          </div>

          {isHomePage ? (
            <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          ) : (
            <ul className="nav-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/gallery">Cuaderno de campo</Link></li>
              <li><Link to="/blog">Dibujos recientes / Blog</Link></li>
              <li><Link to="/how-i-do-it">Miscelánea</Link></li>
              <li><Link to="/art">Arte</Link></li>
              <li><Link to="/nature">Naturaleza</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
            </ul>
          )}
        </div>
      </nav>

      {isHomePage && menuOpen && (
        <div className='menu-overlay' onClick={() => setMenuOpen(false)}></div>
      )}

      {isHomePage && (
        <div className={`menu-panel ${menuOpen ? 'menu-panel-open' : ''}`}>
          <button onClick={() => setMenuOpen(false)}>✕</button>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
            <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Cuaderno de campo</Link></li>
            <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Dibujos recientes / Blog</Link></li>
            <li><Link to="/how-i-do-it" onClick={() => setMenuOpen(false)}>Miscelánea</Link></li>
            <li><Link to="/art" onClick={() => setMenuOpen(false)}>Arte</Link></li>
            <li><Link to="/nature" onClick={() => setMenuOpen(false)}>Naturaleza</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
          </ul>
        </div>
      )}
    </>
  )
}