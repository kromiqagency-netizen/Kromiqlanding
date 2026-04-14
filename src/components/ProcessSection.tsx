'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description: 'We deep-dive into your brand, market, competitors, and data. Every engagement starts with a comprehensive 360° audit to identify gaps, opportunities, and the fastest path to growth.',
    duration: 'Week 1–2',
    deliverables: ['Brand Audit Report', 'Competitor Analysis', 'Growth Roadmap'],
  },
  {
    number: '02',
    title: 'Strategy & Architecture',
    description: 'We design the blueprint — from brand positioning and visual identity to technical architecture and conversion funnels. Nothing is built without a clear strategic foundation.',
    duration: 'Week 2–4',
    deliverables: ['Brand Strategy Deck', 'Technical Architecture', 'KPI Framework'],
  },
  {
    number: '03',
    title: 'Build & Deploy',
    description: 'Our engineering and design teams execute with precision. High-fidelity interfaces, hardened backends, and seamless integrations — delivered on aggressive timelines.',
    duration: 'Week 4–8',
    deliverables: ['Production Deployment', 'Performance Testing', 'Launch Playbook'],
  },
  {
    number: '04',
    title: 'Optimize & Scale',
    description: 'Post-launch, we monitor, iterate, and optimize. Real-time analytics drive continuous improvement. Your growth compounds as we refine every touchpoint.',
    duration: 'Ongoing',
    deliverables: ['Monthly Analytics', 'A/B Testing', 'Quarterly Reviews'],
  },
];

export default function ProcessSection() {
  const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <section id="process" className="py-32 md:py-44 relative bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="text-[10px] md:text-sm text-primary font-semibold tracking-wide mb-4 uppercase"
          >
            How We Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
            className="font-display text-4xl md:text-7xl font-bold tracking-tighter mb-6 leading-[0.9]"
          >
            A process built for <br />
            <span className="text-foreground/40 italic font-medium">precision and speed.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute left-[47px] top-12 bottom-12 w-[1px] bg-gradient-to-b from-primary/40 via-white/5 to-transparent" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: easeOut, delay: i * 0.15 }}
                className="group relative md:pl-28 py-8 md:py-14"
              >
                {/* Step Number */}
                <div className="md:absolute md:left-0 md:top-14 mb-4 md:mb-0">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center font-display text-2xl md:text-3xl font-bold text-primary group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-500">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-10 bg-zinc-900/30 border border-white/5 rounded-2xl hover:border-white/10 transition-all group-hover:bg-zinc-900/50">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                        <h3 className="text-xl md:text-3xl font-display font-bold tracking-tight">{step.title}</h3>
                        <span className="w-fit text-[10px] text-primary/70 bg-primary/5 px-3 py-1 rounded-full font-medium">{step.duration}</span>
                      </div>
                      <p className="text-foreground/40 text-sm md:text-base leading-relaxed max-w-2xl">{step.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 md:flex-col md:items-end md:flex-shrink-0">
                      {step.deliverables.map((d) => (
                        <span key={d} className="text-[9px] md:text-xs bg-white/[0.03] border border-white/5 text-foreground/40 px-3 md:px-4 py-1.5 md:py-2 rounded-full whitespace-nowrap group-hover:text-foreground/60 transition-colors">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
