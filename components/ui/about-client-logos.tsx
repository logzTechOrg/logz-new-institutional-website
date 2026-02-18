"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";

const logos = [
  { name: "Automotivo", src: "/assets/logo-automotivo.svg" },
  { name: "Energia", src: "/assets/logo-energia.svg" },
  { name: "Alimentos", src: "/assets/logo-alimentos.svg" },
  { name: "Farmaceutico", src: "/assets/logo-farmaceutico.svg" },
  { name: "Logistica", src: "/assets/logo-logistica.svg" },
  { name: "Mineracao", src: "/assets/logo-mineracao.svg" },
];

export default function AboutClientLogos() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container className="space-y-10">
        <div className="space-y-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
            Setores
          </span>
          <h2 className="text-3xl font-bold md:text-4xl">Industrias que confiam para fazer melhor</h2>
          <p className="mx-auto max-w-2xl text-base text-slate-600 md:text-lg">
            Trabalhamos com manutencao, engenharia e operacoes em segmentos diferentes para cruzar boas praticas.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="group flex items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-4 transition hover:border-blue-100 hover:bg-white"
            >
              <Image
                src={logo.src}
                alt={`Logo setor ${logo.name}`}
                width={180}
                height={80}
                className="h-16 w-auto object-contain grayscale transition group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

