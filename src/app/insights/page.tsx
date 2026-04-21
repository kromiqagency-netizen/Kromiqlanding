'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { ArrowRight, Clock, Tag } from 'lucide-react';

const posts = [
  {
    title: "Why Strategic Intelligence is the Future of Digital Agencies",
    excerpt: "Moving beyond simple metrics to forensic data analysis and high-fidelity creative synthesis.",
    date: "April 22, 2026",
    category: "Strategy",
    slug: "strategic-intelligence-future",
    readTime: "5 min"
  },
  {
    title: "How to Build a High-Performance Digital Ecosystem",
    excerpt: "Integrating brand identity with autonomous AI workflows for exponential scale.",
    date: "April 20, 2026",
    category: "Intelligence",
    slug: "building-digital-ecosystems",
    readTime: "8 min"
  },
  {
    title: "The KROMIQ Guide to Semantic SEO Domination",
    excerpt: "Why keywords are dead and topical authority is the only way to rank in the age of AI.",
    date: "April 18, 2026",
    category: "SEO",
    slug: "semantic-seo-domination",
    readTime: "6 min"
  }
];

export default function InsightsPage() {
  const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <main className="min-h-screen bg-[#030303] selection:bg-primary/30">
      <Navigation />
      
      <section className="pt-48 pb-32">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: easeOut }}
              className="font-mono text-[11px] tracking-[0.5em] text-primary mb-6 uppercase font-bold"
            >
              Topical Authority // Insights
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: easeOut, delay: 0.1 }}
              className="font-display text-5xl md:text-8xl font-bold tracking-tighter mb-10 text-foreground leading-[0.9]"
            >
              Strategic <br /> <span className="text-foreground/30 italic">Intelligence.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: easeOut, delay: 0.2 }}
              className="text-xl md:text-2xl text-foreground/40 leading-tight mb-20 max-w-2xl font-sans tracking-tight"
            >
              Exploring the intersection of forensic data, radical design, and exponential growth strategies.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeOut, delay: 0.3 + (i * 0.1) }}
                className="group relative flex flex-col p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 hover:border-primary/20 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-mono text-primary uppercase tracking-widest">
                    {post.category}
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-foreground/20 uppercase tracking-widest">
                    <Clock size={10} />
                    {post.readTime}
                  </div>
                </div>
                
                <h2 className="text-2xl font-display font-bold mb-4 leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-sm text-foreground/40 leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                  <span className="text-[10px] font-mono text-foreground/20 uppercase tracking-widest">
                    {post.date}
                  </span>
                  <div className="text-primary group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
