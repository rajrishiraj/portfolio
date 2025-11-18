import {
  Code,
  Palette,
  FileCode,
  Layers,
  Terminal,
  Database,
  Box,
  Circle,
} from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const About = () => {
  const technologies = [
    { name: 'HTML5', icon: Code, color: 'text-orange-500', bgColor: 'bg-orange-100 dark:bg-orange-900' },
    { name: 'CSS3', icon: Palette, color: 'text-blue-500', bgColor: 'bg-blue-100 dark:bg-blue-900' },
    { name: 'Sass', icon: FileCode, color: 'text-pink-500', bgColor: 'bg-pink-100 dark:bg-pink-900' },
    { name: 'Tailwind CSS', icon: Layers, color: 'text-cyan-500', bgColor: 'bg-cyan-100 dark:bg-cyan-900' },
    { name: 'JavaScript', icon: Terminal, color: 'text-yellow-500', bgColor: 'bg-yellow-100 dark:bg-yellow-900' },
    { name: 'TypeScript', icon: Code, color: 'text-blue-600', bgColor: 'bg-blue-100 dark:bg-blue-900' },
    { name: 'React', icon: Circle, color: 'text-cyan-400', bgColor: 'bg-cyan-100 dark:bg-cyan-900' },
    { name: 'Node.js', icon: Box, color: 'text-green-600', bgColor: 'bg-green-100 dark:bg-green-900' },
    { name: 'MongoDB', icon: Database, color: 'text-green-500', bgColor: 'bg-green-100 dark:bg-green-900' },
    { name: 'Docker', icon: Box, color: 'text-blue-400', bgColor: 'bg-blue-100 dark:bg-blue-900' },
  ]

  return (
    <div className="min-h-screen container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal delay={0}>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">About Me</h1>
        </ScrollReveal>

        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          <ScrollReveal delay={0.08}>
            <p>
              My name is Rishi Raj, and I am a Frontend Engineer with 3.5+ years of real-world
              experience designing fast, usable, and SEO-friendly web applications. My specialty is
              crafting smooth-looking UIs with React.js, Next.js, Tailwind CSS, and shadcn/ui and
              bringing things to life with Framer Motion.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <p>
              Alongside my frontend experience, I possess good full-stack skills in JavaScript and
              TypeScript, and familiar experience in Node.js, Express, and databases like MongoDB
              and MySQL. This allows me to manage projects from start-to-finish, from designing smooth
              UIs through connecting scalable backends.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.24}>
            <p>
              I have experience building software for product companies, clinics, and start-ups. I
              focus on maximum performance, engagement, and lead capture. I enjoy writing elegant,
              up-to-date code and discovering new tools and trends.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.32}>
            <p>
              When I'm not coding, I enjoy cricket and tea (now coffee). I'm always learning,
              experimenting, and growing to bring value to impactful products and inventive teams.
            </p>
          </ScrollReveal>
        </div>

        {/* Technology Icons */}
        <div className="mt-16">
          <ScrollReveal delay={0.4}>
            <h2 className="text-2xl font-bold text-center mb-8">Technologies I Work With</h2>
          </ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {technologies.map((tech, index) => (
              <ScrollReveal key={tech.name} delay={0.48 + index * 0.08}>
                <div className="flex flex-col items-center gap-2 group">
                  <div className={`w-16 h-16 rounded-lg ${tech.bgColor} flex items-center justify-center group-hover:opacity-80 transition-opacity`}>
                    <tech.icon className={`w-8 h-8 ${tech.color}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {tech.name}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
