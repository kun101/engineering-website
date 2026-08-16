import React from 'react';
import PlanetShader from './PlanetShader';

export default function ResponsiveHeroBanner({
    title = "Engineering Hardware",
    subtitle = "for Deep Tech",
    description = "Catering to companies building in Deep Tech. We help you build Medical Devices, Defense & Aerospace Platforms, Industrial Technology, and more.",
    onOpenRFQ
}) {
    return (
        <section className="w-full isolate min-h-screen overflow-hidden relative bg-black flex flex-col justify-center items-center">
            {/* Real-time WebGL Fragment Shader (Shifted up & far right) */}
            <PlanetShader />

            {/* Subtle Vignette Gradient Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/90 z-[1]" />

            {/* Centered Hero Content */}
            <div 
                className="z-10 relative flex-1 flex flex-col items-center justify-center my-auto w-full"
                style={{ padding: '140px 24px 80px' }}
            >
                <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
                    {/* Headline: Line 1 (Engineering Hardware) fits in 1 single line, Line 2 (for Deep Tech) smaller */}
                    <h1 
                        className="font-bold text-white tracking-tight font-spline animate-fade-slide-in-1"
                        style={{ marginBottom: '24px' }}
                    >
                        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight">
                            {title}
                        </span>
                        <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white/80 mt-2.5 leading-[1.15] tracking-normal">
                            {subtitle}
                        </span>
                    </h1>

                    {/* Narrative Description */}
                    <p 
                        className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto font-spline animate-fade-slide-in-2"
                        style={{ marginBottom: '36px', lineHeight: 1.7 }}
                    >
                        {description}
                    </p>

                    {/* Single "Contact Us" CTA Button (Razor Sharp) */}
                    <div className="flex items-center justify-center animate-fade-slide-in-3">
                        <button
                            onClick={onOpenRFQ}
                            style={{ padding: '14px 36px', fontSize: '15px', borderRadius: 0 }}
                            className="inline-flex items-center justify-center gap-2 hover:bg-neutral-100 font-bold text-neutral-950 bg-white rounded-none font-spline shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all cursor-pointer hover:scale-105"
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
            <div style={{ height: '32px' }}></div>
        </section>
    );
}
