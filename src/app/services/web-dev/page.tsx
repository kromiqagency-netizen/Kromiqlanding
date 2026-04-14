import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Custom Web Development | High-Performance Site Architecture | KROMIQ",
  description: "Build a high-velocity digital foundation with KROMIQ's custom web development. SEO-first architecture, sub-100ms performance, and scalable Next.js solutions.",
};

export default function WebDevPage() {
  return (
    <main className="min-h-screen pt-20 px-4 md:px-8 space-y-24">
      <Navigation />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-outfit font-bold leading-tight">
              Custom Web <br />
              <span className="text-emerald-400 tracking-tighter">Development</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-xl">
              High-velocity digital infrastructure. We synthesize cutting-edge Next.js architecture with SEO-first engineering to build websites that perform at scale.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-mono">SEO-FIRST ARCHITECTURE</span>
              <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-mono">NEXT.JS EXPERTS</span>
              <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-mono">ULTRA-FAST LCP</span>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-secondary p-8 rounded-2xl border border-white/10 h-64 flex items-center justify-center">
              <span className="text-9xl opacity-10 font-bold select-none">CODE</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 border-b-4 border-r-4 border-emerald-500 rounded-br-2xl animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="max-w-2xl mx-auto pb-24">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Build Your Foundation</h2>
          <p className="text-foreground/60">Let’s architect a high-performance site for your brand.</p>
        </div>
        <LeadCaptureForm />
      </section>
    </main>
  );
}
