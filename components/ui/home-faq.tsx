"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";

const faqs = [
  {
    question: "A Log Z serve para o tipo de usinagem da minha empresa?",
    answer:
      "Sim. A Log Z foi criada para atender diferentes realidades de usinagem, desde produção seriada ate produção sob demanda, incluindo fabricantes de máquinas, componentes mecânicos, prestadoras de serviço e ferramentarias.",
  },
  {
    question: "Preciso mudar toda a minha operação para usar a Log Z?",
    answer:
      "Não. A Log Z se integra a rotina existente da empresa e pode ser implantada de forma gradual. Você começa organizando o controle das ferramentas e, aos poucos, evolui para indicadores, automações e integrações, sem interromper a produção.",
  },
  {
    question: "Quanto tempo leva para começar a usar a Log Z na prática?",
    answer:
      "A implantacao é rápida e orientada por especialistas. Em poucos dias, sua equipe ja consegue registrar movimentações, acompanhar estoque e visualizar dados reais da operação. O objetivo e gerar valor desde o início, sem projetos longos ou complexos.",
  },
  {
    question: "A Log Z é difícil de usar no dia a dia?",
    answer:
      "Não. A plataforma foi pensada para o chão de fábrica, com interface simples, visual e intuitiva. Operadores, líderes e gestores conseguem usar a Log Z rapidamente, sem depender de longos treinamentos.",
  },
  {
    question: "A Log Z oferece suporte apos a implantação?",
    answer:
      "Sim. Nossa equipe acompanha a implantação e segue próxima após o início do uso, ajudando a extrair o máximo valor da plataforma e garantindo que a operação evolua junto com o sistema.",
  },
];

export default function HomeFaq() {
  const allIndexes = useMemo(() => faqs.map((_, index) => index), []);
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  const toggleAll = () => {
    setOpenItems((prev) => (prev.length === faqs.length ? [] : allIndexes));
  };

  const isAllOpen = openItems.length === faqs.length;

  return (
    <section className="bg-slate-900 py-20 text-white md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
                Perguntas frequentes
              </span>
              <h2 className="text-3xl font-bold md:text-4xl">
                Perguntas mais comuns
              </h2>
              <p className="text-base text-white">
                Respostas rápidas para o que ouvimos de equipes do setor de usinagem quando conectam a Log Z.
              </p>
            </div>
            <button
              type="button"
              onClick={toggleAll}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-blue-400 shadow-sm transition hover:border-blue-400 hover:text-blue-600"
            >
              {isAllOpen ? "Fechar todos" : "Abrir todos"}
            </button>
          </div>

          <div className="border-y border-slate-200 divide-y divide-slate-200">
            {faqs.map((faq, index) => {
              const isOpen = openItems.includes(index);

              return (
                <div
                  key={faq.question}
                  className={`transition-all duration-300 ${isOpen ? "py-5" : "py-2"}`}
                >
                  <button
                    type="button"
                    onClick={() => toggleIndex(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="text-base font-semibold text-white md:text-lg">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-white transition-transform ${isOpen ? "rotate-180" : ""}`}
                      strokeWidth={2.2}
                    />
                  </button>

                  <div
                    className={`grid overflow-hidden transition-all duration-300 ${
                      isOpen ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="text-sm text-gray md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
