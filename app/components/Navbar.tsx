// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Menu, X, ChevronDown } from 'lucide-react';

// const navItems = [
//   { label: 'Home', href: '/' },
//   { label: 'About', href: '/about' },
//   {
//     label: 'Savings', href: '#',
//     children: ['Fixed Deposit', 'Target Savings', 'Daily Savings'],
//   },
//   {
//     label: 'Loans', href: '#',
//     children: ['Personal Loan', 'Business Loan', 'Mortgage'],
//   },
//   { label: 'RaoCap', href: '/raocap' },
//   { label: 'Payments', href: '/payments' },
//   { label: 'Cashpay', href: '/cashpay' },
//   { label: 'Rewards', href: '/rewards' },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
//           ? 'bg-[#0A1F44] shadow-2xl py-3'
//           : 'bg-[#0A1F44]/95 backdrop-blur-sm py-4'
//         }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2 flex-shrink-0">
//             <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C8952A] to-[#E8B84B] flex items-center justify-center">
//               <span className="text-white font-black text-sm">iM</span>
//             </div>
//             <div className="leading-tight">
//               <p className="text-white font-black text-sm tracking-wide" style={{ fontFamily: 'Manrope, sans-serif' }}>
//                 iMODI-iMOSAN
//               </p>
//               <p className="text-[#C8952A] text-[9px] font-bold tracking-widest uppercase">MFB</p>
//             </div>
//           </Link>

//           {/* Desktop Nav */}
//           <div className="hidden lg:flex items-center gap-6">
//             {navItems.map((item) => (
//               <div
//                 key={item.label}
//                 className="relative group"
//                 onMouseEnter={() => item.children && setOpenDropdown(item.label)}
//                 onMouseLeave={() => setOpenDropdown(null)}
//               >
//                 <Link
//                   href={item.href}
//                   className="nav-link flex items-center gap-1"
//                 >
//                   {item.label}
//                   {item.children && <ChevronDown size={13} className="opacity-70 group-hover:rotate-180 transition-transform duration-200" />}
//                 </Link>
//                 {item.children && openDropdown === item.label && (
//                   <div className="absolute top-full left-0 mt-3 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50">
//                     {item.children.map((child) => (
//                       <a
//                         key={child}
//                         href="#"
//                         className="block px-4 py-3 text-sm font-500 text-[#0A1F44] hover:bg-[#EBF3FF] hover:text-[#1E6FD9] transition-colors"
//                         style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 500 }}
//                       >
//                         {child}
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* CTA Buttons */}
//           <div className="hidden lg:flex items-center gap-3">
//             <a href="#" className="text-white/80 hover:text-white text-sm font-600 transition-colors" style={{ fontWeight: 600 }}>
//               Sign In
//             </a>
//             <a
//               href="#"
//               className="bg-[#C8952A] hover:bg-[#E8B84B] text-white px-5 py-2.5 rounded-lg text-sm font-700 transition-all hover:-translate-y-0.5 hover:shadow-lg"
//               style={{ fontWeight: 700 }}
//             >
//               Open Account
//             </a>
//           </div>

//           {/* Mobile toggle */}
//           <button
//             className="lg:hidden text-white p-2"
//             onClick={() => setMobileOpen(!mobileOpen)}
//           >
//             {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {mobileOpen && (
//           <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
//             <div className="flex flex-col gap-1 pt-4">
//               {navItems.map((item) => (
//                 <div key={item.label}>
//                   <a
//                     href={item.href}
//                     className="block px-3 py-2.5 text-white/90 hover:text-white hover:bg-white/10 rounded-lg text-sm font-500 transition-colors"
//                     style={{ fontWeight: 500 }}
//                   >
//                     {item.label}
//                   </a>
//                   {item.children && (
//                     <div className="ml-4 mt-1 flex flex-col gap-1">
//                       {item.children.map((child) => (
//                         <a
//                           key={child}
//                           href="#"
//                           className="block px-3 py-2 text-white/60 hover:text-white text-xs font-400 transition-colors"
//                         >
//                           {child}
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//               <div className="flex gap-3 mt-4 px-3">
//                 <a href="#" className="flex-1 text-center border border-white/40 text-white py-2.5 rounded-lg text-sm font-600 hover:bg-white/10 transition-colors">Sign In</a>
//                 <a href="#" className="flex-1 text-center bg-[#C8952A] text-white py-2.5 rounded-lg text-sm font-700 hover:bg-[#E8B84B] transition-colors">Open Account</a>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

