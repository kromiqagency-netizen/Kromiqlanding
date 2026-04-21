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
    <main className="min-h-screen bg-[#030303] selection:bg-primary/30">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-48 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <motion.button
            onClick={() => router.back()}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-foreground/40 hover:text-foreground transition-colors mb-12 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-xs uppercase tracking-widest">Back to Results</span>
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeOut }}
                className="font-mono text-[11px] tracking-[0.5em] text-primary mb-6 uppercase font-bold"
              >
                Case Study // {study.industry}
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: easeOut, delay: 0.1 }}
                className="font-display text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-foreground leading-[0.9]"
              >
                {study.client}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
                className="text-2xl text-primary font-bold mb-8"
              >
                {study.result}
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: easeOut, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {study.metrics.map((m, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col items-center text-center">
                  <TrendingUp size={20} className="text-primary mb-3" />
                  <span className="text-lg font-bold text-foreground leading-tight">{m}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />
      </section>

      {/* Narrative Section */}
      <section className="pb-44">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-3 gap-16 md:gap-24">
            <div className="lg:col-span-2 space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-xs font-mono text-foreground/20 uppercase tracking-[0.4em] font-bold">The Challenge</h2>
                <p className="text-xl md:text-2xl text-foreground/60 font-sans leading-relaxed tracking-tight">
                  {study.challenge}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-xs font-mono text-foreground/20 uppercase tracking-[0.4em] font-bold">The Solution</h2>
                <p className="text-xl md:text-2xl text-foreground/60 font-sans leading-relaxed tracking-tight">
                  {study.solution}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-xs font-mono text-foreground/20 uppercase tracking-[0.4em] font-bold">The Impact</h2>
                <p className="text-xl md:text-2xl text-foreground font-sans leading-relaxed tracking-tight">
                  {study.impact}
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="sticky top-32 p-8 rounded-[2rem] bg-zinc-900 border border-white/5 space-y-8"
              >
                <h3 className="text-xl font-bold tracking-tight">Strategic Services</h3>
                <div className="space-y-4">
                  {['Forensic Data Analysis', 'High-Fidelity Design', 'Conversion Optimization', 'Performance Infrastructure'].map((service) => (
                    <div key={service} className="flex items-center gap-3 text-foreground/40 text-sm">
                      <CheckCircle2 size={16} className="text-primary" />
                      {service}
                    </div>
                  ))}
                </div>
                
                <div className="pt-8 border-t border-white/5">
                  <Link 
                    href="/#contact"
                    className="flex items-center justify-center w-full py-4 bg-primary text-white font-bold tracking-tight rounded-full hover:shadow-[0_0_20px_rgba(255,0,85,0.3)] transition-all"
                  >
                    Start Your Story
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
