import { ExternalLink, Eye } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const Projects = () => {
  const projects = [
    {
      title: 'Calm Llama - AI Chatbot',
      description:
        'A modern web platform that enables users to discover and book premium wellness experiences such as saunas, yoga, massages, and float tanks. Features include real-time availability, secure payments, and instant booking confirmations. Worked as a Full Stack Freelance developer @ ToraTec AI, Dublin, Ireland.',
      technologies: [
        'TypeScript',
        'Stripe Payment Gateway',
        'React.js',
        'Next.js',
        'Tailwind CSS',
        'Shadcn UI',
        'Node.js',
        'Express',
        'UI/UX Developer',
        'Supabase',
        'AI',
        'n8n',
        'Google Maps API',
      ],
      image: 'https://via.placeholder.com/600x400/10b981/ffffff?text=Calm+Llama',
      preview: '#',
    },
    {
      title: 'Mini Otio - AI Research Assistant',
      description:
        'A modern AI-powered research assistant that combines real-time web search with intelligent response generation. Users can ask research questions and receive comprehensive, streamed responses with multiple formatting options (step-by-step, bullet points, ELI5). Features include bookmark management, conversation export, and a sleek chat interface with real-time streaming capabilities.',
      technologies: [
        'AI Agent',
        'Next.js 15',
        'TypeScript',
        'Shadcn UI',
        'React.js',
        'Tailwind CSS',
        'Zustand',
        'Zod',
        'OpenRouter API',
        'Exa.ai',
        'AI SDK',
      ],
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Mini+Otio',
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
    <div className="min-h-screen container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal delay={0}>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">My Projects</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Projects I worked on. Each of them containing its own case study.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={0.16 + index * 0.08}>
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-700 dark:to-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
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
