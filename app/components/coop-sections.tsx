"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import rect26 from "@/public/images/branding/Rectangle 26.png";
import rect27 from "@/public/images/branding/Rectangle 27.png";

/* ═══════════════════════════════════════════
   SECTION 1 — WHEN WE SAVE TOGETHER
   Cluster is 3 staggered rows on the right
═══════════════════════════════════════════ */

// Row 1: 2 circles | Row 2: 3 circles | Row 3: 3 circles + 1 offset right
const clusterRows = [
  [{ size: 90 }, { size: 76 }],
  [{ size: 80 }, { size: 96 }, { size: 82 }],
  [{ size: 78 }, { size: 84 }, { size: 72 }, { size: 80 }],
];

export function CoopSaveTogetherSection() {
  return (
    <section className="relative overflow-hidden bg-white px-8 py-20">
      {/* Decorative blob — bottom left */}
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #c4b5fd 0%, #a78bfa 50%, transparent 70%)" }}
      />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left — text */}
        <div>
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-[#0a1f44] md:text-4xl">
            When We Save Together. <br /> We Grow Together
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-[1.85] text-gray-500">
            <p>
              Build stronger financial futures as a community by saving together with us. Through structured
              group savings and trusted support, every member moves closer to shared goals with confidence.
            </p>
            <p>
              By banking with us, your collective effort becomes more powerful — helping you grow wealth
              steadily, support one another, and achieve more as a group.
            </p>
          </div>
          <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a5fd4] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d3fa8] hover:shadow-xl">
            Open a Cooperative Account <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Right — staggered circle cluster */}
        <div className="flex flex-col items-start gap-3">
          {clusterRows.map((row, ri) => (
            <div
              key={ri}
              className="flex items-center gap-3"
              style={{ marginLeft: ri === 0 ? 40 : ri === 2 ? 0 : 0 }}
            >
              {row.map((c, ci) => (
                <div
                  key={ci}
                  className="overflow-hidden rounded-full border-2 border-white shadow-md flex-shrink-0"
                  style={{ width: c.size, height: c.size }}
                >
                  {/* swap rect26 with individual member photos when available */}
                  <Image src={rect26} alt="Member" width={c.size} height={c.size} className="object-cover h-full w-full" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — FEATURES GRID + HEADLINE + IMAGE
═══════════════════════════════════════════ */

function FeatureCardIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5"  y="26" width="8" height="13" rx="1.5" fill="#1a5fd4" />
      <rect x="18" y="18" width="8" height="21" rx="1.5" fill="#1a5fd4" />
      <rect x="31" y="10" width="8" height="29" rx="1.5" fill="#1a5fd4" />
      <polyline points="9,26 22,18 35,10" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="35" cy="10" r="3" fill="#f59e0b" />
    </svg>
  );
}

const coopFeatures = [
  "Secure Group Savings",
  "Easy Fund Management",
  "Access to Group Loans",
  "Support to Collective Growth",
];

export function CoopFeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-white px-8 pb-24 pt-4">
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-16 lg:grid-cols-2">
        {/* Left — 2×2 feature cards */}
        <div className="grid grid-cols-2 gap-5">
          {coopFeatures.map((title) => (
            <div
              key={title}
              className="flex flex-col items-center gap-4 rounded-2xl bg-[#f8faff] p-8 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <FeatureCardIcon />
              <p className="text-[14px] font-semibold leading-snug text-[#0a1f44]">{title}</p>
            </div>
          ))}
        </div>

        {/* Right — headline + photo */}
        <div>
          <h2 className="font-display text-2xl font-black leading-snug text-[#0a1f44] md:text-3xl">
            We Provide Secure Banking Solutions To Help Cooperatives Manage Funds
          </h2>
          <div className="relative mt-8 h-[260px] w-full overflow-hidden rounded-2xl shadow-xl">
            {/* swap rect27 with actual cooperative photo when available */}
            <Image src={rect27} alt="Cooperative banking" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}