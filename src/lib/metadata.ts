// ─── Metadata SEO centralizada para agenticy.io ────────────────────────
// Función generateMetadata que retorna metadatos optimizados para cada
// página del sitio. Compatible con la API de metadata de Next.js App Router.

import type { Metadata } from 'next';

export type PageSlug =
  | 'home'
  | 'servicios/agentes-ia'
  | 'servicios/rag-empresarial'
  | 'servicios/servicios-globales'
  | 'servicios/capacitacion'
  | 'roles'
  | 'pricing'
  | 'faq'
  | 'contacto'
  | 'sobre-nosotros'
  | 'blog'
  | 'docs'
  | 'terminos'
  | 'privacidad';

interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

const baseUrl = 'https://agenticy.io';
const defaultOgImage = '/og-default.png';

const metadataMap: Record<PageSlug, PageMetadata> = {
  home: {
    title: 'Agenticy — Agentes de IA Empresariales | 100% Local, Sin APIs Externas',
    description:
      'Agenticy despliega agentes de inteligencia artificial que reemplazan roles completos en tu empresa. Infraestructura 100% local con hardware de última tecnología, sin dependencia de APIs externas. Automatización empresarial soberana.',
    keywords: [
      'agentes ia',
      'inteligencia artificial empresarial',
      'automatización empresarial',
      'hardware local',
      'agentes de ia',
      'reemplazo de roles',
      'infraestructura local',
      'sin dependencia de APIs',
      'agenticy',
    ],
  },

  'servicios/agentes-ia': {
    title: 'Agentes de IA Empresariales — Reemplazo de Roles Completos | Agenticy',
    description:
      'Agentes de inteligencia artificial que asumen roles empresariales completos: CEO, CTO, CFO, ingeniería, legal, ventas y más. Hardware de última tecnología, infraestructura 100% local, sin dependencia de APIs externas.',
    keywords: [
      'agentes ia empresariales',
      'reemplazo de roles con ia',
      'automatización de roles',
      'agentes inteligentes',
      'ia empresarial',
      'hardware local',
      'infraestructura 100% local',
      'agentes autónomos',
      'sin APIs externas',
      'agenticy agentes',
    ],
  },

  'servicios/rag-empresarial': {
    title: 'RAG Empresarial — Conocimiento Indexado en Tiempo Real | Agenticy',
    description:
      'Sistema RAG (Retrieval-Augmented Generation) que indexa toda la documentación de tu empresa. Consultas en lenguaje natural sobre infraestructura 100% local con hardware de última tecnología.',
    keywords: [
      'rag empresarial',
      'retrieval augmented generation',
      'base de conocimiento empresarial',
      'indexación de documentos',
      'ia generativa empresarial',
      'búsqueda semántica',
      'infraestructura local',
      'chunking inteligente',
      'agenticy rag',
    ],
  },

  'servicios/servicios-globales': {
    title: 'Servicios Globales — Implementación Presencial en tu País | Agenticy',
    description:
      'El equipo de Agenticy viaja a cualquier país para implementar hardware de última tecnología en tus oficinas. Infraestructura 100% local, sin dependencia de APIs externas. Despliegue in-situ global.',
    keywords: [
      'implementación ia in-situ',
      'servicios globales ia',
      'despliegue presencial',
      'ia empresarial internacional',
      'hardware local instalación',
      'infraestructura local',
      'agenticy global',
      'instalación de agentes ia',
    ],
  },

  'servicios/capacitacion': {
    title: 'Capacitación Presencial en Agentes de IA | Agenticy',
    description:
      'Programas de capacitación presencial diseñados por rol. Tu equipo aprende a dominar los agentes de IA sobre tu propia infraestructura 100% local. Certificación Agenticy incluida.',
    keywords: [
      'capacitación ia presencial',
      'entrenamiento agentes ia',
      'certificación ia empresarial',
      'capacitación agentes inteligentes',
      'formación ia in-situ',
      'cursos ia empresarial',
      'agenticy capacitación',
      'dominio de agentes ia',
    ],
  },

  roles: {
    title: '30+ Roles Reemplazables por Agentes de IA | Agenticy',
    description:
      'Descubre los más de 30 roles empresariales que nuestros agentes de IA pueden asumir: CEO, CTO, CFO, Ingeniero de Software, Abogado, Contador, y más. Si el rol se puede definir, Agenticy lo asume.',
    keywords: [
      'roles reemplazables ia',
      'agentes ia por rol',
      'automatización de puestos',
      'reemplazo de trabajo con ia',
      'ia para ceo',
      'ia para cto',
      'ia para abogado',
      'ia para contador',
      'agenticy roles',
    ],
  },

  pricing: {
    title: 'Pricing — Planes de Agentes de IA Empresariales | Agenticy',
    description:
      'Planes desde $2,499/mes. Starter, Professional, Enterprise y Custom. Todos incluyen hardware de última tecnología e infraestructura 100% local. Sin dependencia de APIs externas.',
    keywords: [
      'pricing agentes ia',
      'precios ia empresarial',
      'planes agentes inteligentes',
      'costo automatización empresarial',
      'ia empresarial pricing',
      'suscripción agentes ia',
      'agenticy precios',
      'hardware local incluido',
    ],
  },

  faq: {
    title: 'Preguntas Frecuentes — Agentes de IA Empresariales | Agenticy',
    description:
      'Respuestas a las preguntas más frecuentes sobre agentes de IA, RAG empresarial, infraestructura 100% local, implementación global y pricing de Agenticy.',
    keywords: [
      'faq agentes ia',
      'preguntas frecuentes ia empresarial',
      'dudas automatización',
      'ia empresarial faq',
      'rag empresarial preguntas',
      'implementación ia dudas',
      'agenticy faq',
    ],
  },

  contacto: {
    title: 'Contacto — Solicita una Demo de Agentes de IA | Agenticy',
    description:
      'Solicita una demostración personalizada de agentes de IA empresariales. Nuestro equipo te contactará para agendar una sesión adaptada a las necesidades de tu organización.',
    keywords: [
      'contacto agenticy',
      'demo agentes ia',
      'solicitar demo ia empresarial',
      'cotización agentes ia',
      'consulta ia empresarial',
      'prueba agentes inteligentes',
      'agenticy contacto',
    ],
  },

  'sobre-nosotros': {
    title: 'Sobre Nosotros — El Futuro de la Automatización Empresarial | Agenticy',
    description:
      'Conoce al equipo detrás de Agenticy. Nuestra misión es democratizar la inteligencia artificial empresarial con infraestructura 100% local y hardware de última tecnología.',
    keywords: [
      'sobre agenticy',
      'equipo ia empresarial',
      'misión automatización',
      'empresa de agentes ia',
      'historia agenticy',
      'ia local empresarial',
    ],
  },

  blog: {
    title: 'Blog — Inteligencia Artificial Empresarial y Automatización | Agenticy',
    description:
      'Artículos, casos de estudio y guías sobre agentes de IA empresariales, RAG, automatización de roles e infraestructura 100% local. El conocimiento que tu empresa necesita.',
    keywords: [
      'blog ia empresarial',
      'artículos automatización',
      'casos de estudio ia',
      'guías agentes ia',
      'noticias rag empresarial',
      'tendencias ia local',
      'agenticy blog',
    ],
  },

  docs: {
    title: 'Documentación — Plataforma de Agentes de IA | Agenticy',
    description:
      'Documentación técnica de la plataforma Agenticy: guías de instalación, API reference, configuración de agentes, RAG empresarial y mejores prácticas de infraestructura 100% local.',
    keywords: [
      'documentación agenticy',
      'api agentes ia',
      'guías instalación ia',
      'configuración agentes',
      'rag documentación',
      'manual agenticy',
    ],
  },

  terminos: {
    title: 'Términos y Condiciones | Agenticy',
    description:
      'Términos y condiciones de uso de los servicios de Agenticy, incluyendo agentes de IA empresariales, RAG empresarial e infraestructura 100% local.',
    keywords: [
      'términos y condiciones agenticy',
      'legal ia empresarial',
      'contrato agentes ia',
    ],
  },

  privacidad: {
    title: 'Política de Privacidad | Agenticy',
    description:
      'Política de privacidad de Agenticy. Cómo protegemos tus datos con infraestructura 100% local y sin dependencia de APIs externas. Cumplimiento GDPR y regulaciones locales.',
    keywords: [
      'política de privacidad agenticy',
      'privacidad ia empresarial',
      'protección de datos ia',
      'gdpr ia local',
      'seguridad datos agenticy',
    ],
  },
};

