'use client';

import { motion } from 'framer-motion';

export default function TrustSection() {
  const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <section className="py-20 border-y border-white/[0.03] bg-[#030303]">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="text-[10px] font-mono text-foreground/20 uppercase tracking-[0.5em] mb-12 font-bold"
          >
            Trusted by Industry Innovators
          </motion.p>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {/* These are placeholders - real logos should be added here */}
            {['Nexus', 'Chroma', 'Vertex', 'Quant', 'Apex'].map((brand, i) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="text-2xl md:text-3xl font-display font-bold tracking-tighter"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
