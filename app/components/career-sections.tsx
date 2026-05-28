"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import rect26 from "@/public/images/branding/Rectangle 26.png";
import rect27 from "@/public/images/branding/Rectangle 27.png";

/* ═══════════════════════════════════════════
   SECTION 1 — GROW YOUR CAREER WITH PURPOSE
   Left: text + button | Right: circular photo
═══════════════════════════════════════════ */
export function CareerFeatureSection() {
  return (
    <section className="relative overflow-hidden bg-white px-8 py-20">
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left */}
        <div>
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-[#0a1f44] md:text-4xl">
            Grow Your Career With Purpose!
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-[1.85] text-gray-500">
            <p>
              Join a team where your skills, passion, and ideas can make a real impact. Build meaningful
              experiences, develop professionally, and grow in an environment that values innovation,
              collaboration, and progress.
            </p>
            <p>
              Whether you're starting your career journey or looking to take the next big step, you'll have
              opportunities to learn, contribute, and thrive while helping shape better financial experiences
              for individuals, businesses, and communities.
            </p>
          </div>
          <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a5fd4] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d3fa8] hover:shadow-xl">
            See Open Job Roles <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Right — circular photo */}
        <div className="flex items-center justify-center">
          <div className="relative overflow-hidden rounded-full shadow-2xl" style={{ width: 320, height: 320 }}>
            {/* swap with actual career photo */}
            <Image src={rect26} alt="Career" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — OPEN ROLES
   Centered heading + subtitle + 2-col job cards grid (dashed border)
═══════════════════════════════════════════ */
const openRoles = [
  {
    title: "Customer Service Rep...",
    location: "Lagos, Nigeria",
    type: "Full Time",
    description: "Assist customers with inquiries, support requests, and financial service guidance while delivering an excellent customer experience.",
    img: rect26,
  },
  {
    title: "Credit & Loan Officer",
    location: "Lagos, Nigeria",
    type: "Full Time",
    description: "Evaluate loan applications, support customers through the lending process, and help maintain healthy credit operations.",
    img: rect27,
  },
  {
    title: "Digital Marketing Officer",
    location: "Lagos, Nigeria",
    type: "Full Time",
    description: "Help grow brand visibility through digital campaigns, content creation, and customer engagement strategies.",
    img: rect26,
  },
  {
    title: "Mobile App Support Officer",
    location: "Lagos, Nigeria",
    type: "Full Time",
    description: "Support users of the RizeSpring app by resolving issues and ensuring a smooth digital banking experience.",
    img: rect27,
  },
  {
    title: "Customer Service Rep...",
    location: "Lagos, Nigeria",
    type: "Full Time",
    description: "Assist customers with inquiries, support requests, and financial service guidance while delivering an excellent customer experience.",
    img: rect26,
  },
  {
    title: "Customer Service Rep...",
    location: "Lagos, Nigeria",
    type: "Full Time",
    description: "Assist customers with inquiries, support requests, and financial service guidance while delivering an excellent customer experience.",
    img: rect27,
  },
  {
    title: "Customer Service Rep...",
    location: "Lagos, Nigeria",
    type: "Full Time",
    description: "Assist customers with inquiries, support requests, and financial service guidance while delivering an excellent customer experience.",
    img: rect26,
  },
  {
    title: "Credit & Loan Officer",
    location: "Lagos, Nigeria",
    type: "Full Time",
    description: "Evaluate loan applications, support customers through the lending process, and help maintain healthy credit operations.",
    img: rect27,
  },
];

import { useModal } from "@/app/context/ModalContext";

export function CareerOpenRolesSection() {
  const { openModal } = useModal();
  return (
    <section className="bg-white px-8 pb-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-black uppercase text-[#0a1f44] md:text-4xl">
            Open Roles
          </h2>
          <p className="mt-3 text-[15px] text-gray-500">
            Find a role that matches your passion, skills, and career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {openRoles.map((role, i) => (
            <div
              key={i}
              className="flex items-stretch gap-0 overflow-hidden rounded-xl border border-dashed border-gray-300"
            >
              {/* Photo — left side */}
              <div className="relative flex-shrink-0" style={{ width: 160, minHeight: 180 }}>
                <Image src={role.img} alt={role.title} fill className="object-cover" />
              </div>

              {/* Info — right side */}
              <div className="flex flex-col justify-between p-5">
                <div className="space-y-1.5 text-[13.5px] text-gray-600">
                  <p><span className="font-bold text-[#0a1f44]">Job Title:</span> {role.title}</p>
                  <p><span className="font-bold text-[#0a1f44]">Location:</span> {role.location}</p>
                  <p><span className="font-bold text-[#0a1f44]">Employment Type:</span> {role.type}</p>
                  <p><span className="font-bold text-[#0a1f44]">Job Description:</span> {role.description}</p>
                </div>
                <button onClick={openModal} className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg bg-[#1a5fd4] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0d3fa8]">
                  Apply Now <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}