import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <>
      <nav className='navbar'>
        <div className='nav-container'>
          <div className="nav-logo">
            <Link to="/">Jesús Salado</Link>
          </div>
        
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/caha">CAHA</Link></li>
            <li><Link to="/how-i-do-it">How I Do It</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}
