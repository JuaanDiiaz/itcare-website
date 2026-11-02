import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import faviconUrl from './assets/favicon.svg'
import './styles/global.css'

// Set the favicon from a bundled import (not index.html) so the path respects
// the Vite build base — required for the itcare.com.mx/beta deployment.
const faviconLink = document.createElement('link')
faviconLink.rel = 'icon'
faviconLink.type = 'image/svg+xml'
faviconLink.href = faviconUrl
document.head.appendChild(faviconLink)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)