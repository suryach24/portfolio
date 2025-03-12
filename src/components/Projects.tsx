import React from 'react';
import '../styles/Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'DTSS - Address Book',
    description: 'A full-stack web application with CRUD operations, Search/Sort, Import/Export, User Authentication, and Backup/Restore functionalities.',
    technologies: ['MERN Stack', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'GitHub Actions'],
    imageUrl: '/images/project1.jpg',
    githubUrl: 'https://github.com/suryach24/dtss/',
    liveUrl: 'https://dtss-frontend.onrender.com'
  },
  {
    id: 2,
    title: 'Dall-E Image Generator Clone',
    description: 'An OpenAI Dall-E Image Generator Clone with user authentication, image generation, and image storage functionalities.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Stripe'],
    imageUrl: '/images/project2.jpg',
    githubUrl: 'https://github.com/suryach24/dall-e-image-generator-clone',
    liveUrl: 'https://dall-e-73lh.onrender.com'
  },
  {
    id: 3,
    title: 'Pricewise - An E-Commerce Scraper Website',
    description: 'An e-commerce platform that scrapes product details from different commerce websites and displays them in a user-friendly interface.',
    technologies: ['React', 'Stripe', 'Jenkins', 'AWS'],
    imageUrl: '/images/project3.jpg',
    githubUrl: 'https://github.com/suryach24/pricewise'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2>Projects</h2>
        <div className="section-line"></div>
      </div>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              { <img src={project.imageUrl} alt={project.title} /> }
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
                  GitHub
                </a>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="live-link">
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