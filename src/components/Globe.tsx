'use client';

import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.1],
      markerColor: [1, 0, 0.34], // KROMIQ Primary Red
      glowColor: [0.1, 0.1, 0.1],
      markers: [
        // Mumbai (Primary base)
        { location: [19.076, 72.877], size: 0.1 },
        // New York
        { location: [40.7128, -74.006], size: 0.05 },
        // London
        { location: [51.5074, -0.1278], size: 0.05 },
        // Dubai
        { location: [25.2048, 55.2708], size: 0.05 },
        // Singapore
        { location: [1.3521, 103.8198], size: 0.05 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be mutated in each render.
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="relative w-full max-w-[600px] aspect-square mx-auto">
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: '100%', aspectRatio: '1' }}
        className="opacity-80"
      />
      {/* Dynamic Glow Overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-primary/5 to-transparent blur-3xl pointer-events-none -z-10" />
    </div>
  );
}
