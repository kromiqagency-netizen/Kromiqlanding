'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem('kromiq_loader_shown');
    if (!hasShown) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('kromiq_loader_shown', 'true');
      }, 1400); // Faster load feel
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030303]"
        >
          {/* Extremely Minimal Line Loader */}
          <div className="relative w-32 h-[1px] bg-white/[0.05]">
            <motion.div
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "circInOut",
              }}
              className="absolute top-0 w-16 h-full bg-primary shadow-[0_0_10px_rgba(255,0,85,0.6)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
