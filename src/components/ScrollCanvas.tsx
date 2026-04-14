'use client';

import { useEffect, useRef } from 'react';

export default function ScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef({ lastY: 0, progress: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      scrollRef.current.progress = scrolled / scrollHeight;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    resize();

    let animationFrameId: number;

    const render = () => {
      const { progress } = scrollRef.current;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Chroma to IQ logic visualization
      // As we scroll, transition from vibrant pink/violet to sharp cyan/blue nodes
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Dynamic Gradient Background
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, canvas.width * 0.8
      );
      
      const hue1 = 320 - (progress * 140); // 320 (Pink) -> 180 (Cyan)
      const hue2 = 260 - (progress * 40);  // 260 (Violet) -> 220 (Blue)
      
      gradient.addColorStop(0, `hsla(${hue1}, 70%, 50%, 0.15)`);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw abstract data nodes
      const points = 20;
      const radius = 200 + (progress * 100);
      
      ctx.beginPath();
      ctx.strokeStyle = `hsla(${hue1}, 100%, 70%, ${0.2 + progress * 0.3})`;
      ctx.lineWidth = 1;

      for (let i = 0; i < points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        
        // Node particles
        ctx.fillStyle = `hsla(${hue1}, 100%, 70%, 0.6)`;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 -z-10 pointer-events-none opacity-50"
    />
  );
}
