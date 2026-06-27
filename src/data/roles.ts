// ─── Roles reemplazables por agentes Agenticy ─────────────────────────
// Cada rol es un ejemplo. Agenticy puede asumir CUALQUIER rol que el
// cliente necesite — esta lista es ilustrativa, no exhaustiva.

export type RoleCategory =
  | 'Dirección Ejecutiva'
  | 'Tecnología'
  | 'Finanzas y Legal'
  | 'Gestión de Proyectos'
  | 'Marketing y Ventas'
  | 'Recursos Humanos'
  | 'Operaciones y Cadena de Suministro'
  | 'Diseño y Producto'
  | 'Cumplimiento y Riesgo'
  | 'Ciberseguridad y Soporte';

export interface Role {
  id: string;
  title: string;
  category: RoleCategory;
  description: string;
}

const roles: Role[] = [
  // ── Dirección Ejecutiva ──────────────────────────────────────────
  {
    id: 'ceo',
    title: 'CEO',
    category: 'Dirección Ejecutiva',
    description:
      'Toma decisiones estratégicas basadas en datos, analiza escenarios de mercado en tiempo real y coordina la ejecución cross-funcional de la visión empresarial.',
  },
  {
    id: 'cto',
    title: 'CTO',
    category: 'Dirección Ejecutiva',
    description:
      'Define la arquitectura tecnológica, evalúa stacks, lidera la innovación y garantiza que la infraestructura 100% local cumpla con los objetivos de negocio.',
  },
  {
    id: 'cfo',
    title: 'CFO',
    category: 'Dirección Ejecutiva',
    description:
      'Gestiona flujos de caja, proyecciones financieras, cumplimiento fiscal y optimización de costos operativos con visibilidad en tiempo real.',
  },

  // ── Tecnología ───────────────────────────────────────────────────
  {
    id: 'ingeniero-software',
    title: 'Ingeniero de Software',
    category: 'Tecnología',
    description:
      'Escribe, revisa y despliega código de producción. Domina múltiples lenguajes y frameworks, con capacidad de integrar sistemas legacy mediante APIs.',
  },
  {
    id: 'devops',
    title: 'DevOps',
    category: 'Tecnología',
    description:
      'Automatiza pipelines CI/CD, gestiona infraestructura como código y monitorea la salud de los servicios en producción 24/7.',
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    category: 'Tecnología',
    description:
      'Extrae insights de grandes volúmenes de datos, entrena modelos predictivos y comunica hallazgos a stakeholders no técnicos.',
  },
  {
    id: 'qa-engineer',
    title: 'QA Engineer',
    category: 'Tecnología',
    description:
      'Diseña y ejecuta planes de prueba, automatiza tests de regresión y garantiza la calidad del software antes de cada release.',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    category: 'Ciberseguridad y Soporte',
    description:
      'Monitorea amenazas, implementa políticas de seguridad zero-trust, responde a incidentes y asegura el cumplimiento de normativas de protección de datos.',
  },
  {
    id: 'it-support',
    title: 'IT Support',
    category: 'Ciberseguridad y Soporte',
    description:
      'Resuelve tickets de soporte técnico, gestiona accesos y permisos, y mantiene la infraestructura de hardware de última tecnología operando sin interrupciones.',
  },

  // ── Finanzas y Legal ─────────────────────────────────────────────
  {
    id: 'abogado',
    title: 'Abogado',
    category: 'Finanzas y Legal',
    description:
      'Redacta y revisa contratos, analiza riesgos legales, investiga jurisprudencia y asegura el cumplimiento normativo en cada jurisdicción donde opera la empresa.',
  },
  {
    id: 'contador',
    title: 'Contador',
    category: 'Finanzas y Legal',
    description:
      'Gestiona la contabilidad general, conciliaciones bancarias, cierres mensuales y anuales, y preparación de estados financieros bajo NIIF.',
  },
  {
    id: 'financial-analyst',
    title: 'Financial Analyst',
    category: 'Finanzas y Legal',
    description:
      'Construye modelos financieros, evalúa oportunidades de inversión, realiza due diligence y elabora reportes para el board directivo.',
  },
  {
    id: 'compliance-officer',
    title: 'Compliance Officer',
    category: 'Cumplimiento y Riesgo',
    description:
      'Diseña y monitorea programas de cumplimiento normativo, gestiona auditorías internas y asegura la adhesión a regulaciones locales e internacionales.',
  },

  // ── Gestión de Proyectos ─────────────────────────────────────────
  {
    id: 'project-manager',
    title: 'Project Manager',
    category: 'Gestión de Proyectos',
    description:
      'Planifica, ejecuta y cierra proyectos complejos multi-stakeholder. Gestiona cronogramas, presupuestos, riesgos y comunicaciones.',
  },
  {
    id: 'scrum-master',
    title: 'Scrum Master',
    category: 'Gestión de Proyectos',
    description:
      'Facilita ceremonias ágiles, elimina impedimentos, promueve la mejora continua y asegura que el equipo siga los principios Scrum.',
  },
  {
    id: 'business-analyst',
    title: 'Business Analyst',
    category: 'Gestión de Proyectos',
    description:
      'Traduce necesidades de negocio en requerimientos funcionales, modela procesos y actúa como puente entre stakeholders y equipos técnicos.',
  },

  // ── Marketing y Ventas ───────────────────────────────────────────
  {
    id: 'marketing-manager',
    title: 'Marketing Manager',
    category: 'Marketing y Ventas',
    description:
      'Diseña y ejecuta estrategias de marketing digital, gestiona presupuestos de campañas y analiza métricas de adquisición y retención.',
  },
  {
    id: 'sales-director',
    title: 'Sales Director',
    category: 'Marketing y Ventas',
    description:
      'Lidera el pipeline comercial, define estrategias de go-to-market, negocia contratos enterprise y gestiona relaciones con cuentas clave.',
  },
  {
    id: 'customer-success',
    title: 'Customer Success',
    category: 'Marketing y Ventas',
    description:
      'Asegura la adopción y retención de clientes, gestiona renovaciones, identifica oportunidades de upsell y actúa como voz del cliente internamente.',
  },

  // ── Recursos Humanos ─────────────────────────────────────────────
  {
    id: 'hr-manager',
    title: 'HR Manager',
    category: 'Recursos Humanos',
    description:
      'Gestiona el ciclo de vida del colaborador: reclutamiento, onboarding, evaluaciones de desempeño, clima laboral y offboarding.',
  },

  // ── Operaciones y Cadena de Suministro ───────────────────────────
  {
    id: 'operations-manager',
    title: 'Operations Manager',
    category: 'Operaciones y Cadena de Suministro',
    description:
      'Optimiza procesos operativos, gestiona KPIs de producción y asegura la eficiencia de la cadena de valor end-to-end.',
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain',
    category: 'Operaciones y Cadena de Suministro',
    description:
      'Gestiona la cadena de suministro completa: proveedores, inventarios, logística de entrada y salida, y optimización de costos.',
  },
  {
    id: 'procurement',
    title: 'Procurement',
    category: 'Operaciones y Cadena de Suministro',
    description:
      'Gestiona licitaciones, evalúa proveedores, negocia contratos de compra y asegura la calidad y el costo óptimo de los insumos.',
  },
  {
    id: 'logistics',
    title: 'Logistics',
    category: 'Operaciones y Cadena de Suministro',
    description:
      'Coordina el transporte, almacenamiento y distribución de productos, optimizando rutas, costos y tiempos de entrega.',
  },

  // ── Diseño y Producto ────────────────────────────────────────────
  {
    id: 'ux-designer',
    title: 'UX Designer',
    category: 'Diseño y Producto',
    description:
      'Investiga necesidades de usuario, diseña flujos de interacción, crea wireframes y prototipos, y valida soluciones con pruebas de usabilidad.',
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    category: 'Diseño y Producto',
    description:
      'Define la visión y estrategia de producto, prioriza el backlog, coordina lanzamientos y mide el impacto de cada funcionalidad.',
  },

  // ── Cumplimiento y Riesgo ────────────────────────────────────────
  {
    id: 'risk-analyst',
    title: 'Risk Analyst',
    category: 'Cumplimiento y Riesgo',
    description:
      'Identifica, cuantifica y monitorea riesgos financieros, operacionales y reputacionales. Diseña estrategias de mitigación y planes de contingencia.',
  },

  // ── Innovación y Comunicación Técnica ────────────────────────────
  {
    id: 'rd-director',
    title: 'R&D Director',
    category: 'Tecnología',
    description:
      'Lidera la agenda de investigación y desarrollo, gestiona el portafolio de propiedad intelectual y conecta la innovación con los objetivos de negocio.',
  },
  {
    id: 'innovation-manager',
    title: 'Innovation Manager',
    category: 'Tecnología',
    description:
      'Identifica tecnologías emergentes, gestiona programas de innovación abierta y acelera la adopción de soluciones disruptivas dentro de la organización.',
  },
  {
    id: 'technical-writer',
    title: 'Technical Writer',
    category: 'Tecnología',
    description:
      'Produce documentación técnica clara y precisa: manuales de usuario, documentación de API, guías de onboarding y runbooks operativos.',
  },
];

export default roles;