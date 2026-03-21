export interface ArchNode {
  label: string;
  color?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  isLive: boolean;
  architectureFlow: ArchNode[][];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'DTSS — Address Book',
    description:
      'Full-stack MERN application with CRUD, search/sort, import/export, authentication, and backup/restore. Deployed via Kubernetes on AWS with a full GitOps pipeline.',
    technologies: ['MERN Stack', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'GitHub Actions', 'AWS'],
    githubUrl: 'https://github.com/suryach24/dtss/',
    liveUrl: 'https://dtss-frontend.onrender.com',
    isLive: true,
    architectureFlow: [
      [{ label: 'React', color: '--accent' }],
      [{ label: 'Node/Express', color: '--text-secondary' }],
      [{ label: 'MongoDB', color: '--green' }],
      [{ label: 'Docker', color: '--text-secondary' }, { label: 'Kubernetes', color: '--accent' }],
      [{ label: 'AWS', color: '--aws-orange' }],
    ],
  },
  {
    id: 2,
    title: 'DALL-E Image Generator Clone',
    description:
      'OpenAI image generator with user authentication, image generation history, and Stripe payment integration for premium usage.',
    technologies: ['React', 'TypeScript', 'Firebase', 'OpenAI API', 'Stripe'],
    githubUrl: 'https://github.com/suryach24/dall-e-image-generator-clone',
    liveUrl: 'https://dall-e-73lh.onrender.com',
    isLive: true,
    architectureFlow: [
      [{ label: 'React', color: '--accent' }],
      [{ label: 'Firebase', color: '--amber' }],
      [{ label: 'OpenAI API', color: '--green' }, { label: 'Stripe', color: '--accent' }],
    ],
  },
  {
    id: 3,
    title: 'Pricewise — E-Commerce Scraper',
    description:
      'Price tracking platform that scrapes product data from e-commerce sites, stores it, and alerts users when prices drop.',
    technologies: ['React', 'Scraper Service', 'Jenkins', 'AWS'],
    githubUrl: 'https://github.com/suryach24/pricewise',
    isLive: false,
    architectureFlow: [
      [{ label: 'React', color: '--accent' }],
      [{ label: 'Scraper Service', color: '--text-secondary' }],
      [{ label: 'Jenkins CI', color: '--amber' }, { label: 'AWS', color: '--aws-orange' }],
    ],
  },
];
