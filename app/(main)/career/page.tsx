"use client";
import { PageCTA } from "@/app/components/pageCta";
import { PageHero } from "@/app/components/pageHero";
import { CareerFeatureSection, CareerOpenRolesSection } from "@/app/components/career-sections";

import careerBg from "@/public/images/branding/Rectangle 2.png"; // swap when available

export default function CareerPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        backgroundImage={careerBg}
        title="Career"
        subtitle="Join a team of innovation, growth, and impact. Explore opportunities to build your career, develop your skills, and make a meaningful difference with us."
        buttonText="Apply Now"
        showSlashes={false}
        showSkyline={false}
      />
      <CareerFeatureSection />
      <CareerOpenRolesSection />
      <PageCTA
        title="Work with Us To Support Communities"
        description="If your organization or community initiative needs support, we welcome partnerships that help create meaningful change."
        buttonText="See Our Impact"
      />
    </main>
  );
}