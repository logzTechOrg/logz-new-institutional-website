import ContactHero from "@/components/ui/contact-hero";
import ContactForm from "@/components/ui/contact-form";
import ContactShortFaq from "@/components/ui/contact-short-faq";
import ContactMap from "@/components/ui/contact-map";

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-900">
      <ContactForm />
      <ContactMap />
    </main>
  );
}

