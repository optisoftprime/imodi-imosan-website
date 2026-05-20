"use client";
import { ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface PageCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  buttonText2?: string;
  onButton2Click?: () => void;
  backgroundImage?: StaticImageData | string;
  overlayImage1?: StaticImageData | string;
  overlayImage2?: StaticImageData | string;
  gradient?: string;
  logoIcon?: React.ReactNode;
  minHeight?: string;
}

function DefaultLogoMark() {
  return (
    <div className="mx-auto mb-8 h-20 w-20 drop-shadow-[0_0_24px_rgba(100,160,255,0.8)]">
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <circle cx="40" cy="40" r="38" stroke="url(#ctaGlow)" strokeWidth="2" strokeOpacity="0.6" />
        <circle cx="40" cy="40" r="28" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" />
        <path d="M40 14 C28 22 22 32 26 44 C30 54 40 60 40 60 C40 60 50 54 54 44 C58 32 52 22 40 14Z" fill="url(#ctaLeaf)" opacity="0.95" />
        <path d="M40 20 C32 27 29 35 32 43 C35 50 40 54 40 54 C40 54 45 50 48 43 C51 35 48 27 40 20Z" fill="white" opacity="0.25" />
        <defs>
          <linearGradient id="ctaLeaf" x1="40" y1="14" x2="40" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7ecfff" />
            <stop offset="50%" stopColor="#3b8ee8" />
            <stop offset="100%" stopColor="#1a4fa0" />
          </linearGradient>
          <linearGradient id="ctaGlow" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function PageCTA({
  title = "Start Banking with Confidence",
  description = "Take the first step toward achieving your financial goals with the trusted support of Imodi-Imosan Microfinance Bank.",
  buttonText = "Get Started",
  onButtonClick,
  buttonText2,
  onButton2Click,
  backgroundImage,
  overlayImage1,
  overlayImage2,
  gradient = "linear-gradient(135deg, #0a1a6e 0%, #0d2fa8 40%, #1a5fd4 100%)",
  logoIcon,
  minHeight = "360px",
}: PageCTAProps) {
  return (
    <section
      className="relative overflow-hidden py-24 text-center"
      style={{ minHeight, ...(!backgroundImage ? { background: gradient } : {}) }}
    >
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image src={backgroundImage} alt="" fill className="object-cover object-center" />
          <div className="absolute inset-0" style={{ background: gradient, opacity: 0.85 }} />
        </div>
      )}

      {overlayImage1 && (
        <div className="absolute inset-0">
          <Image src={overlayImage1} alt="" fill className="object-cover object-left-bottom" style={{ mixBlendMode: "screen" }} />
        </div>
      )}

      {overlayImage2 && (
        <div className="absolute inset-y-0 right-0 w-1/2">
          <Image src={overlayImage2} alt="" fill className="object-cover object-right" style={{ mixBlendMode: "screen", opacity: 0.6 }} />
        </div>
      )}

      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(10,30,90,0.10) 0%, rgba(5,10,40,0.40) 100%)" }} />

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        {logoIcon !== undefined ? logoIcon : <DefaultLogoMark />}
        <h2 className="font-display text-3xl font-black text-white md:text-4xl lg:text-5xl">{title}</h2>
        <p className="mt-5 text-base leading-relaxed text-blue-200">{description}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onButtonClick}
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-transparent px-9 py-4 text-sm font-semibold text-white shadow-xl backdrop-blur-sm transition hover:bg-white/10 hover:shadow-2xl"
          >
            {buttonText} <ChevronRight className="h-4 w-4" />
          </button>

          {buttonText2 && (
            <button
              onClick={onButton2Click}
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-transparent px-9 py-4 text-sm font-semibold text-white shadow-xl backdrop-blur-sm transition hover:bg-white/10 hover:shadow-2xl"
            >
              {buttonText2} <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}