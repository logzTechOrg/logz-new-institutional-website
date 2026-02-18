"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";

export default function ContactMap() {
  const [loaded, setLoaded] = useState(false);
  return (
    <section className="bg-slate-900 py-16 md:py-24">
      <Container>
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
            Onde estamos
          </p>
          <div className="mt-4 relative h-80">
            {!loaded && (
              <div className="absolute inset-0 animate-pulse rounded-3xl bg-slate-100" aria-hidden />
            )}
            <iframe
              title="Localizacao Log Z"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4214.771735187341!2d-49.413907!3d-28.707599599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952183af07dc0ff3%3A0x89c7d84d8092d98b!2sLog%20Z%20Tech%20-%20Sistemas%20Para%20Usinagem%20em%20Crici%C3%BAma!5e1!3m2!1spt-BR!2sbr!4v1762541893933!5m2!1spt-BR!2sbr"
              className={`h-full w-full rounded-3xl border-0 transition-opacity duration-300 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setLoaded(true)}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
