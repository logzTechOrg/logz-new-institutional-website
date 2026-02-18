"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import auditoriaImage from "@/public/assets/auditoria.png";

const bullets = [
  "Independencia de marcas e fornecedores",
  "KPIs prontos com benchmarking de usinagem",
  "Auditoria e seguranca com trilhas completas",
  "Metodologia de implantacao com squads",
  "Integracao nativa com ERPs do cliente",
];

export default function AboutDifferentials() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
        <div className="space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
            Diferenciais
          </span>
          <h2 className="text-3xl font-bold md:text-4xl">
            Confianca para conectar dados tecnicos ao financeiro
          </h2>
          <p className="text-base text-slate-600 md:text-lg">
            Cada implantacao recebe playbook proprio, indicadores ja homologados e rastreabilidade completa
            para auditar qualquer decisao.
          </p>

          <ul className="space-y-4">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-1 rounded-full bg-blue-50 p-2 text-blue-600">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <span className="text-base text-slate-700">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-blue-100 via-white to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_40px_120px_-60px_rgba(15,23,42,0.5)]">
            <Image
              src={auditoriaImage}
              alt="Tela tecnica de auditoria Log Z"
              placeholder="blur"
              className="w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

