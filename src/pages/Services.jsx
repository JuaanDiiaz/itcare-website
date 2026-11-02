import PageHero from '../components/PageHero'
import SectionList from '../components/SectionList'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { servicesPageInfo, serviceSections, integratedServices, images } from '../data/content'

export default function Services() {
  return (
    <>
      <PageHero title={servicesPageInfo.title} subtitle={servicesPageInfo.intro} />

      <div className="container">
        <SectionList heading="Nos enfocamos en:" bullets={servicesPageInfo.focus} />

        {serviceSections.map((section, index) => (
          <Reveal key={section.id}>
            <SectionList heading={section.heading} bullets={section.bullets} />
          </Reveal>
        ))}
      </div>

      <section
        className="highlight-band"
        style={{
          backgroundImage: `linear-gradient(160deg, rgba(6, 11, 24, 0.92) 0%, rgba(10, 20, 42, 0.9) 100%), url(${images.circuitImg})`,
        }}
      >
        <div className="container">
          <h2>{integratedServices.title}</h2>
          {integratedServices.paragraphs.map((paragraph) => (
            <Reveal key={paragraph.slice(0, 40)}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
          {integratedServices.sections.map((section) => (
            <Reveal key={section.heading}>
              <SectionList heading={section.heading} bullets={section.bullets} />
            </Reveal>
          ))}
          <Link to="/contact" className="button">
            Hablemos de su proyecto
          </Link>
        </div>
      </section>
    </>
  )
}