'use client';

import PublicHeader from '@/components/public-header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Footer } from '@/components/footer';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Lightbulb, Users, Sparkles, Award, TrendingUp, Shield, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  { name: 'Alice Johnson', role: 'CEO & Founder', avatar: '1', gradient: 'from-emerald-500 to-teal-500' },
  { name: 'Bob Williams', role: 'Chief Technology Officer', avatar: '2', gradient: 'from-blue-500 to-cyan-500' },
  { name: 'Charlie Brown', role: 'Chief Financial Officer', avatar: '3', gradient: 'from-purple-500 to-pink-500' },
  { name: 'Diana Miller', role: 'Head of Trading', avatar: '4', gradient: 'from-orange-500 to-amber-500' },
];

const values = [
  { icon: Award, title: 'Excellence', description: 'We strive for excellence in everything we do', color: 'text-emerald-400' },
  { icon: TrendingUp, title: 'Innovation', description: 'Constantly pushing the boundaries of technology', color: 'text-teal-400' },
  { icon: Shield, title: 'Security', description: 'Your trust and security are our top priority', color: 'text-cyan-400' },
  { icon: Zap, title: 'Speed', description: 'Lightning-fast execution for every trade', color: 'text-lime-400' },
];

const achievements = [
  { number: '500K+', label: 'Active Traders', gradient: 'from-emerald-500 to-teal-500' },
  { number: '$2.5B+', label: 'Trading Volume', gradient: 'from-teal-500 to-cyan-500' },
  { number: '150+', label: 'Countries Served', gradient: 'from-cyan-500 to-blue-500' },
  { number: '99.9%', label: 'Uptime Guarantee', gradient: 'from-blue-500 to-emerald-500' },
];

const whyChooseUs = [
  {
    title: 'Advanced Technology',
    description: 'Built on cutting-edge infrastructure with real-time data streaming, AI-powered analytics, and institutional-grade execution.',
    icon: Zap,
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Regulatory Compliance',
    description: 'Fully licensed and regulated across multiple jurisdictions, ensuring your investments are protected and secure.',
    icon: Shield,
    gradient: 'from-teal-500 to-cyan-500'
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock customer support from our expert team, ready to assist you whenever you need help.',
    icon: Users,
    gradient: 'from-cyan-500 to-emerald-500'
  },
];

