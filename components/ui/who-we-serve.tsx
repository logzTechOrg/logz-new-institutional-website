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
    <section className="bg-slate-50 py-12 md:py-20 lg:py-24">
      <Container className="space-y-10 md:space-y-12">
        <div className="mx-auto max-w-3xl text-center space-y-3 md:space-y-4 px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
            Pra quem é
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            A Log Z é feita para quem vive a usinagem
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            De fabricantes completos a ferramentarias especializadas, oferecemos controle absoluto das ferramentas e do consumo em cada operação.
          </p>
        </div>

        <div className="grid gap-5 md:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {sectors.map((sector) => (
            <article
              key={sector.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl md:rounded-3xl bg-white shadow-md hover:shadow-lg ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative w-full aspect-video overflow-hidden bg-slate-200">
                <Image
                  src={sector.image}
                  alt={sector.imageAlt}
                  placeholder="blur"
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 h-12 md:h-16 bg-gradient-to-t from-slate-900/20 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col gap-2 md:gap-3 p-5 md:p-6 text-left">
                <h3 className="text-base md:text-lg font-semibold text-slate-900 leading-snug">
                  {sector.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
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
