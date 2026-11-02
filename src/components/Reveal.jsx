import { motion } from 'framer-motion'

// Scroll-reveal wrapper: children fade/slide in the first time they enter the
// viewport. Pass `delay` (seconds) to stagger siblings.
export default function Reveal({ children, delay = 0, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}