"use client";
import { PageCTA } from "@/app/components/pageCta";
import { PageHero } from "@/app/components/pageHero";
import { CurrentAccountFeature } from "../../components/current-account-feature";

import currentAccountBg from "@/public/images/branding/Rectangle 2.png";

export default function CurrentAccountPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        backgroundImage={currentAccountBg}
        title="Current Account"
        subtitle="We provide flexible current accounts designed for individuals and businesses who need easy access to their funds and seamless daily transactions."
        buttonText="Open a Current Account Now"
        showSlashes={false}
        showSkyline={false}
      />
      <CurrentAccountFeature />
      <PageCTA
        title="Start Banking with Confidence"
        description="Take the first step toward achieving your financial goals with the trusted support of Imodi-Imosan Microfinance Bank."
        buttonText="Open a Current Account"
      />
    </main>
  );
}