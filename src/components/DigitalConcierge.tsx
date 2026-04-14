'use client';

import { motion } from 'framer-motion';
import { MessageSquare, X, Camera } from 'lucide-react';
import { useState } from 'react';

export default function DigitalConcierge() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative"
      >
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-4 bg-[#030303]/90 backdrop-blur-xl border border-white/10 p-2 pr-6 rounded-full hover:border-primary/40 transition-all shadow-2xl"
          >
            <div className="w-12 h-12 bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center rounded-full text-white shadow-lg group-hover:scale-110 transition-transform">
              <Camera size={22} />
            </div>
            <div className="text-left">
              <div className="text-[10px] text-primary font-semibold uppercase tracking-wider">DM Us</div>
              <div className="text-sm font-semibold text-foreground/80">@kromiq.agency</div>
            </div>
          </button>
        )}

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="w-80 bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] p-6 text-white relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              <Camera size={28} className="mb-3" />
              <h3 className="text-lg font-bold">Chat with us</h3>
              <p className="text-sm text-white/80">We usually reply within an hour</p>
            </div>
            
            <div className="p-6 space-y-5">
              <p className="text-sm text-foreground/50 leading-relaxed">
                Have a question or want to start a project? Send us a DM on Instagram — we&apos;re always happy to chat.
              </p>
              
              <a
                href="https://ig.me/m/kromiq.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full p-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                <Camera size={18} />
                Open Instagram DM
              </a>
              
              <p className="text-xs text-center text-foreground/20">
                @kromiq.agency
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
