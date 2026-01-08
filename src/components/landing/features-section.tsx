'use client';

import { Layers, CandlestickChart, Wallet, BarChart, ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Layers,
    title: 'Managed Plans',
    description: 'Choose from curated investment plans tailored to different risk appetites for steady growth.',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    accentColor: 'text-cyan-400',
    stats: '3 Plans',
  },
  {
    icon: CandlestickChart,
    title: 'Trade Terminal',
    description: 'Access a powerful, real-time trading interface for crypto, stocks, forex, and futures.',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    accentColor: 'text-pink-400',
    stats: 'Real-time',
  },
  {
    icon: Wallet,
    title: 'Unified Wallet',
    description: 'Manage your funds, track transactions, and move assets seamlessly across the platform.',
    gradient: 'from-lime-500 to-emerald-500',
    bgGradient: 'from-lime-500/10 to-emerald-500/10',
    accentColor: 'text-lime-400',
    stats: 'Multi-Asset',
  },
  {
    icon: BarChart,
    title: 'Advanced Analytics',
    description: 'Gain insights with advanced charting, portfolio analysis, and market data.',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-500/10 to-red-500/10',
    accentColor: 'text-orange-400',
    stats: 'AI-Powered',
  },
];

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from(subtitleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Animate feature cards
      gsap.from('.feature-card-animated', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 100,
        scale: 0.9,
        stagger: 0.15,
        duration: 0.8,
        ease: 'back.out(1.4)',
      });

      // Floating animation for icons
      gsap.to('.feature-icon-float', {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.2,
      });

      // Pulse animation for badges
      gsap.to('.feature-badge-pulse', {
        scale: 1.05,
        opacity: 0.8,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background py-20 sm:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-lime-500/5 blur-[120px]"></div>
        <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Floating badge */}
          <div className="mb-6 inline-flex">
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-500/30 bg-lime-500/10 px-4 py-2 text-sm font-semibold text-lime-400">
              <Zap className="h-4 w-4" />
              <span>Powerful Features</span>
            </div>
          </div>

          <h2
            ref={titleRef}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            A Unified Platform for{' '}
            <span className="bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              All Your Trading Needs
            </span>
          </h2>
          <p
            ref={subtitleRef}
            className="mt-6 text-lg leading-relaxed text-neutral-300 md:text-xl"
          >
            From managed plans to active trading terminals, we provide the
            cutting-edge tools you need to succeed in global markets.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="feature-card-animated group relative"
              >
                {/* Glow effect on hover */}
                <div className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-0 blur transition-all duration-500 group-hover:opacity-30`}></div>

                {/* Card content */}
                <div className="relative h-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10">
                  {/* Stats badge */}
                  <div className="feature-badge-pulse absolute right-4 top-4 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold text-neutral-300 backdrop-blur-sm">
                    {feature.stats}
                  </div>

                  {/* Icon */}
                  <div className={`feature-icon-float mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm`}>
                    <Icon className={`h-8 w-8 ${feature.accentColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 leading-relaxed text-neutral-400">
                    {feature.description}
                  </p>

                  {/* Learn more link */}
                  <div className={`inline-flex items-center gap-2 text-sm font-semibold ${feature.accentColor} transition-all group-hover:gap-3`}>
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>

                  {/* Decorative corner elements */}
                  <div className={`absolute bottom-0 right-0 h-24 w-24 rounded-tl-full bg-gradient-to-tl ${feature.bgGradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-50`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.02] p-8 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-500/20">
                <Shield className="h-6 w-6 text-lime-400" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-white">Bank-Grade Security</div>
                <div className="text-sm text-neutral-400">Your assets are protected 24/7</div>
              </div>
            </div>
            <div className="hidden h-12 w-px bg-white/10 md:block"></div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
                <TrendingUp className="h-6 w-6 text-blue-400" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-white">Real-Time Analytics</div>
                <div className="text-sm text-neutral-400">Make informed decisions faster</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
