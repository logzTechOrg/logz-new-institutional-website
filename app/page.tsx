import HomeBenefits from "@/components/ui/home-benefits";
import HomeComparison from "@/components/ui/home-comparison";
import SolutionsModuleBlock from "@/components/ui/solutions-module-block";
import HomeDashboard from "@/components/ui/home-dashboard";
import HomeFaq from "@/components/ui/home-faq";
import HomeHero from "@/components/ui/home-hero";
import HomeBeforeAfter from "@/components/ui/home-before-after";
import HomeTestimonials from "@/components/ui/home-testimonials";
import HomeCta from "@/components/ui/home-cta";
import { WhoWeServe } from "@/components/ui/who-we-serve";
import ContactForm from "@/components/ui/contact-form";
import ContactMap from "@/components/ui/contact-map";
import ContactShortFaq from "@/components/ui/contact-short-faq";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HomeHero />
      <SolutionsModuleBlock />
      <HomeBeforeAfter />
      <HomeCta />
      <WhoWeServe />
      <HomeFaq />
      <ContactForm />
    </main>
  );
}
