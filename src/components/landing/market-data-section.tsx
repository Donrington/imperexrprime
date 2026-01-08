'use client';

import { MarketDataSummary } from '@/components/market-data-summary';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BarChart3, Globe2, TrendingUp, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function MarketDataSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 1,
        ease: 'power3.out',
      });

      // Animate widget container
      gsap.from('.market-widget-container', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 60,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });

      // Animate info cards
      gsap.from('.market-info-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        delay: 0.6,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-background to-card/30 py-20 sm:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[150px]"></div>
        <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[150px]"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400 backdrop-blur-sm">
              <Globe2 className="h-4 w-4" />
              <span>Global Markets</span>
            </div>
          </div>

          <h2
            ref={titleRef}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text font-cursive text-transparent">
              Market Data
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-300 md:text-xl">
            Get a real-time overview of global markets including indices, futures, bonds, and forex pairs.
          </p>
        </div>

        {/* Widget Container */}
        <div className="market-widget-container group relative">
          {/* Glow effect */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-20"></div>

          {/* Widget Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-1 backdrop-blur-sm">
            <div className="overflow-hidden rounded-[20px] bg-background">
              <MarketDataSummary />
            </div>
          </div>
        </div>

        {/* Bottom Info Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="market-info-card group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-blue-500/30 hover:bg-white/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 transition-transform group-hover:scale-110">
              <BarChart3 className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">Indices</h3>
            <p className="text-sm text-neutral-400">S&P 500, NASDAQ, Dow Jones & more</p>
          </div>

          <div className="market-info-card group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-cyan-500/30 hover:bg-white/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 transition-transform group-hover:scale-110">
              <TrendingUp className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">Futures</h3>
            <p className="text-sm text-neutral-400">Gold, Oil, Commodities & currencies</p>
          </div>

          <div className="market-info-card group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-purple-500/30 hover:bg-white/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20 transition-transform group-hover:scale-110">
              <Zap className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">Bonds</h3>
            <p className="text-sm text-neutral-400">T-Bonds, Euro Bund & government debt</p>
          </div>

          <div className="market-info-card group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-lime-500/30 hover:bg-white/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-lime-500/20 transition-transform group-hover:scale-110">
              <Globe2 className="h-6 w-6 text-lime-400" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">Forex</h3>
            <p className="text-sm text-neutral-400">Major currency pairs & cross rates</p>
          </div>
        </div>
      </div>
    </section>
  );
}
