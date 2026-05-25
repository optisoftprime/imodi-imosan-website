"use client";
import { PageCTA } from "@/app/components/pageCta";
import { PageHero } from "@/app/components/pageHero";
import { RizeCoopLoanFeatureSection, RizeCoopLoanBannerSection } from "@/app/components/rizecoop-loan-sections";

import rizeCoopBg from "@/public/images/branding/Rectangle 2.png"; 


// This is the rize coop loan page
export default function RizeCoopLoanPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        backgroundImage={rizeCoopBg}
        title="RizeCoop Loan"
        subtitle="Access a multiplier loan designed for cooperative members, allowing you to grow faster by borrowing up to twice your savings."
        buttonText="Apply for RizeCoop Loan"
        showSlashes={false}
        showSkyline={false}
      />
      <RizeCoopLoanFeatureSection />
      <RizeCoopLoanBannerSection />
      <PageCTA
        title="Grow Faster with Cooperative Financing"
        description="With the RizeCoop Loan from Imodi-Imosan Microfinance Bank, your savings can unlock even greater opportunities."
        buttonText="Apply for RizeCoop Loan"
      />
    </main>
  );
}