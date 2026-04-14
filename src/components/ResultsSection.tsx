'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Target } from 'lucide-react';

const metrics = [
  { value: '340%', label: 'Average ROI', sublabel: 'across client portfolio', icon: TrendingUp, color: 'text-primary' },
  { value: '50+', label: 'Brands Scaled', sublabel: 'from seed to series', icon: Users, color: 'text-accent' },
  { value: '98%', label: 'Client Retention', sublabel: 'year over year', icon: Award, color: 'text-violet' },
  { value: '2.4x', label: 'Conversion Lift', sublabel: 'median improvement', icon: Target, color: 'text-cyan' },
];

const caseStudies = [
  {
    client: 'Alayaa.co.in',
    industry: 'Luxury Jewellery / D2C',
    result: '+210% online revenue in 6 months',
    description: 'End-to-end brand transformation — from visual identity and premium packaging to a high-conversion storefront and performance marketing engine for fine jewellery.',
    metrics: ['210% Revenue Growth', '3.8x ROAS', '45% Repeat Customers'],
  },
  {
    client: 'WanderSoul.co.in',
    industry: 'Travel / Experiential Tourism',
    result: '5x booking volume in one quarter',
    description: 'Designed an immersive digital experience that converts wanderlust into bookings — complete with SEO strategy, content engine, and automated lead nurture.',
    metrics: ['5x Booking Volume', '68% Organic Traffic', '2.1s Page Load'],
  },
  {
    client: 'Rojgaar.co',
    industry: 'Staffing / Gig Economy',
    result: '12,000+ workers deployed per month',
    description: 'Architected the operational backbone connecting delivery partners to Zepto and other enterprise clients at scale.',
    metrics: ['12K+ Monthly Deploys', '99.2% Uptime', '3 City Expansion'],
  },
];

export default function ResultsSection() {
  const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <section id="results" className="py-32 md:py-44 relative bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="text-[10px] md:text-sm text-primary font-semibold tracking-wide mb-4 uppercase"
          >
            Proven Impact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
            className="font-display text-4xl md:text-7xl font-bold tracking-tighter mb-6 leading-[0.9]"
          >
            Results that speak <br />
            <span className="text-foreground/40 italic font-medium">louder than pitchdecks.</span>
          </motion.h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeOut, delay: i * 0.1 }}
              className="p-6 md:p-8 bg-zinc-900/50 border border-white/5 rounded-2xl text-center group hover:border-white/10 transition-all"
            >
              <div className={`${metric.color} mb-3 md:mb-4 flex justify-center`}>
                <metric.icon size={22} />
              </div>
              <div className={`text-3xl md:text-5xl font-display font-bold tracking-tighter mb-2 ${metric.color}`}>
                {metric.value}
              </div>
              <div className="text-[10px] md:text-sm font-semibold text-foreground/70 mb-1">{metric.label}</div>
              <div className="text-[9px] md:text-xs text-foreground/30">{metric.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeOut, delay: i * 0.1 }}
              className="group p-6 md:p-12 bg-zinc-900/30 border border-white/5 rounded-2xl hover:border-white/10 transition-all neon-border"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                    <h3 className="text-xl md:text-3xl font-display font-bold tracking-tight">{study.client}</h3>
                    <span className="w-fit text-[10px] bg-white/5 text-foreground/40 px-3 py-1 rounded-full font-medium">{study.industry}</span>
                  </div>
                  <p className="text-primary font-semibold text-base md:text-lg mb-3">{study.result}</p>
                  <p className="text-foreground/40 text-sm md:text-base leading-relaxed max-w-2xl">{study.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 md:flex-col md:items-end md:flex-shrink-0">
                  {study.metrics.map((m) => (
                    <span key={m} className="text-[9px] md:text-xs bg-white/[0.03] border border-white/5 text-foreground/50 px-3 md:px-4 py-1.5 md:py-2 rounded-full font-mono whitespace-nowrap">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
