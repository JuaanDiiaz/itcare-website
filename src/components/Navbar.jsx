import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logoWhite from '../assets/logo-white.svg'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/services', label: 'Servicios' },
  { to: '/technologies', label: 'Tecnologías' },
  { to: '/solutions', label: 'Soluciones de Negocio' },
  { to: '/contact', label: 'Contacto' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logoWhite} alt="ITCare" className="navbar-logo-img" />
        </Link>

        <button
          className="navbar-toggle"
          aria-expanded={menuOpen}
          aria-label="Abrir menú"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
        </button>

        <nav aria-label="Navegación principal">
          <ul className={`navbar-menu ${menuOpen ? 'is-open' : ''}`}>
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    isActive ? 'navbar-link is-active' : 'navbar-link'
                  }
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="navbar-cta">
              <Link to="/contact" className="button button-small" onClick={closeMenu}>
                Contacte a un especialista
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}