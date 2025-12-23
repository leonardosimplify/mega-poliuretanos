import Image from "next/image";
import Link from "next/link";
import logo from "@/images/image.png";
import { Button } from "./Button";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex flex-1 items-center">
          <Link
            href="#home"
            className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            aria-label="Ir para o inicio"
          >
            <Image
              src={logo}
              alt="Logo da MEGA Poliuretanos"
              className="h-24 w-auto object-contain"
              width={280}
              height={96}
              priority
            />
          </Link>
        </div>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-sm font-semibold text-slate-700 md:flex">
          <Link
            className="transition hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            href="#home"
          >
            Home
          </Link>
          <Link
            className="transition hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            href="#produtos"
          >
            Produtos
          </Link>
          <Link
            className="transition hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            href="#sobre"
          >
            Sobre
          </Link>
          <Link
            className="transition hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            href="#contato"
          >
            Contato
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Button href="#contato" styleType="solid">
            Solicitar Cotacao
          </Button>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-white py-3 md:hidden">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 text-sm font-semibold text-slate-600 lg:px-8">
          <Link
            className="transition hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            href="#home"
          >
            Home
          </Link>
          <Link
            className="transition hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            href="#produtos"
          >
            Produtos
          </Link>
          <Link
            className="transition hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            href="#sobre"
          >
            Sobre
          </Link>
          <Link
            className="transition hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            href="#contato"
          >
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
}
