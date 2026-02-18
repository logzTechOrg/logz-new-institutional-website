"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function HomeHero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  const tryPlay = () => {
    const video = videoRef.current;
    if (!video || videoFailed) return;
    video.play().catch(() => setVideoFailed(true));
  };

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotion = () => {
      const video = videoRef.current;
      if (!video) return;
      if (motionQuery.matches) {
        video.pause();
      } else {
        tryPlay();
      }
    };

    handleMotion();
    motionQuery.addEventListener("change", handleMotion);
    return () => motionQuery.removeEventListener("change", handleMotion);
  }, [videoFailed]);

  return (
    <section className="relative -mt-24 overflow-hidden bg-white pb-28">
      <div className="pointer-events-none absolute inset-0 z-0 bg-black">
        {videoFailed ? (
          <div className="relative h-full w-full">
            <Image
              src="/assets/dash-1.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
              aria-hidden="true"
            />
          </div>
        ) : (
          <video
            ref={videoRef}
            className="h-full w-full object-cover opacity-100"
            src="/assets/video.mp4"
            preload="auto"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            aria-hidden="true"
            disablePictureInPicture
            onLoadedData={() => setVideoFailed(false)}
            onError={() => setVideoFailed(true)}
            onStalled={() => setVideoFailed(true)}
            onAbort={() => setVideoFailed(true)}
          />
        )}
        <div className="absolute inset-0 bg-white/55" aria-hidden="true" />
      </div>
      <Container className="relative z-10 mb-15 pt-28 md:pt-32">
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="w-full max-w-3xl">
            <h1 className="mt-15 text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
              Você no controle das ferramentas de usinagem.
            </h1>
            <p className="mt-6 text-lg text-gray-600 md:text-md">
              Simplifique a gestão, tenha clareza sobre as compras e consumos e
              reduza custos com a Log Z.
            </p>

            <div className="mt-15 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-lg leading-none font-medium bg-[var(--primary)] text-white shadow transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
              >
                Comece agora
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <HeroWave />
    </section>
  );
}

function HeroWave() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-[-1px] z-10">
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="block h-28 w-full text-slate-900"
        aria-hidden="true"
      >
        <path
          d="M0,70 C260,170 460,-20 720,120 C980,260 1180,60 1440,150 L1440,220 L0,220 Z"
          fill="currentColor"
        />
      </svg>
      <div className="absolute left-1/2 top-4 -translate-x-1/2 text-black drop-shadow">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6.75 9.75L12 15.25L17.25 9.75"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
