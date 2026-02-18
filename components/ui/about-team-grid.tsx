"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Container } from "@/components/ui/container";

const teamMembers = [
  {
    name: "Ana Costa",
    role: "Diretora de Operacoes",
    image: "/assets/team-ana.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Carlos Lima",
    role: "Head de Produto",
    image: "/assets/team-carlos.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Joao Mendes",
    role: "Especialista em Dados",
    image: "/assets/team-joao.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Marina Ruiz",
    role: "Sucesso do Cliente",
    image: "/assets/team-marina.jpg",
    linkedin: "https://www.linkedin.com",
  },
];

export default function AboutTeamGrid() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container className="space-y-10">
        <div className="space-y-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
            Time
          </span>
          <h2 className="text-3xl font-bold md:text-4xl">Especialistas que viveram o chao de fabrica</h2>
          <p className="mx-auto max-w-3xl text-base text-slate-600 md:text-lg">
            Gente que ja ocupou manutencao, logistica e engenharia em industrias reais e agora acelera clientes Log Z.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col rounded-3xl border border-slate-200 bg-slate-50/60 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-200">
                <Image
                  src={member.image}
                  alt={`Foto de ${member.name}`}
                  width={420}
                  height={420}
                  className="h-60 w-full object-cover"
                />
              </div>
              <div className="mt-5 flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                <p className="text-sm text-slate-600">{member.role}</p>
              </div>
              <div className="mt-4">
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`LinkedIn de ${member.name}`}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-blue-400 hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
