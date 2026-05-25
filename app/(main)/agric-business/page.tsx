"use client";
import { PageCTA } from "@/app/components/pageCta";
import { PageHero } from "@/app/components/pageHero";
import { AgriBizFeatureSection, AgriBizGallerySection } from "@/app/components/agri-biz-sections";

import agriBg from "@/public/images/branding/agric bg.png"; // swap when available

export default function AgriBizPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        backgroundImage={agriBg}
        title="Agri-Business"
        subtitle="Access the financial support and opportunities you need to grow your agri-business, increase productivity, and build lasting success."
        buttonText="Apply for Farmer's Loan"
        showSlashes={false}
        showSkyline={false}
      />
      <AgriBizFeatureSection />
      <AgriBizGallerySection />
      <PageCTA
        title="Turn Your Agricultural Business into Growth"
        description="Access the financial support, tools, and opportunities you need to expand your agri-business, improve productivity, and achieve sustainable growth with confidence."
        buttonText="Apply for Farmer's Loan"
      />
    </main>
  );
}