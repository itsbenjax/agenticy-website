"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import pricingTiers from "@/data/pricing";
import faqs from "@/data/faq";

function fmtPrice(n: number | null) {
  if (n === null) return "Personalizado";
  return new Intl.NumberFormat("es-CL", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

export default function PricingPage() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { entry.target.classList.add("in-view"); io.unobserve(entry.target); }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="relative section-violet pt-32 pb-16 overflow-hidden">
          <div className="orb orb-accent absolute -top-20 right-0 opacity-20" style={{ filter: "blur(100px)" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-violet-light font-medium mb-4 reveal">Pricing</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 reveal text-txt-inv">Inversión <span className="gradient-text">transparente</span></h1>
            <p className="text-lg text-txt-inv-2 max-w-2xl mx-auto reveal">Planes diseñados para empresas de todos los tamaños. Sin costos ocultos, sin dependencia de APIs externas. Todo incluido.</p>
          </div>
        </section>
        <section className="relative bg-ink py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingTiers.map((tier, i) => (
                <div key={tier.id} className={`glass-card p-8 flex flex-col reveal ${tier.highlighted ? "ring-1 ring-accent/30 scale-[1.02]" : ""}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                  {tier.highlighted && <span className="self-start px-3 py-1 text-xs font-medium bg-accent/20 text-accent-light rounded-full mb-4">Más popular</span>}
                  <h3 className="text-xl font-semibold text-txt-inv mb-2">{tier.name}</h3>
                  <p className="text-sm text-txt-inv-2 mb-6">{tier.subtitle}</p>
                  <div className="mb-6"><span className="text-4xl font-bold text-txt-inv">{fmtPrice(tier.monthlyPrice)}</span>{tier.monthlyPrice !== null && <span className="text-sm text-txt-inv-2 ml-1">/mes</span>}</div>
                  <Link href="/#contacto" className={`block text-center py-3 px-6 rounded-xl font-medium text-sm transition-all mb-8 ${tier.highlighted ? "bg-accent/90 hover:bg-accent text-white shadow-lg shadow-accent/25" : "bg-white/5 hover:bg-white/10 text-txt-inv border border-white/10"}`}>{tier.cta}</Link>
                  <ul className="space-y-3 flex-1">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-txt-inv-2">
                        <svg className="w-4 h-4 text-emerald mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="relative section-off-white text-txt-1 py-24">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-4 text-center reveal">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center reveal">Preguntas <span className="text-accent">frecuentes</span></h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="glass p-6 reveal cursor-pointer group" style={{ transitionDelay: `${i * 0.05}s` }}>
                  <summary className="font-medium text-txt-1 list-none flex items-center justify-between gap-4">
                    {faq.question}
                    <svg className="w-5 h-5 text-txt-2/40 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <p className="mt-4 text-sm text-txt-2 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="relative section-amber py-24 text-center overflow-hidden">
          <div className="max-w-2xl mx-auto px-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 reveal text-txt-inv">¿Necesitas algo a <span className="text-accent">medida</span>?</h2>
            <p className="text-lg text-txt-inv-2 mb-8 reveal">Conversemos sobre tu caso específico y diseñamos la solución perfecta.</p>
            <Link href="/#contacto" className="inline-flex px-8 py-4 bg-accent/90 hover:bg-accent text-white font-medium rounded-full transition-all shadow-lg shadow-accent/25 reveal">Solicitar demo →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}