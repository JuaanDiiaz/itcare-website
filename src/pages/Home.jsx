import { Link } from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel'
import ServiceCards from '../components/ServiceCards'
import CodeTerminal from '../components/CodeTerminal'
import Reveal from '../components/Reveal'
import { siteInfo, solutions, images } from '../data/content'

export default function Home() {
  return (
    <>
      <section
        className="home-hero"
        style={{
          backgroundImage: `linear-gradient(160deg, rgba(5, 10, 26, 0.88) 0%, rgba(5, 10, 26, 0.72) 50%, rgba(16, 34, 74, 0.85) 100%), url(${images.heroBg})`,
        }}
      >
        <div className="hero-grid container">
          <div className="hero-copy">
            <p className="hero-kicker">Consultoría SAP · México y LATAM</p>
            <HeroCarousel />
            <div className="home-hero-actions">
              <Link to="/contact" className="button">
                Agende una evaluación sin costo
              </Link>
              <Link to="/services" className="button button-ghost">
                Ver servicios
              </Link>
            </div>
          </div>
          <CodeTerminal />
        </div>
      </section>

      <section className="container intro">
        <Reveal>
          <h2 className="section-title">{siteInfo.tagline}</h2>
        </Reveal>
        <div className="intro-layout">
          <Reveal>
            <div className="intro-media">
              <img src={images.teamImg} alt="Equipo de consultores ITCare trabajando" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="intro-text">
              {siteInfo.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container">
        <Reveal>
          <h2 className="section-title">Servicios</h2>
        </Reveal>
        <ServiceCards />
      </section>

      <section
        className="home-solutions"
        style={{
          backgroundImage: `linear-gradient(160deg, rgba(5, 10, 26, 0.9) 0%, rgba(13, 22, 44, 0.88) 100%), url(${images.circuitImg})`,
        }}
      >
        <Reveal>
          <div className="container">
            <h2>{solutions.title}</h2>
            <p>{solutions.paragraphs[0]}</p>
            <Link to="/solutions" className="button">
              Conocer las soluciones
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="tech-teaser">
        <Reveal>
          <div className="container">
            <h2>Infraestructura moderna para su plataforma SAP</h2>
            <p>
              Contenedores, Kubernetes, SAP PI/PO, SAP BTP y SAP Business One:
              operamos su plataforma con tecnología de vanguardia.
            </p>
            <Link to="/technologies" className="button button-ghost">
              Explorar tecnologías
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}