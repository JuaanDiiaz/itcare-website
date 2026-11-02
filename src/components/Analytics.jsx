import { useEffect } from 'react'

// Analytics tags, activated only when their build-time env var exists.
// Set VITE_GA_ID (Google Analytics 4) or VITE_LINKEDIN_PARTNER_ID as a
// GitHub Actions variable/secret and the tags activate automatically —
// no code changes needed and nothing loads when unset (no cookies today).
export default function Analytics() {
  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_ID
    if (gaId && !document.querySelector(`script[src*="gtag/js?id=${gaId}"]`)) {
      const s = document.createElement('script')
      s.async = true
      s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
      document.head.appendChild(s)
      const config = document.createElement('script')
      config.textContent = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}')`
      document.head.appendChild(config)
    }
  }, [])
  return null
}