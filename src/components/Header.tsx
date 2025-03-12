import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <span>Surya Chandra | Portfolio</span>
          </Link>
        </div>
        <div className={`menu-button ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span>
            <img src="/images/menu.svg" alt="Menu" className="menu-icon" />
            <img src="/images/close.svg" alt="Close" className="close-icon" />
          </span>
          <span></span>
          <span></span>
        </div>
        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <ul>
            {isHomePage ? (
              <>
                <li><a href="#about" onClick={closeMenu}>About</a></li>
                <li><Link to="/about-me" onClick={closeMenu}>Resume</Link></li>
                <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
              </>
            ) : (
              <>
                <li><Link to="/#about" onClick={closeMenu}>About</Link></li>
                <li><Link to="/about-me" onClick={closeMenu}>Resume</Link></li>
                <li><Link to="/#projects" onClick={closeMenu}>Projects</Link></li>
                <li><Link to="/#skills" onClick={closeMenu}>Skills</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 