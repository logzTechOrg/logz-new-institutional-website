"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import machinesImage from "@/public/assets/fabricante_de_maquinas.jpg";
import componentsImage from "@/public/assets/fabricante.jpg";
import servicesImage from "@/public/assets/prestadora_de_servico.jpg";
import toolingImage from "@/public/assets/ferramentaria.jpg";

const sectors = [
  {
    title: "Fabricantes de máquinas e equipamentos",
    description:
      "Tenha controle total das ferramentas usadas na fabricação e na produção das peças. Reduza custos, evite falta de ferramentas críticas e ganhe previsibilidade na produção e no pós-venda.",
    image: machinesImage,
    imageAlt: "Linha de produção com máquinas industriais",
  },
  {
    title: "Fabricantes de componentes mecânicos",
    description:
      "Ideal para operações de usinagem seriada com alto volume e repetição. Controle consumo por peça, padronize processos e mantenha o estoque ajustado ao ritmo da produção.",
    image: componentsImage,
    imageAlt: "Componentes automotivos sobre bancada de usinagem",
  },
  {
    title: "Prestadoras de serviços de usinagem",
    description:
      "Perfeito para quem trabalha sob demanda e lida com grande variedade de ferramentas. Evite compras emergenciais, tenha visibilidade total do estoque e responda mais rápido às demandas dos clientes.",
    image: servicesImage,
    imageAlt: "Operador realizando serviço de usinagem",
  },
  {
    title: "Ferramentarias",
    description:
      "Desenvolvido para operações de alta precisão e controle rigoroso. Acompanhe desgaste, testes de ferramentas e consumo por projeto, garantindo qualidade, precisão e redução de custos.",
    image: toolingImage,
    imageAlt: "Ferramentas de corte alinhadas em bancada",
  },
] as const;

export function WhoWeServe() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <Container className="space-y-12">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
            Pra quem é
          </p>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            A Log Z é feita para quem vive a usinagem
          </h2>
          <p className="text-base text-slate-600 md:text-lg">
            De fabricantes completos a ferramentarias especializadas, oferecemos controle absoluto das ferramentas e do consumo em cada operação.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {sectors.map((sector) => (
            <article
              key={sector.title}
              className="group flex h-full flex-col overflow-hidden rounded-[32px] bg-white shadow-[0_35px_140px_-70px_rgba(15,23,42,0.55)] ring-1 ring-slate-100 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={sector.image}
                  alt={sector.imageAlt}
                  placeholder="blur"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-900/25 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col gap-3 p-6 text-left">
                <h3 className="text-xl font-semibold text-slate-900">
                  {sector.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {sector.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
