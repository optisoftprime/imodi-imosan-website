// // export default function Footer() {
// //   return (
// //     <footer className="border-t border-white/10 bg-slate-950/80 py-8 text-slate-400">
// //       <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
// //         <p>© {new Date().getFullYear()} Imodi Imosan. Built with Next.js, TypeScript, and Tailwind CSS.</p>
// //         <p className="text-slate-500">Designed for modern businesses and creative brands.</p>
// //       </div>
// //     </footer>
// //   );
// // }

// import { MapPin, Phone, Mail } from 'lucide-react';

// const footerLinks = {
//     Accounts: ['Savings Account', 'Current Account', 'Business Account', 'Joint Account', 'Corporate Account'],
//     PlanCoop: ['Overview', 'How it Works', 'FAQs', 'Register'],
//     Savings: ['Fixed Deposit', 'Target Savings', 'Kids Savings', 'Group Savings'],
//     Loans: ['Personal Loan', 'Business Loan', 'Agricultural Loan', 'Salary Advance', 'Apply Now'],
// };

// export default function Footer() {
//     return (
//         <footer className="bg-[#061e42] text-gray-300">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 {/* Main footer */}
//                 <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
//                     {/* Brand */}
//                     <div className="col-span-2 md:col-span-3 lg:col-span-2">
//                         <div className="flex items-center gap-2 mb-5">
//                             <div className="w-10 h-10 rounded-full bg-[#e8a020] flex items-center justify-center">
//                                 <span className="text-white font-bold">M</span>
//                             </div>
//                             <div>
//                                 <div className="text-white font-bold tracking-wide">IMODI-IMOSAN</div>
//                                 <div className="text-[#e8a020] text-xs font-semibold tracking-widest">MFB</div>
//                             </div>
//                         </div>
//                         <p className="text-sm leading-relaxed text-gray-400 mb-6 max-w-xs">
//                             Empowering individuals and businesses across Nigeria with accessible,
//                             innovative, and trusted financial solutions.
//                         </p>

//                         {/* Contact info */}
//                         <div className="space-y-2 mb-6">
//                             <div className="flex items-start gap-2 text-sm">
//                                 <MapPin className="w-4 h-4 text-[#e8a020] mt-0.5 flex-shrink-0" />
//                                 <span className="text-gray-400 text-xs">12 Banking Avenue, Lagos, Nigeria</span>
//                             </div>
//                             <div className="flex items-center gap-2 text-sm">
//                                 <Phone className="w-4 h-4 text-[#e8a020] flex-shrink-0" />
//                                 <span className="text-gray-400 text-xs">0800-IIMFB-NG</span>
//                             </div>
//                             <div className="flex items-center gap-2 text-sm">
//                                 <Mail className="w-4 h-4 text-[#e8a020] flex-shrink-0" />
//                                 <span className="text-gray-400 text-xs">support@iimfb.com</span>
//                             </div>
//                         </div>

//                         {/* Social links */}

//                     </div>

//                     {/* Links */}
//                     {Object.entries(footerLinks).map(([title, links]) => (
//                         <div key={title}>
//                             <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
//                             <ul className="space-y-2">
//                                 {links.map((link) => (
//                                     <li key={link}>
//                                         <a
//                                             href="#"
//                                             className="text-gray-400 text-xs hover:text-[#e8a020] transition-colors duration-200 hover:translate-x-1 inline-block"
//                                         >
//                                             {link}
//                                         </a>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Bottom bar */}
//                 <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
//                     <p className="text-xs text-gray-500">
//                         &copy; {new Date().getFullYear()} Imodi-Imosan Micro Finance Bank. All rights reserved. CBN Licensed | NDPR Compliant.
//                     </p>
//                     <div className="flex gap-4 text-xs text-gray-500">
//                         <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
//                         <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
//                         <a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }


// components/Footer.tsx

import Image from "next/image";
import Link from "next/link";
import {
    MapPin,
    Phone,
} from "lucide-react";

import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa";

const accounts = [
    "Savings Account",
    "Current Account",
    "SME",
    "Cooperative & Thrift",
    "Societies & Clubs",
];

const loans = [
    "Personal Loans",
    "Business Loans",
    "Farmers Loans",
    "RizeCoop Loan",
    "Term Loan",
];

