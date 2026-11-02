import { NavLink, Link } from 'react-router-dom'
import { siteInfo } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">
            <span className="navbar-logo-mark">IT</span>
            <span className="navbar-logo-text">Care</span>
          </div>
          <p className="footer-tagline">{siteInfo.tagline}</p>
        </div>

        <nav aria-label="Enlaces del sitio">
          <h4>Sitio</h4>
          <ul className="footer-links">
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/services">Servicios</NavLink>
            </li>
            <li>
              <NavLink to="/technologies">Tecnologías</NavLink>
            </li>
            <li>
              <NavLink to="/solutions">Soluciones de Negocio</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contacto</NavLink>
            </li>
          </ul>
        </nav>

        <div>
          <h4>Contacto</h4>
          <p>
            <Link to="/contact" className="footer-cta">
              Contacte a un especialista
            </Link>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{siteInfo.copyright}</p>
      </div>
    </footer>
  )
}