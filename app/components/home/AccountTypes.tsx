"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface AccountTypeProps {
    title: string;
    description: string;
    imageSrc: string;
}

const AccountCard = ({ title, description, imageSrc }: AccountTypeProps) => {
    return (
        <div className="bg-white rounded-[1.25rem] flex flex-col shadow-[0_4px_24px_rgba(13,42,78,0.08)] overflow-hidden">
            <div className="relative w-full h-56 md:h-64 lg:h-72">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-8 md:p-10 flex flex-col gap-4">
                <h3 className="text-3xl md:text-[28px] font-bold text-[#1a2942] leading-tight">
                    {title}
                </h3>
                <p className="text-base text-[#555e6e] leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default function AccountTypes() {
    return (
        <section className="w-full bg-white py-16 md:py-24 font-sans flex flex-col items-center overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 w-full flex flex-col items-center">
                
                {/* ── Title ── */}
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-black text-[#0d2a4e] mb-12 md:mb-16 uppercase tracking-tight text-center"
                >
                    OUR ACCOUNT <span className="text-[#2196f3]">TYPES</span>
                </motion.h2>

                {/* ── Top Row (3 Cards) ── */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, staggerChildren: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-6"
                >
                    <AccountCard
                        title="Savings Account"
                        description="We provide a simple and secure savings account designed to help individuals save money, manage their finances, and plan confidently for the future."
                        imageSrc="/images/branding/account1.png"
                    />
                    <AccountCard
                        title="Business Loan Account"
                        description="We provide flexible business loan solutions to help you manage operations, grow your business, and take advantage of new opportunities with confidence."
                        imageSrc="/images/branding/account2.png"
                    />
                    <AccountCard
                        title="Joint Account"
                        description="A secure and flexible savings account designed to help individuals manage their money and build a better financial future."
                        imageSrc="/images/branding/account3.png"
                    />
                </motion.div>

                {/* ── Bottom Row (2 Cards) ── */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, staggerChildren: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1000px]"
                >
                    <AccountCard
                        title="Current Account"
                        description="We provide individual current accounts to help you manage everyday transactions, pay bills, and keep your finances organized with ease and security."
                        imageSrc="/images/branding/account4.png"
                    />
                    <AccountCard
                        title="Corporate Account"
                        description="We provide corporate accounts to help businesses manage finances efficiently, streamline transactions, and grow their operations with confidence and ease."
                        imageSrc="/images/branding/account5.png"
                    />
                </motion.div>
            </div>
        </section>
    );
}
