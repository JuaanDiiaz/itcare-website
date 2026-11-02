import { Link } from 'react-router-dom'
import { serviceTiles } from '../data/content'
import Reveal from './Reveal'

export default function ServiceCards() {
  return (
    <div className="card-grid">
      {serviceTiles.map((tile, index) => (
        <Reveal key={tile.title} delay={index * 0.12} className="card-reveal">
          <Link to={tile.link} className="card">
            <div className="card-image">
              <img src={tile.image} alt={tile.alt} loading="lazy" />
            </div>
            <h3>{tile.title}</h3>
            <p>{tile.text}</p>
            <span className="card-link">Ver más →</span>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}