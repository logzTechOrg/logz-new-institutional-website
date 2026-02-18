import AboutEditorialHero from "@/components/ui/about-editorial-hero";
import AboutOverview from "@/components/ui/about-overview";
import AboutBigNumbers from "@/components/ui/about-big-numbers";
import AboutTimeline from "@/components/ui/about-timeline";

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      <AboutEditorialHero />
      <AboutOverview />
      <AboutBigNumbers /> 
    </main>
  );
}
