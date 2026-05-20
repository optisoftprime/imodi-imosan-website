"use client";
import { PageCTA } from "@/app/components/pageCta";
import { PageHero } from "@/app/components/pageHero";
import { SavingsGroupFeatureSection, SavingsGroupPowerhouseSection } from "@/app/components/savings-group-sections";

import groupBg from "@/public/images/branding/group bg.png";

export default function SavingsGroupPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        backgroundImage={groupBg}
        title="Create/Join A Savings Group"
        subtitle="Start a savings group with people you trust and build financial discipline together while working toward shared financial goals."
        buttonText="Create Group"
        buttonText2="Join Group"
        showSlashes={false}
        showSkyline={false}
      />
      <SavingsGroupFeatureSection />
      <SavingsGroupPowerhouseSection />
      <PageCTA
        title="Start a Circle That Builds Wealth"
        description="Create your savings group with Imodi-Imosan Microfinance Bank and begin building financial progress with people you trust."
        buttonText="Create Group"
        buttonText2="Join Group"
      />
    </main>
  );
}