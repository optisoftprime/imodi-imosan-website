"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#eaf0fb]">
      {/* Hero */}
      <section className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-8 pb-32 pt-8 lg:grid-cols-2">
        {/* Left */}
        <div className="relative z-10 flex flex-col justify-center">
          <p className="text-lg font-bold text-[#0a1f44]">
            CBN Licensed | NDPR Compliant | Secured Banking
          </p>
          <h1 className="mt-6 font-bold tracking-tight">
            <span className="text-5xl italic text-[#0a1f44] md:text-6xl">
              Time To{" "}
            </span>
            <span className="text-5xl text-[#0a1f44] md:text-6xl">Grow</span>
            <br />
            <span className="text-7xl text-[#2a5cff] md:text-9xl">Big!</span>
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

          <button className="mt-10 inline-flex w-fit items-center gap-2 rounded-md border border-[#0a1f44]/15 bg-white px-7 py-4 text-base font-semibold text-[#0a1f44] shadow-sm transition hover:shadow-md">
            Start Growing Today <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Right – circle backdrop with phone centered in it, card bottom-left */}
        <div className="relative flex items-center justify-center" style={{ minHeight: 640 }}>

          {/* Dark circle — the "hole" backdrop, centered in column, shifted up slightly */}
          <div
            className="absolute rounded-full bg-[#0d3b66]"
            style={{
              width: 480,
              height: 480,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -58%)",
            }}
          />

          {/* Phone image — centered on the circle, extends below it naturally */}
          <div
            className="absolute z-10"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-46%, -52%)",
            }}
          >
            <Image
              src="/images/branding/Free mockup of female hand holding iPhone 14 Pro (Mockuuups Studio).png"
              alt="IIMFB mobile app"
              width={360}
              height={640}
              className="drop-shadow-2xl"
              priority
            />
          </div>

          {/* Debit card — bottom-left corner, overlaps circle */}
          <div className="absolute bottom-5 left-0 z-20">
            <Image
              src="/images/branding/card 20.png"
              alt="RizeSpring debit card"
              width={300}
              height={178}
              className="drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Bottom wave */}
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