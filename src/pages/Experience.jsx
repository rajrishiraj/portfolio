import { Building2, Calendar, MapPin } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const Experience = () => {
  const experiences = [
    {
      company: 'Impact Academies',
      location: 'Gurgaon',
      role: 'IT Tutor',
      period: '2024 - Present',
      description:
        "I teach Scratch, Java, JavaScript, Python, HTML, CSS, Motion Design, AI, ML, and more. I help students learn these skills and build their own projects. I teach from age 5 to 40+",
      technologies: [
        'Scratch',
        'Java',
        'JavaScript',
        'Python',
        'HTML',
        'CSS',
        'Motion Design',
        'AI',
        'ML',
      ],
    },
    {
      company: 'Dragon Sino Group',
      location: 'Gurgaon',
      role: 'Full Stack Developer',
      period: '2024 - 2025',
      description:
        'Worked as a Full Stack developer at Dragon Sino Group, a Chinese company operating in the Gurgaon. Created fully functional MERN Stack Web Applications with responsive behavior, smooth touch UI, and API Integration.',
      technologies: [
        'TypeScript',
        'React.js',
        'Next.js',
        'Tailwind CSS',
        'Node.js',
        'Express',
        'API Integration',
        'MERN Stack',
        'RESTful API',
        'PHP',
        'MySQL',
      ],
    },
    {
      company: 'Octane Apps',
      location: 'Remote',
      role: 'Frontend Developer (React.js)',
      period: '2023 - 2024',
      description:
        'Worked as a Frontend Developer specializing in React.js at Octane Apps. Created fully functional Next.js based frontends with MERN dashboards, focusing on responsive design and smooth user interfaces.',
      technologies: [
        'Next.js',
        'React.js',
        'SCSS',
        'CSS',
        'MUI',
        'SEO',
        'Payment Gateway',
        'API Integration',
        'RESTful API',
        'MERN Stack',
        'Node.js',
        'MongoDB',
        'Express',
        'TypeScript',
        'Tailwind CSS',
        'Firebase',
      ],
    },
    {
      company: 'Anandlok Ayurveda & Panchakarma Hospital',
      location: 'Nagpur',
      role: 'Frontend Developer (Full-Stack - Next.js)',
      period: '2021 - 2023',
      description:
        'Worked as a Full Stack Developer Frontend Focused, creating a website for Ayurveda & Panchakarma practitioners using React.js, Next.js, and Material-UI. The platform allows practitioners to share their knowledge and experience with others.',
      technologies: [
        'Next.js',
        'React.js',
        'CSS',
        'Material-UI',
        'SEO',
        'Node.js',
        'MongoDB',
        'Express',
        'TypeScript',
        'Tailwind CSS',
        'Firebase',
        'API Integration',
        'MERN Stack',
        'RESTful API',
      ],
    },
    {
      company: 'Self-Employed',
      location: 'Remote',
      role: 'Freelance Full Stack Developer',
      period: '2020 - Present',
      description:
        'Working as a freelance Full Stack Developer, specializing in MERN/MEVN stack development. Creating responsive web applications, e-commerce platforms, and custom solutions for various clients. Available for hire at $35/hr, may vary depending on the project. And flexible working hours.',
      technologies: [
        'React.js',
        'Next.js',
        'Vue.js',
        'Node.js',
        'MongoDB',
        'Express',
        'TypeScript',
        'Tailwind CSS',
      ],
    },
  ]

  return (
    <div className="min-h-screen container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal delay={0}>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">My Experience</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Professional experience that I have accumulated over several years.
          </p>
        </ScrollReveal>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={0.16 + index * 0.08}>
              <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-gray-900 dark:bg-gray-100 rounded-full border-4 border-white dark:border-gray-900"></div>
                <div className="flex items-start gap-3 mb-2">
                  <Building2 className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold">{exp.company}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2">{exp.role}</h4>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
