// Floating WhatsApp contact button. The number is a placeholder until the
// real one is provided — update `whatsapp` in src/data/content.js.
export default function WhatsAppButton() {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER || '5215500000000'
  const href = `https://wa.me/${number}?text=${encodeURIComponent(
    'Hola ITCare, me interesa una consultoría.',
  )}`

  return (
    <a
      className="whatsapp-float"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      title="Escríbenos por WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94.2-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-11.9 0.9-28.2-14.1-45.7-26.6-63.2-57.8-4.8-8.6 4.8-7.1 20.3-32.6 2.8-4.6 1.4-8.6-0.9-12.4-1.9-3.7-12.5-30.1-17.1-41.6-4.5-11.3-9.1-9.8-12.5-9.9-3.3-.1-7-.2-10.7-.2-3.7 0-9.7 1.4-14.8 7-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 56.8 2.8 3.1 38.5 61.6 94.2 84.4 33 13.1 45.9 14.3 62.4 12 10.2-1.5 31-12.7 35.3-24.9 4.4-12.2 4.4-22.7 3.1-24.9-1.3-2.2-4.8-3.5-10-6.1z" />
      </svg>
    </a>
  )
}