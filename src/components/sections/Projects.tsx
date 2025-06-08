import { Card, CardContent } from '../ui/Card'
import { Badge } from '../ui/Badge'
import {
  Zap,
  Database,
  Users,
  ExternalLink,
  Code2,
  Layers,
  MonitorSmartphone,
  MapPin,
} from 'lucide-react'
import Image from 'next/image'

type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  metrics?: {
    icon: React.ReactNode
    label: string
  }[]
  link: string
}

const projects: Project[] = [
  {
    title: 'Small & Sick Newborn Care Implementation Toolkit',
    description:
      "Developed and launched the comprehensive digital platform for SSNC's global newborn care implementation toolkit, enabling healthcare professionals worldwide to access evidence-based protocols, case studies, and best practices. Built an interactive knowledge-sharing system with advanced search capabilities, multi-language support, and networking features that connects healthcare workers across 50+ countries to reduce neonatal mortality in alignment with UN Sustainable Development Goals.",
    image: 'nest-360-3.png',
    tags: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Tailwind CSS',
      'Cloudinary CDN',
      'DigitalOcean',
      'Dokku',
    ],
    metrics: [
      {
        icon: <Zap className="h-4 w-4 text-green-500 mr-2" />,
        label: 'Interactive case study database and search system',
      },
      {
        icon: <Database className="h-4 w-4 text-blue-500 mr-2" />,
        label: 'Multi-language content management platform',
      },
      {
        icon: <Users className="h-4 w-4 text-purple-500 mr-2" />,
        label: 'Global networking and knowledge-sharing features',
      },
    ],
    link: 'https://newborntoolkit.org/',
  },
  {
    title: 'Jungle.ai Flagship Dashboard',
    description:
      "Spearheaded the complete redesign and development of Jungle.ai's flagship AI dashboard, resulting in 37% faster load times and significantly improved user experience. Implemented advanced data visualization components and real-time AI model monitoring capabilities for industrial IoT applications.",
    image: '/images/jungle-ai-dashboard.png',
    tags: ['Vue.js', 'Python', 'GraphQL', 'AWS'],
    metrics: [
      {
        icon: <Zap className="h-4 w-4 text-green-500 mr-2" />,
        label: '37% faster load times',
      },
      {
        icon: <Code2 className="h-4 w-4 text-blue-500 mr-2" />,
        label: 'Real-time AI model monitoring',
      },
      {
        icon: <Layers className="h-4 w-4 text-purple-500 mr-2" />,
        label: 'Advanced data visualization',
      },
    ],
    link: 'https://www.jungle.ai',
  },
  {
    title: 'Equal Measures 2030 SDG Gender Index Platform',
    description:
      "Built and optimized the digital platform for Equal Measures 2030's SDG Gender Index, a comprehensive data-driven advocacy tool tracking gender equality progress across 129 countries. Developed interactive data visualizations, real-time country comparisons, and advocacy resources that empowered feminist organizations and policymakers to drive accountability for the UN Sustainable Development Goals.",
    image:
      'https://res.cloudinary.com/africhoral/image/upload/w_1000,ar_4:4,c_fill,g_auto/v1749388057/personal-website/equal-measures-website.png',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Cloudinary CDN'],
    metrics: [
      {
        icon: <Zap className="h-4 w-4 text-green-500 mr-2" />,
        label: 'Interactive data visualization dashboard',
      },
      {
        icon: <MapPin className="h-4 w-4 text-blue-500 mr-2" />,
        label: 'Real-time country progress tracking',
      },
      {
        icon: <Users className="h-4 w-4 text-purple-500 mr-2" />,
        label: 'Advocacy tool integration',
      },
      {
        icon: <MonitorSmartphone className="h-4 w-4 text-purple-500 mr-2" />,
        label: 'Mobile - responsive design for global accessibility',
      },
    ],
    link: 'https://www.equalmeasures.org',
  },
]

export const Project = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Here are some of the key projects {"I've"} worked on that demonstrate
              my expertise in full-stack development, performance optimization,
              and team leadership. Each project showcases different aspects of
              my technical skills and the measurable impact {"I've"} delivered.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <Card
                className="overflow-hidden hover:shadow-xl transition-all duration-300"
                key={project.title}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div
                    className={`relative h-64 lg:h-auto ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-teal-600/20" />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center lg:order-1">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      {project.tags.map(tag => (
                        <Badge variant="secondary" key={tag}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {project.metrics?.map(metric => (
                        <div
                          className="flex items-center text-sm"
                          key={metric.label}
                        >
                          {metric.icon}
                          <span>{metric.label}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors w-fit"
                    >
                      View Case Study
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
