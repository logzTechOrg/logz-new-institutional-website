"use client";

import { Container } from "@/components/ui/container";

const stats = [
  {
    label: "+5.000 ferramentas mapeadas e organizadas pela Log Z",
    detail: "Inventários vivos, com rastreabilidade ponta a ponta.",
  },
  {
    label: "+120 horas/mês economizadas em controles manuais",
    detail: "Tempo realocado para produção, engenharia e melhoria contínua.",
  },
  {
    label: "Até -25% nos custos de ferramentas na operação dos clientes",
    detail: "Compras planejadas, menor desperdício e zero ruptura crítica.",
  },
];

export default function AboutBigNumbers() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container className="space-y-8">
        <div className="space-y-3 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            GRANDES NÚMEROS
          </span>
          <h2 className="text-3xl font-bold md:text-4xl">Resultados que já entregamos</h2>
          <p className="mx-auto max-w-3xl text-base text-slate-600 md:text-lg">
            Ganhos reais de clientes que conectaram estoque, requisições e indicadores na mesma plataforma.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex h-full flex-col gap-3 rounded-3xl border border-slate-200 bg-slate-50/70 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-200/60 hover:shadow-lg"
            >
              <p className="text-2xl font-bold text-slate-900">{stat.label}</p>
              <p className="text-sm text-slate-600">{stat.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

