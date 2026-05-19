"use client";
import Image from "next/image";

import rect26 from "@/public/images/branding/Rectangle 26.png";
import rect27 from "@/public/images/branding/Rectangle 27.png";

/* ── Store badge SVGs ── */
function GooglePlayBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-white">
      <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1.5L11 11L1 20.5V1.5Z" fill="#4CAF50" />
        <path d="M1 1.5L14 8L11 11L1 1.5Z" fill="#F44336" />
        <path d="M1 20.5L11 11L14 14L1 20.5Z" fill="#2196F3" />
        <path d="M14 8L19 10.5L14 14L11 11L14 8Z" fill="#FFC107" />
      </svg>
      <div className="leading-tight">
        <p className="text-[9px] text-gray-300">GET IT ON</p>
        <p className="text-[13px] font-semibold">Google Play</p>
      </div>
    </div>
  );
}

function AppStoreBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-white">
      <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 11.5C15 9 16.5 7.5 16.5 7.5C16.5 7.5 14.5 6.5 12.5 8C11.5 6 10 5.5 9 5.5C8 5.5 6.5 6 5.5 8C3.5 6.5 1.5 7.5 1.5 7.5C1.5 7.5 3 9 3 11.5C3 15 5 19 7 20.5C7.8 21.1 8.4 21.5 9 21.5C9.6 21.5 10.2 21.1 11 20.5C13 19 15 15 15 11.5Z" fill="white" />
        <path d="M9 1C9 1 10.5 1 11.5 3C10.5 3.5 8.5 3.5 7.5 3C8.5 1 9 1 9 1Z" fill="white" />
      </svg>
      <div className="leading-tight">
        <p className="text-[9px] text-gray-300">Download on the</p>
        <p className="text-[13px] font-semibold">App Store</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SECTION 1 — SAVE. BORROW. PAY. GROW.
   Left: text + store badges | Right: phone mockup images on blue circle
═══════════════════════════════════════════ */
export function RizeSpringFeatureSection() {
  return (
    <section className="relative overflow-hidden bg-white px-8 py-20">
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left — text */}
        <div>
          <h2 className="font-display text-4xl font-black uppercase leading-tight text-[#0a1f44] md:text-5xl">
            Save. Borrow. Pay. Grow.
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-[1.85] text-gray-500">
            <p>
              RizeSpring is a complete digital banking experience designed to help you take control of your
              finances with ease and confidence. Whether you're saving towards a goal, accessing quick loans,
              managing daily expenses, or making essential payments, everything you need is available in one
              simple and secure app.
            </p>
            <p>
              From target savings and group contributions to loan applications and flexible financial support,
              RizeSpring helps you stay organised, disciplined, and financially empowered every step of the way.
              The app is built to support your everyday needs while helping you plan for bigger opportunities ahead.
            </p>
            <p>
              Easily buy airtime and data, pay electricity bills, transfer funds, and manage your transactions
              anytime, anywhere without stress. With a smooth user experience and reliable access to financial
              services, banking becomes faster, smarter, and more convenient. Why not download the RizeSpring
              App now and see for yourself.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <GooglePlayBadge />
            <AppStoreBadge />
          </div>
        </div>

        {/* Right — two phone images on blue circle bg */}
        <div className="flex items-center justify-center">
          <div className="relative flex items-center justify-center" style={{ width: 380, height: 420 }}>
            {/* Blue circle background */}
            <div className="absolute inset-0 rounded-full bg-[#1a3fd4] opacity-20" />
            <div
              className="absolute rounded-full bg-[#1a3fd4]"
              style={{ width: 320, height: 320, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            />
            {/* Back phone — tilted left */}
            <div
              className="absolute overflow-hidden rounded-3xl shadow-2xl"
              style={{ width: 160, height: 300, left: "5%", top: "8%", transform: "rotate(-8deg)", zIndex: 1 }}
            >
              {/* swap with actual app screenshot */}
              <Image src={rect26} alt="RizeSpring app" fill className="object-cover" />
            </div>
            {/* Front phone — tilted right */}
            <div
              className="absolute overflow-hidden rounded-3xl shadow-2xl"
              style={{ width: 160, height: 300, right: "5%", top: "16%", transform: "rotate(6deg)", zIndex: 2 }}
            >
              {/* swap with actual app screenshot */}
              <Image src={rect27} alt="RizeSpring app screen" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — BANK SMARTER. GROW FASTER.
   Dark blue bg + phone left + phone right + center text + store badges
═══════════════════════════════════════════ */
export function RizeSpringCTASection() {
  return (
    <section
      className="relative overflow-hidden px-8 py-20"
      style={{ background: "linear-gradient(135deg, #0a1a6e 0%, #0d2fa8 50%, #1a5fd4 100%)" }}
    >
      {/* Left phone — partially off screen */}
      <div
        className="absolute bottom-0 left-0 overflow-hidden rounded-3xl shadow-2xl"
        style={{ width: 140, height: 280, transform: "rotate(-10deg) translateX(-20px)" }}
      >
        {/* swap with actual app screenshot */}
        <Image src={rect26} alt="App left" fill className="object-cover" />
      </div>

      {/* Right phone — partially off screen */}
      <div
        className="absolute bottom-0 right-0 overflow-hidden rounded-3xl shadow-2xl"
        style={{ width: 140, height: 280, transform: "rotate(8deg) translateX(20px)" }}
      >
        {/* swap with actual app screenshot */}
        <Image src={rect27} alt="App right" fill className="object-cover" />
      </div>

      {/* Center content */}
      <div className="relative z-10 mx-auto max-w-xl text-center">
        {/* Logo mark */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 shadow-lg">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
            <path d="M40 14 C28 22 22 32 26 44 C30 54 40 60 40 60 C40 60 50 54 54 44 C58 32 52 22 40 14Z" fill="url(#rizeLeaf)" opacity="0.95" />
            <defs>
              <linearGradient id="rizeLeaf" x1="40" y1="14" x2="40" y2="60" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7ecfff" />
                <stop offset="100%" stopColor="#1a4fa0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <h2 className="font-display text-3xl font-black text-white md:text-4xl lg:text-5xl">
          Bank Smarter. Grow Faster.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-blue-200">
          Access your banking services anytime with RizeSpring, the mobile banking app from
          Imodi-Imosan Microfinance Bank. Manage your accounts, make transfers, and stay connected
          to your finances directly from your smartphone.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <GooglePlayBadge />
          <AppStoreBadge />
        </div>
      </div>
    </section>
  );
}