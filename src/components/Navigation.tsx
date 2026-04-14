'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#ecosystem' },
    { name: 'Results', href: '#results' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'py-3 bg-[#030303]/90 backdrop-blur-2xl border-b border-white/[0.04]' : 'py-6 md:py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-10 flex justify-between items-center">
        <motion.a 
          href="#" 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="flex items-center gap-1 group relative"
        >
          <span className="font-display text-2xl font-bold tracking-tighter text-foreground">
            KROMIQ
          </span>
          <span className="w-2 h-2 rounded-full bg-primary neon-text-primary ml-0.5 mt-1" />
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-10 text-[13px] tracking-tight text-foreground/50 font-sans font-medium">
            {navLinks.map((link, i) => (
              <motion.a 
                key={link.name} 
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easeOut, delay: i * 0.08 }}
                className="hover:text-foreground transition-colors relative group"
              >
                {link.name}
                <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500 ease-out" />
              </motion.a>
            ))}
          </div>
          
          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.4, ease: easeOut }}
            className="px-8 py-3 bg-primary text-white text-[13px] font-sans font-semibold tracking-tight transition-all rounded-full hover:shadow-[0_0_30px_rgba(255,0,85,0.4)]"
          >
            Get Started
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#030303] border-b border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-8 py-10 flex flex-col gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-display font-medium tracking-tight"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center py-4 bg-primary text-white font-semibold tracking-tight rounded-full"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
