"use client";

import { useState } from "react";
import Image from "next/image";
import { Info, MoveRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const lockerImages = Array.from({ length: 6 }).map((_, index) => ({
  src: `/assets/locker-${index + 1}.jpg`,
  alt: `Locker inteligente ${index + 1}`,
}));

const specs = [
  { label: "Colunas / Gavetas", value: "De 2 a 6 colunas, ate 48 gavetas" },
  { label: "Eletronica", value: "Controladora proprietaria Log Z" },
  { label: "Rede", value: "Ethernet, 4G ou Wi-Fi industrial" },
  {
    label: "Offline",
    value: "Buffer de 24h com sincronizacao automatica",
    tooltip: "O locker continua liberando itens mesmo sem rede e sincroniza assim que reconectar.",
  },
];

const diagramSteps = ["Operador", "Armario Inteligente", "Plataforma / ERP"];

export default function SolutionsLockerGallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof lockerImages)[number] | null>(null);
  const [open, setOpen] = useState(false);

  const handleSelect = (image: (typeof lockerImages)[number]) => {
    setSelectedImage(image);
    setOpen(true);
  };

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <Container className="space-y-10">
        <div className="space-y-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
            Armarios inteligentes
          </span>
          <h2 className="text-3xl font-bold md:text-4xl">Controle fisico com telemetria completa</h2>
          <p className="mx-auto max-w-3xl text-base text-slate-600 md:text-lg">
            Diferentes formatos de lockers com sensores de abertura, leitura de badge e monitoramento continuo.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {lockerImages.map((image) => (
              <button
                key={image.src}
                type="button"
                onClick={() => handleSelect(image)}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={420}
                  height={420}
                  className="h-48 w-full object-cover transition group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700">
                  Ver detalhe
                </span>
              </button>
            ))}
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Especificacoes tecnicas</h3>
              <dl className="mt-4 space-y-4">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex items-start gap-3">
                    <dt className="w-36 text-sm font-semibold text-slate-500">{spec.label}</dt>
                    <dd className="flex-1 text-sm text-slate-700">
                      {spec.value}
                      {spec.tooltip && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              type="button"
                              className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-200 text-slate-500"
                            >
                              <Info className="h-3 w-3" />
                              <span className="sr-only">Explicacao do modo offline</span>
                            </button>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs text-left" side="top">
                            {spec.tooltip}
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-3xl border border-dashed border-blue-200 bg-blue-50/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
                Fluxo
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                {diagramSteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm">
                      {step}
                    </div>
                    {index !== diagramSteps.length - 1 && (
                      <MoveRight className="h-5 w-5 text-blue-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          {selectedImage && (
            <>
              <DialogTitle>{selectedImage.alt}</DialogTitle>
              <DialogDescription>Visualize o locker em alta resolucao.</DialogDescription>
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="rounded-2xl"
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

