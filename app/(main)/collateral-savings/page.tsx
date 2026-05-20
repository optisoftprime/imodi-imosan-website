"use client";
import { PageCTA } from "@/app/components/pageCta";
import { PageHero } from "@/app/components/pageHero";
import { CollateralSavingsFeatureSection, CollateralSavingsBannerSection } from "@/app/components/collateral-savings-sections";

import collateralBg from "@/public/images/branding/Rectangle 2.png"; // swap when available

export default function CollateralSavingsPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        backgroundImage={collateralBg}
        title="Collateral Savings"
        subtitle="Build your savings as security and unlock access to cooperative loan opportunities."
        buttonText="Start Collateral Savings"
        showSlashes={false}
        showSkyline={false}
      />
      <CollateralSavingsFeatureSection />
      <CollateralSavingsBannerSection />
      <PageCTA
        title="Start Building Your Financial Strength"
        description="Open a Collateral Savings account with Imodi-Imosan Microfinance Bank and take the first step toward unlocking greater financial opportunities."
        buttonText="Start Collateral Savings"
      />
    </main>
  );
}