import { useEffect } from 'react'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollUI from './components/ScrollUI'
import Home from './pages/Home'
import Services from './pages/Services'
import Technologies from './pages/Technologies'
import Solutions from './pages/Solutions'
import Contact from './pages/Contact'

// Scrolls back to the top whenever the route changes; otherwise the new page
// keeps the previous scroll position. Uses 'instant' — the CSS
// `scroll-behavior: smooth` would otherwise animate this and make every page
// change look like the content "slides up from below".
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function Layout() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollUI />
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
          {/* Unknown URLs fall back to home */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}