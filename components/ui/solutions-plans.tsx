"use client";

import Link from "next/link";
import { useState } from "react";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";

type VariantKey = "withLocker" | "withoutLocker";

const variants: Record<VariantKey, { label: string; description: string }> = {
  withLocker: {
    label: "Com armario",
    description: "Hardware + telemetria inclusos",
  },
  withoutLocker: {
    label: "Sem armario",
    description: "Para plantas com estrutura propria",
  },
};

const plans = [
  {
    name: "Essencial",
    description: "Gestao basica de estoque, dashboards principais e suporte remoto.",
    highlight: false,
    variants: {
      withLocker: [
        "Armarios compartilhados entre areas",
        "Dashboards FIFO e rupturas",
        "Onboarding remoto",
      ],
      withoutLocker: [
        "Integracao com almoxarifado existente",
        "Dashboards FIFO e rupturas",
        "Onboarding remoto",
      ],
    },
  },
  {
    name: "Pro",
    description: "Plano mais vendido com squads dedicados e integracoes ERP completas.",
    highlight: true,
    variants: {
      withLocker: [
        "Armarios sob medida com badge",
        "Integracao ERP bidirecional",
        "Squad de implantacao 90 dias",
      ],
      withoutLocker: [
        "Integracao ERP bidirecional",
        "Controle de kits e politicas",
        "Squad de implantacao 90 dias",
      ],
    },
  },
  {
    name: "Enterprise",
    description: "Modelo global para grupos multi-site com governanca central.",
    highlight: false,
    variants: {
      withLocker: [
        "Hardware dedicado por filial",
        "SLA 24x7 e acompanhamento onsite",
        "API custom e EDI",
      ],
      withoutLocker: [
        "Camada de dados neutra multi-planta",
        "SLA 24x7 e acompanhamento onsite",
        "API custom e EDI",
      ],
    },
  },
];

export default function SolutionsPlans() {
  const [variant, setVariant] = useState<VariantKey>("withLocker");

  return (
    <section className="bg-white py-16 md:py-24">
      <Container className="space-y-10">
        <div className="space-y-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
            Planos
          </span>
          <h2 className="text-3xl font-bold md:text-4xl">Escolha como quer comecar</h2>
          <p className="mx-auto max-w-3xl text-base text-slate-600 md:text-lg">
            Toggle abaixo para ver o que esta incluso com ou sem armario inteligente.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {(Object.entries(variants) as [VariantKey, typeof variants[VariantKey]][]).map(
            ([key, value]) => (
              <button
                key={key}
                type="button"
                onClick={() => setVariant(key)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
                  variant === key
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-slate-200 bg-white text-slate-600 hover:border-blue-200"
                }`}
                aria-pressed={variant === key}
              >
                {value.label}
                <span className="ml-2 text-xs font-normal text-slate-500">{value.description}</span>
              </button>
            )
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex h-full flex-col rounded-3xl border p-6 shadow-sm ${
                plan.highlight
                  ? "border-blue-300 bg-blue-50/70 shadow-lg"
                  : "border-slate-200 bg-slate-50/60"
              }`}
            >
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                <p className="text-sm text-slate-600">{plan.description}</p>
                <span className="inline-flex w-fit items-center gap-1 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  {variants[variant].label}
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {plan.variants[variant].map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-blue-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <Link
                  href={`/contato?tipo=plano&plano=${encodeURIComponent(`${plan.name}-${variant}`)}`}
                  className={`inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
                    plan.highlight
                      ? "bg-blue-600 text-white hover:bg-blue-500"
                      : "border border-slate-300 bg-white text-slate-900 hover:border-blue-200"
                  }`}
                >
                  Solicitar proposta
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
