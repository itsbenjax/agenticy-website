// ─── Estructura de navegación de agenticy.io ──────────────────────────
// Define la arquitectura de información completa del sitio.
// Cada nodo puede representar una página o una sección agrupadora.

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
  highlight?: boolean;
}

export interface NavSection {
  label: string;
  href?: string;
  children: NavLink[];
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavLink[];
  highlight?: boolean;
}

// ── Navegación principal (header) ──────────────────────────────────
export const mainNavigation: NavItem[] = [
  {
    label: 'Inicio',
    href: '/',
  },
  {
    label: 'Servicios',
    children: [
      { label: 'Agentes de IA Empresariales', href: '/servicios/agentes-ia' },
      { label: 'RAG Empresarial', href: '/servicios/rag-empresarial' },
      { label: 'Servicios Globales', href: '/servicios/servicios-globales' },
      { label: 'Capacitación Presencial', href: '/servicios/capacitacion' },
    ],
  },
  {
    label: 'Roles',
    href: '/roles',
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'FAQ',
    href: '/faq',
  },
  {
    label: 'Contacto',
    href: '/contacto',
  },
];

// ── Navegación del footer ──────────────────────────────────────────
export const footerNavigation: NavSection[] = [
  {
    label: 'Servicios',
    children: [
      { label: 'Agentes de IA', href: '/servicios/agentes-ia' },
      { label: 'RAG Empresarial', href: '/servicios/rag-empresarial' },
      { label: 'Servicios Globales', href: '/servicios/servicios-globales' },
      { label: 'Capacitación', href: '/servicios/capacitacion' },
    ],
  },
  {
    label: 'Empresa',
    children: [
      { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
      { label: 'Roles', href: '/roles' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contacto', href: '/contacto' },
    ],
  },
  {
    label: 'Recursos',
    children: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Documentación', href: '/docs' },
      { label: 'Términos y Condiciones', href: '/terminos' },
      { label: 'Política de Privacidad', href: '/privacidad' },
    ],
  },
];

// ── Redes sociales ─────────────────────────────────────────────────
export const socialLinks: NavLink[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com/company/agenticy', external: true },
  { label: 'X (Twitter)', href: 'https://x.com/agenticy', external: true },
  { label: 'YouTube', href: 'https://youtube.com/@agenticy', external: true },
];

// ── CTA del header ─────────────────────────────────────────────────
export const headerCTA: NavLink = {
  label: 'Solicitar Demo',
  href: '/contacto',
  highlight: true,
};