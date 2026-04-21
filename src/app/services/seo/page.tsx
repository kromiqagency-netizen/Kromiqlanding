'use client';

import Navigation from "@/components/Navigation";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import { Globe, Zap, BarChart3, ShieldCheck, Search, Database, Cpu, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function SEOPage() {
  const framework = [
    { 
      number: "01",
      title: "Technical Infrastructure", 
      desc: "Forensic technical audit focusing on sub-100ms LCP, mobile-first indexing excellence, and rigorous JSON-LD Schema deployment." 
    },
    { 
      number: "02",
      title: "Topical Synthesis", 
      desc: "Building comprehensive semantic clusters that transition your site from a collection of keywords to an authoritative entity node." 
    },
    { 
      number: "03",
      title: "Authority Accumulation", 
      desc: "Executing high-velocity link synthesis and digital PR to build the E-E-A-T signals required for high-competition SERP dominance." 
    },
    { 
      number: "04",
      title: "AI & SGE Integration", 
      desc: "Optimizing content for the Search Generative Experience, ensuring your brand is cited as the primary source by LLMs and search agents." 
    },
  ];

  const deliverables = [
    "Comprehensive Technical SEO Audit",
    "Semantic Topic Cluster Architecture",
    "Advanced Entity-Based Schema Markup",
    "High-Authority Backlink Synthesis",
    "SGE & LLM Optimization Strategy",
    "Custom Search Analytics Dashboards",
  ];

  const metrics = [
    { label: "Share of Search", value: "+340%", desc: "Exponential growth in organic mindshare across high-intent search categories." },
    { label: "Organic Revenue", value: "+156%", desc: "Direct revenue attribution from non-branded organic traffic through intent-matching." },
    { label: "SGE Citation Freq", value: "x3.2", desc: "Measured frequency of brand citation within AI-generated search snapshots." },
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
              <Database size={16} /> [ Algorithmic Infrastructure v5.0 ]
            </motion.div>
            <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter leading-[0.85] mb-10 text-foreground">
              Global <br />
              <span className="text-foreground/40 italic font-medium">Dominance.</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/40 max-w-2xl leading-relaxed mb-12 font-sans tracking-tight">
              We don&apos;t just optimize for keywords; we architect digital entities that command absolute authority across traditional search and the new era of LLM-driven discovery.
            </p>
            
            <div className="w-full">
              <PerformanceMetrics metrics={metrics} />
            </div>
          </div>
        </div>
        {/* Background algorithmic glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-[-10%] left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      </section>

      {/* The SEO Gap Section */}
      <section className="py-24 border-t border-white/5 bg-zinc-900/10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8 text-foreground">The Keyword Trap</h2>
              <p className="text-lg text-foreground/50 leading-relaxed space-y-6 lg:max-w-xl">
                Most agencies are still fighting for vanity keywords using 2010 tactics. They ignore the shift toward **Generative Search** and **Entity Authority**. <br /><br />
                KROMIQ architects your presence to be the definitive answer for your sector. We optimize for intent and intelligence, ensuring that when an AI or a human asks a question, your brand is the result.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                <Cpu className="text-primary mb-4" />
                <h4 className="font-bold mb-2">SGE Optimized</h4>
                <p className="text-xs text-foreground/30 leading-relaxed">Securing your brand&apos;s place in the AI-generated search snapshots.</p>
              </div>
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl mt-4">
                <Activity className="text-primary mb-4" />
                <h4 className="font-bold mb-2">High Velocity</h4>
                <p className="text-xs text-foreground/30 leading-relaxed">Rapid indexation and authority building for competitive global markets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Framework */}
      <section className="py-32 md:py-44 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter mb-8 text-foreground">Algorithmic <br /><span className="text-foreground/40 italic">Dominance.</span></h2>
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
              <h2 className="text-4xl font-display font-bold tracking-tight mb-12 text-foreground">SEO Deliverables</h2>
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
              <Globe className="text-primary mb-8" size={48} />
              <h3 className="text-3xl font-bold mb-6 tracking-tight text-foreground">Global Entity Rank</h3>
              <p className="text-foreground/50 leading-relaxed">
                We don&apos;t just rank in your city; we optimize for global linguistic nuances and international server nodes, ensuring your search authority scales across borders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-foreground">Search FAQ</h2>
            <div className="space-y-12">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary">Is SEO still relevant in the age of AI?</h4>
                <p className="text-foreground/40 text-sm leading-relaxed">Correct. It has evolved. SEO is now &quot;Search Infrastructure Optimization.&quot; If your data isn&apos;t structured for LLMs, you don&apos;t exist in the new index.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary">How long until we see first-page results?</h4>
                <p className="text-foreground/40 text-sm leading-relaxed">For enterprise technical fixes, we often see volatility and gains in 4-6 weeks. Broad authority building typically takes 4-6 months.</p>
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
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-foreground">Secure Your <br /><span className="text-primary italic">Dominance.</span></h2>
                <p className="text-foreground/40 mb-10 text-lg">Don&apos;t be invisible. Let’s audit your algorithmic footprint.</p>
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
