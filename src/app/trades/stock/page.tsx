'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PublicHeader from '@/components/public-header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import { StockHotlists } from '@/components/stock-hotlists';
import { Card, CardContent } from '@/components/ui/card';
import { AllStockMarketSummary } from '@/components/all-stock-market-summary';
import { TrendingUp, Shield, Zap, CheckCircle, Building2, PieChart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Building2,
    title: 'Global Exchanges',
    description: 'Access NYSE, NASDAQ, and major stock markets',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: TrendingUp,
    title: 'Real-Time Data',
    description: 'Live market data and instant execution',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    icon: PieChart,
    title: 'Sector Analysis',
    description: 'Diversify across different market sectors',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Shield,
    title: 'Secure Trading',
    description: 'Regulated platform with investor protection',
    gradient: 'from-blue-500 to-emerald-500',
  },
];

const benefits = [
  'Trade thousands of stocks from major global exchanges',
  'Own a piece of your favorite companies',
  'Profit from capital gains and dividend payments',
  'Long-term investing or active day trading',
  'Advanced charting and fundamental analysis tools',
];

export default function StockPage() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const hotlistsRef = useRef<HTMLElement>(null);
  const sectorsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero badge animation
      gsap.from('.stock-hero-badge', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });

      // Hero title animation
      gsap.from('.stock-hero-title', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Hero description animation
      gsap.from('.stock-hero-description', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out',
      });

      // Hero button animation
      gsap.from('.stock-hero-button', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.6,
        ease: 'power3.out',
      });

      // Features cards stagger
      gsap.fromTo(
        '.stock-feature-card',
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
        }
      );

      // Content section animations
      gsap.from('.stock-content-text', {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.stock-content-image', {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Hotlists section animation
      gsap.from('.stock-hotlists-header', {
        scrollTrigger: {
          trigger: hotlistsRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.stock-hotlists-card', {
        scrollTrigger: {
          trigger: hotlistsRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Sectors section animation
      gsap.from('.stock-sectors-header', {
        scrollTrigger: {
          trigger: sectorsRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.stock-sectors-card', {
        scrollTrigger: {
          trigger: sectorsRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Floating feature icons
      gsap.to('.stock-icon-float', {
        y: -8,
        duration: 2,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <PublicHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-4 py-20 text-center sm:py-28 md:py-32"
        >
          {/* Background Elements */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl space-y-8">
            {/* Badge */}
            <div className="stock-hero-badge inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 px-4 py-2 backdrop-blur-sm">
              <Building2 className="h-4 w-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">
                Stock Market Trading
              </span>
            </div>

            {/* Title */}
            <h1 className="stock-hero-title text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Invest in{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                  Ownership
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="stock-hero-description mx-auto max-w-3xl text-base text-neutral-300 sm:text-lg md:text-xl">
              Invest in thousands of public companies from major global exchanges like the NYSE and NASDAQ. Own a piece of your favorite companies and build wealth for the future.
            </p>

            {/* CTA Button */}
            <div className="stock-hero-button">
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-6 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/50"
              >
                <Link href="/signup">
                  Start Trading Stocks
                  <Zap className="ml-2 inline-block h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="relative overflow-hidden px-4 py-20 sm:py-28">
          {/* Background Pattern */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
          </div>

          <div className="container mx-auto">
            <div ref={featuresRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="stock-feature-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20"
                  >
                    {/* Gradient glow on hover */}
                    <div
                      className={`absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20`}
                    />

                    {/* Icon */}
                    <div
                      className={`stock-icon-float mb-4 inline-flex rounded-xl bg-gradient-to-br ${feature.gradient} p-3`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="mb-2 text-lg font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-neutral-400">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section ref={contentRef} className="relative overflow-hidden px-4 py-20 sm:py-28">
          {/* Background Blur Orb */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-teal-500/5 blur-3xl" />
          </div>

          <div className="container mx-auto">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Text Content */}
              <div className="stock-content-text space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                  Invest in Company Ownership
                </h2>
                <p className="text-base text-neutral-300 sm:text-lg">
                  Stock trading involves buying and selling shares in publicly traded companies. When you own stock, you own a piece of the company. Investors aim to profit from capital gains or dividends.
                </p>
                <p className="text-base text-neutral-300 sm:text-lg">
                  With Imperex Prime, you can buy and sell stocks from major global exchanges. Our platform gives you the data and execution speed you need to make informed decisions.
                </p>

                {/* Benefits List */}
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                      <span className="text-sm text-neutral-300 sm:text-base">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  className="mt-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-5 text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/50"
                >
                  <Link href="/signup">Get Started Now</Link>
                </Button>
              </div>

              {/* Image */}
              <div className="stock-content-image group relative">
                <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-30" />
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-2 backdrop-blur-sm">
                  <Image
                    src="https://images.pexels.com/photos/29611783/pexels-photo-29611783.jpeg"
                    alt="Stock Trading Chart"
                    width={800}
                    height={600}
                    className="rounded-2xl"
                    data-ai-hint="financial chart stock"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stock Hotlists */}
        <section ref={hotlistsRef} className="relative overflow-hidden px-4 py-20 sm:py-28">
          {/* Background Elements */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>

          <div className="container mx-auto">
            <div className="stock-hotlists-header mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Today's Stock Market Hotlists
              </h2>
              <p className="mt-4 text-base text-neutral-400 sm:text-lg">
                Stay updated with the most active, top-gaining, and top-losing stocks.
              </p>
            </div>

            {/* Hotlists Card */}
            <div className="stock-hotlists-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
              {/* Gradient glow on hover */}
              <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-20" />

              <CardContent className="p-0">
                <StockHotlists />
              </CardContent>
            </div>
          </div>
        </section>

        {/* All Stocks by Sector */}
        <section ref={sectorsRef} className="relative overflow-hidden px-4 py-20 sm:py-28">
          {/* Background Elements */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
          </div>

          <div className="container mx-auto">
            <div className="stock-sectors-header mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                All Stocks by Sector
              </h2>
              <p className="mt-4 text-base text-neutral-400 sm:text-lg">
                Explore stocks from different sectors of the economy.
              </p>
            </div>

            {/* Sectors Card */}
            <div className="stock-sectors-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
              {/* Gradient glow on hover */}
              <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-20" />

              <CardContent className="p-0">
                <AllStockMarketSummary />
              </CardContent>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
