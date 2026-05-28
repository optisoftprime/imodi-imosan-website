"use client";
import { PageHero } from "@/app/components/pageHero";
import {
  SavingsTypesSection,
  StartSmallSection,
} from "../../components/savings";
import { useModal } from "@/app/context/ModalContext";

export default function SavingsPage() {
  const { openModal } = useModal();

  return (
    <main className="min-h-screen">
      <PageHero
        title="Savings Account"
        subtitle="We provide secure and flexible savings solutions designed to help you grow your money, plan for the future, and achieve your financial goals with confidence."
        buttonText="Start Saving Now"
        onButtonClick={openModal}
      />
      <StartSmallSection />
      <SavingsTypesSection />
    </main>
  );
}