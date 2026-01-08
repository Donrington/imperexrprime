'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, ArrowUpRight, Sparkles, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const optionsFeatures = [
  {
    icon: TrendingUp,
    title: 'Call & Put Options',
    description: 'Buy or sell assets at predetermined prices',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Advanced strategies to protect your portfolio',
  },
  {
    icon: Zap,
    title: 'Real-Time Execution',
    description: 'Lightning-fast order processing',
  },
];

export function OptionsTradingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
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

      // Animate content
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: -30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Animate images with stagger
      gsap.from('.options-image', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        scale: 0.8,
        y: 50,
        stagger: 0.15,
        duration: 1,
        ease: 'back.out(1.4)',
      });

      // Animate feature cards
      gsap.from('.options-feature-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Floating animation for images
      gsap.to('.options-image-float', {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-background to-card/30 py-20 sm:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-purple-500/5 blur-[120px]"></div>
        <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-lime-500/5 blur-[120px]"></div>
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-400 backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                <span>Advanced Trading</span>
              </div>
            </div>

            {/* Title */}
            <h2
              ref={titleRef}
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              <span className="bg-gradient-to-r from-purple-400 via-lime-400 to-emerald-500 bg-clip-text font-cursive text-transparent">
                Options Trading
              </span>
            </h2>

            {/* Description */}
            <div ref={contentRef} className="space-y-4">
              <p className="text-lg leading-relaxed text-neutral-300">
                Options trading allows investors to buy or sell assets at predetermined
                prices within specific time frames. Master the art of calls and puts
                with our advanced trading platform.
              </p>
              <p className="text-base leading-relaxed text-neutral-400">
                Key features include customizable strike prices, flexible expiration dates,
                and competitive premiums. Implement sophisticated strategies like spreads,
                straddles, and strangles to maximize returns while managing risk effectively.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              {optionsFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="options-feature-card group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-purple-500/30 hover:bg-white/10"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20">
                      <Icon className="h-5 w-5 text-purple-400" />
                    </div>
                    <h3 className="mb-1 text-sm font-bold text-white">{feature.title}</h3>
                    <p className="text-xs text-neutral-400">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="flex gap-4">
              <Button
                asChild
                className="group/btn bg-gradient-to-r from-purple-500 to-lime-500 text-base font-bold text-white hover:from-purple-600 hover:to-lime-600"
              >
                <Link href="/trades">
                  Start Trading Options
                  <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-white/20 bg-white/5 text-base font-semibold text-white backdrop-blur-sm hover:border-purple-500/50 hover:bg-white/10"
              >
                <Link href="/our-company">Learn More</Link>
              </Button>
            </div>

            {/* Risk Warning */}
            <div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 p-4 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500/20">
                  <Shield className="h-4 w-4 text-orange-400" />
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold text-orange-400">Risk Notice</p>
                  <p className="text-xs text-neutral-400">
                    Options involve risks including limited life, leverage, and volatility.
                    Conduct thorough research and manage risk effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Images Grid - Creative Layout */}
          <div className="relative">
            {/* Main large image - top left */}
            <div className="options-image options-image-float group relative z-10 mb-4">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-purple-500 to-lime-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-40"></div>
              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-2 shadow-2xl backdrop-blur-sm">
                <Image
                  src="https://images.pexels.com/photos/8358136/pexels-photo-8358136.jpeg"
                  alt="Options trading chart analysis"
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover"
                  quality={90}
                />
                {/* Overlay label */}
                <div className="absolute bottom-4 left-4 rounded-xl border border-white/20 bg-black/50 px-4 py-2 backdrop-blur-md">
                  <p className="text-xs font-semibold text-white">Advanced Charts</p>
                </div>
              </div>
            </div>

            {/* Two smaller images side by side */}
            <div className="grid grid-cols-2 gap-4">
              {/* Bottom left image */}
              <div className="options-image options-image-float group relative">
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-40"></div>
                <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-2 shadow-2xl backdrop-blur-sm">
                  <Image
                    src="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg"
                    alt="Real-time market data"
                    width={300}
                    height={300}
                    className="h-full rounded-2xl object-cover"
                    quality={90}
                  />
                  {/* Overlay label */}
                  <div className="absolute bottom-3 left-3 rounded-xl border border-white/20 bg-black/50 px-3 py-1.5 backdrop-blur-md">
                    <p className="text-xs font-semibold text-white">Real-Time Data</p>
                  </div>
                </div>
              </div>

              {/* Bottom right image */}
              <div className="options-image options-image-float group relative">
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-lime-500 to-emerald-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-40"></div>
                <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-2 shadow-2xl backdrop-blur-sm">
                  <Image
                    src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg"
                    alt="Options strategies"
                    width={300}
                    height={300}
                    className="h-full rounded-2xl object-cover"
                    quality={90}
                  />
                  {/* Overlay label */}
                  <div className="absolute bottom-3 left-3 rounded-xl border border-white/20 bg-black/50 px-3 py-1.5 backdrop-blur-md">
                    <p className="text-xs font-semibold text-white">Strategy Tools</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -right-10 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl"></div>
            <div className="absolute -left-10 bottom-10 h-24 w-24 rounded-full bg-lime-500/10 blur-3xl"></div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.02] p-8 backdrop-blur-sm md:p-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-extrabold text-purple-400">500+</div>
              <div className="text-sm text-neutral-400">Options Contracts</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-extrabold text-lime-400">24/7</div>
              <div className="text-sm text-neutral-400">Market Access</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-extrabold text-emerald-400">0.01s</div>
              <div className="text-sm text-neutral-400">Avg. Execution Time</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-extrabold text-green-400">98.9%</div>
              <div className="text-sm text-neutral-400">Fill Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
