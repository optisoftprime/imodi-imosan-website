"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import rcImage1   from "@/public/images/branding/rc image 1.png";
import rcImage2   from "@/public/images/branding/rc image 2.png";
import rcImage3   from "@/public/images/branding/rc image3.png";
import rcImage4   from "@/public/images/branding/rc image 4.png";
import rcBottom   from "@/public/images/branding/rc bottom.png";

/* ═══════════════════════════════════════════
   SECTION 1 — SAVE SMART, BORROW BIGGER
   Left: text | Right: 2x2 photo grid
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
          {/* <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a5fd4] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d3fa8] hover:shadow-xl">
            Apply for RizeCoop Loan <ChevronRight className="h-4 w-4" />
          </button> */}
        </div>

        {/* Right — 2x2 grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative overflow-hidden rounded-2xl shadow-md" style={{ height: 180 }}>
            <Image src={rcImage1} alt="Member 1" fill className="object-cover object-top" />
          </div>
          <div className="relative overflow-hidden rounded-full shadow-md" style={{ height: 180 }}>
            <Image src={rcImage2} alt="Member 2" fill className="object-cover object-top" />
          </div>
          <div className="relative overflow-hidden rounded-full shadow-md" style={{ height: 180 }}>
            <Image src={rcImage3} alt="Member 3" fill className="object-cover object-top" />
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-md" style={{ height: 180 }}>
            <Image src={rcImage4} alt="Member 4" fill className="object-cover object-top" />
          </div>
        </div>

      </div>
    </section>
  );
}
export function RizeCoopLoanBannerSection() {
  return (
    <section className="bg-white pb-0">
      {/* Heading — still padded/centered */}
      <div className="mx-auto max-w-[1200px] px-8 pb-10">
        <h2 className="font-display text-center text-2xl font-black uppercase leading-snug text-[#0a1f44] md:text-3xl">
          Save Today, Access Twice As Much Tomorrow
        </h2>
      </div>

      {/* Full-bleed image — no px, no max-w */}
      <div className="relative w-full shadow-xl" style={{ height: 420 }}>
        <Image
          src={rcBottom}
          alt="RizeCoop loan — woman smiling"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  );
}