'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AllStockMarketSummary } from '@/components/all-stock-market-summary';
import { CryptoMarketSummary } from '@/components/crypto-market-summary';
import { ForexMarketOverview } from '@/components/forex-market-overview';
import { FuturesMarketOverview } from '@/components/futures-market-overview';
import { MarketDataSummary } from '@/components/market-data-summary';
import { CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Sparkles, Activity, TrendingUp, Bitcoin, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function LiveChartsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge animation
      gsap.from('.charts-badge', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });

      // Header animation
      gsap.from('.charts-header', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Market cards stagger animation
      gsap.fromTo(
        '.market-card',
        {
          opacity: 0,
          y: 50,
        },
        {
          scrollTrigger: {
            trigger: '.market-cards-container',
            start: 'top 80%',
          },
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
        }
      );

      // Floating sparkles animation
      gsap.to('.charts-sparkle', {
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
        {/* Live Markets Badge */}
        <div className="charts-badge inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 px-4 py-2 backdrop-blur-sm">
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <Activity className="h-4 w-4 text-emerald-400" />
          <span className="text-sm font-medium text-emerald-400">Live Market Data</span>
        </div>

        {/* Charts Title */}
        <div className="charts-header space-y-3">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                Live
              </span>
              <Sparkles className="charts-sparkle absolute -right-8 -top-2 h-5 w-5 text-emerald-400" />
            </span>{' '}
            Market Overview
          </h1>
          <p className="text-lg text-neutral-400 md:text-xl">
            A real-time snapshot of global financial markets
          </p>
        </div>
      </div>

      {/* Market Cards Grid */}
      <div className="market-cards-container grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Market Summary Card */}
        <div className="market-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm lg:col-span-2">
          {/* Gradient Glow on Hover */}
          <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20" />

          {/* Corner Gradient */}
          <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-50 blur-3xl" />

          <CardHeader className="relative">
            <div className="flex items-start justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-2.5 backdrop-blur-sm">
                    <TrendingUp className="h-5 w-5 text-emerald-400" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">Market Summary</CardTitle>
                </div>
                <CardDescription className="text-neutral-400">
                  A broad overview of key market indices and commodities
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative">
            <MarketDataSummary />
          </CardContent>
        </div>

        {/* Stock Market Card */}
        <div className="market-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm lg:col-span-2">
          {/* Gradient Glow on Hover */}
          <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20" />

          {/* Corner Gradient */}
          <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-50 blur-3xl" />

          <CardHeader className="relative">
            <div className="flex items-start justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-2.5 backdrop-blur-sm">
                    <TrendingUp className="h-5 w-5 text-blue-400" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">Stock Market</CardTitle>
                </div>
                <CardDescription className="text-neutral-400">
                  Stocks from different sectors of the economy
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative p-0">
            <AllStockMarketSummary />
          </CardContent>
        </div>

        {/* Cryptocurrency Card */}
        <div className="market-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
          {/* Gradient Glow on Hover */}
          <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20" />

          {/* Corner Gradient */}
          <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-orange-500/10 to-amber-500/10 opacity-50 blur-3xl" />

          <CardHeader className="relative">
            <div className="flex items-start justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 p-2.5 backdrop-blur-sm">
                    <Bitcoin className="h-5 w-5 text-orange-400" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">Cryptocurrency</CardTitle>
                </div>
                <CardDescription className="text-neutral-400">
                  An overview of the digital asset market
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative p-0">
            <CryptoMarketSummary />
          </CardContent>
        </div>

        {/* Forex Card */}
        <div className="market-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
          {/* Gradient Glow on Hover */}
          <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20" />

          {/* Corner Gradient */}
          <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 opacity-50 blur-3xl" />

          <CardHeader className="relative">
            <div className="flex items-start justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 p-2.5 backdrop-blur-sm">
                    <Globe className="h-5 w-5 text-cyan-400" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">Forex</CardTitle>
                </div>
                <CardDescription className="text-neutral-400">
                  Major currency pair exchange rates
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative p-0">
            <ForexMarketOverview />
          </CardContent>
        </div>

        {/* Futures Card */}
        <div className="market-card lg:col-span-2">
          <FuturesMarketOverview />
        </div>
      </div>
    </div>
  );
}
