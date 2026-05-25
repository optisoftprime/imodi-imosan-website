"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import image88 from "@/public/images/branding/image 88.png";
import image89 from "@/public/images/branding/image 89.png";
import image30 from "@/public/images/branding/image 30.png";

/* ═══════════════════════════════════════════
   SECTION 1 — SERVE WITH PURPOSE
   Left: two interlocking clipped photos | Right: text
═══════════════════════════════════════════ */
export function ReligiousFeatureSection() {
  return (
    <section className="relative overflow-hidden bg-white px-8 py-20">
      {/* Decorative purple blob — far right */}
      <div
        className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, #ddd6fe 0%, #c4b5fd 40%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* ── Left: two clipped photos ── */}
        <div className="relative" style={{ height: 460 }}>

          {/* Top photo — big curve TOP-LEFT only */}
          <div
            className="absolute left-0 top-0 overflow-hidden shadow-xl"
            style={{
              width: 300,
              height: 230,
              borderRadius: "120px 16px 16px 16px",
            }}
          >
            <Image
              src={image89}
              alt="People worshipping"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Bottom photo — big curve BOTTOM-RIGHT only, shifted right */}
          <div
            className="absolute overflow-hidden shadow-2xl"
            style={{
              width: 300,
              height: 240,
              top: 185,
              left: 90,
              borderRadius: "16px 16px 120px 16px",
            }}
          >
            <Image
              src={image88}
              alt="Hands in prayer"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* ── Right: text ── */}
        <div>
          <h2 className="font-display text-4xl font-black uppercase leading-tight text-[#0a1f44] md:text-5xl">
            Serve With Purpose.
            <br />
            Manage With
            <br />
            Confidence
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-[1.85] text-gray-500">
            <p>
              Support your mission with financial solutions designed to help
              religious organizations steward resources with clarity and trust.
              From offerings and donations to project funds, everything is
              managed with ease and transparency.
            </p>
            <p>
              By banking with us, your ministry can focus on its calling — while
              we help you manage your finances securely, responsibly, and with
              confidence.
            </p>
          </div>
          <button className="mt-10 inline-flex items-center gap-2 rounded-lg bg-[#1a5fd4] px-7 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d3fa8] hover:shadow-xl">
            Open a Religious Account <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — CATEGORIES
   4 coloured cards
═══════════════════════════════════════════ */
const categories = [
  { label: "Churches", bg: "#22c55e" },
  { label: "Mosque", bg: "#f97316" },
  { label: "Ministries & Faith\nOrganization", bg: "#a21caf" },
  { label: "Religious\nSociety", bg: "#f97316" },
];

function CategoryIcon() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="16" width="5" height="9" rx="1" fill="white" />
        <rect x="11" y="10" width="5" height="15" rx="1" fill="white" />
        <rect x="19" y="5" width="5" height="20" rx="1" fill="white" />
        <polyline
          points="5,16 13,10 21,5"
          stroke="#fbbf24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="21" cy="5" r="2" fill="#fbbf24" />
      </svg>
    </div>
  );
}

export function ReligiousCategoriesSection() {
  return (
    <section className="bg-[#f8faff] px-8 py-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-display mb-12 text-center text-2xl font-black uppercase leading-snug text-[#0a1f44] md:text-3xl">
          If You're Serving A Greater Purpose
          <br />
          This Is For You
        </h2>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="flex flex-col items-center justify-center gap-4 rounded-2xl px-6 py-10 text-center shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: cat.bg }}
            >
             <Image src={image30} /> 
              <p className="whitespace-pre-line text-[14px] font-bold leading-snug text-white">
                {cat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}