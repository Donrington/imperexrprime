'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { TradeChart } from '@/components/trade-chart';
import type { Transaction } from '@/lib/types';
import { ArrowDownLeft, DollarSign, Wallet, TrendingUp, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TradingViewTicker } from '@/components/tradingview-ticker';

gsap.registerPlugin(ScrollTrigger);

const transactions: Transaction[] = [
  {
    id: 'txn_1',
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    type: 'Deposit',
    amount: 5000.0,
    status: 'Completed',
    description: 'Initial account funding',
  },
  {
    id: 'txn_2',
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    type: 'Trade',
    amount: -1250.75,
    status: 'Completed',
    description: 'Buy 0.02 BTC',
  },
  {
    id: 'txn_3',
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    type: 'Allocation',
    amount: 1000.0,
    status: 'Completed',
    description: 'Allocated to Gold Plan',
  },
  {
    id: 'txn_4',
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    type: 'Withdrawal',
    amount: -500.0,
    status: 'Pending',
    description: 'Withdrawal to bank account',
  },
  {
    id: 'txn_5',
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    type: 'Trade',
    amount: 250.50,
    status: 'Completed',
    description: 'Sell 10 AAPL shares',
  },
];

const stats = [
  {
    title: 'Portfolio Value',
    value: '$14,382.54',
    change: '+15.2% from last month',
    icon: DollarSign,
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
    trend: 'up',
  },
  {
    title: 'Available Funds',
    value: '$3,382.54',
    change: 'Ready to trade',
    icon: Wallet,
    gradient: 'from-teal-500 to-cyan-500',
    bgGradient: 'from-teal-500/10 to-cyan-500/10',
    trend: 'neutral',
  },
  {
    title: 'Total Gains',
    value: '+$2,132.18',
    change: 'All-time profit',
    icon: TrendingUp,
    gradient: 'from-emerald-500 to-green-500',
    bgGradient: 'from-emerald-500/10 to-green-500/10',
    trend: 'up',
  },
  {
    title: '24h Change',
    value: '-$88.43',
    change: '-0.61% in the last 24 hours',
    icon: ArrowDownLeft,
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-500/10 to-red-500/10',
    trend: 'down',
  },
];

export default function DashboardPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Welcome badge animation
      gsap.from('.dashboard-badge', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });

      // Header animation
      gsap.from('.dashboard-header', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Stats cards stagger animation
      gsap.fromTo(
        '.stat-card',
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

      // Chart and transactions cards
      gsap.fromTo(
        '.dashboard-content-card',
        {
          opacity: 0,
          y: 50,
        },
        {
          scrollTrigger: {
            trigger: '.dashboard-content-card',
            start: 'top 80%',
          },
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
        }
      );

      // Floating sparkles animation
      gsap.to('.dashboard-sparkle', {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.2,
      });

      // Stat icons floating animation
      gsap.to('.stat-icon', {
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

  const getStatusBadge = (status: Transaction['status']) => {
    switch (status) {
      case 'Completed':
        return (
          <Badge className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border-emerald-500/30">
            Completed
          </Badge>
        );
      case 'Pending':
        return (
          <Badge className="bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 border-amber-500/30">
            Pending
          </Badge>
        );
      case 'Failed':
        return (
          <Badge className="bg-red-500/20 text-red-400 hover:bg-red-500/30 border-red-500/30">
            Failed
          </Badge>
        );
    }
  };

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
      <div ref={headerRef} className="space-y-6">
        {/* Welcome Badge */}
        <div className="dashboard-badge inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 px-4 py-2 backdrop-blur-sm">
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-sm font-medium text-emerald-400">Live Dashboard</span>
        </div>

        {/* Dashboard Title */}
        <div className="dashboard-header space-y-3">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            Your{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                Portfolio
              </span>
              <Sparkles className="dashboard-sparkle absolute -right-8 -top-2 h-5 w-5 text-emerald-400" />
            </span>
          </h1>
          <p className="text-lg text-neutral-400 md:text-xl">
            Track your investments and trading activity in real-time
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="stat-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20"
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
                    className={`stat-icon rounded-xl bg-gradient-to-br ${stat.bgGradient} p-2.5 backdrop-blur-sm`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Value */}
                <div className="space-y-1">
                  <p
                    className={cn(
                      'text-3xl font-bold',
                      stat.trend === 'up' && 'text-emerald-400',
                      stat.trend === 'down' && 'text-red-400',
                      stat.trend === 'neutral' && 'text-white'
                    )}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-neutral-500">{stat.change}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* TradingView Ticker */}
      <div className="dashboard-content-card">
        <TradingViewTicker />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Portfolio Performance Chart */}
        <div className="dashboard-content-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm lg:col-span-3">
          {/* Gradient Glow on Hover */}
          <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20" />

          {/* Corner Gradient */}
          <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-50 blur-3xl" />

          <CardHeader className="relative">
            <div className="flex items-start justify-between">
              <div className="space-y-1.5">
                <CardTitle className="text-2xl font-bold text-white">
                  Portfolio Performance
                </CardTitle>
                <CardDescription className="text-neutral-400">
                  Your portfolio value over the last 30 minutes
                </CardDescription>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-2.5 backdrop-blur-sm">
                <TrendingUp className="h-5 w-5 text-emerald-400" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative">
            <TradeChart asset="Crypto" />
          </CardContent>
        </div>

        {/* Recent Transactions */}
        <div className="dashboard-content-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm lg:col-span-2">
          {/* Gradient Glow on Hover */}
          <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20" />

          {/* Corner Gradient */}
          <div className="absolute left-0 top-0 h-64 w-64 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 opacity-50 blur-3xl" />

          <CardHeader className="relative">
            <div className="space-y-1.5">
              <CardTitle className="text-2xl font-bold text-white">
                Recent Transactions
              </CardTitle>
              <CardDescription className="text-neutral-400">
                Your most recent account activity
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="relative">
            <Table>
              <TableHeader>
                <TableRow className="border-white/10 hover:bg-white/5">
                  <TableHead className="text-neutral-400">Type</TableHead>
                  <TableHead className="text-neutral-400">Amount</TableHead>
                  <TableHead className="text-neutral-400">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow
                    key={transaction.id}
                    className="border-white/10 transition-colors hover:bg-white/5"
                  >
                    <TableCell className="font-medium text-white">
                      {transaction.type}
                    </TableCell>
                    <TableCell
                      className={cn(
                        'font-semibold',
                        transaction.amount > 0
                          ? 'text-emerald-400'
                          : 'text-red-400'
                      )}
                    >
                      {transaction.amount > 0 ? '+' : ''}$
                      {Math.abs(transaction.amount).toFixed(2)}
                    </TableCell>
                    <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </div>
      </div>
    </div>
  );
}
