"use client";

import Image from "next/image";
import { History, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import auditTrail from "@/public/assets/auditoria.png";

const items = [
  {
    icon: ShieldCheck,
    title: "Perfis e assinaturas digitais",
    description: "Toda retirada vinculada a operador, OS/OP, centro de custo e politica aprovada.",
  },
  {
    icon: History,
    title: "Trilha completa",
    description:
      "Logs com timestamp, dispositivo, motivo e anexos para responder auditorias internas ou clientes.",
  },
];

export default function SolutionsCompliance() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-green-700">
            Pronto para auditorias
          </span>
          <h2 className="text-3xl font-bold md:text-4xl">Auditoria e compliance sem planilhas</h2>
          <p className="text-base text-slate-600 md:text-lg">
            Cada evento do armario, dashboard ou API gera rastro unico, exportavel em PDF ou integrado ao
            seu GRC.
          </p>

          <div className="space-y-4">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4 rounded-3xl border border-slate-200 bg-slate-50/70 p-4">
                  <span className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-blue-100 via-white to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_40px_120px_-60px_rgba(15,23,42,0.5)]">
            <Image
              src={auditTrail}
              alt="Trilha de auditoria Log Z"
              placeholder="blur"
              className="w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

