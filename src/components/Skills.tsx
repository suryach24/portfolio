import React from 'react';
import '../styles/Skills.css';

interface SkillCategory {
  category: string;
  skills: string[];
}

interface ToolSkill {
  name: string;
  category: string;
  level: number;
  logo: string;
}

// Organized skill categories by relevance to Platform Reliability Engineer, Solutions Architect, and DevSecOps Engineer
const skillsData: SkillCategory[] = [
  {
    category: 'Cloud & Infrastructure',
    skills: ['AWS', 'Azure DevOps', 'VPC', 'Load Balancers', 'DNS', 'API Gateway', 'CloudFront', 'S3']
  },
  {
    category: 'DevOps & Automation',
    skills: ['Jenkins', 'CloudFormation', 'Ansible', 'Chef', 'Puppet', 'CodePipeline', 'CodeBuild', 'CodeDeploy']
  },
  {
    category: 'Containerization & Orchestration',
    skills: ['Docker', 'Docker Swarm', 'Elastic Container Service', 'Elastic Container Registry']
  },
  {
    category: 'Security & Compliance',
    skills: ['IAM', 'DigiCert', 'SonarQube', 'DAST ZAP', 'BlackDuck', 'Fortify', '42Crunch']
  },
  {
    category: 'Monitoring & Observability',
    skills: ['Splunk', 'Kibana', 'Graphana', 'CloudWatch', 'CloudTrail']
  },
  {
    category: 'Databases & Storage',
    skills: ['MongoDB', 'DynamoDB', 'RDS', 'MySQL', 'PostgreSQL', 'RedShift']
  },
  {
    category: 'Scripting & Development',
    skills: ['PowerShell', 'Bash', 'JavaScript', 'Python', 'YAML', 'XML']
  },
  {
    category: 'Version Control & Collaboration',
    skills: ['GIT', 'Bitbucket', 'GitLab', 'GitHub']
  },
  {
    category: 'Web Servers & Application Hosting',
    skills: ['Apache HTTP', 'Nginx', 'Apache Tomcat', 'WebLogic']
  },
  {
    category: 'Migration & Integration',
    skills: ['AWS Application Migration Service', 'Database Migration Service', 'DataSync']
  },
  {
    category: 'Networking & Security',
    skills: ['VPC', 'Load Balancers', 'Route53', 'API Gateway', 'CloudFront']
  }
];

// Top 10 tools with skill level (1-10 scale)
const topTools: ToolSkill[] = [
  { name: 'Amazon Web Services / Azure', category: 'Cloud Provider', level: 6, logo: '/images/tools/aws-logo.svg' },
  { name: 'Terraform / CloudFormation', category: 'Infrastructure as Code', level: 7, logo: '/images/tools/terraform-logo.svg' },
  { name: 'Docker / Docker Swarm', category: 'Containerization', level: 7, logo: '/images/tools/docker-logo.svg' },
  { name: 'Jenkins / GitLab / GitHub Actions', category: 'CI/CD', level: 6, logo: '/images/tools/jenkins.svg' },
  { name: 'Ansible / Chef / Puppet ', category: 'Configuration Management', level: 6, logo: '/images/tools/ansible.svg' },
  { name: 'Python / JavaScript / Bash / Shell Scripting', category: 'Scripting', level: 7, logo: '/images/tools/python-logo.svg' },
  { name: 'Kubernetes / ECS', category: 'Container Orchestration', level: 6, logo: '/images/tools/kubernetes.svg' },
  { name: 'IAM / Role Based Access Control', category: 'Security', level: 7, logo: '/images/tools/aws-iam.svg' },
  { name: 'CloudWatch / Splunk / Kibana / Graphana', category: 'Monitoring', level: 5, logo: '/images/tools/aws-cloudwatch.svg' },
  { name: 'Git / GitHub / Bitbucket / GitLab', category: 'Version Control', level: 7, logo: '/images/tools/git-logo.svg' }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2>Skills & Expertise</h2>
        <div className="section-line"></div>
      </div>
      <div className="top-tools-container">
        <h3>Core Technical Proficiencies</h3>
        <div className="tools-grid">
          {topTools.map((tool, index) => (
            <div className="tool-card" key={index}>
              <div className="tool-header">
                <div className="tool-logo-title">
                  <img src={tool.logo} alt={`${tool.name} logo`} className="tool-logo" />
                  <h4>{tool.name}</h4>
                </div>
                <span className="tool-category">{tool.category}</span>
              </div>
              <div className="skill-level-container">
                <div className="skill-level-bar">
                  <div 
                    className="skill-level-fill" 
                    style={{ width: `${tool.level * 10}%` }}
                  ></div>
                </div>
                <span className="skill-level-text">{tool.level > 0 ? `${tool.level}/10` : 'Not Rated'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="skills-categories-container">
        <h3>Technical Skill Categories</h3>
        <div className="skills-container">
          {skillsData.map((category, index) => (
            <div className="skill-category" key={index}>
              <h4>{category.category}</h4>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 