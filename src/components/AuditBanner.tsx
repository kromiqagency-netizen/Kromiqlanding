'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BarChart3 } from 'lucide-react';

export default function AuditBanner() {
  const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easeOut }}
          className="relative group p-12 md:p-20 rounded-[3rem] bg-zinc-900/40 border border-white/5 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12"
        >
          {/* Animated Background Elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[80px] group-hover:bg-primary/20 transition-colors duration-1000" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/10 blur-[80px] group-hover:bg-accent/20 transition-colors duration-1000" />
          
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary">
                <BarChart3 size={24} />
              </div>
              <span className="font-mono text-[10px] tracking-[0.4em] text-primary uppercase font-bold">Limited Availability</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6 leading-tight">
              Get a Free <span className="italic text-foreground/40">Strategic</span> Audit.
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/40 font-sans tracking-tight leading-relaxed">
              We&apos;ll analyze your current digital ecosystem and provide 3 surgical growth opportunities. No obligation, just intelligence.
            </p>
          </div>

          <div className="relative z-10">
            <a 
              href="#contact"
              className="group/btn flex items-center gap-4 px-10 py-6 bg-white text-black font-bold tracking-tight rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Claim Your Audit
              <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
