"use client";
import { PageCTA } from "@/app/components/pageCta";
import { PageHero } from "@/app/components/pageHero";
import { SmeFeatureSection, SmeOpportunitiesSection } from "../../components/sme-sections";

import smeBg from "@/public/images/branding/bg image 2.png"; // swap when available

export default function SmePage() {
  return (
    <main className="min-h-screen">
      <PageHero
        backgroundImage={smeBg}
        title="SME Business Account"
        subtitle="We provide flexible banking solutions designed to help small and medium-sized businesses manage finances efficiently, handle transactions smoothly, and grow with confidence."
        buttonText="Open an SME Account"
        showSlashes={false}
        showSkyline={false}
      />
      <SmeFeatureSection />
      <SmeOpportunitiesSection />
      <PageCTA
        title="Start Banking for Your Business Today"
        description="Bank with Imodi-Imosan Microfinance Bank and access the financial tools your business needs to grow and succeed."
        buttonText="Open an SME Account"
      />
    </main>
  );
}