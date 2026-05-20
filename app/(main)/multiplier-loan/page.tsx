"use client";
import { PageCTA } from "@/app/components/pageCta";
import { PageHero } from "@/app/components/pageHero";
import { MultiplierLoanFeatureSection, MultiplierLoanBannerSection } from "@/app/components/multiplier-loan-sections";

import multiplierBg from "@/public/images/branding/Rectangle 2.png"; // swap when available

export default function MultiplierLoanPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        backgroundImage={multiplierBg}
        title="Multiplier Loan"
        subtitle="Unlock greater borrowing power by accessing loans that are multiple times your savings."
        buttonText="Apply for Multiplier Loan"
        showSlashes={false}
        showSkyline={false}
      />
      <MultiplierLoanFeatureSection />
      <MultiplierLoanBannerSection />
      <PageCTA
        title="Grow Faster with Multiplied Financial Support"
        description="With the Multiplier Loan from us, your savings can unlock bigger financial opportunities."
        buttonText="Apply for Multiplier Loan"
      />
    </main>
  );
}