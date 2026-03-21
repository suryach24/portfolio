import React from 'react';
import { warStories } from '../data/warStoriesData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/WarStories.css';

const WarStories: React.FC = () => {
  const ref = useScrollReveal();
  return (
    <section id="war-stories" className="war-stories" ref={ref as React.RefObject<HTMLElement>}>
      <div className="section-header reveal">
        <p className="section-label">War Stories</p>
        <h2 className="section-title">Real Challenges. Real Solutions.</h2>
        <p className="section-subtitle">Not just projects — the actual challenges, the approach, and the outcome.</p>
      </div>

      <div className="war-stories-grid">
        {warStories.map(story => (
          <div className={`story-card ${story.statusColor} reveal`} key={story.id}>
            <div className="story-status">● {story.statusLabel}</div>
            <div className="story-title">{story.title}</div>

            <div className="story-field">
              <span className="story-field-label">Problem</span>
              <span className="story-field-text">{story.problem}</span>
            </div>

            <div className="story-field">
              <span className="story-field-label">Approach</span>
              <span className="story-field-text">{story.approach}</span>
            </div>

            <div className="story-field">
              <span className="story-field-label">Tools</span>
              <div className="story-tools">
                {story.tools.map(tool => (
                  <span className="story-tag-pill" key={tool}>{tool}</span>
                ))}
              </div>
            </div>

            <div className="story-field">
              <span className="story-field-label">Outcome</span>
              <span className="story-field-text">{story.outcome}</span>
            </div>

            <div className="story-impact">{story.impact}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WarStories;
