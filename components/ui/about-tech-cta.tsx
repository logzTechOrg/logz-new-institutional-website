"use client";

import Link from "next/link";
import { Wrench } from "lucide-react";
import { Container } from "@/components/ui/container";

export default function AboutTechCta() {
  return (
    <section className="bg-slate-900 py-16 text-white md:py-24">
      <Container>
        <div className="flex flex-col items-start gap-8 rounded-[32px] border border-white/10 bg-slate-800/60 p-10 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.9)] md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-200">
              <Wrench className="h-7 w-7" />
            </span>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
                suporte tecnico
              </p>
              <h2 className="text-3xl font-bold">Fale com nosso time tecnico</h2>
              <p className="text-base text-slate-200 md:text-lg">
                Engenheiros e especialistas respondem sua necessidade, conectam dados e desenham o plano de implantacao.
              </p>
            </div>
          </div>

          <Link
            href="/contato?tipo=time-tecnico"
            className="inline-flex items-center justify-center rounded-2xl bg-blue-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200"
          >
            Agendar conversa
          </Link>
        </div>
      </Container>
    </section>
  );
}

