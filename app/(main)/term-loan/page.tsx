"use client";
import { PageCTA } from "@/app/components/pageCta";
import { PageHero } from "@/app/components/pageHero";
import { TermLoanFeatureSection, TermLoanFeaturesSection } from "@/app/components/term-loan-sections";

import termBg from "@/public/images/branding/Rectangle 2.png"; // swap when available

export default function TermLoanPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        backgroundImage={termBg}
        title="Term Loan"
        subtitle="Access structured financing to support major personal or business needs with flexible repayment over a fixed period."
        buttonText="Apply for Term Loan"
        showSlashes={false}
        showSkyline={false}
      />
      <TermLoanFeatureSection />
      <TermLoanFeaturesSection />
      <PageCTA
        title="Take Bigger Steps Towards Your Goal"
        description="Apply for a Term Loan with us and get the financial support you need to achieve your goals."
        buttonText="Apply for Term Loan"
      />
    </main>
  );
}