# 🚀 Agenticy.io — Deploy Completo

## Resumen
Sitio web multi-página para **Agenticy**, empresa de agentes de IA empresariales con infraestructura 100% local.

## Stack
- **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS**
- **Framer Motion** para animaciones
- **Zod** para validación de API
- **Desplegado en Vercel** con CI/CD automático desde GitHub

## Páginas (13 rutas)

| Ruta | Descripción |
|------|-------------|
| `/` | Homepage con Hero, Stats animados, Servicios, Roles, Proceso, Hardware, Contacto |
| `/soluciones/agentes-ia` | Agentes de IA Empresariales |
| `/soluciones/rag-empresarial` | RAG Empresarial |
| `/soluciones/servicios-globales` | Servicios Globales Presenciales |
| `/soluciones/capacitacion` | Capacitación Presencial |
| `/pricing` | 4 Tiers (Starter/Professional/Enterprise/Custom) + FAQ |
| `/calculadora-roi` | Calculadora interactiva con sliders + resultados |
| `/roles` | 32 roles reemplazables con filtros por categoría |
| `/privacidad` | Política de Privacidad |
| `/terminos` | Términos y Condiciones |
| `/api/contact` | Endpoint POST con Zod + rate limiting |
| `/api/roi` | Endpoint POST para cálculo de ROI |
| `/sitemap.xml` + `/robots.txt` | SEO técnico |

## Diseño

- **Liquid Glass:** `backdrop-filter: blur()` + saturate + inset highlights en cards y header
- **Per-section gradients:** Violeta, Cyan, Emerald, Ámbar, Blanco alternándose
- **On-scroll reveal:** IntersectionObserver con delays staggered
- **Contadores animados:** ease-out-cubic en métricas
- **Spotlight cards:** Mouse-tracking radial gradient glow
- **Floating orbs:** CSS keyframes en backgrounds
- **Responsive:** Mobile-first con hamburger menu + glass-dark header

## API Backend

- `POST /api/contact` — Validación Zod (nombre, email, empresa, mensaje) + rate limit 10/min
- `POST /api/roi` — Cálculo: ahorro = empleados × salario × horas × 70% eficiencia

## SEO

- JSON-LD `Organization` en `<head>`
- Open Graph + Twitter Cards en todas las páginas
- Sitemap dinámico con prioridades
- Keywords optimizados: "agentes ia empresarial", "rag empresarial", "ia 100% local", "hardware última tecnología"
- Canonical URLs

## Build

```
✓ Compiled successfully
✓ TypeScript finished (4.8s)
✓ 15/15 static pages generated
13 routes (11 static + 2 dynamic APIs)
```

## Deploy

- **Vercel:** [agenticy-website.vercel.app](https://agenticy-website.vercel.app)
- **GitHub:** [github.com/itsbenjax/agenticy-website](https://github.com/itsbenjax/agenticy-website)
- **Auto-deploy:** Push a `main` → deploy automático en Vercel
