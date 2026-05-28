"use client";
import { ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useModal } from "@/app/context/ModalContext";

import image27 from "@/public/images/branding/image 27.png";
import rect5 from "@/public/images/branding/Rectangle 5.png";
import rect6 from "@/public/images/branding/Rectangle 6.png";

interface OverlayImageConfig {
  src: StaticImageData | string;
  /** Which side/position the image occupies. Defaults to "left" */
  position?: "left" | "right" | "full" | "center";
  /** object-position for the Next Image. e.g. "left bottom" */
  objectPosition?: string;
  /** 0–1 opacity. Default 1 */
  opacity?: number;
  /** CSS mix-blend-mode. Default "screen" */
  blendMode?: React.CSSProperties["mixBlendMode"];
  /** Override the container className entirely */
  containerClassName?: string;
  /** Override the container style entirely */
  containerStyle?: React.CSSProperties;
}

interface PageCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  buttonText2?: string;
  onButton2Click?: () => void;
  backgroundImage?: StaticImageData | string;
  /** Pass an array of overlay configs for full control, or leave undefined for default */
  overlays?: OverlayImageConfig[];
  gradient?: string;
  logoIcon?: React.ReactNode;
  minHeight?: string;
}

function DefaultLogoMark() {
  return (
    <div className="mx-auto mb-8 h-20 w-20 overflow-hidden rounded-full shadow-[0_0_32px_rgba(100,160,255,0.6)]">
      <Image
        src={image27}
        alt="IIMFB"
        width={80}
        height={80}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

/** Resolve an OverlayImageConfig into container style + image props */
function resolveOverlayContainer(cfg: OverlayImageConfig): React.CSSProperties {
  if (cfg.containerStyle) return cfg.containerStyle;

  const base: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    opacity: cfg.opacity ?? 1,
    mixBlendMode: cfg.blendMode ?? "screen",
  };

  switch (cfg.position ?? "left") {
    case "left":
      return { ...base, right: "50%", left: 0 };
    case "right":
      return { ...base, left: "50%", right: 0 };
    case "center":
      return { ...base, left: "25%", right: "25%" };
    case "full":
    default:
      return base;
  }
}

/** Default overlays matching the Figma — two diagonal tinted panels */
const DEFAULT_OVERLAYS: OverlayImageConfig[] = [
  {
    src: rect5,
    position: "left",
    objectPosition: "left center",
    blendMode: "screen",
    opacity: 1,
  },
  {
    src: rect6,
    position: "right",
    objectPosition: "right center",
    blendMode: "screen",
    opacity: 0.85,
  },
];

export function PageCTA({
  title = "Start Banking with Confidence",
  description = "Take the first step toward achieving your financial goals with the trusted support of Imodi-Imosan Microfinance Bank.",
  buttonText = "Get Started",
  onButtonClick,
  buttonText2,
  onButton2Click,
  backgroundImage,
  overlays = DEFAULT_OVERLAYS,
  gradient = "linear-gradient(135deg, #2667FF00 0%, #2667FF 100%)",
  logoIcon,
  minHeight = "400px",
}: PageCTAProps) {
  const { openModal } = useModal();
  return (
    <section
      className="relative overflow-hidden py-24 text-center"
      style={{ minHeight, background: gradient }}
    >
      {/* Optional background image beneath everything */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image src={backgroundImage} alt="" fill className="object-cover object-center" />
          <div className="absolute inset-0" style={{ background: gradient, opacity: 0.85 }} />
        </div>
      )}

      {/* Overlay images */}
      {overlays.map((cfg, i) => {
        const containerStyle = resolveOverlayContainer(cfg);
        return (
          <div key={i} style={containerStyle} className={cfg.containerClassName}>
            <Image
              src={cfg.src}
              alt=""
              fill
              className="object-cover"
              style={{ objectPosition: cfg.objectPosition ?? "center" }}
            />
          </div>
        );
      })}

      {/* Subtle radial vignette on top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(10,30,90,0.08) 0%, rgba(5,10,40,0.35) 100%)" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-2xl px-6">
        {logoIcon !== undefined ? logoIcon : <DefaultLogoMark />}
        <h2 className="text-3xl font-black text-white md:text-4xl lg:text-5xl">{title}</h2>
        <p className="mt-5 text-base leading-relaxed text-blue-200">{description}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {/* <button
            onClick={onButtonClick ?? openModal}
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-transparent px-9 py-4 text-sm font-semibold text-white shadow-xl backdrop-blur-sm transition hover:bg-white/10 hover:shadow-2xl"
          >
            {buttonText} <ChevronRight className="h-4 w-4" />
          </button>

          {buttonText2 && (
            <button
              onClick={onButton2Click ?? openModal}
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-transparent px-9 py-4 text-sm font-semibold text-white shadow-xl backdrop-blur-sm transition hover:bg-white/10 hover:shadow-2xl"
            >
              {buttonText2} <ChevronRight className="h-4 w-4" />
            </button>
          )} */}
        </div>
      </div>
    </section>
  );
}