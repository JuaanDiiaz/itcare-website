import { useEffect, useState } from 'react'
import { heroSlides } from '../data/content'

const ROTATE_INTERVAL = 6000

export default function HeroCarousel() {
  const [active, setActive] = useState(0)

  // Advance one slide per interval; the effect re-arms on every change so a
  // manual dot click resets the timer.
  useEffect(() => {
    const timer = setInterval(
      () => setActive((current) => (current + 1) % heroSlides.length),
      ROTATE_INTERVAL,
    )
    return () => clearInterval(timer)
  }, [active])

  return (
    <div className="hero-carousel" role="region" aria-label="Destacados">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.title}
          className={`hero-slide ${index === active ? 'is-active' : ''}`}
          aria-hidden={index !== active}
        >
          <h1>{slide.title}</h1>
          <p>{slide.text}</p>
        </div>
      ))}

      <div className="hero-dots" role="tablist" aria-label="Seleccionar destacado">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.title}
            role="tab"
            aria-selected={index === active}
            aria-label={`Destacado ${index + 1}`}
            className={`hero-dot ${index === active ? 'is-active' : ''}`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  )
}