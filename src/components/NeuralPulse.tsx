'use client';

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const Particle = ({ delay, custom }: { delay: number; custom: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.1, 0.4, 0.1],
        scale: [1, 1.2, 1],
        x: [0, Math.sin(custom) * 30, 0],
        y: [0, Math.cos(custom) * 30, 0],
      }}
      transition={{
        duration: 5 + (custom % 5),
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
      className="absolute w-1 h-1 bg-primary rounded-full blur-[1px]"
      style={{
        left: `${(custom * 7) % 100}%`,
        top: `${(custom * 13) % 100}%`,
      }}
    />
  );
};

export default function NeuralPulse() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseX = useSpring(mousePos.x, springConfig);
  const mouseY = useSpring(mousePos.y, springConfig);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-[700px] aspect-square mx-auto flex items-center justify-center cursor-crosshair group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Neural Particles Swarm - Only render after mounting to avoid hydration mismatch */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && [...Array(40)].map((_, i) => (
          <Particle key={i} delay={(i * 0.1) % 5} custom={i} />
        ))}
      </div>

      {/* Main Nexus Architecture */}
      <motion.div 
        style={{ rotateX, rotateY, perspective: 1000 }}
        className="relative w-[300px] md:w-[450px] aspect-square"
      >
        {/* Central Geometric Core */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border border-primary/20 rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[15%] border border-white/5 rounded-full border-dashed"
        />

        {/* Pulse Ring */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-primary/5 rounded-full blur-3xl"
        />

        {/* Floating HUD Panels */}
        <motion.div 
          animate={{ 
            y: [0, -15, 0],
            x: [0, 5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-32 h-20 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl flex flex-col p-4 justify-between"
        >
          <div className="flex justify-between items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <div className="w-8 h-1 bg-white/10 rounded-full" />
          </div>
          <div className="space-y-1">
            <div className="w-full h-1 bg-white/5 rounded-full" />
            <div className="w-2/3 h-1 bg-white/5 rounded-full" />
          </div>
        </motion.div>

        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 left-0 w-40 h-24 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-4"
        >
          <div className="text-[8px] font-mono text-white/20 uppercase tracking-widest mb-3">Sync Status</div>
          <div className="flex items-end gap-1 h-8">
            {[...Array(6)].map((_, i) => (
              <motion.div 
                key={i}
                animate={{ height: [10, 25, 15, 30][i % 4] + "px" }}
                transition={{ duration: 1 + (i * 0.2) % 1, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 bg-primary/40 rounded-t-sm"
              />
            ))}
          </div>
        </motion.div>

        {/* The Core Nexus Node */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-8 h-8 bg-primary rounded-full blur-md"
            />
            <div className="absolute inset-0 w-8 h-8 bg-primary rounded-full shadow-[0_0_20px_rgba(255,0,85,1)]" />
          </div>
        </div>

        {/* Global Connection Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          <motion.circle 
            cx="50%" cy="50%" r="45%" 
            fill="none" 
            stroke="url(#lineGradient)" 
            strokeWidth="0.5" 
            strokeDasharray="4 8"
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
              <stop offset="50%" stopColor="rgba(255,0,85,0.2)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Decorative IQ Rings */}
      <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full opacity-50" />
      </div>
    </div>
  );
}
