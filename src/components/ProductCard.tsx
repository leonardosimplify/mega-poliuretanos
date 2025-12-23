import type { LucideIcon } from "lucide-react";

type ProductCardProps = {
  titulo: string;
  descricao: string;
  icone: LucideIcon;
};

export function ProductCard({ titulo, descricao, icone: Icon }: ProductCardProps) {
  return (
    <article
      tabIndex={0}
      className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-xl focus-visible:-translate-y-1 focus-visible:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mega-blue"
    >
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-mega-blue/90 via-mega-blue to-mega-blue/80 opacity-0 transition duration-200 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-mega-blue/10 text-mega-blue">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-mega-dark">{titulo}</h3>
        <p className="text-sm text-slate-600">{descricao}</p>
      </div>
    </article>
  );
}
