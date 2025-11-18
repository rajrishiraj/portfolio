import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const ScrollReveal = ({ children, delay = 0, className = '' }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.7, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal

