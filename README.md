# Joyería Central Oro — sitio web

Sitio estático (Astro) para Joyería Central Oro, Temuco. Vitrina + contacto que
deriva a WhatsApp y a un formulario. Sin e-commerce en esta fase.

## Desarrollo local

```bash
npm install      # instalar dependencias (solo la primera vez)
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera /dist para producción
npm run preview  # previsualiza el build de producción
```

## Stack

- **Astro** (sitio 100% estático, sin framework JS de cliente)
- **CSS plano** con custom properties (tokens en `src/styles/global.css`)
- Fuentes self-hosted (`@fontsource`): Cormorant Garamond + Hanken Grotesk
- **@astrojs/sitemap** para el sitemap
- Formulario: **Web3Forms** (sin backend)

## Estructura

- `src/data/site.ts` — **datos del negocio (NAP, horarios, WhatsApp, JSON-LD).**
  Única fuente de verdad: cambiar aquí se propaga a todo el sitio.
- `src/pages/` — las 6 páginas (`/`, `/colecciones`, `/personalizado`,
  `/reparacion`, `/sobre-nosotros`, `/contacto`)
- `src/components/` — Header, Footer, WhatsAppButton, Hero, CategoryCard,
  TrustBlock, ProcessStep, SectionTitle, ContactForm
- `src/assets/images/` — imágenes optimizadas por Astro (ver `CREDITS.md`)
- `public/` — robots.txt, favicon, imagen Open Graph

## ⚠️ Pendientes antes / después de lanzar

1. **Web3Forms (formulario):** crear cuenta gratis en https://web3forms.com y
   pegar el access key en `src/data/site.ts` → `web3formsKey`. Sin esto, el
   formulario de contacto no envía.
2. **Email:** `contacto@joyeriacentraloro.cl` es placeholder. Confirmar al tener
   dominio y actualizar en `src/data/site.ts` → `email`.
3. **Imágenes:** todas son placeholders de Unsplash (ver
   `src/assets/images/CREDITS.md` y `public/images/og-central-oro.jpg`).
   Reemplazar por fotografía propia del taller y las piezas. **Prioridad alta.**

## Despliegue (Cloudflare Pages)

1. Subir este proyecto a un repositorio en **GitHub**.
2. En **Cloudflare Pages** → *Create application* → *Pages* → conectar el repo.
3. Configuración de build:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Cloudflare asigna un subdominio `*.pages.dev` para previsualizar.
5. Conectar el dominio `joyeriacentraloro.cl` cuando esté registrado (HTTPS
   automático).

**Post-deploy:** dar de alta el sitio en **Google Search Console** y enviar el
sitemap (`https://joyeriacentraloro.cl/sitemap-index.xml`). Crear/actualizar el
**Google Business Profile** con el NAP idéntico al del sitio.
