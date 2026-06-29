# 🚀 Agenticy.io

**Agentes de IA Empresariales con infraestructura 100% local.** Hardware de última tecnología, sin dependencia de APIs externas.

[![Deploy Status](https://img.shields.io/badge/deploy-Vercel-black?logo=vercel)](https://agenticy-website.vercel.app)
[![Stack](https://img.shields.io/badge/stack-Next.js%2016%20%2B%20TypeScript%20%2B%20Tailwind-black)](https://nextjs.org)

## 🌐 Producción

**[agenticy-website.vercel.app](https://agenticy-website.vercel.app)**

## 📦 Stack

- **Next.js 16** (App Router + Turbopack)
- **TypeScript** estricto
- **Tailwind CSS** con sistema de diseño personalizado
- **Framer Motion** para animaciones
- **Zod** para validación
- **Vercel** para deploy con CI/CD

## 🗺️ Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Homepage (Hero, Stats, Servicios, Roles, Proceso, Hardware, Contacto) |
| `/soluciones/agentes-ia` | Agentes de IA Empresariales |
| `/soluciones/rag-empresarial` | RAG Empresarial |
| `/soluciones/servicios-globales` | Servicios Globales Presenciales |
| `/soluciones/capacitacion` | Capacitación Presencial |
| `/pricing` | 4 Tiers + FAQ |
| `/calculadora-roi` | Calculadora interactiva |
| `/roles` | 32 roles con filtros |
| `/privacidad` | Política de Privacidad |
| `/terminos` | Términos y Condiciones |
| `/api/contact` | POST — Formulario de contacto |
| `/api/roi` | POST — Cálculo de ROI |

## 🎨 Diseño

- **Liquid Glass:** `backdrop-filter: blur(22px)` + saturate + inset highlights
- **Per-section gradients:** Violeta, Cyan, Emerald, Ámbar alternándose
- **On-scroll reveal:** IntersectionObserver con delays staggered
- **Contadores animados, spotlight cards, floating orbs**
- **Responsive:** Mobile-first con glass-dark nav

## 🏗️ Desarrollo Local

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Build de producción
npm run lint       # ESLint
```

## 📂 Estructura

```
src/
├── app/                    # App Router (13 rutas + APIs)
│   ├── api/contact/        # POST /api/contact
│   ├── api/roi/            # POST /api/roi
│   ├── soluciones/         # 4 páginas de servicio
│   ├── pricing/            # Precios + FAQ
│   ├── calculadora-roi/    # Calculadora interactiva
│   ├── roles/              # 32 roles reemplazables
│   ├── privacidad/         # Política de privacidad
│   ├── terminos/           # Términos y condiciones
│   ├── layout.tsx          # Root layout + SEO
│   └── page.tsx            # Homepage
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # ContactForm, SolutionPage
│   └── ui/                 # GlassCard, GlassButton, SectionHeading, etc.
├── data/                   # services, roles, pricing, faq, navigation
└── lib/                    # validators, rate-limit, metadata, ROI calc
```

## 🚀 Deploy

Push a `main` dispara deploy automático en Vercel. Build time: ~42s.
