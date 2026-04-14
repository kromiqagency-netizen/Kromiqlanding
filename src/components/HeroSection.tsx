'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <section className="relative pt-40 md:pt-64 pb-32 overflow-hidden min-h-screen flex flex-col justify-center bg-transparent">
      <div className="container mx-auto px-6 md:px-10 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: easeOut }}
          className="mb-8"
        >
          <span className="font-mono text-[10px] md:text-[11px] tracking-[0.4em] text-foreground/40 font-bold uppercase">
            Growth Infrastructure
          </span>
        </motion.div>
 
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: easeOut, delay: 0.1 }}
          className="font-display text-5xl md:text-[12rem] font-bold tracking-tighter mb-10 leading-[0.9] md:leading-[0.8]"
        >
          <span className="text-foreground">Chroma</span>
          <span className="text-foreground/20 italic mx-2 md:mx-4">&</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent neon-text-primary">
            IQ
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: easeOut, delay: 0.2 }}
          className="text-xl md:text-2xl text-foreground/40 leading-tight mb-16 max-w-2xl font-sans tracking-tight"
        >
          We transform visionary brands into scalable ecosystems through radical creativity and relentless data-driven intelligence.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: easeOut, delay: 0.3 }}
        >
          <a 
            href="#contact" 
            className="group relative inline-flex items-center justify-center px-16 py-6 bg-primary text-white text-xl font-bold tracking-tight transition-all rounded-full overflow-hidden hover:shadow-[0_0_50px_rgba(255,0,85,0.4)]"
          >
            <span className="relative z-10 transition-transform group-hover:scale-105">Get Started</span>
          </a>
        </motion.div>

      </div>

      {/* Extreme Minimal Backdrop Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-[-20%] left-1/4 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full -z-10" />
      
      {/* Matte Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] pointer-events-none -z-10 mix-blend-screen" />
    </section>
  );
}
