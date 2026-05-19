"use client";
import { PageCTA } from "@/app/components/pageCta";
import { PageHero } from "@/app/components/pageHero";
import { SocietiesFeatureSection } from "@/app/components/societies-sections";

import societiesBg from "@/public/images/branding/Rectangle 2.png"; // swap when available

export default function SocietiesPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        backgroundImage={societiesBg}
        title="Societies And Clubs Account"
        subtitle="We provide secure banking solutions designed to help societies, clubs, and associations manage group funds, contributions, and financial activities with transparency and ease."
        buttonText="Open a Society & Club Account"
        showSlashes={false}
        showSkyline={false}
      />
      <SocietiesFeatureSection />
      <PageCTA
        title="Manage Your Group Finances with Confidence"
        description="Bank with us and manage your society or club's finances securely and efficiently."
        buttonText="Open a Society & Club Account"
      />
    </main>
  );
}