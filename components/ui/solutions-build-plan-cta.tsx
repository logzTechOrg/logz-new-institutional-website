"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/container";

const personaOptions = ["Compras", "Usinagem", "Direcao"];
const planOptions = ["Essencial", "Pro", "Enterprise"];

export default function SolutionsBuildPlanCta() {
  const router = useRouter();
  const [persona, setPersona] = useState(personaOptions[0]);
  const [plan, setPlan] = useState(planOptions[1]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = new URLSearchParams({
      tipo: "plano",
      persona: persona.toLowerCase(),
      plano: plan,
    });
    router.push(`/contato?${query.toString()}`);
  };

  return (
    <section className="bg-slate-900 py-16 text-white md:py-24">
      <Container>
        <div className="rounded-[32px] border border-white/10 bg-slate-800/80 p-8 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)]">
          <div className="space-y-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
              plano personalizado
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Monte seu plano agora</h2>
            <p className="mx-auto max-w-3xl text-base text-slate-200 md:text-lg">
              Escolha a persona e o plano ideal e enviamos uma proposta com benchmark completo.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-8 grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_200px]"
          >
            <label className="text-left text-sm font-semibold text-slate-200">
              Persona
              <select
                value={persona}
                onChange={(event) => setPersona(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-base text-white focus:border-blue-300 focus:outline-none"
              >
                {personaOptions.map((option) => (
                  <option key={option} value={option} className="text-slate-900">
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="text-left text-sm font-semibold text-slate-200">
              Plano
              <select
                value={plan}
                onChange={(event) => setPlan(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-base text-white focus:border-blue-300 focus:outline-none"
              >
                {planOptions.map((option) => (
                  <option key={option} value={option} className="text-slate-900">
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="submit"
              className="mt-6 md:mt-8 inline-flex items-center justify-center rounded-2xl bg-blue-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200"
            >
              Montar meu plano
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}

