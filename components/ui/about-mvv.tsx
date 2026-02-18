"use client";

import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, ShieldCheck, Target } from "lucide-react";

const items = [
  {
    title: "Missao",
    description:
      "Garantir independencia tecnologica para as fabricas, conectando dados operacionais a resultados financeiros sem vies.",
    icon: Target,
  },
  {
    title: "Visao",
    description:
      "Ser a referencia latino-americana em monitoramento neutro de usinagem, com implantacoes em menos de 30 dias.",
    icon: Eye,
  },
  {
    title: "Valores",
    description:
      "Transparencia radical, respeito ao tempo do chao de fabrica e foco continuo em seguranca e retorno financeiro.",
    icon: ShieldCheck,
  },
];

export default function AboutMvv() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <Container className="space-y-10">
        <div className="space-y-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
            Mvv
          </span>
          <h2 className="text-3xl font-bold md:text-4xl">
            O que guia cada implantacao
          </h2>
          <p className="mx-auto max-w-3xl text-base text-slate-600 md:text-lg">
            Declaracoes simples para manter o foco na autonomia do cliente e no impacto real.
          </p>
        </div>

        <div className="snap-x snap-mandatory overflow-x-auto pb-6 lg:overflow-visible">
          <div className="grid min-w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="snap-center border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-200/70"
                >
                  <CardHeader className="gap-4 py-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon className="h-7 w-7" strokeWidth={1.8} />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-8">
                    <p className="text-base text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
