'use client';

import Navigation from "@/components/Navigation";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import { TrendingUp, BarChart3, Globe, Compass, Target, Zap, ShieldCheck, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function DigitalStrategyPage() {
  const framework = [
    { 
      number: "01",
      title: "Market Intelligence", 
      desc: "Forensic analysis of competitor data, consumer behavior, and emerging trends to identify your unfair market advantage." 
    },
    { 
      number: "02",
      title: "Funnel Engineering", 
      desc: "Optimizing the entire conversion architecture—from initial awareness touchpoints to late-stage retention and referral loops." 
    },
    { 
      number: "03",
      title: "Growth Operations", 
      desc: "Deploying the technical infrastructure and tracking systems required to maintain high-velocity execution and data integrity." 
    },
    { 
      number: "04",
      title: "Aggressive Scaling", 
      desc: "Iterative testing and capital allocation at scale to ensure maximum market dominance with optimized efficiency." 
    },
  ];

  const deliverables = [
    "Omni-channel Growth Roadmap",
    "Competitive Intelligence Report",
    "Conversion Funnel Architecture",
    "Customer Acquisition Forecasts",
    "Data Infrastructure & Tracking Setup",
    "Performance Marketing Playbooks",
  ];

  const metrics = [
    { label: "Acquisition Cost", value: "-40%", desc: "Significant reduction in CAC through precision targeting and funnel optimization." },
    { label: "LTV / CAC Ratio", value: "> 5:1", desc: "Establishing healthy unit economics that allow for aggressive, capital-efficient scaling." },
    { label: "Market Share Gain", value: "+18%", desc: "Measured growth in search and social mindshare compared to key industry incumbents." },
  ];

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
              <Activity size={16} /> [ Growth Infrastructure v2.5 ]
            </motion.div>
            <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter leading-[0.85] mb-10 text-foreground">
              Strategy as a <br />
              <span className="text-foreground/40 italic font-medium">System.</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/40 max-w-2xl leading-relaxed mb-12 font-sans tracking-tight">
              Scaling isn&apos;t about luck. It&apos;s about a deterministic growth engine that synthesizes high-velocity data with aggressive market execution.
            </p>
            
            <div className="w-full">
              <PerformanceMetrics metrics={metrics} />
            </div>
          </div>
        </div>
        {/* Background strategic glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-[-10%] left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10 -translate-x-1/2" />
      </section>

      {/* The Strategic Gap Section */}
      <section className="py-24 border-t border-white/5 bg-zinc-900/10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8 text-foreground">The Tunnel-Vision Trap</h2>
              <p className="text-lg text-foreground/50 leading-relaxed space-y-6 lg:max-w-xl">
                Most agencies focus on siloed metrics—clicks, impressions, or vanity traffic. They miss the broader **Economic Reality** of your business. <br /><br />
                KROMIQ synthesizes every touchpoint into a unified growth engine. We don&apos;t just buy traffic; we architect systems that convert and retain high-value customers at scale.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                <Target className="text-primary mb-4" />
                <h4 className="font-bold mb-2">Omni-Channel</h4>
                <p className="text-xs text-foreground/30 leading-relaxed">Diversifying acquisition across platforms for sustainable and resilient growth.</p>
              </div>
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl mt-4">
                <ShieldCheck className="text-primary mb-4" />
                <h4 className="font-bold mb-2">Deterministic</h4>
                <p className="text-xs text-foreground/30 leading-relaxed">Building models where growth is a direct, measurable result of capital input.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Framework */}
      <section className="py-32 md:py-44 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter mb-8 text-foreground">Strategy <br /><span className="text-foreground/40 italic">Framework.</span></h2>
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
              <h2 className="text-4xl font-display font-bold tracking-tight mb-12 text-foreground">Strategy Deliverables</h2>
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
              <Zap className="text-primary mb-8" size={48} />
              <h3 className="text-3xl font-bold mb-6 tracking-tight text-foreground">Full-Stack Execution</h3>
              <p className="text-foreground/50 leading-relaxed">
                We don&apos;t just hand you a PDF. We stand up the infrastructure, manage the spend, and optimize the creative to ensure the strategy is successfully industrialized.
              </p>
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
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-foreground">Ready to <br /><span className="text-primary italic">scale</span>?</h2>
                <p className="text-foreground/40 mb-10 text-lg">Scale with absolute precision. Let&apos;s map your growth infrastructure.</p>
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
