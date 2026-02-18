"use client";

import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Container } from "@/components/ui/container";

const dashboards = [
  {
    title: "Compras vs Consumo (FIFO)",
    description: "Compare pedidos, estoque e consumo real por lote e centro de custo.",
    image: "/assets/dash-1.png",
  },
  {
    title: "Top itens e colaboradores",
    description: "Entenda quem consome o que e identifique oportunidades de treinamento.",
    image: "/assets/dash-2.png",
  },
  {
    title: "Alertas de ruptura / validade",
    description: "Receba alertas antecipados por familia de itens e turno de operacao.",
    image: "/assets/dash-3.png",
  },
];

export default function SolutionsDashboardCards() {
  return (
    <section className="bg-slate-900 py-16 md:py-24">
      <Container className="space-y-10">
        <div className="space-y-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white">
            Dashboards & Indicadores
          </span>
          <h2 className="text-3xl text-white font-bold md:text-4xl">Decisoes em minutos, nao em planilhas</h2>
          <p className="mx-auto max-w-3xl text-base text-slate-200 md:text-lg">
            Clique em cada card para abrir o painel completo em modo drawer.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {dashboards.map((dashboard) => (
            <Sheet key={dashboard.title}>
              <SheetTrigger asChild>
                <button className="flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50/70 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-slate-900">{dashboard.title}</h3>
                    <p className="text-sm text-slate-600">{dashboard.description}</p>
                  </div>
                  <span className="mt-auto pt-6 text-sm font-semibold text-blue-600">
                    Abrir painel
                  </span>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-3xl sm:max-w-2xl">
                <SheetHeader>
                  <SheetTitle>{dashboard.title}</SheetTitle>
                  <SheetDescription>{dashboard.description}</SheetDescription>
                </SheetHeader>
                <div className="p-4">
                  <Image
                    src={dashboard.image}
                    alt={dashboard.title}
                    width={1400}
                    height={900}
                    className="rounded-2xl border border-slate-200 shadow-sm"
                  />
                </div>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </Container>
    </section>
  );
}

