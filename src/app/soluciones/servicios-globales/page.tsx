'use client';

import Link from 'next/link';
import { useState } from 'react';
import services from '@/data/services';
import { GlassCard, SectionHeading, RevealWrapper } from '@/components/ui';

const service = services.find((s) => s.id === 'servicios-globales')!;

const icons: Record<string, React.ReactNode> = {
  Globe: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  Shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  ),
  CheckCircle: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ),
  ChevronRight: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  ),
  ArrowRight: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  Target: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  ),
};

const gradientSection = 'section-gradient-amber';
const orbColor = 'orb orb-amber';
const accentText = 'text-accent-amber';
const accentBg = 'bg-accent-amber';

export default function ServiciosGlobalesPage() {
  const [formState, setFormState] = useState({ name: '', email: '', empresa: '', mensaje: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col bg-paper">
      {/* Breadcrumb */}
      <nav className="border-b border-zinc-200/60 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="hover:text-txt-1 transition-colors">Inicio</Link>
          {icons.ChevronRight}
          <Link href="/soluciones" className="hover:text-txt-1 transition-colors">Soluciones</Link>
          {icons.ChevronRight}
          <span className="text-txt-1 font-medium">{service.title}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className={`${gradientSection} relative overflow-hidden`}>
        <div className={`${orbColor} w-[500px] h-[500px] -top-40 -right-40 animate-float`} />
        <div className={`${orbColor} w-[350px] h-[350px] -bottom-20 -left-20 animate-float-delayed`} />
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 relative z-10">
          <RevealWrapper delay={1}>
            <p className={`text-sm font-semibold tracking-[0.2em] uppercase mb-3 ${accentText}`}>{service.subtitle}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-txt-1 leading-[1.1]">{service.title}</h1>
          </RevealWrapper>
          <RevealWrapper delay={2}>
            <p className="mt-8 text-lg lg:text-xl text-zinc-600 max-w-3xl leading-relaxed">{service.longDescription}</p>
          </RevealWrapper>
          <RevealWrapper delay={3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contacto" className={`inline-flex items-center gap-2 px-8 py-4 ${accentBg} text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg`}>
                {service.cta}{icons.ArrowRight}
              </Link>
              <Link href="#features" className="inline-flex items-center gap-2 px-8 py-4 border border-zinc-300 text-txt-1 font-semibold rounded-full hover:bg-zinc-50 transition-colors">
                Explorar funcionalidades
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section-gradient-offwhite py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <RevealWrapper delay={1}>
            <SectionHeading eyebrow="Funcionalidades" title={`Todo lo que incluye ${service.title}`} />
          </RevealWrapper>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, i) => (
              <RevealWrapper key={i} delay={i < 4 ? i + 1 : undefined}>
                <GlassCard hover className="p-6 h-full">
                  <div className={`w-10 h-10 rounded-xl bg-accent-amber/10 flex items-center justify-center mb-4 ${accentText}`}>{icons.Globe}</div>
                  <p className="text-sm text-zinc-700 leading-relaxed">{feature.text}</p>
                </GlassCard>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-gradient-paper py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <RevealWrapper delay={1}>
            <SectionHeading eyebrow="Beneficios" title="Ventajas competitivas" />
          </RevealWrapper>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, i) => (
              <RevealWrapper key={i} delay={i < 4 ? i + 1 : undefined}>
                <GlassCard hover className="p-8 h-full">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 mt-1 ${accentText}`}>{icons.Shield}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-txt-1 mb-2">{benefit.title}</h3>
                      <p className="text-zinc-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className={`${gradientSection} py-24 lg:py-32 relative overflow-hidden`}>
        <div className={`${orbColor} w-[400px] h-[400px] -top-20 right-[-100px] animate-float-delayed`} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <RevealWrapper delay={1}>
            <SectionHeading eyebrow="Casos de Uso" title="Aplicaciones reales en tu empresa" />
          </RevealWrapper>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.useCases.map((useCase, i) => (
              <RevealWrapper key={i} delay={i < 3 ? i + 1 : undefined}>
                <GlassCard hover className="p-8 h-full">
                  <div className={`w-10 h-10 rounded-full bg-accent-amber/10 flex items-center justify-center mb-4 ${accentText}`}>{icons.Target}</div>
                  <h3 className="text-lg font-semibold text-txt-1 mb-3">{useCase.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{useCase.description}</p>
                </GlassCard>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Contact Form */}
      <section className="bg-ink py-24 lg:py-32 relative overflow-hidden">
        <div className="orb orb-accent w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <RevealWrapper delay={1}>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-3 text-center text-accent">Comienza hoy</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-txt-inv text-center leading-[1.1]">
              Llevamos Agenticy a las oficinas de tu empresa
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={2}>
            <p className="mt-6 text-lg text-txt-inv-2 text-center max-w-2xl mx-auto">
              Solicita una cotización personalizada. Nuestro equipo de ingenieros está listo para viajar a tu país.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={3}>
            <div className="mt-12 max-w-xl mx-auto">
              {submitted ? (
                <GlassCard dark className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4 text-emerald-400">{icons.CheckCircle}</div>
                  <h3 className="text-xl font-semibold text-txt-inv mb-2">¡Solicitud enviada!</h3>
                  <p className="text-txt-inv-2">Gracias por tu interés. Te contactaremos pronto.</p>
                </GlassCard>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="text" placeholder="Nombre completo" value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })} required
                    className="w-full px-5 py-4 bg-white/10 border border-white/15 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/30 transition-colors" />
                  <input type="email" placeholder="Correo electrónico" value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })} required
                    className="w-full px-5 py-4 bg-white/10 border border-white/15 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/30 transition-colors" />
                  <input type="text" placeholder="Empresa" value={formState.empresa}
                    onChange={(e) => setFormState({ ...formState, empresa: e.target.value })} required
                    className="w-full px-5 py-4 bg-white/10 border border-white/15 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/30 transition-colors" />
                  <textarea placeholder="Cuéntanos sobre tu proyecto..." rows={4} value={formState.mensaje}
                    onChange={(e) => setFormState({ ...formState, mensaje: e.target.value })} required
                    className="w-full px-5 py-4 bg-white/10 border border-white/15 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/30 transition-colors resize-none" />
                  <button type="submit"
                    className={`w-full py-4 ${accentBg} text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center gap-2`}>
                    Enviar solicitud {icons.ArrowRight}
                  </button>
                </form>
              )}
            </div>
          </RevealWrapper>
        </div>
      </section>
    </div>
  );
}