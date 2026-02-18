"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";

const personas = {
  compras: {
    label: "Compras",
    headline: "Domine consumo vs. pedido com alertas de ruptura e FIFO real.",
    bullets: [
      "Comparativos entre previsao, pedido e consumo real.",
      "Alertas de validade e saldo minimo direto no e-mail.",
      "KPIs de economia ligados a contratos de fornecedores.",
    ],
  },
  usinagem: {
    label: "Usinagem",
    headline: "Ferramentas certas, no kit certo, sem espera na maquina.",
    bullets: [
      "Kits e presets prontos por centro de trabalho.",
      "Rastreio do operador e da OS/OP em cada retirada.",
      "Reposicao automatica por envelope de consumo.",
    ],
  },
  direcao: {
    label: "Direcao",
    headline: "Visibilidade financeira sobre ativos, contratos e produtividade.",
    bullets: [
      "Dashboards conectando custos por linha e familia de produto.",
      "Relatorios prontos para auditoria e prestacao com fornecedores.",
      "Integracao com ERP para fechar o ciclo de centros de custo.",
    ],
  },
};

type PersonaKey = keyof typeof personas;

export default function SolutionsIntro() {
  const [persona, setPersona] = useState<PersonaKey>("compras");
  const personaData = personas[persona];

  return (
    <section className="bg-slate-900 py-16 text-white md:py-24">
      <Container className="space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
              Solucoes Log Z
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Operacao enxuta para ferramentas e insumos criticos.
            </h1>
            <p className="text-lg text-slate-600 md:text-xl">
              Escolha a persona e veja o que muda quando dados reais conectam compras,
              usinagem e direcao.
            </p>
          </div>

          <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1 text-sm font-semibold">
            {(Object.entries(personas) as [PersonaKey, typeof personas[PersonaKey]][]).map(
              ([key, value]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setPersona(key)}
                  aria-pressed={persona === key}
                  className={`rounded-full px-5 py-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
                    persona === key
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {value.label}
                </button>
              )
            )}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 shadow-sm">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">{personaData.headline}</h2>
            <ul className="grid gap-3 md:grid-cols-3">
              {personaData.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
