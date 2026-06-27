// ─── Pricing Tiers de Agenticy ──────────────────────────────────────────
// Cuatro niveles de servicio diseñados para escalar con las necesidades
// de cada organización. Todos los planes operan sobre infraestructura
// 100% local con hardware de última tecnología.

export type PricingInterval = 'monthly' | 'yearly';

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  monthlyPrice: number | null; // null = custom quote ("Conversemos")
  yearlyPrice: number | null;
  currency: string;
  features: PricingFeature[];
  useCases: string[];
  highlighted: boolean;
  cta: string;
}

const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    subtitle: 'Automatización esencial para equipos pequeños',
    monthlyPrice: 2499,
    yearlyPrice: 24990, // ~$2,082/mes
    currency: 'USD',
    features: [
      { text: 'Hasta 5 agentes de IA empresariales', included: true },
      { text: 'Hardware de última tecnología incluido', included: true },
      { text: 'Infraestructura 100% local', included: true },
      { text: 'Sin dependencia de APIs externas', included: true },
      { text: 'Soporte por email en horario laboral', included: true },
      { text: 'Actualizaciones trimestrales del modelo', included: true },
      { text: 'Dashboard básico de monitoreo', included: true },
      { text: 'RAG Empresarial', included: false },
      { text: 'Despliegue in-situ', included: false },
      { text: 'Capacitación presencial', included: false },
      { text: 'Soporte 24/7', included: false },
      { text: 'Agentes ilimitados', included: false },
      { text: 'Integración con sistemas legacy', included: false },
    ],
    useCases: [
      'Startups que inician su viaje de automatización',
      'Departamentos individuales (Finanzas, RRHH, Legal)',
      'Prueba de concepto antes de escalar',
    ],
    highlighted: false,
    cta: 'Comenzar ahora',
  },
  {
    id: 'professional',
    name: 'Professional',
    subtitle: 'Automatización avanzada para empresas en crecimiento',
    monthlyPrice: 7999,
    yearlyPrice: 79990, // ~$6,666/mes
    currency: 'USD',
    features: [
      { text: 'Hasta 20 agentes de IA empresariales', included: true },
      { text: 'Hardware de última tecnología incluido', included: true },
      { text: 'Infraestructura 100% local', included: true },
      { text: 'Sin dependencia de APIs externas', included: true },
      { text: 'RAG Empresarial incluido', included: true },
      { text: 'Soporte prioritario (respuesta < 4 horas)', included: true },
      { text: 'Capacitación inicial incluida (2 días)', included: true },
      { text: 'Actualizaciones mensuales del modelo', included: true },
      { text: 'Dashboard avanzado con analíticas', included: true },
      { text: 'API de integración con herramientas existentes', included: true },
      { text: 'Despliegue in-situ', included: false },
      { text: 'Soporte 24/7', included: false },
      { text: 'Agentes ilimitados', included: false },
      { text: 'Integración con sistemas legacy', included: false },
    ],
    useCases: [
      'PYMES con múltiples departamentos a automatizar',
      'Empresas que requieren RAG sobre su base documental',
      'Organizaciones con necesidades de integración moderadas',
    ],
    highlighted: true,
    cta: 'Elegir Professional',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    subtitle: 'Automatización total para grandes organizaciones',
    monthlyPrice: 19999,
    yearlyPrice: 199990, // ~$16,666/mes
    currency: 'USD',
    features: [
      { text: 'Agentes ilimitados', included: true },
      { text: 'Hardware de última tecnología de alto rendimiento', included: true },
      { text: 'Infraestructura 100% local', included: true },
      { text: 'Sin dependencia de APIs externas', included: true },
      { text: 'RAG Empresarial avanzado con chunking adaptativo', included: true },
      { text: 'Despliegue in-situ por nuestro equipo global', included: true },
      { text: 'Soporte 24/7 con SLA garantizado', included: true },
      { text: 'Capacitación completa in-situ (5+ días)', included: true },
      { text: 'Actualizaciones bajo demanda del modelo', included: true },
      { text: 'Dashboard enterprise con RBAC y auditoría', included: true },
      { text: 'Integración con sistemas legacy', included: true },
      { text: 'Redundancia geográfica y disaster recovery', included: true },
      { text: 'Account Manager dedicado', included: true },
    ],
    useCases: [
      'Corporaciones multinacionales con cientos de roles a automatizar',
      'Industrias reguladas (banca, salud, defensa) que requieren infraestructura 100% local',
      'Organizaciones con requisitos complejos de integración y cumplimiento',
    ],
    highlighted: false,
    cta: 'Hablar con ventas',
  },
  {
    id: 'custom',
    name: 'Custom',
    subtitle: 'Solución totalmente a medida para tu organización',
    monthlyPrice: null,
    yearlyPrice: null,
    currency: 'USD',
    features: [
      { text: 'Agentes ilimitados', included: true },
      { text: 'Hardware de última tecnología configurado a medida', included: true },
      { text: 'Infraestructura 100% local multi-site', included: true },
      { text: 'Sin dependencia de APIs externas', included: true },
      { text: 'RAG Empresarial con fuentes de datos custom', included: true },
      { text: 'Despliegue in-situ global', included: true },
      { text: 'Soporte 24/7 dedicado', included: true },
      { text: 'Capacitación continua y certificación del equipo', included: true },
      { text: 'Modelos fine-tuned para tu industria', included: true },
      { text: 'Desarrollo de agentes custom para roles no estándar', included: true },
      { text: 'Integración total con sistemas legacy y ERPs', included: true },
      { text: 'Redundancia multi-site con failover automático', included: true },
      { text: 'SLAs personalizados y auditorías trimestrales', included: true },
    ],
    useCases: [
      'Gobiernos y entidades públicas con requisitos de soberanía de datos',
      'Empresas Fortune 500 con infraestructura híbrida compleja',
      'Industrias con necesidades altamente especializadas no cubiertas por los tiers estándar',
    ],
    highlighted: false,
    cta: 'Conversemos',
  },
];

export default pricingTiers;