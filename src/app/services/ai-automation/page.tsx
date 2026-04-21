'use client';

import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import { Bot, Cpu, Zap, Search, BarChart3, ShieldCheck, Terminal, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function AIAutomationPage() {
  const framework = [
    { 
      number: "01",
      title: "Neural Audit & Discovery", 
      desc: "We perform a forensic analysis of your operational stack to identify high-friction nodes and automation opportunities that yield the highest ROI." 
    },
    { 
      number: "02",
      title: "Agentic Architecture", 
      desc: "Designing custom AI agents with memory, tool-access, and chain-of-thought reasoning tailored to your specific business logic." 
    },
    { 
      number: "03",
      title: "System Integration", 
      desc: "Seamlessly embedding autonomous workflows into your existing CRM, ERP, and communication channels without disrupting current Ops." 
    },
    { 
      number: "04",
      title: "Optimization & Scaling", 
      desc: "Continuous monitoring of agent performance, refining neural prompts, and scaling successful automations across the organization." 
    },
  ];

  const deliverables = [
    "Autonomous Lead Qualification Agents",
    "Customer Support Neural Synthesizers",
    "Predictive Inventory/Resource Management",
    "Automated Content Production Pipelines",
    "Internal Intelligence Knowledge Bases",
    "Real-time Data Processing Workflows",
  ];

  const metrics = [
    { label: "Operational Friction", value: "-85%", desc: "Significant reduction in bottleneck latency through autonomous agentic workflows." },
    { label: "Response Latency", value: "< 2ms", desc: "Industrial-grade neural processing for real-time customer and operational responses." },
    { label: "Human Resource ROI", value: "x12", desc: "Scaling capability without linear increase in overhead or human resource complexity." },
  ];

  const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <main className="min-h-screen bg-[#030303] text-foreground selection:bg-primary/30">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-44 pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-8 text-primary font-mono text-sm tracking-widest uppercase"
            >
              <Terminal size={16} /> [ Intelligence Systems v4.0 ]
            </motion.div>
            <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter leading-[0.85] mb-10 text-foreground">
              Industrializing <br />
              <span className="text-foreground/40 italic font-medium">Intelligence.</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/40 max-w-2xl leading-relaxed mb-12 font-sans tracking-tight">
              We design autonomous agentic ecosystems that don&apos;t just follow rules—they execute strategy, resolve complexity, and grow your ROI while you sleep.
            </p>
            
            <div className="w-full">
              <PerformanceMetrics metrics={metrics} />
            </div>
          </div>
        </div>
        {/* Background circuit-like glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-[0.03] pointer-events-none -z-10" />
      </section>

      {/* The Analytical Gap Section */}
      <section className="py-24 border-t border-white/5 bg-zinc-900/10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8 text-foreground">The Scaling Paradox</h2>
              <p className="text-lg text-foreground/50 leading-relaxed space-y-6 lg:max-w-xl">
                Most organizations are hitting a ceiling where more human resources no longer yield linear growth. This is the **Complexity Trap**. <br /><br />
                KROMIQ solves this by deploying autonomous intelligence that scales vertically without the overhead of traditional management. We transform your Ops into a deterministic AI-driven engine.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                <BarChart3 className="text-primary mb-4" />
                <h4 className="font-bold mb-2">Neural Efficiency</h4>
                <p className="text-xs text-foreground/30 leading-relaxed">Transition from manual triggers to predictive autonomous execution.</p>
              </div>
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl mt-4">
                <ShieldCheck className="text-primary mb-4" />
                <h4 className="font-bold mb-2">Secure Core</h4>
                <p className="text-xs text-foreground/30 leading-relaxed">Proprietary logic remains local and protected within your instance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Framework */}
      <section className="py-32 md:py-44 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter mb-8 text-foreground">The Execution <br /><span className="text-foreground/40 italic">Framework.</span></h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {framework.map((step) => (
              <div key={step.number} className="group flex flex-col">
                <div className="text-5xl font-display font-bold text-white/5 mb-6 group-hover:text-primary/20 transition-colors">{step.number}</div>
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
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shadow-[0_0_10px_rgba(255,0,85,0.8)]" />
                    <span className="text-sm text-foreground/60 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary/5 rounded-3xl p-12 border border-primary/10 flex flex-col justify-center">
              <Layers className="text-primary mb-8" size={48} />
              <h3 className="text-3xl font-bold mb-6 tracking-tight text-foreground">Future-Proofed Infrastructure</h3>
              <p className="text-foreground/50 leading-relaxed">
                Every automation we deploy is modular. As AI models evolve, your infrastructure remains compatible with the latest advancements in LLMs and agentic reasoning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-foreground">Intelligence FAQ</h2>
            <div className="space-y-12">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary">How do autonomous agents differ from simple bots?</h4>
                <p className="text-foreground/40 text-sm leading-relaxed">Simple bots follow static IF-THEN logic. Autonomous agents use LLMs to reason, adapt to new information, and use tools (like your CRM) to complete complex objectives independently.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary">Is our data secure?</h4>
                <p className="text-foreground/40 text-sm leading-relaxed">Absolutely. We use enterprise-grade VPCs and secure API tunnels. Your proprietary training data never leaves your secure environment.</p>
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
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-foreground">Ready to <br /><span className="text-primary italic">automate</span>?</h2>
                <p className="text-foreground/40 mb-10 text-lg">Describe your operational bottleneck. We&apos;ll show you the strategic solution.</p>
              </div>
              <LeadCaptureForm />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />
          </div>
        </div>
      </section>
    </main>
  );
}
