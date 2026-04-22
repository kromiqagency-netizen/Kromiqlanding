'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { caseStudiesData } from '@/data/caseStudies';
import { ArrowLeft, CheckCircle2, TrendingUp, Target, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function CaseStudyPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const study = caseStudiesData.find(s => s.slug === slug);

  const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

  if (!study) {
    return (
      <div className="min-h-screen bg-[#030303] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link href="/#results" className="text-primary hover:underline">Back to Results</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#030303] selection:bg-primary/30 text-foreground overflow-x-hidden">
      <Navigation />
      
      {/* Dynamic Grid Background */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Header Section */}
      <section className="pt-48 pb-24 relative z-10">
        <div className="container mx-auto px-6 md:px-10">
          <motion.button
            onClick={() => router.back()}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-foreground/40 hover:text-primary transition-colors mb-12 group font-mono text-[10px] uppercase tracking-[0.3em]"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Case Studies</span>
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeOut }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/20"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-[10px] tracking-widest text-primary uppercase font-bold">
                  Dossier // {study.industry}
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: easeOut, delay: 0.1 }}
                className="font-display text-6xl md:text-9xl font-bold tracking-tighter text-foreground leading-[0.85]"
              >
                {study.client}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
                className="flex flex-wrap items-center gap-4 text-xl md:text-2xl font-sans"
              >
                <span className="text-foreground/40 italic">Objective Achieved:</span>
                <span className="text-primary font-bold">{study.result}</span>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: easeOut, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
            >
              {study.metrics.map((m, i) => (
                <div key={i} className="group p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-primary/30 transition-all duration-500 hover:bg-zinc-900">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                      {i === 0 ? <TrendingUp size={16} /> : i === 1 ? <Target size={16} /> : <BarChart3 size={16} />}
                    </div>
                    <div className="font-mono text-[9px] text-foreground/20 uppercase tracking-widest font-bold">Metric Analytics</div>
                  </div>
                  <span className="text-3xl md:text-4xl font-display font-bold text-foreground leading-none tracking-tighter">{m}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-44 relative z-10">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24">
            <div className="lg:col-span-8 space-y-24">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-12 top-0 h-full w-[1px] bg-gradient-to-b from-primary/50 to-transparent hidden md:block" />
                <div className="space-y-8">
                  <h2 className="text-[10px] font-mono text-primary uppercase tracking-[0.5em] font-bold">01 // The Friction</h2>
                  <p className="text-2xl md:text-4xl text-foreground font-sans font-light leading-snug tracking-tight max-w-3xl">
                    {study.challenge}
                  </p>
                </div>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-12 top-0 h-full w-[1px] bg-gradient-to-b from-accent/50 to-transparent hidden md:block" />
                <div className="space-y-8">
                  <h2 className="text-[10px] font-mono text-accent uppercase tracking-[0.5em] font-bold">02 // The Strategy</h2>
                  <p className="text-2xl md:text-4xl text-foreground font-sans font-light leading-snug tracking-tight max-w-3xl">
                    {study.solution}
                  </p>
                </div>
              </motion.div>

              {/* Impact */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-12 top-0 h-full w-[1px] bg-gradient-to-b from-violet/50 to-transparent hidden md:block" />
                <div className="space-y-8 p-10 md:p-16 rounded-[3rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl">
                  <h2 className="text-[10px] font-mono text-violet uppercase tracking-[0.5em] font-bold">03 // The Scale</h2>
                  <p className="text-2xl md:text-4xl text-foreground font-sans font-medium leading-snug tracking-tight">
                    {study.impact}
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sticky top-32 space-y-8"
              >
                <div className="p-8 md:p-10 rounded-[2.5rem] bg-zinc-900 border border-white/5 space-y-10 shadow-2xl">
                  <div className="space-y-4">
                    <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-foreground/40 font-bold">Execution Stack</h3>
                    <div className="space-y-4">
                      {['Forensic Data Analysis', 'High-Fidelity Design', 'Conversion Optimization', 'Performance Infrastructure'].map((service) => (
                        <div key={service} className="flex items-center gap-4 p-4 rounded-2xl bg-black/50 border border-white/[0.03] text-sm text-foreground/60 group hover:border-primary/20 transition-colors">
                          <CheckCircle2 size={16} className="text-primary" />
                          <span className="tracking-tight">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-8 border-t border-white/5">
                    <Link 
                      href="/#contact"
                      className="group relative flex items-center justify-center w-full py-6 bg-primary text-white font-bold tracking-tight rounded-full overflow-hidden transition-all hover:scale-[1.02]"
                    >
                      <span className="relative z-10">Start Your Story</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </div>
                </div>

                <div className="p-8 rounded-[2rem] border border-white/5 flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-foreground/20">
                    <Target size={24} />
                  </div>
                  <p className="text-xs text-foreground/30 font-mono uppercase tracking-widest leading-relaxed">
                    Ready to scale <br /> your operations?
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Decoration */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent mb-32" />
    </main>
  );
}
