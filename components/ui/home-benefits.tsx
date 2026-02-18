"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ArrowRight, BellRing, Headphones, Wrench, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Benefit = {
  title: string;
  description: string;
  icon: LucideIcon;
  signal: {
    label: string;
    value: string;
    status: string;
  };
};

const benefits: Benefit[] = [
  {
    title: "Alertas que importam, sem ruido",
    description:
      "Entenda a causa da falha e a acao recomendada com alertas claros e contextualizados para sua operacao.",
    icon: BellRing,
    signal: {
      label: "Falha prevista",
      value: "Rolamento eixo principal",
      status: "Risco alto",
    },
  },
  {
    title: "Respostas rapidas, menos downtime",
    description:
      "Insights em tempo real ajudam o time a priorizar manutencao antes da parada inesperada.",
    icon: Zap,
    signal: {
      label: "Tendencia",
      value: "Vibracao acima do limite",
      status: "Ajuste sugerido",
    },
  },
  {
    title: "Instalacao simples e sem fios",
    description:
      "Sensores conectam em poucos minutos e comecam a enviar dados sem cabos ou estrutura complexa.",
    icon: Wrench,
    signal: {
      label: "Status do ativo",
      value: "Maquina configurada",
      status: "Operando estavel",
    },
  },
  {
    title: "Suporte de especialistas in loco",
    description:
      "Trabalhamos lado a lado com sua equipe para interpretar dados e resolver problemas reais.",
    icon: Headphones,
    signal: {
      label: "Equipe Log Z",
      value: "Engenheiro disponivel",
      status: "Atendimento prioritario",
    },
  },
];

export default function HomeBenefits() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16 md:py-20">
      <Container className="space-y-12 max-w-none px-6 md:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
            O QUE A LOG Z ENTREGA
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Por que escolher o Log Z?
          </h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            Combina hardware inteligente com suporte humano para cada ativo
            produzir com mais previsibilidade e menos risco.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} benefit={benefit} />
          ))}
        </div>

        <div className="flex justify-center pt-2">
          <Link
            href="/demo"
            className="inline-flex items-center justify-center rounded-xl bg-[var(--primary)] px-8 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Solicitar demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

function BenefitCard({ benefit }: { benefit: Benefit }) {
  const Icon = benefit.icon;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-40 bg-gradient-to-br from-blue-100 via-blue-50 to-white">
        <div className="absolute inset-x-6 top-6 rounded-2xl border border-white/60 bg-white/80 p-4 text-left shadow-sm backdrop-blur">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-blue-600">
            {benefit.signal.label}
          </p>
          <p className="mt-1 text-sm font-medium text-slate-900">
            {benefit.signal.value}
          </p>
          <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            {benefit.signal.status}
          </span>
        </div>

        <div className="absolute -bottom-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-[var(--primary)] text-white shadow-lg ring-4 ring-white transition group-hover:scale-105">
          <Icon className="h-7 w-7" strokeWidth={1.5} />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-12 text-center">
        <h3 className="text-lg font-semibold text-slate-900">
          {benefit.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {benefit.description}
        </p>
      </div>
    </article>
  );
}
