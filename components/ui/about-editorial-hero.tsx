"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import factoryImage from "@/public/assets/factory.jpg";
import { Container } from "@/components/ui/container";
import Link from "next/link";

const values = ["Inovação", "Visibilidade", "Eficiência"];

export default function AboutEditorialHero() {
  return (
    <section className="bg-white py-14 text-slate-900">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
        <div className="space-y-6">
          <p className="text-md font-semibold uppercase tracking-[0.35em] text-blue-600">
            Quem somos
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Conheça a Log Z: Sinônimo de inovação e eficiência em gerenciamento de ferramentas
          </h1>
          <p className="text-lg text-slate-600 md:text-xl">
            Empresas de usinagem confiam na Log Z para transformar informações em controle, estoques
            em previsibilidade e decisões em redução de custos. Se você busca eficiência operacional
            e clareza sobre seus processos, a Log Z é a parceira certa para alcançar esse resultado.
          </p>

          <div>
            <Link
              href="https://wa.me/message/JFDMR2UAEGKXJ1"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Saiba mais sobre a Log Z
            </Link>
          </div>
        </div>

        <Card className="relative overflow-hidden rounded-[32px] border-slate-100 bg-slate-900/90 p-0 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.65)]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-transparent to-slate-900/70" />
          <div className="relative">
            <Image
              src={factoryImage}
              alt="Chao de fabrica monitorado pelo Log Z"
              placeholder="blur"
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 540px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
          </div>

        </Card>
      </Container>
    </section>
  );
}
