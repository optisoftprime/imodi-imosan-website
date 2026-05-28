"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { StaticImageData } from "next/image";

import womanHoldingFruit from "@/public/images/branding/woman-holding-fruit.png";
import image30 from "@/public/images/branding/image 30.png";

import ellipse329 from "@/public/images/branding/Ellipse 329.png";
import ellipse330 from "@/public/images/branding/Ellipse 330.png";
import ellipse331 from "@/public/images/branding/Ellipse 331.png";
import ellipse332 from "@/public/images/branding/Ellipse 332.png";
import ellipse333 from "@/public/images/branding/Ellipse 333.png";
import ellipse334 from "@/public/images/branding/Ellipse 334.png";
import ellipse335 from "@/public/images/branding/Ellipse 335.png";
import ellipse336 from "@/public/images/branding/Ellipse 336.png";
import ellipse338 from "@/public/images/branding/Ellipse 338.png";

/* ═══════════════════════════════════════════
   SECTION 1 — WHEN WE SAVE TOGETHER
   Cluster is 3 staggered rows on the right
═══════════════════════════════════════════ */

// Row 1: 2 circles | Row 2: 3 circles | Row 3: 4 circles
const clusterRows: { size: number; src: StaticImageData; alt: string }[][] = [
  [
    { size: 90, src: ellipse338, alt: "Member" },
    { size: 76, src: ellipse336, alt: "Member" },
  ],
  [
    { size: 80, src: ellipse334, alt: "Member" },
    { size: 96, src: ellipse335, alt: "Member" },
    { size: 82, src: ellipse333, alt: "Member" },
  ],
  [
    { size: 78, src: ellipse332, alt: "Member" },
    { size: 84, src: ellipse330, alt: "Member" },
    { size: 72, src: ellipse331, alt: "Member" },
    { size: 80, src: ellipse329, alt: "Member" },
  ],
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
          {/* <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a5fd4] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d3fa8] hover:shadow-xl">
            Open a Cooperative Account <ChevronRight className="h-4 w-4" />
          </button> */}
        </div>

        {/* Right — staggered circle cluster */}
        <div className="flex flex-col items-start gap-3">
          {clusterRows.map((row, ri) => (
            <div
              key={ri}
              className="flex items-center gap-3"
              style={{ marginLeft: ri === 0 ? 40 : 0 }}
            >
              {row.map((c, ci) => (
                <div
                  key={ci}
                  className="overflow-hidden rounded-full border-2 border-white shadow-md flex-shrink-0"
                  style={{ width: c.size, height: c.size }}
                >
                  <Image
                    src={c.src}
                    alt={c.alt}
                    width={c.size}
                    height={c.size}
                    className="object-cover h-full w-full"
                  />
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
              <div className="relative h-11 w-11">
                <Image src={image30} alt="Feature icon" fill className="object-contain" />
              </div>
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
            <Image src={womanHoldingFruit} alt="Cooperative banking" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}