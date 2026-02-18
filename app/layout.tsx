import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { geistSans, geistMono } from "./fonts";
import { NavBar } from "@/components/ui/nav-bar";
import { Footer } from "@/components/ui/footer";
import { WhatsAppFab } from "@/components/ui/whatsapp-fab";

export const metadata: Metadata = {
  title: "Log Z — Site Institucional",
  description: "Visual consistente com a plataforma Log Z.",
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NavBar />
          <main id="conteudo" className="flex-1 pt-24">
            <div className="mx-auto max-w">
              {children}
            </div>
          </main>
          <WhatsAppFab />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
