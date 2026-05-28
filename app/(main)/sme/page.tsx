"use client";
import { PageHero } from "@/app/components/pageHero";
import { SmeFeatureSection, SmeOpportunitiesSection } from "../../components/sme-sections";
import { useModal } from "@/app/context/ModalContext";

import smeBg from "@/public/images/branding/bg image 2.png"; // swap when available

export default function SmePage() {
  const { openModal } = useModal();

  return (
    <main className="min-h-screen">
      <PageHero
        backgroundImage={smeBg}
        title="SME Business Account"
        subtitle="We provide flexible banking solutions designed to help small and medium-sized businesses manage finances efficiently, handle transactions smoothly, and grow with confidence."
        buttonText="Open an SME Account"
        onButtonClick={openModal}
        showSlashes={false}
        showSkyline={false}
      />
      <SmeFeatureSection />
      <SmeOpportunitiesSection />
    </main>
  );
}