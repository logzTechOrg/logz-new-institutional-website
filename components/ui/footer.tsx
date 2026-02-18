import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import logoLight from "@/assets/logo-logz-light.svg";

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com/logztech", icon: Instagram },
  { name: "YouTube", href: "https://www.youtube.com/@LogZTech", icon: Youtube },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/log-z", icon: Linkedin },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61552465992037", icon: Facebook },
];

export function Footer() {
  return (
    <footer className="border-t bg-white/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4">
        <div className="col-span-2">
          <Image src={logoLight} alt="Log Z Logo" height={60} className="mb-10" priority />
          <div className="font-semibold text-black">Log Z</div>
          <p className="mt-3 max-w-prose text-sm text-black">
            Plataforma para gestão de ferramentas e eficiência operacional.
          </p>
        </div>

        <div>
          <div className="mb-3 text-sm text-black font-medium">Institucional</div>
          <ul className="space-y-2 text-sm text-black">
            <li>
              <Link href="/(institucional)/sobre" className="hover:text-foreground/90">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/(institucional)/solucoes" className="hover:text-foreground/90">
                Soluções
              </Link>
            </li>
            <li>
              <Link href="/(institucional)/cases" className="hover:text-foreground/90">
                Cases
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-3 text-black text-sm font-medium">Contato</div>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>
              <Link 
                href="https://wa.me/message/3DJHQZ4B6KDYJ1" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-foreground/90">
                Fale com a gente
              </Link>
            </li>
            <li>
              <Link                 
                href="https://logz-diagnostico.vercel.app/"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-black hover:text-foreground/90">
                Faça seu diagnóstico agora
              </Link>
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-black p-2 text-slate-500 transition hover:-translate-y-0.5 hover:text-slate-900"
                >
                  <Icon className="h-8 w-8" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-black">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-black">
          <span>&copy; 2025 Log Z Tech LTDA. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
