import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="/">YourName</a>
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="social-links">
            <a href="https://github.com/suryach24" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/suryach24" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/suryach24" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Surya Chandra Kukunuri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 