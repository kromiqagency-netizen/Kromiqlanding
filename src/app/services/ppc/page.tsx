'use client';

import Navigation from "@/components/Navigation";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import { Target, Zap, BarChart3, ShieldCheck, Crosshair, PieChart, Layers, MousePointer2 } from "lucide-react";
import { motion } from "framer-motion";

export default function PPCPage() {
  const framework = [
    { 
      number: "01",
      title: "Attribution Audit", 
      desc: "Forensic analysis of your current conversion tracking to ensure every dollar spent is accurately mapped to a business outcome." 
    },
    { 
      number: "02",
      title: "Precision Conquesting", 
      desc: "Identifying high-intent competitor keywords and audience segments to aggressively capture market share from incumbents." 
    },
    { 
      number: "03",
      title: "Chroma-Creative Test", 
      desc: "Deploying high-velocity multivariate creative testing to identify the visual and narrative hooks that drive the lowest CPA." 
    },
    { 
      number: "04",
      title: "Scale Optimization", 
      desc: "Surgical capital allocation across the most efficient channels, continuously refining bids and audiences for maximum yield." 
    },
  ];

  const deliverables = [
    "Multi-Channel Ad Architecture",
    "High-Conversion Landing Pages",
    "Dynamic Creative Optimization",
    "Custom Intent Audience Sets",
    "Real-time Performance Dashboards",
    "Competitor Conquesting Playbooks",
  ];

  const metrics = [
    { label: "Return on Ad Spend", value: "x4.8", desc: "Average yield delivered to enterprise clients through strategic multi-channel attribution." },
    { label: "Cost Per Acquisition", value: "-52%", desc: "Efficiency gain achieved by optimizing bidding algorithms and intent-based filtering." },
    { label: "Attribution Clarity", value: "100%", desc: "Closing the loop between decentralized touchpoints and final unit revenue." },
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
              <Crosshair size={16} /> [ Ad Ops Infrastructure v3.1 ]
            </motion.div>
            <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter leading-[0.85] mb-10 text-foreground">
              Surgical <br />
              <span className="text-foreground/40 italic font-medium">Precision.</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/40 max-w-2xl leading-relaxed mb-12 font-sans tracking-tight">
              We don&apos;t just buy traffic; we engineer high-yield advertising ecosystems that synthesize precision targeting with aggressive multivariate testing.
            </p>
            
            <div className="w-full">
              <PerformanceMetrics metrics={metrics} />
            </div>
          </div>
        </div>
        {/* Background surgical glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 blur-[150px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-[-10%] left-1/4 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full -z-10" />
      </section>

      {/* The PPC Gap Section */}
      <section className="py-24 border-t border-white/5 bg-zinc-900/10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8 text-foreground">The Ad-Spend Leak</h2>
              <p className="text-lg text-foreground/50 leading-relaxed space-y-6 lg:max-w-xl">
                Most agencies focus on siloed platform metrics—CTR, CPC, or simple impressions. They often lose sight of the **Economic Reality** of your business. <br /><br />
                KROMIQ solves this by building cross-channel attribution models that map every cent of ad spend to real-world revenue outcomes. We don&apos;t settle for vanity traffic; we fight for conversion.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                <PieChart className="text-accent mb-4" />
                <h4 className="font-bold mb-2">Alpha Attribution</h4>
                <p className="text-xs text-foreground/30 leading-relaxed">Closing the loop between click and customer reality.</p>
              </div>
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl mt-4">
                <MousePointer2 className="text-accent mb-4" />
                <h4 className="font-bold mb-2">High-Intent Only</h4>
                <p className="text-xs text-foreground/30 leading-relaxed">Aggressively filtering for users with the highest probability of procurement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Framework */}
      <section className="py-32 md:py-44 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter mb-8 text-foreground">The Ad <br /><span className="text-foreground/40 italic">Engine.</span></h2>
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
              <h2 className="text-4xl font-display font-bold tracking-tight mb-12 text-foreground">Ad System Deliverables</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shadow-[0_0_10px_rgba(34,211,238,0.4)]" />
                    <span className="text-sm text-foreground/60 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-accent/5 rounded-3xl p-12 border border-accent/10 flex flex-col justify-center">
              <Layers className="text-accent mb-8" size={48} />
              <h3 className="text-3xl font-bold mb-6 tracking-tight text-foreground">Multi-Node Distribution</h3>
              <p className="text-foreground/50 leading-relaxed">
                We manage campaigns across Google, Meta, LinkedIn, and programmatic networks, ensuring your brand maintains absolute omnipresence where your customers actually exist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-foreground">Advertising FAQ</h2>
            <div className="space-y-12">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-accent">What spend levels do you typically manage?</h4>
                <p className="text-foreground/40 text-sm leading-relaxed">We specialize in enterprise-grade management, starting at $10k/month, scaling to multi-million dollar global budgets with full transparency.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-accent">How do you handle B2B retargeting?</h4>
                <p className="text-foreground/40 text-sm leading-relaxed">We use account-based marketing (ABM) techniques to retarget specific decision-makers at target companies with surgical precision.</p>
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
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-foreground">Ready to <br /><span className="text-accent italic">dominate</span>?</h2>
                <p className="text-foreground/40 mb-10 text-lg">Stop leaking ad spend. Let&apos;s architect your high-yield engine.</p>
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
