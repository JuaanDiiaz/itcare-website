import { useState } from 'react'
import { Link } from 'react-router-dom'

// Formspree endpoint. Create a form at https://formspree.io, then set
// VITE_FORMSPREE_ID=<form-id> in a .env.local file. Without it, the form
// shows a configuration notice on submit instead of sending data.
const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ID
  ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`
  : null

const status = {
  idle: 'idle',
  sending: 'sending',
  success: 'success',
  error: 'error',
}

const initialFields = {
  nombre: '',
  email: '',
  empresa: '',
  servicio: 'Administración remota SAP',
  mensaje: '',
}

export default function ContactForm() {
  const [fields, setFields] = useState(initialFields)
  const [formStatus, setFormStatus] = useState(status.idle)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFields((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!formspreeEndpoint) {
      setFormStatus(status.error)
      return
    }

    setFormStatus(status.sending)
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
      })
      if (!response.ok) throw new Error(`Formspree responded ${response.status}`)
      setFormStatus(status.success)
      setFields(initialFields)
    } catch (error) {
      console.error('Contact form submission failed:', error)
      setFormStatus(status.error)
    }
  }

  if (formStatus === status.success) {
    return (
      <div className="form-panel" role="status">
        <h3>¡Gracias por su mensaje!</h3>
        <p>Un especialista de ITCare le contactará a la brevedad.</p>
        <button className="button" onClick={() => setFormStatus(status.idle)}>
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <form className="form-panel" onSubmit={handleSubmit}>
      <div className="form-row">
        <label className="form-field">
          <span>Nombre *</span>
          <input
            type="text"
            name="nombre"
            value={fields.nombre}
            onChange={handleChange}
            required
            autoComplete="name"
          />
        </label>
        <label className="form-field">
          <span>Email *</span>
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
        </label>
      </div>

      <div className="form-row">
        <label className="form-field">
          <span>Empresa</span>
          <input
            type="text"
            name="empresa"
            value={fields.empresa}
            onChange={handleChange}
            autoComplete="organization"
          />
        </label>
        <label className="form-field">
          <span>Servicio de interés</span>
          <select name="servicio" value={fields.servicio} onChange={handleChange}>
            <option>Administración remota SAP</option>
            <option>ERP / CRM / BW</option>
            <option>JDEdwards</option>
            <option>Desarrollo a la medida</option>
            <option>Servicios integrados / Soporte</option>
            <option>Otro</option>
          </select>
        </label>
      </div>

      <label className="form-field">
        <span>Mensaje *</span>
        <textarea
          name="mensaje"
          rows={5}
          value={fields.mensaje}
          onChange={handleChange}
          required
        />
      </label>

      {formStatus === status.error && !formspreeEndpoint && (
        <p className="form-alert" role="alert">
          El formulario aún no está conectado: configure{' '}
          <code>VITE_FORMSPREE_ID</code> en un archivo <code>.env.local</code>.
        </p>
      )}
      {formStatus === status.error && formspreeEndpoint && (
        <p className="form-alert" role="alert">
          Ocurrió un error al enviar su mensaje. Intente de nuevo en unos
          minutos.
        </p>
      )}

      <button
        type="submit"
        className="button"
        disabled={formStatus === status.sending}
      >
        {formStatus === status.sending ? 'Enviando…' : 'Enviar mensaje'}
      </button>
    </form>
  )
}