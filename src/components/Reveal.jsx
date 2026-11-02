import { motion } from 'framer-motion'

// Scroll-reveal wrapper: children fade/slide in whenever they enter the
// viewport and fade out again when they leave it, so the animation replays
// every time you scroll back down (per user preference: NOT once-only).
// Pass `delay` (seconds) to stagger siblings.
//
// amount: fires when only ~5% of the block is visible (no big negative
// margins, which behave inconsistently across browsers).
export default function Reveal({ children, delay = 0, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.05 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: Math.min(delay, 0.2) }}
    >
      {children}
    </motion.div>
  )
}