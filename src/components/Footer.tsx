import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/images/image.png";

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 sm:px-8 sm:py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3 text-white">
            <div className="inline-flex items-center gap-3">
              <Image
                src={logo}
                alt="Logo MEGA Poliuretanos"
                className="h-12 w-12 rounded-md object-contain"
                width={48}
                height={48}
              />
              <div className="flex flex-col leading-tight text-white">
                <span className="text-sm font-semibold uppercase tracking-wide text-slate-200">MEGA</span>
                <span className="text-lg font-semibold text-white">Poliuretanos</span>
              </div>
            </div>
            <p className="text-sm text-slate-200">
              Solucoes em poliuretano de alta performance para ambientes industriais exigentes.
            </p>
          </div>

          <div className="text-white">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-200">
              Links Rapidos
            </h3>
            <nav aria-label="Links rapidos">
              <ul className="mt-4 space-y-2 text-sm text-slate-100">
                <li>
                  <Link className="transition hover:text-white" href="#home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-white" href="#produtos">
                    Produtos
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-white" href="#sobre">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-white" href="#contato">
                    Contato
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="text-white">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-200">
              Informacoes
            </h3>
            <address className="mt-4 space-y-2 text-sm not-italic text-slate-100">
              <p>Rua Industrial, 1200 - Polo Tecnologico</p>
              <p>
                Telefone:{" "}
                <a className="underline decoration-white/70 underline-offset-2 transition hover:text-white" href="tel:+551140005000">
                  (11) 4000-5000
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  className="underline decoration-white/70 underline-offset-2 transition hover:text-white"
                  href="mailto:contato@megapoliuretanos.com"
                >
                  contato@megapoliuretanos.com
                </a>
              </p>
            </address>
          </div>

          <div className="text-white">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-200">
              Redes Sociais
            </h3>
            <div className="mt-4 flex gap-3">
              <Link
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-500 text-slate-100 transition hover:border-white hover:text-white"
                href="https://www.linkedin.com"
              >
                <Linkedin className="h-5 w-5" aria-hidden />
              </Link>
              <Link
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-500 text-slate-100 transition hover:border-white hover:text-white"
                href="https://www.instagram.com"
              >
                <Instagram className="h-5 w-5" aria-hidden />
              </Link>
              <Link
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-500 text-slate-100 transition hover:border-white hover:text-white"
                href="https://www.facebook.com"
              >
                <Facebook className="h-5 w-5" aria-hidden />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-slate-700/60 pt-4 text-xs text-slate-200 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) {new Date().getFullYear()} MEGA Poliuretanos. Todos os direitos reservados.</p>
          <p>Alta performance em poliuretano para a industria brasileira.</p>
        </div>
      </div>
    </footer>
  );
}
