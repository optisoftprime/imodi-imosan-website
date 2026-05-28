"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => (
    <div className="bg-white rounded-xl shadow-[0_2px_12px_rgba(13,42,78,0.04)] overflow-hidden">
        <button 
            className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors hover:bg-gray-50"
            onClick={onClick}
        >
            <span className="font-bold text-[#1a2942]">{question}</span>
            {isOpen ? <ChevronUp className="w-5 h-5 text-black flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-black flex-shrink-0" />}
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-sm text-[#555e6e] leading-relaxed"
                >
                    {answer}
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const faqs = [
        {
            question: "1. How do I open an account?",
            answer: "You can open an account by completing the online application form and submitting the required information. Our team will review your application and guide you through the next steps.",
        },
        {
            question: "2. Is my information secure?",
            answer: "Yes, your information is completely secure. We use industry-standard bank-grade encryption and adhere to strict Nigeria Data Protection Regulation (NDPR) standards to protect your data.",
        },
        {
            question: "3. Can I apply for a loan online?",
            answer: "Absolutely! You can apply for a loan through our online application process, or by contacting our loan specialists. We offer competitive rates and flexible repayment schedules.",
        },
        {
            question: "4. What types of savings options are available?",
            answer: "We offer several savings options designed for your needs, including regular savings, target savings, cooperative/group savings accounts, and fixed deposits.",
        },
        {
            question: "5. How does the Multiplier Loan work?",
            answer: "Our Multiplier Loan is designed to boost your business capital or personal funds. Based on your savings history and business capacity, we multiply your deposits into a low-interest loan with flexible terms.",
        }
    ];

    return (
        <section className="w-full bg-[#fafafa] py-24 font-sans overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 w-full grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20">
                
                {/* ── LEFT: Text & CTA ── */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-start pt-4"
                >
                    <h2 className="text-3xl md:text-4xl font-black text-[#0d2a4e] mb-6 tracking-tight leading-tight">
                        Frequently asked questions
                    </h2>
                    <p className="text-[#555e6e] text-base leading-relaxed mb-8 max-w-md">
                        Find quick solutions and helpful tips for using Imodi-Imosan Microfinance Bank. We've compiled
                        answers to the most frequently asked questions right here.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2a5cff] hover:bg-[#214ce0] text-white px-6 py-3.5 rounded-lg font-semibold transition text-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 w-fit">
                        Contact support <ChevronRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                {/* ── RIGHT: Accordion ── */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.1 }}
                    className="flex flex-col gap-4"
                >
                    {faqs.map((faq, index) => (
                        <FaqItem 
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
