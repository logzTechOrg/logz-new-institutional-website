"use client";

import { useState } from "react";
import { ArrowRight, Database } from "lucide-react";
import { Container } from "@/components/ui/container";

const logos = ["SAP", "Protheus", "Totvs", "Oracle", "Infor", "Sinqia"];

const formats = [
  {
    title: "Itens e contratos",
    fields: ["codigo", "descricao", "familia", "contrato", "lead-time"],
  },
  {
    title: "Notas e requisicoes",
    fields: ["numero NF", "pedido compras", "centro de custo", "valor"],
  },
  {
    title: "OP / OS",
    fields: ["ordem", "cliente", "linha", "turno", "responsavel"],
  },
  {
    title: "Usuarios",
    fields: ["matricula", "cpf", "turno", "perfis"],
  },
];

export default function SolutionsErpIntegrations() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <Container className="space-y-10">
        <div className="space-y-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
            Integracoes ERP
          </span>
          <h2 className="text-3xl font-bold md:text-4xl">
            Dados circulando entre quem compra, usa e aprova
          </h2>
          <p className="mx-auto max-w-3xl text-base text-slate-600 md:text-lg">
            APIs, arquivos ou EDI padronizados para conectar SAP, Totvs, Protheus e outros sistemas.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-3">
              {logos.map((logo) => (
                <div
                  key={logo}
                  className="flex h-20 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 text-lg font-semibold text-slate-700"
                >
                  {logo}
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-dashed border-blue-200 bg-blue-50/70 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
                Fluxo padrao
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-900">
                {["API", "CSV", "EDI"].map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="rounded-2xl bg-white px-4 py-2 shadow-sm">{step}</span>
                    {index !== 2 && <ArrowRight className="h-5 w-5 text-blue-500" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="rounded-2xl bg-blue-50 p-2 text-blue-600">
                <Database className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Formatos suportados</h3>
                <p className="text-sm text-slate-600">Escolha o modelo ideal e veja os campos.</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="mt-4 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-semibold text-slate-900 transition hover:border-blue-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              aria-expanded={open}
            >
              {open ? "Ocultar exemplos" : "Ver exemplos de campos"}
            </button>

            <div
              className={`grid overflow-hidden transition-all duration-300 ${
                open ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="space-y-5 text-sm text-slate-700">
                {formats.map((format) => (
                  <div key={format.title} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                    <p className="font-semibold text-slate-900">{format.title}</p>
                    <p className="mt-1 text-slate-600">{format.fields.join(" / ")}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

