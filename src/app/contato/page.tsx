import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contato | MEGA Poliuretanos",
  description:
    "Fale com a MEGA Poliuretanos para orcamentos, projetos sob medida e atendimento tecnico especializado.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-mega-grey text-mega-dark">
      <Navbar />
      <main
        id="conteudo-principal"
        className="py-16 sm:py-20"
        aria-label="Pagina de contato MEGA Poliuretanos"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-start lg:px-8">
          <section
            aria-labelledby="contato-direto-titulo"
            className="space-y-6"
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mega-blue">
                Contato Direto
              </p>
              <h1 id="contato-direto-titulo" className="text-3xl font-extrabold leading-tight sm:text-4xl">
                Estamos prontos para atender seu projeto
              </h1>
              <p className="text-base text-slate-700 sm:text-lg">
                Acione nossa equipe tecnica para especificar materiais, prazos e condicoes ideais para o seu processo
                industrial.
              </p>
              <address className="mt-4 space-y-3 text-sm not-italic text-slate-700">
                <div>
                  <p className="font-semibold text-mega-blue">Endereco</p>
                  <p>Rua Industrial, 1200 - Polo Tecnologico, Sao Paulo - SP</p>
                </div>
                <div>
                  <p className="font-semibold text-mega-blue">Telefone</p>
                  <p>
                    <a className="underline decoration-mega-blue decoration-2 underline-offset-2 transition hover:text-mega-blue" href="tel:+551140005000">
                      (11) 4000-5000
                    </a>
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-mega-blue">Email</p>
                  <p>
                    <a
                      className="underline decoration-mega-blue decoration-2 underline-offset-2 transition hover:text-mega-blue"
                      href="mailto:contato@megapoliuretanos.com"
                    >
                      contato@megapoliuretanos.com
                    </a>
                  </p>
                </div>
              </address>
            </div>

            <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
              <div
                className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-mega-blue/20 via-mega-grey to-white"
                aria-hidden
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-slate-700">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mega-blue">
                    Mapa MEGA
                  </p>
                  <p className="text-lg font-semibold text-mega-dark">
                    Polo Tecnologico - Sao Paulo, SP
                  </p>
                  <p className="text-sm text-slate-600">
                    Substitua por um iframe do Google Maps ou mapa corporativo definitivo.
                  </p>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,74,173,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(30,41,59,0.1),transparent_30%)]" />
              </div>
              <figcaption className="sr-only">
                Localizacao da MEGA Poliuretanos no polo tecnologico de Sao Paulo.
              </figcaption>
            </figure>
          </section>

          <section aria-labelledby="form-contato-titulo" className="lg:pl-4">
            <h2 id="form-contato-titulo" className="sr-only">
              Formulario de contato
            </h2>
            <ContactForm variant="embedded" />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
