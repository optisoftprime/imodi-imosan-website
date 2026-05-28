"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import rect26 from "@/public/images/branding/Rectangle 26.png";
import image32 from "@/public/images/branding/image 32.png";
import maskGroup from "@/public/images/branding/Mask group.png";

/* ═══════════════════════════════════════════
   SECTION 1 — YOUR BUSINESS DREAMS
═══════════════════════════════════════════ */
const features = [
  "Dedicated Relationship Managers who understand your industry (no generic scripts)",
  "Easy track loans & overdrafts — with minimal paperwork",
  "Free business tools — invoice generator, expense tracker, payroll integration & tax reminders",
  "Business current account perks — zero maintenance fees, unlimited transfers, smart analytics",
  "Mentorship & networking — access to workshops, founder communities & industry connect sessions",
  "24/7 priority support via app, WhatsApp & calls — because opportunities don't wait",
];

export function SmeFeatureSection() {
  return (
    <section className="relative overflow-hidden bg-white px-8 py-20">
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left — text */}
        <div>
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-[#0a1f44] md:text-4xl">
            Your Business Dreams <br /> Deserve Bigger Banking
          </h2>
          <p className="mt-5 text-[15px] leading-[1.85] text-gray-500">
            Running a business in Nigeria could be demanding and calling on a budget, you need real
            support — not just another "customer care" line that puts you on hold.
          </p>

          <ul className="mt-5 space-y-2.5">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-[14.5px] leading-relaxed text-gray-500">
                <span className="mt-1 text-[#1a5fd4]">→</span>
                {f}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-[15px] leading-[1.85] text-gray-500">
            We don't just bank your money. We help you multiply it, protect it, and use it to build something legendary.
          </p>

          {/* <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a5fd4] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d3fa8] hover:shadow-xl">
            Open an SME Account <ChevronRight className="h-4 w-4" />
          </button> */}
        </div>

        {/* Right — circular image */}
        <div className="flex items-center justify-center">
          <div className="relative h-[360px] w-[360px] overflow-hidden rounded-full shadow-2xl">
            <Image src={rect26} alt="SME banking" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — BIGGER OPPORTUNITIES
   World map bg + centered image
═══════════════════════════════════════════ */
export function SmeOpportunitiesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8faff] px-8 py-20">
      {/* World map background image */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Image
          src={maskGroup}
          alt=""
          fill
          className="object-cover opacity-[0.06]"
        />
      </div>

      {/* Yellow accent circle behind image */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#fde68a] opacity-40" />

      <div className="relative mx-auto max-w-[1200px] text-center">
        <h2 className="font-display text-3xl font-black uppercase leading-tight text-[#0a1f44] md:text-4xl">
          Your Business Deserves <br /> Bigger Opportunities
        </h2>

        <div className="relative mx-auto mt-14 h-[340px] w-[280px]">
          <Image src={image32} alt="Business owner" fill className="object-contain object-bottom" />
        </div>
      </div>
    </section>
  );
}