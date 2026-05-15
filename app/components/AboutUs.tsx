"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function AboutUs() {
    return (
        <section className="w-full px-6 py-12 flex items-center justify-center bg-white">
            {/*
        Outer pill: very light tint of #00B7C3.
        The photo card overflows top & bottom of this pill on the left.
        overflow-visible is required so the image is not clipped.
      */}
            <div
                className="relative w-full max-w-[1100px] flex items-center"
                style={{
                    background: "rgba(0, 183, 195, 0.13)",
                    borderRadius: "2.5rem",
                    minHeight: 430,
                    overflow: "visible",
                }}
            >

                {/* ── LEFT: Photo — taller than the pill, overflows vertically ── */}
                <div
                    className="absolute left-0 top-1/2 z-10 flex-shrink-0"
                    style={{
                        transform: "translate(0, -50%)",
                        width: 430,
                        height: 465,
                    }}
                >
                    <div
                        className="relative w-full h-full overflow-hidden "
                        style={{ borderRadius: "1.75rem" }}
                    >

                        <Image
                            src="/images/ui/img-003.png"
                            alt="About IIMFB"
                            fill
                            className="object-cover"
                        />

                        {/* <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                            <span className="text-gray-500 text-xs font-semibold px-6 text-center leading-relaxed">
                                Replace with your image
                                <br />
                                (woman with laptop & phone)
                            </span>
                        </div> */}
                    </div>
                </div>

                {/* ── RIGHT: Heading + spacer + CTA ── */}
                <div
                    className="flex flex-col justify-center gap-8 py-16 pr-16"
                    style={{ paddingLeft: 472, width: "100%" }}
                >
                    <h2
                        className="font-black uppercase text-[#1a2942] leading-none"
                        style={{ fontSize: "2.75rem", letterSpacing: "-0.01em" }}
                    >
                        ABOUT US
                    </h2>

                    {/* Intentional whitespace matching the original layout */}
                    <div style={{ height: 48 }} />

                    {/* Read More button */}
                    <Link
                        href="/about"
                        className="inline-flex items-center gap-2 text-white text-sm font-semibold px-6 py-3 transition-opacity hover:opacity-90 w-fit"
                        style={{
                            backgroundColor: "#0d2a4e",
                            borderRadius: "0.55rem",
                        }}
                    >
                        Read More
                        <ChevronRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}