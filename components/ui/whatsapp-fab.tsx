"use client";

import Image from "next/image";
import Link from "next/link";
import whatsappIcon from "@/assets/whatsapp.svg";

export function WhatsAppFab() {
  return (
    <Link
      href="https://wa.me/message/3DJHQZ4B6KDYJ1"
      target="_blank"
      rel="noreferrer"
      aria-label="Fale com a Log Z pelo WhatsApp"
      className="fixed bottom-6 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition hover:bg-[#1ebe5d] focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-white md:bottom-8 md:right-8"
    >
      <Image
        src={whatsappIcon}
        alt=""
        aria-hidden="true"
        className="h-7 w-7"
        style={{ filter: "brightness(0) invert(1)" }}
        priority
      />
    </Link>
  );
}
