import React from 'react';
import '../styles/AboutPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <Header />
      <main className="about-page-content">
        {/* Profile Section */}
        <section className="profile-section">
          <div className="container-header">
            <div className="profile-content">
              <div className="profile-image">
                <div className="portrait-container">
                  <img src="/images/surya_face-Photoroom.png" alt="Surya Chandra Kukunuri" className="portrait" />
                </div>
              </div>
              <div className="profile-info">
                <h1>Surya Chandra Kukunuri</h1>
                <h2>Platform Reliability Engineer & Cloud Solutions Architect</h2>
                <div className="title-tags">
                  <li className="title-tag">DevSecOps</li>
                  <li className="title-tag">SRE</li>
                  <li className="title-tag">Cloud Architecture</li>
                  <li className="title-tag">CI/CD</li>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Summary Section */}
        <section className="summary-section">
          <div className="container-professional-summary">
            <h2 className="section-title">Professional Summary</h2>
            <div className="summary-content">
              <p>
              Seasoned Site Reliability Engineer with 7+ years of experience in designing, implementing, and optimizing cloud infrastructure and automation solutions. Adept at driving operational excellence and efficiency across diverse enterprise environments. Successfully managed mission-critical systems on AWS and Azure, achieving uptime improvements that consistently surpass 99.99%. Expertise in automation, monitoring, and data analytics has led to cost reductions, performance optimizations, and rapid issue resolution through proactive incident management.
              </p>
              <p>
                <ul>
                  <li>Improved system uptime to 99.99% by implementing robust monitoring and automation for Verzion and Humana.</li>
                  <li>Achieved a 30% performance boost through strategic infrastructure optimizations for Ally.</li>
                  <li>Reduced operational costs by 20% via automation and process streamlining for Verizon and Ally.</li>
                  <li>Successfully led cross-functional teams in on-premise to cloud migration for RXO Logistics.</li>
                </ul>
              </p>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="experience-section">
          <div className="container-experience-section">
            <h2 className="section-title">Work Experience</h2>
            <div className="experience-timeline">
              <div className="experience-item">
                <div className="company-logo">
                  <img src="/images/companies/invoice-cloud-logo.svg" alt="Invoice Cloud" />
                </div>
                <div className="experience-content">
                  <h3 className="company">Invoice Cloud</h3>
                  <p className="position">Senior Platform Reliability Engineer</p>
                  <p className="period">Apr 2025 - Present</p>
                  <ul className="responsibilities">
                    <li>Lead the design and implementation of cloud infrastructure solutions using Azure.</li>
                    <li>Architect and maintain CI/CD pipelines to streamline software delivery processes.</li>
                    <li>Implement infrastructure as code using Terraform and CloudFormation to ensure consistency and repeatability.</li>
                    <li>Develop monitoring solutions with CloudWatch and Splunk to maintain high availability and performance.</li>
                    <li>Collaborate with security teams to implement DevSecOps practices and ensure compliance with security standards.</li>
                  </ul>
                </div>
              </div>

              <div className="experience-item">
                <div className="company-logo">
                  <img src="/images/companies/verizon-logo.svg" alt="Verizon" />
                </div>
                <div className="experience-content">
                  <h3 className="company">Cognizant Technology Solutions (Client Name: Verizon)</h3>
                  <p className="position">Site Reliability Engineer</p>
                  <p className="period">Nov 2023 - Mar 2025</p>
                  <ul className="responsibilities">
                    <li>Orchestrated AWS and Azure infrastructure using Terraform and CloudFormation for microservices architecture.</li>
                    <li>Automated deployment workflows with Jenkins and Azure DevOps, reducing deployment time by 60%.</li>
                    <li>Implemented containerization solutions using Docker and ECS for application deployment.</li>
                    <li>Established monitoring and alerting systems using Splunk, Graphana and CloudWatch.</li>
                    <li>Developed disaster recovery and high availability solutions for critical systems.</li>
                  </ul>
                </div>
              </div>

              <div className="experience-item">
                <div className="company-logo">
                  <img src="/images/companies/ally-logo.svg" alt="Ally Financial" />
                </div>
                <div className="experience-content">
                  <h3 className="company">Cognizant Technology Solutions (Client Name: Ally Financial)</h3>
                  <p className="position">Cloud Solutions Architect</p>
                  <p className="period">Oct 2022 - Nov 2023</p>
                  <ul className="responsibilities">
                    <li>Built and maintained CI/CD pipelines for banking applications using Jenkins and Ansible.</li>
                    <li>Implemented infrastructure monitoring solutions to ensure high availability of services.</li>
                    <li>Collaborated with development teams to optimize application performance and reliability.</li>
                    <li>Developed and maintained automation scripts for routine operations tasks using Python and Bash.</li>
                    <li>Participated in on-call rotations to provide 24/7 support for critical banking systems.</li>
                  </ul>
                </div>
              </div>

              <div className="experience-item">
                <div className="company-logo">
                  <img src="/images/companies/humana-logos.svg" alt="Humana" />
                </div>
                <div className="experience-content">
                  <h3 className="company">Cognizant Technology Solutions (Client Name: Humana)</h3>
                  <p className="position">DevOps Lead</p>
                  <p className="period">Nov 2021 - Oct 2022</p>
                  <ul className="responsibilities">
                    <li>Managed and maintained healthcare infrastructure systems and applications.</li>
                    <li>Supported migration of on-premise systems to AWS cloud infrastructure.</li>
                    <li>Implemented automated deployment processes to improve release consistency.</li>
                    <li>Collaborated with development teams to troubleshoot and resolve system issues.</li>
                    <li>Assisted in designing and implementing disaster recovery solutions.</li>
                  </ul>
                </div>
              </div>

              <div className="experience-item">
                <div className="company-logo">
                  <img src="/images/companies/coyote-logistics-logo.svg" alt="RXO Logistics" />
                </div>
                <div className="experience-content">
                  <h3 className="company">RXO Logistics (formerly Coyote Logistics)</h3>
                  <p className="position">IT Infrastructure Specialist</p>
                  <p className="period">Jan 2018 - Oct 2021</p>
                  <ul className="responsibilities">
                    <li>Supported and maintained IT infrastructure for logistics management systems.</li>
                    <li>Assisted in the implementation of new technologies and systems to improve operational efficiency.</li>
                    <li>Provided technical support for infrastructure-related issues.</li>
                    <li>Collaborated with cross-functional teams to ensure system reliability and performance.</li>
                    <li>Participated in infrastructure upgrade projects and migrations.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="certifications-section">
          <div className="container-certifications-section">
            <h2 className="section-title">Certifications</h2>
            <div className="certifications-grid">
              <div className="certification-item">
                <div className="certification-badge">
                  <img src="/images/certifications/aws-solutions-architect-professional.png" alt="AWS Certified Solutions Architect" />
                </div>
                <div className="certification-info">
                  <h3>AWS Certified Solutions Architect - Professional</h3>
                  <p className="certification-issuer">Amazon Web Services</p>
                  <p className="issue-date">Issued: June 2021</p>
                </div>
              </div>

              <div className="certification-item">
                <div className="certification-badge">
                  <img src="/images/certifications/aws-devops-engineer-professional.png" alt="AWS Certified DevOps Engineer" />
                </div>
                <div className="certification-info">
                  <h3>AWS Certified DevOps Engineer - Professional</h3>
                  <p className="certification-issuer">Amazon Web Services</p>
                  <p className="issue-date">Issued: October 2020</p>
                </div>
              </div>

              <div className="certification-item">
                <div className="certification-badge">
                  <img src="/images/certifications/aws-solutions-architect-associate.png" alt="AWS Certified Solutions Architect" />
                </div>
                <div className="certification-info">
                  <h3>AWS Certified Solutions Architect - Associate</h3>
                  <p className="certification-issuer">Amazon Web Services</p>
                  <p className="issue-date">Issued: January 2018</p>
                </div>
              </div>

              <div className="certification-item">
                <div className="certification-badge">
                  <img src="/images/certifications/azure-devops.webp" alt="Microsoft Azure DevOps Engineer" />
                </div>
                <div className="certification-info">
                  <h3>Microsoft Certified: Azure DevOps Engineer Expert</h3>
                  <p className="certification-issuer">Microsoft</p>
                  <p className="issue-date">Issued: February 2019</p>
                </div>
              </div>

              <div className="certification-item">
                <div className="certification-badge">
                  <img src="/images/certifications/azure-solutions-architect.png" alt="Microsoft Azure Solutions Architect Expert" />
                </div>
                <div className="certification-info">
                  <h3>Microsoft Certified: Azure Solutions Architect Expert</h3>
                  <p className="certification-issuer">Microsoft</p>
                  <p className="issue-date">Issued: December 2020</p>
                </div>
              </div>

              <div className="certification-item">
                <div className="certification-badge">
                  <img src="/images/certifications/kubernetes-cka.png" alt="Kubernetes CKA" />
                </div>
                <div className="certification-info">
                  <h3>Certified Kubernetes Administrator (CKA)</h3>
                  <p className="certification-issuer">Cloud Native Computing Foundation</p>
                  <p className="issue-date">Issued: July 2022</p>
                </div>
              </div>

              <div className="certification-item">
                <div className="certification-badge">
                  <img src="/images/certifications/terraform.png" alt="HashiCorp Terraform" />
                </div>
                <div className="certification-info">
                  <h3>HashiCorp Certified: Terraform Associate</h3>
                  <p className="certification-issuer">HashiCorp</p>
                  <p className="issue-date">Issued: November 2023</p>
                </div>
              </div>

              <div className="certification-item">
                <div className="certification-badge">
                  <img src="/images/certifications/safe-sdp.png" alt="Safe 6 DevOps Practitioner" />
                </div>
                <div className="certification-info">
                  <h3>SAFe 6 DevOps Practitioner</h3>
                  <p className="certification-issuer">Scaled Agile Inc.</p>
                  <p className="issue-date">Issued: October 2024</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="education-section">
          <div className="container-education-section">
            <h2 className="section-title">Education</h2>
            <div className="education-content">
              <div className="education-item">
                <div className="education-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="education-info">
                  <h3>Masters of Science in Computer Science</h3>
                  <p className="institution">University of Illinois at Urbana-Champaign</p>
                  <p className="period">2016 - 2018</p>
                  <p>Specialized in Distributed Systems and Cloud Computing. Completed thesis on "Optimizing Performance in Distributed Cloud Environments."</p>
                </div>
              </div>

              <div className="education-item">
                <div className="education-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="education-info">
                  <h3>Bachelor of Technology in Computer Science</h3>
                  <p className="institution">Gandhi Institute of Technology and Management</p>
                  <p className="period">2010 - 2014</p>
                  <p>Graduated with honors. Focused on software development, algorithms, and system architecture.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section className="hobbies-section">
          <div className="container-hobbies-section">
            <h2 className="section-title">Hobbies & Interests</h2>
            <div className="hobbies-grid">
              <div className="hobby-item">
                <div className="hobby-icon">
                  <i className="fas fa-gamepad"></i>
                </div>
                <h3>Gaming</h3>
                <p>Playing video games to relax and unwind.</p>
              </div>

              <div className="hobby-item">
                <div className="hobby-icon">
                  <i className="fas fa-book"></i>
                </div>
                <h3>Reading</h3>
                <p>Enjoying technical literature, science fiction, and philosophy books.</p>
              </div>

              <div className="hobby-item">
                <div className="hobby-icon">
                  <i className="fas fa-tools"></i>
                </div>
                <h3>Tinkering</h3>
                <p>Building and fixing things to improve my home and my electronics.</p>
              </div>

              <div className="hobby-item">
                <div className="hobby-icon">
                  <i className="fas fa-chess"></i>
                </div>
                <h3>Chess</h3>
                <p>Playing strategic chess games to improve critical thinking and problem-solving skills.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage; 