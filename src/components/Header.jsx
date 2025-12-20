import { useState, useEffect } from 'react'
import { Sun, Moon, ChevronDown } from 'lucide-react'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

const Header = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.id))
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id)
          break
        }
      }
    }

    // Set initial active section
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  const handleMobileNavClick = (e, sectionId) => {
    handleNavClick(e, sectionId)
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Glass effect background for header */}
      <div className="absolute inset-0 bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-white/20 dark:border-gray-800/30"></div>
      <nav className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between relative">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 backdrop-blur-xl border ${
                  activeSection === link.id
                    ? 'bg-white/40 dark:bg-gray-800/40 text-gray-900 dark:text-gray-100 border-white/30 dark:border-gray-700/30 shadow-lg'
                    : 'bg-white/20 dark:bg-gray-900/20 text-gray-700 dark:text-gray-300 border-white/20 dark:border-gray-800/20 hover:bg-white/30 dark:hover:bg-gray-800/30'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button - Centered */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden absolute left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/30 dark:bg-gray-900/30 border border-white/30 dark:border-gray-700/30 hover:bg-white/40 dark:hover:bg-gray-800/40 transition-all duration-200 flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-lg"
            aria-label="Toggle menu"
          >
            Menu
            <ChevronDown 
              className={`w-4 h-4 transition-transform duration-200 ${
                mobileMenuOpen ? 'rotate-180' : ''
              }`} 
            />
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border border-white/20 dark:border-gray-800/20 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-200 ml-auto shadow-lg"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu - Glass Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 z-20">
            <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-2xl overflow-hidden">
              <div className="flex flex-col p-2">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleMobileNavClick(e, link.id)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 backdrop-blur-sm ${
                      activeSection === link.id
                        ? 'bg-white/40 dark:bg-gray-800/40 text-gray-900 dark:text-gray-100 shadow-sm border border-white/20 dark:border-gray-700/20'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-800/20'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
