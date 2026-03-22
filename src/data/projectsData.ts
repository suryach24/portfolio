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
    title: 'doratrace — DORA Metrics Dashboard',
    description:
      'Standalone SRE tool that calculates all 4 DORA metrics for any public GitHub or Azure DevOps repository. Enter a full URL and get Deployment Frequency, Lead Time, MTTR, and Change Failure Rate — with cascading fallbacks for repos without formal releases or PRs.',
    technologies: ['React', 'TypeScript', 'Node/Express', 'GitHub API', 'Azure DevOps API', 'Nginx', 'PM2'],
    githubUrl: 'https://github.com/suryach24/doratrace',
    liveUrl: 'https://doratrace.surya-kukunuri.com',
    isLive: true,
    architectureFlow: [
      [{ label: 'React + Vite', color: '--accent' }],
      [{ label: 'Node/Express', color: '--text-secondary' }],
      [{ label: 'GitHub API', color: '--green' }, { label: 'ADO API', color: '--azure-blue' }],
      [{ label: 'Nginx', color: '--text-secondary' }, { label: 'PM2', color: '--accent' }],
      [{ label: 'Hetzner VPS', color: '--aws-orange' }],
    ],
  },
  {
    id: 2,
    title: 'DTSS — Address Book',
    description:
      'Full-stack MERN application with CRUD operations, search/sort, import/export, user authentication, and backup/restore. React frontend communicates with a dedicated Express REST API backed by MongoDB.',
    technologies: ['React', 'Node/Express', 'MongoDB', 'Mongoose', 'REST API'],
    githubUrl: 'https://github.com/suryach24/dtss/',
    liveUrl: 'https://dtss-frontend.onrender.com',
    isLive: true,
    architectureFlow: [
      [{ label: 'React', color: '--accent' }],
      [{ label: 'Node/Express', color: '--text-secondary' }],
      [{ label: 'MongoDB', color: '--green' }],
    ],
  },
  {
    id: 3,
    title: 'Pricewise — Price Tracker',
    description:
      'Next.js full-stack price tracking tool that scrapes product data from e-commerce sites using Cheerio, stores prices in MongoDB, and emails alerts via Nodemailer when prices drop.',
    technologies: ['Next.js', 'Cheerio', 'MongoDB', 'Nodemailer', 'Tailwind CSS'],
    githubUrl: 'https://github.com/suryach24/pricewise',
    isLive: false,
    architectureFlow: [
      [{ label: 'Next.js', color: '--accent' }],
      [{ label: 'Cheerio Scraper', color: '--text-secondary' }],
      [{ label: 'MongoDB', color: '--green' }, { label: 'Nodemailer', color: '--amber' }],
    ],
  },
];
