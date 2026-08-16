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
    ctaButtonHref?: string;
    badgeText?: string;
    badgeLabel?: string;
    title?: string;
    titleLine2?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
    onOpenRFQ?: () => void;
}

export const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
    logoUrl = "/logoEngineering.svg",
    backgroundImageUrl = "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e2dbea0-c0a9-413f-a57b-af279633c0df_3840w.jpg",
    navLinks = [
        { label: "Home", href: "#", isActive: true },
        { label: "Components", href: "#components" },
        { label: "Subsystems", href: "#subsystems" },
        { label: "Technology", href: "#components" },
        { label: "Capabilities", href: "#subsystems" }
    ],
    ctaButtonText = "Reserve Seat",
    badgeLabel = "New",
    badgeText = "Deep Tech Precision Manufacturing 2026",
    title = "MedPrax Engineering",
    titleLine2 = "Hardware for Deep Tech",
    description = "Catering to companies building in Deep Tech. We help you build Medical Devices, Defense & Aerospace Platforms, Industrial Technology, and more. We will help companies manufacture.",
    primaryButtonText = "Request Engineering Review",
    secondaryButtonText = "Watch Launch",
    secondaryButtonHref = "#components",
    onOpenRFQ
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <section className="w-full isolate min-h-screen overflow-hidden relative bg-black flex flex-col justify-between">
            {/* Background Solar Arc Flare Image */}
            <img
                src={backgroundImageUrl}
                alt=""
                className="w-full h-full object-cover object-center absolute inset-0 z-0 pointer-events-none"
            />
            {/* Gradient Overlay for Legibility */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/70 z-[1]" />

            {/* Header Navigation */}
            <header className="z-20 relative w-full pt-6">
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                    <a
                        href="#"
                        className="inline-flex items-center"
                        aria-label="MedPrax Engineering"
                    >
                        <img src={logoUrl} alt="MedPrax Engineering" className="h-9 w-auto" />
                    </a>

                    <nav className="hidden md:flex items-center gap-2">
                        <div className="flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 ring-1 ring-white/10 backdrop-blur">
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className={`px-3.5 py-1.5 text-sm font-medium hover:text-white font-sans transition-colors ${
                                        link.isActive ? 'text-white/90' : 'text-white/70'
                                    }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <button
                                onClick={onOpenRFQ}
                                className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-neutral-950 hover:bg-white/90 font-sans transition-colors cursor-pointer"
                            >
                                <span>{ctaButtonText}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                                    <path d="M7 7h10v10" />
                                    <path d="M7 17 17 7" />
                                </svg>
                            </button>
                        </div>
                    </nav>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur text-white"
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
                    <div className="md:hidden mx-6 mt-3 p-4 bg-zinc-950/95 backdrop-blur-md rounded-2xl border border-white/10 flex flex-col gap-3">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-sm font-medium text-white/80 hover:text-white px-2 py-1"
                            >
                                {link.label}
                            </a>
                        ))}
                        <button
                            onClick={() => { setMobileMenuOpen(false); onOpenRFQ?.(); }}
                            className="w-full bg-white text-neutral-950 font-semibold py-2 rounded-full text-sm text-center"
                        >
                            {ctaButtonText}
                        </button>
                    </div>
                )}
            </header>

            {/* Centered Main Banner Content */}
            <div className="z-10 relative flex-1 flex flex-col items-center justify-center my-auto py-20 px-6">
                <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
                    {/* Badge */}
                    <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-white/15 backdrop-blur animate-fade-slide-in-1">
                        <span className="inline-flex items-center text-xs font-semibold text-neutral-900 bg-white/90 rounded-full py-0.5 px-2.5 font-sans">
                            {badgeLabel}
                        </span>
                        <span className="text-sm font-medium text-white/90 font-sans">
                            {badgeText}
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight leading-[1.08] mb-6 font-instrument-serif animate-fade-slide-in-2">
                        {title}
                        <br />
                        {titleLine2}
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-lg animate-fade-slide-in-3 text-white/80 max-w-2xl mx-auto leading-relaxed mb-10 font-sans">
                        {description}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row sm:gap-4 gap-3 items-center justify-center animate-fade-slide-in-4 w-full">
                        <button
                            onClick={onOpenRFQ}
                            className="inline-flex items-center justify-center gap-2 hover:bg-white/15 text-sm font-medium text-white bg-white/10 ring-white/15 ring-1 rounded-full py-3 px-6 font-sans backdrop-blur transition-all cursor-pointer"
                        >
                            <span>{primaryButtonText}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </button>
                        <a
                            href={secondaryButtonHref}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-transparent px-5 py-3 text-sm font-medium text-white/90 hover:text-white font-sans transition-colors"
                        >
                            <span>{secondaryButtonText}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Padding spacer (no brand logos) */}
            <div className="h-12"></div>
        </section>
    );
};

export default ResponsiveHeroBanner;
