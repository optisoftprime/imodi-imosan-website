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

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BankingServices />
      <AboutUs />

      {/* <SavingsPage /> */}

      {/* <CurrentAccountPage/> */}
    </main>
  );
}
