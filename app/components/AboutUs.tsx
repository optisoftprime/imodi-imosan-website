"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useModal } from "@/app/context/ModalContext";

export default function AboutUs() {
    const { openModal } = useModal();
    return (
        <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 w-full">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative w-full overflow-hidden h-auto md:h-[620px] lg:h-[720px] shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                >
                    <Image
                        src="/images/branding/about-home.png"
                        alt="About Imodi-Imosan Microfinance Bank"
                        fill
                        className="object-cover hidden md:block"
                        priority
                    />

                    <div className="relative md:absolute right-auto md:right-16 lg:right-24 top-auto md:top-1/2 z-10 w-[90%] sm:w-full max-w-[560px] transform-none md:-translate-y-1/2 p-4 sm:p-8 py-10 md:py-8">
                        <motion.h2 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1C20] leading-tight mb-6"
                        >
                            ABOUT US
                        </motion.h2>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="text-[15px] sm:text-base text-[#5A6B7C] leading-relaxed mb-8 space-y-5"
                        >
                            <p>
                                Imodi-Imosan Microfinance Bank is committed to delivering accessible financial services that empower individuals, entrepreneurs, and small businesses.
                            </p>
                            <p>
                                Through innovation, strong customer relationships, and reliable financial solutions, we help communities achieve financial growth and stability.
                            </p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <button 
                                onClick={openModal}
                                className="rounded-xl bg-[#114B82] text-white px-8 py-4 text-sm font-bold transition hover:bg-[#0B355E] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                            >
                                Read More &gt;
                            </button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}