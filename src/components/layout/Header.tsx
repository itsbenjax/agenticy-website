"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { mainNavigation } from "@/data/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-dark py-3" : "bg-transparent py-5"}`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          <span className="text-txt-inv">Agent</span><span className="text-accent">icy</span><span className="text-txt-inv-2 text-sm ml-1">™</span>
        </Link>
        <div className="hidden lg:flex items-center gap-1">
          {mainNavigation.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button className="px-4 py-2 text-sm text-txt-inv-2 hover:text-txt-inv transition-colors rounded-lg hover:bg-white/5">
                  {item.label}
                  <svg className="inline ml-1 w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="glass-dark rounded-2xl py-3 px-2 min-w-[220px] shadow-2xl">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className="block px-4 py-2.5 text-sm text-txt-inv-2 hover:text-txt-inv hover:bg-white/5 rounded-xl transition-all">{child.label}</Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href || "#"} className="px-4 py-2 text-sm text-txt-inv-2 hover:text-txt-inv transition-colors rounded-lg hover:bg-white/5">{item.label}</Link>
            )
          )}
          <Link href="/#contacto" className="ml-3 px-5 py-2 text-sm font-medium bg-accent/90 hover:bg-accent text-white rounded-full transition-all shadow-lg shadow-accent/25">Contactar</Link>
        </div>
        <button className="lg:hidden flex flex-col gap-1.5 p-2 group" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menú">
          <span className={`block w-6 h-0.5 bg-txt-inv transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`}/>
          <span className={`block w-6 h-0.5 bg-txt-inv transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}/>
          <span className={`block w-6 h-0.5 bg-txt-inv transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}/>
        </button>
      </nav>
      <div className={`lg:hidden fixed inset-0 top-0 z-40 bg-ink/95 backdrop-blur-xl transition-all duration-500 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {mainNavigation.map((item) =>
            item.children ? (
              <div key={item.label} className="text-center">
                <p className="text-xs uppercase tracking-widest text-txt-inv-2 mb-3">{item.label}</p>
                {item.children.map((child) => (
                  <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)} className="block py-2 text-lg text-txt-inv-2 hover:text-txt-inv transition-colors">{child.label}</Link>
                ))}
              </div>
            ) : (
              <Link key={item.href} href={item.href || "#"} onClick={() => setMobileOpen(false)} className="text-lg text-txt-inv-2 hover:text-txt-inv transition-colors">{item.label}</Link>
            )
          )}
          <Link href="/#contacto" onClick={() => setMobileOpen(false)} className="mt-4 px-8 py-3 text-lg font-medium bg-accent/90 hover:bg-accent text-white rounded-full transition-all shadow-lg shadow-accent/25">Contactar</Link>
        </div>
      </div>
    </header>
  );
}