'use client';

import PublicHeader from '@/components/public-header';
import { ArrowRight, BarChart, Bot, ShieldCheck, Wallet, Sparkles, Zap, TrendingUp, Lock } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Wallet,
    title: 'Managed Investment Plans',
    description: 'Not an active trader? Choose from our expertly managed investment plans. We tailor strategies to your risk profile, from conservative to aggressive, to grow your capital steadily.',
    link: '/dashboard/managed-plans',
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    icon: BarChart,
    title: 'Advanced Trading Terminal',
    description: 'For the hands-on investor, our terminal provides real-time data, advanced charting tools, and rapid execution across all asset classes. Your central hub for active trading.',
    link: '/dashboard/trade-terminal',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Custody & Wallet',
    description: 'Your assets are protected with industry-leading security protocols and multi-layer custody solutions. Manage your portfolio with peace of mind in our secure, integrated wallet.',
    link: '/dashboard/wallet',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
  },
  {
    icon: Bot,
    title: 'Personalized KYC & Onboarding',
    description: 'A seamless and secure identity verification process gets you started quickly. We guide you through every step to ensure your account is compliant and fully featured from day one.',
    link: '/dashboard/settings',
    gradient: 'from-orange-500 to-amber-500',
    bgGradient: 'from-orange-500/10 to-amber-500/10',
  },
];

const features = [
  { icon: Zap, label: 'Lightning Fast', color: 'text-emerald-400' },
  { icon: Lock, label: 'Bank-Grade Security', color: 'text-teal-400' },
  { icon: TrendingUp, label: 'Real-Time Analytics', color: 'text-cyan-400' },
];

export default function ServicesPage() {
  const heroRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.hero-content', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.hero-badge', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: 0.3,
        ease: 'back.out(1.7)',
      });

      // Service cards animation - fixed to ensure all cards animate fully
      gsap.fromTo('.service-card',
        {
          opacity: 0,
          y: 50,
        },
        {
          scrollTrigger: {
            trigger: servicesRef.current,
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

      // Feature badges animation
      gsap.from('.feature-badge', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 60%',
        },
        opacity: 0,
        x: -30,
        stagger: 0.1,
        duration: 0.8,
        delay: 0.5,
        ease: 'power3.out',
      });

      // Floating animation for sparkles
      gsap.to('.service-sparkle', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.3,
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
            <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[150px]"></div>
            <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-teal-500/5 blur-[150px]"></div>
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

          <div className="container mx-auto px-4 text-center">
            {/* Badge */}
            <div className="hero-badge mb-8 inline-flex">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400 backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                <span>Premium Services</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="hero-content text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Our{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                Services
              </span>
            </h1>

            {/* Description */}
            <p className="hero-content mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300 md:text-xl">
              We offer a comprehensive suite of services designed for every type of investor. Whether you prefer a hands-off approach or active trading, our platform provides the tools and security you need.
            </p>

            {/* Feature Badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.label}
                    className="feature-badge group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 hover:bg-white/10"
                  >
                    <Icon className={`h-5 w-5 ${feature.color} transition-transform group-hover:scale-110`} />
                    <span className="text-sm font-semibold text-white">{feature.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section ref={servicesRef} className="relative overflow-hidden bg-gradient-to-b from-card/30 to-background py-20 sm:py-28">
          {/* Background effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/3 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[150px]"></div>
          </div>

          {/* Dot pattern */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="service-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/10"
                  >
                    {/* Hover glow */}
                    <div className={`absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20`}></div>

                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.bgGradient} shadow-lg transition-all duration-300 group-hover:scale-110`}>
                        <Icon className="h-8 w-8 text-white" />
                        <Sparkles className="service-sparkle absolute -right-1 -top-1 h-5 w-5 text-emerald-300" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mb-4 text-2xl font-extrabold text-white">{service.title}</h3>

                    {/* Description */}
                    <p className="mb-6 leading-relaxed text-neutral-400">{service.description}</p>

                    {/* Link */}
                    <Link
                      href={service.link}
                      className={`group/link inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${service.gradient} px-5 py-2.5 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>

                    {/* Decorative corner */}
                    <div className={`absolute bottom-0 right-0 h-24 w-24 rounded-tl-full bg-gradient-to-tl ${service.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
