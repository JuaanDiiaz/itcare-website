# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

ITCare corporate website (Spanish-language SAP/IT consulting). React 19 + Vite 6 + React Router SPA. All user-facing copy is in Spanish (`<html lang="es">`); routes, code identifiers and this file are in English.

The old static page from the previous project is preserved unmaintained in `legacy/` (original `index.html`/`styles.css`) — do not build on it.

## Commands

- `npm run dev` — start dev server (Vite, default http://localhost:5173)
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally
- No lint/test setup yet (Node 18.18 on this machine: Vite pinned to v6; Vite 7 requires Node 20+)

## Architecture

- `src/main.jsx` — mount point: StrictMode + BrowserRouter.
- `src/App.jsx` — route table (`/`, `/services`, `/solutions`, `/contact`, `*` → Home) and `Layout` (Navbar + Outlet + Footer). Includes `ScrollToTop`, which resets scroll on route change — keep it when adding routes.
- `src/data/content.js` — **single source of all page copy** (site info, hero slides, service bullets, solutions). Pages render from this data; edit copy here, not in components.
- `src/components/` — `Navbar` (sticky, with state-driven mobile hamburger; no CSS-only hacks), `Footer`, `HeroCarousel` (auto-rotating, dot navigation), `PageHero` (inner-page banner), `ServiceCards`, `SectionList` (reusable heading+bullets block — used everywhere a service list appears), `ContactForm`.
- `src/styles/global.css` — single stylesheet with design tokens on `:root` (navy `--color-navy`, blue `--color-primary`). No CSS framework.
- Placeholder visuals: logo is styled text ("IT" mark + "Care"), card icons are gradient blocks (`.card-icon`) — swap for real brand assets when available.

## Contact form

`ContactForm` POSTs JSON to Formspree: `https://formspree.io/f/{VITE_FORMSPREE_ID}`. The ID comes from `VITE_FORMSPREE_ID` in `.env.local` (gitignored). Without it, submitting shows a configuration notice instead of sending — this is intentional. To change the form provider, only `ContactForm.jsx` needs edits.

## Working preferences (user rules)

- **Always present a plan first**: before making any change (new functionality or bug fix), create a plan and get the user's approval. Do not start editing files without one.
- **No attribution lines**: never add `Co-Authored-By: Claude` (or any AI attribution) to commit messages or PR descriptions.