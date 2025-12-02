import { ArrowRight, Download, ExternalLink } from 'lucide-react'
import { Linkedin, Github, Instagram, Twitter } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Picture */}
          <ScrollReveal delay={0} className="mb-8">
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-visible group cursor-pointer profile-card">
              {/* Glowing yellow corner accents */}
              <div className="absolute -top-1 -left-1 w-10 h-10 rounded-full bg-yellow-400/0 group-hover:bg-yellow-400/70 blur-2xl transition-all duration-[180ms] ease-out corner-glow-top pointer-events-none"></div>
              <div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-yellow-400/0 group-hover:bg-yellow-400/70 blur-2xl transition-all duration-[180ms] ease-out corner-glow-bottom pointer-events-none"></div>
              
              {/* Main card container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-800 shadow-lg profile-card-inner">
                <img 
                  src="/profile.png" 
                  alt="Rishi Raj" 
                  className="w-full h-full object-cover object-[center_8%] grayscale group-hover:grayscale-0 transition-all duration-300 profile-image"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Availability Status */}
          <ScrollReveal delay={0.08} className="mb-4">
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-gray-600 dark:text-gray-400">Available for work!</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              Currently based in Gurugram — open to relocate
            </p>
          </ScrollReveal>

          {/* Main Heading */}
          <ScrollReveal delay={0.16}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Hi, I'm{' '}
              <span className="text-pink-600 dark:text-pink-400">Rishi Raj</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              Senior Software Engineer specialising in Android Systems & Full-Stack Development
            </h2>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal delay={0.24}>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              I design and deliver high-performance software across Android system internals, middleware, and scalable full-stack web applications. Over the past four years, I've engineered production-grade solutions for broadcast technology, Android TV platforms, CMS ecosystems, and embedded Android components.
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              I enjoy solving complex system-level challenges and building reliable digital products that scale gracefully in real-world environments.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={0.32} className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              Get in touch <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="px-6 py-3 bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              View projects <ExternalLink className="w-4 h-4" />
            </a>
            <button className="px-6 py-3 bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
              Download CV <Download className="w-4 h-4" />
            </button>
          </ScrollReveal>

          {/* Social Links */}
          <ScrollReveal delay={0.4} className="flex items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/rishiraj9523/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default Home
