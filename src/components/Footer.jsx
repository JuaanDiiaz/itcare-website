import { NavLink, Link } from 'react-router-dom'
import { siteInfo } from '../data/content'
import logoWhite from '../assets/logo-white.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">
            <img src={logoWhite} alt="ITCare" className="footer-logo-img" />
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
              <NavLink to="/resources">Recursos</NavLink>
            </li>
            <li>
              <NavLink to="/solutions">Soluciones de Negocio</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contacto</NavLink>
            </li>
            <li>
              <NavLink to="/privacy">Aviso de Privacidad</NavLink>
            </li>
          </ul>
        </nav>

        <div>
          <h4>Contacto</h4>
          <ul className="footer-links footer-contact">
            <li>
              <a href="tel:+525532499504">📞 (55) 3249 9504</a>
            </li>
            <li>
              <a href="mailto:contacto@itcare.com.mx">✉️ contacto@itcare.com.mx</a>
            </li>
            <li>
              <a href="https://wa.me/525532499504" target="_blank" rel="noopener noreferrer">
                💬 WhatsApp
              </a>
            </li>
            <li>📍 Ciudad de México, México</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          {siteInfo.copyright} ·{' '}
          <Link to="/privacy" className="footer-privacy-link">
            Aviso de Privacidad
          </Link>
        </p>
      </div>
    </footer>
  )
}