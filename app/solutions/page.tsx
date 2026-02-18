import SolutionsBuildPlanCta from "@/components/ui/solutions-build-plan-cta";
import SolutionsCompliance from "@/components/ui/solutions-compliance";
import SolutionsDashboardCards from "@/components/ui/solutions-dashboard-cards";
import SolutionsErpIntegrations from "@/components/ui/solutions-erp-integrations";
import SolutionsImplementation from "@/components/ui/solutions-implementation";
import SolutionsIntro from "@/components/ui/solutions-intro";
import SolutionsLockerGallery from "@/components/ui/solutions-locker-gallery";
import SolutionsModuleBlock from "@/components/ui/solutions-module-block";
import SolutionsPlans from "@/components/ui/solutions-plans";

export default function SolutionsPage() {
  return (
    <main className="bg-white text-slate-900">
      <SolutionsIntro />
      <SolutionsPlans />
      <SolutionsDashboardCards />
      <SolutionsCompliance />
      <SolutionsBuildPlanCta />
      <SolutionsImplementation />
    </main>
  );
}

