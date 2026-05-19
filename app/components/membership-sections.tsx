"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import rect26 from "@/public/images/branding/Rectangle 26.png";
import rect27 from "@/public/images/branding/Rectangle 27.png";
import savingsBg from "@/public/images/branding/Rectangle 2.png";

/* ═══════════════════════════════════════════
   SECTION 1 — BE PART OF SOMETHING BIGGER
   Left: two side-by-side photos | Right: text
═══════════════════════════════════════════ */
export function MembershipFeatureSection() {
  return (
    <section className="relative overflow-hidden bg-white px-8 py-20">
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left — two side-by-side photos */}
        <div className="flex items-end gap-4">
          <div
            className="overflow-hidden rounded-2xl shadow-lg"
            style={{ width: 200, height: 220 }}
          >
            {/* swap with actual membership photo */}
            <Image
              src={rect26}
              alt="Group"
              width={200}
              height={220}
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="overflow-hidden rounded-2xl shadow-2xl"
            style={{ width: 180, height: 190 }}
          >
            {/* swap with actual membership photo */}
            <Image
              src={rect27}
              alt="Community"
              width={180}
              height={190}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right — text */}
        <div>
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-[#0a1f44] md:text-4xl">
            Be Part Of Something Bigger!
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-[1.85] text-gray-500">
            <p>
              Join a community built on shared goals, support, and opportunity
              where growth becomes easier when people come together with
              purpose. Whether you're saving, planning, or working toward a
              shared vision, every step moves you closer to meaningful progress.
            </p>
            <p>
              With simple, reliable financial solutions, managing contributions
              and achieving group goals becomes seamless and transparent.
              Everything is designed to help you stay organised, focused, and
              confident in your financial journey.
            </p>
          </div>
          <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a5fd4] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d3fa8] hover:shadow-xl">
            Become a Member <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — WHERE YOU BELONG YOU GROW
   Full-width dark banner with bg image + orange slash accents + text left
═══════════════════════════════════════════ */
export function MembershipBannerSection() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 340 }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={savingsBg}
          alt=""
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0a1f44]/75" />
      </div>

      {/* Orange slash accents */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1200 340"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="320"
          y1="0"
          x2="220"
          y2="340"
          stroke="#f97316"
          strokeWidth="18"
          strokeLinecap="round"
          opacity="0.9"
        />
        <line
          x1="360"
          y1="0"
          x2="260"
          y2="340"
          stroke="#f97316"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.6"
        />
        <line
          x1="880"
          y1="0"
          x2="780"
          y2="340"
          stroke="#f97316"
          strokeWidth="18"
          strokeLinecap="round"
          opacity="0.9"
        />
        <line
          x1="920"
          y1="0"
          x2="820"
          y2="340"
          stroke="#f97316"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>

      {/* Person image — right side */}
      <div className="absolute bottom-0 right-16 hidden h-full w-[320px] lg:block">
        {/* swap with actual banner person photo */}
        <Image
          src={rect26}
          alt="Member"
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Text — left */}
      <div className="relative z-10 flex h-full items-center px-8 py-20">
        <div className="max-w-sm">
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-white md:text-4xl">
            Where You Belong <br /> You Grow!
          </h2>
          <p className="mt-4 text-[14px] leading-relaxed text-blue-200">
            Imodi-Imosan Microfinance Bank is committed to delivering accessible
            financial services that empower individuals, entrepreneurs, and
            small businesses.
          </p>
        </div>
      </div>
    </section>
  );
}