interface DropdownItem {
  label: string;
  description?: string;
  href: string;
  icon?: ReactNode;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
  dropdownStyle?: "grid" | "list";
}

const SalaryIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);

const ConsumerIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <line x1="10" y1="14" x2="14" y2="14" />
  </svg>
);

const BusinessIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const TermIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    <line x1="12" y1="14" x2="12" y2="18" />
  </svg>
);

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    dropdownStyle: "list",
    dropdown: [
      {
        label: "Career",
        description:
          "Join our team and build a career with Imodi-Imosan Microfinance Bank.",
        href: "/career",
        icon: <ConsumerIcon />,
      },
    ],
  },
  {
    label: "Accounts",
    dropdownStyle: "grid",
    dropdown: [
      {
        label: "Savings Account",
        description: "Flexible savings solutions to help you grow your money.",
        href: "/savings",
        icon: <BusinessIcon />,
      },
      {
        label: "Current Account",
        description:
          "Everyday banking for individuals and businesses with full flexibility.",
        href: "/create-account",
        icon: <ConsumerIcon />,
      },
      {
        label: "SME",
        description: "Banking built for small and medium-sized businesses.",
        href: "/sme",
        icon: <BusinessIcon />,
      },
      {
        label: "Cooperative & Thrift",
        description: "Manage group savings and contributions with ease.",
        href: "/cooperative-thrift",
        icon: <ConsumerIcon />,
      },
      {
        label: "Societies & Clubs",
        description:
          "Secure banking for associations, clubs and group organisations.",
        href: "/societies-and-club",
        icon: <ConsumerIcon />,
      },
      {
        label: "Religious Organization",
        description:
          "Manage donations, offerings, and operational funds transparently.",
        href: "/religious-page",
        icon: <ConsumerIcon />,
      },
    ],
  },
  {
    label: "Savings",
    dropdownStyle: "list",
    dropdown: [
      {
        label: "Target Savings",
        description:
          "Save towards a specific goal with discipline and transparency.",
        href: "/target-savings",
        icon: <BusinessIcon />,
      },
      {
        label: "Create/Join a Savings Group",
        description: "Join or start a group savings plan with trusted members.",
        href: "/saving-group",
        icon: <BusinessIcon />,
      },
    ],
  },
  {
    label: "Loans",
    dropdownStyle: "grid",
    dropdown: [
      {
        label: "Salary Advance",
        description: "Quick access to your salary before payday.",
        href: "/salary-advance",
        icon: <SalaryIcon />,
      },
      {
        label: "Consumer Loan",
        description:
          "Personal loan solutions for your everyday needs and emergencies.",
        href: "/consumer-loan",
        icon: <ConsumerIcon />,
      },
      {
        label: "Business Loan",
        description: "Funding solutions designed to grow your business.",
        href: "/business-loan",
        icon: <BusinessIcon />,
      },
      {
        label: "Agri-Business",
        description: "Financial support tailored for agricultural businesses.",
        href: "/agric-business",
        icon: <BusinessIcon />,
      },
      {
        label: "Term Loan",
        description: "Structured loan repayments over a fixed period.",
        href: "/term-loan",
        icon: <TermIcon />,
      },
    ],
  },
  {
    label: "Payments",
    dropdownStyle: "list",
    dropdown: [
      {
        label: "Payments & Bills",
        href: "/payment-and-bills",
        description:
          "Pay bills, airtime, data and electricity quickly and securely.",
        icon: <SalaryIcon />,
      },
    ],
  },
  {
    label: "RizeCoop",
    dropdownStyle: "list",
    dropdown: [
      {
        label: "Membership",
        href: "/membership",
        description:
          "Become a member and access cooperative financial benefits.",
        icon: <SalaryIcon />,
      },
      {
        label: "Cooperative & Thrift",
        href: "/cooperative-thrift",
        description: "Manage collective savings and thrift contributions.",
        icon: <SalaryIcon />,
      },
      {
        label: "RizeCoop Loan",
        href: "/rizeCoop-plan",
        description: "Access loans through your cooperative standing.",
        icon: <SalaryIcon />,
      },
      {
        label: "Collateral Savings",
        href: "/collateral-savings",
        description: "Use your savings as collateral for loan access.",
        icon: <SalaryIcon />,
      },
      {
        label: "Multiplier Loan",
        href: "/multiplier-loan",
        description: "Grow your loan capacity through consistent savings.",
        icon: <SalaryIcon />,
      },
    ],
  },
  { label: "RizeSpring", href: "/rize-spring" },
  {
    label: "Rewards",
    dropdownStyle: "list",
    dropdown: [
      {
        label: "Point-Based System",
        href: "/rewards",
        description: "Earn points on every transaction and redeem for rewards.",
        icon: <SalaryIcon />,
      },
      {
        label: "Business Support",
        href: "/business-report",
        description: "Get business support benefits as a loyal customer.",
        icon: <SalaryIcon />,
      },
    ],
  },
  {
    label: "CSR",
    dropdownStyle: "list",
    dropdown: [
      {
        label: "Community Support Through Donations and other Rewards",
        href: "/csr",
        description:
          "We give back to the communities we serve through donations and impact programs.",
        icon: <SalaryIcon />,
      },
    ],
  },
];

