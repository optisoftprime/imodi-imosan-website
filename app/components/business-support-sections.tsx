"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import rect26 from "@/public/images/branding/Rectangle 26.png";
import rect27 from "@/public/images/branding/Rectangle 27.png";

/* ═══════════════════════════════════════════
   SECTION 1 — REAL BUSINESS SUPPORT
   Left: two staggered photos | Right: text
═══════════════════════════════════════════ */
export function BusinessSupportFeatureSection() {
  return (
    <section className="relative overflow-hidden bg-white px-8 py-20">
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left — two staggered photos */}
        <div className="relative" style={{ height: 320 }}>
          {/* Back photo — top left, smaller */}
          <div className="absolute left-0 top-0 overflow-hidden rounded-2xl shadow-lg" style={{ width: 160, height: 220 }}>
            <Image src={rect26} alt="Business support" fill className="object-cover" />
          </div>
          {/* Front photo — bottom right, taller */}
          <div className="absolute left-28 top-10 overflow-hidden rounded-2xl shadow-2xl" style={{ width: 180, height: 260 }}>
            <Image src={rect27} alt="Business owner" fill className="object-cover" />
          </div>
        </div>

        {/* Right — text */}
        <div>
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-[#0a1f44] md:text-4xl">
            Real Business Support
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-[1.85] text-gray-500">
            <p>
              We are committed to delivering accessible financial services that empower individuals,
              entrepreneurs, and small businesses.
            </p>
            <p>
              Through innovation, strong customer relationships, and reliable financial solutions, we help
              communities achieve financial growth and stability.
            </p>
          </div>
          <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a5fd4] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d3fa8] hover:shadow-xl">
            Get Business Support <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — SUPPORT THAT HELPS YOUR BUSINESS SUCCEED
   Centered heading + left: checklist card + orange flame | Right: photo
═══════════════════════════════════════════ */
const supportItems = [
  "Access to business financing solutions",
  "Guidance on financial management",
  "Support for small and growing business",
  "Access to digital banking tools for business operations",
];

function CheckIcon() {
  return (
    <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#1a5fd4]">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 6 L5 9 L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function BusinessSupportChecklistSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8faff] px-8 py-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-display mb-12 text-center text-2xl font-black uppercase tracking-wide text-[#0a1f44] md:text-3xl">
          Support That Helps Your Business Succeed
        </h2>

        <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/* Left — checklist card + orange flame decoration */}
          <div className="relative">
            {/* Orange flame SVG — bottom left */}
            <div className="pointer-events-none absolute -bottom-8 -left-8 w-40 opacity-90">
              <svg viewBox="0 0 160 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                <path d="M20 180 C10 140 0 100 20 70 C35 45 50 60 40 90 C55 55 80 30 70 0 C110 30 130 80 100 120 C120 100 125 130 110 160 C90 175 50 180 20 180Z"
                  fill="url(#flame)" opacity="0.85" />
                <path d="M50 180 C40 155 35 130 50 110 C60 95 68 105 62 120 C72 100 85 85 80 65 C105 85 112 115 95 140 C105 128 108 148 98 165 C82 178 60 182 50 180Z"
                  fill="url(#flame2)" opacity="0.7" />
                <defs>
                  <linearGradient id="flame" x1="70" y1="0" x2="70" y2="180" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="60%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>
                  <linearGradient id="flame2" x1="90" y1="65" x2="90" y2="180" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#fde68a" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Checklist card */}
            <div className="relative rounded-2xl bg-[#0a1f44] p-8 shadow-xl">
              <ul className="space-y-5">
                {supportItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="text-[14px] leading-snug text-white">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — photo */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl" style={{ height: 320 }}>
            {/* swap with actual business support photo */}
            <Image src={rect26} alt="Business support" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}