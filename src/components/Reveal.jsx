import { motion } from 'framer-motion'

// Scroll-reveal wrapper: children fade/slide in the first time they enter the
// viewport. Pass `delay` (seconds) to stagger siblings.
//
// amount: fires when only ~5% of the block is visible (no big negative
// margins, which behave inconsistently across browsers).
export default function Reveal({ children, delay = 0, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: Math.min(delay, 0.2) }}
    >
      {children}
    </motion.div>
  )
}