const banking = [
    "Internet Banking",
    "Transfers",
    "Bill Payments",
    "Airtime & Data",
    "Download RizeSpring",
];

const company = [
    "About Us",
    "CRS",
    "Rewards Program",
    "Careers",
    "Contact Us",
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#F4F4F4] text-[#667085]">
            {/* Top Right Curve */}
            <div className="pointer-events-none absolute right-0 top-0 z-0">
                <Image
                    src="/images/ui/footer/footer-top-curve.png"
                    alt="design"
                    width={280}
                    height={280}
                    className="w-[130px] sm:w-[140px] lg:w-[130px]"
                />
            </div>

            {/* Bottom Left Curve */}
            <div className="pointer-events-none absolute bottom-0 left-0 z-0">
                <Image
                    src="/images/ui/footer/footer-bottom-curve.png"
                    alt="design"
                    width={320}
                    height={320}
                    className="w-[130px] sm:w-[140px] lg:w-[130px]"
                />
            </div>

            <div className="relative z-10 mx-auto max-w-[1280px] px-6 pb-8 pt-16 sm:px-10 lg:px-12">
                {/* Top Section */}
                <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
                    {/* Brand */}
                    <div className="max-w-[340px]">
                        {/* Logo */}
                        <div className="mb-7 flex items-center gap-3">
                            <Image
                                src="/images/branding/logo.png"

                                alt="logo"
                                width={64}
                                height={52}
                            />

                            <h2 className="text-[27.41px] font-extrabold leading-none tracking-[-0.02em] text-black">
                                IMODI-IMOSAN{" "}
                                <span className="text-[#2563EB]">MFB</span>
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="mb-8 text-[16px] leading-[34px] text-[#667085]">
                            Imodi-Imosan Microfinance Bank — helping individuals and
                            businesses grow with simple, secure, and trustworthy financial
                            services.
                        </p>

                        {/* Address */}
                        <div className="mb-5 flex items-start gap-2">
                            <MapPin
                                size={16}
                                className="mt-1 min-w-[22px] text-[#667085]"
                            />

                            <p className="text-[16px] leading-[34px]">
                                19, Market Street, Imodi, Ijebu, Ogun State Nigeria
                            </p>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-2">
                            <Phone size={16} className="text-[#667085]" />

                            <p className="text-[16px]">+2348097755150</p>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <FooterColumn title="Accounts" items={accounts} />
                    <FooterColumn title="Loans" items={loans} />
                    <FooterColumn title="Digital Banking" items={banking} />
                    <FooterColumn title="Company" items={company} />
                </div>

                {/* Divider */}
                <div className="mt-14 border-t border-[#D0D5DD]" />

                {/* Bottom Section */}
                <div className="flex flex-col gap-6 py-7 lg:flex-row lg:items-center lg:justify-between">
                    {/* Policies */}
                    <div className="flex flex-wrap items-center gap-8 text-[16px]">
                        <Link href="#" className="transition hover:text-black">
                            Privacy Policy
                        </Link>

                        <Link href="#" className="transition hover:text-black">
                            Cookie Policy
                        </Link>

                        <Link href="#" className="transition hover:text-black">
                            Legal
                        </Link>
                    </div>

                    {/* Copyright */}
                    <div className="flex items-center gap-2 text-center text-[16px]">
                        <span className="text-[16px]">©</span>
                        <p>
                            2026 Imodi-Imosan Micro Finance Bank. All rights reserved.
                        </p>
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-6">
                        <Link href="#">
                            <FaTwitter
                                size={22}
                                className="transition hover:text-black"
                            />
                        </Link>

                        <Link href="#">
                            <FaLinkedin
                                size={22}
                                className="transition hover:text-black"
                            />
                        </Link>

                        <Link href="#">
                            <FaFacebook
                                size={22}
                                className="transition hover:text-black"
                            />
                        </Link>

                        <Link href="#">
                            <FaInstagram
                                size={22}
                                className="transition hover:text-black"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

type FooterColumnProps = {
    title: string;
    items: string[];
};

function FooterColumn({ title, items }: FooterColumnProps) {
    return (
        <div>
            <h3 className="mb-8 text-[20px] font-bold text-black">
                {title}
            </h3>

            <ul className="space-y-6">
                {items.map((item) => (
                    <li key={item}>
                        <Link
                            href="#"
                            className="text-[16px] transition hover:text-black"
                        >
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}