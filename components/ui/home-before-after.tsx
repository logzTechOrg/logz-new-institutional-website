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
    <section className="bg-slate-50 py-12 md:py-20 lg:py-24 text-slate-900">
      <Container className="space-y-10 md:space-y-12">
        <div className="space-y-3 md:space-y-4 text-center px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Comparativo direto das dores que eliminamos
          </h2>
          <p className="mx-auto max-w-3xl text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            Mostre para seu time a diferença de operar às cegas e contar com uma plataforma que integra estoque, armários inteligentes e indicadores de desempenho.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <ComparisonCard card={comparisonData[0]} />

          <div className="hidden lg:flex items-center justify-center">
            <div className="flex items-center gap-3 text-slate-300">
              <span className="h-4 w-4 rotate-45 border-t-2 border-r-2 border-slate-300" />
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
    <article className="flex flex-col gap-4 md:gap-5 rounded-2xl md:rounded-3xl border border-slate-700/40 bg-slate-900 p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start gap-3 md:gap-4">
        <span className={`flex h-10 md:h-12 w-10 md:w-12 items-center justify-center rounded-xl md:rounded-2xl flex-shrink-0 ${card.badge}`}>
          <Icon className="h-5 md:h-6 w-5 md:w-6" strokeWidth={2.5} />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
            {card.title}
          </p>
          <h3 className={`text-xl md:text-2xl font-bold leading-snug ${card.accent}`}>{card.title}</h3>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{card.subtitle}</p>
        </div>
      </div>

      <ul className="space-y-2 md:space-y-3 text-slate-100">
        {card.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-start gap-3 rounded-lg md:rounded-xl bg-white/5 p-3 md:p-4 text-xs md:text-sm font-medium text-slate-100 transition-colors duration-200 hover:bg-white/10"
          >
            <span className="mt-0.5 inline-flex h-5 md:h-6 w-5 md:w-6 items-center justify-center rounded-full bg-white/10 text-white flex-shrink-0">
              {card.id === "without" ? <XCircle className="h-3.5 md:h-4 w-3.5 md:w-4" /> : <CheckCircle2 className="h-3.5 md:h-4 w-3.5 md:w-4" />}
            </span>
            <span className="leading-relaxed">{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
