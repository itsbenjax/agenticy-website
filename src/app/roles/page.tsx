"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import roles from "@/data/roles";

export default function RolesPage() {
  const [cat, setCat] = useState("all");
  useEffect(() => {
    const io = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); } }); }, { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  const filtered = cat === "all" ? roles : roles.filter(r => r.category === cat);

  return (
    <>
      <Header />
      <main>
        <section className="relative section-cyan pt-32 pb-16 overflow-hidden">
          <div className="orb orb-accent absolute -top-20 right-0 opacity-20" style={{ filter: "blur(100px)" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-light font-medium mb-4 reveal">Roles</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 reveal text-txt-inv">Creamos agentes para <span className="gradient-text">cualquier rol</span></h1>
            <p className="text-lg text-txt-inv-2 max-w-2xl mx-auto reveal">Estos son solo ejemplos. Si necesitas un rol específico, lo desarrollamos a medida.</p>
          </div>
        </section>
        <section className="relative bg-ink py-8 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-2">
              {(() => {
    const cats = [...new Set(roles.map(r => r.category))];
    return [{v:"all",l:`Todos (${roles.length})`},...cats.map(c => ({v:c,l:`${c} (${roles.filter(r=>r.category===c).length})`}))];
  })().map(b => (
                <button key={b.v} onClick={() => setCat(b.v)} className={`px-4 py-2 text-sm rounded-full transition-all ${cat===b.v?"bg-accent/20 text-accent-light border border-accent/30":"text-txt-inv-2 hover:text-txt-inv border border-transparent hover:border-white/10"}`}>{b.l}</button>
              ))}
            </div>
          </div>
        </section>
        <section className="relative bg-ink py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.map((role, i) => (
                <div key={role.id} className="glass-card p-6 card-spotlight reveal group" style={{ transitionDelay: `${i * 0.02}s` }}>
                  <div className="text-accent font-bold mb-3 text-xs uppercase tracking-wider">{role.id.split('-').map(w=>w[0]).join('').toUpperCase()}</div>
                  <h3 className="text-base font-semibold text-txt-inv mb-1 group-hover:text-accent transition-colors">{role.title}</h3>
                  <span className="text-xs text-accent/60 font-medium">{role.category}</span>
                  <p className="text-xs text-txt-inv-2 mt-3 leading-relaxed">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="relative section-violet py-24 text-center overflow-hidden">
          <div className="max-w-2xl mx-auto px-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 reveal text-txt-inv">¿No ves el rol que <span className="text-accent">necesitas</span>?</h2>
            <p className="text-lg text-txt-inv-2 mb-8 reveal">Creamos agentes personalizados para cualquier función empresarial.</p>
            <Link href="/#contacto" className="inline-flex px-8 py-4 bg-accent/90 hover:bg-accent text-white font-medium rounded-full transition-all shadow-lg shadow-accent/25 reveal">Solicitar rol personalizado →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}