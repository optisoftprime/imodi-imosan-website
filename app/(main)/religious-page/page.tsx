"use client";
import { PageCTA } from "@/app/components/pageCta";
import { PageHero } from "@/app/components/pageHero";
import { ReligiousFeatureSection, ReligiousCategoriesSection } from "@/app/components/religious-sections";

import religiousBg from "@/public/images/branding/Rectangle 2.png"; // swap when available

export default function ReligiousPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        backgroundImage={religiousBg}
        title="Religious Organization Account"
        subtitle="We provide reliable banking solutions designed to help religious organizations manage donations, offerings, and operational funds with transparency, security, and ease."
        buttonText="Open a Religious Account"
        showSlashes={false}
        showSkyline={false}
      />
      <ReligiousFeatureSection />
      <ReligiousCategoriesSection />
      <PageCTA
        title="Support Your Organization's Financial Management"
        description="Bank with Imodi-Imosan Microfinance Bank and manage your society or club's finances securely and efficiently."
        buttonText="Open a Religious Account"
      />
    </main>
  );
}