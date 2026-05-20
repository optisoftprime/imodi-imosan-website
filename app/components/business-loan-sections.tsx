"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import rcImage1 from "@/public/images/branding/rc image 1.png";
import rcImage2 from "@/public/images/branding/rc image 2.png";
import rcImage3 from "@/public/images/branding/rc image3.png";
import rcImage4 from "@/public/images/branding/rc image 4.png";

/* ═══════════════════════════════════════════
   SECTION 1 — GIVE YOUR BUSINESS THE BOOST
   Left: text | Right: circular photo
═══════════════════════════════════════════ */
import rect26 from "@/public/images/branding/business woman.png";

export function BusinessLoanFeatureSection() {
  return (
    <section className="relative overflow-hidden bg-white px-8 py-20">
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left — text */}
        <div>
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-[#0a1f44] md:text-4xl">
            Give Your Business The Boost It Needs
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-[1.85] text-gray-500">
            <p>
              Take your business to the next level with financial support designed to help you grow, expand,
              and seize new opportunities. Whether you're starting small or scaling up, the right backing
              makes all the difference.
            </p>
            <p>
              With flexible solutions and reliable support, you can strengthen operations, increase capacity,
              and move your business forward with confidence.
            </p>
          </div>
          <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a5fd4] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d3fa8] hover:shadow-xl">
            Apply for Business Loan <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Right — circular photo */}
        <div className="flex items-center justify-center">
          <div className="relative overflow-hidden rounded-full shadow-2xl" style={{ width: 320, height: 320 }}>
            <Image src={rect26} alt="Business owner" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — TAKE YOUR BUSINESS TO THE NEXT LEVEL
   Centered heading + 2x2 dark feature cards
═══════════════════════════════════════════ */
const bizFeatures = [
  "Flexible loan amount for business needs",
  "Structured repayment plans",
  "Quick and simple application",
  "Working capital support",
];

function BadgeIcon() {
  return (
    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#1a5fd4]">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="12" stroke="white" strokeWidth="2" fill="none" />
        <path d="M9 14 L12.5 17.5 L19 11" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function BusinessLoanFeaturesSection() {
  return (
    <section className="bg-[#f8faff] px-8 py-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-display mb-12 text-center text-2xl font-black uppercase tracking-wide text-[#0a1f44] md:text-3xl">
          Take Your Business To The Next Level
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {bizFeatures.map((label) => (
            <div
              key={label}
              className="flex items-center justify-between gap-6 rounded-2xl bg-[#0a1f44] px-8 py-7 shadow-md"
            >
              <p className="text-[15px] font-semibold leading-snug text-white">{label}</p>
              <BadgeIcon />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 3 — WHO IS THIS FOR
   4 circular customer photos in a single row
═══════════════════════════════════════════ */
const customers = [
  { img: rcImage1, label: "Entrepreneurs" },
  { img: rcImage2, label: "Professionals" },
  { img: rcImage3, label: "Small Businesses" },
  { img: rcImage4, label: "Growing Teams" },
];

export function CustomerCirclesSection() {
  return (
    <section className="bg-white px-8 py-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-display mb-14 text-center text-2xl font-black uppercase tracking-wide text-[#0a1f44] md:text-3xl">
          Who Is This For?
        </h2>

        <div className="grid grid-cols-2 gap-y-12 gap-x-6 md:grid-cols-4">
          {customers.map((c) => (
            <div key={c.label} className="flex flex-col items-center gap-4">
              {/* Circular photo */}
              <div
                className="relative overflow-hidden rounded-full shadow-lg ring-4 ring-[#1a5fd4]/10"
                style={{ width: 180, height: 180 }}
              >
                <Image
                  src={c.img}
                  alt={c.label}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <p className="text-center text-[14px] font-semibold text-[#0a1f44]">
                {c.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}