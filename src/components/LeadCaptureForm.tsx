'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Lock, ArrowRight } from 'lucide-react';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';

const formSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().min(2, 'Please enter your company name'),
  inquiry: z.string().min(10, 'Tell us a bit more about your project'),
  turnstileToken: z.string().min(1, 'Security verification required'),
  authorized_override: z.string().max(0, { message: 'Antibot triggered' }).optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function LeadCaptureForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
      } else {
        const result = await response.json();
        setError(result.message || 'Something went wrong. Please try again.');
        turnstileRef.current?.reset();
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: easeOut }}
        className="p-12 md:p-16 text-center"
      >
        <CheckCircle2 className="mx-auto text-primary mb-6" size={56} />
        <h3 className="font-display text-3xl font-bold mb-4 tracking-tight">Thank you!</h3>
        <p className="text-foreground/50 mb-8 text-base leading-relaxed max-w-sm mx-auto">
          We&apos;ve received your request. A KROMIQ strategist will reach out within 24 hours.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-primary text-sm font-medium hover:underline underline-offset-4 transition-all"
        >
          Submit another request
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground/60">Your Name</label>
          <input 
            {...register('name')}
            placeholder="John Doe"
            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-foreground text-sm focus:outline-none focus:border-primary/60 focus:bg-white/[0.05] transition-all placeholder:text-white/20"
          />
          {errors.name && <p className="text-primary text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground/60">Email Address</label>
          <input 
            {...register('email')}
            placeholder="john@company.com"
            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-foreground text-sm focus:outline-none focus:border-primary/60 focus:bg-white/[0.05] transition-all placeholder:text-white/20"
          />
          {errors.email && <p className="text-primary text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground/60">Company</label>
        <input 
          {...register('company')}
          placeholder="Your company name"
          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-foreground text-sm focus:outline-none focus:border-primary/60 focus:bg-white/[0.05] transition-all placeholder:text-white/20"
        />
        {errors.company && <p className="text-primary text-xs mt-1">{errors.company.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground/60">Tell us about your project</label>
        <textarea 
          {...register('inquiry')}
          placeholder="What are you looking to achieve? What challenges are you facing?"
          rows={4}
          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-foreground text-sm focus:outline-none focus:border-primary/60 focus:bg-white/[0.05] transition-all resize-none placeholder:text-white/20"
        />
        {errors.inquiry && <p className="text-primary text-xs mt-1">{errors.inquiry.message}</p>}
      </div>

      <div className="py-1">
        <Turnstile
          ref={turnstileRef}
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'} 
          onSuccess={(token) => setValue('turnstileToken', token)}
          options={{ theme: 'dark', size: 'flexible' }}
        />
      </div>

      {error && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary text-sm flex items-center gap-3 bg-primary/5 border border-primary/10 p-4 rounded-xl"
        >
          <Lock size={16} /> {error}
        </motion.p>
      )}

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="group w-full py-5 bg-primary text-white font-semibold text-base tracking-tight rounded-xl relative overflow-hidden disabled:opacity-50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,0,85,0.3)]"
      >
        <span className="relative z-10 flex items-center justify-center gap-3">
          {isSubmitting ? 'Submitting...' : (
            <>Start Your Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" /></>
          )}
        </span>
      </button>

      {/* Honeypot */}
      <div className="absolute opacity-0 pointer-events-none -z-50 h-0" aria-hidden="true">
        <input 
          type="text" 
          {...register('authorized_override')} 
          tabIndex={-1} 
          autoComplete="off" 
        />
      </div>
      
      <p className="text-center text-xs text-foreground/20">
        Your data is protected with end-to-end encryption.
      </p>
    </form>
  );
}
