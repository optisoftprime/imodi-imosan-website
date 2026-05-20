"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import rect26 from "@/public/images/branding/chicken.png";

import agricOne from "@/public/images/branding/agric 1.png";
import agricTwo from "@/public/images/branding/agric 2.png";
import agricThree from "@/public/images/branding/agric 3.png";
import agricFour from "@/public/images/branding/agric  4.png";

/* ═══════════════════════════════════════════
   SECTION 1 — CULTIVATING GROWTH
   Left: rectangular photo | Right: text
═══════════════════════════════════════════ */
export function AgriBizFeatureSection() {
  return (
    <section className="relative overflow-hidden bg-white px-8 py-20">
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left — plain rectangular photo */}
        <div
          className="relative overflow-hidden rounded-2xl shadow-lg"
          style={{ height: 340 }}
        >
          {/* swap with actual agri photo (rooster/farm) */}
          <Image
            src={rect26}
            alt="Agri-business"
            fill
            className="object-cover"
          />
        </div>

        {/* Right — text */}
        <div>
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-[#0a1f44] md:text-4xl">
            Cultivating Growth <br /> Beyond The Harvest
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-[1.85] text-gray-500">
            <p>
              Build a stronger future for your agricultural business with the
              right financial support and opportunities to grow. From farming
              operations to production and distribution, every stage of your
              agri-business deserves solutions that help you scale with
              confidence.
            </p>
            <p>
              With flexible support tailored to the agricultural sector, you can
              improve productivity, expand operations, and create lasting value
              beyond every harvest season.
            </p>
          </div>
          <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a5fd4] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d3fa8] hover:shadow-xl">
            Apply for Agri-Business <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — GROWING AGRICULTURE, GROWING PROSPERITY
   Dark bg with warm orange glow + heading + 4 photo strip + plant icon
═══════════════════════════════════════════ */
export function AgriBizGallerySection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#0a0f1e" }}
    >
      {/* Orange warm glow behind photos */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(ellipse, #c2410c 0%, #92400e 40%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-8 py-16">
        <h2 className="font-display mb-10 text-center text-2xl font-black uppercase tracking-wide text-white md:text-3xl">
          Growing Agriculture, Growing Prosperity
        </h2>

        {/* 4-photo horizontal strip */}
        <div className="grid grid-cols-4 gap-3">
          {[agricOne, agricTwo, agricThree, agricFour].map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl shadow-lg"
              style={{ height: 180 }}
            >
              {/* swap each with actual farmer/farm photos */}
              <Image
                src={img}
                alt={`Farm photo ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Plant/seedling icon centered below photos */}
        <div className="mt-8 flex justify-center">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 50 C30 50 30 30 30 20"
              stroke="#f97316"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M30 30 C20 25 12 28 10 38 C20 40 28 35 30 30Z"
              fill="#f97316"
              opacity="0.85"
            />
            <path
              d="M30 25 C40 18 50 22 50 32 C40 34 32 28 30 25Z"
              fill="#f97316"
              opacity="0.65"
            />
            <circle cx="30" cy="52" r="4" fill="#f97316" opacity="0.5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
