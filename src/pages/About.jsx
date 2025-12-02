import ScrollReveal from '../components/ScrollReveal'

// Import logos
import pythonLogo from '../../logo/python-150.svg'
import javaLogo from '../../logo/java-150.svg'
import nodejsLogo from '../../logo/nodedotjs.svg'
import reactLogo from '../../logo/react_1.svg'
import androidLogo from '../../logo/android.svg'
import viteLogo from '../../logo/vite.svg'
import mongodbLogo from '../../logo/mongodb.svg'
import dockerLogo from '../../logo/docker.svg'
import linuxLogo from '../../logo/linux.svg'
import nginxLogo from '../../logo/nginx.svg'

const About = () => {
  // Combine all technologies into one array, removing duplicates
  const allTechnologies = [
    { name: 'Python', logo: pythonLogo },
    { name: 'Java', logo: javaLogo },
    { name: 'Node.js', logo: nodejsLogo },
    { name: 'React.js', logo: reactLogo },
    { name: 'Android', logo: androidLogo },
    { name: 'Vite', logo: viteLogo },
    { name: 'MongoDB', logo: mongodbLogo },
    { name: 'Docker', logo: dockerLogo },
    { name: 'Linux', logo: linuxLogo },
    { name: 'Nginx', logo: nginxLogo },
  ]

  return (
    <div className="min-h-screen container mx-auto px-4 pt-20 pb-1">
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
            <div className="flex flex-wrap items-center justify-center gap-11">
              {allTechnologies.map((tech) => (
                <div key={tech.name}>
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    className="w-12 h-12 brightness-0 dark:invert" 
                  />
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
