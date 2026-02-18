"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import ctaComplement from "@/public/assets/ctacomplement.svg";

export default function HomeCta() {
  return (
    <section className="relative overflow-visible bg-slate-50 py-16 text-slate-900 md:py-20">
      <div className="pointer-events-none absolute left-0 top-1/2 h-[115%] w-64 -translate-y-1/2 md:left-6 md:h-[125%] md:w-80 lg:left-10 lg:h-[135%] lg:w-[500px]">
        <Image
          src={ctaComplement}
          alt=""
          fill
          sizes="(min-width: 1280px) 480px, (min-width: 768px) 320px, 256px"
          className="object-contain"
          priority
        />
      </div>
      <Container className="relative md:pl-[200px] lg:pl-[360px]">
        <div className="flex flex-col gap-8 rounded-[32px] border border-white/10 bg-slate-900 px-8 py-10 shadow-[0_40px_120px_-60px_rgba(7,14,35,0.8)] backdrop-blur md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="space-y-4 text-center md:max-w-3xl md:text-left">
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              A eficiência da usinagem começa no controle das ferramentas.
            </h2>
            <p className="text-base text-white/80 md:text-lg">
              Fale com um dos nossos especialistas e dê o próximo passo para um setor de usinagem mais eficiente e controlado.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center rounded-2xl bg-[var(--primary)] px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-400"
              >
                Fale com um especialista
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
