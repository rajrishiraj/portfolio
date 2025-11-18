import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const ChatButton = () => {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 w-14 h-14 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center z-50"
      onClick={() => {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
          const headerOffset = 80
          const elementPosition = contactSection.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          })
        }
      }}
      aria-label="Open chat"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.button>
  )
}

export default ChatButton

