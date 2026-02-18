"use client";

import { ShieldCheck } from "lucide-react";

export default function ContactHero() {
  return (
    <div className="space-y-6 text-center lg:text-left">
      <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-green-700">
        <ShieldCheck className="h-4 w-4" />
        RESPOSTA EM 24H
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl font-bold md:text-5xl text-black">
          Vamos mapear sua oportunidade de redução de custos?
        </h1>
        <p className="text-lg text-slate-600 md:text-xl">
          Conte seu cenário e em 1 dia útil retornamos com os próximos passos.
        </p>
      </div>
    </div>
  );
}