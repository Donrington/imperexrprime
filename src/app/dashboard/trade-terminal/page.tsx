'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { AdvancedTradeChart } from '@/components/advanced-trade-chart';
import { Sparkles, BarChart3, Activity } from 'lucide-react';

export default function TradeTerminalPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge animation
      gsap.from('.terminal-badge', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });

      // Header animation
      gsap.from('.terminal-header', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Chart card animation
      gsap.from('.terminal-chart', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out',
      });

      // Floating sparkles animation
      gsap.to('.terminal-sparkle', {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen space-y-8 pb-12">
      {/* Background Elements */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -right-1/4 top-1/3 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      </div>

      {/* Header Section */}
      <div className="space-y-6">
        {/* Trade Terminal Badge */}
        <div className="terminal-badge inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 px-4 py-2 backdrop-blur-sm">
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <Activity className="h-4 w-4 text-emerald-400" />
          <span className="text-sm font-medium text-emerald-400">Real-Time Analytics</span>
        </div>

        {/* Terminal Title */}
        <div className="terminal-header space-y-3">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                Trade
              </span>
              <Sparkles className="terminal-sparkle absolute -right-8 -top-2 h-5 w-5 text-emerald-400" />
            </span>{' '}
            Terminal
          </h1>
          <p className="text-lg text-neutral-400 md:text-xl">
            Analyze market trends with our advanced, real-time charting tools
          </p>
        </div>
      </div>

      {/* Chart Card */}
      <div className="terminal-chart group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
        {/* Gradient Glow on Hover */}
        <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20" />

        {/* Corner Gradient */}
        <div className="absolute right-0 top-0 h-96 w-96 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-50 blur-3xl" />

        {/* Card Header */}
        <div className="relative border-b border-white/10 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-2.5 backdrop-blur-sm">
                <BarChart3 className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Advanced Chart View</h3>
                <p className="text-sm text-neutral-400">Powered by TradingView</p>
              </div>
            </div>
            {/* Live Indicator */}
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 backdrop-blur-sm">
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-xs font-medium text-emerald-400">LIVE</span>
            </div>
          </div>
        </div>

        {/* Chart Content */}
        <div className="relative h-[75vh] p-0">
          <AdvancedTradeChart />
        </div>
      </div>
    </div>
  );
}
