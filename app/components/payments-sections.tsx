"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import rect26 from "@/public/images/branding/Rectangle 26.png";
import rect27 from "@/public/images/branding/Rectangle 27.png";

/* ═══════════════════════════════════════════
   SECTION 1 — HANDLE YOUR EVERYDAY PAYMENTS
   Left: person photo with floating provider logos | Right: text
═══════════════════════════════════════════ */

// Provider logos as coloured circle badges
const providers = [
  { label: "MTN",       bg: "#fbbf24", color: "#000",     top: "4%",  left: "28%" },
  { label: "Airtel",    bg: "#dc2626", color: "#fff",     top: "4%",  left: "58%" },
  { label: "Glo",       bg: "#16a34a", color: "#fff",     top: "32%", left: "68%" },
  { label: "9Mobile",   bg: "#15803d", color: "#fff",     top: "58%", left: "60%" },
  { label: "EKEDC",     bg: "#1d4ed8", color: "#fff",     top: "62%", left: "2%"  },
  { label: "GOtv",      bg: "#ea580c", color: "#fff",     top: "52%", left: "50%" },
  { label: "DStv",      bg: "#1e40af", color: "#fff",     top: "72%", left: "56%" },
  { label: "Startimes", bg: "#f97316", color: "#fff",     top: "80%", left: "10%" },
];

export function PaymentsFeatureSection() {
  return (
    <section className="relative overflow-hidden bg-white px-8 py-20">
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left — photo + floating provider badges */}
        <div className="relative" style={{ height: 420 }}>
          {/* Main photo */}
          <div className="absolute inset-x-8 inset-y-0 overflow-hidden rounded-2xl shadow-lg">
            {/* swap with actual payments photo */}
            <Image src={rect26} alt="Payments" fill className="object-cover" />
          </div>

          {/* Floating provider logo bubbles */}
          {providers.map((p) => (
            <div
              key={p.label}
              className="absolute flex items-center justify-center rounded-full shadow-lg text-[10px] font-black"
              style={{
                top: p.top,
                left: p.left,
                width: 52,
                height: 52,
                background: p.bg,
                color: p.color,
                zIndex: 10,
              }}
            >
              {p.label}
            </div>
          ))}
        </div>

        {/* Right — text */}
        <div>
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-[#0a1f44] md:text-4xl">
            Handle Your Every Day Payments With Ease
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-[1.85] text-gray-500">
            <p>
              Make daily transactions simple, fast, and stress-free. From bills to essential payments,
              everything is designed to help you stay in control without hassle or delay.
            </p>
            <p>
              With reliable and convenient financial solutions, you can manage your everyday needs smoothly
              and focus on what truly matters.
            </p>
          </div>
          {/* <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a5fd4] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d3fa8] hover:shadow-xl">
            Make a Payment <ChevronRight className="h-4 w-4" />
          </button> */}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — ONE PLACE FOR ALL YOUR ESSENTIAL PAYMENTS
   Light pink/grey bg + heading + 4 photo cards with labels
═══════════════════════════════════════════ */
const paymentFeatures = [
  { label: "Fast & Secure Transactions" },
  { label: "Pay anytime from anywhere" },
  { label: "Instant Payment Confirmation" },
  { label: "No need to visit a Payment Office" },
];

export function PaymentsFeaturesSection() {
  return (
    <section className="bg-[#fdf4f4] px-8 py-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-display mb-12 text-center text-2xl font-black uppercase tracking-wide text-[#0a1f44] md:text-3xl">
          One Place For All Your Essential Payments
        </h2>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {paymentFeatures.map((f, i) => (
            <div key={f.label} className="flex flex-col gap-3">
              <div className="relative overflow-hidden rounded-2xl shadow-md" style={{ height: 180 }}>
                {/* swap with actual payment feature photos */}
                <Image src={i % 2 === 0 ? rect26 : rect27} alt={f.label} fill className="object-cover" />
              </div>
              <p className="text-[13.5px] font-semibold leading-snug text-[#0a1f44]">{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}