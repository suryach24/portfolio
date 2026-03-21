export interface CareerEntry {
  company: string;
  logo: string;
  role: string;
  period: string;
  industry: string;
  achievement: string;
  tags: string[];
  isCrownJewel?: boolean;
}

export interface DomainCard {
  icon: string;
  industry: string;
  company: string;
  duration: string;
  capability: string;
}

export const careerEntries: CareerEntry[] = [
  {
    company: 'InvoiceCloud',
    logo: '/images/companies/invoice-cloud-logo.svg',
    role: 'Platform Reliability Engineer',
    period: '2023 – Present',
    industry: 'FinTech · Payments',
    achievement:
      'Owning platform reliability for a payments SaaS — SLO tracking, Kubernetes workload management, zero-downtime deployments, and incident response.',
    tags: ['Kubernetes', 'AWS', 'Terraform', 'SRE Practices', 'CI/CD'],
  },
  {
    company: 'Verizon',
    logo: '/images/companies/verizon-logo.svg',
    role: 'DevSecOps Engineer',
    period: '2022 – 2023',
    industry: 'Telecom',
    achievement:
      'Designed and enforced security-first CI/CD pipelines for enterprise telecom infrastructure, integrating DAST, SAST, and compliance scanning into every release.',
    tags: ['DevSecOps', 'CI/CD', 'Security Pipelines', 'Cloud Migrations', 'DAST', 'SAST'],
  },
  {
    company: 'Ally Financial',
    logo: '/images/companies/ally-logo.svg',
    role: 'Sr. DevOps / Jr. SRE',
    period: '2021 – 2022',
    industry: 'FinTech · Auto Finance',
    achievement:
      'Led AAOS test suite migration BitBucket → GitLab; designed full CI/CD pipeline (build → test → scan → report → notify).',
    tags: ['GitLab CI/CD', 'Docker', 'Python', 'TestNG', 'Splunk', 'DynaTrace'],
  },
  {
    company: 'Humana Inc.',
    logo: '/images/companies/humana-logo.svg',
    role: 'DevOps Engineer',
    period: '2019 – 2021',
    industry: 'Healthcare',
    achievement:
      'Built program-wide Scrum dashboard (PowerBI + Azure DevOps + qTest); introduced Canary deployments; led Salesforce Copado DevOps implementation.',
    tags: ['Azure DevOps', 'PowerBI', 'Copado', 'Selenium', 'Canary Deployments'],
  },
  {
    company: 'Coyote Logistics (now RXO)',
    logo: '/images/companies/coyote-logistics-logo.svg',
    role: 'Associate DevOps Engineer',
    period: '2016 – 2019',
    industry: 'Supply Chain',
    achievement:
      'Spearheaded a 3-year on-prem → AWS migration for a major supply chain platform — 25+ AWS services, phased rollout, auto-scaling, real-time Redshift analytics, and cost dashboards. Zero data loss.',
    tags: ['EC2', 'ECS', 'Lambda', 'Redshift', 'Kinesis', 'CodePipeline', 'CloudFormation', 'RDS', 'DynamoDB', 'Route53', 'VPC'],
    isCrownJewel: true,
  },
];

export const domainCards: DomainCard[] = [
  {
    icon: '🏗️',
    industry: 'Supply Chain',
    company: 'Coyote Logistics · 3 years',
    duration: '2016 – 2019',
    capability: '25+ AWS services · Full on-prem → cloud migration',
  },
  {
    icon: '🏥',
    industry: 'Healthcare',
    company: 'Humana Inc. · 22 months',
    duration: '2019 – 2021',
    capability: 'Automation pipelines · Analytics dashboards · Canary deploys',
  },
  {
    icon: '💰',
    industry: 'FinTech',
    company: 'Ally Financial + InvoiceCloud',
    duration: '2021 – Present',
    capability: 'SRE practices · Payments reliability · CI/CD security',
  },
  {
    icon: '📡',
    industry: 'Telecom',
    company: 'Verizon · 1 year',
    duration: '2022 – 2023',
    capability: 'DevSecOps · DAST/SAST pipelines · Enterprise scale',
  },
  {
    icon: '☁️',
    industry: 'Payments SaaS',
    company: 'InvoiceCloud · Current',
    duration: '2023 – Present',
    capability: 'Platform reliability · Kubernetes · Zero-downtime deploys',
  },
];
