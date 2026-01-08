'use client';

import { StockMarketSummary } from '@/components/stock-market-summary';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, TrendingUp, Sparkles, DollarSign } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function StockMarketSection() {
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
      gsap.from('.stock-widget-container', {
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

      // Animate info badges
      gsap.from('.stock-info-badge', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        scale: 0.8,
        stagger: 0.15,
        duration: 0.8,
        delay: 0.6,
        ease: 'back.out(1.7)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-card/30 to-background py-20 sm:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[150px]"></div>
        <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-500/5 blur-[150px]"></div>
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-400 backdrop-blur-sm">
              <Building2 className="h-4 w-4" />
              <span>Equity Markets</span>
            </div>
          </div>

          <h2
            ref={titleRef}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-500 bg-clip-text font-cursive text-transparent">
              Stock Market
            </span>{' '}
            Summary
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-300 md:text-xl">
            Get a real-time overview of the stock market with live indices, futures, and bonds data from major global exchanges.
          </p>
        </div>

        {/* Widget Container */}
        <div className="stock-widget-container group relative">
          {/* Glow effect */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-600 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-20"></div>

          {/* Widget Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-1 backdrop-blur-sm">
            <div className="overflow-hidden rounded-[20px] bg-background">
              <StockMarketSummary />
            </div>
          </div>
        </div>

        {/* Bottom Info Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <div className="stock-info-badge flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/20">
              <TrendingUp className="h-6 w-6 text-indigo-400" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">Real-Time Indices</div>
              <div className="text-xs text-neutral-400">S&P 500, NASDAQ, Dow Jones</div>
            </div>
          </div>

          <div className="stock-info-badge flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20">
              <Sparkles className="h-6 w-6 text-purple-400" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">Market Insights</div>
              <div className="text-xs text-neutral-400">12-month performance charts</div>
            </div>
          </div>

          <div className="stock-info-badge flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/20">
              <DollarSign className="h-6 w-6 text-violet-400" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">Global Coverage</div>
              <div className="text-xs text-neutral-400">NYSE, NASDAQ, LSE, DAX & more</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
