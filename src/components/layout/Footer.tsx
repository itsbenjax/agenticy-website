import Link from "next/link";
import { footerNavigation } from "@/data/navigation";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold">
                <span className="text-txt-inv">Agent</span><span className="text-accent">icy</span>
              </span>
            </Link>
            <p className="text-sm text-txt-inv-2 leading-relaxed">
              Agentes de IA empresariales con infraestructura 100% local.
              Hardware de última tecnología sin dependencia de APIs externas.
            </p>
          </div>
          {footerNavigation.map((section) => (
            <div key={section.label}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-txt-inv-2 mb-4">
                {section.label}
              </h4>
              <ul className="space-y-3">
                {section.children.map((item) => (
                  <li key={item.href + item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-txt-inv-2 hover:text-txt-inv transition-colors"
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-txt-inv-2/60">&copy; {currentYear} Agenticy. Todos los derechos reservados.</p>
          <p className="text-xs text-txt-inv-2/40">
            Infraestructura 100% local &bull; Hardware de última tecnología &bull; Sin dependencia de APIs externas
          </p>
        </div>
      </div>
    </footer>
  );
}