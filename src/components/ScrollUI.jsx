import { useEffect, useState } from 'react'

// Top progress bar + back-to-top button, both driven by one scroll listener.
const SHOW_TOP_AFTER = 600

export default function ScrollUI() {
  const [progress, setProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    let ticking = false
    const update = () => {
      ticking = false
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setProgress(max > 0 ? (doc.scrollTop / max) * 100 : 0)
      setShowTop(doc.scrollTop > SHOW_TOP_AFTER)
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} role="presentation" />
      <button
        className={`back-to-top ${showTop ? 'is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Volver arriba"
        title="Volver arriba"
      >
        ↑
      </button>
    </>
  )
}