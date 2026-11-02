import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { articles } from '../data/articles'

// Renders one block from the article content model.
function Block({ block }) {
  switch (block.type) {
    case 'h2':
      return <h2>{block.text}</h2>
    case 'h3':
      return <h3>{block.text}</h3>
    case 'p':
      return <p>{block.text}</p>
    case 'ul':
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case 'note':
      return <p className="article-note">{block.text}</p>
    default:
      return null
  }
}

export default function Article() {
  const { slug } = useParams()
  const article = articles.find((a) => a.slug === slug)

  useEffect(() => {
    document.title = article
      ? `${article.title} | ITCare`
      : 'Recursos | ITCare'
    return () => {
      document.title = 'ITCare | Consultoría SAP y Transformación Digital'
    }
  }, [article])

  if (!article) {
    return (
      <>
        <PageHero title="Recurso no encontrado" />
        <div className="container" style={{ paddingBottom: 60 }}>
          <p>El artículo que buscas no existe o cambió de dirección.</p>
          <Link to="/resources" className="button">
            Ver todos los recursos
          </Link>
        </div>
      </>
    )
  }

  const others = articles.filter((a) => a.slug !== slug)

  return (
    <>
      <PageHero title={article.title} subtitle={`${article.date} · ${article.readTime} de lectura`} />

      <div className="article-layout">
        <Reveal>
          <article className="article-body">
            {article.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}

            <div className="article-cta">
              <h3>¿Tiene dudas sobre su caso en particular?</h3>
              <p>Agende una evaluación sin costo con un consultor certificado.</p>
              <Link to="/contact" className="button">
                Hablemos de su proyecto
              </Link>
            </div>
          </article>
        </Reveal>

        {others.length > 0 && (
          <aside className="article-aside">
            <h3>Más recursos</h3>
            {others.map((other) => (
              <Link key={other.slug} to={`/resources/${other.slug}`} className="article-teaser">
                <strong>{other.title}</strong>
                <span>{other.readTime} de lectura</span>
              </Link>
            ))}
            <Link to="/resources" className="article-back">
              ← Todos los recursos
            </Link>
          </aside>
        )}
      </div>
    </>
  )
}