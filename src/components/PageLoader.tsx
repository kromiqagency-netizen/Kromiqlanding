'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030303]"
        >
          {/* Central Creative Loader: The Neural Heart */}
          <div className="relative">
            {/* Core Pulse */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-16 h-16 bg-primary rounded-full blur-md"
            />
            
            {/* Inner Ring */}
            <motion.div
              animate={{
                scale: [0.8, 1.4, 0.8],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 border-2 border-primary/30 rounded-full border-dashed"
            />

            {/* Outer Expanding Ripples */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeOut",
                }}
                className="absolute inset-0 border border-primary/20 rounded-full"
              />
            ))}

            {/* Strategic Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-24 left-1/2 -translate-x-1/2 whitespace-nowrap text-center"
            >
              <div className="text-xs font-mono text-primary/60 tracking-[0.5em] uppercase mb-2">Initializing</div>
              <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">KROMIQ // NEURAL CORE</div>
            </motion.div>
          </div>
          
          {/* Atmospheric background noise or subtle grid could go here */}
          <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-[0.02] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
