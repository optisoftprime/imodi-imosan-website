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

// components/Footer.tsximport Image from "next/image";

"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { PrivacyModal } from "@/app/modal/privacy";

const navLinks = [
  {
    title: "Accounts",
    items: [
      { label: "Savings Account", href: "/savings" },
      { label: "Current Account", href: "/create-account" },
      { label: "SME", href: "/sme" },
      { label: "Cooperative & Thrift", href: "/cooperative-thrift" },
      { label: "Societies & Clubs", href: "/societies-and-club" },
      { label: "Religious Organization", href: "/religious-page" },
    ],
  },
  {
    title: "Loans",
    items: [
      { label: "Salary Advance", href: "/salary-advance" },
      { label: "Consumer Loan", href: "/consumer-loan" },
      { label: "Business Loan", href: "/business-loan" },
      { label: "Agri-Business", href: "/agric-business" },
      { label: "Term Loan", href: "/term-loan" },
    ],
  },
  {
    title: "Digital Banking",
    items: [
      { label: "Payments & Bills", href: "/payment-and-bills" },
      { label: "Target Savings", href: "/target-savings" },
      { label: "Create/Join Savings Group", href: "/saving-group" },
      { label: "Collateral Savings", href: "/collateral-savings" },
      { label: "Download RizeSpring", href: "/rize-spring" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Career", href: "/career" },
      { label: "CSR", href: "/csr" },
      { label: "Rewards Program", href: "/rewards" },
      { label: "Membership", href: "/membership" },
      { label: "Contact Us", href: "#" },
    ],
  },
];

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="relative overflow-hidden bg-[#F4F4F4] text-[#667085]">
        <div className="pointer-events-none absolute right-0 top-0 z-0">
          <Image
            src="/images/ui/footer/footer-top-curve.png"
            alt=""
            width={280}
            height={280}
            className="w-[130px] sm:w-[140px] lg:w-[130px]"
          />
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 z-0">
          <Image
            src="/images/ui/footer/footer-curve-left.png"
            alt=""
            width={320}
            height={320}
            className="w-[130px] sm:w-[140px] lg:w-[130px]"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 pb-8 pt-16 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
            {/* Brand */}
            <div className="max-w-[340px]">
              <div className="mb-7 flex items-center gap-3">
                <Image
                  src="/images/branding/logo.png"
                  alt="logo"
                  width={64}
                  height={52}
                />
                <h2 className="text-[27.41px] font-extrabold leading-none tracking-[-0.02em] text-black">
                  IMODI-IMOSAN <span className="text-[#2563EB]">MFB</span>
                </h2>
              </div>

              <p className="mb-8 text-[16px] leading-[34px]">
                Imodi-Imosan Microfinance Bank — helping individuals and
                businesses grow with simple, secure, and trustworthy financial
                services.
              </p>

              <div className="mb-5 flex items-start gap-2">
                <MapPin size={16} className="mt-1 min-w-[22px]" />
                <p className="text-[16px] leading-[34px]">
                  19, Market Street, Imodi, Ijebu, Ogun State Nigeria
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} />
                <p className="text-[16px]">+2348097755150</p>
              </div>
            </div>

            {/* Nav columns */}
            {navLinks.map((col) => (
              <div key={col.title}>
                <h3 className="mb-8 text-[20px] font-bold text-black">
                  {col.title}
                </h3>
                <ul className="space-y-6">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-[16px] transition hover:text-black"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-[#D0D5DD]" />

          <div className="flex flex-col gap-6 py-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-8 text-[16px]">
              <button
                onClick={() => setPrivacyOpen(true)}
                className="transition hover:text-black"
              >
                Privacy Policy
              </button>
              <Link href="#" className="transition hover:text-black">
                Cookie Policy
              </Link>
              <Link href="#" className="transition hover:text-black">
                Legal
              </Link>
            </div>

            <p className="text-[16px]">
              © 2026 Imodi-Imosan Micro Finance Bank. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <Link href="#">
                <FaTwitter size={22} className="transition hover:text-black" />
              </Link>
              <Link href="#">
                <FaLinkedin size={22} className="transition hover:text-black" />
              </Link>
              <Link href="#">
                <FaFacebook size={22} className="transition hover:text-black" />
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

      <PrivacyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        onAgree={() => setPrivacyOpen(false)}
      />
    </>
  );
}
