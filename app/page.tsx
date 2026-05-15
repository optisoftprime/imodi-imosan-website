"use client"
import Footer from './components/Footer';
import FeatureCard from './components/feature-card';
import SiteHeader from './components/site-header';
import Navbar from './components/Navbar';
import BankingServices from './components/BankingServices';
import AboutUs from './components/AboutUs';
import HeroSection from './components/home/Hero';

const features = [
  {
    title: 'Flexible design system',
    description:
      'Build pages with reusable sections, responsive grids, and expressive typography that scales across devices.',
  },
  {
    title: 'Fast performance',
    description:
      'Optimized render paths and lightweight styling help your website feel instant and polished.',
  },
  {
    title: 'Content-ready layout',
    description:
      'Clear visual hierarchy, strong CTAs, and modern spacing make your homepage conversion-ready.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BankingServices />
      <AboutUs />
    </main>
  );
}
