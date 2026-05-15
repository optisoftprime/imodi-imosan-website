"use client";

import Image from "next/image";
import PlaceholderImg from "./home/PlaceholderImg";

// ─── Icons ────────────────────────────────────────────────────────────────────

const ShieldCheckIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" />
        <polyline points="9 12 11 14 15 10" />
    </svg>
);

const CheckCircleIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);

const SpeedometerIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 7.39 16.75" />
        <path d="M12 2a10 10 0 0 0-7.39 16.75" />
        <line x1="12" y1="12" x2="16" y2="8" />
        <circle cx="12" cy="12" r="1.5" fill="#2196f3" />
    </svg>
);

const StarIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

const FlameLogoIcon = () => (
    <svg width="64" height="64" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="38" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
        <path d="M40 14 C32 24 24 30 26 42 C28 52 36 60 40 66 C44 60 52 52 54 42 C56 30 48 24 40 14Z" fill="white" opacity="0.2" />
        <path d="M40 20 C34 29 28 35 30 44 C32 53 38 59 40 63 C42 59 48 53 50 44 C52 35 46 29 40 20Z" fill="white" opacity="0.5" />
        <path d="M40 28 C36 35 33 40 35 47 C37 53 40 57 40 57 C40 57 43 53 45 47 C47 40 44 35 40 28Z" fill="white" />
        <ellipse cx="37" cy="40" rx="3" ry="6" fill="white" opacity="0.5" transform="rotate(-15 37 40)" />
    </svg>
);

// ─── Placeholder image component ─────────────────────────────────────────────




// ─── Service Card (right column) ──────────────────────────────────────────────

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
    <div className="bg-white rounded-2xl p-8 flex flex-col gap-3" style={{ boxShadow: "0 2px 16px rgba(13,42,78,0.07)" }}>
        <div>{icon}</div>
        <h3 className="text-base font-bold text-[#1a2942]">{title}</h3>
        <p className="text-sm text-[#555e6e] leading-relaxed">{description}</p>
    </div>
);

// ─── Feature Item (bottom left) ───────────────────────────────────────────────

