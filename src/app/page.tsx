'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import EcosystemSection from '@/components/EcosystemSection';
import ResultsSection from '@/components/ResultsSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import DigitalConcierge from '@/components/DigitalConcierge';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="min-h-screen relative selection:bg-primary/30 bg-[#030303]"
    >
      <Navigation />
      <DigitalConcierge />
      
      <HeroSection />

      {/* Services / Ecosystem */}
      <EcosystemSection />

      {/* Results & Metrics */}
      <ResultsSection />

      {/* Process */}
      <ProcessSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA / Big Statement before form */}
      <section className="py-32 md:py-44 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easeOut }}
            className="font-display text-5xl md:text-[8rem] font-bold tracking-tighter leading-[0.85] mb-8"
          >
            Ready to <br className="md:hidden" /> <span className="text-primary neon-text-primary italic">accelerate</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
            className="text-xl text-foreground/40 max-w-2xl mx-auto mb-12"
          >
            We partner with ambitious brands ready to dominate their market. If that&apos;s you, let&apos;s talk.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easeOut, delay: 0.3 }}
          >
            <a 
              href="#contact" 
              className="group relative inline-flex items-center justify-center px-16 py-6 bg-primary text-white text-xl font-bold tracking-tight transition-all rounded-full overflow-hidden hover:shadow-[0_0_40px_rgba(255,0,85,0.4)]"
            >
              <span className="relative z-10 transition-transform group-hover:scale-105">Get Started</span>
            </a>
          </motion.div>
        </div>
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10" />
      </section>

      {/* Lead Capture Section */}
      <section id="contact" className="py-32 md:py-44 relative">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: easeOut }}
              >
                <p className="text-sm text-primary font-semibold tracking-wide mb-4 uppercase">Contact</p>
                <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-8">
                  Let&apos;s build <br />
                  <span className="text-foreground/40 italic font-medium">something great.</span>
                </h2>
                <p className="text-lg text-foreground/40 mb-10 leading-relaxed">
                  Tell us about your brand and your ambitions. We&apos;ll respond within 24 hours with a free initial assessment.
                </p>

                <div className="space-y-6 border-t border-white/5 pt-8">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-sm text-foreground/50">Currently accepting new projects for Q4 2026</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm text-foreground/50">Average response time: under 4 hours</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-sm text-foreground/50">Free strategic consultation included</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
                className="bg-zinc-900/30 border border-white/5 rounded-2xl p-8 md:p-10"
              >
                <LeadCaptureForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer — with Logo */}
      <footer className="py-16 md:py-24 border-t border-white/5 relative bg-background">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-16">
            {/* Logo Column */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10">
                  <Image 
                    src="/assets/logo.png" 
                    alt="KROMIQ" 
                    fill 
                    className="object-contain"
                    sizes="(max-width: 768px) 40px, 40px"
                  />
                </div>
                <span className="font-display text-xl font-bold tracking-tighter">KROMIQ</span>
              </div>
              <p className="text-sm text-foreground/30 leading-relaxed mb-6">
                The synthesis of Chroma &amp; IQ. We build brands that scale.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-foreground/30">Systems Online</span>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-semibold text-foreground/60 mb-4">Services</h4>
              <div className="space-y-3 text-sm text-foreground/30">
                <a href="#ecosystem" className="block hover:text-foreground/60 transition-colors">Brand Identity</a>
                <a href="#ecosystem" className="block hover:text-foreground/60 transition-colors">Digital Strategy</a>
                <a href="#ecosystem" className="block hover:text-foreground/60 transition-colors">AI Automation</a>
                <a href="#ecosystem" className="block hover:text-foreground/60 transition-colors">Product Design</a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground/60 mb-4">Company</h4>
              <div className="space-y-3 text-sm text-foreground/30">
                <a href="#results" className="block hover:text-foreground/60 transition-colors">Case Studies</a>
                <a href="#process" className="block hover:text-foreground/60 transition-colors">Our Process</a>
                <a href="#contact" className="block hover:text-foreground/60 transition-colors">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground/60 mb-4">Connect</h4>
              <div className="space-y-3 text-sm text-foreground/30">
                <a href="#" className="block hover:text-foreground/60 transition-colors">Instagram</a>
                <a href="#" className="block hover:text-foreground/60 transition-colors">LinkedIn</a>
                <a href="#" className="block hover:text-foreground/60 transition-colors">WhatsApp</a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-foreground/20">
              © 2026 KROMIQ. All rights reserved.
            </div>
            <div className="flex gap-8 text-xs text-foreground/20">
              <a href="#" className="hover:text-foreground/40 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground/40 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </motion.main>
  );
}
