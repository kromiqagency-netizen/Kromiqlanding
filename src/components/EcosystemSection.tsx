'use client';

import { motion } from 'framer-motion';
import { Layers, Puzzle, Cpu, Globe } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Brand Identity',
    desc: 'Crafting radical, multi-modal brand ecosystems that command attention across the chroma spectrum.',
    stats: '98% RECALL',
    color: 'text-primary border-primary',
    href: '/services/brand-identity'
  },
  {
    icon: Puzzle,
    title: 'Digital Strategy',
    desc: 'Engineering custom digital tools that synthesize logic and creativity into unified growth engines.',
    stats: '142% GAIN',
    color: 'text-accent border-accent',
    href: '/services/digital-strategy'
  },
  {
    icon: Cpu,
    title: 'AI Automation',
    desc: 'Deploying autonomous agents and neural workflows to eliminate operational friction.',
    stats: '0.2ms LATENCY',
    color: 'text-violet border-violet',
    href: '/services/ai-automation'
  },
  {
    icon: Globe,
    title: 'Performance PPC',
    desc: 'Synthesizing data-driven intelligence into a cohesive digital presence for exponential scale.',
    stats: 'CORE SYNC',
    color: 'text-cyan border-cyan',
    href: '/services/ppc'
  }
];

export default function EcosystemSection() {
  const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <section id="ecosystem" className="py-32 md:py-44 relative bg-background overflow-hidden z-10">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col items-start mb-20 md:mb-24 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easeOut }}
            className="font-mono text-[10px] md:text-[11px] tracking-[0.5em] text-foreground/30 mb-6 uppercase"
          >
            Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easeOut, delay: 0.1 }}
            className="font-display text-4xl md:text-8xl font-bold tracking-tighter mb-8 text-foreground leading-[0.9]"
          >
            The Ecosystem <br /> <span className="text-foreground/40 italic font-medium">of Tomorrow.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <motion.a
              key={feature.title}
              href={feature.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeOut, delay: i * 0.1 }}
              className="group p-8 md:p-10 squircle bg-zinc-900/40 border border-white/5 relative transition-all hover:bg-zinc-900 neon-border cursor-pointer block"
            >
              <div className="flex justify-between items-start mb-8 md:mb-10">
                <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-2xl bg-black ${feature.color} border transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,0,85,0.2)]`}>
                  <feature.icon size={20} />
                </div>
                <div className="font-mono text-[9px] md:text-[10px] text-foreground/20 uppercase tracking-[0.4em] font-bold group-hover:text-foreground/60 transition-colors">
                  {feature.stats}
                </div>
              </div>
              
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 tracking-tight">{feature.title}</h3>
                <div className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  <Puzzle size={20} />
                </div>
              </div>
              
              <p className="text-base md:text-lg text-foreground/40 leading-relaxed font-sans tracking-tight group-hover:text-foreground/60 transition-colors">
                {feature.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
