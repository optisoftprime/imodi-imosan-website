"use client";
import { PageCTA } from "@/app/components/pageCta";
import { PageHero } from "@/app/components/pageHero";
import { BusinessLoanFeatureSection, BusinessLoanFeaturesSection } from "@/app/components/business-loan-sections";

import bizBg from "@/public/images/branding/business-loan .png"; 


// this is the business loan page
export default function BusinessLoanPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        backgroundImage={bizBg}
        title="Business Loan"
        subtitle="Get the financial support your business needs to grow, manage operations, and take advantage of new opportunities."
        buttonText="Apply for Business Loan"
        showSlashes={false}
        showSkyline={false}
      />
      <BusinessLoanFeatureSection />
      <BusinessLoanFeaturesSection />
      <PageCTA
        title="Expand Your Business With Confidence"
        description="Access flexible financing to grow your operations, increase capacity, and take advantage of new opportunities."
        buttonText="Apply for Business Loan"
      />
    </main>
  );
}