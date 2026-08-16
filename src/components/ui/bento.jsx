import React from "react";
import { clsx } from "clsx";
import { motion } from "framer-motion";

export default function FUIBentoGridDark() {
  return (
    <section id="components" className="py-24 container mx-auto px-6 max-w-7xl">
      <div className="flex flex-col mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-instrument-serif">
          Components
        </h2>
        <p className="max-w-3xl text-lg sm:text-xl font-medium tracking-tight mt-3 text-white/70">
          Precision-engineered hardware building blocks manufactured to extreme tolerances.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-6 lg:grid-rows-3">
        {/* 1. Electronics */}
        <BentoCard
          eyebrow={<span className="text-[#eab308] text-xs font-semibold uppercase tracking-widest">01 / Microelectronics</span>}
          title="Electronics"
          description="High-density multi-layer PCB assembly, rigid-flex circuitry, and ruggedized microelectronics engineered for extreme operating environments."
          graphic={
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200"
              alt="Electronics"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-luminosity hover:mix-blend-normal"
            />
          }
          className="lg:col-span-3 rounded-2xl"
        />

        {/* 2. Precision Machining & Mechanical */}
        <BentoCard
          eyebrow={<span className="text-[#eab308] text-xs font-semibold uppercase tracking-widest">02 / Sub-Micron</span>}
          title="Precision Machining & Mechanical"
          description="5-axis CNC milling, Swiss micro-turning, wire EDM, and sub-micron structural enclosures."
          graphic={
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200"
              alt="Precision Machining"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-luminosity hover:mix-blend-normal"
            />
          }
          className="lg:col-span-3 rounded-2xl"
        />

        {/* 3. Thermal Management */}
        <BentoCard
          eyebrow={<span className="text-[#eab308] text-xs font-semibold uppercase tracking-widest">03 / Active Cooling</span>}
          title="Thermal Management"
          description="Microchannel cold plates, vapor chambers, and cryogenic phase-change thermal loops."
          graphic={
            <img
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800"
              alt="Thermal Management"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-luminosity hover:mix-blend-normal"
            />
          }
          className="lg:col-span-2 rounded-2xl"
        />

        {/* 4. Fluid Systems */}
        <BentoCard
          eyebrow={<span className="text-[#eab308] text-xs font-semibold uppercase tracking-widest">04 / Hermetic</span>}
          title="Fluid Systems"
          description="High-pressure diffusion-bonded manifolds, proportional micro-valves, and hermetic fluidics."
          graphic={
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
              alt="Fluid Systems"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-luminosity hover:mix-blend-normal"
            />
          }
          className="lg:col-span-2 rounded-2xl"
        />

        {/* 5. Actuation and Motion */}
        <BentoCard
          eyebrow={<span className="text-[#eab308] text-xs font-semibold uppercase tracking-widest">05 / Dynamics</span>}
          title="Actuation and Motion"
          description="Frameless torque motors, zero-backlash harmonic drives, and precision linear stages."
          graphic={
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
              alt="Actuation and Motion"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-luminosity hover:mix-blend-normal"
            />
          }
          className="lg:col-span-2 rounded-2xl"
        />

        {/* 6. Avionics and Aerospace */}
        <BentoCard
          eyebrow={<span className="text-[#eab308] text-xs font-semibold uppercase tracking-widest">06 / Flight Grade</span>}
          title="Avionics and Aerospace"
          description="Radiation-hardened flight chassis, CubeSat structures, and space-grade harness assemblies."
          graphic={
            <img
              src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1200"
              alt="Avionics & Aerospace"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-luminosity hover:mix-blend-normal"
            />
          }
          className="lg:col-span-3 rounded-2xl"
        />

        {/* 7. Materials */}
        <BentoCard
          eyebrow={<span className="text-[#eab308] text-xs font-semibold uppercase tracking-widest">07 / Advanced Alloys</span>}
          title="Materials"
          description="Refractory superalloys, advanced technical ceramics, additive metals, and composite structures."
          graphic={
            <img
              src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1200"
              alt="Materials"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-luminosity hover:mix-blend-normal"
            />
          }
          className="lg:col-span-3 rounded-2xl"
        />
      </div>
    </section>
  );
}

export function BentoCard({
  dark = false,
  className = "",
  eyebrow,
  title,
  description,
  graphic,
  fade = ["bottom"],
}) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? "true" : undefined}
      className={clsx(
        className,
        "group relative flex flex-col overflow-hidden",
        "bg-zinc-950/80 border border-white/10 shadow-lg transition-all duration-300 hover:border-[#eab308]/50"
      )}
    >
      <div className="relative h-[22rem] shrink-0 overflow-hidden bg-black">
        {graphic}
        {fade.includes("top") && (
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent opacity-80 pointer-events-none" />
        )}
        {fade.includes("bottom") && (
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent opacity-90 pointer-events-none" />
        )}
      </div>
      <div className="relative p-8 z-20 isolate mt-[-80px] backdrop-blur-xl bg-zinc-950/80 border-t border-white/5 text-white flex-1 flex flex-col justify-between">
        <div>
          <div>{eyebrow}</div>
          <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#eab308] transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
