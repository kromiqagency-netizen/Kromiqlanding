'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "KROMIQ completely transformed our jewellery brand from the ground up. The new identity and storefront drove a 210% revenue jump — it was the best investment we've made.",
    name: 'Founder',
    title: 'Alayaa.co.in',
    metric: '210% Revenue Growth',
  },
  {
    quote: "They built us a digital experience that actually converts. Our booking volume went 5x within a single quarter. The SEO and content strategy alone paid for itself.",
    name: 'Co-founder',
    title: 'WanderSoul.co.in',
    metric: '5x Booking Volume',
  },
  {
    quote: "Working with KROMIQ feels like having a world-class technical co-founder on speed dial. They move incredibly fast without ever cutting corners.",
    name: 'Neha Sharma',
    title: 'COO, Rojgaar.co',
    metric: '99.2% System Uptime',
  },
];

export default function TestimonialsSection() {
  const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <section className="py-32 md:py-44 relative bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="text-[10px] md:text-sm text-primary font-semibold tracking-wide mb-4 uppercase"
          >
            Client Voices
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
            className="font-display text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9]"
          >
            Trusted by founders <br />
            <span className="text-foreground/40 italic font-medium">who demand excellence.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeOut, delay: i * 0.15 }}
              className="group p-6 md:p-10 bg-zinc-900/30 border border-white/5 rounded-2xl hover:border-white/10 transition-all flex flex-col justify-between relative"
            >
              <div>
                <Quote size={24} className="text-primary/30 mb-6 md:w-7 md:h-7" />
                <p className="text-foreground/60 text-sm md:text-base leading-relaxed mb-8 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div>
                <div className="flex items-center justify-between border-t border-white/5 pt-6">
                  <div>
                    <div className="text-xs md:text-sm font-semibold text-foreground/80">{t.name}</div>
                    <div className="text-[10px] md:text-xs text-foreground/30">{t.title}</div>
                  </div>
                  <span className="text-[9px] md:text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                    {t.metric}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
