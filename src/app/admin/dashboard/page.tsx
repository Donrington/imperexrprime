'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Users, Activity, ShieldCheck, DollarSign, Sparkles, Crown } from 'lucide-react';

const stats = [
  {
    title: 'Total Users',
    value: '1,257',
    change: '+50 since last week',
    icon: Users,
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    title: 'Pending KYC',
    value: '32',
    change: 'New applications to review',
    icon: ShieldCheck,
    gradient: 'from-teal-500 to-cyan-500',
    bgGradient: 'from-teal-500/10 to-cyan-500/10',
  },
  {
    title: 'Pending Withdrawals',
    value: '$12,450.00',
    change: '15 pending requests',
    icon: DollarSign,
    gradient: 'from-cyan-500 to-emerald-500',
    bgGradient: 'from-cyan-500/10 to-emerald-500/10',
  },
  {
    title: 'Recent Transactions',
    value: '+573',
    change: 'In the last 24 hours',
    icon: Activity,
    gradient: 'from-emerald-500 to-green-500',
    bgGradient: 'from-emerald-500/10 to-green-500/10',
  },
];

export default function AdminDashboardPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge animation
      gsap.from('.admin-badge', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });

      // Header animation
      gsap.from('.admin-header', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Stats cards stagger animation
      gsap.fromTo(
        '.admin-stat-card',
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          delay: 0.4,
          ease: 'power3.out',
          clearProps: 'all',
        }
      );

      // Welcome card animation
      gsap.from('.admin-welcome-card', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.8,
        ease: 'power3.out',
      });

      // Floating sparkles animation
      gsap.to('.admin-sparkle', {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.2,
      });

      // Stat icons floating animation
      gsap.to('.admin-stat-icon', {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.3,
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
        {/* Admin Badge */}
        <div className="admin-badge inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 px-4 py-2 backdrop-blur-sm">
          <Crown className="h-4 w-4 text-emerald-400" />
          <span className="text-sm font-medium text-emerald-400">Administrator Panel</span>
        </div>

        {/* Dashboard Title */}
        <div className="admin-header space-y-3">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            Admin{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                Dashboard
              </span>
              <Sparkles className="admin-sparkle absolute -right-8 -top-2 h-5 w-5 text-emerald-400" />
            </span>
          </h1>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="admin-stat-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20"
            >
              {/* Gradient Glow on Hover */}
              <div
                className={`absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r ${stat.gradient} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20`}
              />

              {/* Corner Gradient */}
              <div
                className={`absolute right-0 top-0 h-32 w-32 bg-gradient-to-br ${stat.bgGradient} opacity-50 blur-3xl`}
              />

              {/* Content */}
              <div className="relative space-y-4">
                {/* Header with Icon */}
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-neutral-400">{stat.title}</p>
                  <div
                    className={`admin-stat-icon rounded-xl bg-gradient-to-br ${stat.bgGradient} p-2.5 backdrop-blur-sm`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Value */}
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-neutral-500">{stat.change}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Welcome Card */}
      <div className="admin-welcome-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
        {/* Gradient Glow on Hover */}
        <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20" />

        {/* Corner Gradient */}
        <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-50 blur-3xl" />

        <CardHeader className="relative">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-2.5 backdrop-blur-sm">
              <Crown className="h-6 w-6 text-emerald-400" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-white">Welcome Admin</CardTitle>
              <CardDescription className="text-neutral-400">
                Here you can manage users, review applications, and monitor the platform
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative">
          <p className="text-neutral-300">
            Use the navigation on the left to access different sections of the admin panel. You have full control over user management, KYC verification, transaction monitoring, and platform settings.
          </p>
        </CardContent>
      </div>
    </div>
  );
}
