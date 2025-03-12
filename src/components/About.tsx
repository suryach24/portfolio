import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2>About Me</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="about-headline">
        <h1>Building Scalable & Resilient Architectures for Digital Platforms</h1>
      </div>
      
      <div className="background-container">
        <h3>My Background</h3>
        <p>
        A DevSecOps and SRE professional with 7+ years of experience in cloud migrations, 
        automation, CI/CD pipeline design, and infrastructure management. Worked with AWS, 
        Azure, and various security tools to build secure, scalable, and resilient systems. 
        Passionate about driving efficiency through automation, Aim to reduce deployment 
        times, improve system reliability, and foster cross-team collaboration for seamless operations.
        </p>
      </div>
      
      <div className="expertise-grid">
        <div className="expertise-card">
          <div className="expertise-header">
            <div className="expertise-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <h3>Automation</h3>
          </div>
          <p>
            Implementing infrastructure as code and automated workflows to reduce manual intervention,
            minimize human error, and increase deployment velocity using tools like Terraform, Ansible, and GitHub Actions.
          </p>
        </div>
        
        <div className="expertise-card">
          <div className="expertise-header">
            <div className="expertise-icon">
              <i className="fas fa-server"></i>
            </div>
            <h3>Infrastructure Building</h3>
          </div>
          <p>
            Designing and deploying cloud-native architectures that leverage the best of AWS, Azure, and GCP
            to create scalable, cost-effective, and resilient infrastructure foundations.
          </p>
        </div>
        
        <div className="expertise-card">
          <div className="expertise-header">
            <div className="expertise-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Platform Reliability</h3>
          </div>
          <p>
            Ensuring high availability and performance through proactive monitoring, incident response,
            and implementing SRE practices that maintain system reliability while enabling rapid innovation.
          </p>
        </div>
        
        <div className="expertise-card">
          <div className="expertise-header">
            <div className="expertise-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <h3>Deployment & CI/CD</h3>
          </div>
          <p>
            Building robust deployment pipelines that enable continuous integration, testing, and delivery,
            allowing teams to ship code with confidence while maintaining security and compliance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 