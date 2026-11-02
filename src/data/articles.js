// Blog/recursos del sitio. Cada artículo se renderiza desde `content`
// (array de bloques) en la página /resources/:slug.

export const articles = [
  {
    slug: 'cuanto-cuesta-sap-business-one-mexico',
    title: '¿Cuánto cuesta implementar SAP Business One en México?',
    date: '2026-11-01',
    readTime: '7 min',
    excerpt:
      'Licencias, implementación, hosting y soporte: un desglose honesto de los costos reales de SAP B1 para pymes mexicanas, y los factores que mueven el precio.',
    content: [
      {
        type: 'p',
        text: 'Es la primera pregunta de toda pyme que evalúa un ERP — y la que menos respuestas claras encuentra en internet. En esta guía desglosamos los componentes reales del costo de SAP Business One en México, con rangos de referencia del mercado y los factores que hacen que dos empresas con el mismo número de empleados reciban presupuestos muy distintos.',
      },
      { type: 'h2', text: 'Los cuatro componentes del costo' },
      { type: 'h3', text: '1. Licencias SAP' },
      {
        type: 'p',
        text: 'SAP B1 se licencia por usuario nombrado. Existen dos tipos principales: Professional (acceso completo a todos los módulos) y Limited (funcionalidad reducida para roles operativos). Puede adquirirse como licencia perpetua (pago único + mantenimiento anual) o mediante suscripción en la nube (pago mensual).',
      },
      {
        type: 'ul',
        items: [
          'Professional: típicamente entre USD 3,000 y 4,500 por usuario en esquema perpetuo, o alrededor de USD 60–110 por usuario/mes en suscripción',
          'Limited: aproximadamente la mitad del costo de Professional',
          'El mantenimiento anual de licencias perpetuas ronda el 16–18% del valor de lista',
        ],
      },
      {
        type: 'note',
        text: 'Nota importante: estas cifras son referencias generales del mercado. Los precios oficiales varían por partner, programa de precios vigente y negociación — solicite siempre una cotización formal.',
      },
      { type: 'h3', text: '2. Implementación (el componente más variable)' },
      {
        type: 'p',
        text: 'Aquí es donde el presupuesto se define de verdad. La implementación incluye análisis de procesos, configuración, migración de datos, capacitación y pruebas. En México, proyectos típicos de pymes (5–15 usuarios, Finanzas + Ventas + Inventarios, con localización fiscal CFDI 4.0) se manejan usualmente en un rango de USD 10,000 a 40,000, dependiendo de la complejidad.',
      },
      {
        type: 'ul',
        items: [
          'Alcance de módulos: agregar Manufactura o Distribution eleva el esfuerzo significativamente',
          'Migración de datos: cuantos más sistemas antiguos y datos sucios, más horas de limpieza y carga',
          'Personalización (add-ons): cada desarrollo a la medida se cotiza aparte',
          'Integraciones: e-commerce, bancos, Shopify/WooCommerce, PAC de facturación',
        ],
      },
      { type: 'h3', text: '3. Infraestructura (hosting / nube)' },
      {
        type: 'p',
        text: 'Si elige la versión on-premise necesitará un servidor. Si elige SAP B1 Cloud (o se hospeda en Azure/AWS), el costo es mensual — típicamente entre USD 100 y 400 al mes dependiendo de usuarios y requerimientos de rendimiento. La modalidad en nube evita la compra de hardware y simplifica el mantenimiento.',
      },
      { type: 'h3', text: '4. Soporte y mantenimiento' },
      {
        type: 'p',
        text: 'Un error común es no presupuestar el soporte pos-go-live. Las opciones van desde un paquete de horas mensuales (mesa de ayuda) hasta contratos con SLA. Para pymes, un soporte estructurado cuesta típicamente entre USD 300 y 1,000 al mes y es la diferencia entre un ERP que funciona y uno que se abandona.',
      },
      { type: 'h2', text: 'Ejemplo de presupuesto orientativo' },
      {
        type: 'p',
        text: 'Empresa comercial con 10 usuarios (6 Professional + 4 Limited), Finanzas + Ventas + Inventarios, en nube, con localización fiscal: el primer año suele ubicarse entre USD 35,000 y 55,000 todo incluido; los siguientes años quedan en el orden de USD 8,000 a 12,000 anuales (suscripciones + soporte).',
      },
      { type: 'h2', text: 'Los factores que hacen variar el precio' },
      {
        type: 'ul',
        items: [
          'Qué tan definidos están sus procesos hoy: un diagnóstico previo reduce semanas de implementación',
          'La calidad de sus datos actuales (clientes, productos, inventarios)',
          'Requerimientos fiscales específicos (CFDI 4.0, complementos de pago, comercio exterior)',
          'Número de sucursales/almacenes y volumen transaccional',
          'El partner que elija: experiencia local probada vs. precio barato — la segunda suele salir más cara',
        ],
      },
      { type: 'h2', text: 'Cómo no pagar de más' },
      {
        type: 'ul',
        items: [
          'Defina el alcance por escrito y por fases: mejor un go-live sólido de core Finanzas + Ventas, y crecer después',
          'Compare al menos dos propuestas con el mismo alcance',
          'Pida referencia de 2 clientes del partner con proyectos similares al suyo',
          'Cuide el pos-go-live: incluya capacitación y un periodo de soporte inicial en el contrato',
        ],
      },
      {
        type: 'p',
        text: 'En ITCare ayudamos a empresas mexicanas a implementar SAP Business One con localización fiscal completa y consultores certificados. Si quiere un número para su caso particular — no una estimación genérica — agende una evaluación sin costo y le preparamos un presupuesto detallado por fases.',
      },
    ],
  },
  {
    slug: 'ecc-6-fin-de-soporte-2027',
    title: 'ECC 6.0 llega a fin de soporte en 2027: qué debe hacer su empresa ahora',
    date: '2026-11-01',
    readTime: '5 min',
    excerpt:
      'El mantenimiento mainstream de SAP ECC 6.0 termina en 2027 (extended hasta 2030). Qué opciones reales existen, cuánto tarda una migración y por qué empezar hoy le conviene.',
    content: [
      {
        type: 'p',
        text: 'SAP anunció que el mantenimiento mainstream de SAP ERP / ECC 6.0 termina en 2027, con opción de mantenimiento extendido hasta 2030 a un costo premium. Para las miles de empresas en México que aún operan ECC — o versiones anteriores — la fecha ya no es un tema lejano: los proyectos de migración se están agendando ahora, y los buenos partners están llenando su capacidad de los años 2026 y 2027.',
      },
      { type: 'h2', text: 'Sus opciones reales' },
      {
        type: 'ul',
        items: [
          'S/4HANA Cloud, public edition — el estándar de SAP, menos personalizable, actualizaciones automáticas',
          'S/4HANA Cloud, private edition — su propio entorno, más control, escalas de migración más largas',
          'Conversión Brownfield — migra su ECC actual conservando procesos y datos',
          'Reimplementación Greenfield — oportunidad de rediseñar procesos "en limpio"',
          'Quedarse en ECC con mantenimiento extendido — viables a corto plazo, con costo creciente y sin innovación',
        ],
      },
      { type: 'h2', text: 'Cuánto tiempo toma una migración' },
      {
        type: 'p',
        text: 'Una conversión Brownfield de una empresa mediana toma típicamente de 6 a 12 meses de proyecto; una reimplementación Greenfield de 9 a 18 meses. A esto súmele la preparación: análisis de custom code, limpieza de maestros y definición de arquitectura — que conviene hacer meses antes de que arranque el proyecto formal.',
      },
      { type: 'h2', text: 'Empiece por estos tres pasos' },
      {
        type: 'ul',
        items: [
          'Inventario de custom code y interfaces: qué desarrollos Z tiene, cuáles siguen usándose y qué tan compatibles son con S/4HANA',
          'Readiness check: medir qué tanto del sistema está fuera del estándar y qué tan limpios están sus datos',
          'Definir la ruta: Brownfield o Greenfield según ese inventario — no por moda',
        ],
      },
      { type: 'h2', text: 'La buena noticia' },
      {
        type: 'p',
        text: 'La migración también es una oportunidad: procesos rediseñados, datos limpios, y la base para incorporar SAP BTP, integraciones en la nube y analítica. Las empresas que planean con 18–24 meses de anticipación hacen migres más baratas y con menos riesgo que las que corren contra reloj en 2027.',
      },
      {
        type: 'p',
        text: 'En ITCare le ayudamos a evaluar su panorama con un readiness check inicial y un plan de ruta realista — sin compromiso. Contacte a un especialista y agendemos una evaluación de su caso.',
      },
    ],
  },
]