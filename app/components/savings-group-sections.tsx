"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import rect26 from "@/public/images/branding/Rectangle 26.png";
import rect27 from "@/public/images/branding/image 90.png";

/* ═══════════════════════════════════════════
   SECTION 1 — DON'T SAVE ALONE
   Left: text + two buttons | Right: rounded irregular photo
═══════════════════════════════════════════ */
export function SavingsGroupFeatureSection() {
  return (
    <section className="relative overflow-hidden bg-white px-8 py-20">
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left */}
        <div>
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-[#0a1f44] md:text-4xl">
            Don't Save Alone – <br /> Grow Together
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-[1.85] text-gray-500">
            <p>
              Build stronger financial progress by saving with others who share your goals. With a structured
              group approach, every contribution adds up — making it easier to stay consistent, motivated,
              and accountable.
            </p>
            <p>
              Together, you can achieve more, support one another, and turn collective effort into meaningful
              financial growth.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            {/* <button className="inline-flex items-center gap-2 rounded-lg bg-[#1a5fd4] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d3fa8] hover:shadow-xl">
              Create Group <ChevronRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg border border-[#1a5fd4] bg-white px-7 py-3.5 text-sm font-semibold text-[#1a5fd4] shadow-sm transition hover:bg-blue-50">
              Join Group <ChevronRight className="h-4 w-4" />
            </button> */}
          </div>
        </div>

        {/* Right — irregular rounded photo */}
        <div className="flex items-center justify-center">
          <div
            className="relative overflow-hidden shadow-2xl"
            style={{ width: 320, height: 320, borderRadius: "60% 40% 50% 50% / 50% 50% 40% 60%" }}
          >
            <Image src={rect26} alt="Savings group" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — TURN YOUR CIRCLE INTO A SAVINGS POWERHOUSE
   Full-width image with heading above
═══════════════════════════════════════════ */
export function SavingsGroupPowerhouseSection() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-[1200px] px-8">
        <h2 className="font-display mb-8 text-center text-2xl font-black uppercase tracking-wide text-[#0a1f44] md:text-3xl">
          Turn Your Circle Into A Savings Powerhouse
        </h2>
      </div>
      {/* Full viewport width image — breaks out of any container */}
      <div className="relative h-[400px] w-screen overflow-hidden">
        <Image src={rect27} alt="Savings circle" fill className="object-cover object-center" />
      </div>
    </section>
  );
}