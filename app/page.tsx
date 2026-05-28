"use client";
import Footer from "./components/Footer";
import FeatureCard from "./components/feature-card";
import SiteHeader from "./components/site-header";
import Navbar from "./components/Navbar";
import BankingServices from "./components/BankingServices";
import AboutUs from "./components/AboutUs";
import HeroSection from "./components/home/Hero";
import SavingsPage from "./(main)/savings/page";
import CurrentAccountPage from "./(main)/create-account/page";

import AccountTypes from "./components/home/AccountTypes";
import BankOnTheGo from "./components/home/BankOnTheGo";
import HowItWorks from "./components/home/HowItWorks";
import FaqSection from "./components/home/FaqSection";
import CtaSection from "./components/home/CtaSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutUs />
      <BankingServices />
      <AccountTypes />
      <BankOnTheGo />
      <HowItWorks />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
