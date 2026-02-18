"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Quote, Star } from "lucide-react";
import anaImage from "./../../public/assets/team-ana.jpg"
import carlosImage from "./../../public/assets/team-carlos.jpg"
import marinaImage from "./../../public/assets/team-marina.jpg"

const testimonials = [
  {
    name: "Ana Ribeiro",
    role: "Coordenadora de Ferramentaria",
    company: "RZ Usinagem",
    quote:
      "Sem visibilidade, trocávamos insert na urgência. Agora a Log Z mostra consumo por máquina e dispara pedidos antes da ruptura.",
    metricLabel: "Redução de paradas",
    metricValue: "-38%",
    image: anaImage,
  },
  {
    name: "Carlos Mendes",
    role: "Gerente Industrial",
    company: "MetalWorks Grupo",
    quote:
      "Unificamos armários, estoque e ERP. A rastreabilidade da plataforma tirou o peso das auditorias e liberou a equipe para otimizar setup.",
    metricLabel: "Horas liberadas/mês",
    metricValue: "+72h",
    image: carlosImage,
  },
  {
    name: "Marina Costa",
    role: "Compras Estratégicas",
    company: "Forge&Co",
    quote:
      "Com o comparativo de centros de custo sabemos exatamente onde negociar. O time compra certo e nunca mais pagamos frete aéreo.",
    metricLabel: "Economia anual",
    metricValue: "R$ 480k",
    image: marinaImage,
  },
] as const;

export default function HomeTestimonials() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container className="space-y-12">
        <div className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
            Histórias reais
          </p>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Quem vive usinagem confia na Log Z
          </h2>
          <p className="mx-auto max-w-3xl text-base text-slate-600 md:text-lg">
            Resultados consistentes em fabricantes, ferramentarias e prestadores que conectaram
            estoque, armários inteligentes e dados de produção.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}

type Testimonial = (typeof testimonials)[number];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="relative flex h-full flex-col gap-5 rounded-[32px] border border-slate-100 bg-white p-8 text-left shadow-[0_35px_140px_-70px_rgba(15,23,42,0.55)]">
      <Quote className="absolute right-8 top-8 h-8 w-8 rotate-180 text-slate-100" strokeWidth={1.5} />

      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14 overflow-hidden rounded-2xl">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            placeholder="blur"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{testimonial.name}</h3>
          <p className="text-sm text-slate-500">
            {testimonial.role} · {testimonial.company}
          </p>
          <div className="mt-2 flex items-center gap-0.5 text-amber-500">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={`${testimonial.name}-star-${index}`}
                className="h-4 w-4"
                strokeWidth={1.5}
                fill="currentColor"
              />
            ))}
          </div>
        </div>
      </div>

      <p className="text-base text-slate-700">{testimonial.quote}</p>

      <div className="mt-auto rounded-2xl bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          {testimonial.metricLabel}
        </p>
        <p className="text-3xl font-bold text-slate-900">{testimonial.metricValue}</p>
      </div>
    </article>
  );
}
