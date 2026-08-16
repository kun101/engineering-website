import React from 'react';
import { clsx } from "clsx";
import { motion } from "framer-motion";

export const SUBSYSTEMS_DATA = [
  {
    id: 1,
    name: 'Electrical & Power',
    scope: 'Power Distribution & Conversion',
    desc: 'High-density power distribution units (PDU), radiation-hardened DC-DC converters, energy storage, and isolated gate drivers.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1200',
    colSpan: 'lg:col-span-3'
  },
  {
    id: 2,
    name: 'Thermal Management',
    scope: 'Active Liquid & Cryo Cooling',
    desc: 'Integrated thermal subsystems incorporating pumped two-phase cooling, micro-channel cold plates, and cryogenic radiator panels.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200',
    colSpan: 'lg:col-span-3'
  },
  {
    id: 3,
    name: 'Motion and Actuation',
    scope: 'Precision Multi-Axis Servo Motion',
    desc: 'Turnkey motion sub-assemblies featuring custom frameless BLDC motors, zero-backlash harmonic drives, and optical encoders.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    colSpan: 'lg:col-span-2'
  },
  {
    id: 4,
    name: 'Avionics and Aerospace',
    scope: 'Flight Management & Telemetry',
    desc: 'Complete avionics bays engineered for extreme acceleration, shock, and vacuum with redundant flight computer chassis.',
    image: 'https://images.unsplash.com/photo-1517976487502-5369cb7d4882?auto=format&fit=crop&q=80&w=800',
    colSpan: 'lg:col-span-2'
  },
  {
    id: 5,
    name: 'Navigation and Positioning',
    scope: 'Inertial & Satellite Navigation',
    desc: 'High-precision PNT hardware enclosures, shock-isolated IMU mounts, star tracker baffles, and anti-jam GNSS antenna arrays.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    colSpan: 'lg:col-span-2'
  },
  {
    id: 6,
    name: 'Communications',
    scope: 'Optical & RF Tactical Comms',
    desc: 'Free-space optical (FSO) terminals, high-throughput SDR transceivers, low-noise power supplies, and phased-array feeds.',
    image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80&w=1200',
    colSpan: 'lg:col-span-3'
  },
  {
    id: 7,
    name: 'RF & MW (Radiofrequency and Microwave)',
    scope: 'High-Power GaN & Beamforming',
    desc: 'Ka/Ku-band modules, solid-state power amplifiers (SSPA), waveguide transitions, and active electronically scanned arrays (AESA).',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200',
    colSpan: 'lg:col-span-3'
  },
  {
    id: 8,
    name: 'Computing & Communications',
    scope: 'Ruggedized Edge AI & Backplanes',
    desc: 'Conduction-cooled OpenVPX compute racks hosting high-density GPUs, FPGAs, and optical fiber interconnects for extreme environments.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200',
    colSpan: 'lg:col-span-3'
  },
  {
    id: 9,
    name: 'Hydraulic and Propulsion-Support',
    scope: 'Propulsion Feeds & High Pressure',
    desc: 'Electron-beam welded titanium tanks, ultra-fast thruster solenoid valves, micro-filter assemblies, and pyrotechnic isolation.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
    colSpan: 'lg:col-span-3'
  }
];

export default function SubsystemsSection() {
  return (
    <section id="subsystems" className="py-24 container mx-auto px-6 max-w-7xl">
      <div className="flex flex-col mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-spline">
          Subsystems
        </h2>
        <p className="max-w-3xl text-lg sm:text-xl font-medium tracking-tight mt-3 text-white/70 font-spline">
          Integrated, multi-disciplinary mission-critical assemblies engineered for Deep Tech platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-6">
        {SUBSYSTEMS_DATA.map((sub) => (
          <motion.div
            key={sub.id}
            initial="idle"
            whileHover="active"
            variants={{ idle: {}, active: {} }}
            className={clsx(
              sub.colSpan,
              "group relative flex flex-col overflow-hidden rounded-none",
              "bg-zinc-950/80 border border-white/10 shadow-lg transition-all duration-300 hover:border-[#eab308]/50"
            )}
            style={{ borderRadius: 0 }}
          >
            {/* Graphic Image Area */}
            <div className="relative h-[22rem] shrink-0 overflow-hidden bg-black" style={{ borderRadius: 0 }}>
              <img
                src={sub.image}
                alt={sub.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-luminosity hover:mix-blend-normal"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent opacity-80 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent opacity-90 pointer-events-none" />
            </div>

            {/* Bottom Content Area */}
            <div 
              className="relative p-8 z-20 isolate mt-[-80px] backdrop-blur-xl bg-zinc-950/80 border-t border-white/5 text-white flex-1 flex flex-col justify-between"
              style={{ borderRadius: 0 }}
            >
              <div>
                <div className="text-[#eab308] text-xs font-semibold uppercase tracking-widest font-spline">
                  {sub.scope}
                </div>
                <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#eab308] transition-colors font-spline">
                  {sub.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300 font-spline">
                  {sub.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
