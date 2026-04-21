'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';
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
      <section id="contact" className="py-32 md:py-44 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#ff005508,transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: easeOut }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[1px] bg-primary" />
                  <p className="text-xs text-primary font-bold tracking-[0.3em] uppercase">Tactical Inquiry</p>
                </div>
                <h2 className="font-display text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
                  Start your <br />
                  <span className="text-foreground/40 italic font-medium">project.</span>
                </h2>
                <p className="text-xl text-foreground/40 mb-12 leading-relaxed max-w-md">
                  Tell us about your brand and your ambitions. We&apos;ll respond within 24 hours with a free initial assessment.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12 border-t border-white/5">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]" />
                      <span className="text-xs text-foreground/40 font-medium uppercase tracking-wider">Available Q4 2026</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(255,0,85,0.4)]" />
                      <span className="text-xs text-foreground/40 font-medium uppercase tracking-wider">&lt; 4hr Response Time</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(0,180,255,0.4)]" />
                      <span className="text-xs text-foreground/40 font-medium uppercase tracking-wider">Free Strategy Audit</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
                className="relative"
              >
                {/* Form Wrapper with Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2.5rem] blur opacity-20 group-hover:opacity-100 transition duration-1000" />
                <div className="relative bg-[#080808] border border-white/5 rounded-[2rem] p-1 md:p-2 shadow-2xl overflow-hidden">
                  <div className="bg-zinc-900/40 p-8 md:p-12 rounded-[1.8rem]">
                    <LeadCaptureForm />
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 blur-[40px] -z-10" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 blur-[50px] -z-10" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for AEO */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-16 text-center">
              Strategic <span className="text-foreground/40 italic">Intelligence.</span>
            </h2>
            <div className="grid gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">How does KROMIQ drive ROI?</h3>
                <p className="text-foreground/50 leading-relaxed">We combine forensic data analysis with high-fidelity creative execution. By identifying high-intent user signals and optimizing every touchpoint of the conversion funnel, we ensure maximum capital efficiency for your marketing spend.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">What industries do you specialize in?</h3>
                <p className="text-foreground/50 leading-relaxed">Our expertise spans D2C Luxury, FinTech, SaaS, and High-Growth Enterprise. We focus on brands that require a synthesis of technical authority and emotional resonance.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">How do you handle SEO and Indexing?</h3>
                <p className="text-foreground/50 leading-relaxed">Our SEO framework is built on Semantic Connectivity. We don&apos;t just target keywords; we build topical authority through structured data, high-performance technical architecture, and content designed for both search engines and AI answer engines.</p>
              </div>
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
                <a href="/services/brand-identity" className="block hover:text-foreground/60 transition-colors">Brand Identity</a>
                <a href="/services/digital-strategy" className="block hover:text-foreground/60 transition-colors">Digital Strategy</a>
                <a href="/services/ai-automation" className="block hover:text-foreground/60 transition-colors">AI Automation</a>
                <a href="/services/ppc" className="block hover:text-foreground/60 transition-colors">Product Design</a>
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
                <a href="https://www.instagram.com/kromiq.agency?igsh=MWkwdTlzYWVraGU2Mw==" target="_blank" rel="noopener noreferrer" className="block hover:text-foreground/60 transition-colors">Instagram</a>
                <a href="https://www.linkedin.com/company/kromiq-agency/about" target="_blank" rel="noopener noreferrer" className="block hover:text-foreground/60 transition-colors">LinkedIn</a>
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
