"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import rect26 from "@/public/images/branding/salary image.png";
import chartImg from "@/public/images/branding/image 30.png";

/* ═══════════════════════════════════════════
   SECTION 1 — DON'T WAIT FOR PAY DAY
   Left: text + button | Right: cutout person photo
═══════════════════════════════════════════ */
export function SalaryAdvanceFeatureSection() {
  return (
    <section className="relative overflow-hidden bg-white px-8 py-20">
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left */}
        <div>
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-[#0a1f44] md:text-4xl">
            Don't Wait For Pay Day, <br /> Move Forward Today
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-[1.85] text-gray-500">
            <p>
              Handle urgent needs with ease by accessing funds when you need them most. No more delays or
              stress — just quick support to keep you moving forward.
            </p>
            <p>
              With a simple and reliable process, you can take care of important expenses now and stay in
              control of your finances with confidence.
            </p>
          </div>
          {/* <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a5fd4] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d3fa8] hover:shadow-xl">
            Get Salary Advance <ChevronRight className="h-4 w-4" />
          </button> */}
        </div>

        {/* Right — person photo (cutout feel, no border-radius) */}
        <div className="flex items-center justify-center">
          <div className="relative h-[380px] w-[320px]">
            {/* swap with actual salary advance person photo */}
            <Image src={rect26} alt="Salary advance" fill className="object-cover object-top" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — ACCESS YOUR SALARY INSTANTLY
   Centered heading + 4 feature cards (alternating dark/light)
═══════════════════════════════════════════ */
const features = [
  { label: "Quick access to funds",           dark: true  },
  { label: "No collateral required",          dark: false },
  { label: "Transparent terms & repayment",   dark: true  },
  { label: "Secure and reliable banking service", dark: false },
];

function FeatureIcon({ dark }: { dark: boolean }) {
  return (
    <div className={`flex h-12 w-12 items-center justify-center rounded-full ${dark ? "bg-white/20" : "bg-[#e8f0fb]"}`}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3"  y="16" width="5" height="9"  rx="1" fill={dark ? "white" : "#1a5fd4"} />
        <rect x="11" y="10" width="5" height="15" rx="1" fill={dark ? "white" : "#1a5fd4"} />
        <rect x="19" y="5"  width="5" height="20" rx="1" fill={dark ? "white" : "#1a5fd4"} />
        <polyline points="5,16 13,10 21,5" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="21" cy="5" r="2" fill="#f59e0b" />
      </svg>
    </div>
  );
}

export function SalaryAdvanceFeaturesSection() {
  return (
    <section className="bg-[#f8faff] px-8 py-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-display mb-12 text-center text-2xl font-black uppercase tracking-wide text-[#0a1f44] md:text-3xl">
          Access Your Salary Instantly
        </h2>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center gap-4 rounded-2xl px-6 py-8 text-center shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: f.dark ? "#0a1f44" : "white" }}
            >
              <Image src={chartImg} alt="" />
              <p className={`text-[13.5px] font-semibold leading-snug ${f.dark ? "text-white" : "text-[#0a1f44]"}`}>
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}