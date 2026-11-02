import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contacto"
        subtitle="Cuéntenos sobre su proyecto y un especialista de ITCare le contactará."
      />

      <div className="container contact-layout">
        <ContactForm />

        <aside className="contact-info">
          <h3>¿Cómo lo ayudamos?</h3>
          <p>
            Combinamos experiencia técnica y de negocio para desarrollar
            soluciones que simplemente funcionan. Nuestro equipo de consultores
            certificados brinda soporte, capacitación y acompañamiento en todo
            momento del proyecto.
          </p>
          <ul>
            <li>Gestión inmediata de requerimientos</li>
            <li>Soporte en cumplimiento con acuerdos de servicio (SLA)</li>
            <li>Consultores especializados en BASIS, ABAP, FI, CO, MM, SD y más</li>
          </ul>
        </aside>
      </div>
    </>
  )
}