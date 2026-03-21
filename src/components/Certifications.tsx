import React from 'react';
import { certifications } from '../data/certificationsData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Certifications.css';

const Certifications: React.FC = () => {
  const ref = useScrollReveal();
  return (
    <section id="certifications" className="certifications" ref={ref as React.RefObject<HTMLElement>}>
      <div className="certifications-inner">
        <div className="section-header reveal">
          <p className="section-label">Certifications</p>
          <h2 className="section-title">8 Verified Credentials</h2>
          <p className="section-subtitle">3× AWS · 2× Azure · CKA · Terraform · SAFe</p>
        </div>

        <div className="cert-grid">
          {certifications.map(cert => (
            <div className={`cert-card ${cert.providerType} reveal`} key={cert.name}>
              <img
                src={cert.imageFile}
                alt={`${cert.name} badge`}
                className="cert-badge"
              />
              <div className="cert-name">{cert.name}</div>
              <div className={`cert-provider ${cert.providerType}`}>{cert.provider}</div>
              <p className="cert-meaning">{cert.meaning}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
