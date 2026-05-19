"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import rect26 from "@/public/images/branding/Rectangle 26.png";
import rect27 from "@/public/images/branding/Rectangle 27.png";

/* ═══════════════════════════════════════════
   SECTION 1 — TURN WHAT YOU HAVE INTO SOMETHING BIGGER
   Left: rectangular photo | Right: text
═══════════════════════════════════════════ */
export function MultiplierLoanFeatureSection() {
  return (
    <section className="relative overflow-hidden bg-white px-8 py-20">
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left — rectangular photo */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg" style={{ height: 300 }}>
          {/* swap with actual multiplier loan photo */}
          <Image src={rect26} alt="Multiplier loan" fill className="object-cover" />
        </div>

        {/* Right — text */}
        <div>
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-[#0a1f44] md:text-4xl">
            Turn What You Have Into Something Bigger
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-[1.85] text-gray-500">
            <p>
              Make the most of your savings by unlocking greater financial opportunities when you need them.
              Your consistency today can give you access to more tomorrow.
            </p>
            <p>
              With a simple and reliable system, you can grow your financial capacity and move toward bigger
              goals with confidence.
            </p>
          </div>
          <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a5fd4] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d3fa8] hover:shadow-xl">
            Apply for Multiplier Loan <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — MULTIPLY YOUR FINANCE POWER
   Full-width dark overlay photo + heading text left + gold ribbon accent right
═══════════════════════════════════════════ */
export function MultiplierLoanBannerSection() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 320 }}>
      {/* Background photo */}
      <div className="absolute inset-0">
        {/* swap with actual banner photo */}
        <Image src={rect27} alt="Multiply finance power" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-[#0a1f44]/60" />
      </div>

      {/* Gold ribbon — right side */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-64 opacity-90">
        <svg viewBox="0 0 260 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <path
            d="M260 0 C200 40 180 80 200 140 C220 200 240 240 200 320"
            stroke="url(#goldRibbon)"
            strokeWidth="48"
            strokeLinecap="round"
            fill="none"
          />
          <defs>
            <linearGradient id="goldRibbon" x1="260" y1="0" x2="200" y2="320" gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="#fbbf24" />
              <stop offset="50%"  stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Text — left */}
      <div className="relative z-10 flex h-full items-center px-8 py-20">
        <h2 className="font-display max-w-xs text-3xl font-black uppercase leading-tight text-white md:text-4xl">
          Multiply <br /> Your Finance <br /> Power
        </h2>
      </div>
    </section>
  );
}