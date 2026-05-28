"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import rect26 from "@/public/images/branding/Rectangle 26.png";
import rect27 from "@/public/images/branding/Rectangle 27.png";

/* ═══════════════════════════════════════════
   SECTION 1 — GIVING BACK, GROWING TOGETHER
   Complex two-column layout with photos, body text, and initiative list
═══════════════════════════════════════════ */
const initiatives = [
  {
    title: "Education for Every Child",
    body: "Funding scholarships, building smart classrooms, and empowering young minds with tech and financial literacy.",
  },
  {
    title: "Youth & Entrepreneurship",
    body: "Supporting startups, skill-up programs, and side-hustle grants so the next generation of founders can thrive.",
  },
  {
    title: "Community Development",
    body: "Clean water projects, healthcare outreach, and market upgrades in underserved areas.",
  },
  {
    title: "Sustainability & Environment",
    body: "Tree planting drives, plastic waste reduction campaigns, and green banking initiatives.",
  },
];

export function CSRFeatureSection() {
  return (
    <section className="relative overflow-hidden bg-white px-8 py-20">
      <div className="relative mx-auto max-w-[1200px]">
        {/* Top grid — left: heading + photo + text | right: photo + body */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left col */}
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight text-[#0a1f44] md:text-4xl">
              Giving Back, Growing Together
            </h2>
            <div className="relative mt-6 overflow-hidden rounded-2xl shadow-lg" style={{ height: 240 }}>
              {/* swap with actual CSR community photo */}
              <Image src={rect26} alt="Community" fill className="object-cover" />
            </div>
            <div className="mt-6 space-y-3 text-[14px] leading-[1.85] text-gray-500">
              <p>
                Women & Inclusion — Programs that equip women entrepreneurs and promote diversity in business.
              </p>
              <p>
                Disaster Relief & Beyond — Rapid response when it matters most, because we rise or fall together.
              </p>
              <p>
                We can't just talk about impact — we measure it. Every year, thousands of lives are touched
                through the little drops we intentionally contribute. Because when businesses and people grow
                together, everyone wins.
              </p>
              <p>CSR isn't charity. It's partnership.</p>
              <p>It's our promise that as we grow, our communities grow too.</p>
            </div>
          </div>

          {/* Right col */}
          <div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg" style={{ height: 220 }}>
              {/* swap with actual CSR team photo */}
              <Image src={rect27} alt="CSR team" fill className="object-cover" />
            </div>
            <div className="mt-6 space-y-3 text-[14px] leading-[1.85] text-gray-500">
              <p>
                At the heart of everything we do is a simple belief: real success isn't just measured in
                profits — it's measured in purpose.
              </p>
              <p>
                That's why Corporate Social Responsibility (CSR) isn't a side project for us. It's our way of
                giving back to the society that raised us. Every naira, every initiative, every partnership is
                a conscious drop that helps build stronger communities, brighter futures, and a better Nigeria.
              </p>
              <p className="font-semibold text-[#0a1f44]">Here's how we're showing up:</p>
              <ol className="space-y-2">
                {initiatives.map((item, i) => (
                  <li key={i} className="text-[13.5px]">
                    <span className="font-semibold text-[#0a1f44]">{i + 1}. {item.title}</span> — {item.body}
                  </li>
                ))}
              </ol>
            </div>
            {/* <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a5fd4] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d3fa8] hover:shadow-xl">
              See Our Impact <ChevronRight className="h-4 w-4" />
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — TOGETHER WE CREATE LASTING IMPACT
   Centered heading + full-width photo
═══════════════════════════════════════════ */
export function CSRImpactSection() {
  return (
    <section className="bg-white px-8 pb-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-display mb-10 text-center text-2xl font-black uppercase tracking-wide text-[#0a1f44] md:text-3xl">
          Together We Create Lasting Impact
        </h2>
        <div className="relative w-full overflow-hidden rounded-2xl shadow-xl" style={{ height: 360 }}>
          {/* swap with actual impact photo */}
          <Image src={rect26} alt="Lasting impact" fill className="object-cover object-center" />
        </div>
      </div>
    </section>
  );
}