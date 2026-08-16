"use client";

import React, { useState } from 'react';

export interface NavLink {
    label: string;
    href: string;
    isActive?: boolean;
}

export interface ResponsiveHeroBannerProps {
    logoUrl?: string;
    backgroundImageUrl?: string;
    navLinks?: NavLink[];
    ctaButtonText?: string;
    badgeText?: string;
    badgeLabel?: string;
    title?: string;
    titleLine2?: string;
    description?: string;
    onOpenRFQ?: () => void;
}

export const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
    logoUrl = "/logoEngineering.svg",
    backgroundImageUrl = "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e2dbea0-c0a9-413f-a57b-af279633c0df_3840w.jpg",
    navLinks = [
        { label: "Components", href: "#components" },
        { label: "Subsystems", href: "#subsystems" }
    ],
    ctaButtonText = "Contact Us",
    badgeLabel = "New",
    badgeText = "Deep Tech Precision Manufacturing 2026",
    title = "MedPrax Engineering",
    titleLine2 = "Hardware for Deep Tech",
    description = "Catering to companies building in Deep Tech. We help you build Medical Devices, Defense & Aerospace Platforms, Industrial Technology, and more. We will help companies manufacture.",
    onOpenRFQ
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <section className="w-full isolate min-h-screen overflow-hidden relative bg-black flex flex-col justify-between">
            {/* Background Solar Arc Flare Image */}
            <img
                src={backgroundImageUrl}
                alt="Background Flare"
                className="w-full h-full object-cover object-center absolute inset-0 z-0 pointer-events-none"
            />
            {/* Subtle Vignette Gradient Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 z-[1]" />

            {/* Unified Floating Navbar Pill (Logo + Links + Button in the same pill) */}
            <header className="fixed top-6 left-0 right-0 z-30 flex flex-col items-center px-4">
                <div className="flex items-center gap-4 sm:gap-6 rounded-full bg-neutral-950/85 border border-white/20 px-3 sm:px-4 py-2 backdrop-blur-2xl shadow-2xl ring-1 ring-white/10">
                    {/* Brand Logo inside the pill */}
                    <a
                        href="#"
                        className="inline-flex items-center pl-2 pr-1"
                        aria-label="MedPrax Engineering"
                    >
                        <img src={logoUrl} alt="MedPrax Engineering" className="h-7 sm:h-8 w-auto" />
                    </a>

                    {/* Navigation Links inside the pill */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className={`px-4 py-2 text-sm font-medium hover:text-white font-sans transition-colors rounded-full ${
                                    link.isActive ? 'text-white font-semibold' : 'text-neutral-300'
                                }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button inside the pill with proper padding */}
                    <button
                        onClick={onOpenRFQ}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-neutral-950 hover:bg-neutral-100 font-sans transition-all cursor-pointer shadow-md hover:scale-105"
                    >
                        <span>{ctaButtonText}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                            <path d="M7 7h10v10" />
                            <path d="M7 17 17 7" />
                        </svg>
                    </button>

                    {/* Mobile Hamburger toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white"
                        aria-expanded={mobileMenuOpen}
                        aria-label="Toggle menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 5h16" />
                            <path d="M4 12h16" />
                            <path d="M4 19h16" />
                        </svg>
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden mt-3 p-4 bg-neutral-950/95 backdrop-blur-2xl rounded-2xl border border-white/20 flex flex-col gap-3 shadow-2xl max-w-xs w-full">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-sm font-medium text-white/80 hover:text-white px-3 py-2 text-center"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </header>

            {/* Centered Hero Content */}
            <div className="z-10 relative flex-1 flex flex-col items-center justify-center my-auto py-28 sm:py-36 px-6">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    {/* Badge */}
                    <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-neutral-900/80 border border-white/20 px-3.5 py-1.5 backdrop-blur-xl shadow-lg animate-fade-slide-in-1">
                        <span className="inline-flex items-center text-xs font-bold text-neutral-950 bg-white rounded-full py-0.5 px-2.5 font-sans tracking-wide uppercase">
                            {badgeLabel}
                        </span>
                        <span className="text-sm font-medium text-white/90 font-sans">
                            {badgeText}
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-normal leading-[1.1] mb-8 font-instrument-serif animate-fade-slide-in-2">
                        {title}
                        <br />
                        {titleLine2}
                    </h1>

                    {/* Narrative Description */}
                    <p className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed mb-10 font-sans animate-fade-slide-in-3">
                        {description}
                    </p>

                    {/* Single "Contact Us" CTA Button with generous padding */}
                    <div className="flex items-center justify-center animate-fade-slide-in-4">
                        <button
                            onClick={onOpenRFQ}
                            className="inline-flex items-center justify-center gap-2 hover:bg-neutral-100 text-sm sm:text-base font-bold text-neutral-950 bg-white rounded-full py-3.5 px-8 font-sans shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all cursor-pointer hover:scale-105"
                        >
                            <span>Contact Us</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Spacer */}
            <div className="h-12"></div>
        </section>
    );
};

export default ResponsiveHeroBanner;
