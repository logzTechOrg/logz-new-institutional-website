"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { Container } from "@/components/ui/container";

const comparisonData = [
  {
    id: "without",
    title: "Sem a Log Z",
    subtitle: "Gestão manual e reativa",
    icon: XCircle,
    accent: "text-rose-600",
    badge: "bg-rose-50 text-rose-600",
    bullets: [
      "Compras de emergência e fretes caros",
      "Sem visibilidade do estoque real",
      "Paradas por falta de ferramentas",
      "Decisões tomadas com base em achismos",
    ],
  },
  {
    id: "with",
    title: "Com a Log Z",
    subtitle: "Operação conectada e preditiva",
    icon: CheckCircle2,
    accent: "text-emerald-600",
    badge: "bg-emerald-50 text-emerald-600",
    bullets: [
      "Alerta de reposição automatizada e compras planejadas",
      "Estoque auditável por centro de custo",
      "Alertas antecipados, evitando paradas",
      "Dashboards transformam indicadores em ação",
    ],
  },
] as const;

export default function HomeBeforeAfter() {
  return (
    <section className="bg-slate-50 py-16 text-slate-900 md:py-24">
      <Container className="space-y-12">
        <div className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Comparativo direto das dores que eliminamos
          </h2>
          <p className="mx-auto max-w-3xl text-base text-slate-900 md:text-lg">
            Mostre para seu time a diferença de operar às cegas e contar com uma plataforma que integra estoque, armários inteligentes e indicadores de desempenho.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <ComparisonCard card={comparisonData[0]} />

          <div className="flex items-center justify-center">
            <div className="flex items-center gap-3 text-slate-900">
  
              <span className="h-4 w-4 rotate-45 border-t-2 border-r-2 border-slate-900" />
            </div>
          </div>

          <ComparisonCard card={comparisonData[1]} />
        </div>
      </Container>
    </section>
  );
}

function ComparisonCard({
  card,
}: {
  card: (typeof comparisonData)[number];
}) {
  const Icon = card.icon;

  return (
    <article className="flex flex-col gap-5 rounded-[32px] border border-white/10 bg-slate-900 p-8 shadow-[0_50px_140px_-70px_rgba(15,23,42,0.9)] backdrop-blur">
      <div className="flex items-center gap-4">
        <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${card.badge}`}>
          <Icon className="h-6 w-6" strokeWidth={2.5} />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
            {card.id === "without"}
          </p>
          <h3 className={`text-2xl font-bold ${card.accent}`}>{card.title}</h3>
          <p className="text-sm text-slate-300">{card.subtitle}</p>
        </div>
      </div>

      <ul className="space-y-3 text-base text-slate-100">
        {card.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 text-sm font-medium text-slate-100"
          >
            <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white">
              {card.id === "without" ? <XCircle className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
