// Site-wide content in one place so copy stays consistent across pages.

import heroBg from '../assets/hero-bg.jpg'
import servSap from '../assets/serv-sap.jpg'
import servErp from '../assets/serv-erp.jpg'
import servDev from '../assets/serv-dev.jpg'
import teamImg from '../assets/team.jpg'
import circuitImg from '../assets/circuit.jpg'

export const images = { heroBg, teamImg, circuitImg }

export const siteInfo = {
  name: 'ITCare',
  tagline: 'Consultoría SAP y Transformación Digital',
  intro: [
    'Somos un equipo de consultores certificados que combina el dominio funcional de SAP con un profundo conocimiento de los procesos de negocio. Creemos que la tecnología solo genera valor cuando sirve a las personas: trabajamos con empatía, transparencia y un compromiso absoluto con los resultados.',
    'Consultores experimentados que dominan la funcionalidad y los procesos de negocio — y que hablan un mismo lenguaje: el suyo.',
  ],
  copyright: `© ${new Date().getFullYear()} ITCare. Todos los derechos reservados.`,
}

export const heroSlides = [
  {
    title: 'Transformamos sus procesos de negocio en ventaja competitiva',
    text: 'Consultoría SAP de clase mundial: consultores certificados, implementación ágil y resultados medibles.',
  },
  {
    title: 'Sus sistemas críticos, disponibles y seguros 24/7',
    text: 'Administración remota SAP con soporte por SLA y monitoreo permanente de su plataforma.',
  },
  {
    title: 'Una vista 360° de la información de su negocio',
    text: 'Tome decisiones ágiles y confiables con sus datos centralizados en un repositorio único.',
  },
]

export const serviceTiles = [
  {
    title: 'Administración remota SAP',
    text: 'Máxima disponibilidad y seguridad para sus sistemas SAP, sin los costos de un equipo dedicado en plantilla.',
    link: '/services',
    image: servSap,
    alt: 'Centro de datos: racks de servidores SAP',
  },
  {
    title: 'ERP / CRM / BW',
    text: 'Implementación, rollout y localización fiscal gestionadas por especialistas, con soporte continuo a sus usuarios.',
    link: '/services',
    image: servErp,
    alt: 'Tablero de control con métricas de negocio',
  },
  {
    title: 'Desarrollo a la medida',
    text: 'Soluciones web, móviles y de escritorio que conectan su negocio con la tecnología: interfaces, ABAP y más.',
    link: '/services',
    image: servDev,
    alt: 'Programador escribiendo código en un laptop',
  },
]

// Each service section: heading + bullet list (data for the Services page).
export const serviceSections = [
  {
    id: 'sap-basis',
    heading: 'SAP/Basis/NetWeaver',
    bullets: [
      'Administración remota de SAP',
      'Instalación',
      'Migración',
      'Actualización',
      'Seguridad',
      'Puesta a punto (tuning)',
    ],
  },
  {
    id: 'erp-crm',
    heading: 'ERP/CRM/BW/PI',
    bullets: [
      'Implementación',
      'Rollout',
      'Localización: análisis y configuración fiscal según requerimientos locales',
      'Soporte a usuarios',
      'Procesos de negocio',
      'Puesta a punto',
    ],
  },
  {
    id: 'jdedwards',
    heading: 'JDEdwards',
    bullets: [
      'Administración remota de JDE',
      'Implementación de módulos: Financieros, Distribución y Logística, Manufactura',
      'Desarrollo en JDE: Tools de JDE y OVR One View Reporting',
      'Instalación y migración',
      'Actualización',
      'Seguridad',
      'Puesta a punto',
      'Versiones: World Software, XE, One World, 8.12, 9.1',
      'Capacitaciones',
    ],
  },
  {
    id: 'desarrollo',
    heading: 'Desarrollo ABAP, web, móvil y de escritorio',
    bullets: [
      'Análisis de programas y desarrollo a la medida',
      'Interfaces e integraciones con su ecosistema actual',
    ],
  },
]

