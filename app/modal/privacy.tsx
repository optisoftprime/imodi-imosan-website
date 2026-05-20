"use client";
import { useEffect } from "react";
import { X } from "lucide-react";

interface PrivacyModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAgree: () => void;
}

export function PrivacyModal({ isOpen, onClose, onAgree }: PrivacyModalProps) {
    // Close on Escape
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [isOpen, onClose]);

    // Lock body scroll
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
            <div
                className="relative w-full max-w-[480px] rounded-2xl bg-white px-8 py-10 shadow-2xl"
                role="dialog"
                aria-modal="true"
                aria-labelledby="privacy-modal-title"
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition hover:bg-gray-100"
                    aria-label="Close"
                >
                    <X className="h-4 w-4" />
                </button>

                {/* Title */}
                <h2
                    id="privacy-modal-title"
                    className="text-center text-2xl font-extrabold text-[#1a5fd4] md:text-3xl"
                >
                    Your Privacy Matters to Us
                </h2>

                {/* Body */}
                <div className="mt-5 space-y-4 text-center text-[14.5px] leading-relaxed text-gray-600">
                    <p>
                        We are a CBN-Licensed financial institution, and your data is
                        protected in line with the Nigeria Data Protection Regulation (NDPR).
                    </p>
                    <p>
                        Your information will be used only to process your request, and we
                        will never ask for sensitive details unnecessarily or share your data
                        without your consent.
                    </p>
                </div>

                {/* Secured notice */}
                <p className="mt-8 text-[13.5px] font-bold text-[#0a1f44]">
                    Your information is secured and handled with care
                </p>

                {/* CTA */}
                <button
                    onClick={onAgree}
                    className="mt-8 w-full rounded-xl bg-[#1a5fd4] py-4 text-base font-bold text-white transition hover:bg-[#0d3fa8] active:scale-[0.98]"
                >
                    Agree &amp; Continue
                </button>
            </div>
        </div>
    );
}