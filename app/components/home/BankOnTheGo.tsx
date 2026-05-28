"use client";

import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { motion } from "framer-motion";

const GooglePlayIcon = () => (
    <svg width="28" height="28" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.2 40.4L206 224.2L249 181.2L22.2 40.4Z" fill="#00D2FF"/>
        <path d="M22.2 471.6L206 287.8L249 330.8L22.2 471.6Z" fill="#FF3366"/>
        <path d="M249 181.2L361.6 250.6L249 330.8L206 287.8L249 181.2Z" fill="#FFD400"/>
        <path d="M22.2 40.4L22.2 471.6L206 287.8L206 224.2L22.2 40.4Z" fill="#00E676"/>
    </svg>
);

export default function BankOnTheGo() {
    return (
        <section className="w-full bg-[#0A194E] bg-[url('/images/branding/bg.png')] bg-cover bg-center bg-no-repeat overflow-hidden relative">
            <div className="w-full max-w-[1200px] mx-0 px-6 pt-16 lg:pt-20 flex flex-col lg:flex-row items-start justify-start gap-8 lg:gap-16 relative min-h-[420px]">

                {/* ── LEFT: Main Image ── */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full lg:w-1/2 flex justify-start items-center relative z-10"
                >
                    <div className="relative w-[340px] h-[380px] sm:w-[460px] sm:h-[500px] -ml-8 sm:-ml-12 lg:-mb-4 lg:-ml-5">
                        <Image
                            src="/images/branding/bankonthgo.png"
                            alt="Bank on The Go"
                            fill
                            className="object-contain object-bottom"
                            priority
                        />
                    </div>
                </motion.div>

                {/* ── RIGHT: Centered Text Content ── */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center pb-16 lg:pb-20 lg:pt-6 z-10"
                >
                    <div className="mb-6 relative w-20 h-20 flex items-center justify-center rounded-full bg-white/5 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                        <Image
                            src="/images/branding/logo.png"
                            alt="IIMFB Icon"
                            width={54}
                            height={54}
                            className="object-contain"
                        />
                    </div>
                    <h2 className="text-4xl sm:text-[56px] font-bold text-white mb-6 tracking-tight leading-tight">
                        Bank on The Go
                    </h2>

                    <p className="text-white text-base sm:text-lg leading-relaxed max-w-lg mb-10">
                        Access your banking services anytime with our mobile banking app from
                        Imodi-Imosan Microfinance Bank. Manage your accounts, make transfers,
                        and stay connected to your finances directly from your smartphone.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button disabled className="flex items-center gap-3 bg-white opacity-50 cursor-not-allowed px-5 py-2.5 rounded-lg w-[190px] justify-center border border-gray-200">
                            <GooglePlayIcon />
                            <div className="flex flex-col items-start text-left">
                                <span className="text-[10px] text-gray-800 font-semibold uppercase leading-none mb-0.5">GET IT ON</span>
                                <span className="text-[17px] text-black font-bold leading-none tracking-tight">Google Play</span>
                            </div>
                        </button>
                        <button disabled className="flex items-center gap-3 bg-white opacity-50 cursor-not-allowed px-5 py-2.5 rounded-lg w-[190px] justify-center border border-gray-200">
                            <FaApple className="text-black text-[32px]" />
                            <div className="flex flex-col items-start text-left">
                                <span className="text-[10px] text-gray-800 font-semibold leading-none mb-0.5">Download on the</span>
                                <span className="text-[17px] text-black font-bold leading-none tracking-tight">App Store</span>
                            </div>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
