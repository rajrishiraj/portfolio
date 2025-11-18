import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Lucca Allen',
      role: 'Co-Founder @ ToraTech AI',
      location: 'Dublin, Ireland',
      rating: 5,
      text: "I have worked with Yash, throughout two separate projects during which he was part of the ToraTech AI team. Yash has always shown tremendous initiative to get work done and work around problems. I was impressed with his back end skills, aswell as having a great eye for a UX and UI. I would recommend Yash to any company looking for efficient development.",
      avatar: 'https://via.placeholder.com/80/3b82f6/ffffff?text=LA',
    },
    {
      id: 2,
      name: 'John Doe',
      role: 'CEO @ Tech Startup',
      location: 'London, UK',
      rating: 5,
      text: 'Yash delivered an exceptional project for us. His attention to detail and ability to understand our requirements was outstanding. The final product exceeded our expectations.',
      avatar: 'https://via.placeholder.com/80/10b981/ffffff?text=JD',
    },
    {
      id: 3,
      name: 'Jane Smith',
      role: 'Product Manager',
      location: 'Manchester, UK',
      rating: 5,
      text: 'Working with Yash was a pleasure. He is professional, responsive, and truly understands modern web development. Highly recommended!',
      avatar: 'https://via.placeholder.com/80/8b5cf6/ffffff?text=JS',
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal delay={0}>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Testimonials</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            What clients and colleagues say about my work
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg italic text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                <div className="flex flex-col items-center">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full mb-4"
                  />
                  <h3 className="text-xl font-bold">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.24}>
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-gray-900 dark:bg-gray-100 w-8'
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}

export default Testimonials
