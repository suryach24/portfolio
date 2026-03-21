import React from 'react';
import { projects } from '../data/projectsData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Projects.css';

interface ArchNode {
  label: string;
  color?: string;
}

const ArchDiagram: React.FC<{ flow: ArchNode[][] }> = ({ flow }) => (
  <div className="arch-diagram" aria-hidden="true">
    {flow.map((row, ri) => (
      <React.Fragment key={ri}>
        <div className="arch-row">
          {row.map(node => (
            <span
              key={node.label}
              className="arch-node"
              style={node.color ? {
                borderColor: `var(${node.color})`,
                color: `var(${node.color})`,
              } : undefined}
            >
              {node.label}
            </span>
          ))}
        </div>
        {ri < flow.length - 1 && <div className="arch-arrow">↓</div>}
      </React.Fragment>
    ))}
  </div>
);

const Projects: React.FC = () => {
  const ref = useScrollReveal();
  return (
    <section id="projects" className="projects" ref={ref as React.RefObject<HTMLElement>}>
      <div className="section-header reveal">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Selected Work</h2>
      </div>

      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card reveal" key={project.id}>
            <div className="project-header">
              <span className={`project-status-badge ${project.isLive ? 'live' : 'github'}`}>
                {project.isLive ? '● Live' : '○ GitHub Only'}
              </span>
            </div>

            <ArchDiagram flow={project.architectureFlow} />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  GitHub
                </a>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
