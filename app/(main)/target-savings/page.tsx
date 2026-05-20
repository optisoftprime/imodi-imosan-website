"use client";
import { PageCTA } from "@/app/components/pageCta";
import { PageHero } from "@/app/components/pageHero";
import { TargetSavingsFeatureSection, TargetSavingsStepsSection } from "@/app/components/target-savings-sections";

import targetBg from "@/public/images/branding/Rectangle 2.png"; // swap when available

export default function TargetSavingsPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        backgroundImage={targetBg}
        title="Target Savings"
        subtitle="We help you save towards your financial goals with structured savings plans designed to keep you disciplined and focused."
        buttonText="Become a Member"
        showSlashes={false}
        showSkyline={false}
      />
      <TargetSavingsFeatureSection />
      <TargetSavingsStepsSection />
      <PageCTA
        title="Start Achieving Your Financial Goals"
        description="Start your Target Savings journey with Imodi-Imosan Microfinance Bank and take a step closer to achieving your goals."
        buttonText="Start Target Savings"
      />
    </main>
  );
}