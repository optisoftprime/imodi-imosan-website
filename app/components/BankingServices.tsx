"use client";

import Image from "next/image";

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

// ─── Service Card ─────────────────────────────────────────────────────────────

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

// ─── Feature Item ─────────────────────────────────────────────────────────────

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

                    {/* Floating avatar top-right — Group 1000005553 */}
                    <div className="absolute top-5 right-5 z-10">
                        <Image
                            src="/images/branding/Group 1000005553.png"
                            alt="Customer"
                            width={72}
                            height={72}
                            className="rounded-2xl object-cover"
                        />
                    </div>

                    {/* Floating avatar bottom-left — Ellipse 11 (circular) */}
                    <div className="absolute z-10" style={{ bottom: 230, left: 16 }}>
                        <Image
                            src="/images/branding/Ellipse 11.png"
                            alt="Customer"
                            width={72}
                            height={72}
                            className="rounded-full object-cover"
                        />
                    </div>

                    {/* Main hero image — Frame 203 */}
                    <div className="w-full flex justify-center mt-4 z-0">
                        <Image
                            src="/images/branding/Frame 203.png"
                            alt="Our Financial Solutions"
                            width={300}
                            height={230}
                            className="rounded-2xl object-cover"
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
                    <p className="text-white font-extrabold text-xs uppercase tracking-widest mb-6">
                        IMODI-IMOSAN MICRO FINANCE BANK
                    </p>

                    {/*
                      Network diagram — viewBox 360x240
                      Avatar centres (for SVG lines):
                        Top-left:     72, 40
                        Top-right:   288, 40
                        Center logo: 180,120
                        Bottom-left:  80,200
                        Bottom-mid:  180,215
                        Bottom-right:280,200
                    */}
                    <div className="relative w-full mb-6" style={{ height: 240 }}>

                        {/* SVG connector lines — drawn BELOW avatars */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 360 240" fill="none" preserveAspectRatio="xMidYMid meet">
                            <line x1="180" y1="120" x2="72"  y2="40"  stroke="white" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.55" />
                            <line x1="180" y1="120" x2="288" y2="40"  stroke="white" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.55" />
                            <line x1="180" y1="120" x2="80"  y2="200" stroke="white" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.55" />
                            <line x1="180" y1="120" x2="180" y2="215" stroke="white" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.55" />
                            <line x1="180" y1="120" x2="280" y2="200" stroke="white" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.55" />
                        </svg>

                        {/* Center logo — logo.png */}
                        <div className="absolute z-10" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                            <Image
                                src="/images/branding/logo.png"
                                alt="IIMFB Logo"
                                width={72}
                                height={72}
                                className="object-contain"
                            />
                        </div>

                        {/* Top-left — wheel image1 */}
                        <div className="absolute z-10" style={{ top: 4, left: "8%" }}>
                            <Image
                                src="/images/branding/wheel image1.png"
                                alt="Customer"
                                width={80}
                                height={80}
                                className="rounded-xl object-cover"
                            />
                        </div>

                        {/* Top-right — wheel image2 */}
                        <div className="absolute z-10" style={{ top: 4, right: "8%" }}>
                            <Image
                                src="/images/branding/wheel image2.png"
                                alt="Customer"
                                width={80}
                                height={80}
                                className="rounded-xl object-cover"
                            />
                        </div>

                        {/* Bottom-left — wheel image3 */}
                        <div className="absolute z-10" style={{ bottom: 4, left: "14%" }}>
                            <Image
                                src="/images/branding/wheel image3.png"
                                alt="Customer"
                                width={80}
                                height={80}
                                className="rounded-xl object-cover"
                            />
                        </div>

                        {/* Bottom-center — wheel image4 */}
                        <div className="absolute z-10" style={{ bottom: 0, left: "50%", transform: "translateX(-50%)" }}>
                            <Image
                                src="/images/branding/wheel image4.png"
                                alt="Customer"
                                width={80}
                                height={80}
                                className="rounded-xl object-cover"
                            />
                        </div>

                        {/* Bottom-right — wheel image 5 */}
                        <div className="absolute z-10" style={{ bottom: 4, right: "14%" }}>
                            <Image
                                src="/images/branding/wheel image 5.png"
                                alt="Customer"
                                width={80}
                                height={80}
                                className="rounded-xl object-cover"
                            />
                        </div>
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