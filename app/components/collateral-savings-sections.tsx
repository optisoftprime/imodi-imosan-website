"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import rect26 from "@/public/images/branding/Rectangle 26.png";
import rect27 from "@/public/images/branding/Rectangle 27.png";

/* ═══════════════════════════════════════════
   SECTION 1 — SAVE SMART, ACCESS MORE
   Left: text | Right: circular photo
═══════════════════════════════════════════ */
export function CollateralSavingsFeatureSection() {
  return (
    <section className="relative overflow-hidden bg-white px-8 py-20">
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left — text */}
        <div>
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-[#0a1f44] md:text-4xl">
            Save Smart, Access More!
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-[1.85] text-gray-500">
            <p>
              Build consistent savings that open the door to greater financial opportunities. The more you
              save, the more flexibility and access you gain when you need support.
            </p>
            <p>
              With a simple and reliable system, you can grow your savings steadily and enjoy more financial
              freedom with confidence.
            </p>
          </div>
          {/* <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a5fd4] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d3fa8] hover:shadow-xl">
            Start Collateral Savings <ChevronRight className="h-4 w-4" />
          </button> */}
        </div>

        {/* Right — circular photo */}
        <div className="flex items-center justify-center">
          <div className="relative overflow-hidden rounded-full shadow-2xl" style={{ width: 300, height: 300 }}>
            {/* swap with actual collateral savings person photo */}
            <Image src={rect26} alt="Collateral savings" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — TURN YOUR SAVINGS INTO ACCESS
   Light pink bg + centered heading + full-width photo
═══════════════════════════════════════════ */
export function CollateralSavingsBannerSection() {
  return (
    <section className="bg-[#fdf4f4] px-8 py-16">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-display mb-10 text-center text-2xl font-black uppercase tracking-wide text-[#0a1f44] md:text-3xl">
          Turn Your Savings Into Access
        </h2>
        <div className="relative w-full overflow-hidden rounded-2xl shadow-xl" style={{ height: 340 }}>
          {/* swap with actual banner photo */}
          <Image src={rect27} alt="Collateral savings access" fill className="object-cover object-center" />
        </div>
      </div>
    </section>
  );
}