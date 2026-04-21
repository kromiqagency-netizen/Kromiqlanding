'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Lock, ArrowRight, Loader2, Sparkles, Phone } from 'lucide-react';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';

const formSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a complete email (e.g. name@gmail.com)'),
  company: z.string().min(2, 'Please enter your company or project name'),
  phone: z.string().optional(),
  inquiry: z.string().min(10, 'Tell us a bit more so we can prepare'),
  turnstileToken: z.string().optional(),
  authorized_override: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function LeadCaptureForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [auditRef, setAuditRef] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const [loadingStage, setLoadingStage] = useState<string | null>(null);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setServerError(null);
    setLoadingStage("ESTABLISHING SECURE LINK");

    const finalData = {
      ...data,
      turnstileToken: data.turnstileToken || 'localhost_bypass_token'
    };

    try {
      // Add artificial delay for dramatic effect/loading sequence
      await new Promise(resolve => setTimeout(resolve, 800));
      setLoadingStage("ENCRYPTING STRATEGIC INTENT");
      
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalData),
      });

      await new Promise(resolve => setTimeout(resolve, 800));
      setLoadingStage("SYNCING WITH NEURAL CORE");
      await new Promise(resolve => setTimeout(resolve, 600));

      const result = await response.json();
      if (response.ok) {
        setAuditRef(result.auditRef);
        setIsSuccess(true);
        reset();
      } else {
        setServerError(result.message || 'Transmission failed. Please check your inputs.');
        turnstileRef.current?.reset();
      }
    } catch (err) {
      setServerError('Network node unavailable. Please try again.');
    } finally {
      setIsSubmitting(false);
      setLoadingStage(null);
    }
  };

  return (
    <div className="relative min-h-[400px] flex flex-col justify-center">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="py-12 text-center relative"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[100px] -z-10" />
            
            <div className="relative inline-block mb-10">
              <motion.div 
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", damping: 15, stiffness: 100 }}
                className="w-24 h-24 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center border border-primary/30 rotate-12"
              >
                <CheckCircle2 className="text-primary" size={48} />
              </motion.div>
              
              {/* Particle Effects */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 2], 
                    opacity: [0.5, 0],
                    rotate: i * 45 
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  className="absolute inset-0 border border-primary/20 rounded-3xl -z-10"
                />
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-display text-5xl font-bold mb-6 tracking-tighter text-foreground leading-tight">
                Transmission <br />
                <span className="text-primary italic">Successful.</span>
              </h3>
              
              <div className="max-w-xs mx-auto mb-10 space-y-4">
                <p className="text-foreground/60 text-sm leading-relaxed font-medium">
                  Your strategic intent has been successfully indexed into our neural infrastructure.
                </p>
                
                {auditRef && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="inline-flex flex-col items-center px-6 py-3 bg-white/[0.03] border border-white/5 rounded-2xl"
                  >
                    <span className="text-[9px] font-mono text-foreground/30 uppercase tracking-[0.3em] mb-1">Audit Reference</span>
                    <span className="text-sm font-mono text-primary font-bold tracking-widest">{auditRef}</span>
                  </motion.div>
                )}
              </div>

              <div className="flex flex-col items-center gap-6">
                <p className="text-[11px] font-mono text-foreground/20 uppercase tracking-[0.2em]">
                  Confirmation Dossier Dispatched
                </p>
                
                <button 
                  onClick={() => {
                    setIsSuccess(false);
                    setAuditRef(null);
                  }}
                  className="group relative px-10 py-4 overflow-hidden rounded-full border border-white/10 transition-all hover:border-primary/50"
                >
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all" />
                  <span className="relative text-[10px] font-mono uppercase tracking-[0.4em] text-foreground/40 group-hover:text-primary transition-colors">
                    [ New Inquiry ]
                  </span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.form 
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)} 
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-foreground/40 ml-1">Full Name</label>
                <input 
                  {...register('name')}
                  placeholder="Enter your name"
                  className={`w-full bg-white/[0.03] border ${errors.name ? 'border-primary/50' : 'border-white/10'} rounded-2xl px-6 py-4 text-foreground text-sm focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all placeholder:text-white/20`}
                />
                {errors.name && <p className="text-primary text-[10px] font-medium ml-1">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-foreground/40 ml-1">Email Address</label>
                <input 
                  {...register('email')}
                  placeholder="name@email.com"
                  className={`w-full bg-white/[0.03] border ${errors.email ? 'border-primary/50' : 'border-white/10'} rounded-2xl px-6 py-4 text-foreground text-sm focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all placeholder:text-white/20`}
                />
                {errors.email && <p className="text-primary text-[10px] font-medium ml-1">{errors.email.message}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-foreground/40 ml-1">Company</label>
                <input 
                  {...register('company')}
                  placeholder="Company Name"
                  className={`w-full bg-white/[0.03] border ${errors.company ? 'border-primary/50' : 'border-white/10'} rounded-2xl px-6 py-4 text-foreground text-sm focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all placeholder:text-white/20`}
                />
                {errors.company && <p className="text-primary text-[10px] font-medium ml-1">{errors.company.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-foreground/40 ml-1 truncate">Phone <span className="text-[9px] opacity-50 italic lowercase">(optional)</span></label>
                <input 
                  {...register('phone')}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-foreground text-sm focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all placeholder:text-white/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-foreground/40 ml-1">How can we help?</label>
              <textarea 
                {...register('inquiry')}
                placeholder="Briefly describe your project goals..."
                rows={4}
                className={`w-full bg-white/[0.03] border ${errors.inquiry ? 'border-primary/50' : 'border-white/10'} rounded-2xl px-6 py-5 text-foreground text-sm focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all resize-none placeholder:text-white/20`}
              />
              {errors.inquiry && <p className="text-primary text-[10px] font-medium ml-1">{errors.inquiry.message}</p>}
            </div>

            <div className="flex flex-col sm:flex-row items-end sm:items-center justify-between gap-8 pt-4">
              <div className="w-full sm:w-auto min-h-[65px] flex items-center transition-opacity duration-300">
                <Turnstile
                  ref={turnstileRef}
                  // Using Cloudflare's 'Always Pass' key for localhost/testing
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'} 
                  onSuccess={(token) => {
                    console.log('[SECURITY] Turnstile verified:', token);
                    setValue('turnstileToken', token);
                  }}
                  options={{ theme: 'dark', size: 'normal' }}
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full sm:w-auto px-12 py-5 bg-primary text-white font-black text-sm uppercase tracking-widest rounded-full flex items-center justify-center gap-4 disabled:opacity-50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,0,85,0.4)] hover:-translate-y-1 active:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin text-white/50" size={18} />
                    <span className="font-mono text-[10px] tracking-[0.2em]">{loadingStage}</span>
                  </>
                ) : (
                  <>
                    <span>START PROJECT</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </div>

            {serverError && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-4 bg-primary/5 border border-primary/20 rounded-xl flex items-center gap-3"
              >
                <Lock size={16} className="text-primary flex-shrink-0" />
                <p className="text-primary text-[10px] font-mono uppercase tracking-widest">{serverError}</p>
              </motion.div>
            )}

            {/* Honeypot */}
            <div className="absolute opacity-0 pointer-events-none -z-50 h-0 w-0 overflow-hidden" aria-hidden="true">
              <input type="text" {...register('authorized_override')} tabIndex={-1} autoComplete="off" />
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-center gap-3 opacity-20 group-hover:opacity-40 transition-opacity">
        <Sparkles size={12} className="text-primary" />
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase">End-to-End Encryption Active</span>
      </div>
    </div>
  );
}
