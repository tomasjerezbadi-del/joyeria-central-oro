/**
 * Datos del negocio — Joyería Central Oro
 * ÚNICA FUENTE DE VERDAD. Cambiar aquí se propaga a todo el sitio.
 *
 * El NAP (nombre, dirección, teléfono) debe escribirse EXACTAMENTE igual en
 * footer, JSON-LD y Google Business Profile. No editar fuera de aquí.
 * Ref: CLAUDE.md §13 y copywriting_central_oro.md.
 */

/** Teléfono en formato internacional sin símbolos, para enlaces wa.me y tel: */
const PHONE_E164 = "56998833021";

/** Genera un enlace de WhatsApp con mensaje pre-llenado y codificado. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`;
}

export const site = {
  // ---- Identidad ----
  name: "Joyería Central Oro",
  shortName: "Central Oro",
  url: "https://joyeriacentraloro.cl",
  locale: "es-CL",
  foundingYear: 1995,
  tagline: "Joyería artesanal en Temuco desde 1995.",

  // ---- NAP (idéntico en todo el sitio — CLAUDE.md §13) ----
  address: {
    street: "Vicuña Mackenna 402",
    city: "Temuco",
    region: "La Araucanía",
    country: "CL",
    full: "Vicuña Mackenna 402, Temuco",
  },

  // ---- Contacto ----
  phone: {
    /** Formato internacional E.164 sin signos (para tel: y wa.me) */
    e164: PHONE_E164,
    /** Formato visible para humanos */
    display: "+56 9 9883 3021",
  },
  // PLACEHOLDER — reemplazar al confirmar dominio (copywriting §Datos técnicos)
  email: "contacto@joyeriacentraloro.cl",

  // PLACEHOLDER — crear cuenta gratis en https://web3forms.com y pegar el access key
  web3formsKey: "REEMPLAZAR_CON_ACCESS_KEY_DE_WEB3FORMS",

  // ---- Horario ----
  hours: {
    morning: "Lunes a viernes, 10:00 – 14:00 hrs",
    afternoon: "Lunes a viernes, 15:00 – 18:00 hrs",
    /** Línea compacta para footer */
    compact: "Lunes a viernes, 10:00 – 14:00 · 15:00 – 18:00",
    note: "El local tiene cierre de 14:00 a 15:00 hrs.",
  },

  // ---- Geo (para JSON-LD y mapa) ----
  geo: {
    latitude: -38.7359,
    longitude: -72.5904,
  },

  // ---- Crédito footer ----
  copyright: "© 2025 Joyería Central Oro. Temuco, Chile.",
} as const;

/** Navegación principal (CLAUDE.md §6 / copywriting §Microcopy global) */
export const nav = [
  { label: "Inicio", href: "/" },
  { label: "Colecciones", href: "/colecciones" },
  { label: "Trabajos personalizados", href: "/personalizado" },
  { label: "Reparación", href: "/reparacion" },
  { label: "Sobre nosotros", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/contacto" },
] as const;

/** Navegación del footer (copywriting §Footer — Columna 2) */
export const footerNav = [
  { label: "Colecciones", href: "/colecciones" },
  { label: "Trabajos personalizados", href: "/personalizado" },
  { label: "Reparación y restauración", href: "/reparacion" },
  { label: "Sobre nosotros", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/contacto" },
] as const;

/**
 * Mensajes pre-llenados de WhatsApp por contexto.
 * Usar con whatsappLink(wa.X) — copywriting (varias páginas).
 */
export const wa = {
  default: "Hola, tengo una consulta sobre Joyería Central Oro.",
  argollas: "Hola, me interesa cotizar argollas de matrimonio.",
  anillos: "Hola, me interesa cotizar un anillo de compromiso.",
  personalizado: "Hola, me gustaría cotizar un trabajo personalizado.",
  reparacion: "Hola, tengo una joya que necesita reparación.",
  enchape: "Hola, quiero consultar por un enchape en oro o plata.",
} as const;

/** Tooltip del botón flotante de WhatsApp (copywriting §Microcopy global) */
export const waTooltip = "Escríbenos por WhatsApp";

/**
 * Datos para Open Graph por defecto (copywriting §Datos técnicos SEO).
 * El title/description por página los inyecta cada página vía BaseLayout.
 */
export const ogDefaults = {
  title: "Joyería Central Oro | Temuco",
  description:
    "Joyas únicas hechas a mano desde 1995. Trabajos personalizados y argollas de matrimonio en La Araucanía.",
  type: "website",
  locale: "es_CL",
  // PLACEHOLDER — reemplazar con imagen propia (CLAUDE.md §9)
  image: "/images/og-central-oro.jpg",
} as const;

/**
 * Structured Data — LocalBusiness (JewelryStore).
 * Bloque JSON-LD para el <head> de todas las páginas (CLAUDE.md §8).
 * Copiado literal de copywriting §Datos técnicos SEO.
 */
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "JewelryStore",
  name: site.name,
  description:
    "Joyería artesanal en Temuco con más de 30 años de trayectoria. Trabajos personalizados, argollas de matrimonio y reparación de joyas en La Araucanía.",
  url: site.url,
  telephone: `+${site.phone.e164}`,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "15:00",
      closes: "18:00",
    },
  ],
  foundingDate: "1995",
  priceRange: "$$",
} as const;
