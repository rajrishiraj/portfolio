import { useEffect, useRef, useState } from 'react'

export const useScrollReveal = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  const {
    threshold = 0.7, // 70% of viewport
    rootMargin = '0px',
    triggerOnce = true,
  } = options

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (triggerOnce) {
              observer.unobserve(element)
            }
          } else if (!triggerOnce) {
            setIsVisible(false)
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin, triggerOnce])

  return [elementRef, isVisible]
}

