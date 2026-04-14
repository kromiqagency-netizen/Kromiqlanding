'use client';

import { motion } from 'framer-motion';

interface TelemetryProps {
  label: string;
  value: string;
  className?: string;
}

export default function TelemetryOverlay({ label, value, className = "" }: TelemetryProps) {
  return (
    <div className={`font-mono text-[10px] tracking-widest uppercase flex items-center gap-4 ${className}`}>
      <span className="text-foreground/40">{label}:</span>
      <span className="text-primary animate-heartbeat font-bold">{value}</span>
      <div className="flex-1 h-[1px] bg-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 animate-scanning w-full" />
      </div>
    </div>
  );
}

export function HUDCorner({ className = "hud-corner-tl" }) {
  return <div className={`absolute w-3 h-3 border-primary ${className}`} />;
}
