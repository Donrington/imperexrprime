'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Handshake, Award, Globe2, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const partners = [
    { name: 'Partner 1', logoSeed: 'p1' },
    { name: 'Partner 2', logoSeed: 'p2' },
    { name: 'Partner 3', logoSeed: 'p3' },
    { name: 'Partner 4', logoSeed: 'p4' },
    { name: 'Partner 5', logoSeed: 'p5' },
    { name: 'Partner 6', logoSeed: 'p6' },
];

const highlights = [
  {
    icon: Award,
    label: 'Industry Leaders',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-500/10',
    textColor: 'text-amber-400',
  },
  {
    icon: Shield,
    label: 'Secure & Trusted',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-400',
  },
  {
    icon: Globe2,
    label: 'Global Reach',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-500/10',
    textColor: 'text-emerald-400',
  },
];

export function PartnersSection() {
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

      // Animate partner logos
      gsap.from('.partner-logo-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        scale: 0.8,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });

      // Animate highlight badges
      gsap.from('.highlight-badge', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        x: -50,
        stagger: 0.15,
        duration: 0.8,
        delay: 0.5,
        ease: 'power3.out',
      });

      // Floating animation for highlight icons
      gsap.to('.highlight-icon-float', {
        y: -5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-card/30 to-background py-20 sm:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[150px]"></div>
        <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-teal-500/5 blur-[150px]"></div>
      </div>

      {/* Radial dot pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400 backdrop-blur-sm">
              <Handshake className="h-4 w-4" />
              <span>Strategic Partnerships</span>
            </div>
          </div>

          <h2
            ref={titleRef}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Our{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-500 bg-clip-text font-cursive text-transparent">
              Trusted Partners
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-300 md:text-xl">
            We collaborate with industry leaders to bring you the best-in-class trading experience.
          </p>
        </div>

        {/* Partner Logos Showcase */}
        <div className="relative mb-16 overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-sm md:p-12">
          {/* Animated gradient background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-emerald-500/10 to-transparent"></div>
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-teal-500/10 to-transparent"></div>
          </div>

          {/* Grid of logo cards */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner, idx) => {
              const gradients = [
                'from-emerald-500/20 to-teal-500/20',
                'from-lime-500/20 to-green-500/20',
                'from-blue-500/20 to-cyan-500/20',
                'from-teal-500/20 to-cyan-500/20',
                'from-orange-500/20 to-amber-500/20',
                'from-green-500/20 to-lime-500/20',
              ];
              const borderColors = [
                'hover:border-emerald-500/50',
                'hover:border-lime-500/50',
                'hover:border-blue-500/50',
                'hover:border-teal-500/50',
                'hover:border-orange-500/50',
                'hover:border-green-500/50',
              ];
              const glowColors = [
                'from-emerald-500 to-teal-500',
                'from-lime-500 to-green-500',
                'from-blue-500 to-cyan-500',
                'from-teal-500 to-cyan-500',
                'from-orange-500 to-amber-500',
                'from-green-500 to-lime-500',
              ];

              return (
                <div
                  key={partner.name}
                  className={`partner-logo-card group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br ${gradients[idx]} p-6 backdrop-blur-sm transition-all duration-500 hover:scale-105 ${borderColors[idx]}`}
                >
                  {/* Pulsing glow on hover */}
                  <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${glowColors[idx]} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-30 group-hover:animate-pulse`}></div>

                  {/* Logo container with white background for contrast */}
                  <div className="relative flex h-20 items-center justify-center rounded-xl bg-white/95 p-3 shadow-lg transition-all duration-300 group-hover:bg-white group-hover:shadow-2xl">
                    <Image
                      src={`https://picsum.photos/seed/${partner.logoSeed}/120/60`}
                      alt={partner.name}
                      width={120}
                      height={60}
                      className="object-contain transition-all duration-300 group-hover:scale-110"
                      data-ai-hint="logo"
                    />
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
                </div>
              );
            })}
          </div>

          {/* Decorative corner accents */}
          <div className="absolute left-0 top-0 h-24 w-24 rounded-br-full bg-gradient-to-br from-emerald-500/20 to-transparent"></div>
          <div className="absolute right-0 bottom-0 h-24 w-24 rounded-tl-full bg-gradient-to-tl from-teal-500/20 to-transparent"></div>
        </div>

        {/* Bottom Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {highlights.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <div
                key={highlight.label}
                className="highlight-badge group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              >
                {/* Hover glow */}
                <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${highlight.color} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20`}></div>

                <div className="relative flex items-center gap-4 px-6 py-4">
                  {/* Icon */}
                  <div className={`highlight-icon-float flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${highlight.bgColor} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className={`h-6 w-6 ${highlight.textColor}`} />
                  </div>

                  {/* Label */}
                  <div className="text-left">
                    <div className="text-sm font-bold text-white">{highlight.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
