import React, { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';

const vertex = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `#version 300 es
precision highp float;

uniform vec2 iResolution;
uniform float iTime;
out vec4 fragColor;

// Procedural hash for subtle grain
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec2 uv = gl_FragCoord.xy / iResolution.xy;
  float aspect = iResolution.x / iResolution.y;
  
  // Aspect-corrected coordinate space
  vec2 p = uv;
  p.x *= aspect;

  // Planet sphere center and radius shifted to the FAR RIGHT
  // Prevents intersection with centered hero headline text
  vec2 center = vec2(aspect * 0.42, -0.82);
  float radius = 1.85;

  // Distance from center of the planet
  float d = length(p - center);
  float rimDist = abs(d - radius);

  // Angle around the planet center
  float angle = atan(p.y - center.y, p.x - center.x);
  
  // Normalized angle along the visible arc [0.0 (top right) -> 1.0 (bottom right)]
  float t = (angle - 0.45) / 0.75;

  // Primary light pulse traveling along the circular rim
  float speed = 0.22;
  float pos1 = fract(iTime * speed);
  float dist1 = abs(t - pos1);
  if (dist1 > 0.5) dist1 = 1.0 - dist1;
  float lightPulse1 = exp(-dist1 * dist1 * 120.0) * 3.8 + exp(-dist1 * dist1 * 25.0) * 1.6;

  // Secondary cascading pulse
  float pos2 = fract(iTime * speed + 0.5);
  float dist2 = abs(t - pos2);
  if (dist2 > 0.5) dist2 = 1.0 - dist2;
  float lightPulse2 = exp(-dist2 * dist2 * 90.0) * 2.2 + exp(-dist2 * dist2 * 18.0) * 0.9;

  // Total light intensity along the arc
  float totalPulse = (lightPulse1 + lightPulse2) * smoothstep(-0.1, 0.2, t) * smoothstep(1.2, 0.8, t);

  // Atmospheric coronal glow components
  float coreRim = exp(-rimDist * 220.0) * 1.5; // Intense razor-thin white core
  float innerGlow = exp(-rimDist * 45.0) * 1.2; // Bright yellow inner atmospheric limb
  float outerCorona = exp(-rimDist * 14.0) * 0.8; // Warm orange solar coronal haze
  float deepHalo = exp(-rimDist * 4.5) * 0.45; // Broad ambient deep space glow

  // Modulate coronal glow by the moving light pulses
  float dynamicCore = coreRim * (1.0 + totalPulse * 2.5);
  float dynamicInner = innerGlow * (1.0 + totalPulse * 1.8);
  float dynamicOuter = outerCorona * (1.0 + totalPulse * 1.2);
  float dynamicHalo = deepHalo * (1.0 + totalPulse * 0.8);

  // Color layers
  vec3 col = vec3(0.012, 0.012, 0.015); // Cosmic void base
  
  // Ambient halo
  col += vec3(0.9, 0.35, 0.05) * dynamicHalo;
  
  // Solar orange corona
  col += vec3(1.0, 0.48, 0.08) * dynamicOuter;
  
  // Golden yellow atmospheric band
  col += vec3(1.0, 0.82, 0.2) * dynamicInner;
  
  // Pure white/gold laser core
  col += vec3(1.0, 0.98, 0.9) * dynamicCore;

  // Planet body occlusion (dark shadow inside the limb)
  if (d < radius) {
    float depth = (radius - d) / radius;
    float bodyOcclusion = smoothstep(0.0, 0.08, depth);
    col = mix(col, vec3(0.008, 0.008, 0.012), bodyOcclusion * 0.85);
  }

  // Subtle film grain
  float grain = hash(gl_FragCoord.xy + fract(iTime)) * 0.035;
  col += grain;

  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;

export default function PlanetShader() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer;
    let gl;
    try {
      renderer = new Renderer({
        alpha: true,
        antialias: true,
        dpr: Math.min(window.devicePixelRatio, 2),
      });
      gl = renderer.gl;
    } catch (e) {
      console.error("WebGL 2 not supported", e);
      return;
    }

    container.appendChild(gl.canvas);
    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';
    gl.canvas.style.position = 'absolute';
    gl.canvas.style.inset = '0';
    gl.canvas.style.objectFit = 'cover';

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: [container.clientWidth, container.clientHeight] },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    let animationFrameId;
    const startTime = performance.now();

    const resize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      program.uniforms.iResolution.value = [width, height];
    };

    window.addEventListener('resize', resize);
    resize();

    const update = () => {
      const elapsed = (performance.now() - startTime) * 0.001;
      program.uniforms.iTime.value = elapsed;
      renderer.render({ scene: mesh });
      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
      if (gl.canvas && gl.canvas.parentNode) {
        gl.canvas.parentNode.removeChild(gl.canvas);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    />
  );
}
