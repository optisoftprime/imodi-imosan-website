"use client";
import { PageCTA } from "@/app/components/pageCta";
import { PageHero } from "@/app/components/pageHero";
import { BusinessSupportFeatureSection, BusinessSupportChecklistSection } from "@/app/components/business-support-sections";

import bizSupportBg from "@/public/images/branding/Rectangle 2.png"; // swap when available

export default function BusinessSupportPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        backgroundImage={bizSupportBg}
        title="Business Support"
        subtitle="We support entrepreneurs and small businesses with financial tools, guidance, and resources designed to help them grow and succeed."
        buttonText="Get Business Support"
        showSlashes={false}
        showSkyline={false}
      />
      <BusinessSupportFeatureSection />
      <BusinessSupportChecklistSection />
      <PageCTA
        title="Let's Help Your Business Grow"
        description="Partner with Imodi-Imosan Microfinance Bank and access the support and financial solutions your business needs to thrive."
        buttonText="Get Business Support"
      />
    </main>
  );
}