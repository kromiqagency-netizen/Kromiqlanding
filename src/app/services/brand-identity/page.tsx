'use client';

import Navigation from "@/components/Navigation";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import { Palette, Filters as Layers, Eye, Target, Sparkles, Box, Compass, Share2 } from "lucide-react";
import { motion } from "framer-motion";

export default function BrandIdentityPage() {
  const framework = [
    { 
      number: "01",
      title: "Strategic Positioning", 
      desc: "Identifying the unique market white space where your brand can exist without competition, defining your Core Archetype." 
    },
    { 
      number: "02",
      title: "Visual Architecture", 
      desc: "Designing a modular design system including typography, chroma-dynamics, and grid systems that scale across every medium." 
    },
    { 
      number: "03",
      title: "Narrative Synthesis", 
      desc: "Developing the brand voice and messaging framework that translates complex value propositions into emotional resonance." 
    },
    { 
      number: "04",
      title: "Ecosystem Deployment", 
      desc: "Rolling out the identity across digital, physical, and sensory touchpoints to ensure absolute consistency." 
    },
  ];

  const deliverables = [
    "Core Identity & Logomark System",
    "Comprehensive Brand Style Guide",
    "Digital-First Design System",
    "Strategic Brand Narrative & Voice",
    "Social Media & Content Templates",
    "Custom Iconography & Illustrations",
  ];

  const metrics = [
    { label: "Brand Recall", value: "+92%", desc: "Significant improvement in unaided brand recognition across target demographic nodes." },
    { label: "Customer LTV", value: "+45%", desc: "Direct correlation between visual authority and long-term customer enterprise value." },
    { label: "Pipeline Velocity", value: "x2.4", desc: "Acceleration of the sales cycle through established visual trust and market authority." },
  ];

  return (
    <main className="min-h-screen bg-[#030303] text-foreground selection:bg-accent/30">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-44 pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-8 text-accent font-mono text-sm tracking-widest uppercase"
            >
              <Sparkles size={16} /> [ Identity Framework v3.0 ]
            </motion.div>
            <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter leading-[0.85] mb-10 text-foreground">
              Aesthetics with <br />
              <span className="text-foreground/40 italic font-medium">Intent.</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/40 max-w-2xl leading-relaxed mb-12 font-sans tracking-tight">
              We don&apos;t just design logos; we construct visual ecosystems that command attention, enforce authority, and drive premium market positioning.
            </p>
            
            <div className="w-full">
              <PerformanceMetrics metrics={metrics} />
            </div>
          </div>
        </div>
        {/* Background elegant glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 blur-[150px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-[0.02] pointer-events-none -z-10" />
      </section>

      {/* The Visual Gap Section */}
      <section className="py-24 border-t border-white/5 bg-zinc-900/10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8 text-foreground">The Commodity Trap</h2>
              <p className="text-lg text-foreground/50 leading-relaxed space-y-6 lg:max-w-xl">
                In an era of generic templates and AI-generated noise, most brands look and sound exactly the same. They have become **Commoditized Grey Noise**. <br /><br />
                KROMIQ breaks this cycle by synthesizing radical creative vision with data-backed strategic positioning. We help you move from being seen to being remembered.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                <Compass className="text-accent mb-4" />
                <h4 className="font-bold mb-2">Unique Path</h4>
                <p className="text-xs text-foreground/30 leading-relaxed">Finding the specific visual language that sets you apart from the industry pack.</p>
              </div>
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl mt-4">
                <Target className="text-accent mb-4" />
                <h4 className="font-bold mb-2">Intentionality</h4>
                <p className="text-xs text-foreground/30 leading-relaxed">Every color, curve, and word is designed to trigger a specific business outcome.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Framework */}
      <section className="py-32 md:py-44 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter mb-8 text-foreground">Visual <br /><span className="text-foreground/40 italic">Architecture.</span></h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {framework.map((step) => (
              <div key={step.number} className="group flex flex-col">
                <div className="text-5xl font-display font-bold text-white/5 mb-6 group-hover:text-accent/20 transition-colors">{step.number}</div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{step.title}</h3>
                <p className="text-sm text-foreground/40 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Ledger */}
      <section className="py-32 bg-zinc-900/30 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-4xl font-display font-bold tracking-tight mb-12 text-foreground">System Deliverables</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
                    <span className="text-sm text-foreground/60 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-accent/5 rounded-3xl p-12 border border-accent/10 flex flex-col justify-center">
              <Box className="text-accent mb-8" size={48} />
              <h3 className="text-3xl font-bold mb-6 tracking-tight text-foreground">Modular Scalability</h3>
              <p className="text-foreground/50 leading-relaxed">
                We build design systems, not just static assets. Your brand will be ready for everything from social media stories to 4K cinematic advertising and global physical activations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-foreground">Brand FAQ</h2>
            <div className="space-y-12">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-accent">How long does a full identity overhaul take?</h4>
                <p className="text-foreground/40 text-sm leading-relaxed">A typical forensic rebranding takes 6-10 weeks, covering everything from global strategic positioning to final asset delivery.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-accent">Will you work with our existing logo?</h4>
                <p className="text-foreground/40 text-sm leading-relaxed">Yes. We often perform &quot;Brand Refinement&quot; where we modernize existing marks while maintaining historical brand equity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 md:py-44 bg-[#030303] relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-zinc-900/20 border border-white/5 rounded-[40px] p-12 md:p-24 overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-foreground">Build Your <br /><span className="text-accent italic">Icon.</span></h2>
                <p className="text-foreground/40 mb-10 text-lg">Define the visual future of your enterprise. Let&apos;s talk about your positioning.</p>
              </div>
              <LeadCaptureForm />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full -z-10" />
          </div>
        </div>
      </section>
    </main>
  );
}
