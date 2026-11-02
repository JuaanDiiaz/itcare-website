import PageHero from '../components/PageHero'
import SectionList from '../components/SectionList'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { solutions } from '../data/content'

export default function Solutions() {
  return (
    <>
      <PageHero title={solutions.title} subtitle={solutions.paragraphs[0]} />

      <div className="container">
        <Reveal>
          <SectionList heading={solutions.intro} bullets={solutions.bullets} />
        </Reveal>
        <Reveal>
          <Link to="/contact" className="button">
            Agende una evaluación sin costo
          </Link>
        </Reveal>
      </div>
    </>
  )
}