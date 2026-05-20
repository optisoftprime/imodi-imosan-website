"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import rect26 from "@/public/images/branding/Rectangle 26.png";
import rect27 from "@/public/images/branding/Rectangle 27.png";

/* ═══════════════════════════════════════════
   SECTION 1 — SAVE SMART, BORROW BIGGER
   Left: text | Right: 2x2 photo grid (top-right rounded, others square)
═══════════════════════════════════════════ */
export function RizeCoopLoanFeatureSection() {
  return (
    <section className="relative overflow-hidden bg-white px-8 py-20">
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left — text */}
        <div>
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-[#0a1f44] md:text-4xl">
            Save Smart, Borrow Bigger!
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-[1.85] text-gray-500">
            <p>
              Build consistent savings that unlock greater financial opportunities when you need them most.
              The more you save, the more access you gain to funding that helps you move forward confidently.
            </p>
            <p>
              With a structured approach and reliable support, you can grow your savings and step into bigger
              possibilities with ease.
            </p>
          </div>
          <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a5fd4] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d3fa8] hover:shadow-xl">
            Apply for RizeCoop Loan <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Right — 2x2 grid: top-left square, top-right circle, bottom-left square, bottom-right circle */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative overflow-hidden rounded-2xl shadow-md" style={{ height: 180 }}>
            <Image src={rect26} alt="Member 1" fill className="object-cover" />
          </div>
          <div className="relative overflow-hidden rounded-full shadow-md" style={{ height: 180 }}>
            <Image src={rect27} alt="Member 2" fill className="object-cover" />
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-md" style={{ height: 180 }}>
            <Image src={rect27} alt="Member 3" fill className="object-cover" />
          </div>
          <div className="relative overflow-hidden rounded-full shadow-md" style={{ height: 180 }}>
            <Image src={rect26} alt="Member 4" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — SAVE TODAY, ACCESS TWICE AS MUCH TOMORROW
   Centered heading + full-width tall photo
═══════════════════════════════════════════ */
export function RizeCoopLoanBannerSection() {
  return (
    <section className="bg-white px-8 pb-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-display mb-10 text-center text-2xl font-black uppercase leading-snug text-[#0a1f44] md:text-3xl">
          Save Today, Access Twice As Much Tomorrow
        </h2>
        <div className="relative w-full overflow-hidden rounded-none shadow-xl" style={{ height: 360 }}>
          {/* swap with actual full-width banner photo */}
          <Image src={rect26} alt="RizeCoop loan" fill className="object-cover object-top" />
        </div>
      </div>
    </section>
  );
}