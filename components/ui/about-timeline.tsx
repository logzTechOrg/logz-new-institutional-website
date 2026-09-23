"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";

const steps = [
  {
    year: "2022",
    title: "Onde tudo começou",
    summary:
      "A Log Z nasceu dentro das usinagens. O insight veio da vivência de Vinícius Ronchi, após uma década enfrentando falta de visibilidade e controle sobre ferramentas.",
    bullets: [
      "Validação direto no chão de fábrica.",
      "Planilhas em Excel para organizar itens, movimentações e consumo.",
    ],
  },
  {
    year: "2023",
    title: "Primeira versão da plataforma",
    summary: "Lançamos o primeiro formato da plataforma Log Z em um cliente real.",
    bullets: [
      "Processos foram digitalizados.",
      "Redução de custos começou a aparecer.",
      "Validação direta na operação, provando que a usinagem precisava de um sistema simples e visual.",
    ],
  },
  {
    year: "2024",
    title: "Integrações, app mobile e novos modelos de produção",
    summary: "Entramos na fase de integrações e ganho de escala.",
    bullets: [
      "Conectamos ERPs para sincronizar requisições, cadastros e estoque.",
      "Lançamos o app mobile para requisições e consultas rápidas na fábrica.",
      "Aprimoramos fluxo de estoque, movimentações e rastreabilidade para operações mais complexas.",
      "Expandimos de produção seriada para produção sob demanda.",
    ],
  },
  {
    year: "2025",
    title: "A virada: Plataforma 2.0 e hardware inteligente",
    summary: "Elevamos o nível de inteligência e controle.",
    bullets: [
      "Plataforma 2.0 com novo dashboard, indicadores específicos, módulo de testes e visualizações avançadas de estoque.",
      "Armário inteligente com câmera embarcada e integração nativa ao software.",
      "Expansão comercial e técnica em Santa Catarina.",
    ],
  },
  {
    year: "Hoje",
    title: "Evolução contínua",
    summary:
      "Seguimos construindo funcionalidades, integrações e indicadores para levar visibilidade, controle e eficiência para operações de usinagem no Brasil inteiro.",
    bullets: [],
  },
];

export default function AboutTimeline() {
  const [inView, setInView] = useState(false);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = timelineRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-16 md:py-24">
      <Container className="space-y-12">
        <div className="space-y-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
            Linha do tempo
          </span>
          <h2 className="text-3xl font-bold md:text-4xl">Como a Log Z evoluiu</h2>
          <p className="mx-auto max-w-3xl text-base text-slate-600 md:text-lg">
            Estruturamos a jornada para mostrar os marcos que sustentam a plataforma e o hardware que entregamos hoje.
          </p>
        </div>

        <div className="space-y-10">
          <div className="relative hidden md:flex" ref={timelineRef}>
            <div className="absolute left-0 right-0 top-6 h-px bg-slate-200" aria-hidden />
            <div
              className="absolute left-0 top-6 h-px bg-gradient-to-r from-blue-500 to-sky-400 transition-[width] duration-[1200ms] ease-out"
              style={{ width: inView ? "100%" : "0%" }}
              aria-hidden
            />
            {steps.map((step, index) => (
              <div key={step.year} className="relative flex flex-1 flex-col items-center px-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-200 bg-white text-sm font-semibold text-blue-600 shadow-sm">
                  {step.year}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm text-slate-600">{step.summary}</p>
                {step.bullets.length > 0 && (
                  <ul className="mt-3 space-y-2 text-left text-sm text-slate-600">
                    {step.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-blue-300" aria-hidden />
                        <span className="max-w-xs">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {index !== steps.length - 1 && (
                  <div className="absolute top-6 right-0 hidden h-px w-full translate-x-1/2 bg-transparent md:block" aria-hidden />
                )}
              </div>
            ))}
          </div>

          <div className="md:hidden">
            <div className="relative pl-6">
              <div className="absolute left-3 top-3 bottom-3 w-px bg-slate-200" aria-hidden />
              {steps.map((step) => (
                <div key={step.year} className="relative mb-10 last:mb-0">
                  <div className="absolute -left-[9px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-blue-200 bg-white text-[11px] font-semibold text-blue-600">
                    {step.year.slice(-2)}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{step.summary}</p>
                  {step.bullets.length > 0 && (
                    <ul className="mt-2 space-y-2 text-sm text-slate-600">
                      {step.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-blue-300" aria-hidden />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
