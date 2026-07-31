import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={
          `navbar
           ${isHomePage ? 'navbar-transparent' : ''}
           ${scrolled ? 'navbar-scrolled' : ''}`
        }
      >
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">Jesús Salado</Link>
          </div>

          {!isHomePage && (
            <ul className="nav-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/notebook">Cuaderno de campo</Link></li>
              <li><Link to="/about">Contacto</Link></li>
            </ul>
          )}

          <button
            className={`nav-toggle ${isHomePage ? 'nav-toggle-always' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>
      )}

      <div className={`menu-panel ${menuOpen ? 'menu-panel-open' : ''}`}>
        <Link className="menu-close" onClick={() => setMenuOpen(false)}>✕</Link>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
          <li><Link to="/notebook" onClick={() => setMenuOpen(false)}>Cuaderno de campo</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
        </ul>
      </div>
    </>
  );
};