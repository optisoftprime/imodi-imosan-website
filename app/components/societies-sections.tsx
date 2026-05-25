"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import socImage1 from "@/public/images/branding/soc image 1.png"; //soc image one
import socImage2 from "@/public/images/branding/soc image 2.png"; // soc image two

// Two overlapping photos layout matching the screenshot
export function SocietiesFeatureSection() {
  return (
    <section className="relative overflow-hidden bg-white px-8 py-20">
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left — two overlapping photos */}
        <div className="relative h-[380px]">
          {/* Large photo — top right */}
          <div className="absolute right-0 top-0 overflow-hidden rounded-2xl shadow-lg" style={{ width: 260, height: 280 }}>
            <Image src={socImage1} alt="Group celebrating" fill className="object-cover" />
          </div>
          {/* Small photo — bottom left */}
          <div className="absolute bottom-0 left-0 overflow-hidden rounded-2xl shadow-2xl" style={{ width: 200, height: 220 }}>
            <Image src={socImage2} alt="Group together" fill className="object-cover" />
          </div>
        </div>

        {/* Right — text */}
        <div>
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-[#0a1f44] md:text-4xl">
            Great Things Happens When People Come Together!
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-[1.85] text-gray-500">
            <p>
              Bring your ideas, passion, and purpose into one place and achieve more as a group with us. With the right financial
              structure and support, your society or club can manage funds seamlessly and stay focused on what truly matters.
            </p>
            <p>
              By banking with us, your collective efforts turn into real progress — making it easier to grow, organise, and create
              lasting impact together.
            </p>
          </div>
          <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a5fd4] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d3fa8] hover:shadow-xl">
            Open a Societies & Club Account <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}