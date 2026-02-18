"use client";

import { Container } from "@/components/ui/container";

const steps = [
  {
    title: "Diagnostico",
    description: "Mapeamos processos, centros de custo e contratos vigentes.",
  },
  {
    title: "Contagem inicial",
    description: "Inventario guiado com RFID/QR e saneamento de master data.",
  },
  {
    title: "Parametrizacao",
    description: "Configuramos kits, politicas, perfis e integracoes ERP.",
  },
  {
    title: "Piloto (90 dias)",
    description: "Squad dedicado acompanha turno critico e gera ajustes rapidos.",
  },
  {
    title: "Go-live",
    description: "Treinamento onsite e remoto, comunicacao com equipes.",
  },
  {
    title: "Acompanhamento",
    description: "Reunioes de melhoria continua e revisao de KPIs mensais.",
  },
];

export default function SolutionsImplementation() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <Container className="space-y-10">
        <div className="space-y-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
            Implantacao & treinamento
          </span>
          <h2 className="text-3xl font-bold md:text-4xl">Plano claro do diagnostico ao acompanhamento</h2>
          <p className="mx-auto max-w-3xl text-base text-slate-600 md:text-lg">
            Squad Log Z acompanha todo o ciclo com indicadores de progresso semanais.
          </p>
        </div>

        <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="absolute left-8 top-10 bottom-10 hidden w-px bg-gradient-to-b from-blue-200 via-slate-200 to-blue-200 md:block" />
          <ol className="grid gap-6 md:grid-cols-2">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="relative flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4"
              >
                <div className="flex flex-none flex-col items-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white shadow">
                    {index + 1}
                  </span>
                  {index < steps.length - 1 && (
                    <span className="mt-2 hidden h-full w-px bg-gradient-to-b from-blue-200 to-transparent md:block" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