/**
 * Genera el objeto Metadata para una página específica.
 * Diseñado para usarse con la API `generateMetadata` de Next.js App Router.
 *
 * @param slug - Identificador de la página (ej. 'home', 'pricing', 'servicios/agentes-ia')
 * @returns Objeto Metadata compatible con Next.js
 *
 * @example
 * // En app/servicios/agentes-ia/page.tsx:
 * import { generatePageMetadata } from '@/lib/metadata';
 * export const generateMetadata = () => generatePageMetadata('servicios/agentes-ia');
 */
export function generatePageMetadata(slug: PageSlug): Metadata {
  const page = metadataMap[slug] ?? metadataMap.home;
  const canonicalPath = slug === 'home' ? '' : `/${slug}`;

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,

    openGraph: {
      title: page.title,
      description: page.description,
      url: `${baseUrl}${canonicalPath}`,
      siteName: 'Agenticy',
      images: [
        {
          url: page.ogImage ?? defaultOgImage,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
      locale: 'es',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [page.ogImage ?? defaultOgImage],
    },

    alternates: {
      canonical: page.canonical ?? `${baseUrl}${canonicalPath}`,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Retorna los metadatos raw (sin procesar) para uso en componentes
 * que necesiten acceder a title, description o keywords fuera del
 * contexto de Next.js Metadata.
 */
export function getPageMetadata(slug: PageSlug): PageMetadata {
  return metadataMap[slug] ?? metadataMap.home;
}

export default metadataMap;