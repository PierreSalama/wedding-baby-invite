import type { CSSProperties, ReactNode } from "react";
import { content } from "../content";
import { RingsIcon, FootstepsIcon } from "./decor";
import heroBg from "../assets/hero-custom.png";

const HERO_BG = heroBg;
export const DEFAULT_MOBILE_HERO_POSITION = { x: 54, y: 43 };
export const DEFAULT_DESKTOP_HERO_POSITION = { x: 56, y: 50 };

type HeroPreviewMode = "live" | "mobile" | "desktop";

type HeroCoverSectionProps = {
  previewMode?: HeroPreviewMode;
  mobileBackgroundPosition?: string;
  desktopBackgroundPosition?: string;
  className?: string;
  children?: ReactNode;
};

type HeroBackgroundStyle = CSSProperties & {
  "--hero-bg-mobile-position"?: string;
  "--hero-bg-desktop-position"?: string;
};

export function formatHeroBackgroundPosition(x: number, y: number) {
  return `${x}% ${y}%`;
}

function HeartDividerWhite({ width = 60 }: { width?: number }) {
  return (
    <div className="flex items-center justify-center" aria-hidden>
      <span className="h-px bg-ivory/60" style={{ width }} />
      <svg width="14" height="13" viewBox="0 0 14 13" className="mx-3 text-eucalyptus" fill="currentColor">
        <path d="M 7 12.5 C 7 12.5 0.5 8 0.5 4 C 0.5 1.5 2 0.5 3.5 0.5 C 5 0.5 7 2 7 3.5 C 7 2 9 0.5 10.5 0.5 C 12 0.5 13.5 1.5 13.5 4 C 13.5 8 7 12.5 7 12.5 Z" />
      </svg>
      <span className="h-px bg-ivory/60" style={{ width }} />
    </div>
  );
}

export function HeroCoverSection({
  previewMode = "live",
  mobileBackgroundPosition = formatHeroBackgroundPosition(
    DEFAULT_MOBILE_HERO_POSITION.x,
    DEFAULT_MOBILE_HERO_POSITION.y,
  ),
  desktopBackgroundPosition = formatHeroBackgroundPosition(
    DEFAULT_DESKTOP_HERO_POSITION.x,
    DEFAULT_DESKTOP_HERO_POSITION.y,
  ),
  className,
  children,
}: HeroCoverSectionProps) {
  const backgroundStyle: HeroBackgroundStyle = {
    backgroundImage:
      `linear-gradient(rgba(40,60,38,0.62), rgba(28,46,30,0.78)), url('${HERO_BG}')`,
    "--hero-bg-mobile-position": mobileBackgroundPosition,
    "--hero-bg-desktop-position": desktopBackgroundPosition,
  };

  return (
    <section
      id="cover"
      className={`page relative overflow-hidden flex items-center justify-center text-center px-6 py-14 ${className ?? ""}`}
    >
      <div
        data-hero-preview={previewMode}
        className="hero-cover-bg absolute inset-0 bg-cover bg-no-repeat"
        style={backgroundStyle}
      />

      <div className="relative z-10 max-w-md w-full flex flex-col items-center gap-5">
        {/* tiny heart */}
        <svg width="22" height="20" viewBox="0 0 22 20" className="text-eucalyptus" fill="currentColor" aria-hidden>
          <path d="M 11 19 C 11 19 1 13 1 7 C 1 3.5 3 1 5.5 1 C 8 1 11 3.5 11 6 C 11 3.5 14 1 16.5 1 C 19 1 21 3.5 21 7 C 21 13 11 19 11 19 Z" />
        </svg>

        <p className="tracking-label text-eucalyptus drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
          {content.frontCover.intro}
        </p>

        <h1
          className="script text-ivory leading-[0.85] drop-shadow-[0_3px_10px_rgba(0,0,0,0.6)]"
          style={{ fontSize: "clamp(4rem, 17vw, 6.5rem)" }}
        >
          {content.frontCover.title}
        </h1>

        <HeartDividerWhite width={50} />

        <p className="tracking-label text-eucalyptus leading-snug drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
          {content.frontCover.honoring[0]} <br />
          {content.frontCover.honoring[1]}
        </p>

        <div className="grid grid-cols-2 gap-6 sm:gap-10 mt-2 w-full max-w-[18rem] sm:max-w-[21rem] items-start">
          <div className="flex flex-col items-center gap-2">
            <p className="tracking-label text-botanical text-center whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]">
              Wedding
            </p>
            <RingsIcon className="w-16 sm:w-20" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="tracking-label text-botanical text-center whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]">
              Gender Reveal
            </p>
            <FootstepsIcon className="w-14 sm:w-16" />
          </div>
        </div>

        <p
          className="script text-ivory leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          style={{
            fontSize: "clamp(2.2rem, 8vw, 3rem)",
            fontFamily: '"Sacramento", cursive',
          }}
        >
          {content.names.bride}{" "}
          <span className="text-eucalyptus">&</span>{" "}
          {content.names.groom}
        </p>

        <p className="tracking-label text-eucalyptus mt-3 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
          {content.frontCover.closing}
        </p>

        {children}
      </div>
    </section>
  );
}

export function FrontCover() {
  return (
    <HeroCoverSection
      mobileBackgroundPosition={formatHeroBackgroundPosition(54, 43)}
      desktopBackgroundPosition={formatHeroBackgroundPosition(56, 50)}
    />
  );
}
