"use client";
import { PageCTA } from "@/app/components/pageCta";
import { PageHero } from "@/app/components/pageHero";
import { RewardsFeatureSection, RewardsBannerSection } from "@/app/components/rewards-sections";

import rewardsBg from "@/public/images/branding/Rectangle 2.png"; // swap when available

export default function RewardsPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        backgroundImage={rewardsBg}
        title="Rewards"
        subtitle="Earn reward points when you use our banking services and enjoy benefits designed to appreciate your loyalty."
        buttonText="Start Earning Rewards"
        showSlashes={false}
        showSkyline={false}
      />
      <RewardsFeatureSection />
      <RewardsBannerSection />
      <PageCTA
        title="Start Earning Rewards Today"
        description="Bank with Imodi-Imosan Microfinance Bank and enjoy benefits through our Point-Based Rewards System."
        buttonText="Start Earning Rewards"
      />
    </main>
  );
}