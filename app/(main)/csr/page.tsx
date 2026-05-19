"use client";
import { PageCTA } from "@/app/components/pageCta";
import { PageHero } from "@/app/components/pageHero";
import { CSRFeatureSection, CSRImpactSection } from "@/app/components/csr-sections";

import csrBg from "@/public/images/branding/Rectangle 2.png"; // swap when available

export default function CSRPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        backgroundImage={csrBg}
        title="Cooperative Social Responsibility"
        subtitle="We are committed to supporting our communities through donations, partnerships, and initiatives that create positive impact."
        buttonText="See Our Impact"
        showSlashes={false}
        showSkyline={false}
      />
      <CSRFeatureSection />
      <CSRImpactSection />
      <PageCTA
        title="Work with Us To Support Communities"
        description="If your organization or community initiative needs a support, we welcome partnerships that help create meaningful change."
        buttonText="See Our Impact"
      />
    </main>
  );
}