"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import rect26 from "@/public/images/branding/Rectangle 26.png";
import rect27 from "@/public/images/branding/Rectangle 27.png";

/* ═══════════════════════════════════════════
   SECTION 1 — EARN AS YOU BANK
   Left: text | Right: photo with rounded top-right corner
═══════════════════════════════════════════ */
export function RewardsFeatureSection() {
  return (
    <section className="relative overflow-hidden bg-white px-8 py-20">
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left — text */}
        <div>
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-[#0a1f44] md:text-4xl">
            Earn As You Bank
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-[1.85] text-gray-500">
            <p>
              Make every transaction more rewarding by turning your everyday banking into opportunities to
              earn value. From saving to spending, your financial activities can work harder for you.
            </p>
            <p>
              With a simple and rewarding system, you can grow your benefits while managing your money with
              ease and confidence.
            </p>
          </div>
          <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a5fd4] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d3fa8] hover:shadow-xl">
            Start Earning Rewards <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Right — photo with rounded top-right corner only */}
        <div className="flex items-center justify-center">
          <div
            className="relative overflow-hidden shadow-xl"
            style={{ width: 320, height: 300, borderRadius: "0 80px 0 0" }}
          >
            {/* swap with actual rewards person photo */}
            <Image src={rect26} alt="Earn rewards" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — GET REWARDED FOR EVERY STEP
   Centered heading + full-width photo with gold ribbon + confetti accents
═══════════════════════════════════════════ */
export function RewardsBannerSection() {
  return (
    <section className="bg-white px-8 pb-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-display mb-10 text-center text-2xl font-black uppercase tracking-wide text-[#0a1f44] md:text-3xl">
          Get Rewarded For Every Step You Take
        </h2>

        <div className="relative w-full overflow-hidden rounded-2xl shadow-xl" style={{ height: 380 }}>
          {/* swap with actual rewards banner photo */}
          <Image src={rect27} alt="Rewards" fill className="object-cover object-center" />

          {/* Gold ribbon — right side */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-48 opacity-90">
            <svg viewBox="0 0 200 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
              <path
                d="M200 0 C160 60 150 120 170 190 C190 260 200 310 160 380"
                stroke="url(#goldRibbon2)"
                strokeWidth="40"
                strokeLinecap="round"
                fill="none"
              />
              <defs>
                <linearGradient id="goldRibbon2" x1="200" y1="0" x2="160" y2="380" gradientUnits="userSpaceOnUse">
                  <stop offset="0%"   stopColor="#fbbf24" />
                  <stop offset="50%"  stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Confetti — left side */}
          <div className="pointer-events-none absolute left-0 bottom-0 h-full w-32 opacity-80">
            <svg viewBox="0 0 130 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
              {[
                { cx: 20,  cy: 320, r: 6,  fill: "#fbbf24" },
                { cx: 50,  cy: 290, r: 4,  fill: "#f97316" },
                { cx: 10,  cy: 260, r: 5,  fill: "#fbbf24" },
                { cx: 70,  cy: 340, r: 3,  fill: "#f59e0b" },
                { cx: 35,  cy: 360, r: 4,  fill: "#fbbf24" },
                { cx: 80,  cy: 300, r: 5,  fill: "#f97316" },
                { cx: 15,  cy: 200, r: 3,  fill: "#fbbf24" },
                { cx: 60,  cy: 220, r: 4,  fill: "#f59e0b" },
              ].map((c, i) => (
                <circle key={i} cx={c.cx} cy={c.cy} r={c.r} fill={c.fill} />
              ))}
              {/* ribbon-like streaks */}
              <path d="M5 350 Q20 330 10 310" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M40 370 Q55 345 45 320" stroke="#f97316" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}