import React from 'react';
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { 
  Zap, 
  ThermometerSnowflake, 
  Gauge, 
  Satellite, 
  Compass, 
  Radio, 
  RadioTower, 
  Server, 
  Anchor 
} from 'lucide-react';

export const SUBSYSTEMS_DATA = [
  {
    id: 1,
    name: 'Electrical & Power',
    icon: Zap,
    desc: 'High-density power distribution units (PDU), radiation-hardened DC-DC converters, energy storage, and isolated gate drivers.',
    colSpan: 'lg:col-span-3'
  },
  {
    id: 2,
    name: 'Thermal Management',
    icon: ThermometerSnowflake,
    desc: 'Integrated thermal subsystems incorporating pumped two-phase cooling, micro-channel cold plates, and cryogenic radiator panels.',
    colSpan: 'lg:col-span-3'
  },
  {
    id: 3,
    name: 'Motion and Actuation',
    icon: Gauge,
    desc: 'Turnkey motion sub-assemblies featuring custom frameless BLDC motors, zero-backlash harmonic drives, and optical encoders.',
    colSpan: 'lg:col-span-2'
  },
  {
    id: 4,
    name: 'Avionics and Aerospace',
    icon: Satellite,
    desc: 'Complete avionics bays engineered for extreme acceleration, shock, and vacuum with redundant flight computer chassis.',
    colSpan: 'lg:col-span-2'
  },
  {
    id: 5,
    name: 'Navigation and Positioning',
    icon: Compass,
    desc: 'High-precision PNT hardware enclosures, shock-isolated IMU mounts, star tracker baffles, and anti-jam GNSS antenna arrays.',
    colSpan: 'lg:col-span-2'
  },
  {
    id: 6,
    name: 'Communications',
    icon: Radio,
    desc: 'Free-space optical (FSO) terminals, high-throughput SDR transceivers, low-noise power supplies, and phased-array feeds.',
    colSpan: 'lg:col-span-3'
  },
  {
    id: 7,
    name: 'RF & MW (Radiofrequency and Microwave)',
    icon: RadioTower,
    desc: 'Ka/Ku-band modules, solid-state power amplifiers (SSPA), waveguide transitions, and active electronically scanned arrays (AESA).',
    colSpan: 'lg:col-span-3'
  },
  {
    id: 8,
    name: 'Computing & Communications',
    icon: Server,
    desc: 'Conduction-cooled OpenVPX compute racks hosting high-density GPUs, FPGAs, and optical fiber interconnects for extreme environments.',
    colSpan: 'lg:col-span-3'
  },
  {
    id: 9,
    name: 'Hydraulic and Propulsion-Support',
    icon: Anchor,
    desc: 'Electron-beam welded titanium tanks, ultra-fast thruster solenoid valves, micro-filter assemblies, and pyrotechnic isolation.',
    colSpan: 'lg:col-span-3'
  }
];

export default function SubsystemsSection() {
  return (
    <section id="subsystems" className="pt-40 sm:pt-48 pb-32 container mx-auto px-6 max-w-7xl">
      {/* Center-aligned Section Header with generous top breathing room */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-spline">
          Subsystems
        </h2>
        <p className="text-lg sm:text-xl font-medium tracking-tight mt-4 text-white/70 font-spline">
          Integrated, multi-disciplinary mission-critical assemblies engineered for Deep Tech platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-6">
        {SUBSYSTEMS_DATA.map((sub) => {
          const Icon = sub.icon;
          return (
            <motion.div
              key={sub.id}
              initial="idle"
              whileHover="active"
              variants={{ idle: {}, active: {} }}
              className={clsx(
                sub.colSpan,
                "group relative flex flex-col justify-between overflow-hidden rounded-none p-8",
                "bg-zinc-950/80 border border-white/10 shadow-lg transition-all duration-300 hover:border-[#eab308]/50 hover:bg-zinc-900/60"
              )}
              style={{ borderRadius: 0, minHeight: '230px' }}
            >
              <div>
                <div className="mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#eab308]/10 border border-[#eab308]/20 group-hover:border-[#eab308] group-hover:bg-[#eab308]/20 transition-all duration-300 shadow-md">
                    <Icon size={24} className="text-[#eab308] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#eab308] transition-colors font-spline">
                  {sub.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300 font-spline">
                  {sub.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
