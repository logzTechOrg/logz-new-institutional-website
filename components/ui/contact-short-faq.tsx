"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";

const faqItems = [
  {
    question: "Qual o prazo de retorno?",
    answer: "Respondemos em até 1 dia útil com um plano preliminar e sugestão de agenda.",
  },
  {
    question: "Como funciona a demonstração?",
    answer:
      "Conectamos dados fictícios do seu segmento e mostramos os fluxos de gestão, armários e dashboards.",
  },
  {
    question: "Existem pré-requisitos técnicos?",
    answer:
      "Não. Trabalhamos com conectores próprios ou simples arquivos CSV. Integramos com SAP, Protheus, Oracle e APIs customizadas.",
  },
  {
    question: "O que precisa para integrar ao ERP?",
    answer:
      "Um usuário técnico e, opcionalmente, acesso a ambientes de homologação. Nosso time apoia toda a configuração.",
  },
  {
    question: "Vocês atendem plantas fora do Brasil?",
    answer:
      "Sim, atendemos clientes no Brasil e na América Latina com squads bilíngues e suporte remoto.",
  },
];

export default function ContactShortFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-slate-900 py-16 md:py-24">
      <Container className="space-y-8">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
            FAQ rápido
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Perguntas frequentes sobre o onboarding</h2>
        </div>
        <div className="rounded-[32px] border border-slate-200 bg-slate-50/60">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="border-b border-slate-100 last:border-none">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-3 text-left"
                >
                  <span className="text-base font-semibold text-slate-900">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-700 transition ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden px-6 pb-5 transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="text-sm text-slate-600">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
