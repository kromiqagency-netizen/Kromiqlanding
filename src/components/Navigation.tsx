'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const services = [
  { name: 'Brand Identity', href: '/services/brand-identity', desc: 'Radical Visual Architecture' },
  { name: 'Digital Strategy', href: '/services/digital-strategy', desc: 'Growth Infrastructure' },
  { name: 'AI Automation', href: '/services/ai-automation', desc: 'Autonomous Intelligence' },
  { name: 'Performance PPC', href: '/services/ppc', desc: 'Surgical Ad Precision' },
  { name: 'Enterprise SEO', href: '/services/seo', desc: 'Global Search Dominance' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#', hasDropdown: true },
    { name: 'Insights', href: '/insights' },
    { name: 'Results', href: '/#results' },
    { name: 'Process', href: '/#process' },
    { name: 'Contact', href: '/#contact' },
  ];

  const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'py-3 bg-[#030303]/90 backdrop-blur-2xl border-b border-white/[0.04]' : 'py-6 md:py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-10 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-1 group relative">
          <span className="font-display text-2xl font-bold tracking-tighter text-foreground">
            KROMIQ
          </span>
          <span className="w-2 h-2 rounded-full bg-primary neon-text-primary ml-0.5 mt-1" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-10 text-[13px] tracking-tight text-foreground/50 font-sans font-medium">
            {navLinks.map((link, i) => (
              <div 
                key={link.name} 
                className="relative group py-2"
                onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
              >
                <Link 
                  href={link.href}
                  className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />}
                </Link>
                
                {!link.hasDropdown && (
                  <div className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500 ease-out" />
                )}

                {/* Services Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: easeOut }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-2"
                      >
                        <div className="grid gap-1">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="group/item flex flex-col p-4 rounded-xl hover:bg-white/[0.03] transition-colors"
                            >
                              <span className="text-foreground font-bold tracking-tight mb-0.5">{service.name}</span>
                              <span className="text-[10px] text-foreground/30 font-mono uppercase tracking-widest group-hover/item:text-primary/70 transition-colors">{service.desc}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>
          
          <Link 
            href="/#contact" 
            className="px-8 py-3 bg-primary text-white text-[13px] font-sans font-semibold tracking-tight transition-all rounded-full hover:shadow-[0_0_30px_rgba(255,0,85,0.4)]"
          >
            Get Started
          </Link>
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
            <div className="container mx-auto px-8 py-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <div className="space-y-4">
                      <button 
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between w-full text-2xl font-display font-medium tracking-tight"
                      >
                        {link.name}
                        <ChevronDown size={20} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-white/5 rounded-2xl overflow-hidden"
                          >
                            <div className="p-4 grid gap-4">
                              {services.map((service) => (
                                <Link 
                                  key={service.name} 
                                  href={service.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="flex flex-col"
                                >
                                  <span className="text-lg font-bold">{service.name}</span>
                                  <span className="text-[10px] text-foreground/40 font-mono uppercase tracking-widest">{service.desc}</span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      href={link.href} 
                      onClick={() => setIsMenuOpen(false)}
                      className="text-2xl font-display font-medium tracking-tight"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link 
                href="/#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center py-4 bg-primary text-white font-semibold tracking-tight rounded-full mt-4"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
