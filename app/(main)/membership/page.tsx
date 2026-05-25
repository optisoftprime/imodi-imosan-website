"use client";
import { PageCTA } from "@/app/components/pageCta";
import { PageHero } from "@/app/components/pageHero";
import {
  MembershipFeatureSection,
  MembershipBannerSection,
} from "@/app/components/membership-sections";
import membershipBg from "@/public/images/branding/membership.png";



export default function MembershipPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        backgroundImage={membershipBg}
        title="Membership"
        subtitle="Become a member and gain access to financial solutions, cooperative opportunities, and support designed to help individuals and communities grow."
        buttonText="Become a Member"
        showSlashes={false}
        showSkyline={false}
      />
      <MembershipFeatureSection />
      <MembershipBannerSection />
      <PageCTA
        title="Join Our Growing Community"
        description="Become a member of Imodi-Imosan Microfinance Bank today and start accessing financial tools designed to support your goals and future growth."
        buttonText="Open a Religious Account"
      />
    </main>
  );
}
