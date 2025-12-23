import { Layers, ShieldCheck, Wrench } from "lucide-react";
import { ProductCard } from "./ProductCard";

export function ProductShowcase() {
  const produtos = [
    {
      titulo: "Elastomeros",
      descricao:
        "Elastomeros de poliuretano para rolos, rodas e pegas tecnicas com alta resistencia a abrasao, impacto e agentes quimicos, reduzindo paradas e desgaste prematuro.",
      icone: ShieldCheck,
    },
    {
      titulo: "Espumas",
      descricao:
        "Espumas estruturais e flexiveis para isolamento termico e acustico em cabines, paines e dutos, com baixa densidade e estabilidade dimensional.",
      icone: Layers,
    },
    {
      titulo: "Adesivos",
      descricao:
        "Adesivos industriais de poliuretano para vedacao e colagem em ambientes de alta carga e exposicao quimica, garantindo aderencia duravel e resistencia a vibracoes.",
      icone: Wrench,
    },
  ];

  return (
    <section
      id="produtos"
      className="bg-mega-grey py-20 text-mega-dark"
      aria-labelledby="produtos-titulo"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="section-card space-y-6 px-6 py-10 sm:px-8 lg:px-10">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mega-blue">
              Portfolio
            </p>
            <h2
              id="produtos-titulo"
              className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl"
            >
              Produtos e solucoes em poliuretano para alto desempenho
            </h2>
            <p className="text-base text-slate-600 sm:text-lg">
              Selecao de itens fabricados e customizados para manter operacoes criticas em movimento com confiabilidade e
              seguranca.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {produtos.map((produto) => (
              <ProductCard key={produto.titulo} {...produto} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
