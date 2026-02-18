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
    "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
    isScrolled
      ? "border border-slate-200 bg-slate-300 text-slate-900 shadow-sm hover:border-blue-200 hover:text-blue-600 focus:ring-blue-200 focus:ring-offset-white"
      : "border border-white/60 bg-white/10 text-blue-500 hover:bg-white/20 focus:ring-white/40 focus:ring-offset-transparent"
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
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        isScrolled
          ? "bg-white/70 supports-[backdrop-filter]:backdrop-blur-md border-slate-200 text-slate-900 shadow-sm"
          : "bg-transparent border-transparent text-white"
      )}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:m-2 focus:rounded focus:px-3 focus:py-2 focus:bg-accent focus:text-accent-foreground"
      >
        Ir para o conteúdo
      </a>

      <div className="mx-auto max-w-7xl px-0 h-24 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logoLight}
            alt="Log Z Logo"
            height={60}
            className=""
            priority
          />
        </Link>

        {/* NAVEGAÇÃO */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-lg tracking-wide transition-colors",
                  isScrolled
                    ? [
                        "hover:text-slate-900",
                        active
                          ? "text-slate-900 font-semibold underline decoration-2 underline-offset-8"
                          : "text-slate-600",
                      ]
                    : [
                        "hover:text-slate-900",
                        active
                          ? "text-black font-bold underline decoration-2 underline-offset-8"
                          : "text-black",
                      ]
                )}
                aria-current={active ? "page" : undefined}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3 justify-self-end">
              <Link
                href="https://wa.me/message/JFDMR2UAEGKXJ1"
                target="_blank"
                rel="noreferrer"  
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-lg leading-none font-medium bg-[var(--primary)] text-white shadow transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
              >
                Fale com a gente
              </Link>
              <Link
                href="https://logzweb.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={loginClasses}
              >
                Login na plataforma
              </Link>
            </div>
        
      </div>
    </header>
  );
}
