import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = { title: "Términos y Condiciones", description: "Condiciones de uso de nuestros servicios de agentes IA empresariales." };

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <section className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2 text-txt-inv">Términos y Condiciones</h1>
          <p className="text-txt-inv-2 mb-12">Última actualización: Junio 2025</p>
          <div className="prose prose-invert max-w-none space-y-8">
            <section><h2 className="text-xl font-semibold text-txt-inv mb-3">1. Aceptación</h2><p className="text-txt-inv-2 leading-relaxed">Al utilizar agenticy.io y nuestros servicios, aceptas estos términos y condiciones.</p></section>
            <section><h2 className="text-xl font-semibold text-txt-inv mb-3">2. Servicios</h2><p className="text-txt-inv-2 leading-relaxed">Agenticy proporciona agentes de IA empresariales, sistemas RAG, servicios de implementación global y capacitación. Todos los servicios se ejecutan en hardware de última tecnología instalado en las instalaciones del cliente.</p></section>
            <section><h2 className="text-xl font-semibold text-txt-inv mb-3">3. Propiedad Intelectual</h2><p className="text-txt-inv-2 leading-relaxed">Todo el contenido del sitio web es propiedad de Agenticy y está protegido por leyes de propiedad intelectual.</p></section>
            <section><h2 className="text-xl font-semibold text-txt-inv mb-3">4. Limitación de Responsabilidad</h2><p className="text-txt-inv-2 leading-relaxed">Agenticy no será responsable por daños indirectos o consecuentes. Nuestra responsabilidad se limita al valor del contrato de servicio.</p></section>
            <section><h2 className="text-xl font-semibold text-txt-inv mb-3">5. Contacto</h2><p className="text-txt-inv-2 leading-relaxed">Para consultas legales: legal@agenticy.io.</p></section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}