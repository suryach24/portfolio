import React from 'react';
import { careerEntries, domainCards } from '../data/careerData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/CareerJourney.css';

const CareerJourney: React.FC = () => {
  const ref = useScrollReveal();
  return (
    <section id="experience" className="career-journey" ref={ref as React.RefObject<HTMLElement>}>
      <div className="career-journey-inner">
        <div className="section-header reveal">
          <p className="section-label">Career Journey</p>
          <h2 className="section-title">7 Years Across 5 Industries</h2>
        </div>

        <div className="career-layout">
          <div className="timeline reveal">
            {careerEntries.map((entry, i) => (
              <div
                className={`timeline-entry${entry.isCrownJewel ? ' crown-jewel' : ''}`}
                key={entry.company}
              >
                <div className="timeline-spine">
                  <div className="timeline-dot" />
                  {i < careerEntries.length - 1 && <div className="timeline-line" />}
                </div>
                <div className="timeline-body">
                  {entry.isCrownJewel && (
                    <span className="crown-jewel-badge">★ Crown Jewel Project</span>
                  )}
                  <div className="timeline-header">
                    <div className="timeline-company-row">
                      <span className="timeline-company">{entry.company}</span>
                    </div>
                    <span className="timeline-period">{entry.period}</span>
                  </div>
                  <div className="timeline-role">{entry.role}</div>
                  <div className="timeline-industry">Industry · {entry.industry}</div>
                  <p className="timeline-achievement">"{entry.achievement}"</p>
                  <div className="timeline-tags">
                    {entry.tags.map(tag => (
                      <span className="tag-pill" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="domain-column reveal">
            <h3>Industries Served</h3>
            <div className="domain-cards">
              {domainCards.map(card => (
                <div className="domain-card" key={card.industry}>
                  <span className="domain-icon" aria-hidden="true">{card.icon}</span>
                  <div>
                    <div className="domain-info-title">{card.industry}</div>
                    <div className="domain-info-company">{card.company}</div>
                    <div className="domain-info-capability">{card.capability}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="career-tagline reveal">
          5 industries. 1 engineer. 7+ years.
        </p>
      </div>
    </section>
  );
};

export default CareerJourney;