export default function OurCompanyPage() {
  const heroRef = useRef<HTMLElement>(null);
  const missionRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const whyChooseRef = useRef<HTMLElement>(null);
  const achievementsRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.hero-badge', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });

      gsap.from('.hero-content', {
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

      // Mission/Vision cards
      gsap.fromTo('.mission-card',
        {
          opacity: 0,
          y: 50,
        },
        {
          scrollTrigger: {
            trigger: missionRef.current,
            start: 'top 70%',
          },
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
        }
      );

      // Values badges
      gsap.fromTo('.value-badge',
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          scrollTrigger: {
            trigger: valuesRef.current,
            start: 'top 70%',
          },
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          clearProps: 'all',
        }
      );

      // Team member cards
      gsap.fromTo('.team-card',
        {
          opacity: 0,
          y: 50,
        },
        {
          scrollTrigger: {
            trigger: teamRef.current,
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

      // Why Choose Us cards
      gsap.fromTo('.why-choose-card',
        {
          opacity: 0,
          y: 50,
        },
        {
          scrollTrigger: {
            trigger: whyChooseRef.current,
            start: 'top 70%',
          },
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
        }
      );

      // Achievements counter animation
      gsap.fromTo('.achievement-stat',
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          scrollTrigger: {
            trigger: achievementsRef.current,
            start: 'top 70%',
          },
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          clearProps: 'all',
        }
      );

      // Floating sparkles
      gsap.to('.company-sparkle', {
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
                <Users className="h-4 w-4" />
                <span>About Us</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="hero-content text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                Imperex Prime
              </span>
            </h1>

            {/* Description */}
            <p className="hero-content mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300 md:text-xl">
              We are a team of passionate financial experts and technologists dedicated to building the most powerful and intuitive investment platform on the market. Our mission is to democratize access to professional-grade trading tools.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section ref={missionRef} className="relative overflow-hidden bg-gradient-to-b from-card/30 to-background py-20 sm:py-28">
          {/* Background effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/3 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[150px]"></div>
          </div>

          {/* Dot pattern */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Our{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                  Mission & Vision
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Mission Card */}
              <div className="mission-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/10 md:p-10">
                {/* Hover glow */}
                <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20"></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 shadow-lg transition-all duration-300 group-hover:scale-110">
                    <Target className="h-8 w-8 text-white" />
                    <Sparkles className="company-sparkle absolute -right-1 -top-1 h-5 w-5 text-emerald-300" />
                  </div>
                </div>

                <h3 className="mb-4 text-3xl font-extrabold text-white">Our Mission</h3>
                <p className="leading-relaxed text-neutral-300">
                  To empower investors of all levels with transparent, powerful, and accessible financial tools. We strive to break down the barriers to sophisticated trading strategies and provide a platform that fosters informed decision-making and financial growth.
                </p>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 h-24 w-24 rounded-tl-full bg-gradient-to-tl from-emerald-500 to-teal-500 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"></div>
              </div>

              {/* Vision Card */}
              <div className="mission-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/10 md:p-10">
                {/* Hover glow */}
                <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20"></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 shadow-lg transition-all duration-300 group-hover:scale-110">
                    <Lightbulb className="h-8 w-8 text-white" />
                    <Sparkles className="company-sparkle absolute -right-1 -top-1 h-5 w-5 text-cyan-300" />
                  </div>
                </div>

                <h3 className="mb-4 text-3xl font-extrabold text-white">Our Vision</h3>
                <p className="leading-relaxed text-neutral-300">
                  To be the leading global platform for multi-asset investing, recognized for our technological innovation, user-centric design, and unwavering commitment to our clients' success. We envision a future where anyone can invest with the confidence of a professional.
                </p>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 h-24 w-24 rounded-tl-full bg-gradient-to-tl from-blue-500 to-cyan-500 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section ref={valuesRef} className="relative overflow-hidden bg-gradient-to-b from-background to-card/30 py-20 sm:py-28">
          {/* Background effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[150px]"></div>
            <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-teal-500/5 blur-[150px]"></div>
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Our{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                  Core Values
                </span>
              </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="value-badge group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                    style={{ minWidth: '280px', maxWidth: '320px' }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5">
                        <Icon className={`h-8 w-8 ${value.color} transition-transform group-hover:scale-110`} />
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-white">{value.title}</h3>
                      <p className="text-sm text-neutral-400">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section ref={whyChooseRef} className="relative overflow-hidden bg-gradient-to-b from-card/30 to-background py-20 sm:py-28">
          {/* Background effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute right-1/3 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[150px]"></div>
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Why{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                  Choose Us
                </span>
              </h2>
              <p className="mt-4 text-lg text-neutral-400">
                Experience the difference of a truly modern trading platform
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="why-choose-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/10"
                  >
                    {/* Hover glow */}
                    <div className={`absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r ${item.gradient} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20`}></div>

                    {/* Corner gradient */}
                    <div className={`absolute right-0 top-0 h-32 w-32 bg-gradient-to-br ${item.gradient} opacity-20 blur-3xl`}></div>

                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} bg-opacity-10 shadow-lg transition-all duration-300 group-hover:scale-110`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    <h3 className="mb-3 text-2xl font-extrabold text-white">{item.title}</h3>
                    <p className="leading-relaxed text-neutral-300">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Global Achievements Section */}
        <section ref={achievementsRef} className="relative overflow-hidden bg-gradient-to-b from-background to-card/30 py-20 sm:py-28">
          {/* Background effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-teal-500/5 blur-[150px]"></div>
            <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[150px]"></div>
          </div>

          {/* Dot pattern */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Our{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                  Global Impact
                </span>
              </h2>
              <p className="mt-4 text-lg text-neutral-400">
                Trusted by traders worldwide, delivering excellence at scale
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="achievement-stat group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                >
                  {/* Hover glow */}
                  <div className={`absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r ${achievement.gradient} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20`}></div>

                  {/* Number */}
                  <div className={`mb-2 bg-gradient-to-r ${achievement.gradient} bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl`}>
                    {achievement.number}
                  </div>

                  {/* Label */}
                  <div className="text-sm font-semibold text-neutral-400 sm:text-base">
                    {achievement.label}
                  </div>

                  {/* Decorative sparkle */}
                  <Sparkles className="company-sparkle absolute right-2 top-2 h-4 w-4 text-emerald-400 opacity-50" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section ref={teamRef} className="relative overflow-hidden bg-gradient-to-b from-card/30 to-background py-20 sm:py-28">
          {/* Background effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/3 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[150px]"></div>
          </div>

          {/* Dot pattern */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]"></div>


        </section>
      </main>
      <Footer />
    </>
  );
}
