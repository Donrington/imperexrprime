'use client';

import { CryptoMarketSummary } from '@/components/crypto-market-summary';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function CryptoMarketSection() {
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
      gsap.from('.crypto-widget-container', {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-card/30 to-background py-20 sm:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-[150px]"></div>
        <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[150px]"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400 backdrop-blur-sm">
              <TrendingUp className="h-4 w-4" />
              <span>Live Market Data</span>
            </div>
          </div>

          <h2
            ref={titleRef}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text font-cursive text-transparent">
              Crypto Market
            </span>{' '}
            Summary
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-300 md:text-xl">
            Get a real-time overview of the cryptocurrency market with live prices, charts, and performance metrics.
          </p>
        </div>

        {/* Widget Container */}
        <div className="crypto-widget-container group relative">
          {/* Glow effect */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-20"></div>

          {/* Widget Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-1 backdrop-blur-sm">
            <div className="overflow-hidden rounded-[20px] bg-background">
              <CryptoMarketSummary />
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20">
              <Sparkles className="h-5 w-5 text-orange-400" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">Real-Time Updates</div>
              <div className="text-xs text-neutral-400">Live market synchronization</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20">
              <TrendingUp className="h-5 w-5 text-blue-400" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">Multi-Exchange Data</div>
              <div className="text-xs text-neutral-400">Aggregated from top platforms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
