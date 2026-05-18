"use client";
import { PageHero } from "@/app/components/pageHero";
import {
  SavingsTypesSection,
  StartSmallSection,
} from "../../components/savings";
import { PageCTA } from "@/app/components/pageCta";

export default function SavingsPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Savings Account"
        subtitle="We provide secure and flexible savings solutions designed to help you grow your money, plan for the future, and achieve your financial goals with confidence."
        buttonText="Start Saving Now"
      />
      <StartSmallSection />
      <SavingsTypesSection />
      <PageCTA
        title="Start Your Savings Journey Today"
        description="Take the first step toward achieving your financial goals with the trusted support of Imodi-Imosan Microfinance Bank."
        buttonText="Start Saving Now"
      />
    </main>
  );
}
