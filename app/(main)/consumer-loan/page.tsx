"use client";
import { PageCTA } from "@/app/components/pageCta";
import { PageHero } from "@/app/components/pageHero";
import { ConsumerLoanFeatureSection, ConsumerLoanPhotosSection } from "@/app/components/consumer-loan-sections";

import consumerBg from "@/public/images/branding/consumer bg.png"; // swap when available

export default function ConsumerLoanPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        backgroundImage={consumerBg}
        title="Consumer Loan"
        subtitle="Access flexible financing to meet your personal needs and manage important expenses with confidence."
        buttonText="Apply for Consumer Loan"
        showSlashes={false}
        showSkyline={false}
      />
      <ConsumerLoanFeatureSection />
      <ConsumerLoanPhotosSection />
      <PageCTA
        title="Get the Financial Support You Need"
        description="Apply for a Consumer Loan with Imodi-Imosan Microfinance Bank and take care of your personal financial needs with ease."
        buttonText="Apply for Consumer Loan"
      />
    </main>
  );
}