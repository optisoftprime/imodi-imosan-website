"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import rect26 from "@/public/images/branding/Rectangle 26.png";
import rect27 from "@/public/images/branding/Rectangle 27.png";

/* ═══════════════════════════════════════════
   SECTION 1 — SAVE WITH A PURPOSE
   Left: 2x2 photo grid | Right: text
═══════════════════════════════════════════ */
export function TargetSavingsFeatureSection() {
  return (
    <section className="relative overflow-hidden bg-white px-8 py-20">
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left — 2x2 rounded photo grid */}
        <div className="grid grid-cols-2 gap-3">
          {[rect26, rect27, rect27, rect26].map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-md"
              style={{ height: 160 }}
            >
              {/* swap with actual target savings photos */}
              <Image src={img} alt="Savings" fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* Right — text */}
        <div>
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-[#0a1f44] md:text-4xl">
            Save With A Purpose, Achieve With Confidence
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-[1.85] text-gray-500">
            <p>
              Take control of your financial goals with a clear plan and
              consistent saving. Every contribution brings you closer to what
              truly matters — whether it's a personal milestone, business goal,
              or future investment.
            </p>
            <p>
              With a structured approach and the right support, your savings
              stay on track, helping you build steadily and achieve with clarity
              and confidence.
            </p>
          </div>
          <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a5fd4] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d3fa8] hover:shadow-xl">
            Start Target Savings <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — YOUR GOALS DESERVE A PLAN
   Dark bg, 3 step cards
═══════════════════════════════════════════ */
const steps = [
  "Set you savings goal",
  "Choose how much you want to save",
  "Make consistent deposit until you reach your target",
];

function StepIcon() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="16" width="5" height="9" rx="1" fill="#1a5fd4" />
        <rect x="11" y="10" width="5" height="15" rx="1" fill="#1a5fd4" />
        <rect x="19" y="5" width="5" height="20" rx="1" fill="#1a5fd4" />
        <polyline
          points="5,16 13,10 21,5"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="21" cy="5" r="2" fill="#f59e0b" />
      </svg>
    </div>
  );
}

export function TargetSavingsStepsSection() {
  return (
    <section
      className="relative overflow-hidden px-8 py-20"
      style={{
        background:
          "linear-gradient(135deg, #0a1a6e 0%, #0d2fa8 40%, #1a5fd4 100%)",
      }}
    >
      {/* Subtle dot pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="3" cy="3" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1200px]">
        <h2 className="font-display mb-12 text-center text-2xl font-black uppercase tracking-wide text-white md:text-3xl">
          Your Goals Deserve A Plan
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 rounded-2xl bg-white/10 px-6 py-8 text-center backdrop-blur-sm"
            >
              <StepIcon />
              <p className="text-[15px] font-semibold leading-snug text-white">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
