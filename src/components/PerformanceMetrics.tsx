'use client';

import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

interface MetricProps {
  label: string;
  value: string;
  desc: string;
  color?: string;
}

export default function PerformanceMetrics({ metrics }: { metrics: MetricProps[] }) {
  const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <div className="grid md:grid-cols-3 gap-8 py-12">
      {metrics.map((metric, i) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut, delay: i * 0.1 }}
          className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl relative overflow-hidden group hover:border-primary/20 transition-all"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <TrendingUp size={20} />
            </div>
            <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight size={18} />
            </div>
          </div>
          <div className="text-4xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {metric.value}
          </div>
          <div className="text-[10px] text-foreground/30 font-mono uppercase tracking-[0.2em] font-bold mb-4">
            {metric.label}
          </div>
          <p className="text-sm text-foreground/40 leading-relaxed group-hover:text-foreground/60 transition-colors">
            {metric.desc}
          </p>
          
          {/* Subtle background glow */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 blur-[40px] rounded-full group-hover:bg-primary/10 transition-all" />
        </motion.div>
      ))}
    </div>
  );
}
