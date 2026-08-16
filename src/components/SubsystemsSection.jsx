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
    desc: 'High-density power distribution units (PDU), radiation-hardened DC-DC converters, energy storage, and isolated gate drivers.',
    standard: 'MIL-STD-704F / ISO 26262'
  },
  {
    id: 2,
    name: 'Thermal Management',
    icon: ThermometerSnowflake,
    scope: 'Active Liquid & Cryo Cooling',
    desc: 'Integrated thermal subsystems incorporating pumped two-phase cooling, micro-channel cold plates, and cryogenic radiator panels.',
    standard: 'NASA-STD-7002B / MIL-STD-810H'
  },
  {
    id: 3,
    name: 'Motion and Actuation',
    icon: Gauge,
    scope: 'Precision Multi-Axis Servo Motion',
    desc: 'Turnkey motion sub-assemblies featuring custom frameless BLDC motors, zero-backlash harmonic drives, and optical encoders.',
    standard: 'DO-254 / ISO 13849'
  },
  {
    id: 4,
    name: 'Avionics and Aerospace',
    icon: Satellite,
    scope: 'Flight Management & Telemetry',
    desc: 'Complete avionics bays engineered for extreme acceleration, shock, and vacuum with redundant flight computer chassis.',
    standard: 'AS9100D / DO-178C'
  },
  {
    id: 5,
    name: 'Navigation and Positioning',
    icon: Compass,
    scope: 'Inertial & Satellite Navigation',
    desc: 'High-precision PNT hardware enclosures, shock-isolated IMU mounts, star tracker baffles, and anti-jam GNSS antenna arrays.',
    standard: 'MIL-STD-461G / DO-229'
  },
  {
    id: 6,
    name: 'Communications',
    icon: Radio,
    scope: 'Optical & RF Tactical Comms',
    desc: 'Free-space optical (FSO) terminals, high-throughput SDR transceivers, low-noise power supplies, and phased-array feeds.',
    standard: 'MIL-STD-188 / CCSDS'
  },
  {
    id: 7,
    name: 'RF & MW (Radiofrequency and Microwave)',
    icon: RadioTower,
    scope: 'High-Power GaN & Beamforming',
    desc: 'Ka/Ku-band modules, solid-state power amplifiers (SSPA), waveguide transitions, and active electronically scanned arrays (AESA).',
    standard: 'MIL-PRF-38534 / IPC-6018'
  },
  {
    id: 8,
    name: 'Computing & Communications',
    icon: Server,
    scope: 'Ruggedized Edge AI & Backplanes',
    desc: 'Conduction-cooled OpenVPX compute racks hosting high-density GPUs, FPGAs, and optical fiber interconnects for extreme environments.',
    standard: 'VITA 65 / FIPS 140-3'
  },
  {
    id: 9,
    name: 'Hydraulic and Propulsion-Support',
    icon: Anchor,
    scope: 'Propulsion Feeds & High Pressure',
    desc: 'Electron-beam welded titanium tanks, ultra-fast thruster solenoid valves, micro-filter assemblies, and pyrotechnic isolation.',
    standard: 'AIAA S-080 / ASME Sec VIII'
  }
];

export default function SubsystemsSection() {
  return (
    <section id="subsystems" className="section-padding subsystems-sticky-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Subsystems</h2>
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
                    <div className="subsystem-standard-badge">{sub.standard}</div>
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
