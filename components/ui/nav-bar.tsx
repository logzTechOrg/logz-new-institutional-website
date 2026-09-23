"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logoLight from "@/assets/logo-logz-light.svg";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
 // { href: "/solutions", label: "Soluções" },
  { href: "/contato", label: "Contato" },
];

export function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(!isHome);
  const loginClasses = cn(
    "inline-flex items-center justify-center rounded-lg px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
    isScrolled
      ? "border border-slate-200 bg-slate-100 text-slate-900 shadow-sm hover:border-slate-300 hover:bg-slate-200 focus:ring-slate-300 focus:ring-offset-white"
      : "border border-white/40 bg-white/10 text-slate-100 hover:bg-white/20 focus:ring-white/40 focus:ring-offset-transparent"
  );

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "bg-white/80 supports-[backdrop-filter]:backdrop-blur-lg border-slate-200/50 text-slate-900 shadow-sm"
          : "bg-transparent border-transparent text-white"
      )}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:m-2 focus:rounded focus:px-3 focus:py-2 focus:bg-accent focus:text-accent-foreground"
      >
        Ir para o conteúdo
      </a>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-24 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src={logoLight}
            alt="Log Z Logo"
            height={50}
            className="h-12 w-auto md:h-14"
            priority
          />
        </Link>

        {/* NAVEGAÇÃO */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-base md:text-lg tracking-wide transition-colors duration-200 font-medium",
                  isScrolled
                    ? [
                        "hover:text-slate-700",
                        active
                          ? "text-slate-900 underline decoration-2 underline-offset-6"
                          : "text-slate-600",
                      ]
                    : [
                        "hover:text-slate-100",
                        active
                          ? "text-white underline decoration-2 underline-offset-6"
                          : "text-slate-100",
                      ]
                )}
                aria-current={active ? "page" : undefined}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 md:gap-3 justify-self-end">
          <Link
            href="https://wa.me/message/JFDMR2UAEGKXJ1"
            target="_blank"
            rel="noreferrer"  
            className="hidden sm:inline-flex items-center justify-center rounded-lg px-4 md:px-6 py-2.5 md:py-3 text-xs md:text-base leading-none font-semibold bg-[var(--primary)] text-white transition-all duration-200 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--ring)]"
          >
            Fale com a gente
          </Link>
          <Link
            href="https://plataforma.logztech.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(loginClasses, "hidden md:inline-flex")}
          >
            Login
          </Link>
        </div>
        
      </div>
    </header>
  );
}
