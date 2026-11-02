<div align="center">

<img src="src/assets/logo.svg" alt="ITCare" width="380" />

# Sitio Web ITCare

**Consultoría SAP y Transformación Digital** — sitio corporativo moderno, rápido y responsivo.

[![CI/CD](https://github.com/JuaanDiiaz/itcare-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/JuaanDiiaz/itcare-website/actions/workflows/deploy.yml)
![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=white)
![Node](https://img.shields.io/badge/Node-18%2B%20(build%2020)-339933?logo=node.js&logoColor=white)
![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Actions%20%2B%20Plesk-2c4fa9)

[Vista previa](https://itcare.com.mx/beta) · [Reportar un problema](https://github.com/JuaanDiiaz/itcare-website/issues)

</div>

---

## 📖 Acerca del proyecto

Sitio web corporativo de **ITCare**, consultora SAP con presencia en México y LATAM.
Reemplaza a la página estática anterior con una experiencia moderna: tema oscuro
futurista, animaciones de entrada en scroll, terminal de código animada y
contenido 100% gestionado desde un único archivo de datos.

> **Vista previa pública:** itcare.com.mx/beta — se actualiza automáticamente en cada `push` a `main`.

### ✨ Características

| | |
|---|---|
| 🌑 **Dark futurista** | Paleta derivada del brand (navy `#0D347A`), glassmorphism, glow effects |
| 💻 **Terminal animada** | Código "escribe en loop" con resultados de proyecto, cursor parpadeante |
| 🎞️ **Animaciones** | Scroll-reveal repetibles con `framer-motion`, hero carousel con dots |
| 🧭 **Multi-página SPA** | Rutas `/`, `/services`, `/technologies`, `/solutions`, `/contact` con React Router |
| 📱 **Responsivo** | Menú hamburger funcional, grids fluidos (`min(100%, …)`), probado a 390/768/1366px |
| 💬 **WhatsApp** | Botón flotante con chat pre-llenado al número corporativo |
| ✉️ **Formulario** | Contacto completo listo para Formspree (ver [Configuración](#⚙️-configuración-de-entorno)) |
| 🔍 **SEO/Social** | Open Graph, Twitter Card, `sitemap.xml`, `robots.txt`, imagen de compartir |
| 🚀 **CI/CD** | Build automático + deploy a GoDaddy/Plesk en cada push, sin intervención manual |

---

## 🛠️ Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [React](https://react.dev) | 19 | UI + React Router 6 (SPA multi-página) |
| [Vite](https://vite.dev) | 6 | Build y dev server (v6 por compatibilidad con Node 18 local) |
| [framer-motion](https://motion.dev) | 14 | Animaciones scroll-reveal |
| CSS puro | — | Un solo `global.css` con design tokens (sin framework) |
| [Formspree](https://formspree.io) | — | Backend del formulario como servicio (sin servidor propio) |
| GitHub Actions | — | CI: build en cada PR · CD: deploy FTP-less vía rama `deploy*` |

---

## 🚀 Empezando

### Requisitos

- **Node.js ≥ 18** (el build de producción corre en Node 20 en GitHub Actions)
- npm 9+

### Instalación

```bash
# 1. Clonar
git clone https://github.com/JuaanDiiaz/itcare-website.git
cd itcare-website

# 2. Instalar dependencias
npm install

# 3. Servidor de desarrollo (http://localhost:5173)
npm run dev
```

### Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con hot-reload |
| `npm run build` | Build de producción a `dist/` |
| `npm run build -- --base=/beta/ --outDir dist-beta` | Build con base `/beta/` (subcarpeta) |
| `npm run preview` | Sirve el build local (`dist/`) en http://localhost:4173 |

---

## 📁 Estructura del proyecto

```
itcare-website/
├── public/                  # Archivos servidos tal cual (copiados al build)
│   ├── robots.txt           # Reglas para crawlers
│   ├── sitemap.xml          # Mapa del sitio (URLs de producción)
│   └── og-image.jpg         # Imagen de preview al compartir el link
├── src/
│   ├── assets/              # Imágenes y logos (los SVG se inlinean en el bundle)
│   ├── components/
│   │   ├── Navbar.jsx           # Nav sticky + menú mobile con estado
│   │   ├── Footer.jsx
│   │   ├── HeroCarousel.jsx     # Slides auto-rotativos con dots
│   │   ├── CodeTerminal.jsx     # Terminal "escribe" en loop infinito
│   │   ├── ServiceCards.jsx     # Tarjetas de servicios con imágenes
│   │   ├── SectionList.jsx      # Bloque reutilizable heading + bullets
│   │   ├── PageHero.jsx         # Banner superior de páginas internas
│   │   ├── ContactForm.jsx      # Formulario → Formspree
│   │   ├── WhatsAppButton.jsx   # Botón flotante WhatsApp
│   │   ├── ScrollUI.jsx         # Barra de progreso + volver arriba
│   │   └── Reveal.jsx           # Wrapper de scroll-reveal (framer-motion)
│   ├── data/
│   │   └── content.js           # ⭐ TODO el copy del sitio vive aquí
│   ├── pages/                   # Una página por ruta
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Technologies.jsx
│   │   ├── Solutions.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   └── global.css           # Design tokens en :root + estilos
│   ├── App.jsx                  # Rutas + Layout (Navbar/Outlet/Footer)
│   └── main.jsx                 # Mount + favicon inyectado (base-path safe)
├── .github/workflows/deploy.yml # Pipeline CI/CD
├── legacy/                      # Página antigua (solo referencia, no mantener)
└── public/.htaccess             # Reglas Apache (sin efecto en IIS; el routing
                                 # SPA en el servidor Windows usa public/web.config
                                 # que Vite copia al build)
```

> ⭐ **Editar textos**: casi todo el contenido vive en `src/data/content.js`.
> Cambia ahí y haz push — se refleja en producción automáticamente.

---

## 🌓 Configuración de entorno

Variables en tiempo de **build** (Vite las incrusta en el bundle):

| Variable | Requerida | Descripción |
|---|---|---|
| `VITE_FORMSPREE_ID` | ✅ para que el formulario envíe | ID del form de [formspree.io](https://formspree.io) (ej. `f/abcdwxyz`). Sin ella el form muestra un aviso de configuración — intencional |
| `VITE_WHATSAPP_NUMBER` | Opcional | Sobrescribe el número de WhatsApp (default: `525532499504`) |

Para desarrollo, créalas en un archivo `.env.local` (gitignored):

```bash
VITE_FORMSPREE_ID=f/abcdwxyz
```

Para producción/beta se configuran como *secrets/variables* del repo en
GitHub (Settings → Secrets and variables → Actions) y el workflow las inyecta
al build.

---

## 🔄 Despliegue (CI/CD)

```
git push (main)
   │
   ▼
GitHub Actions ──► build base "/"   ──► rama deploy       ──┐
                └► build base "/beta" ──► rama deploy-beta ──┤
                                                             │
             Plesk (GoDaddy, Windows/IIS) ◄── webhook ───────┘
                ├─ beta.itcare.com.mx      ← rama deploy       (subdominio)
                └─ itcare.com.mx/beta      ← rama deploy-beta  (carpeta)
```

- **PRs**: solo build de validación (nada se despliega)
- **Push a `main`**: dos builds y publicación automática a las ramas `deploy` y `deploy-beta` (solo archivos construidos, nunca código fuente)
- **Webhook de Plesk**: registrado en GitHub (Settings → Webhooks) → Plesk hace pull y publica automáticamente
- **Routing SPA en IIS**: `public/web.config` reescribe rutas desconocidas a `index.html`

### Promoción a producción *(pendiente)*

Cuando el sitio se apruebe: backup del sitio actual en Plesk → reemplazo del
contenido del document root → los builds de rama `deploy` (base `/`) ya son el
sitio final.

---

## 🧭 Rutas del sitio

| Ruta | Página | Contenido |
|---|---|---|
| `/` | Inicio | Hero carousel + terminal, intro, tarjetas de servicios, bandas de soluciones y tecnologías |
| `/services` | Servicios | SAP/Basis/NetWeaver, ERP/CRM/BW/PI, JDEdwards, desarrollo, servicios integrados |
| `/technologies` | Tecnologías | Containers & DevOps, SAP PI/PO y BTP, SAP Business One |
| `/solutions` | Soluciones | Portafolio de soluciones de negocio |
| `/contact` | Contacto | Formulario (Formspree) + información de servicio |

---

## 🗺️ Roadmap

- [x] Rediseño dark futurista con animaciones
- [x] Pipeline CI/CD con deploy automático (webhook)
- [x] Assets de marca reales (logo, favicon)
- [x] WhatsApp flotante con número corporativo
- [x] SEO/social meta + sitemap
- [ ] Conectar formulario (Formspree) — pendiente ID de cuenta
- [ ] Promoción a producción + redirección del dominio principal
- [ ] Sección de testimonios y cifras (prueba social)
- [ ] Registro en Google Search Console
- [ ] Certificado SSL para el subdominio beta (Let's Encrypt vía Plesk)

---

## 🤝 Contribuir

1. Trabaja en una rama: `git checkout -b feature/mi-mejora`
2. Commit claro y sin líneas de atribución
3. Push + Pull Request → el pipeline valida el build automáticamente

---

<div align="center">

**ITCare** — Consultoría en Sistemas de Información
🌐 [itcare.com.mx](https://itcare.com.mx) · 💬 [WhatsApp](https://wa.me/525532499504)

© 2026 ITCare. Todos los derechos reservados.

</div>