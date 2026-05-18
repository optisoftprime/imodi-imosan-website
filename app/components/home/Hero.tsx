"use client";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#eaf0fb]">
      {/* Hero */}
      <section className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-8 pb-32 pt-8 lg:grid-cols-2">
        {/* Left */}
        <div className="relative z-10">
          <p className="text-lg font-bold text-[#0a1f44]">
            CBN Licensed | NDPR Compliant | Secured Banking
          </p>
          <h1 className="mt-6 font-bold leading-[0.95] tracking-tight">
            <span className="text-5xl italic text-[#0a1f44] md:text-6xl">
              Time To{" "}
            </span>
            <span className="text-6xl text-[#0a1f44] md:text-8xl">Grow </span>
            <span className="text-6xl text-[#2a5cff] md:text-8xl">Big!</span>
          </h1>

          <div className="mt-8 max-w-xl space-y-5 text-[15px] leading-relaxed text-[#1a2a4a]">
            <p>Welcome to IIMFB– where ambition meets opportunity.</p>
            <p>
              Every dream deserves the fuel to become a reality- this is our
              promise to you.
              <br />
              And we keep our promises.
            </p>
            <p>
              Whether you're a young entrepreneur launching your first venture,
              a family building a secure future, or a growing business ready to
              scale across markets, now is the Time to grow BIG!
            </p>
            <p>
              We provide the tools, support, and innovative solutions to help
              turn your potentials into powerful progress.
            </p>
            <p>
              Growth isn't about waiting for the perfect moment — it's about
              creating it.
              <br />
              With resilience, smart planning, and the right partner by your
              side, BIG becomes achievable.
            </p>
            <p>
              Join millions of Nigerians today who are already making it BIG.
              <br />
              Open an account today. The next BIG chapter starts here!
            </p>
          </div>

          <button className="mt-10 inline-flex items-center gap-2 rounded-md border border-[#0a1f44]/15 bg-white px-7 py-4 text-base font-semibold text-[#0a1f44] shadow-sm transition hover:shadow-md">
            Start Growing Today <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Right – phone mockup + debit card */}
        <div className="relative flex items-center justify-center">
          {/* Dark circular blob behind phone */}
          <div className="absolute right-4 top-8 h-[480px] w-[480px] rounded-full bg-[#0d3b66]" />

          {/* Phone mockup */}
          <div className="relative z-10 ml-16 mt-8">
            <PhoneMockup />
          </div>

          {/* Debit card — positioned bottom-left of the right column */}
          <div className="absolute bottom-4 left-0 z-20">
            <DebitCard />
          </div>
        </div>
      </section>

      {/* Bottom curve */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-[#0a2a5e]"
        style={{
          borderTopLeftRadius: "50% 100%",
          borderTopRightRadius: "50% 100%",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   Phone Mockup – matches the screenshot UI
───────────────────────────────────────── */
function PhoneMockup() {
  return (
    <div
      className="relative overflow-hidden bg-white shadow-2xl"
      style={{
        width: 260,
        height: 520,
        borderRadius: 36,
        border: "8px solid #111",
      }}
    >
      {/* Notch */}
      <div
        className="absolute left-1/2 top-0 z-10 -translate-x-1/2 bg-black"
        style={{
          width: 80,
          height: 24,
          borderBottomLeftRadius: 14,
          borderBottomRightRadius: 14,
        }}
      />

      {/* Status bar */}
      <div className="flex items-center justify-between bg-white px-4 pt-7 pb-1 text-[9px] font-semibold text-black">
        <span>9:41</span>
        <span className="flex gap-1">
          <span>▌▌▌</span>
          <span>WiFi</span>
          <span>🔋</span>
        </span>
      </div>

      {/* App content */}
      <div className="flex h-full flex-col bg-gray-50">
        {/* Header */}
        <div className="flex items-center justify-between bg-white px-4 py-2 shadow-sm">
          <div>
            <p className="text-[9px] text-gray-400">Hello</p>
            <p className="text-[11px] font-bold text-[#0a1f44]">John</p>
          </div>
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100">
            <span className="text-[10px]">🔔</span>
          </div>
        </div>

        {/* Balance card */}
        <div className="mx-3 mt-3 rounded-xl bg-[#0a2a5e] p-4 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <p className="text-[8px] text-blue-200">Available Wallet Balance</p>
            <p className="text-[8px] text-blue-200">3,145 Points</p>
          </div>
          <div className="mt-1 flex items-center gap-1">
            <span className="text-[11px] font-semibold">₦</span>
            <span className="text-[18px] font-bold leading-tight">
              100,000,000
            </span>
            <span className="ml-1 text-[12px]">👁</span>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div>
              <p className="text-[7px] text-blue-300">Tier 1 Account</p>
              <div className="mt-0.5 rounded bg-orange-400 px-1.5 py-0.5 text-[6px] font-bold text-white">
                Upgrade to Tier 2
              </div>
            </div>
            <p className="text-[8px] font-mono text-blue-200">0887654321 🔒</p>
          </div>
        </div>

        {/* Overview label */}
        <div className="px-4 pt-3 pb-1">
          <p className="text-[10px] font-semibold text-[#0a1f44]">Over View</p>
        </div>

        {/* Quick actions row 1 */}
        <div className="grid grid-cols-3 gap-2 px-3">
          {[
            { icon: "⇄", label: "Transfer", bg: "bg-blue-50" },
            { icon: "💰", label: "Savings", bg: "bg-green-50" },
            { icon: "🌀", label: "RizeCoop", bg: "bg-purple-50" },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex flex-col items-center rounded-xl py-2 ${item.bg}`}
            >
              <span className="text-[14px]">{item.icon}</span>
              <span className="mt-0.5 text-[7px] font-medium text-gray-600">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Quick actions row 2 */}
        <div className="mt-2 grid grid-cols-3 gap-2 px-3">
          {[
            { icon: "🏦", label: "Loan", bg: "bg-yellow-50" },
            { icon: "🛠", label: "Self Service", bg: "bg-pink-50" },
            { icon: "⚡", label: "Utilities", bg: "bg-orange-50" },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex flex-col items-center rounded-xl py-2 ${item.bg}`}
            >
              <span className="text-[14px]">{item.icon}</span>
              <span className="mt-0.5 text-[7px] font-medium text-gray-600">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Rewards strip */}
        <div className="mx-3 mt-3 flex items-center justify-between rounded-xl bg-orange-500 px-3 py-2 text-white">
          <div>
            <p className="text-[7px] font-medium opacity-80">Bonus</p>
            <p className="text-[9px] font-bold">₦0.00</p>
            <p className="text-[6px] opacity-70">Rize & Earn Rewards</p>
          </div>
          <span className="text-[18px]">🎁</span>
        </div>

        <div className="mt-2 flex justify-end px-4">
          <p className="text-[8px] text-blue-600 underline">View All</p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Debit Card – matches the screenshot
───────────────────────────────────────── */
function DebitCard() {
  return (
    <div
      className="relative overflow-hidden shadow-2xl"
      style={{
        width: 300,
        height: 178,
        borderRadius: 18,
        background:
          "linear-gradient(135deg, #1a6fd4 0%, #0a3fa8 60%, #0d2c7a 100%)",
      }}
    >
      {/* Top row */}
      <div className="flex items-center justify-between px-5 pt-5">
        <span className="text-[11px] font-semibold text-white/80 tracking-wide">
          Debit.
        </span>
        <div className="flex items-center gap-1.5">
          {/* Logo mark */}
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
            <span className="text-[8px] text-white font-bold">IF</span>
          </div>
          <span className="text-[11px] font-bold text-white tracking-wider">
            RizeSpring
          </span>
        </div>
      </div>

      {/* Chip */}
      <div className="ml-5 mt-4">
        <div
          className="rounded-sm bg-yellow-300/90"
          style={{ width: 36, height: 26 }}
        >
          <div className="grid grid-cols-2 gap-px p-1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="rounded-[1px] bg-yellow-500/40 h-2.5" />
            ))}
          </div>
        </div>
      </div>

      {/* Card number */}
      <div className="mt-3 flex justify-center gap-4 text-[15px] font-mono font-bold tracking-[0.22em] text-white">
        <span>5355</span>
        <span>0348</span>
        <span>5945</span>
        <span>5045</span>
      </div>

      {/* Bottom row */}
      <div className="mt-3 flex items-end justify-between px-5 pb-4">
        <div>
          <p className="text-[7px] font-medium uppercase tracking-widest text-white/50">
            Valid Thru
          </p>
          <p className="text-[10px] font-semibold text-white">12/24</p>
        </div>
        <div className="text-right">
          <p className="text-[8px] font-semibold uppercase tracking-wide text-white">
            CIROMA CHINYEE ADEKUN<span className="text-white/60">…</span>
          </p>
          <p className="text-[7px] font-medium uppercase tracking-widest text-white/60">
            Virtual Card
          </p>
        </div>
      </div>

      {/* Decorative circles */}
      <div
        className="pointer-events-none absolute -right-8 -top-8 rounded-full bg-white/5"
        style={{ width: 140, height: 140 }}
      />
      <div
        className="pointer-events-none absolute -bottom-10 -left-10 rounded-full bg-white/5"
        style={{ width: 160, height: 160 }}
      />
    </div>
  );
}
