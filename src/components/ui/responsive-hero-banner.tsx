import React, { useState } from 'react';
import MoltenMetal from '../MoltenMetal';

export interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface ResponsiveHeroBannerProps {
  logoUrl?: string;
  navLinks?: NavLink[];
  ctaButtonText?: string;
  badgeLabel?: string;
  badgeText?: string;
  title?: string;
  titleLine2?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  onOpenRFQ?: () => void;
}

export const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
  logoUrl = "/logoEngineering.svg",
  navLinks = [
    { label: "Components", href: "#components", isActive: true },
    { label: "Subsystems", href: "#subsystems" }
  ],
  ctaButtonText = "Request RFQ",
  badgeLabel = "Deep Tech",
  badgeText = "Precision Engineering & Manufacturing",
  title = "MedPrax Engineering",
  titleLine2 = "Hardware & Deep Tech Systems",
  description = "Catering to companies building in Deep Tech. We help you build Medical Devices, Defense & Aerospace Platforms, Industrial Technology, and more. We will help companies manufacture.",
  primaryButtonText = "Request Engineering Review",
  secondaryButtonText = "Explore Components",
  secondaryButtonHref = "#components",
  onOpenRFQ
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="w-full isolate min-h-screen overflow-hidden relative bg-black flex flex-col justify-between">
      {/* Background Molten Metal Dynamic Flow */}
      <div className="absolute inset-0 z-0 opacity-95 pointer-events-none">
        <MoltenMetal
          color1="#000000"
          color2="#eab308"
          color3="#ffffff"
          speed={0.34}
          scale={3.6}
          detail={4}
          glow={2.0}
          coreSize={0.13}
          swirl={1.15}
          fold={-0.20}
          blackPoint={0.03}
          brightness={1.5}
          colorMode="molten"
          grain={true}
          grainIntensity={0.04}
          mouseInteraction={false}
          mouseStrength={0}
          opacity={0.96}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.7)_60%,rgba(0,0,0,0.95)_100%)] pointer-events-none" />
      </div>

      {/* Header Navigation */}
      <header className="z-20 relative w-full pt-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <a href="#" className="inline-flex items-center" aria-label="MedPrax Engineering">
              <img src={logoUrl} alt="MedPrax Engineering" className="h-9 w-auto" />
            </a>

            <nav className="hidden md:flex items-center gap-2">
              <div className="flex items-center gap-1 bg-black/60 px-2 py-1.5 border border-zinc-800 backdrop-blur-md">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="px-3.5 py-1.5 text-sm font-medium text-zinc-300 hover:text-[#eab308] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={onOpenRFQ}
                  className="ml-2 inline-flex items-center gap-2 bg-[#eab308] hover:bg-[#facc15] px-4 py-1.5 text-sm font-bold text-black transition-colors"
                >
                  <span>{ctaButtonText}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </button>
              </div>
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center bg-black/60 border border-zinc-800 backdrop-blur text-white"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 p-4 bg-zinc-950 border border-zinc-800 flex flex-col gap-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-zinc-300 hover:text-[#eab308]"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenRFQ?.(); }}
                className="w-full bg-[#eab308] py-2 text-sm font-bold text-black text-center"
              >
                {ctaButtonText}
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Hero Content */}
      <div className="z-10 relative flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-3 bg-black/80 px-3 py-1.5 border border-zinc-800 backdrop-blur">
              <span className="inline-flex items-center text-xs font-bold text-black bg-[#eab308] py-0.5 px-2 tracking-wider uppercase">
                {badgeLabel}
              </span>
              <span className="text-sm font-medium text-zinc-300">
                {badgeText}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              {title}
              <span className="block text-[#eab308] mt-2 sm:mt-1">{titleLine2}</span>
            </h1>

            {/* Narrative Description */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-10">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md">
              <button
                onClick={onOpenRFQ}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#eab308] hover:bg-[#facc15] text-black font-bold text-base py-3.5 px-8 shadow-[0_0_25px_rgba(234,179,8,0.3)] transition-all cursor-pointer"
              >
                <span>{primaryButtonText}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>

              <a
                href={secondaryButtonHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-zinc-900 border border-zinc-700 text-white font-medium text-base py-3.5 px-6 transition-colors"
              >
                <span>{secondaryButtonText}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-8"></div>
    </section>
  );
};

export default ResponsiveHeroBanner;
