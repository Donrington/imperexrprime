'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, TrendingUp, Shield } from 'lucide-react';
import { TradingViewTicker } from '@/components/tradingview-ticker';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const CAROUSEL_IMAGES = [
  'https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg',
  'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg',
  'https://images.pexels.com/photos/6770775/pexels-photo-6770775.jpeg',
  'https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg',
  'https://images.pexels.com/photos/29611783/pexels-photo-29611783.jpeg',
  'https://images.pexels.com/photos/5716053/pexels-photo-5716053.jpeg',
  'https://images.pexels.com/photos/7691761/pexels-photo-7691761.jpeg',
  'https://images.pexels.com/photos/8358136/pexels-photo-8358136.jpeg',
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // GSAP animations on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate headline words
      gsap.from('.headline-word', {
        opacity: 0,
        y: 100,
        rotationX: -90,
        transformOrigin: '50% 50%',
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
        delay: 0.3,
      });

      // Animate "Investing" word separately with special effect
      gsap.from('.investing-word', {
        opacity: 0,
        scale: 0.5,
        rotation: -15,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)',
        delay: 1.2,
      });

      // Animate subheadline
      gsap.from(subheadlineRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: 1.5,
      });

      // Animate CTA buttons
      gsap.from('.cta-button', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        delay: 1.8,
      });

      // Animate feature cards
      gsap.from('.feature-card', {
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 2.2,
      });

      // Floating animation for sparkles
      gsap.to('.sparkle-icon', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.3,
      });

      // Gradient animation
      gsap.to('.animated-gradient', {
        backgroundPosition: '200% center',
        duration: 3,
        repeat: -1,
        ease: 'linear',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Image fade transition
  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: 'power2.inOut' }
      );
    }
  }, [currentImageIndex]);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-background pt-20"
    >
      {/* Animated Background Carousel */}
      <div className="absolute inset-0 z-0">
        <div ref={imageRef} className="relative h-full w-full">
          <Image
            src={CAROUSEL_IMAGES[currentImageIndex]}
            alt="Hero Background"
            fill
            className="object-cover"
            priority={currentImageIndex === 0}
            quality={90}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-blue-950/80"></div>

        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <Sparkles className="sparkle-icon absolute left-[10%] top-[20%] h-6 w-6 text-lime-400/40" />
        <Sparkles className="sparkle-icon absolute right-[15%] top-[30%] h-8 w-8 text-lime-400/30" />
        <Sparkles className="sparkle-icon absolute left-[20%] bottom-[25%] h-5 w-5 text-lime-400/50" />
        <Sparkles className="sparkle-icon absolute right-[25%] bottom-[35%] h-7 w-7 text-lime-400/35" />
      </div>

      <div className="container relative z-10 mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:gap-16">
        {/* Left side - Main content */}
        <div className="flex flex-col justify-center space-y-8">
          {/* Badge */}
          <div className="inline-flex">
            <div className="animated-gradient inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-lime-500/20 via-blue-500/20 to-lime-500/20 bg-[length:200%_auto] px-4 py-2 text-sm font-semibold text-lime-400 ring-1 ring-lime-400/30">
              <Sparkles className="h-4 w-4" />
              <span>Award-Winning Platform 2026</span>
            </div>
          </div>

          {/* Headline with mixed typography */}
          <h1
            ref={headlineRef}
            className="text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="headline-word inline-block">The</span>{' '}
            <span className="headline-word inline-block">Future</span>{' '}
            <span className="headline-word inline-block">of</span>{' '}
            <span className="headline-word inline-block">Intelligent</span>{' '}
            <span className="investing-word inline-block bg-gradient-to-r from-lime-400 via-lime-500 to-emerald-400 bg-clip-text font-cursive text-transparent">
              Investing
            </span>
          </h1>

          {/* Subheadline */}
          <p
            ref={subheadlineRef}
            className="max-w-xl text-lg leading-relaxed text-neutral-300 md:text-xl"
          >
            Experience the next generation of multi-asset investment with{' '}
            <span className="font-semibold text-lime-400">Imperex Prime</span>.
            Powered by cutting-edge AI and real-time analytics to maximize your
            portfolio potential.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="cta-button group relative overflow-hidden bg-lime-500 text-lg font-bold text-black hover:bg-lime-400"
            >
              <Link href="/signup">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-lime-400 to-emerald-400 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="cta-button border-2 border-white/20 bg-white/5 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:border-lime-400/50 hover:bg-white/10"
            >
              <Link href="/contact">
                <Shield className="mr-2 h-5 w-5" />
                Contact Sales
              </Link>
            </Button>
          </div>

          {/* Stats mini-cards */}
          <div
            ref={featuresRef}
            className="grid grid-cols-3 gap-4 pt-4"
          >
            <div className="feature-card group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-lime-400/30 hover:bg-white/10">
              <div className="text-2xl font-bold text-lime-400">$2.4B+</div>
              <div className="text-xs text-neutral-400">Assets Under Management</div>
            </div>
            <div className="feature-card group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-lime-400/30 hover:bg-white/10">
              <div className="flex items-center gap-1 text-2xl font-bold text-lime-400">
                <TrendingUp className="h-5 w-5" />
                98.7%
              </div>
              <div className="text-xs text-neutral-400">Success Rate</div>
            </div>
            <div className="feature-card group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-lime-400/30 hover:bg-white/10">
              <div className="text-2xl font-bold text-lime-400">50K+</div>
              <div className="text-xs text-neutral-400">Active Traders</div>
            </div>
          </div>
        </div>

        {/* Right side - Visual element */}
        <div className="relative hidden items-center justify-center lg:flex">
          <div className="relative h-[600px] w-full">
            {/* Glowing orb effect */}
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-500/20 blur-[120px]"></div>

            {/* Floating card mockup */}
            <div className="absolute left-1/2 top-1/2 w-[400px] -translate-x-1/2 -translate-y-1/2 space-y-4">
              <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl shadow-2xl">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-400">Portfolio Value</span>
                  <TrendingUp className="h-5 w-5 text-lime-400" />
                </div>
                <div className="mb-2 text-4xl font-bold text-white">$124,563.89</div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-lime-400">+12.4%</span>
                  <span className="text-neutral-400">Last 24h</span>
                </div>

                {/* Mini chart visualization */}
                <div className="mt-6 flex h-24 items-end gap-1">
                  {[40, 60, 45, 70, 55, 80, 65, 85, 75, 90, 80, 95].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-lime-500 to-lime-400 transition-all hover:from-lime-400 hover:to-lime-300"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Secondary floating card */}
              <div className="ml-8 rounded-2xl border border-white/20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-500/20">
                    <Shield className="h-5 w-5 text-lime-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Secured & Insured</div>
                    <div className="text-xs text-neutral-400">Bank-level encryption</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TradingView Ticker at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <TradingViewTicker />
      </div>
    </section>
  );
}
