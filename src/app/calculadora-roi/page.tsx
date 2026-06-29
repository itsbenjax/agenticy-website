"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ROIPage() {
  const [form, setForm] = useState({ empleados: 50, salarioPromedio: 45000, horasAutomatizables: 25, tipoServicio: "agentes" as "agentes" | "rag" | "completo" });
  const [result, setResult] = useState<{ ahorroAnual: number; costoImplementacion: number; roi: number; paybackMeses: number } | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); } }); }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const calc = () => {
    const { empleados, salarioPromedio, horasAutomatizables, tipoServicio } = form;
    const ahorro = empleados * salarioPromedio * (horasAutomatizables / 40) * 0.7;
    const costos: Record<string, number> = { agentes: 2000, rag: 3500, completo: 5000 };
    const costo = empleados * costos[tipoServicio];
    const roi = ((ahorro - costo) / costo) * 100;
    setResult({ ahorroAnual: Math.round(ahorro), costoImplementacion: Math.round(costo), roi: Math.round(roi), paybackMeses: Math.round((costo / (ahorro / 12)) * 10) / 10 });
    setTimeout(() => document.getElementById("resultados")?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  const fmt = (n: number) => new Intl.NumberFormat("es-CL", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <>
      <Header />
      <main>
        <section className="relative section-emerald pt-32 pb-16 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-light font-medium mb-4 reveal">Calculadora</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 reveal text-txt-inv">Calcula tu <span className="gradient-text">ROI</span></h1>
            <p className="text-lg text-txt-inv-2 max-w-2xl mx-auto reveal">Descubre cuánto puede ahorrar tu empresa con agentes de IA empresariales.</p>
          </div>
        </section>
        <section className="relative bg-ink py-24">
          <div className="max-w-3xl mx-auto px-6">
            <div className="glass-card p-8 md:p-12 reveal">
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div><label className="block text-sm font-medium text-txt-inv mb-2">Empleados</label><input type="range" min={1} max={10000} value={form.empleados} onChange={e => setForm({...form, empleados: +e.target.value})} className="w-full accent-accent" /><div className="text-2xl font-bold font-mono text-accent mt-1">{form.empleados}</div></div>
                <div><label className="block text-sm font-medium text-txt-inv mb-2">Salario anual (USD)</label><input type="range" min={10000} max={200000} step={5000} value={form.salarioPromedio} onChange={e => setForm({...form, salarioPromedio: +e.target.value})} className="w-full accent-accent" /><div className="text-2xl font-bold font-mono text-accent mt-1">{fmt(form.salarioPromedio)}</div></div>
              </div>
              <div className="mb-8"><label className="block text-sm font-medium text-txt-inv mb-2">Horas automatizables/semana</label><input type="range" min={1} max={40} value={form.horasAutomatizables} onChange={e => setForm({...form, horasAutomatizables: +e.target.value})} className="w-full accent-accent" /><div className="text-2xl font-bold font-mono text-accent mt-1">{form.horasAutomatizables}h</div></div>
              <div className="mb-8">
                <label className="block text-sm font-medium text-txt-inv mb-3">Tipo de servicio</label>
                <div className="grid grid-cols-3 gap-3">
                  {([{v:"agentes",l:"Agentes IA",d:"Automatización"},{v:"rag",l:"Agentes + RAG",d:"Con conocimiento"},{v:"completo",l:"Completo",d:"Solución total"}] as const).map(o => (
                    <button key={o.v} onClick={() => setForm({...form, tipoServicio: o.v})} className={`p-4 rounded-xl text-center transition-all ${form.tipoServicio===o.v?"bg-accent/20 border border-accent/50 text-txt-inv":"bg-white/5 border border-white/5 text-txt-inv-2 hover:border-white/10"}`}><div className="text-sm font-medium">{o.l}</div><div className="text-xs opacity-60 mt-1">{o.d}</div></button>
                  ))}
                </div>
              </div>
              <button onClick={calc} className="w-full py-4 bg-accent/90 hover:bg-accent text-white font-medium rounded-xl transition-all shadow-lg shadow-accent/25">Calcular ROI</button>
            </div>
            {result && (
              <div id="resultados" className="mt-12 reveal">
                <div className="glass p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-txt-inv mb-8 text-center">Resultados <span className="text-accent">estimados</span></h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[{l:"Ahorro Anual",v:fmt(result.ahorroAnual),i:"💰"},{l:"Inversión",v:fmt(result.costoImplementacion),i:"📊"},{l:"ROI",v:`${result.roi}%`,i:"📈"},{l:"Payback",v:`${result.paybackMeses} meses`,i:"⏱️"}].map((item,i) => (
                      <div key={i} className="text-center p-6 glass-card"><div className="text-3xl mb-2">{item.i}</div><div className="text-xs text-txt-inv-2 mb-1">{item.l}</div><div className="text-2xl font-bold font-mono text-accent">{item.v}</div></div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}