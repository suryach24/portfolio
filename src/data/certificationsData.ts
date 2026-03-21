export interface Certification {
  name: string;
  provider: string;
  providerType: 'aws' | 'azure' | 'other';
  imageFile: string;
  meaning: string;
}

export const certifications: Certification[] = [
  {
    name: 'Solutions Architect – Professional',
    provider: 'Amazon Web Services',
    providerType: 'aws',
    imageFile: '/images/certifications/aws-solutions-architect-professional.png',
    meaning: 'Designing complex, cost-optimised multi-account AWS architectures at enterprise scale.',
  },
  {
    name: 'DevOps Engineer – Professional',
    provider: 'Amazon Web Services',
    providerType: 'aws',
    imageFile: '/images/certifications/aws-devops-engineer-professional.png',
    meaning: 'Building and operating CI/CD systems, auto-scaling, monitoring, and incident response on AWS.',
  },
  {
    name: 'Solutions Architect – Associate',
    provider: 'Amazon Web Services',
    providerType: 'aws',
    imageFile: '/images/certifications/aws-solutions-architect-associate.png',
    meaning: 'Core AWS services, resilient architecture, and well-architected framework principles.',
  },
  {
    name: 'Solutions Architect – Expert',
    provider: 'Microsoft Azure',
    providerType: 'azure',
    imageFile: '/images/certifications/azure-solutions-architect.png',
    meaning: 'Designing and implementing Azure infrastructure solutions for compute, storage, networking, and security.',
  },
  {
    name: 'DevOps Engineer',
    provider: 'Microsoft Azure',
    providerType: 'azure',
    imageFile: '/images/certifications/azure-devops.webp',
    meaning: 'Azure DevOps pipelines, release strategies, infrastructure as code, and governance.',
  },
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    provider: 'Cloud Native Computing Foundation',
    providerType: 'other',
    imageFile: '/images/certifications/kubernetes-cka.png',
    meaning: 'Cluster administration, workload scheduling, networking, storage, and troubleshooting in production K8s.',
  },
  {
    name: 'Terraform Associate',
    provider: 'HashiCorp',
    providerType: 'other',
    imageFile: '/images/certifications/terraform.png',
    meaning: 'Infrastructure as Code with Terraform — state management, modules, workspaces, and cloud provisioning.',
  },
  {
    name: 'SAFe DevOps Practitioner',
    provider: 'Scaled Agile',
    providerType: 'other',
    imageFile: '/images/certifications/safe-sdp.png',
    meaning: 'Applying DevOps practices within a Scaled Agile Framework (SAFe) enterprise delivery context.',
  },
];
