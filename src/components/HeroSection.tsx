"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./Button";

import hero1 from "@/images/image1.jpg";
import hero2 from "@/images/image2.jpg";
import hero3 from "@/images/image1.jpg";
import hero4 from "@/images/image2.jpg";

const slides = [hero1, hero2, hero3, hero4];
const intervalMs = 5000;

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-slate-900 text-white"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={slides[index].src}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0"
            aria-hidden
          >
            <div className="absolute inset-0 flex">
              <div className="relative h-full w-1/2">
                <Image
                  src={slides[index]}
                  alt=""
                  fill
                  priority
                  quality={100}
                  sizes="50vw"
                  className="object-cover filter grayscale"
                />
              </div>
              <div className="relative h-full w-1/2">
                <Image
                  src={slides[index]}
                  alt=""
                  fill
                  priority
                  quality={100}
                  sizes="50vw"
                  className="object-cover filter grayscale"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/60 to-black/40" aria-hidden />

      <div className="relative z-20 mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        <div className="space-y-6 rounded-2xl bg-slate-900/50 p-6 shadow-lg backdrop-blur">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-sm backdrop-blur">
            Solucoes MEGA para alta demanda
          </span>
          <h1
            id="hero-heading"
            className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            Poliuretano de Alta Performance para o Seu Projeto
          </h1>
          <p className="text-lg text-slate-100 sm:text-xl">
            Revestimentos, pecas tecnicas e componentes sob medida em poliuretano para maximizar durabilidade, reduzir
            parada e garantir precisao industrial.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="#produtos" styleType="glass">
              Ver Produtos
            </Button>
            <Button href="#contato" styleType="glass" className="px-5 py-3 underline-offset-4">
              Fale Conosco
            </Button>
          </div>
        </div>

        <div className="relative z-20 flex items-center justify-center">
          <div className="relative aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-2xl backdrop-blur">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/hTlRO6vwfuY?autoplay=1&mute=1&loop=1&playlist=hTlRO6vwfuY&controls=0&rel=0"
              title="MEGA Poliuretanos video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/25 via-transparent to-black/35" />
          </div>
        </div>
      </div>
    </section>
  );
}
