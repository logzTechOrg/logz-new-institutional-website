"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import gestao2 from "@/public/assets/Frame79.jpg";
import ferramentas from "@/public/assets/FERRAMENTASPRINTT.png"
import controle from "@/public/assets/CONTROLEPRINT.png"

const slides = [
  {
    title: "Inteligência e Visibilidade",
    subtitle:
      "Monitore consumo, custos e tendências em tempo real com indicadores que revelam exatamente onde a usinagem pode ganhar eficiência.",
    image: gestao2,
    imageAlt: "Indicadores de desempenho em um painel unificado",
    items: [
      {
        title: "Indicadores em tempo real",
        description:
          "Veja consumo, rupturas e custos no momento em que acontecem. Decisões rápidas, zero suposições.",
      },
      {
        title: "Histórico e comparação",
        description:
          "Compare consumo por período, máquina ou operador. Identifique padrões, desvios e oportunidades.",
      },
      {
        title: "Alertas inteligentes",
        description:
          "Avisos automáticos antes de rupturas ou excessos. Aja antes do problema chegar.",
      },
      {
        title: "Insights que reduzem custos",
        description:
          "Tudo o que importa em um painel claro. Menos tempo analisando, mais tempo gerenciando.",
      },
    ],
  },
  {
    title: "Controle e Operação",
    subtitle:
      "Organize estoque, padronize processos e garanta rastreabilidade total das ferramentas com controles precisos e fluxo operacional claro.",
    image: controle,
    imageAlt: "Fluxo de operação e controle de estoque",
    items: [
      {
        title: "Estoque otimizado com algoritmo inteligente",
        description:
          "Ajuste automático de mínimo e máximo com base no consumo e lead time. Evita sobra, evita falta, evita custo.",
      },
      {
        title: "Gestão completa de fornecedores",
        description:
          "Histórico de compras por fornecedor com preços, volumes e variações. Mais controle para negociar melhor, evitar aumentos e economizar.",
      },
    ],
  },
  {
    title: "Eficiência e Automação",
    subtitle:
      "Conecte operadores, fornecedores, armários inteligentes e ERPs em um sistema integrado que reduz retrabalho, acelera decisões e aumenta produtividade.",
    image: ferramentas,
    imageAlt: "Automação e integração de sistemas",
    items: [
      {
        title: "Log App",
        description: "Retiradas rápidas e rastreadas no celular. Praticidade no chão de fábrica.",
      },
      {
        title: "Dados atualizados em tempo real",
        description: "Tudo sincronizado no instante em que acontece. Zero divergências, zero ruído.",
      },
      {
        title: "Integrações com ERP",
        description: "Fluxos unidos, sem retrabalho e sem duplicidade. Fluxo contínuo da compra ao consumo.",
      },
      {
        title: "Armário inteligente",
        description:
          "Câmera embarcada + controle físico + digital. Precisão e segurança máxima.",
      },
    ],
  },
];

export default function SolutionsModuleBlock() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const handleNavigate = (direction: "next" | "prev") => {
    setActiveIndex((current) => {
      if (direction === "next") {
        return current === slides.length - 1 ? 0 : current + 1;
      }
      return current === 0 ? slides.length - 1 : current - 1;
    });
  };

  return (
    <section className="relative bg-slate-900 py-16 text-slate-100 md:py-24">
      <div className="space-y-10 md:space-y-12">

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 sm:px-5 md:px-8 lg:px-12 xl:px-16">
            <button
              type="button"
              onClick={() => handleNavigate("prev")}
              className="pointer-events-auto p-2 text-slate-100 transition hover:text-blue-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
              aria-label="Slide anterior"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={() => handleNavigate("next")}
              className="pointer-events-auto p-2 text-slate-100 transition hover:text-blue-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
              aria-label="Proximo slide"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>

          <Container>
            <div
              key={activeIndex}
              className="slide-right grid gap-10 lg:min-h-[620px] lg:grid-cols-2 lg:items-center"
            >
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
                      Como funciona a solução da Log Z
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white md:text-4xl">{activeSlide.title}</h2>
                  <p className="text-base text-slate-300 md:text-lg">{activeSlide.subtitle}</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {activeSlide.items.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-slate-700 bg-slate-800 p-4 shadow-sm"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 rounded-2xl bg-blue-500/10 p-2 text-blue-200">
                          <BadgeCheck className="h-5 w-5" />
                        </span>
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold text-slate-50">{item.title}</h3>
                          <p className="text-sm text-slate-300">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[610px] aspect-[16/9] overflow-hidden rounded-[32px] border border-slate-800 bg-slate-800 shadow-[0_30px_120px_-60px_rgba(15,23,42,0.45)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative aspect-[16/9] w-full max-h-full overflow-hidden rounded-[28px] bg-slate-800">
                    <Image
                      src={activeSlide.image}
                      alt={activeSlide.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 610px, (min-width: 768px) 80vw, 90vw"
                      quality={100}
                      priority
                      placeholder="blur"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <Container>
          <div className="flex justify-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeIndex ? "bg-blue-400" : "bg-slate-600"
                }`}
                aria-label={`Ir para ${slide.title}`}
              />
            ))}
          </div>
        </Container>
      </div>
      <style jsx>{`
        .slide-right {
          animation: slide-right 520ms ease-out;
          will-change: transform, opacity;
        }

        @keyframes slide-right {
          from {
            opacity: 0.6;
            transform: translateX(-24px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
