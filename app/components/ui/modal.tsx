"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, ChevronDown } from "lucide-react";
import { useModal } from "@/app/context/ModalContext";
import Image from "next/image";

const CITIES = [
    "Lagos",
    "Abuja",
    "Port Harcourt",
    "Kano",
    "Ibadan",
    "Benin City",
    "Enugu",
    "Kaduna",
];

export function CareerModal() {
    const { isOpen, closeModal } = useModal();
    const [step, setStep] = useState(1);
    const [submitting, setSubmitting] = useState(false);
    const [formError, setFormError] = useState<string | null>(null);

    const handleClose = () => {
        closeModal();
        // Reset after animation
        setTimeout(() => {
            setStep(1);
            setFormError(null);
            setSubmitting(false);
        }, 300);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        setFormError(null);

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mredrqww", {
                method: "POST",
                body: data,
                headers: {
                    Accept: "application/json",
                },
            });

            const result = await response.json();

            if (response.ok) {
                setStep(2); // Show success screen
                form.reset();
            } else {
                setFormError(result.error || "Submission failed. Please try again.");
            }
        } catch (error) {
            setFormError("Network error. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0A1432]/55 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto font-sans text-black"
                    >
                        {/* Close button in gray circle */}
                        <button 
                            onClick={handleClose}
                            className="absolute top-6 right-6 p-2 bg-[#f1f5f9] rounded-full hover:bg-gray-200 transition-colors z-10"
                        >
                            <X className="w-5 h-5 text-gray-600" />
                        </button>

                        <div className="p-8 sm:p-12">
                            {step === 1 && (
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="w-full text-left"
                                >
                                    {/* Header block with Ribbon Image */}
                                    <div className="flex items-center gap-5 mb-8">
                                        <Image 
                                            src="/images/branding/modal.png" 
                                            alt="ribbon" 
                                            width={72} 
                                            height={72} 
                                            className="w-16 h-16 flex-shrink-0 object-contain" 
                                        />
                                        <div>
                                            <h2 className="text-2xl sm:text-[26px] font-black text-[#1d4ed8] tracking-tight leading-none mb-1">
                                                Start Your Growth Journey
                                            </h2>
                                            <p className="text-[#64748b] text-xs sm:text-sm">
                                                Tell us what you need and we'll help you get started.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Form Fields */}
                                    <form className="space-y-5" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div className="space-y-1.5 text-left">
                                                <label className="text-xs font-bold text-black">First Name *</label>
                                                <input name="firstName" required type="text" placeholder="Enter first name" className="w-full px-4 py-3 bg-white text-black border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]" />
                                            </div>
                                            <div className="space-y-1.5 text-left">
                                                <label className="text-xs font-bold text-black">Last Name *</label>
                                                <input name="lastName" required type="text" placeholder="Enter last name" className="w-full px-4 py-3 bg-white text-black border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]" />
                                            </div>
                                            <div className="space-y-1.5 text-left">
                                                <label className="text-xs font-bold text-black">Phone Number *</label>
                                                <input name="phone" required type="tel" placeholder="Enter phone number" className="w-full px-4 py-3 bg-white text-black border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]" />
                                            </div>
                                            <div className="space-y-1.5 text-left">
                                                <label className="text-xs font-bold text-black">Email Address *</label>
                                                <input name="email" required type="email" placeholder="Enter email address" className="w-full px-4 py-3 bg-white text-black border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]" />
                                            </div>
                                            
                                            {/* Date of Birth (Single Browser-native Date selector) */}
                                            <div className="space-y-1.5 text-left">
                                                <label className="text-xs font-bold text-black">Date of Birth *</label>
                                                <div className="relative">
                                                    <input name="dob" required type="date" className="w-full px-4 py-3 bg-white text-black border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]" style={{ colorScheme: "light" }} />
                                                </div>
                                            </div>
                                            
                                            {/* What would you like to do */}
                                            <div className="space-y-1.5 text-left">
                                                <label className="text-xs font-bold text-black">What would you like to do *</label>
                                                <input name="purpose" required type="text" placeholder="Enter what you'd like to do e.g create/join a group" className="w-full px-4 py-3 bg-white text-black border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]" />
                                            </div>

                                            {/* Occupation */}
                                            <div className="space-y-1.5 text-left">
                                                <label className="text-xs font-bold text-black">Occupation *</label>
                                                <input name="occupation" required type="text" placeholder="Enter Occupation" className="w-full px-4 py-3 bg-white text-black border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]" />
                                            </div>

                                            {/* City Select */}
                                            <div className="space-y-1.5 text-left">
                                                <label className="text-xs font-bold text-black">City *</label>
                                                <div className="relative">
                                                    <select name="city" required className="w-full px-4 py-3 pr-10 bg-white text-black border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] appearance-none">
                                                        <option value="">Select</option>
                                                        {CITIES.map((city) => (
                                                            <option key={city} value={city}>{city}</option>
                                                        ))}
                                                    </select>
                                                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Residential Address textarea full width */}
                                        <div className="space-y-1.5 text-left w-full">
                                            <label className="text-xs font-bold text-black">Residential Address *</label>
                                            <textarea name="address" required placeholder="Enter address" className="w-full px-4 py-3 bg-white text-black border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] resize-none h-24" />
                                        </div>

                                        {formError && (
                                            <p className="text-sm text-red-600">{formError}</p>
                                        )}

                                        <div className="pt-4 flex justify-center">
                                            <button 
                                                type="submit"
                                                disabled={submitting}
                                                className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] disabled:cursor-not-allowed disabled:opacity-60 text-white py-4 rounded-xl font-bold text-base transition-colors shadow-lg hover:shadow-xl"
                                            >
                                                {submitting ? "Sending..." : "Submit Application"}
                                            </button>
                                        </div>
                                    </form>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center text-center py-8 w-full"
                                >
                                    <div className="mb-6 text-[#2563eb]">
                                        <CheckCircle className="w-24 h-24" strokeWidth={1} />
                                    </div>
                                    <h2 className="text-3xl font-bold text-[#1d4ed8] mb-4">Successful!</h2>
                                    <p className="text-[#64748b] text-sm leading-relaxed mb-10 max-w-md">
                                        Thank you for initiating your growth journey. Our team will review your information and contact you shortly to complete your application.
                                    </p>
                                    <button 
                                        onClick={handleClose}
                                        className="w-full sm:w-[300px] bg-[#2563eb] hover:bg-[#1d4ed8] text-white py-4 rounded-xl font-bold text-base transition-colors"
                                    >
                                        Thank You
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
