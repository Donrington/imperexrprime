'use client';

import { type Plan } from '@/lib/types';
import { CheckCircle, Rocket, TrendingUp, Shield, Zap, Star, ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const plans: Plan[] = [
  {
    name: 'Bronze',
    riskLevel: 'Low',
    minDeposit: 500,
    dailyROI: 1.5,
    description: 'A conservative plan with steady, reliable returns.',
    explanation: 'Perfect for new investors getting started.',
    returnOfInvestment: '40% ~ 45%',
    tradeCommission: 10,
    support: '24/7 active support',
    maintenanceFee: true,
  },
  {
    name: 'Silver',
    riskLevel: 'Medium',
    minDeposit: 2500,
    dailyROI: 3.0,
    description: 'A balanced approach for moderate growth.',
    explanation: 'Ideal for those with some market experience.',
    returnOfInvestment: '40% ~ 45%',
    tradeCommission: 10,
    support: '24/7 active support',
    maintenanceFee: true,
  },
  {
    name: 'Gold',
    riskLevel: 'High',
    minDeposit: 10000,
    dailyROI: 5.0,
    description: 'An aggressive strategy for maximum returns.',
    explanation: 'Suited for experienced investors with high risk tolerance.',
    returnOfInvestment: '40% ~ 45%',
    tradeCommission: 10,
    support: '24/7 active support',
    maintenanceFee: true,
  },
];

const planThemes = {
  Bronze: {
    gradient: 'from-amber-600 via-yellow-600 to-orange-600',
    bgGradient: 'from-amber-500/20 via-yellow-500/20 to-orange-500/20',
    cardBg: 'from-amber-500/10 to-yellow-500/5',
    accentColor: 'text-amber-400',
    borderColor: 'border-amber-500/30',
    badgeBg: 'bg-amber-500/20',
    badgeText: 'text-amber-400',
    iconBg: 'bg-amber-500/10',
  },
  Silver: {
    gradient: 'from-slate-400 via-gray-300 to-zinc-400',
    bgGradient: 'from-slate-400/20 via-gray-300/20 to-zinc-400/20',
    cardBg: 'from-slate-400/10 to-gray-300/5',
    accentColor: 'text-slate-300',
    borderColor: 'border-slate-400/30',
    badgeBg: 'bg-slate-400/20',
    badgeText: 'text-slate-300',
    iconBg: 'bg-slate-400/10',
  },
  Gold: {
    gradient: 'from-yellow-500 via-amber-400 to-yellow-600',
    bgGradient: 'from-yellow-500/20 via-amber-400/20 to-yellow-600/20',
    cardBg: 'from-yellow-500/10 to-amber-400/5',
    accentColor: 'text-yellow-400',
    borderColor: 'border-yellow-500/30',
    badgeBg: 'bg-yellow-500/20',
    badgeText: 'text-yellow-400',
    iconBg: 'bg-yellow-500/10',
  },
};

export function ManagedPlansSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 60,
        scale: 0.9,
        duration: 1,
        ease: 'power3.out',
      });

      // Animate plan cards
      gsap.from('.plan-card-animated', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 100,
        rotationX: -20,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
      });

      // Floating ROI numbers
      gsap.to('.roi-float', {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.3,
      });

      // Pulse popular badge
      gsap.to('.popular-badge-pulse', {
        scale: 1.05,
        opacity: 0.9,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-card/30 to-background py-20 sm:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-0 h-[600px] w-[600px] rounded-full bg-yellow-500/5 blur-[150px]"></div>
        <div className="absolute right-1/3 bottom-0 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[150px]"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex">
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-500/30 bg-lime-500/10 px-4 py-2 text-sm font-semibold text-lime-400 backdrop-blur-sm">
              <Star className="h-4 w-4" />
              <span>Investment Plans</span>
            </div>
          </div>

          <h2
            ref={titleRef}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Managed{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text font-cursive text-transparent">
              Investment Plans
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-300 md:text-xl">
            Choose a plan that matches your investment goals and risk tolerance. Professional traders manage your portfolio 24/7.
          </p>
        </div>

        {/* Plan Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => {
            const theme = planThemes[plan.name as keyof typeof planThemes];
            const isPopular = plan.name === 'Silver';
            const isHovered = hoveredPlan === plan.name;

            return (
              <div
                key={plan.name}
                className="plan-card-animated group relative"
                onMouseEnter={() => setHoveredPlan(plan.name)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="popular-badge-pulse absolute -top-4 left-1/2 z-20 -translate-x-1/2">
                    <div className="flex items-center gap-2 rounded-full border border-lime-500/50 bg-lime-500/20 px-4 py-2 text-sm font-bold text-lime-400 backdrop-blur-sm shadow-lg">
                      <Sparkles className="h-4 w-4" />
                      <span>MOST POPULAR</span>
                    </div>
                  </div>
                )}

                {/* Glow effect */}
                <div className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r ${theme.gradient} opacity-0 blur-xl transition-all duration-700 ${isPopular ? 'group-hover:opacity-50' : 'group-hover:opacity-30'}`}></div>

                {/* Card */}
                <div className={`relative flex h-full flex-col overflow-hidden rounded-3xl border ${theme.borderColor} bg-gradient-to-br ${theme.cardBg} backdrop-blur-xl transition-all duration-500 ${isPopular ? 'scale-105 border-lime-500/30' : ''} group-hover:border-white/30`}>
                  {/* Header */}
                  <div className="relative p-8 pb-6">
                    {/* Background pattern */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${theme.bgGradient} opacity-50`}></div>

                    {/* Risk badge */}
                    <div className={`relative mb-4 inline-flex items-center gap-2 rounded-full ${theme.badgeBg} border border-white/20 px-3 py-1 text-xs font-bold ${theme.badgeText}`}>
                      <TrendingUp className="h-3 w-3" />
                      <span>{plan.riskLevel} Risk</span>
                    </div>

                    {/* Plan name */}
                    <h3 className={`relative mb-2 text-4xl font-extrabold ${theme.accentColor} transition-all duration-300 ${isHovered ? 'scale-105' : ''}`}>
                      {plan.name}
                    </h3>
                    <p className="relative text-sm text-neutral-400">{plan.description}</p>
                  </div>

                  {/* ROI Section */}
                  <div className="relative px-8 py-6">
                    <div className={`rounded-2xl border ${theme.borderColor} bg-gradient-to-br ${theme.cardBg} p-6 backdrop-blur-sm`}>
                      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-400">
                        Daily ROI
                      </p>
                      <div className={`roi-float mb-2 text-5xl font-extrabold ${theme.accentColor}`}>
                        {plan.dailyROI?.toFixed(1)}%
                      </div>
                      <p className="text-xs text-neutral-500">{plan.explanation}</p>
                    </div>
                  </div>

                  {/* Minimum Deposit */}
                  <div className="px-8 pb-6">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-neutral-400">
                          Min. Deposit
                        </p>
                        <p className="text-3xl font-bold text-white">
                          ${plan.minDeposit.toLocaleString()}
                        </p>
                      </div>
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${theme.bgGradient} transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110`}>
                        <Shield className={`h-6 w-6 ${theme.accentColor}`} />
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex-grow px-8 pb-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm text-neutral-300">
                        <CheckCircle className={`h-4 w-4 ${theme.accentColor}`} />
                        <span>ROI: {plan.returnOfInvestment}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-neutral-300">
                        <CheckCircle className={`h-4 w-4 ${theme.accentColor}`} />
                        <span>Trade Commission: {plan.tradeCommission}%</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-neutral-300">
                        <CheckCircle className={`h-4 w-4 ${theme.accentColor}`} />
                        <span>{plan.support}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-neutral-300">
                        <CheckCircle className={`h-4 w-4 ${theme.accentColor}`} />
                        <span>Maintenance fee applied</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="p-8 pt-0">
                    <Button
                      asChild
                      className={`group/btn relative w-full overflow-hidden rounded-xl border-2 ${theme.borderColor} bg-gradient-to-r ${theme.cardBg} py-6 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${isPopular ? 'bg-lime-500 text-black hover:bg-lime-400' : ''}`}
                    >
                      <Link href="/dashboard/wallet">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <Rocket className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                          Select {plan.name} Plan
                          <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                        </span>
                        {!isPopular && (
                          <div className={`absolute inset-0 -z-0 bg-gradient-to-r ${theme.gradient} opacity-0 transition-opacity group-hover/btn:opacity-20`}></div>
                        )}
                      </Link>
                    </Button>
                  </div>

                  {/* Bottom glow */}
                  <div className={`absolute -bottom-20 left-0 right-0 h-40 bg-gradient-to-t ${theme.bgGradient} blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-60`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom info section */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.02] p-8 backdrop-blur-sm md:p-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime-500/20">
                <Zap className="h-6 w-6 text-lime-400" />
              </div>
              <div>
                <div className="mb-1 text-lg font-bold text-white">Instant Activation</div>
                <div className="text-sm text-neutral-400">Start earning returns immediately after deposit confirmation</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/20">
                <Shield className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <div className="mb-1 text-lg font-bold text-white">Secure & Insured</div>
                <div className="text-sm text-neutral-400">Your investments are protected with bank-grade security</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-500/20">
                <TrendingUp className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <div className="mb-1 text-lg font-bold text-white">Professional Management</div>
                <div className="text-sm text-neutral-400">Expert traders optimize your portfolio around the clock</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
