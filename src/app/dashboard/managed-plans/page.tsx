'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PlanCard } from '@/components/plan-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { type Plan } from '@/lib/types';
import { Sparkles, TrendingUp } from 'lucide-react';

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

export default function ManagedPlansPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge animation
      gsap.from('.plans-badge', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });

      // Header animation
      gsap.from('.plans-header', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Plan cards stagger animation
      gsap.fromTo(
        '.plan-card-wrapper',
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          delay: 0.4,
          ease: 'power3.out',
          clearProps: 'all',
        }
      );

      // Floating sparkles animation
      gsap.to('.plans-sparkle', {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen space-y-8 pb-12">
      {/* Background Elements */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -right-1/4 top-1/3 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      </div>

      {/* Header Section */}
      <div className="space-y-6">
        {/* Investment Plans Badge */}
        <div className="plans-badge inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 px-4 py-2 backdrop-blur-sm">
          <TrendingUp className="h-4 w-4 text-emerald-400" />
          <span className="text-sm font-medium text-emerald-400">Investment Plans</span>
        </div>

        {/* Plans Title */}
        <div className="plans-header space-y-3">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                Managed
              </span>
              <Sparkles className="plans-sparkle absolute -right-8 -top-2 h-5 w-5 text-emerald-400" />
            </span>{' '}
            Investment Plans
          </h1>
          <p className="text-lg text-neutral-400 md:text-xl">
            Choose a plan that matches your investment goals and risk tolerance
          </p>
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="sm:hidden">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {plans.map((plan, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="plan-card-wrapper p-1">
                  <PlanCard plan={plan} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Desktop Grid */}
      <div className="hidden sm:grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className="plan-card-wrapper">
            <PlanCard plan={plan} />
          </div>
        ))}
      </div>
    </div>
  );
}
