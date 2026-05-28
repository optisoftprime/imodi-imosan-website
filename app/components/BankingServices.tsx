"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// ─── Icons ────────────────────────────────────────────────────────────────────

const ShieldCheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E75FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E75FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const SpeedometerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E75FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 0 1 7.39 16.75" />
    <path d="M12 2a10 10 0 0 0-7.39 16.75" />
    <line x1="12" y1="12" x2="16" y2="8" />
    <circle cx="12" cy="12" r="1.5" fill="#1E75FF" />
  </svg>
);

const StarIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E75FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="bg-[#F6F9FD] rounded-[28px] p-8 md:p-10 flex flex-col gap-4 transition-all duration-200 hover:shadow-xl hover:bg-white"
  >
    <div className="w-10 h-10 flex items-center justify-start">{icon}</div>
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-extrabold text-[#0B1A3E]">{title}</h3>
      <p className="text-sm text-[#5C6A7E] leading-relaxed font-normal">{description}</p>
    </div>
  </motion.div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export default function BankingServices() {
  return (
    <section className="w-full py-16 md:py-24 font-sans bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 w-full">

        {/* ── Section Title ── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1A3E] mb-12 uppercase tracking-tight text-center md:text-left"
        >
          OUR BANKING <span className="text-[#1E75FF]">SERVICES</span>
        </motion.h2>

        {/* ── Main Layout Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

          {/* Row 1, Column 1: Navy Hero Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#081A3E] rounded-[32px] p-8 md:p-10 flex flex-col items-center justify-between min-h-[500px] relative overflow-hidden"
          >

            {/* Main Visuals with Overlapping Avatars */}
            <div className="relative w-full max-w-[340px] h-[250px] mt-4 mb-6">
              <div className="w-full h-full rounded-[28px] overflow-hidden relative shadow-xl">
                <Image
                  src="/images/branding/Frame 203.png"
                  alt="Our Financial Solutions"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute -left-5 bottom-[15%] w-16 h-16 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden">
                <Image
                  src="/images/branding/Ellipse 11.png"
                  alt="Customer"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#1E75FF] rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden">
                <Image
                  src="/images/branding/Group 1000005553.png"
                  alt="Customer"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#1E75FF] rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="text-center max-w-md mx-auto">
              <h3 className="text-white font-extrabold text-xl uppercase tracking-wider mb-3">
                OUR FINANCIAL SOLUTIONS
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Flexible banking solutions designed to help individuals, businesses,
                and communities manage, grow, and access their finances with
                ease — providing reliable support for savings, loans, and everyday
                banking needs.
              </p>
            </div>

          </motion.div>

          {/* Row 1, Column 2: Stack of Services (Savings, Loans) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
            className="flex flex-col gap-6 md:gap-8"
          >
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
          </motion.div>

          {/* Row 2, Column 1: Stack of Services (Business, Digital) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6 md:gap-8"
          >
            <ServiceCard
              icon={<SpeedometerIcon />}
              title="Business Banking"
              description="We provide reliable banking solutions designed to support businesses with the financial tools and services they need to manage operations, handle transactions, and grow with confidence."
            />
            <ServiceCard
              icon={<StarIcon />}
              title="Digital Banking"
              description="We provide convenient digital banking services that allow you to access your account, manage transactions, and stay in control of your finances anytime and anywhere."
            />
          </motion.div>

          {/* Row 2, Column 2: Golden Microfinance Trust Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#D18B27] rounded-[32px] p-8 md:p-10 flex flex-col items-center justify-between text-center min-h-[500px]"
          >

            <p className="text-white/95 font-black text-xl uppercase tracking-[0.2em]">
              IMODI-IMOSAN MICRO FINANCE BANK
            </p>

            <div className="relative w-full max-w-[380px] aspect-[1.5/1] my-8">
              <Image
                src="/images/branding/banking.png"
                alt="Banking illustration"
                fill
                className="object-cover rounded-[28px]"
                priority
              />
            </div>

            <div className="max-w-xs mx-auto">
              <h3 className="text-white font-extrabold text-xl mb-2">Customers Who Trust Us</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Trusted by our customers for easy, reliable, and community-focused
                banking, helping individuals and businesses achieve their financial
                goals every day.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
