"use client";
import { PageCTA } from "@/app/components/pageCta";
import { PageHero } from "@/app/components/pageHero";
import { CoopSaveTogetherSection, CoopFeaturesSection } from "@/app/components/coop-sections";

import coopBg from "@/public/images/branding/Rectangle 2.png";

export default function CoopPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        backgroundImage={coopBg}
        title="Cooperative & Thrift Account"
        subtitle="We provide reliable banking solutions designed to help cooperative societies and thrift groups manage collective savings, handle contributions efficiently, and grow their shared financial goals."
        buttonText="Open a Cooperative Account"
        showSlashes={false}
        showSkyline={false}
      />
      <CoopSaveTogetherSection />
      <CoopFeaturesSection />
      <PageCTA
        title="Support Your Cooperative Financial Growth"
        description="Bank with Imodi-Imosan Microfinance Bank and give your cooperative the banking support it needs to grow stronger together."
        buttonText="Open a Cooperative Account"
      />
    </main>
  );
}