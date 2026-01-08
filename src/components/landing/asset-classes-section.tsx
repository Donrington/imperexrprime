'use client';

import { Bitcoin, Landmark, Globe, FileText, TrendingUp, Clock, Globe2, Sparkles, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const assetClasses = [
  {
    name: 'Cryptocurrencies',
    shortName: 'Crypto',
    description: 'Trade Bitcoin, Ethereum, and a wide range of altcoins with high liquidity and 24/7 market access.',
    icon: Bitcoin,
    gradient: 'from-orange-500 via-yellow-500 to-orange-600',
    bgGradient: 'from-orange-500/20 via-yellow-500/20 to-orange-600/20',
    cardBg: 'from-orange-500/10 to-yellow-500/5',
    accentColor: 'text-orange-400',
    borderColor: 'border-orange-500/30',
    features: ['24/7 Trading', 'High Volatility', 'Global Access'],
    stat: { value: '$2.1T', label: 'Market Cap' },
    badge: 'Most Popular',
    badgeBg: 'bg-orange-500/20',
    badgeText: 'text-orange-400',
  },
  {
    name: 'Stocks',
    shortName: 'Stocks',
    description: 'Invest in thousands of public companies from major global exchanges like the NYSE and NASDAQ.',
    icon: Landmark,
    gradient: 'from-blue-500 via-indigo-500 to-purple-600',
    bgGradient: 'from-blue-500/20 via-indigo-500/20 to-purple-600/20',
    cardBg: 'from-blue-500/10 to-indigo-500/5',
    accentColor: 'text-blue-400',
    borderColor: 'border-blue-500/30',
    features: ['Dividend Income', 'Long-term Growth', 'Global Markets'],
    stat: { value: '10K+', label: 'Companies' },
    badge: 'Traditional',
    badgeBg: 'bg-blue-500/20',
    badgeText: 'text-blue-400',
  },
  {
    name: 'Forex',
    shortName: 'FX',
    description: "Participate in the world's largest financial market by trading currency pairs from around the globe.",
    icon: Globe,
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    bgGradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-600/20',
    cardBg: 'from-emerald-500/10 to-teal-500/5',
    accentColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    features: ['High Leverage', 'Major Pairs', '24/5 Markets'],
    stat: { value: '$7.5T', label: 'Daily Volume' },
    badge: 'Largest Market',
    badgeBg: 'bg-emerald-500/20',
    badgeText: 'text-emerald-400',
  },
  {
    name: 'Futures',
    shortName: 'Futures',
    description: 'Speculate on the future price of commodities, indices, and currencies with standardized contracts.',
    icon: FileText,
    gradient: 'from-pink-500 via-rose-500 to-red-600',
    bgGradient: 'from-pink-500/20 via-rose-500/20 to-red-600/20',
    cardBg: 'from-pink-500/10 to-rose-500/5',
    accentColor: 'text-pink-400',
    borderColor: 'border-pink-500/30',
    features: ['Hedging Tools', 'Price Discovery', 'Leverage Options'],
    stat: { value: '400+', label: 'Contracts' },
    badge: 'Advanced',
    badgeBg: 'bg-pink-500/20',
    badgeText: 'text-pink-400',
  },
];

export function AssetClassesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: 'power3.out',
      });

      // Animate asset cards
      gsap.from('.asset-card-animated', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 80,
        rotationY: -15,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power3.out',
      });

      // Continuous rotation animation for icons
      gsap.to('.asset-icon-rotate', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'linear',
      });

      // Float animation for feature badges
      gsap.to('.feature-tag', {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-background to-card/30 py-20 sm:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 h-[600px] w-[600px] rounded-full bg-purple-500/5 blur-[150px]"></div>
        <div className="absolute right-0 bottom-1/4 h-[600px] w-[600px] rounded-full bg-lime-500/5 blur-[150px]"></div>
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          {/* Floating badge */}
          <div className="mb-6 inline-flex">
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-500/30 bg-lime-500/10 px-4 py-2 text-sm font-semibold text-lime-400 backdrop-blur-sm">
              <Globe2 className="h-4 w-4" />
              <span>Global Markets</span>
            </div>
          </div>

          <h2
            ref={titleRef}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Trade Across{' '}
            <span className="bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-400 bg-clip-text font-cursive text-transparent">
              Global Markets
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-300 md:text-xl">
            Explore diverse asset classes and find your next opportunity, all from a single, powerful platform.
          </p>
        </div>

        {/* Asset Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {assetClasses.map((asset, index) => {
            const Icon = asset.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={asset.name}
                className="asset-card-animated group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated glow border */}
                <div className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r ${asset.gradient} opacity-0 blur-lg transition-all duration-700 group-hover:opacity-40`}></div>

                {/* Card */}
                <div className={`relative h-full overflow-hidden rounded-3xl border ${asset.borderColor} bg-gradient-to-br ${asset.cardBg} p-8 backdrop-blur-xl transition-all duration-500 group-hover:border-white/30`}>
                  {/* Badge */}
                  <div className={`absolute right-4 top-4 rounded-full ${asset.badgeBg} border border-white/20 px-3 py-1 text-xs font-bold ${asset.badgeText} backdrop-blur-sm`}>
                    {asset.badge}
                  </div>

                  {/* Icon with animated background */}
                  <div className="relative mb-6">
                    <div className={`asset-icon-rotate absolute inset-0 rounded-2xl bg-gradient-to-br ${asset.bgGradient} blur-xl`}></div>
                    <div className={`relative inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${asset.cardBg} backdrop-blur-sm transition-transform duration-500 group-hover:scale-110`}>
                      <Icon className={`h-10 w-10 ${asset.accentColor}`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-3xl font-bold text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text" style={{ backgroundImage: isHovered ? `linear-gradient(to right, var(--tw-gradient-stops))` : undefined }}>
                    {asset.name}
                  </h3>

                  {/* Short name tag */}
                  <div className={`mb-4 inline-flex items-center gap-1.5 rounded-full ${asset.badgeBg} px-2.5 py-1 text-xs font-semibold ${asset.badgeText}`}>
                    <TrendingUp className="h-3 w-3" />
                    <span>{asset.shortName}</span>
                  </div>

                  {/* Description */}
                  <p className="mb-6 text-sm leading-relaxed text-neutral-400">
                    {asset.description}
                  </p>

                  {/* Features tags */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {asset.features.map((feature) => (
                      <div
                        key={feature}
                        className="feature-tag inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300 backdrop-blur-sm"
                      >
                        <Clock className="h-3 w-3" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="mb-6 flex items-end justify-between border-t border-white/10 pt-4">
                    <div>
                      <div className={`text-3xl font-extrabold ${asset.accentColor}`}>
                        {asset.stat.value}
                      </div>
                      <div className="text-xs text-neutral-500">{asset.stat.label}</div>
                    </div>
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${asset.bgGradient} transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110`}>
                      <ArrowUpRight className={`h-5 w-5 ${asset.accentColor}`} />
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full rounded-xl border ${asset.borderColor} bg-gradient-to-r ${asset.cardBg} py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}>
                    Start Trading
                  </button>

                  {/* Decorative bottom glow */}
                  <div className={`absolute -bottom-20 left-0 right-0 h-40 bg-gradient-to-t ${asset.bgGradient} blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-60`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom stats section */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.02] p-8 backdrop-blur-sm md:p-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center gap-2">
                <Sparkles className="h-6 w-6 text-lime-400" />
                <div className="text-4xl font-extrabold text-white">200+</div>
              </div>
              <div className="text-sm text-neutral-400">Trading Instruments</div>
            </div>
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center gap-2">
                <Globe2 className="h-6 w-6 text-blue-400" />
                <div className="text-4xl font-extrabold text-white">50+</div>
              </div>
              <div className="text-sm text-neutral-400">Global Exchanges</div>
            </div>
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center gap-2">
                <Clock className="h-6 w-6 text-purple-400" />
                <div className="text-4xl font-extrabold text-white">24/7</div>
              </div>
              <div className="text-sm text-neutral-400">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