interface FeatureItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => (
    <div className="flex flex-col gap-2">
        <div>{icon}</div>
        <h3 className="text-base font-bold text-[#1a2942]">{title}</h3>
        <p className="text-sm text-[#555e6e] leading-relaxed">{description}</p>
    </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export default function BankingServices() {
    return (
        <section className="w-full max-w-[1100px] mx-auto px-4 py-12 font-sans">

            {/* ── Section Title ── */}
            <h2 className="text-4xl font-black text-[#0d2a4e] mb-10 uppercase tracking-tight leading-tight">
                OUR BANKING{" "}
                <span className="text-[#2196f3]">SERVICES</span>
            </h2>

            {/* ── Top Row ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

                {/* Left: Hero card (navy) */}
                <div className="bg-[#0d2a4e] rounded-2xl p-8 flex flex-col items-center justify-between relative overflow-hidden min-h-[400px]">
                    {/* Floating avatar top-right */}
                    <div className="absolute top-6 right-6">
                        <PlaceholderImg
                            src="/images/ui/image-002.png"
                            width={62}
                            height={62}
                            label="Avatar"
                            className="rounded-2xl"
                        />
                    </div>

                    {/* Floating avatar bottom-left */}
                    <div className="absolute bottom-[210px] left-4">
                        <PlaceholderImg
                            src="/images/ui/smilling-girl-in-yellow.png"
                            width={62}
                            height={62}
                            label="Avatar"
                            className="rounded-2xl"
                        />
                    </div>

                    {/* Main image */}
                    <div className="w-full flex justify-center mt-4">
                        <PlaceholderImg src="/images/ui/image-001.png"
                            width={280}
                            height={220}
                            rounded="rounded-2xl"
                            label="Main Hero Image"
                        />
                    </div>

                    {/* Text */}
                    <div className="text-center mt-6">
                        <h3 className="text-white font-extrabold text-lg uppercase tracking-wide mb-3">
                            OUR FINANCIAL SOLUTIONS
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-sm mx-auto">
                            Flexible banking solutions designed to help individuals, businesses,
                            and communities manage, grow, and access their finances with
                            ease — providing reliable support for savings, loans, and everyday
                            banking needs.
                        </p>
                    </div>
                </div>

                {/* Right: Two service cards stacked */}
                <div className="flex flex-col gap-5">
                    <ServiceCard
                        icon={<ShieldCheckIcon />}
                        title="Savings Account"
                        description="We provide secure and flexible savings solutions designed to help individuals build financial stability, grow their funds over time, and manage their money confidently while planning for future opportunities."
                    />
                    <ServiceCard
                        icon={<CheckCircleIcon />}
                        title="Loans & Credit Facilities"
                        description="Access affordable loans and credit facilities to support your personal needs, grow your business, or handle important financial commitments, with flexible options designed to help you move forward with confidence."
                    />
                </div>
            </div>

            {/* ── Bottom Row ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Bottom-left: Two feature items */}
                <div className="flex flex-col gap-10 py-4 pr-4">
                    <FeatureItem
                        icon={<SpeedometerIcon />}
                        title="Business Banking"
                        description="We provide reliable banking solutions designed to support businesses with the financial tools and services they need to manage operations, handle transactions, and grow with confidence."
                    />
                    <FeatureItem
                        icon={<StarIcon />}
                        title="Digital Banking"
                        description="We provide convenient digital banking services that allow you to access your account, manage transactions, and stay in control of your finances anytime and anywhere."
                    />
                </div>

                {/* Bottom-right: Golden trust card */}
                <div
                    className="rounded-2xl p-8 flex flex-col items-center text-center"
                    style={{ backgroundColor: "#C98B2A" }}
                >
                    {/* Label */}
                    <p className="text-white font-extrabold text-xs uppercase tracking-widest mb-6">
                        IMODI-IMOSAN MICRO FINANCE BANK
                    </p>

                    {/* Network diagram */}
                    <div className="relative w-full flex items-center justify-center mb-6" style={{ height: 220 }}>

                        {/* Center logo */}
                        <div className="absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                            <FlameLogoIcon />
                        </div>

                        {/* Top-left avatar */}
                        <div className="absolute" style={{ top: "4%", left: "8%" }}>
                            <PlaceholderImg width={64} height={64} rounded="rounded-xl" label="Customer" />
                        </div>

                        {/* Top-right avatar */}
                        <div className="absolute" style={{ top: "4%", right: "8%" }}>
                            <PlaceholderImg width={64} height={64} rounded="rounded-xl" label="Customer" />
                        </div>

                        {/* Bottom-left avatar */}
                        <div className="absolute" style={{ bottom: "4%", left: "18%" }}>
                            <PlaceholderImg width={64} height={64} rounded="rounded-xl" label="Customer" />
                        </div>

                        {/* Bottom-center avatar */}
                        <div className="absolute" style={{ bottom: "0%", left: "50%", transform: "translateX(-50%)" }}>
                            <PlaceholderImg width={64} height={64} rounded="rounded-xl" label="Customer" />
                        </div>

                        {/* Bottom-right avatar */}
                        <div className="absolute" style={{ bottom: "4%", right: "18%" }}>
                            <PlaceholderImg width={64} height={64} rounded="rounded-xl" label="Customer" />
                        </div>

                        {/* Dashed connector lines (SVG overlay) */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 340 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Center point ~170,110 */}
                            <line x1="170" y1="110" x2="60" y2="32" stroke="white" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.5" />
                            <line x1="170" y1="110" x2="280" y2="32" stroke="white" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.5" />
                            <line x1="170" y1="110" x2="90" y2="180" stroke="white" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.5" />
                            <line x1="170" y1="110" x2="170" y2="205" stroke="white" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.5" />
                            <line x1="170" y1="110" x2="250" y2="180" stroke="white" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.5" />
                        </svg>
                    </div>

                    {/* Trust text */}
                    <h3 className="text-white font-extrabold text-xl mb-3">
                        Customers Who Trust Us
                    </h3>
                    <p className="text-white/85 text-sm leading-relaxed max-w-xs">
                        Trusted by our customers for easy, reliable, and community-focused
                        banking, helping individuals and businesses achieve their financial
                        goals every day.
                    </p>
                </div>
            </div>
        </section>
    );
}