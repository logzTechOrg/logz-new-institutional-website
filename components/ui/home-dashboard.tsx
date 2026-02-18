"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import dashboardMockup from "@/assets/mockup-dashboard.png";
import {
  Activity,
  Gauge,
  History,
  LucideIcon,
  TrendingUp,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Indicadores em tempo real",
    description:
      "Acompanhe vibracao, temperatura, tool life e consumo minuto a minuto em um unico painel.",
    icon: Activity,
  },
  {
    title: "Alertas inteligentes",
    description:
      "Receba avisos automaticos quando um ativo sair do envelope ideal para agir antes da parada.",
    icon: TrendingUp,
  },
  {
    title: "Historico e comparacao",
    description:
      "Veja tendencias por turno, operador ou lote e compare periodos para entender evolucao de performance.",
    icon: History,
  },
  {
    title: "Saude do ativo",
    description:
      "Entenda a carga de cada equipamento com score de saude consolidado e priorize manutencao com clareza.",
    icon: Gauge,
  },
];

export default function HomeDashboard() {
  return (
    <section className="bg-slate-900 py-20 text-white md:py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                Controle total em tempo real
              </span>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Tudo o que importa em um dashboard claro
              </h2>
              <p className="text-base text-slate-300 md:text-lg">
                Monitore cada indicador critico de usinagem com insights que
                orientam decisoes rapidas, reduzindo paradas e otimizando a
                producao de ponta a ponta.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_30px_120px_-70px_rgba(0,0,0,0.9)] transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10"
                  >
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-blue-500/15 text-blue-100">
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explorar painel completo
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-3xl">
              <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-blue-500/30 via-indigo-500/10 to-transparent blur-3xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/40 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.85)]">
                <Image
                  src={dashboardMockup}
                  alt="Mockup do dashboard Log Z com indicadores em tempo real"
                  priority
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
