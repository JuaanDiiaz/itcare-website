import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'
import { technologies } from '../data/content'

export default function Technologies() {
  return (
    <>
      <PageHero title={technologies.title} subtitle={technologies.intro} />

      <div className="tech-grid">
        {technologies.categories.map((category, index) => (
          <Reveal key={category.id} delay={index * 0.12}>
            <article className="card">
              <p className="tech-index">{category.index} /</p>
              <h3>{category.title}</h3>
              <p>{category.text}</p>
              <ul className="chips">
                {category.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="container" style={{ paddingBottom: 60 }}>
        <Reveal>
          <Link to="/contact" className="button">
            Agende una evaluación sin costo
          </Link>
        </Reveal>
      </div>
    </>
  )
}