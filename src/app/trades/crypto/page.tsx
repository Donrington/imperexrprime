'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PublicHeader from '@/components/public-header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import { CryptoMarketSummary } from '@/components/crypto-market-summary';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Bitcoin, TrendingUp, Shield, Zap, BarChart3, Wallet } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Bitcoin,
    title: '100+ Cryptocurrencies',
    description: 'Access major coins like Bitcoin, Ethereum, and hundreds of altcoins',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: TrendingUp,
    title: 'Real-Time Trading',
    description: '24/7 market access with instant execution and live price feeds',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Secure Wallet',
    description: 'Military-grade encryption and cold storage for your digital assets',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Sub-millisecond execution with institutional-grade infrastructure',
    gradient: 'from-blue-500 to-emerald-500',
  },
];

export default function CryptoPage() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const marketRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.crypto-hero-badge', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });

      gsap.from('.crypto-hero-title', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });

      gsap.from('.crypto-hero-description', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out',
      });

      // Content section animation
      gsap.from('.crypto-content-text', {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.crypto-content-image', {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        x: 50,
        duration: 1,
        ease: 'power3.out',
      });

      // Features cards stagger
      gsap.fromTo('.crypto-feature-card',
        {
          opacity: 0,
          y: 50,
        },
        {
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 70%',
          },
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
        }
      );

      // Market section animation
      gsap.from('.crypto-market-card', {
        scrollTrigger: {
          trigger: marketRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      // Floating sparkles
      gsap.to('.crypto-sparkle', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.3,
      });

      // Floating icons
      gsap.to('.crypto-feature-icon', {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <PublicHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section ref={heroRef} className="relative overflow-hidden bg-gradient-to-b from-background to-card/30 pt-32 pb-20 md:pt-40 md:pb-28">
          {/* Background effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[150px]"></div>
            <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]"></div>
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

          <div className="container mx-auto px-4 text-center">
            {/* Badge */}
            <div className="crypto-hero-badge mb-8 inline-flex">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400 backdrop-blur-sm">
                <Bitcoin className="h-4 w-4" />
                <span>Cryptocurrency Trading</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="crypto-hero-title text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Trade the Future of{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                  Digital Currency
                </span>
                <Sparkles className="crypto-sparkle absolute -right-8 -top-2 h-5 w-5 text-emerald-400" />
              </span>
            </h1>

            {/* Description */}
            <p className="crypto-hero-description mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300 md:text-xl">
              Trade Bitcoin, Ethereum, and a wide range of altcoins with high liquidity and 24/7 market access on our ultra-modern platform.
            </p>

            {/* CTA Button */}
            <div className="crypto-hero-description mt-10">
              <Button asChild className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-6 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-teal-600">
                <Link href="/signup">
                  <Bitcoin className="mr-2 h-5 w-5" />
                  Start Trading Crypto
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section ref={featuresRef} className="relative overflow-hidden bg-gradient-to-b from-card/30 to-background py-20 sm:py-28">
          {/* Background effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/3 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-teal-500/5 blur-[150px]"></div>
          </div>

          {/* Dot pattern */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Why Choose{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                  Crypto Trading
                </span>
              </h2>
              <p className="mt-4 text-lg text-neutral-400">
                Experience the most advanced cryptocurrency trading platform
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="crypto-feature-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                  >
                    {/* Hover glow */}
                    <div className={`absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20`}></div>

                    {/* Icon */}
                    <div className="mb-4">
                      <div className={`crypto-feature-icon inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} bg-opacity-10 shadow-lg transition-all duration-300 group-hover:scale-110`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                    </div>

                    <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-neutral-400">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section ref={contentRef} className="relative overflow-hidden bg-gradient-to-b from-background to-card/30 py-20 sm:py-28">
          {/* Background effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[150px]"></div>
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div className="crypto-content-text space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400 backdrop-blur-sm">
                  <Wallet className="h-4 w-4" />
                  <span>Digital Assets</span>
                </div>

                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  The World of{' '}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
                    Digital Assets
                  </span>
                </h2>

                <p className="leading-relaxed text-neutral-300">
                  Cryptocurrency trading involves speculating on cryptocurrency price movements via a CFD trading account, or buying and selling the underlying coins via an exchange. The crypto market is decentralized, meaning it is not issued or backed by a central authority such as a government. Instead, it runs on a network of computers.
                </p>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">How It Works</h3>
                  <p className="leading-relaxed text-neutral-300">
                    When you trade cryptocurrencies on our platform, you can either buy the actual coins and store them in your secure Imperex Prime wallet, or you can trade cryptocurrency CFDs (Contracts for Difference). CFDs allow you to speculate on price movements without owning the underlying asset. This provides opportunities to profit from both rising and falling markets.
                  </p>
                </div>

                <Button asChild className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-6 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-cyan-600 hover:to-blue-600">
                  <Link href="/signup">
                    <BarChart3 className="mr-2 h-5 w-5" />
                    Start Trading Crypto
                  </Link>
                </Button>
              </div>

              <div className="crypto-content-image group relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-20 blur-2xl transition-opacity group-hover:opacity-30"></div>
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-2 backdrop-blur-sm">
                  <Image
                    src="https://picsum.photos/seed/crypto-chart/800/600"
                    alt="Crypto Chart"
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-2xl"
                    data-ai-hint="financial chart crypto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Overview Section */}
        <section ref={marketRef} className="relative overflow-hidden bg-gradient-to-b from-card/30 to-background py-20 sm:py-28">
          {/* Background effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[150px]"></div>
            <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-teal-500/5 blur-[150px]"></div>
          </div>

          {/* Dot pattern */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400 backdrop-blur-sm">
                <TrendingUp className="h-4 w-4" />
                <span>Live Market Data</span>
              </div>

              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Cryptocurrency{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                    Market Overview
                  </span>
                  <Sparkles className="crypto-sparkle absolute -right-8 -top-2 h-5 w-5 text-emerald-400" />
                </span>
              </h2>

              <p className="mt-4 text-lg text-neutral-400">
                Stay updated with real-time data from the crypto markets
              </p>
            </div>

            <div className="crypto-market-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-white/20">
              {/* Gradient Glow on Hover */}
              <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20"></div>

              {/* Corner Gradient */}
              <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-50 blur-3xl"></div>

              <CardContent className="relative p-0">
                <CryptoMarketSummary />
              </CardContent>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
