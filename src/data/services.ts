// ─── Servicios de Agenticy ──────────────────────────────────────────────
// Cada servicio representa una línea de negocio principal.

export interface ServiceFeature {
  text: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceUseCase {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: ServiceFeature[];
  link: string;
  cta: string;
  longDescription: string;
  benefits: ServiceBenefit[];
  useCases: ServiceUseCase[];
}

const services: Service[] = [
  {
    id: 'agentes-ia',
    title: 'Agentes de IA Empresariales',
    subtitle: 'Automatización inteligente con agentes que reemplazan roles completos',
    description:
      'Desplegamos agentes de inteligencia artificial que asumen roles empresariales completos — desde CEO hasta soporte técnico — operando sobre hardware de última tecnología con infraestructura 100% local y sin dependencia de APIs externas. Cada agente se entrena con el conocimiento y los procesos específicos de tu empresa para tomar decisiones, ejecutar tareas y generar resultados medibles desde el primer día.',
    icon: 'BrainCircuit',
    features: [
      { text: 'Reemplazo de roles completos (CEO, CTO, CFO, ingeniería, legal, ventas y más)' },
      { text: 'Infraestructura 100% local — tus datos nunca salen de tus servidores' },
      { text: 'Sin dependencia de APIs externas — operación autónoma y soberana' },
      { text: 'Hardware de última tecnología optimizado para inferencia empresarial' },
      { text: 'Entrenamiento con procesos, documentos y know-how propios de tu empresa' },
      { text: 'Escalabilidad horizontal: añade agentes según crece tu operación' },
      { text: 'Dashboard centralizado de monitoreo y analíticas de desempeño' },
      { text: 'Actualizaciones continuas del modelo base y mejoras de razonamiento' },
    ],
    link: '/servicios/agentes-ia',
    cta: 'Solicitar demo',
    longDescription:
      'Los Agentes de IA Empresariales de Agenticy representan la evolución definitiva de la automatización corporativa. No se trata de chatbots ni asistentes limitados: son entidades de software autónomas que razonan, deciden y ejecutan tareas complejas con la profundidad de un ejecutivo experimentado. Cada agente se despliega sobre hardware de última tecnología en tu propia infraestructura 100% local, operando sin depender de APIs externas. El resultado es una fuerza laboral digital que trabaja 24/7, escala instantáneamente y acumula conocimiento institucional con cada interacción.',
    benefits: [
      {
        title: 'Soberanía total de datos',
        description: 'Toda la operación corre en hardware de última tecnología dentro de tus instalaciones. Sin nubes públicas, sin APIs externas, sin exposición de información sensible.',
      },
      {
        title: 'Reducción de costos operativos',
        description: 'Los agentes asumen tareas que antes requerían equipos completos, reduciendo costos laborales sin sacrificar calidad ni velocidad de ejecución.',
      },
      {
        title: 'Escalabilidad instantánea',
        description: 'Añade capacidad de procesamiento en minutos, no en meses. Escala horizontalmente según la demanda sin procesos de contratación.',
      },
      {
        title: 'Consistencia y precisión',
        description: 'Los agentes ejecutan procesos con precisión milimétrica, eliminando errores humanos y manteniendo estándares de calidad uniformes.',
      },
    ],
    useCases: [
      {
        title: 'CEO Agent — Dirección Estratégica',
        description: 'Análisis de mercado en tiempo real, proyecciones financieras, evaluación de oportunidades de inversión y priorización de iniciativas estratégicas basadas en datos.',
      },
      {
        title: 'Legal Agent — Cumplimiento y Contratos',
        description: 'Revisión automatizada de contratos, detección de cláusulas de riesgo, monitoreo de cambios regulatorios y generación de documentación legal estándar.',
      },
      {
        title: 'Sales Agent — Fuerza de Ventas Digital',
        description: 'Calificación automática de leads, personalización de propuestas, seguimiento de pipeline y análisis predictivo de cierre de oportunidades.',
      },
    ],
  },
  {
    id: 'rag-empresarial',
    title: 'RAG Empresarial',
    subtitle: 'Tu conocimiento empresarial, indexado y accesible en tiempo real',
    description:
      'Convierte décadas de documentación, contratos, manuales, correos y conocimiento tácito en una base de conocimiento vectorial que tus agentes —y tu equipo— consultan en lenguaje natural. Nuestro sistema RAG (Retrieval-Augmented Generation) corre sobre hardware de última tecnología con infraestructura 100% local, sin dependencia de APIs externas, garantizando que tu propiedad intelectual permanezca protegida.',
    icon: 'Database',
    features: [
      { text: 'Indexación de documentos, PDFs, correos, wikis, contratos y bases de datos' },
      { text: 'Consultas en lenguaje natural con respuestas contextualizadas al instante' },
      { text: 'Infraestructura 100% local — sin dependencia de APIs externas' },
      { text: 'Hardware de última tecnología para indexación y recuperación de baja latencia' },
      { text: 'Chunking inteligente con preservación de contexto semántico' },
      { text: 'Integración nativa con los agentes de IA empresariales de Agenticy' },
      { text: 'Control de acceso granular por rol, departamento y nivel de sensibilidad' },
      { text: 'Actualización incremental: nuevo conocimiento disponible en minutos' },
    ],
    link: '/servicios/rag-empresarial',
    cta: 'Agendar consultoría',
    longDescription:
      'El RAG Empresarial de Agenticy transforma el conocimiento acumulado de tu organización —documentos, manuales, contratos, correos, wikis, presentaciones y bases de datos— en un motor de inteligencia consultable en lenguaje natural. A diferencia de las soluciones cloud, nuestro sistema opera 100% sobre hardware de última tecnología en tu infraestructura local, sin depender de APIs externas. Esto significa que tu propiedad intelectual nunca abandona tus servidores, mientras obtienes respuestas precisas y contextualizadas en milisegundos.',
    benefits: [
      {
        title: 'Conocimiento institucional accesible',
        description: 'Décadas de documentación se vuelven consultables al instante. Nuevos empleados y agentes acceden al know-how acumulado sin depender de la memoria organizacional.',
      },
      {
        title: 'Latencia ultrabaja',
        description: 'Al operar sobre hardware de última tecnología con infraestructura 100% local, las consultas se resuelven en milisegundos sin depender de conexiones externas.',
      },
      {
        title: 'Seguridad de grado empresarial',
        description: 'Control de acceso granular por rol, departamento y nivel de sensibilidad. Cada consulta se audita y se registra para cumplimiento normativo.',
      },
      {
        title: 'Integración nativa con agentes',
        description: 'El motor RAG alimenta a los agentes de IA de Agenticy, permitiéndoles tomar decisiones informadas basadas en el conocimiento real de tu empresa.',
      },
    ],
    useCases: [
      {
        title: 'Onboarding acelerado',
        description: 'Nuevos colaboradores consultan políticas, procedimientos y conocimientos técnicos en lenguaje natural, reduciendo el tiempo de ramp-up de meses a días.',
      },
      {
        title: 'Soporte técnico autónomo',
        description: 'El RAG indexa manuales técnicos, tickets históricos y documentación de productos para resolver incidencias sin intervención humana en el 80% de los casos.',
      },
      {
        title: 'Due diligence instantáneo',
        description: 'Auditores y equipos legales obtienen respuestas precisas sobre contratos, obligaciones y riesgos en segundos, no en semanas de revisión manual.',
      },
    ],
  },
  {
    id: 'servicios-globales',
    title: 'Servicios Globales',
    subtitle: 'Vamos a tu país, implementamos en tus oficinas',
    description:
      'Agenticy opera sin fronteras. Nuestro equipo de ingenieros viaja a cualquier país para realizar la implementación física del hardware de última tecnología en las oficinas de tu empresa. Instalamos los servidores, configuramos la infraestructura 100% local, desplegamos los agentes y capacitamos a tu equipo in-situ. Todo el proceso —desde la llegada hasta la puesta en producción— ocurre dentro de tus instalaciones, sin dependencia de APIs externas ni proveedores cloud.',
    icon: 'Globe',
    features: [
      { text: 'Despliegue presencial en cualquier país — llevamos el hardware a tus oficinas' },
      { text: 'Instalación y configuración completa de infraestructura 100% local' },
      { text: 'Hardware de última tecnología dimensionado para tu volumen operativo' },
      { text: 'Sin dependencia de APIs externas ni conexiones a la nube' },
      { text: 'Pruebas de aceptación en sitio con tus datos y procesos reales' },
      { text: 'Plan de continuidad operativa y redundancia geográfica' },
      { text: 'Soporte remoto post-implementación con SLAs garantizados' },
      { text: 'Cumplimiento normativo local verificado antes del go-live' },
    ],
    link: '/servicios/servicios-globales',
    cta: 'Solicitar cotización',
    longDescription:
      'Agenticy elimina las barreras geográficas de la adopción de IA empresarial. Nuestro equipo de ingenieros especializados viaja a cualquier país del mundo para implementar físicamente el hardware de última tecnología en las oficinas de tu empresa. Desde la llegada del equipo hasta la puesta en producción, todo el proceso ocurre dentro de tus instalaciones, con infraestructura 100% local y sin dependencia de APIs externas. Instalamos, configuramos, validamos y transferimos conocimiento — todo en sitio.',
    benefits: [
      {
        title: 'Implementación llave en mano',
        description: 'Llegamos con el hardware de última tecnología, lo instalamos en tus oficinas, configuramos todo el stack y lo dejamos operando. Tú solo recibes el resultado.',
      },
      {
        title: 'Cumplimiento normativo garantizado',
        description: 'Verificamos el cumplimiento de regulaciones locales antes del go-live. Tus datos permanecen dentro de la jurisdicción que elijas, sin exposición transfronteriza.',
      },
      {
        title: 'Transferencia de conocimiento in-situ',
        description: 'Tu equipo aprende operando la infraestructura real durante la implementación. No dependes de documentación abstracta ni soporte remoto para arrancar.',
      },
      {
        title: 'Soporte continuo post-implementación',
        description: 'Una vez en producción, mantenemos SLAs garantizados con soporte remoto prioritario. Si se requiere intervención física, enviamos ingenieros nuevamente.',
      },
    ],
    useCases: [
      {
        title: 'Expansión multinacional',
        description: 'Empresas con operaciones en múltiples países despliegan infraestructura de IA estandarizada en cada oficina, cumpliendo regulaciones locales en cada jurisdicción.',
      },
      {
        title: 'Sectores regulados',
        description: 'Banca, seguros, salud y gobierno implementan IA empresarial cumpliendo con requisitos de residencia de datos y auditoría local desde el día uno.',
      },
      {
        title: 'Ubicaciones remotas',
        description: 'Operaciones mineras, petroleras o agrícolas en zonas con conectividad limitada obtienen IA 100% local que opera sin depender de internet ni cloud.',
      },
    ],
  },
  {
    id: 'capacitacion',
    title: 'Capacitación Presencial',
    subtitle: 'Tu equipo aprende a dominar los agentes de IA',
    description:
      'La mejor infraestructura de IA no sirve si tu equipo no sabe aprovecharla. Nuestros programas de capacitación presencial transforman a tus colaboradores en power users de los agentes Agenticy. Desde fundamentos de IA generativa hasta configuración avanzada de flujos de trabajo autónomos, cada sesión se diseña a la medida de los roles y procesos de tu empresa. Todo el entrenamiento ocurre sobre tu propia infraestructura 100% local con hardware de última tecnología.',
    icon: 'GraduationCap',
    features: [
      { text: 'Programas diseñados por rol: directivos, operadores, técnicos y analistas' },
      { text: 'Entrenamiento hands-on sobre tu propia infraestructura 100% local' },
      { text: 'Hardware de última tecnología disponible para prácticas sin riesgos' },
      { text: 'Módulos progresivos: fundamentos → configuración → automatización avanzada' },
      { text: 'Certificación Agenticy para operadores y administradores de agentes' },
      { text: 'Playbooks y manuales de referencia actualizados con cada versión' },
      { text: 'Simulaciones con escenarios reales de tu industria y operación' },
      { text: 'Soporte post-capacitación: canal dedicado para dudas durante 90 días' },
    ],
    link: '/servicios/capacitacion',
    cta: 'Ver programas',
    longDescription:
      'Los programas de Capacitación Presencial de Agenticy convierten a tu equipo en expertos en la operación y administración de agentes de IA empresariales. No se trata de cursos teóricos: cada sesión es hands-on, sobre tu propia infraestructura 100% local con hardware de última tecnología, utilizando tus datos y procesos reales. Diseñamos el programa a la medida de los roles específicos de tu organización — desde directivos que necesitan entender el potencial estratégico hasta operadores que configuran flujos de trabajo autónomos.',
    benefits: [
      {
        title: 'Adopción acelerada',
        description: 'Tu equipo opera los agentes con confianza desde la primera semana post-capacitación, eliminando la curva de aprendizaje que frena el retorno de inversión.',
      },
      {
        title: 'Entrenamiento contextualizado',
        description: 'Cada ejercicio y simulación utiliza datos, procesos y escenarios reales de tu empresa. Lo que se aprende se aplica inmediatamente.',
      },
      {
        title: 'Certificación oficial',
        description: 'Los participantes obtienen la certificación Agenticy que acredita su competencia como operadores y administradores de agentes de IA empresariales.',
      },
      {
        title: 'Soporte extendido',
        description: 'Después de la capacitación, tu equipo cuenta con un canal dedicado de soporte durante 90 días para resolver dudas que surjan en la operación real.',
      },
    ],
    useCases: [
      {
        title: 'Transformación digital corporativa',
        description: 'Empresas que migran de procesos manuales a operaciones autónomas con agentes necesitan que cada departamento domine las nuevas herramientas desde el inicio.',
      },
      {
        title: 'Nuevas implementaciones',
        description: 'Al desplegar agentes de IA por primera vez, la capacitación in-situ asegura que el equipo esté listo para operar desde el momento del go-live.',
      },
      {
        title: 'Actualización de competencias',
        description: 'Equipos que ya operan agentes reciben capacitación avanzada sobre nuevas funcionalidades, optimización de flujos y administración de infraestructura.',
      },
    ],
  },
];

export default services;