export const servicesPageInfo = {
  title: 'Servicios',
  intro:
    'Nuestro portafolio cubre todo el ciclo de vida de su plataforma ERP — de la implementación al soporte — para que su inversión entregue el retorno que su negocio espera. Nos enfocamos en:',
  focus: [
    'Implementaciones de ERP optimizadas: menos tiempo, menor costo total',
    'Proyectos que se entregan: convertimos su inversión en beneficios reales',
    'Procesos ágiles y optimizados que reducen tiempos operativos',
    'Información confiable y centralizada para una toma de decisiones ágil',
    'El máximo aprovechamiento de sus recursos financieros, humanos y tecnológicos',
  ],
}

export const integratedServices = {
  title: 'Servicios Integrados',
  paragraphs: [
    'Combinamos experiencia técnica y conocimiento del negocio para desarrollar soluciones que simplemente funcionan.',
    'Sabemos que cada proyecto es único. Empresas de todo tipo y tamaño han confiado en nuestros consultores certificados para lograr que sus proyectos ERP se cumplan — y un equipo de especialistas les acompaña en soporte y capacitación a través de nuestra mesa de ayuda.',
  ],
  sections: [
    {
      heading: 'Mesa de ayuda — consultores especializados en:',
      bullets: [
        'BASIS, ABAP/JAVA, FI, CO, MM, PP, HCM, CRM, PY, SD, QM, BW entre otras',
        'Soporte y atención a usuarios',
        'Seguimiento a tickets con métricas del servicio',
        'Encuestas de satisfacción',
      ],
    },
    {
      heading: 'Garantizamos:',
      bullets: [
        'Gestión inmediata de requerimientos',
        'Soporte en cumplimiento con acuerdos de servicio (SLA)',
        'El máximo aprovechamiento de sus recursos financieros, humanos, tecnológicos y operacionales',
        'Decisiones ágiles con su información en un punto único',
      ],
    },
  ],
}

export const solutions = {
  title: 'Soluciones de Negocio',
  paragraphs: [
    'Nuestro portafolio cubre las necesidades actuales de todo tipo de empresas y organizaciones. Y cuando su requerimiento es específico, diseñamos soluciones ad-hoc hechas a su medida.',
  ],
  intro: 'Habilitamos las capacidades necesarias para proyectos de:',
  bullets: [
    'Desarrollo a la medida',
    'Personalización de pantallas mainframe',
    'Web Services',
    'Consultoría en procesos de negocio y Gobierno de Información',
    'Sistemas administradores de contenido (CMS)',
    'Aplicaciones móviles iOS y Android',
    'Hospedaje y seguridad',
    'Venta e integración de hardware y software',
    'Proyectos llave en mano (servidores, almacenamiento, redes) y licenciamiento',
  ],
}

export const technologies = {
  title: 'Tecnologías',
  intro:
    'Llevamos la plataforma de su empresa a la infraestructura moderna: contenedores, orquestación, integraciones en la nube y soluciones SAP que crecen con su negocio.',
  categories: [
    {
      id: 'containers',
      index: '01',
      title: 'Contenedores & DevOps',
      text: 'Modernice la operación de sus sistemas con contenedores, automatización de despliegues y observabilidad de punta a punta.',
      items: [
        'Docker',
        'Kubernetes (K8s)',
        'OpenShift',
        'Pipelines CI/CD',
        'Migración a microservicios',
        'Monitoreo y observabilidad',
      ],
    },
    {
      id: 'sap-integration',
      index: '02',
      title: 'SAP PI/PO y SAP BTP',
      text: 'Conectamos SAP con su ecosistema completo: integración de procesos, APIs gestionadas y extensiones cloud sin modificar el core.',
      items: [
        'SAP PI (Process Integration)',
        'SAP PO (Process Orchestration)',
        'SAP BTP (Business Technology Platform)',
        'APIs y Web Services',
        'Extensiones clean-core',
        'Integración nube a nube',
      ],
    },
    {
      id: 'sap-b1',
      index: '03',
      title: 'SAP Business One',
      text: 'El ERP diseñado para pymes: implementación, localización fiscal y soporte por consultores certificados para operar toda la empresa en un solo sistema.',
      items: [
        'Implementación y rollout',
        'Localización fiscal (México)',
        'Migración y actualización de versiones',
        'Add-ons e integraciones (e-commerce)',
        'Soporte y capacitación',
      ],
    },
  ],
}