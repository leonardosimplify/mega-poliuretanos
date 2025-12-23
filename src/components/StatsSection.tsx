/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { useState } from "react";
import img1 from "@/images/img1.png";
import img2 from "@/images/img2.png";
import img3 from "@/images/img3.png";

const sliderImages = [
  { src: img1, alt: "Aplicacao de poliuretano em componentes industriais" },
  { src: img2, alt: "Processo industrial com poliuretano" },
  { src: img3, alt: "Linha de producao com poliuretano" },
];

export function StatsSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  return (
    <section
      id="sobre"
      className="bg-mega-grey py-20 text-mega-dark"
      aria-labelledby="sobre-nos"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="section-card grid gap-12 px-6 py-10 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <figure className="relative overflow-hidden rounded-2xl border border-slate-200 bg-mega-grey shadow-lg">
            <div className="relative h-full min-h-[260px] w-full">
              <Image
                src={sliderImages[current].src}
                alt={sliderImages[current].alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority={current === 0}
              />
            </div>
            <figcaption className="sr-only">{sliderImages[current].alt}</figcaption>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/5" />
            <div className="absolute inset-x-0 bottom-3 flex items-center justify-between px-4">
              <button
                type="button"
                onClick={prevSlide}
                className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-mega-dark shadow-md transition hover:bg-white"
                aria-label="Imagem anterior"
              >
                ◀
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-mega-dark shadow-md transition hover:bg-white"
                aria-label="Proxima imagem"
              >
                ▶
              </button>
            </div>
          </figure>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mega-blue">
                Sobre Nos
              </p>
              <h2
                id="sobre-nos"
                className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl"
              >
                Bem-vindos a MEGA Poliuretanos
              </h2>
              <p className="text-base text-slate-600 sm:text-lg">
                Ha mais de 20 anos entregamos poliuretano com atendimento agil, engenharia aplicada e solucao sob medida
                para cada cliente.
              </p>
              <p className="text-base text-slate-600 sm:text-lg">
                Investimos em tecnologia, inovacao e parceria com centros de pesquisa para garantir qualidade, rapidez e
                disponibilidade em projetos industriais exigentes.
              </p>
            </div>

            <dl className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-mega-grey px-4 py-5 text-center shadow-sm">
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                  Experiencia
                </dt>
                <dd className="text-2xl font-bold text-mega-blue">+15 Anos</dd>
              </div>
              <div className="rounded-xl border border-slate-200 bg-mega-grey px-4 py-5 text-center shadow-sm">
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                  Qualidade
                </dt>
                <dd className="text-2xl font-bold text-mega-blue">ISO 9001</dd>
              </div>
              <div className="rounded-xl border border-slate-200 bg-mega-grey px-4 py-5 text-center shadow-sm">
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                  Atendimento
                </dt>
                <dd className="text-2xl font-bold text-mega-blue">Entrega Nacional</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
