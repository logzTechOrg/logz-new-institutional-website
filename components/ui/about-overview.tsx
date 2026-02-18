"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import logzteam from "@/public/assets/logz-team.png";

export default function AboutOverview() {
  return (
    <section id="sobre-nos" className="bg-slate-900 py-16 md:py-24">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">Sobre nós</p>
          <h2 className="text-3xl text-white font-bold md:text-4xl">O que é a Log Z</h2>
          <div className="space-y-4 text-base text-white md:text-lg">
            <p>
              A Log Z é uma empresa de tecnologia localizada em Santa Catarina.
            </p>
            <p>
              Acreditamos que a gestão das ferramentas de corte são o ponto de partida para otimizar o setor de usinagem.
            </p>
            <p>
              Nossa plataforma organiza, mapeia e revela dados que antes passavam despercebidos, colocando o gestor no controle do que realmente move a produção.
            </p>
            <p>
              Com uma leitura clara de consumo e movimentação das ferramentas, ajudamos a tomar decisões baseadas em fatos, trazendo previsibilidade e economia a longo prazo.
            </p>
          </div>
        </div>

        <Card className="relative overflow-visible border-none bg-transparent p-0 shadow-none">
          <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-blue-100/60 blur-3xl" aria-hidden />
          <div className="absolute -bottom-14 -right-10 h-52 w-52 rounded-full bg-slate-200/70 blur-3xl" aria-hidden />
          <div className="relative">
            <div className="mx-auto w-full max-w-[620px] overflow-hidden rounded-[32px] shadow-[0_30px_120px_-80px_rgba(15,23,42,0.9)]">
              <Image
                src={logzteam}
                alt="Time Log Z"
                sizes="(min-width: 1024px) 620px, 95vw"
                quality={95}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
