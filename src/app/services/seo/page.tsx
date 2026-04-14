import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Enterprise SEO Optimization | Global Search Dominance | KROMIQ",
  description: "Accelerate your enterprise growth with KROMIQ's data-driven SEO. Advanced SGE optimization, technical excellence, and E-E-A-T compliance for world-class brands.",
};

export default function SEOPage() {
  return (
    <main className="min-h-screen pt-20 px-4 md:px-8 space-y-24">
      <Navigation />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-outfit font-bold leading-tight">
              Enterprise SEO <br />
              <span className="text-primary tracking-tighter">Optimization</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-xl">
              Dominate the algorithmic landscape. We synthesize technical excellence with high-velocity topical authority to secure your position at the apex of global and local search.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-mono">SGE-READY</span>
              <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-mono">E-E-A-T COMPLIANT</span>
              <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-mono">GLOBAL SCALE</span>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-secondary p-8 rounded-2xl border border-white/10 h-64 flex items-center justify-center">
              <span className="text-9xl opacity-10 font-bold select-none">SEO</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-primary rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Framework */}
      <section className="max-w-5xl mx-auto py-12">
        <div className="space-y-16">
          <div className="border-l-2 border-primary pl-8 space-y-4">
            <h2 className="text-3xl font-bold font-outfit">The Shift to Entity-Based Search</h2>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Google’s Search Generative Experience (SGE) has fundamentally transformed the index. We guide your transition from lexical keyword targeting to becoming an authoritative data node that LLMs cite directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            {[
              { title: "Technical Infrastructure", desc: "Mobile-first excellence, sub-100ms LCP, and rigorous Schema markup deployment." },
              { title: "Topical Authority", desc: "Building comprehensive topic clusters that signal absolute mastery to crawlers." },
              { title: "Conversion Architecture", desc: "Optimizing search intent for procurement, not just vanity metrics." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-secondary/50 rounded-xl border border-white/5 space-y-3">
                <h3 className="font-bold text-primary uppercase tracking-widest">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="max-w-2xl mx-auto pb-24">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Secure Your Dominance</h2>
          <p className="text-foreground/60">Ready to audit your algorithmic footprint?</p>
        </div>
        <LeadCaptureForm />
      </section>
    </main>
  );
}
