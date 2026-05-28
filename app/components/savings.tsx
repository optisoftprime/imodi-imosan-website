"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import rect26 from "@/public/images/branding/Rectangle 26.png";
import rect27 from "@/public/images/branding/Rectangle 27.png";
import vector1 from "@/public/images/branding/Vector (1).png";
import vector2 from "@/public/images/branding/Vector (2).png";
import vector from "@/public/images/branding/Vector.png";

/* ─── Dot grid helper ─────────────────────────────────────────────────────── */
const DotGrid = ({
  rows = 12,
  cols = 12,
  gap = 22,
  r = 2,
  color = "#1a5fd4",
  opacity = 0.08,
  className = "",
}: {
  rows?: number;
  cols?: number;
  gap?: number;
  r?: number;
  color?: string;
  opacity?: number;
  className?: string;
}) => {
  const w = cols * gap;
  const h = rows * gap;
  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: cols }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={col * gap + gap / 2}
            cy={row * gap + gap / 2}
            r={r}
            fill={color}
          />
        )),
      )}
    </svg>
  );
};

/* ═══════════════════════════════════════════
   START SMALL, GROW BIG
═══════════════════════════════════════════ */
export function StartSmallSection() {
  return (
    <section className="relative overflow-hidden bg-white px-8 py-20">

      {/* Dot grid — bottom-right corner, bleeds off edge */}
      <div className="pointer-events-none absolute -bottom-6 -right-6">
        <DotGrid rows={14} cols={14} gap={22} r={2.2} />
      </div>

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">

        {/* ── Left: text ── */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#1a5fd4]">
            START SMALL,
          </p>
          <h2 className="mt-1 text-4xl font-black text-[#0a1f44] md:text-5xl">
            GROW BIG
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-[1.85] text-gray-500">
            <p>
              Build your future with disciplined, consistent saving. With
              flexible options and the right support from us, every contribution
              brings you closer to your goals — helping your money grow steadily
              over time.
            </p>
            <p>
              Whether you're saving for a personal milestone, business plans, or
              unexpected needs, your journey becomes easier with a system
              designed to keep you focused, motivated, and in control.
            </p>
          </div>
          {/* <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a5fd4] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#0d3fa8] hover:shadow-lg">
            Start Saving Now <ChevronRight className="h-4 w-4" />
          </button> */}
        </div>

        {/* ── Right: two overlapping images ── */}
        <div className="relative flex items-center justify-center" style={{ height: 360 }}>
          {/* Top-right image */}
          <div
            className="absolute overflow-hidden rounded-2xl shadow-lg"
            style={{ width: 260, height: 240, top: 0, right: 0 }}
          >
            <Image
              src={rect26}
              alt="Woman with tablet"
              fill
              className="object-cover"
            />
          </div>
          {/* Bottom-left image — overlaps slightly */}
          <div
            className="absolute overflow-hidden rounded-2xl shadow-2xl"
            style={{ width: 240, height: 220, bottom: 0, left: 0 }}
          >
            <Image
              src={rect27}
              alt="Woman with phone"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SAVINGS TYPES
═══════════════════════════════════════════ */
const savingsTypes = [
  {
    title: "Target Savings",
    description:
      "We provide a simple and secure savings account designed to help individuals save money, manage their finances, and plan confidently for the future.",
    img: vector,
    alt: "Target savings",
  },
  {
    title: "Individual Savings",
    description:
      "We provide a simple and secure savings account designed to help individuals save money, manage their finances, and plan confidently for the future.",
    img: vector1,
    alt: "Individual savings",
  },
  {
    title: "Cooperative Savings",
    description:
      "We provide a simple and secure savings account designed to help individuals save money, manage their finances, and plan confidently for the future.",
    img: vector2,
    alt: "Cooperative savings",
  },
];

export function SavingsTypesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8faff] px-8 py-20">

      {/* Dot grid — right side, mid-height, bleeds off edge */}
      <div className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2">
        <DotGrid rows={16} cols={10} gap={22} r={2.2} />
      </div>

      {/* Dot grid — bottom-left corner */}
      <div className="pointer-events-none absolute -bottom-6 -left-6">
        <DotGrid rows={10} cols={10} gap={22} r={2.2} />
      </div>

      <div className="relative mx-auto max-w-[1200px]">
        <h2 className="mb-12 text-center text-3xl font-black uppercase tracking-[0.18em] text-[#0a1f44] md:text-4xl">
          SAVINGS TYPES
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {savingsTypes.map((type) => (
            <div
              key={type.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image area — taller to match Figma */}
              <div className="relative w-full overflow-hidden" style={{ height: 220 }}>
                <Image
                  src={type.img}
                  alt={type.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a1f44]">
                  {type.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-gray-500">
                  {type.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          {/* <button className="inline-flex items-center gap-2 rounded-lg bg-[#1a5fd4] px-9 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d3fa8] hover:shadow-xl">
            Start Saving Now <ChevronRight className="h-4 w-4" />
          </button> */}
        </div>
      </div>
    </section>
  );
}