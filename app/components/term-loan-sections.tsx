"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import rect26 from "@/public/images/branding/Rectangle 26.png";
import termImg2 from "@/public/images/branding/term image 2.png";
import termImg3 from "@/public/images/branding/term image 3.png";
import termImg4 from "@/public/images/branding/term image 4.png";
import termImg5 from "@/public/images/branding/term image 5.png";

/* ═══════════════════════════════════════════
   SECTION 1 — PLAN BIGGER, ACHIEVE MORE
   Left: text | Right: rectangular photo
═══════════════════════════════════════════ */
export function TermLoanFeatureSection() {
  return (
    <section className="relative overflow-hidden bg-white px-8 py-20">
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left — text */}
        <div>
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-[#0a1f44] md:text-4xl">
            Plan Bigger, Achieve More!
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-[1.85] text-gray-500">
            <p>
              Set bold financial goals and take confident steps toward achieving them. With the right support
              and structured solutions, you can turn your plans into real progress without limits.
            </p>
            <p>
              Stay focused, stay consistent, and build the future you envision with clarity and confidence.
            </p>
          </div>
          <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a5fd4] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d3fa8] hover:shadow-xl">
            Apply for Term Loan <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Right — rectangular photo */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg" style={{ height: 300 }}>
          <Image src={rect26} alt="Term loan" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — BUILD TODAY FOR STRONGER TOMORROW
   Dark bg with orange glow + 4 photo cards with labels below
═══════════════════════════════════════════ */
const termFeatures = [
  { label: "Structured Repayment Plan", image: termImg2 },
  { label: "Flexible Loan Duration",    image: termImg3 },
  { label: "Competitive Interest Rate", image: termImg4 },
  { label: "Simple Application Process", image: termImg5 },
];

export function TermLoanFeaturesSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#0a0f1e" }}>
      {/* Orange warm glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-[800px] -translate-x-1/2 rounded-full opacity-50"
        style={{ background: "radial-gradient(ellipse, #c2410c 0%, #92400e 50%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[1200px] px-8 py-16">
        <h2 className="font-display mb-10 text-center text-2xl font-black uppercase tracking-wide text-white md:text-3xl">
          Build Today For Stronger Tomorrow
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {termFeatures.map((f) => (
            <div key={f.label} className="flex flex-col gap-3">
              <div className="relative overflow-hidden rounded-xl shadow-lg" style={{ height: 160 }}>
                <Image src={f.image} alt={f.label} fill className="object-cover" />
              </div>
              <p className="text-[13.5px] font-semibold leading-snug text-white">{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}