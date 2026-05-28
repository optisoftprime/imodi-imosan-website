"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useModal } from "@/app/context/ModalContext";

export default function CtaSection() {
    const { openModal } = useModal();
    return (
        <section className="relative w-full bg-[url('/images/branding/bg.png')] bg-cover bg-center bg-no-repeat overflow-hidden py-24 min-h-[500px] flex items-center justify-center font-sans">
            
            {/* ── Background Glow ── */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-[#2a5cff]/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
                
                {/* ── Center Content ── */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center max-w-2xl mx-auto"
                >
                    {/* Glowing Logo */}
                    <div className="mb-6 relative w-20 h-20 flex items-center justify-center rounded-full bg-white/5 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                        <Image
                            src="/images/branding/logo.png"
                            alt="IIMFB Icon"
                            width={54}
                            height={54}
                            className="object-contain"
                        />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                        Start Banking <br className="hidden md:block" />
                        With Confidence
                    </h2>

                    <p className="text-white/80 text-sm md:text-base leading-relaxed mb-10 max-w-md mx-auto">
                        Experience seamless, secure transactions at your fingertips.
                        Sign up now and simplify your payments with just a few taps!
                    </p>

                    <div className="flex items-center gap-8">
                        <Link href="/contact" className="text-white text-sm font-semibold hover:text-gray-300 transition flex items-center gap-1">
                            Contact Us <ChevronRight className="w-4 h-4" />
                        </Link>
                        <button onClick={openModal} className="bg-white text-[#0a1f44] text-sm font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition shadow-lg flex items-center gap-1">
                            Open an Account <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>

            </div>

            {/* ── LEFT Mockup Image ── */}
            <motion.div 
                initial={{ opacity: 0, y: 50, x: -30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute bottom-0 left-0 lg:left-[-8%] w-80 md:w-[440px] lg:w-[520px] hidden md:block z-20 pointer-events-none"
            >
                <Image
                    src="/images/branding/cta1.png"
                    alt="Happy customer"
                    width={520}
                    height={520}
                    className="object-contain object-bottom w-full h-auto drop-shadow-2xl"
                />
            </motion.div>

            {/* ── RIGHT Mockup Image ── */}
            <motion.div 
                initial={{ opacity: 0, y: 50, x: 30, rotate: -5 }}
                whileInView={{ opacity: 0.9, y: 0, x: 0, rotate: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="absolute bottom-[-6%] right-[-4%] lg:right-[0%] w-80 md:w-[480px] lg:w-[560px] hidden md:block z-20 pointer-events-none"
            >
                <Image
                    src="/images/branding/cta2.png"
                    alt="Mobile App"
                    width={560}
                    height={560}
                    className="object-contain object-bottom w-full h-auto drop-shadow-2xl rounded-3xl"
                />
            </motion.div>

        </section>
    );
}
