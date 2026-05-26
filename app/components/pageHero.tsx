"use client";
import { ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import savingsBg from "@/public/images/branding/Rectangle 2.png";

interface PageHeroProps {
  backgroundImage?: StaticImageData | string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  buttonText2?: string;
  onButtonClick2?: () => void;
  watermarkLines?: [string, string, string];
  showSlashes?: boolean;
  showSkyline?: boolean;
  minHeight?: string;
}

export function PageHero({
  backgroundImage = savingsBg,
  title = "Savings Account",
  subtitle = "We provide secure and flexible savings solutions designed to help you grow your money, plan for the future, and achieve your financial goals with confidence.",
  buttonText = "Start Saving Now",
  onButtonClick,
  buttonText2,
  onButtonClick2,
  watermarkLines = ["LOVE", "MONEY", "GROW"],
  showSlashes = true,
  showSkyline = true,
  minHeight = "520px",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden" style={{ minHeight }}>
      <div className="absolute inset-0">
        <Image src={backgroundImage} alt="" fill priority className="object-cover object-center" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,26,110,0.82) 0%, rgba(13,47,168,0.70) 35%, rgba(26,95,212,0.62) 65%, rgba(10,48,128,0.80) 100%)",
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0">
        <svg className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 1200 520" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          {[0, 40, 80, 120, 160, 200].map((offset, i) => (
            <path key={i} d={`M-100,${200 + offset} C200,${150 + offset} 400,${260 + offset} 700,${180 + offset} S1100,${220 + offset} 1400,${190 + offset}`} fill="none" stroke="#60a5fa" strokeWidth="1.5" />
          ))}
        </svg>

        <div className="font-display absolute left-[-20px] top-8 select-none text-[80px] font-black uppercase tracking-widest text-white/[0.05]" style={{ lineHeight: 1 }}>
          {watermarkLines[0]}<br />{watermarkLines[1]}<br />{watermarkLines[2]}
        </div>
        <div className="font-display absolute right-[-20px] top-8 select-none text-right text-[80px] font-black uppercase tracking-widest text-white/[0.05]" style={{ lineHeight: 1 }}>
          {watermarkLines[0]}<br />{watermarkLines[1]}<br />{watermarkLines[2]}
        </div>

        {showSlashes && (
          <svg className="absolute left-1/2 top-0 -translate-x-1/2" width="160" height="220" viewBox="0 0 160 220" xmlns="http://www.w3.org/2000/svg">
            <line x1="60" y1="0" x2="20" y2="220" stroke="#4dd0e1" strokeWidth="6" strokeLinecap="round" opacity="0.9" />
            <line x1="85" y1="0" x2="45" y2="220" stroke="#4dd0e1" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
            <line x1="108" y1="0" x2="68" y2="220" stroke="#7ec8e3" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
          </svg>
        )}

        {showSkyline && (
          <svg className="absolute bottom-0 left-1/2 -translate-x-1/2" width="480" height="160" viewBox="0 0 480 160" xmlns="http://www.w3.org/2000/svg" opacity="0.35">
            {[
              { x: 20, w: 30, h: 80 }, { x: 55, w: 25, h: 100 }, { x: 85, w: 35, h: 120 },
              { x: 125, w: 28, h: 105 }, { x: 158, w: 22, h: 90 }, { x: 185, w: 40, h: 130 },
              { x: 230, w: 30, h: 110 }, { x: 265, w: 25, h: 95 }, { x: 295, w: 38, h: 125 },
              { x: 338, w: 28, h: 105 }, { x: 371, w: 22, h: 88 }, { x: 398, w: 34, h: 115 },
              { x: 437, w: 26, h: 100 },
            ].map((b, i) => (
              <g key={i}>
                <rect x={b.x} y={160 - b.h} width={b.w} height={b.h} fill="none" stroke="#60a5fa" strokeWidth="1.5" />
                {Array.from({ length: Math.floor(b.h / 18) }).map((_, row) =>
                  Array.from({ length: Math.floor(b.w / 10) }).map((_, col) => (
                    <rect key={`${row}-${col}`} x={b.x + 4 + col * 10} y={160 - b.h + 6 + row * 14} width={4} height={6} fill="#60a5fa" opacity="0.6" />
                  )),
                )}
              </g>
            ))}
          </svg>
        )}

        {showSkyline && (
          <svg className="absolute bottom-0 left-0" width="200" height="130" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg" opacity="0.3">
            {[
              { x: 0, w: 28, h: 70 }, { x: 32, w: 22, h: 90 }, { x: 58, w: 30, h: 80 },
              { x: 92, w: 25, h: 100 }, { x: 121, w: 20, h: 75 }, { x: 145, w: 28, h: 92 },
              { x: 177, w: 23, h: 82 },
            ].map((b, i) => (
              <g key={i}>
                <rect x={b.x} y={130 - b.h} width={b.w} height={b.h} fill="none" stroke="#c084fc" strokeWidth="1.5" />
                {Array.from({ length: Math.floor(b.h / 16) }).map((_, row) =>
                  Array.from({ length: Math.floor(b.w / 9) }).map((_, col) => (
                    <rect key={`${row}-${col}`} x={b.x + 3 + col * 9} y={130 - b.h + 5 + row * 13} width={4} height={5} fill="#c084fc" opacity="0.5" />
                  )),
                )}
              </g>
            ))}
          </svg>
        )}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="font-display text-5xl font-black tracking-tight text-white md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-blue-100 md:text-lg">{subtitle}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onButtonClick}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-sm font-semibold text-[#0a1f44] shadow-lg transition hover:bg-blue-50 hover:shadow-xl"
          >
            {buttonText} <ChevronRight className="h-4 w-4" />
          </button>
          {buttonText2 && (
            <button
              onClick={onButtonClick2}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-white/10"
            >
              {buttonText2} <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}