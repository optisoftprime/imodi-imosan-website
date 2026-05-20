"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import rect26 from "@/public/images/branding/consumer image 3.png";
import rect27 from "@/public/images/branding/consumer image 2.png";

/* ═══════════════════════════════════════════
   SECTION 1 — BECAUSE LIFE HAPPENS
   Left: gift image, black circle bottom-left, scattered grey dots
   Right: text
═══════════════════════════════════════════ */
export function ConsumerLoanFeatureSection() {
  return (
    <section className="relative overflow-hidden bg-white px-8 py-20">
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left — image with decorative elements */}
        <div className="relative" style={{ height: 440 }}>
          {/* Black circle — bottom left, partially behind image */}
          <div className="absolute bottom-8 left-0 h-48 w-48 rounded-full bg-[#111827]" />

          {/* Scattered grey circles */}
          <div className="absolute right-16 top-6  h-14 w-14 rounded-full bg-gray-200 opacity-70" />
          <div className="absolute right-32 top-20 h-8  w-8  rounded-full bg-gray-200 opacity-50" />
          <div className="absolute bottom-6 left-40  h-14 w-14 rounded-full bg-gray-200 opacity-60" />
          <div className="absolute bottom-20 right-8  h-9  w-9  rounded-full bg-gray-200 opacity-40" />

          {/* Gift box image — no container styling, just raw image */}
          <div className="absolute inset-0">
            {/* swap with actual gift box / money explosion illustration */}
            <Image
              src={rect26}
              alt="Consumer loan"
              fill
              className="object-contain object-center"
            />
          </div>
        </div>

        {/* Right — text */}
        <div>
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-[#0a1f44] md:text-4xl">
            Because Life Happens, <br /> We Have Got You <br /> Covered
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-[1.85] text-gray-500">
            <p>
              Handle unexpected expenses and important moments with confidence,
              knowing you have the support you need. Whether it's urgent needs
              or planned expenses, you can move forward without stress or delay.
            </p>
            <p>
              With flexible financial solutions and a simple process, you can
              stay in control, take care of what matters, and keep life moving
              smoothly.
            </p>
          </div>
          <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a5fd4] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d3fa8] hover:shadow-xl">
            Apply for Consumer Loan <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — MAKE LIFE EASIER
   Centered heading + left photo sits lower, right photo sits higher & overlaps
═══════════════════════════════════════════ */
export function ConsumerLoanPhotosSection() {
  return (
    <section className="bg-white px-8 pb-24 pt-4">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-display mb-14 text-center text-2xl font-black uppercase leading-snug text-[#0a1f44] md:text-3xl">
          Make Life Easier With The Right <br /> Financial Support
        </h2>

        <div
          className="relative flex items-end justify-center"
          style={{ height: 360 }}
        >
          {/* Left photo — lower, rounded corners */}
          <div
            className="relative overflow-hidden rounded-2xl shadow-lg flex-shrink-0"
            style={{ width: 300, height: 260, zIndex: 1 }}
          >
            {/* swap with actual couple photo 1 */}
            <Image
              src={rect26}
              alt="Couple with tablet"
              fill
              className="object-cover"
            />
          </div>

          {/* Right photo — higher (pushed up), overlaps left, rounded corners */}
          <div
            className="relative overflow-hidden rounded-2xl shadow-xl flex-shrink-0"
            style={{
              width: 380,
              height: 300,
              marginBottom: 60,
              marginLeft: -16,
              zIndex: 2,
            }}
          >
            {/* swap with actual couple photo 2 */}
            <Image
              src={rect27}
              alt="Couple relaxing"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
