"use client";

import { useEffect } from "react";
import Link from "next/link";
import services from "@/data/services";

export default function SolutionPage({
  serviceId,
  accentColor,
  sectionBg,
  orbClass,
}: {
  serviceId: string;
  accentColor: string;
  sectionBg: string;
  orbClass: string;
}) {
  const service = services.find((s) => s.id === serviceId)!;

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const iconMap: Record<string, string> = {
    "agentes-ia": "🤖",
    "rag-empresarial": "🧠",
    "servicios-globales": "🌍",
    "capacitacion": "🎓",
  };

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="border-b border-white/5 bg-ink/80 backdrop-blur-md sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-sm text-txt-inv-2">
          <Link href="/" className="hover:text-txt-inv transition-colors">Inicio</Link>
          <span>/</span>
          <Link href="/#soluciones" className="hover:text-txt-inv transition-colors">Soluciones</Link>
          <span>/</span>
          <span className="text-txt-inv font-medium">{service.title}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className={`relative ${sectionBg} pt-20 pb-16 overflow-hidden`}>
        <div className={`orb ${orbClass} absolute -top-20 -right-20`} />
        <div className="orb orb-accent absolute bottom-0 left-10 opacity-15" style={{ filter: "blur(80px)" }} />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-4 reveal">
              {iconMap[serviceId]} {serviceId.replace(/-/g, " ")}
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 reveal d1 text-txt-inv">
              {service.title}
            </h1>
            <p className="text-lg text-txt-inv-2 leading-relaxed mb-8 reveal d2">
              {service.longDescription}
            </p>
            <div className="flex flex-wrap gap-4 reveal d3">
              <Link href="/#contacto" className="px-8 py-4 bg-accent/90 hover:bg-accent text-white font-medium rounded-full transition-all shadow-lg shadow-accent/25">
                Solicitar demo →
              </Link>
              <Link href="/calculadora-roi" className="px-8 py-4 glass-dark text-txt-inv font-medium rounded-full transition-all hover:border-accent/30">
                Calcular ROI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative bg-ink py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-4 reveal text-center">Funcionalidades</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 reveal text-center text-txt-inv">
            Todo lo que <span className="text-accent">incluye</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <div key={i} className="glass-card p-6 card-spotlight reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-txt-inv leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative section-white text-txt-1 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-4 reveal text-center">Beneficios</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 reveal text-center">
            Ventajas <span className="text-accent">competitivas</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.benefits?.map((benefit, i) => (
              <div key={i} className="glass p-6 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-txt-1 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-txt-2 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative bg-ink py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-4 reveal text-center">Casos de Uso</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 reveal text-center text-txt-inv">
            Aplicaciones <span className="text-accent">reales</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.useCases?.map((useCase, i) => (
              <div key={i} className="glass-card p-8 text-center card-spotlight reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="text-3xl mb-4">
                  {["🎯", "⚡", "🔄", "📊", "✅"][i % 5]}
                </div>
                <h3 className="text-base font-semibold text-txt-inv mb-2">{useCase.title}</h3>
                <p className="text-sm text-txt-inv-2 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-violet py-24 text-center overflow-hidden">
        <div className="orb orb-accent absolute top-0 left-1/2 -translate-x-1/2 opacity-20" style={{ filter: "blur(100px)" }} />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 reveal text-txt-inv">
            ¿Listo para <span className="text-accent">comenzar</span>?
          </h2>
          <p className="text-lg text-txt-inv-2 mb-8 reveal">
            Solicita una demo personalizada y descubre cómo {service.title.toLowerCase()} puede transformar tu empresa.
          </p>
          <Link href="/#contacto" className="inline-flex px-8 py-4 bg-accent/90 hover:bg-accent text-white font-medium rounded-full transition-all shadow-lg shadow-accent/25 reveal">
            Solicitar demo →
          </Link>
        </div>
      </section>
    </div>
  );
}