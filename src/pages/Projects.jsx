import { ExternalLink, Eye } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const Projects = () => {
  const projects = [
    {
      title: 'Caastv – Unified Media Management Platform',
      description:
        'A custom content management system designed to power both web and Android clients with all core logic handled securely on the server. It supports dynamic content workflows, user and role management, media operations, analytics segregation, and streamlined API communication for real-time updates across platforms. The system is built for scalability, clean deployment across multiple environments, and smooth integration with external services.',
      technologies: [
        'React.js',
        'Next.js',
        'Tailwind CSS',
        'Node.js',
        'Express',
        'MongoDB',
        'Payment Gateway',
        'WS',
        'Redis',
        'Docker',
        'Nginx',
        'App Integration',
      ],
      image: '/caastv-dashboard.png',
      preview: '#',
    },
    {
      title: ' CaaSGuard – Server Monitoring & Ops Panel',
      description:
        'CaaSGuard is a centralized admin panel I built for real-time monitoring and management of Linux servers, Docker containers, and Nginx. It provides a clean dashboard to track system health with live and historical insights, manage containers, and quickly diagnose traffic issues. The platform also offers a secure browser-based terminal for remote access without exposing raw SSH. With configurable settings and flexible controls, it fits smoothly into different production env.',
      technologies: [
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'WebSocket',
        'SSH integration',
        'Docker API',
        'Nginx controls',
        'System utilities',
      ],
      image: '/caasguard-dashboard.png',
      preview: '#',
    },
    {
      title: 'EC2 Cloud Cost Analyzer',
      description:
        'AWS EC2 Cloud Cost Analyzer is a tool that helps you analyze the cost of your AWS EC2 instances. It is a web application that allows you to view the cost of your AWS EC2 instances and compare them with the cost of other AWS EC2 instances.',
      technologies: [
        'TypeScript',
        'React.js',
        'Next.js',
        'Shadcn UI',
        'Tailwind CSS',
        'AWS',
        'AWS EC2',
        'AWS API Gateway',
        'AWS CloudWatch',
      ],
      image: 'https://via.placeholder.com/600x400/3b82f6/ffffff?text=EC2+Analyzer',
      preview: '#',
    },
    {
      title: 'Online Interview Assessment System (OIAS)',
      description:
        'A fully Functional Online Interview Assessment System for Students and Professionals. This comprehensive platform enables real-time video interviews, automated assessments, and seamless communication between interviewers and candidates.',
      technologies: [
        'React.js',
        'Tailwind CSS',
        'Node.js',
        'Socket.io',
        'MongoDB',
        'Heroku',
        'Node Mailer',
        'Express.js',
        'Firebase',
        'Google OAuth',
      ],
      image: 'https://via.placeholder.com/600x400/ef4444/ffffff?text=OIAS',
      preview: '#',
    },
  ]

  return (
    <div className="min-h-screen container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal delay={0}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4">My Projects</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <p className="text-center text-sm md:text-base text-gray-600 dark:text-gray-400 mb-8 md:mb-12 px-4">
            Projects I worked on. Each of them containing its own case study.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={0.16 + index * 0.08}>
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-80 sm:h-96 md:h-72 lg:h-80 bg-gray-50 dark:bg-gray-900 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain md:object-cover md:object-top"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{project.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-3 md:mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 md:px-3 py-0.5 md:py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full text-sm md:text-base font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    <Eye className="w-3 h-3 md:w-4 md:h-4" />
                    Preview
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
