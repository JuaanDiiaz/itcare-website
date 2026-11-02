import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

export default function Privacy() {
  return (
    <>
      <PageHero
        title="Aviso de Privacidad"
        subtitle="En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)."
      />

      <div className="article-layout">
        <Reveal>
          <article className="article-body">
            <p>
              <strong>ITCare</strong> (el "Responsable"), con domicilio en Ciudad de
              México, México, es responsable del tratamiento de los datos personales
              que usted nos proporción a través de este sitio web.
            </p>

            <h2>Datos que recabamos</h2>
            <ul>
              <li>
                <strong>Datos de contacto</strong> que usted nos proporciona
                voluntariamente a través del formulario de contacto, WhatsApp o
                correo electrónico: nombre, correo electrónico, teléfono, empresa y
                el contenido de su mensaje.
              </li>
              <li>
                <strong>Datos de navegación</strong> de carácter técnico si
                activamos herramientas de analítica en el futuro (ver sección de
                cookies). Actualmente el sitio no utiliza cookies de seguimiento.
              </li>
            </ul>

            <h2>Finalidades del tratamiento</h2>
            <ul>
              <li>Atender sus solicitudes de información, cotizaciones y contacto</li>
              <li>Proporcionar los servicios de consultoría que contrate</li>
              <li>Enviarle información comercial únicamente si usted lo autoriza</li>
              <li>Cumplir con obligaciones legales y fiscales aplicables</li>
            </ul>

            <h2>Transferencias de datos</h2>
            <p>
              No vendemos ni compartimos sus datos personales con terceros, salvo
              con proveedores de servicios estrictamente necesarios para operar
              (por ejemplo, el proveedor del formulario de contacto y servicios de
              correo electrónico), quienes tratan los datos únicamente por
              instrucción del Responsable y con medidas de seguridad apropiadas.
            </p>

            <h2>Sus derechos ARCO</h2>
            <p>
              Usted tiene derecho a acceder, rectificar, cancelar u oponerse al
              tratamiento de sus datos personales, así como a limitar su uso o
              revocar el consentimiento otorgado. Para ejercer estos derechos,
              envíe su solicitud a <strong>privacidad@itcare.com.mx</strong> y le
              responderemos en un plazo máximo de 20 días hábiles.
            </p>

            <h2>Cookies</h2>
            <p>
              Este sitio web actualmente no utiliza cookies de rastreo ni
              analítica. En caso de activarlas en el futuro (por ejemplo,
              Google Analytics), este aviso será actualizado y — cuando aplique —
              se mostrará un aviso de consentimiento.
            </p>

            <h2>Vigencia</h2>
            <p>
              Este aviso de privacidad puede ser modificado en cualquier momento.
              La versión vigente estará siempre disponible en esta página. Última
              actualización: noviembre de 2026.
            </p>

            <p>
              <Link to="/contact">← Volver al sitio</Link>
            </p>
          </article>
        </Reveal>
      </div>
    </>
  )
}