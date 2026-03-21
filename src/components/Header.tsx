import React, { useState } from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <span>Surya Chandra | Portfolio</span>
          </a>
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
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#war-stories">War Stories</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 