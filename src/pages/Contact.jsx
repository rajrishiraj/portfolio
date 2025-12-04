import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.message || 'Failed to send message')
      }

      const data = await response.json()
      setSubmitStatus({ type: 'success', message: 'Message sent successfully!' })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({
        type: 'error',
        message:
          error.message ||
          'Failed to send message. Please make sure the server is running or contact me directly via email.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal delay={0}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4">Get In Touch</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <p className="text-center text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6 md:mb-8 px-4">
            Please contact me directly at{' '}
            <a
              href="mailto:rajrishiraj59@gmail.com"
              className="text-pink-600 dark:text-pink-400 underline hover:text-pink-700 dark:hover:text-pink-300"
            >
              rajrishiraj59@gmail.com
            </a>{' '}
            or through this form.
          </p>
        </ScrollReveal>

        <form onSubmit={handleSubmit} className="space-y-6">
          <ScrollReveal delay={0.16}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-gray-900 dark:focus:border-gray-100 transition-colors"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.24}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="hello@gmail.com"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-gray-900 dark:focus:border-gray-100 transition-colors"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.32}>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Hello! What's up?"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-gray-900 dark:focus:border-gray-100 transition-colors resize-none"
              />
            </div>
          </ScrollReveal>

          {submitStatus && (
            <ScrollReveal delay={0}>
              <div
                className={`p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                    : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                }`}
              >
                {submitStatus.message}
              </div>
            </ScrollReveal>
          )}

          <ScrollReveal delay={0.4}>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Submit <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </ScrollReveal>
        </form>

        <ScrollReveal delay={0.48}>
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-500">
              © 2025 Rishi Raj. All rights reserved.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}

export default Contact
