import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = { title: "Política de Privacidad", description: "Cómo protegemos tus datos con infraestructura 100% local." };

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <section className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2 text-txt-inv">Política de Privacidad</h1>
          <p className="text-txt-inv-2 mb-12">Última actualización: Junio 2025</p>
          <div className="prose prose-invert max-w-none space-y-8">
            <section><h2 className="text-xl font-semibold text-txt-inv mb-3">1. Principio Fundamental</h2><p className="text-txt-inv-2 leading-relaxed">En Agenticy, la privacidad es nuestro principio fundacional. Toda nuestra infraestructura opera de manera <strong className="text-txt-inv">100% local</strong> en las instalaciones de nuestros clientes, utilizando hardware de última tecnología. No dependemos de APIs externas ni servicios cloud para el procesamiento de datos.</p></section>
            <section><h2 className="text-xl font-semibold text-txt-inv mb-3">2. Datos Recopilados</h2><p className="text-txt-inv-2 leading-relaxed">A través de nuestro sitio web, recopilamos únicamente la información que nos proporcionas voluntariamente: nombre, email corporativo, empresa y mensaje.</p></section>
            <section><h2 className="text-xl font-semibold text-txt-inv mb-3">3. Infraestructura Local</h2><p className="text-txt-inv-2 leading-relaxed">Nuestros agentes operan completamente en hardware instalado en las instalaciones del cliente. Los datos empresariales nunca salen de tu organización. No se requiere conexión a internet. No existe dependencia de APIs de terceros.</p></section>
            <section><h2 className="text-xl font-semibold text-txt-inv mb-3">4. Cookies</h2><p className="text-txt-inv-2 leading-relaxed">Nuestro sitio web utiliza cookies mínimas necesarias para su funcionamiento. No utilizamos cookies de seguimiento ni analytics de terceros.</p></section>
            <section><h2 className="text-xl font-semibold text-txt-inv mb-3">5. Contacto</h2><p className="text-txt-inv-2 leading-relaxed">Para cualquier consulta: privacidad@agenticy.io.</p></section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}