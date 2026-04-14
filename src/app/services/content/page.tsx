import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Global Content Strategy | E-E-A-T Compliant Growth | KROMIQ",
  description: "Establish unassailable topical authority with KROMIQ's global content strategy. Optimized for human engagement and machine learning comprehension.",
};

export default function ContentPage() {
  return (
    <main className="min-h-screen pt-20 px-4 md:px-8 space-y-24">
      <Navigation />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-outfit font-bold leading-tight">
              Global <br />
              <span className="text-indigo-400 tracking-tighter">Content Strategy</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-xl">
              Content as an authoritative asset. We synthesize journalistic quality with algorithmic precision to build unassailable brand trust (E-E-A-T).
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs font-mono">E-E-A-T FOCUS</span>
              <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs font-mono">TOPICAL AUTHORITY</span>
              <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs font-mono">MULTI-REGION</span>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-secondary p-8 rounded-2xl border border-white/10 h-64 flex items-center justify-center">
              <span className="text-9xl opacity-10 font-bold select-none">DATA</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 border-2 border-indigo-500 rounded-lg animate-spin-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="max-w-2xl mx-auto pb-24">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Build Your Authority</h2>
          <p className="text-foreground/60">Let’s map your content ecosystem for exponential growth.</p>
        </div>
        <LeadCaptureForm />
      </section>
    </main>
  );
}
