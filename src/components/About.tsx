import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/About.css';

const EXPERTISE = [
  {
    icon: 'fa-cogs',
    title: 'Automation',
    description: 'Implementing infrastructure as code and automated workflows to reduce manual intervention and increase release velocity.',
    hoverText: '3-year IaC rebuild at Coyote Logistics — Terraform, CloudFormation, CodePipeline across 25+ services',
  },
  {
    icon: 'fa-server',
    title: 'Infrastructure Building',
    description: 'Designing and deploying cloud-native architectures across AWS and Azure to create scalable, resilient infrastructure.',
    hoverText: "Migrated Coyote Logistics' entire on-prem stack to AWS; designed multi-AZ, auto-scaling architecture",
  },
  {
    icon: 'fa-shield-alt',
    title: 'Platform Reliability',
    description: 'Ensuring high availability through proactive monitoring, incident response, and SRE practices that maintain system reliability.',
    hoverText: 'Currently maintaining SLO targets at InvoiceCloud; on-call incident response and runbook ownership',
  },
  {
    icon: 'fa-rocket',
    title: 'Deployment & CI/CD',
    description: 'Building robust CI/CD pipelines enabling continuous integration, testing, and delivery with security and compliance baked in.',
    hoverText: 'Designed GitLab CI/CD pipelines at Ally (build → test → scan → report → notify) with Docker + TestNG',
  },
];

const About: React.FC = () => {
  const ref = useScrollReveal();
  return (
    <section id="about" className="about" ref={ref as React.RefObject<HTMLElement>}>
      <div className="section-header reveal">
        <p className="section-label">About Me</p>
        <h2 className="section-title">Building Scalable &amp; Resilient Architectures</h2>
      </div>

      <p className="about-bio reveal">
        DevSecOps and Platform Reliability Engineer with 7+ years building, migrating, and hardening
        cloud infrastructure across supply chain, healthcare, fintech, and telecom. I specialize in
        making systems resilient, releases boring, and on-call rotations quiet.
      </p>

      <div className="expertise-grid">
        {EXPERTISE.map((item) => (
          <div className="expertise-card reveal" key={item.title}>
            <div className="expertise-header">
              <div className="expertise-icon">
                <i className={`fas ${item.icon}`} aria-hidden="true" />
              </div>
              <h3>{item.title}</h3>
            </div>
            <p className="expertise-desc">{item.description}</p>
            <p className="expertise-hover">{item.hoverText}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
