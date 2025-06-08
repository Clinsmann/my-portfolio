import {
  Code2,
  Zap,
  Database,
  Layers,
  Users,
  TestTube,
  LucideIcon,
} from 'lucide-react'

export const websiteUrl = 'https://www.ibeanuhillary.com'

export interface Specialization {
  icon: LucideIcon
  title: string
  description: string
}

export const specializations: Specialization[] = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Frontend & backend systems with seamless integration',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Reduced page load times by up to 70%',
  },
  {
    icon: Database,
    title: 'API Development',
    description: 'RESTful APIs, GraphQL, authentication systems',
  },
  {
    icon: Layers,
    title: 'Cross-Platform Architecture',
    description: 'Streamlined integration processes by 28%',
  },
  {
    icon: Users,
    title: 'Team Leadership',
    description: 'Led teams that increased development speed by 35%',
  },
  {
    icon: TestTube,
    title: 'Testing & Quality Assurance',
    description: 'Implemented E2E testing reducing defects by 14%',
  },
]

export const technologyStack = {
  Frontend: ['React.js', 'TypeScript', 'JavaScript (ES6)', 'Vue.js', 'Next.js'],
  Backend: ['Node.js', 'NestJS', 'Express.js', 'PHP/Laravel', 'Python'],
  Database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
  APIs: ['GraphQL', 'RESTful APIs', 'Apollo', 'tRPC'],
  Testing: ['Jest', 'Cypress', 'E2E Testing', 'Vitest', 'Playwright'],
  DevOps: [
    'AWS',
    'CI/CD',
    'Docker',
    'Digital Ocean',
    'Dokku',
    'GitHub Actions',
    'Vercel',
  ],
}
