import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import { useState } from 'react';

export const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isHomePage = location.pathname === '/';

  return (
    <>
      <nav className={`navbar ${isHomePage ? 'navbar-transparent' : ''}`}>
        <div className='nav-container'>
          <div className="nav-logo">
            <Link to="/">Jesús Salado</Link>
          </div>

          {isHomePage ? (
            <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          ) : (
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/gallery">Galería</Link></li>
              <li><Link to="/caha">CAHA</Link></li>
              <li><Link to="/how-i-do-it">Cómo lo hice</Link></li>
              <li><Link to="/about">Sobre mí</Link></li>
            </ul>
          )}
        </div>
      </nav>

      {menuOpen && (
        <div className='menu-overlay' onClick={() => setMenuOpen(false)}></div>
      )}

      <div className={`menu-panel ${menuOpen ? 'menu-panel-open' : ''}`}>
        <button onClick={() => setMenuOpen(false)}>✕</button>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Galería</Link></li>
          <li><Link to="/caha" onClick={() => setMenuOpen(false)}>CAHA</Link></li>
          <li><Link to="/how-i-do-it" onClick={() => setMenuOpen(false)}>Cómo lo hice</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>Sobre mí</Link></li>
        </ul>
      </div>
    </>
  )
}