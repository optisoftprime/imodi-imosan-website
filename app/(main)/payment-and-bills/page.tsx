"use client";
import { PageCTA } from "@/app/components/pageCta";
import { PageHero } from "@/app/components/pageHero";
import { PaymentsFeatureSection, PaymentsFeaturesSection } from "@/app/components/payments-sections";

import paymentsBg from "@/public/images/branding/Rectangle 2.png"; // swap when available

export default function PaymentsPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        backgroundImage={paymentsBg}
        title="Payments & Bills"
        subtitle="Pay bills, buy airtime, buy electricity, and purchase data quickly and securely — everything you need to stay connected and in control, all in one place."
        buttonText="Make Payment"
        showSlashes={false}
        showSkyline={false}
      />
      <PaymentsFeatureSection />
      <PaymentsFeaturesSection />
      <PageCTA
        title="Pay Your Electricity Bill in Minutes"
        description="Use the digital payment services from Imodi-Imosan Microfinance Bank to quickly settle your electricity bills."
        buttonText="Make Payment"
      />
    </main>
  );
}