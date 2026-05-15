import { ChevronDown, ChevronRight } from "lucide-react";
import logo from "@/assets/logo.png";
import heroMockup from "@/public/images/branding/mobile-dashboard.png";
import PlaceholderImg from "./PlaceholderImg";

export default function HeroSection() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#eaf0fb]">
            {/* Hero */}
            <section className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-8 pb-32 pt-8 lg:grid-cols-2">
                {/* Left */}
                <div className="relative z-10">
                    <p className="text-lg font-bold text-[#0a1f44]">
                        CBN Licensed | NDPR Compliant | Secured Banking
                    </p>
                    <h1 className="mt-6 font-bold leading-[0.95] tracking-tight">
                        <span className="text-5xl italic text-[#0a1f44] md:text-6xl">Time To </span>
                        <span className="text-6xl text-[#0a1f44] md:text-8xl">Grow </span>
                        <span className="text-6xl text-[#2a5cff] md:text-8xl">Big!</span>
                    </h1>

                    <div className="mt-8 max-w-xl space-y-5 text-[15px] leading-relaxed text-[#1a2a4a]">
                        <p>Welcome to IIMFB– where ambition meets opportunity.</p>
                        <p>
                            Every dream deserves the fuel to become a reality- this is our promise to you.
                            <br />
                            And we keep our promises.
                        </p>
                        <p>
                            Whether you're a young entrepreneur launching your first venture, a family
                            building a secure future, or a growing business ready to scale across markets,
                            now is the Time to grow BIG!
                        </p>
                        <p>
                            We provide the tools, support, and innovative solutions to help turn your
                            potentials into powerful progress.
                        </p>
                        <p>
                            Growth isn't about waiting for the perfect moment — it's about creating it.
                            <br />
                            With resilience, smart planning, and the right partner by your side, BIG
                            becomes achievable.
                        </p>
                        <p>
                            Join millions of Nigerians today who are already making it BIG.
                            <br />
                            Open an account today. The next BIG chapter starts here!
                        </p>
                    </div>

                    <button className="mt-10 inline-flex items-center gap-2 rounded-md border border-[#0a1f44]/15 bg-white px-7 py-4 text-base font-semibold text-[#0a1f44] shadow-sm transition hover:shadow-md">
                        Start Growing Today <ChevronRight className="h-4 w-4" />
                    </button>
                </div>

                {/* Right – mockup with circular blob */}
                {/* <div className="relative flex items-center justify-center">
                    <div className="absolute right-8 top-16 h-[520px] w-[520px] rounded-full bg-[#0d3b66]" />
                    <PlaceholderImg
                        src={heroMockup}
                        width={700}
                        height={700}
                        label="Avatar"
                        className="rounded-2xl"
                    />

                </div> */}
            </section>

            {/* Bottom curve */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-[#0a2a5e]" style={{ borderTopLeftRadius: "50% 100%", borderTopRightRadius: "50% 100%" }} />
        </div>
    );
}
