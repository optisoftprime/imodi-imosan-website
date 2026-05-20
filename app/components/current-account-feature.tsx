"use client";
import { ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import currentAccountImg from "@/public/images/branding/Rectangle 26.png"; // swap for actual image

interface CurrentAccountFeatureProps {
  image?: StaticImageData | string;
  heading?: string;
  body?: string[];
  buttonText?: string;
  onButtonClick?: () => void;
}

export function CurrentAccountFeature({
  image = currentAccountImg,
  heading = "CURRENT ACCOUNT. CURRENT YOU. FUTURE MILLIONAIRE",
  body = [
    "This is the Current Account built for the ambitious, the professional, and the dream-chasers who move fast and think bigger.",
    "Whether you're closing deals on the go, need a loan, or stacking little drops that turn into mighty moves, this account keeps up with your lifestyle. Zero drama. Zero hidden charges. 100% flexibility.",
  ],
  buttonText = "Open a Current Account",
  onButtonClick,
}: CurrentAccountFeatureProps) {
  return (
    <section className="relative overflow-hidden bg-white px-8 py-20">
      {/* Decorative blob — top right */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #a5c8ff 0%, #1a5fd4 100%)" }}
      />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left — circular image */}
        <div className="flex items-center justify-center">
          <div className="relative h-[380px] w-[380px] overflow-hidden rounded-full shadow-2xl">
            <Image src={image} alt="Current account" fill className="object-cover" />
          </div>
        </div>

        {/* Right — text */}
        <div>
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-[#0a1f44] md:text-4xl">
            {heading}
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-[1.85] text-gray-500">
            {body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <button
            onClick={onButtonClick}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a5fd4] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d3fa8] hover:shadow-xl"
          >
            {buttonText} <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}