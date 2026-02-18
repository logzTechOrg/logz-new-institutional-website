"use client";

import { Check, Minus, X } from "lucide-react";
import { Container } from "@/components/ui/container";

type Availability = "full" | "partial" | "none";

const competitors = [
  {
    key: "logz",
    title: "Log Z",
    subtitle: "Monitoramento continuo",
  },
  {
    key: "sensors",
    title: "Sensores convencionais",
    subtitle: "Apenas 1 vez ao dia",
  },
  {
    key: "offline",
    title: "Preditiva offline",
    subtitle: "Sem dados em campo",
  },
] as const;

type CompetitorKey = (typeof competitors)[number]["key"];

type ComparisonRow = { feature: string } & Record<CompetitorKey, Availability>;

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Algoritmos de diagnostico patenteados",
    logz: "full",
    sensors: "none",
    offline: "none",
  },
  {
    feature: "Espectro completo de vibracao",
    logz: "full",
    sensors: "full",
    offline: "none",
  },
  {
    feature: "Armazenamento seguro em nuvem",
    logz: "full",
    sensors: "partial",
    offline: "none",
  },
  {
    feature: "Historico e tendencia dos ativos",
    logz: "full",
    sensors: "partial",
    offline: "none",
  },
  {
    feature: "Analise com dados meteorologicos locais",
    logz: "full",
    sensors: "none",
    offline: "none",
  },
  {
    feature: "Monitoramento continuo em tempo real",
    logz: "full",
    sensors: "partial",
    offline: "none",
  },
  {
    feature: "Insights baseados nos manuais dos fabricantes",
    logz: "full",
    sensors: "none",
    offline: "none",
  },
  {
    feature: "Ordens de servico automatizadas",
    logz: "full",
    sensors: "none",
    offline: "none",
  },
  {
    feature: "Integracao manutencao eletrica e mecanica",
    logz: "full",
    sensors: "partial",
    offline: "none",
  },
  {
    feature: "Analise comparativa com concorrentes",
    logz: "full",
    sensors: "none",
    offline: "none",
  },
];

function AvailabilityIndicator({ value }: { value: Availability }) {
  if (value === "full") {
    return (
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/30 bg-white/10 text-white">
        <Check className="h-4 w-4" strokeWidth={2.5} />
      </span>
    );
  }

  if (value === "partial") {
    return (
      <span className="inline-flex items-center gap-2 rounded-2xl border border-amber-200/70 bg-amber-500/10 px-3 py-2 text-xs font-semibold uppercase text-amber-200">
        <Minus className="h-4 w-4" strokeWidth={2} />
        Parcial
      </span>
    );
  }

  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/5 text-white/70">
      <X className="h-4 w-4" strokeWidth={2.5} />
    </span>
  );
}

export default function HomeComparison() {
  return (
    <section className="bg-[var(--primary)] py-20 text-white md:py-24">
      <Container className="space-y-10">
        <div className="space-y-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            Comparativo transparente
          </span>
          <h2 className="text-3xl font-bold md:text-4xl">
            Veja como o Log Z se destaca frente aos concorrentes
          </h2>
          <p className="mx-auto max-w-3xl text-base text-white/80 md:text-lg">
            Um painel direto para enxergar os recursos essenciais de monitoramento industrial
            e o que realmente chega na sua fabrica.
          </p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="min-w-[960px] rounded-[32px] border border-white/10 bg-white/5 shadow-[0_40px_120px_-50px_rgba(5,0,20,0.65)] backdrop-blur">
            <div className="grid grid-cols-[minmax(0,1.7fr)_repeat(3,minmax(0,1fr))]">
              <div className="rounded-tl-[32px] bg-white/10 px-6 py-5 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                Feature
              </div>
              {competitors.map((competitor, index) => (
                <div
                  key={competitor.key}
                  className={`px-6 py-5 text-center text-sm font-semibold text-white ${
                    index === competitors.length - 1 ? "rounded-tr-[32px]" : ""
                  }`}
                >
                  <div className={`text-sm font-semibold text-white`}>
                    {competitor.title}
                  </div>
                  <p className="mt-1 text-xs text-white/70">{competitor.subtitle}</p>
                </div>
              ))}
            </div>

            {comparisonRows.map((row, rowIndex) => {
              const rowBg = rowIndex % 2 === 0 ? "bg-white/5" : "bg-white/10";
              const isLastRow = rowIndex === comparisonRows.length - 1;

              return (
                <div
                  key={row.feature}
                  className={`grid grid-cols-[minmax(0,1.7fr)_repeat(3,minmax(0,1fr))] border-t border-white/10 ${rowBg}`}
                >
                  <div
                    className={`px-6 py-5 text-sm font-medium text-white ${
                      isLastRow ? "rounded-bl-[32px]" : ""
                    }`}
                  >
                    {row.feature}
                  </div>

                  {competitors.map((competitor, index) => {
                    const value = row[competitor.key];
                    const roundingClass =
                      isLastRow && index === competitors.length - 1 ? "rounded-br-[32px]" : "";

                    return (
                      <div
                        key={competitor.key}
                        className={`flex items-center justify-center border-l border-white/10 px-6 py-4 ${roundingClass}`}
                      >
                        <AvailabilityIndicator value={value} />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
