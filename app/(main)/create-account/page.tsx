"use client";
import { PageHero } from "@/app/components/pageHero";
import { CurrentAccountFeature } from "../../components/current-account-feature";
import { useModal } from "@/app/context/ModalContext";

import currentAccountBg from "@/public/images/branding/Rectangle 2.png";

export default function CurrentAccountPage() {
  const { openModal } = useModal();

  return (
    <main className="min-h-screen">
      <PageHero
        backgroundImage={currentAccountBg}
        title="Current Account"
        subtitle="We provide flexible current accounts designed for individuals and businesses who need easy access to their funds and seamless daily transactions."
        buttonText="Open a Current Account Now"
        onButtonClick={openModal}
        showSlashes={false}
        showSkyline={false}
      />
      <CurrentAccountFeature />
    </main>
  );
}