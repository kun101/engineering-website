import React from 'react';
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
    scope: 'Power Distribution & Conversion',
    desc: 'High-density power distribution units (PDU), radiation-hardened DC-DC converters, energy storage, and isolated gate drivers.'
  },
  {
    id: 2,
    name: 'Thermal Management',
    icon: ThermometerSnowflake,
    scope: 'Active Liquid & Cryo Cooling',
    desc: 'Integrated thermal subsystems incorporating pumped two-phase cooling, micro-channel cold plates, and cryogenic radiator panels.'
  },
  {
    id: 3,
    name: 'Motion and Actuation',
    icon: Gauge,
    scope: 'Precision Multi-Axis Servo Motion',
    desc: 'Turnkey motion sub-assemblies featuring custom frameless BLDC motors, zero-backlash harmonic drives, and optical encoders.'
  },
  {
    id: 4,
    name: 'Avionics and Aerospace',
    icon: Satellite,
    scope: 'Flight Management & Telemetry',
    desc: 'Complete avionics bays engineered for extreme acceleration, shock, and vacuum with redundant flight computer chassis.'
  },
  {
    id: 5,
    name: 'Navigation and Positioning',
    icon: Compass,
    scope: 'Inertial & Satellite Navigation',
    desc: 'High-precision PNT hardware enclosures, shock-isolated IMU mounts, star tracker baffles, and anti-jam GNSS antenna arrays.'
  },
  {
    id: 6,
    name: 'Communications',
    icon: Radio,
    scope: 'Optical & RF Tactical Comms',
    desc: 'Free-space optical (FSO) terminals, high-throughput SDR transceivers, low-noise power supplies, and phased-array feeds.'
  },
  {
    id: 7,
    name: 'RF & MW (Radiofrequency and Microwave)',
    icon: RadioTower,
    scope: 'High-Power GaN & Beamforming',
    desc: 'Ka/Ku-band modules, solid-state power amplifiers (SSPA), waveguide transitions, and active electronically scanned arrays (AESA).'
  },
  {
    id: 8,
    name: 'Computing & Communications',
    icon: Server,
    scope: 'Ruggedized Edge AI & Backplanes',
    desc: 'Conduction-cooled OpenVPX compute racks hosting high-density GPUs, FPGAs, and optical fiber interconnects for extreme environments.'
  },
  {
    id: 9,
    name: 'Hydraulic and Propulsion-Support',
    icon: Anchor,
    scope: 'Propulsion Feeds & High Pressure',
    desc: 'Electron-beam welded titanium tanks, ultra-fast thruster solenoid valves, micro-filter assemblies, and pyrotechnic isolation.'
  }
];

export default function SubsystemsSection() {
  return (
    <section id="subsystems" className="section-padding subsystems-sticky-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title font-playfair">Subsystems</h2>
        </div>

        {/* Integrated Sticky Scrolling Stacking Cards for Subsystems */}
        <div className="subsystems-sticky-container">
          {SUBSYSTEMS_DATA.map((sub, idx) => {
            const Icon = sub.icon;
            return (
              <div 
                key={sub.id} 
                className="sticky-subsystem-card"
                style={{
                  top: `calc(100px + ${idx * 22}px)`,
                  zIndex: idx + 1
                }}
              >
                <div className="sticky-subsystem-inner">
                  <div className="sticky-subsystem-left">
                    <div className="subsystem-icon-box">
                      <Icon size={26} color="#eab308" />
                    </div>
                    <div className="subsystem-scope-pill">{sub.scope}</div>
                  </div>

                  <div className="sticky-subsystem-right">
                    <h3 className="sticky-subsystem-title">{sub.name}</h3>
                    <p className="sticky-subsystem-desc">{sub.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
