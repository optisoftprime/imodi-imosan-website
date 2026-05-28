"use client";
import { PageHero } from "@/app/components/pageHero";
import { RizeSpringFeatureSection, RizeSpringCTASection } from "@/app/components/rizespring-sections";

import rizeBg from "@/public/images/branding/Rectangle 2.png"; // swap when available

export default function RizeSpringPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        backgroundImage={rizeBg}
        title="RizeSpring App"
        subtitle="Manage your savings, access loans, pay bills, buy airtime and data, and stay in control of your finances — all from one simple and secure app."
        buttonText="GET IT ON Google Play"
        buttonText2="Download on the App Store"
        buttonDisabled
        buttonDisabled2
        showSlashes={false}
        showSkyline={false}
      />
      <RizeSpringFeatureSection />
      <RizeSpringCTASection />
    </main>
  );
}