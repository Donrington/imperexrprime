'use client';

import Image from 'next/image';
import { Search, ShieldCheck, TrendingUp, Sparkles, Target } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const strategies = [
  {
    icon: TrendingUp,
    title: 'Diversification and Risk Management',
    description: 'Diversify investments across different cryptocurrencies and digital asset classes to minimize risk exposure. Implement risk management strategies such as stop-loss orders and position sizing to protect against market volatility.',
    gradient: 'from-emerald-500 to-teal-500',
    accentColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
  },
  {
    icon: Search,
    title: 'Market Analysis and Asset Selection',
    description: 'Conduct thorough market analysis to identify potential investment opportunities and trends. Select assets based on fundamental factors such as technology, team, and market demand, ensuring long-term viability.',
    gradient: 'from-blue-500 to-cyan-500',
    accentColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: ShieldCheck,
    title: 'Regulatory Compliance and Security',
    description: 'Stay compliant with regulatory requirements and guidelines to maintain trust and legality. Invest in robust security measures to protect clients\' assets and data, including cold storage solutions and multi-signature wallets.',
    gradient: 'from-purple-500 to-pink-500',
    accentColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
];

export function AssetManagementSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title and content
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power3.out',
      });

      // Animate image
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        x: 50,
        scale: 0.95,
        duration: 1,
        ease: 'power3.out',
      });

      // Animate strategy cards
      gsap.from('.strategy-card-animated', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        x: -30,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Floating animation for icons
      gsap.to('.strategy-icon-float', {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-background to-card/30 py-20 sm:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[150px]"></div>
        <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-purple-500/5 blur-[150px]"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Right Image (shown first on desktop) */}
          <div ref={imageRef} className="relative lg:order-2">
            {/* Glow effect */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-20 blur-2xl"></div>

            {/* Image container */}
            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-2 shadow-2xl backdrop-blur-sm">
              <Image
                src="https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg"
                alt="Asset Management Strategy"
                width={800}
                height={600}
                className="rounded-2xl object-cover"
                quality={90}
              />
              {/* Overlay label */}
              <div className="absolute bottom-4 right-4 rounded-xl border border-white/20 bg-black/50 px-4 py-2 backdrop-blur-md">
                <p className="text-xs font-semibold text-white">Professional Management</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -right-10 top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl"></div>
            <div className="absolute -left-10 bottom-10 h-24 w-24 rounded-full bg-purple-500/10 blur-3xl"></div>
          </div>

          {/* Left Content */}
          <div className="lg:order-1">
            {/* Badge */}
            <div className="mb-6 inline-flex">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400 backdrop-blur-sm">
                <Target className="h-4 w-4" />
                <span>Strategic Approach</span>
              </div>
            </div>

            <h2
              ref={titleRef}
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Our{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text font-cursive text-transparent">
                Asset Management
              </span>{' '}
              Strategy
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-neutral-300">
              Our comprehensive approach to crafting an effective asset management strategy. To succeed in this dynamic industry, it's crucial to consider factors like risk tolerance, market analysis, regulatory compliance, and client objectives.
            </p>

            {/* Strategy Cards */}
            <div className="mt-10 space-y-6">
              {strategies.map((strategy) => {
                const Icon = strategy.icon;
                return (
                  <div
                    key={strategy.title}
                    className="strategy-card-animated group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                  >
                    {/* Hover glow */}
                    <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${strategy.gradient} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20`}></div>

                    <div className="relative flex items-start gap-4">
                      {/* Icon */}
                      <div className={`strategy-icon-float flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${strategy.bgColor} transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className={`h-6 w-6 ${strategy.accentColor}`} />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="mb-2 text-lg font-bold text-white">
                          {strategy.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-neutral-400">
                          {strategy.description}
                        </p>
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div className={`absolute bottom-0 right-0 h-20 w-20 rounded-tl-full bg-gradient-to-tl ${strategy.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30`}></div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
                <div className="mb-1 text-2xl font-extrabold text-emerald-400">15+</div>
                <div className="text-xs text-neutral-400">Years Experience</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
                <div className="mb-1 text-2xl font-extrabold text-teal-400">$5B+</div>
                <div className="text-xs text-neutral-400">Assets Managed</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
                <div className="mb-1 text-2xl font-extrabold text-cyan-400">98%</div>
                <div className="text-xs text-neutral-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
