'use client';

import { motion } from 'framer-motion';
import NeuralPulse from './NeuralPulse';

export default function HeroSection() {
  const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <section className="relative pt-32 md:pt-48 pb-32 overflow-hidden min-h-screen flex flex-col justify-center bg-transparent">
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: easeOut }}
              className="mb-8"
            >
              <span className="font-mono text-[10px] md:text-[11px] tracking-[0.4em] text-primary/80 font-bold uppercase bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                Cognitive Growth Systems v2.4
              </span>
            </motion.div>
     
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: easeOut, delay: 0.1 }}
              className="font-display text-5xl md:text-[8rem] xl:text-[10rem] font-bold tracking-tighter mb-10 leading-[0.9] md:leading-[0.8]"
            >
              <span className="text-foreground">Chroma</span>
              <span className="text-foreground/20 italic mx-2 md:mx-4">&</span>
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent neon-text-primary">
                IQ
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: easeOut, delay: 0.2 }}
              className="text-xl md:text-2xl text-foreground/40 leading-tight mb-16 max-w-xl font-sans tracking-tight"
            >
              We transform visionary brands into scalable ecosystems through radical creativity and industrial intelligence.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: easeOut, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
            >
              <a 
                href="#contact" 
                className="group relative inline-flex items-center justify-center px-16 py-6 bg-primary text-white text-xl font-bold tracking-tight transition-all rounded-full overflow-hidden hover:shadow-[0_0_50px_rgba(255,0,85,0.4)]"
              >
                <span className="relative z-10 transition-transform group-hover:scale-105">Get Started</span>
              </a>
              <a 
                href="#process" 
                className="group relative inline-flex items-center justify-center px-10 py-6 bg-white/5 border border-white/10 text-white text-lg font-semibold tracking-tight transition-all rounded-full hover:bg-white/10"
              >
                Our Process
              </a>
            </motion.div>
          </div>

          {/* Neural Architecture Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: easeOut, delay: 0.4 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <NeuralPulse />
            {/* Shadows and lighting enhancements */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Extreme Minimal Backdrop Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-[-20%] left-1/4 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full -z-10" />
      
      {/* Matte Noise Overlay */}
      <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-[0.02] pointer-events-none -z-10 mix-blend-screen" />
    </section>
  );
}
