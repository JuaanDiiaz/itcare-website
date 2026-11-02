import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { articles } from '../data/articles'

export default function Resources() {
  useEffect(() => {
    document.title = 'Recursos y guías | ITCare'
    return () => {
      document.title = 'ITCare | Consultoría SAP y Transformación Digital'
    }
  }, [])

  return (
    <>
      <PageHero
        title="Recursos y Guías"
        subtitle="Guías prácticas para empresas que evalúan o migran su ERP — escritas por nuestros consultores, sin tecnicismos innecesarios."
      />

      <div className="resources-grid">
        {articles.map((article, index) => (
          <Reveal key={article.slug} delay={index * 0.1} className="card-reveal">
            <Link to={`/resources/${article.slug}`} className="card resource-card">
              <span className="resource-meta">
                {article.date} · {article.readTime} de lectura
              </span>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <span className="card-link">Leer la guía →</span>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="container" style={{ paddingBottom: 60 }}>
        <Reveal>
          <p className="resources-note">
            ¿Hay un tema que le gustaría ver aquí? Escríbanos por{' '}
            <a href="https://wa.me/525532499504" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>{' '}
            y lo convertimos en la siguiente guía.
          </p>
        </Reveal>
      </div>
    </>
  )
}