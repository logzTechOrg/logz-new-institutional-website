"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Case } from "@/lib/cases";

type CaseCardProps = {
  data: Case;
};

export function CaseCard({ data }: CaseCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-within:outline focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-blue-500">
      <div className="relative">
        <Image
          src={data.image}
          alt={`Imagem do case ${data.title}`}
          width={600}
          height={400}
          className="h-48 w-full rounded-t-3xl object-cover"
        />
        <span className="absolute left-4 top-4 inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-700">
          {data.sector}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-slate-900">{data.title}</h3>
          <p className="text-sm text-slate-500">
            {data.region.city} - {data.region.state} - {data.gainType}
          </p>
        </div>

        <div className="rounded-2xl bg-blue-50/60 px-4 py-3 text-sm font-semibold text-blue-700">
          {data.metricHighlight}
        </div>

        <ul className="space-y-2 text-sm text-slate-600">
          {data.bullets.slice(0, 3).map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4">
          <Link
            href={`/cases/${data.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            aria-label={`Ver detalhes do case ${data.title}`}
          >
            Ver case
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
