"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import rect26 from "@/public/images/branding/Rectangle 26.png";
import rect27 from "@/public/images/branding/Rectangle 27.png";
import vector1 from "@/public/images/branding/Vector (1).png";
import vector2 from "@/public/images/branding/Vector (2).png";
import vector from "@/public/images/branding/Vector.png";



/* ═══════════════════════════════════════════
   START SMALL, GROW BIG
═══════════════════════════════════════════ */
export function StartSmallSection() {
  return (
    <section className="relative overflow-hidden bg-white px-8 py-20">
      <div className="pointer-events-none absolute bottom-0 right-0 opacity-[0.07]">
        <svg
          width="320"
          height="320"
          viewBox="0 0 320 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 13 }).map((_, row) =>
            Array.from({ length: 13 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={col * 25 + 12}
                cy={row * 25 + 12}
                r="2.5"
                fill="#1a5fd4"
              />
            )),
          )}
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1a5fd4]">
            START SMALL,
          </p>
          <h2 className="font-display mt-1 text-4xl font-black text-[#0a1f44] md:text-5xl">
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
          <button className="mt-8 inline-flex items-center gap-2 rounded-lg border border-[#0a1f44]/20 bg-white px-6 py-3 text-sm font-semibold text-[#0a1f44] shadow-sm transition hover:shadow-md">
            Start Saving Now <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div
          className="relative flex items-center justify-center"
          style={{ height: 380 }}
        >
          <div
            className="absolute right-0 top-0 overflow-hidden rounded-2xl shadow-lg"
            style={{ width: 240, height: 270 }}
          >
            <Image
              src={rect26}
              alt="Woman with tablet"
              fill
              className="object-cover"
            />
          </div>
          <div
            className="absolute bottom-0 left-0 overflow-hidden rounded-2xl shadow-2xl"
            style={{ width: 230, height: 250 }}
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
      <div className="pointer-events-none absolute left-0 top-0 opacity-[0.07]">
        <svg
          width="280"
          height="280"
          viewBox="0 0 280 280"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 11 }).map((_, row) =>
            Array.from({ length: 11 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={col * 26 + 13}
                cy={row * 26 + 13}
                r="2.5"
                fill="#1a5fd4"
              />
            )),
          )}
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1200px]">
        <h2 className="font-display mb-12 text-center text-3xl font-black uppercase tracking-[0.15em] text-[#0a1f44] md:text-4xl">
          SAVINGS TYPES
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {savingsTypes.map((type) => (
            <div
              key={type.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={type.img}
                  alt={type.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-[#0a1f44]">
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
          <button className="inline-flex items-center gap-2 rounded-lg bg-[#1a5fd4] px-9 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d3fa8] hover:shadow-xl">
            Start Saving Now <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
