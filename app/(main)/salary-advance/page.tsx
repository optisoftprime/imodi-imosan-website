"use client";
import { PageCTA } from "@/app/components/pageCta";
import { PageHero } from "@/app/components/pageHero";
import { SalaryAdvanceFeatureSection, SalaryAdvanceFeaturesSection } from "@/app/components/salary-advance-sections";

import salaryBg from "@/public/images/branding/Rectangle 2.png"; // swap when available

export default function SalaryAdvancePage() {
  return (
    <main className="min-h-screen">
      <PageHero
        backgroundImage={salaryBg}
        title="Salary Advance"
        subtitle="Get access to a portion of your salary before payday — fast, secure, and hassle-free."
        buttonText="Get Salary Advance"
        showSlashes={false}
        showSkyline={false}
      />
      <SalaryAdvanceFeatureSection />
      <SalaryAdvanceFeaturesSection />
      <PageCTA
        title="Handle Urgent Needs Without The Stress"
        description="Join a savings group through Imodi-Imosan Microfinance Bank and take part in a structured savings plan designed to help you grow financially."
        buttonText="Get Salary Advance"
      />
    </main>
  );
}