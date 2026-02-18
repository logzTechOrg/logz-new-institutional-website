import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  Clock3,
  PiggyBank,
  Quote,
  ShieldCheck,
  Share2,
  Target,
  Timer,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { cases, getCaseBySlug } from "@/lib/cases";

const resultIcons = {
  save: PiggyBank,
  shield: ShieldCheck,
  clock: Clock3,
  trend: TrendingUp,
  accuracy: Target,
  lead: Timer,
};

export function generateStaticParams() {
  return cases.map((singleCase) => ({ slug: singleCase.slug }));
}

type CasePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const caseData = getCaseBySlug(slug);

  if (!caseData) {
    notFound();
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://logz.com.br";
  const shareUrl = `${siteUrl}/cases/${caseData.slug}`;

  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-50 py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
              {caseData.sector}
            </span>
            <h1 className="text-4xl font-bold md:text-5xl">{caseData.title}</h1>
            <p className="text-base text-slate-600 md:text-lg">{caseData.summary}</p>
            <dl className="flex flex-wrap gap-6 text-sm text-slate-600">
              <div>
                <dt className="text-xs uppercase tracking-[0.35em] text-slate-400">Local</dt>
                <dd className="font-semibold text-slate-900">
                  {caseData.region.city} / {caseData.region.state}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.35em] text-slate-400">
                  Tipo de ganho
                </dt>
                <dd className="font-semibold text-slate-900">{caseData.gainType}</dd>
              </div>
            </dl>
            <div className="flex flex-wrap items-center gap-4">
              <div className="rounded-3xl bg-blue-600 px-6 py-4 text-lg font-semibold text-white shadow-lg">
                {caseData.metricHighlight}
              </div>
              <Link
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  shareUrl
                )}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Compartilhar case no LinkedIn"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                <Share2 className="h-4 w-4" />
                Compartilhar
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_120px_-60px_rgba(15,23,42,0.35)]">
            <Image
              src={caseData.image}
              alt={`Imagem do case ${caseData.title}`}
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
              Cenario inicial
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Onde comecamos</h2>
            <p className="text-base text-slate-600 md:text-lg">
              Antes do Log Z, o time convivia com rupturas, compras emergenciais e falta de
              visibilidade. Mapear o cenario permitiu definir quais indicadores seriam usados como
              linha de base.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
              Indicadores base
            </p>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              {caseData.baseline.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/60 bg-white px-4 py-3">
                  <dt className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.label}</dt>
                  <dd className="text-lg font-semibold text-slate-900">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <Container className="space-y-8">
          <div className="space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
              Solucoes aplicadas
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">O que usamos neste case</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {caseData.solutions.map((solution) => (
              <span
                key={solution}
                className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700"
              >
                {solution}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="space-y-10">
          <div className="space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
              Resultados
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">KPIs acompanhados pela diretoria</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {caseData.results.map((result) => {
              const Icon = resultIcons[result.icon] ?? ArrowUpRight;
              return (
                <div
                  key={result.label}
                  className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-4 text-3xl font-bold text-slate-900">{result.value}</p>
                  <p className="text-sm text-slate-500">{result.label}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <Container className="space-y-8">
          <div className="space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
              Linha do tempo
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Implantacao em marcos curtos</h2>
          </div>
          <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="absolute left-8 top-12 bottom-12 hidden w-px bg-slate-200 lg:block" />
            <ol className="space-y-6">
              {caseData.timeline.map((step, index) => (
                <li key={step.step} className="flex gap-4">
                  <div className="flex flex-none flex-col items-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white shadow">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{step.step}</h3>
                    <p className="text-sm text-slate-600">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {caseData.quote && (
        <section className="py-16 md:py-24">
          <Container>
            <div className="rounded-[32px] border border-slate-200 bg-slate-50/80 p-10 shadow-sm">
              <Quote className="h-10 w-10 text-blue-500" />
              <p className="mt-6 text-2xl font-semibold text-slate-900">{caseData.quote.text}</p>
              <p className="mt-4 text-sm text-slate-600">
                {caseData.quote.author} - {caseData.quote.role}, {caseData.quote.company}
              </p>
            </div>
          </Container>
        </section>
      )}

      <section className="bg-slate-900 py-16 text-white md:py-24">
        <Container className="space-y-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
            proximo passo
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">Quero um diagnostico semelhante</h2>
          <p className="mx-auto max-w-3xl text-base text-slate-200 md:text-lg">
            Entenda em quanto tempo podemos replicar estes resultados na sua planta. Receba um
            roadmap com indicadores e prazos.
          </p>
          <Link
            href="/contato?tipo=diagnostico"
            className="inline-flex items-center justify-center rounded-2xl bg-blue-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200"
          >
            Agendar diagnostico
          </Link>
        </Container>
      </section>
    </main>
  );
}