interface DropdownPanelProps {
  items: DropdownItem[];
  style: "grid" | "list";
  isOpen: boolean;
  panelRef: React.RefObject<HTMLDivElement>;
  onClose: () => void;
}

const DropdownPanel = ({
  items,
  style,
  isOpen,
  panelRef,
  onClose,
}: DropdownPanelProps) => (
  <div
    ref={panelRef}
    className={[
      "absolute top-full bg-white rounded-xl shadow-xl z-50",
      "transition-all duration-200 origin-top",
      isOpen
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 -translate-y-2 pointer-events-none",
      style === "grid" ? "min-w-[860px] p-7" : "min-w-[400px] p-7",
    ].join(" ")}
    style={{ boxShadow: "0 8px 40px rgba(13,42,78,0.14)" }}
  >
    {style === "grid" ? (
      <div className="grid grid-cols-2 gap-x-10 gap-y-6">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-start gap-3 group"
            onClick={onClose}
          >
            <span className="flex-shrink-0 w-9 h-9 flex items-center justify-center text-[#2196f3] mt-0.5">
              {item.icon}
            </span>
            <span>
              <p className="text-sm font-extrabold text-[#0d2a4e] mb-1 group-hover:text-[#2196f3] transition-colors">
                {item.label}
              </p>
              {item.description && (
                <p className="text-sm text-[#555e6e] leading-relaxed max-w-[300px]">
                  {item.description}
                </p>
              )}
            </span>
          </Link>
        ))}
      </div>
    ) : (
      <div className="flex flex-col gap-y-6 pt-4">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-start gap-3 group"
            onClick={onClose}
          >
            <span className="flex-shrink-0 w-9 h-9 flex items-center justify-center text-[#2196f3] mt-0.5">
              {item.icon}
            </span>
            <span>
              <p className="text-sm font-extrabold text-[#0d2a4e] mb-1 group-hover:text-[#2196f3] transition-colors">
                {item.label}
              </p>
              {item.description && (
                <p className="text-sm text-[#555e6e] leading-relaxed max-w-[300px]">
                  {item.description}
                </p>
              )}
            </span>
          </Link>
        ))}
      </div>
    )}
  </div>
);

