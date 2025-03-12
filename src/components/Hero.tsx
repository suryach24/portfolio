import React from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-image">
          <img 
            src="/images/surya_face-Photoroom.png" 
            alt="Surya Chandra Kukunuri"
            className="hero-portrait"
          />
        </div>
        <span className="masked-text">Hello, I'm Surya Chandra Kukunuri</span>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap" rel="stylesheet"></link>
        <h1 aria-label="Hi! I'm a developer">&nbsp;<span className="typewriter thick"></span>
        </h1>
        <div className="cta-buttons">
          <a href="#contact" className="primary-button">Get in touch</a>
          <a href="#projects" className="secondary-button">View Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 