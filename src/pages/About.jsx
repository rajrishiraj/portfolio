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
  const languagesFrameworks = [
    { name: 'Python', icon: Code, color: 'text-yellow-500', bgColor: 'bg-yellow-100 dark:bg-yellow-900' },
    { name: 'JavaScript', icon: Terminal, color: 'text-yellow-400', bgColor: 'bg-yellow-100 dark:bg-yellow-900' },
    { name: 'TypeScript', icon: Code, color: 'text-blue-600', bgColor: 'bg-blue-100 dark:bg-blue-900' },
    { name: 'Node.js', icon: Box, color: 'text-green-600', bgColor: 'bg-green-100 dark:bg-green-900' },
    { name: 'React.js', icon: Circle, color: 'text-cyan-400', bgColor: 'bg-cyan-100 dark:bg-cyan-900' },
    { name: 'Express.js', icon: Box, color: 'text-gray-600', bgColor: 'bg-gray-100 dark:bg-gray-900' },
  ]

  const mobileEmbedded = [
    { name: 'Android App Dev', icon: Box, color: 'text-green-500', bgColor: 'bg-green-100 dark:bg-green-900' },
    { name: 'AOSP', icon: Layers, color: 'text-green-600', bgColor: 'bg-green-100 dark:bg-green-900' },
    { name: 'Android TV TIF', icon: Layers, color: 'text-blue-500', bgColor: 'bg-blue-100 dark:bg-blue-900' },
  ]

  const frontend = [
    { name: 'React.js', icon: Circle, color: 'text-cyan-400', bgColor: 'bg-cyan-100 dark:bg-cyan-900' },
    { name: 'Vite', icon: Code, color: 'text-yellow-500', bgColor: 'bg-yellow-100 dark:bg-yellow-900' },
  ]

  const backendDatabases = [
    { name: 'Node.js', icon: Box, color: 'text-green-600', bgColor: 'bg-green-100 dark:bg-green-900' },
    { name: 'Express.js', icon: Box, color: 'text-gray-600', bgColor: 'bg-gray-100 dark:bg-gray-900' },
    { name: 'MongoDB', icon: Database, color: 'text-green-500', bgColor: 'bg-green-100 dark:bg-green-900' },
  ]

  const toolsPlatforms = [
    { name: 'Docker', icon: Box, color: 'text-blue-400', bgColor: 'bg-blue-100 dark:bg-blue-900' },
    { name: 'Linux', icon: Terminal, color: 'text-yellow-600', bgColor: 'bg-yellow-100 dark:bg-yellow-900' },
    { name: 'Nginx', icon: Box, color: 'text-green-600', bgColor: 'bg-green-100 dark:bg-green-900' },
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
              I'm a Senior Software Engineer with a background spanning Android system development, broadcast stack integrations, and full-stack web engineering. My work combines low-level system expertise with practical product engineering, allowing me to build everything from embedded Android components to complete CMS ecosystems.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <p>
              I have substantial experience working with AOSP internals, Android TV Input Framework (TIF), ExoPlayer with DRM, and middleware integrations for global digital TV ecosystems. Alongside this, I've built full-stack applications using React.js, Node.js, Express, and MongoDB, including complete content management platforms used in production.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.24}>
            <p>
              I enjoy structuring clean architectures, writing maintainable code, and delivering systems that perform reliably under scale. I'm particularly interested in Android platform engineering, broadcasting standards, secure media delivery, and system-level integrations.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.32}>
            <p>
              Outside of work, you'll usually find me experimenting with new frameworks, improving performance on existing systems, or learning more about platform-level engineering.
            </p>
          </ScrollReveal>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <ScrollReveal delay={0.4}>
            <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          </ScrollReveal>

          {/* Languages & Frameworks */}
          <ScrollReveal delay={0.48}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Languages & Frameworks</h3>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {languagesFrameworks.map((tech, index) => (
                <div key={tech.name} className="flex flex-col items-center gap-2 group">
                  <div className={`w-14 h-14 rounded-lg ${tech.bgColor} flex items-center justify-center group-hover:opacity-80 transition-opacity`}>
                    <tech.icon className={`w-7 h-7 ${tech.color}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Mobile & Embedded Systems */}
          <ScrollReveal delay={0.56}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Mobile & Embedded Systems</h3>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {mobileEmbedded.map((tech, index) => (
                <div key={tech.name} className="flex flex-col items-center gap-2 group">
                  <div className={`w-14 h-14 rounded-lg ${tech.bgColor} flex items-center justify-center group-hover:opacity-80 transition-opacity`}>
                    <tech.icon className={`w-7 h-7 ${tech.color}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Frontend */}
          <ScrollReveal delay={0.64}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Frontend</h3>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {frontend.map((tech, index) => (
                <div key={tech.name} className="flex flex-col items-center gap-2 group">
                  <div className={`w-14 h-14 rounded-lg ${tech.bgColor} flex items-center justify-center group-hover:opacity-80 transition-opacity`}>
                    <tech.icon className={`w-7 h-7 ${tech.color}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Backend & Databases */}
          <ScrollReveal delay={0.72}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Backend & Databases</h3>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {backendDatabases.map((tech, index) => (
                <div key={tech.name} className="flex flex-col items-center gap-2 group">
                  <div className={`w-14 h-14 rounded-lg ${tech.bgColor} flex items-center justify-center group-hover:opacity-80 transition-opacity`}>
                    <tech.icon className={`w-7 h-7 ${tech.color}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Tools & Platforms */}
          <ScrollReveal delay={0.8}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Tools & Platforms</h3>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {toolsPlatforms.map((tech, index) => (
                <div key={tech.name} className="flex flex-col items-center gap-2 group">
                  <div className={`w-14 h-14 rounded-lg ${tech.bgColor} flex items-center justify-center group-hover:opacity-80 transition-opacity`}>
                    <tech.icon className={`w-7 h-7 ${tech.color}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </div>
  )
}

export default About