interface DesktopNavItemProps {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const DesktopNavItem = ({
  item,
  isOpen,
  onToggle,
  onClose,
}: DesktopNavItemProps) => {
  const wrapperRef = useRef<HTMLLIElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Recalculate panel horizontal position whenever it opens
  useEffect(() => {
    if (!isOpen || !wrapperRef.current || !panelRef.current) return;

    const panel = panelRef.current;
    const trigger = wrapperRef.current;

    // Reset any previously applied positioning so we measure cleanly
    panel.style.left = "";
    panel.style.right = "";
    panel.style.transform = "";

    const panelWidth = panel.offsetWidth;
    const triggerRect = trigger.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const EDGE_MARGIN = 12; // px gap from viewport edge

    // Ideal: center the panel on the trigger button
    const idealLeft = triggerRect.left + triggerRect.width / 2 - panelWidth / 2;

    if (idealLeft + panelWidth + EDGE_MARGIN > viewportWidth) {
      // Would overflow right — anchor to right edge of trigger instead
      const overflowAmount =
        idealLeft + panelWidth + EDGE_MARGIN - viewportWidth;
      const adjustedLeft = idealLeft - overflowAmount;

      // Convert back to position relative to the <li> (which is position:relative)
      const liLeft = triggerRect.left;
      panel.style.left = `${adjustedLeft - liLeft}px`;
    } else if (idealLeft < EDGE_MARGIN) {
      // Would overflow left — anchor to left edge
      const liLeft = triggerRect.left;
      panel.style.left = `${EDGE_MARGIN - liLeft}px`;
    } else {
      // Fits centered — use translateX so it stays relative to the li
      const liLeft = triggerRect.left;
      panel.style.left = `${idealLeft - liLeft}px`;
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node))
        onClose();
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!item.dropdown) {
    return (
      <li>
        <Link
          href={item.href ?? "#"}
          className="flex items-center px-3 h-16 text-sm font-bold text-[#1a2942] hover:text-[#2196f3] transition-colors whitespace-nowrap"
          onClick={onClose}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li ref={wrapperRef} className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 px-3 h-16 text-sm font-bold text-[#1a2942] hover:text-[#2196f3] transition-colors whitespace-nowrap bg-transparent border-none cursor-pointer font-[inherit]"
      >
        {item.label}
        <ChevronDown
          className={`w-3.5 h-3.5 text-[#555e6e] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <DropdownPanel
        items={item.dropdown}
        style={item.dropdownStyle ?? "list"}
        isOpen={isOpen}
        panelRef={panelRef}
        onClose={onClose}
      />
    </li>
  );
};

const MobileNav = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [openSubs, setOpenSubs] = useState<Record<string, boolean>>({});
  const toggleSub = (label: string) =>
    setOpenSubs((prev) => ({ ...prev, [label]: !prev[label] }));

  return (
    <div
      className={[
        "lg:hidden border-t border-[#e8eef8] bg-white overflow-y-auto transition-all duration-300",
        isOpen
          ? "max-h-[80vh] opacity-100"
          : "max-h-0 opacity-0 pointer-events-none",
      ].join(" ")}
    >
      <nav className="flex flex-col py-2">
        {NAV_ITEMS.map((item) =>
          item.dropdown ? (
            <div key={item.label}>
              <button
                onClick={() => toggleSub(item.label)}
                className="flex items-center justify-between w-full px-6 py-3.5 text-sm font-bold text-[#1a2942] hover:text-[#2196f3] hover:bg-blue-50 transition-colors font-[inherit]"
              >
                {item.label}
                <ChevronDown
                  className={`w-4 h-4 text-[#555e6e] transition-transform duration-200 ${openSubs[item.label] ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={[
                  "bg-[#f8faff] overflow-hidden transition-all duration-200",
                  openSubs[item.label] ? "max-h-96" : "max-h-0",
                ].join(" ")}
              >
                {item.dropdown.map((sub) => (
                  <Link
                    key={sub.label}
                    href={sub.href}
                    className="block px-10 py-2.5 text-sm font-semibold text-[#1a2942] hover:text-[#2196f3] transition-colors"
                    onClick={onClose}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={item.label}
              href={item.href ?? "#"}
              className="px-6 py-3.5 text-sm font-bold text-[#1a2942] hover:text-[#2196f3] hover:bg-blue-50 transition-colors"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ),
        )}
      </nav>
    </div>
  );
};

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggle = (label: string) =>
    setOpenDropdown((prev) => (prev === label ? null : label));

  const handleLinkClick = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  return (
    <nav
      className="sticky top-0 z-50 bg-[#B6CCFF]"
      style={{ boxShadow: "0 4px 24px rgba(13,42,78,0.10)" }}
    >
      <div className="max-w-[1280px] mx-auto flex items-center h-16 px-7">
        <div className="flex items-center gap-3">
          <Image
            src="/images/branding/logo.png"
            alt="logo"
            width={64}
            height={52}
          />
          <h2 className="text-xl font-extrabold leading-none tracking-[-0.02em] text-black">
            IMODI-IMOSAN <span className="text-[#2563EB]">MFB</span>
          </h2>
        </div>

        <ul className="hidden lg:flex items-center flex-1 list-none gap-0 m-0 p-0">
          {NAV_ITEMS.map((item) => (
            <DesktopNavItem
              key={item.label}
              item={item}
              isOpen={openDropdown === item.label}
              onToggle={() => toggle(item.label)}
              onClose={handleLinkClick}
            />
          ))}
        </ul>

        <button
          className="lg:hidden ml-auto p-1.5 text-[#0d2a4e] bg-transparent border-none cursor-pointer"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      <MobileNav isOpen={mobileOpen} onClose={handleLinkClick} />
    </nav>
  );
}
