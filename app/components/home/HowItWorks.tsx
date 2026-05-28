"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface StepCardProps {
    imageSrc: string;
    stepNumber: string;
    title: string;
    description: string;
}

const StepCard = ({ imageSrc, stepNumber, title, description }: StepCardProps) => (
    <motion.div 
        whileHover={{ y: -5 }}
        className="flex flex-col items-start text-left w-full"
    >
        <div className="w-full mb-6 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Image src={imageSrc} alt={title} width={800} height={730} className="object-contain w-full h-auto" />
        </div>
        <p className="text-[#3b5998] font-bold text-sm mb-2">{stepNumber}</p>
        <h3 className="text-xl font-bold text-[#1a2942] mb-3">{title}</h3>
        <p className="text-sm text-[#555e6e] leading-relaxed">
            {description}
        </p>
    </motion.div>
);

const TestimonialCard = ({ isActive, text, author, role, imageSrc }: any) => (
    <div 
        className={`w-full h-full p-8 md:p-10 rounded-[2rem] flex flex-col items-center text-center transition-all duration-700 ${
            isActive 
            ? "bg-[#E6EEFE] opacity-100 scale-100 shadow-sm" 
            : "bg-white opacity-40 scale-95"
        }`}
    >
        <p className={`text-base md:text-[17px] leading-relaxed mb-8 transition-colors duration-700 ${isActive ? "text-[#1a2942]" : "text-gray-400"}`}>
            {text}
        </p>
        <div className="flex items-center gap-3 mt-auto">
            <Image src={imageSrc} alt={author} width={44} height={44} className="rounded-full object-cover" />
            <div className="text-left">
                <span className={`block text-sm md:text-base font-bold transition-colors duration-700 ${isActive ? "text-[#000]" : "text-gray-400"}`}>
                    {author} <span className="font-normal text-gray-500">{role}</span>
                </span>
            </div>
        </div>
    </div>
);

export default function HowItWorks() {
    const [activeIndex, setActiveIndex] = useState(1);
    
    const testimonials = [
        {
            id: 0,
            text: "Imodi-Imosan banking is stress-free. I was able to secure a flexible loan to grow my small business without unnecessary delays.",
            author: "John D.,",
            role: "Regular User",
            imageSrc: "/images/branding/Ellipse 331.png"
        },
        {
            id: 1,
            text: "Saving has become so much easier and more organized for me. I can track my goals, stay consistent, and access support whenever I need it. The experience has been smooth from start to finish.",
            author: "Sarah K.,",
            role: "Small Business Owner",
            imageSrc: "/images/branding/Ellipse 332.png"
        },
        {
            id: 2,
            text: "Our cooperative group has started saving together. Everything is highly organized, transparent, and we are reaching our targets faster than expected.",
            author: "Adam S.,",
            role: "Entrepreneur",
            imageSrc: "/images/branding/Ellipse 333.png"
        },
        {
            id: 3,
            text: "Their investment and savings plans offer incredible security and growth. I highly recommend their professional team for anyone looking to build serious wealth.",
            author: "Michael T.,",
            role: "Investor",
            imageSrc: "/images/branding/Ellipse 334.png"
        },
        {
            id: 4,
            text: "Opening an account was incredibly fast and easy. Their mobile banking platform is so simple and fits perfectly with my daily student life.",
            author: "Emily R.,",
            role: "Student",
            imageSrc: "/images/branding/Ellipse 335.png"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <div className="w-full font-sans">
            {/* ── HOW IT WORKS SECTION ── */}
            <section className="w-full bg-[#E5F8F9] py-20 pb-32 overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 w-full">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-black text-[#0d2a4e] mb-12 uppercase tracking-tight text-center md:text-left"
                    >
                        HOW IT WORKS?
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, staggerChildren: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <StepCard 
                            stepNumber="Step 1"
                            title="Choose your account"
                            description="Explore our range of banking options and select the account that best fits your personal, joint, or cooperative financial needs."
                            imageSrc="/images/branding/howitworks1.png"
                        />
                        <StepCard 
                            stepNumber="Step 2"
                            title="Open your account"
                            description="Complete the account opening process by providing the required information and documents through our easy and secure process."
                            imageSrc="/images/branding/howitworks2.png"
                        />
                        <StepCard 
                            stepNumber="Step 3"
                            title="Start Banking"
                            description="Deposit funds, access financial services, and begin managing your money with confidence at Imodi-Imosan Microfinance Bank."
                            imageSrc="/images/branding/howitworks3.png"
                        />
                    </motion.div>
                </div>
            </section>

            {/* ── TESTIMONIALS SECTION ── */}
            <section className="w-full bg-white pt-20 pb-24 -mt-10 relative z-10 rounded-t-[3rem] overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 w-full flex flex-col items-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-[40px] font-black text-[#0a1930] mb-12 uppercase tracking-tight text-center"
                    >
                        WHAT OUR CUSTOMERS <span className="text-[#216DF3]">SAY</span>
                    </motion.h2>

                    <div 
                        className="w-full relative py-4"
                        style={{ 
                            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', 
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' 
                        }}
                    >
                        {/* Carousel window */}
                        <div className="w-[85vw] max-w-[840px] mx-auto relative">
                            {/* Track */}
                            <div 
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(calc(-${activeIndex * 100}% - ${activeIndex * 2}rem))` }}
                            >
                                {testimonials.map((t, idx) => (
                                    <div key={t.id} className="w-full flex-shrink-0" style={{ marginRight: '2rem' }}>
                                        <TestimonialCard 
                                            isActive={idx === activeIndex}
                                            text={t.text}
                                            author={t.author}
                                            role={t.role}
                                            imageSrc={t.imageSrc}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex gap-2 mt-8 z-10">
                        {testimonials.map((_, idx) => (
                            <button 
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-[#216DF3] w-4' : 'bg-[#D6E6FF] w-2 hover:bg-[#A9C8FF]'}`}
                                aria-label={`Go to testimonial ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
