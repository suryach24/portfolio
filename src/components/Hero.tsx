import React from 'react';
import HeroNodeNetwork from './HeroNodeNetwork';
import '../styles/Hero.css';

const STATS = [
  { value: '7+',  label: 'Years Experience' },
  { value: '8×',  label: 'Certified' },
  { value: '5',   label: 'Industries' },
  { value: '25+', label: 'AWS Services' },
];

const Hero: React.FC = () => (
  <section className="hero">
    <HeroNodeNetwork />

    <div className="hero-content">
      <p className="section-label">Platform Reliability Engineer · DevSecOps · Cloud Architect</p>

      <h1 className="hero-name">Surya Chandra Kukunuri</h1>

      <p className="hero-tagline">
        "Building cloud infrastructure that doesn't page you at 3am"
      </p>

      <div className="hero-typewriter">
        <span className="typewriter thick" aria-label="Role title" />
      </div>

      <div className="hero-stats">
        {STATS.map(({ value, label }) => (
          <div className="hero-stat" key={label}>
            <span className="hero-stat-value">{value}</span>
            <span className="hero-stat-label">{label}</span>
          </div>
        ))}
      </div>

      <div className="hero-cta">
        <a href="#projects" className="btn-primary">View My Work</a>
        <a
          href="/Surya_Chandra_Resume.pdf"
          className="btn-secondary"
          download
        >
          Resume ↓
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
