import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Performance PPC Management | High-ROI Digital Advertising | KROMIQ",
  description: "Maximize your advertising yield with performance-driven PPC management. Specialized retargeting, global scale, and precision targeting for B2B and enterprise brands.",
};

export default function PPCPage() {
  return (
    <main className="min-h-screen pt-20 px-4 md:px-8 space-y-24">
      <Navigation />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-outfit font-bold leading-tight">
              Performance <br />
              <span className="text-accent tracking-tighter">PPC Management</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-xl">
              Precision-engineered advertising campaigns. We leverage advanced multi-channel attribution and competitor conquesting to maximize your return on ad spend.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs font-mono">HIGH ROI</span>
              <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs font-mono">B2B SPECIALIZED</span>
              <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs font-mono">PRECISION TARGETING</span>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-secondary p-8 rounded-2xl border border-white/10 h-64 flex items-center justify-center">
              <span className="text-9xl opacity-10 font-bold select-none">PPC</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-accent rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="max-w-2xl mx-auto pb-24">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Scale Your Advertising</h2>
          <p className="text-foreground/60">Get a precision audit of your current ad performance.</p>
        </div>
        <LeadCaptureForm />
      </section>
    </main>
  );
}
