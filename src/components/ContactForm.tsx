"use client";

import { FormEvent, useState } from "react";
import { Button } from "./Button";

type ContactFormProps = {
  variant?: "section" | "embedded";
};

export function ContactForm({ variant = "section" }: ContactFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    setIsSent(false);

    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 1200);
  };

  const statusId = variant === "embedded" ? "contato-status-embed" : "contato-status";

  const formMarkup = (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8"
      aria-describedby={isSent ? statusId : undefined}
      aria-busy={isLoading}
    >
      <div className="grid gap-4">
        <label className="flex flex-col gap-1 text-sm font-medium text-mega-dark">
          Nome
          <input
            type="text"
            name="nome"
            required
            autoComplete="name"
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-inner transition focus:border-mega-blue focus:outline-none focus:ring-2 focus:ring-mega-blue/40"
            placeholder="Seu nome completo"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm font-medium text-mega-dark">
          Email
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-inner transition focus:border-mega-blue focus:outline-none focus:ring-2 focus:ring-mega-blue/40"
            placeholder="email@empresa.com"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm font-medium text-mega-dark">
          Empresa
          <input
            type="text"
            name="empresa"
            required
            autoComplete="organization"
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-inner transition focus:border-mega-blue focus:outline-none focus:ring-2 focus:ring-mega-blue/40"
            placeholder="Nome da empresa"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm font-medium text-mega-dark">
          Mensagem
          <textarea
            name="mensagem"
            required
            rows={4}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-inner transition focus:border-mega-blue focus:outline-none focus:ring-2 focus:ring-mega-blue/40"
            placeholder="Conte rapidamente sobre o seu projeto ou necessidade."
          />
        </label>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button
          type="submit"
          disabled={isLoading}
          styleType="solid"
          className="px-6 py-3"
        >
          {isLoading ? (
            <span className="inline-flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/70 border-t-transparent" />
              Enviando...
            </span>
          ) : (
            "Enviar mensagem"
          )}
        </Button>
        {isSent && (
          <p id={statusId} role="status" aria-live="polite" className="text-sm font-medium text-mega-blue">
            Recebemos seus dados. Nossa equipe retornara em breve.
          </p>
        )}
      </div>
    </form>
  );

  if (variant === "embedded") {
    return formMarkup;
  }

  return (
    <section
      id="contato"
      className="bg-mega-grey py-16 text-mega-dark sm:py-20"
      aria-labelledby="contato-titulo"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="section-card grid gap-8 px-6 py-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-10 lg:py-10">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mega-blue">
              Contato
            </p>
            <h2
              id="contato-titulo"
              className="text-3xl font-extrabold leading-tight sm:text-4xl"
            >
              Fale com especialistas em poliuretano
            </h2>
            <p className="text-base text-slate-700 sm:text-lg">
              Compartilhe seu desafio industrial e receba uma proposta tecnica personalizada com prazos,
              materiais e especificacoes adequadas.
            </p>
            <div className="text-sm text-slate-600">
              <p className="font-semibold text-mega-blue">Atendimento rapido</p>
              <p>Equipe tecnica pronta para orientar solucoes em revestimentos e pecas sob medida.</p>
            </div>
          </div>

          {formMarkup}
        </div>
      </div>
    </section>
  );
}
