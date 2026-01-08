'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
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
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, CheckCircle, XCircle, Sparkles, Crown, Receipt } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Transaction } from '@/lib/types';
import { Separator } from '@/components/ui/separator';

const allTransactions: Transaction[] = [
  { id: 'txn_101', date: '2023-10-26', type: 'Deposit', amount: 5000.0, status: 'Completed', description: 'user_a@example.com' },
  { id: 'txn_102', date: '2023-10-26', type: 'Withdrawal', amount: -500.0, status: 'Pending', description: 'user_b@example.com' },
  { id: 'txn_103', date: '2023-10-25', type: 'Trade', amount: -1250.75, status: 'Completed', description: 'user_c@example.com' },
  { id: 'txn_104', date: '2023-10-24', type: 'Withdrawal', amount: -1000.0, status: 'Pending', description: 'user_d@example.com' },
  { id: 'txn_105', date: '2023-10-23', type: 'Deposit', amount: 2500.0, status: 'Failed', description: 'user_e@example.com' },
  { id: 'txn_106', date: '2023-10-22', type: 'Withdrawal', amount: -250.0, status: 'Completed', description: 'user_a@example.com' },
];

const pendingWithdrawals = allTransactions.filter(
  (tx) => tx.type === 'Withdrawal' && tx.status === 'Pending'
);

export default function AdminTransactionsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge animation
      gsap.from('.transactions-badge', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });

      // Header animation
      gsap.from('.transactions-header', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Pending card animation
      gsap.from('.pending-card', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out',
      });

      // All transactions card animation
      gsap.from('.all-transactions-card', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.6,
        ease: 'power3.out',
      });

      // Floating sparkles animation
      gsap.to('.transactions-sparkle', {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const getStatusBadge = (status: Transaction['status']) => {
    switch (status) {
      case 'Completed': return <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0">Completed</Badge>;
      case 'Pending': return <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">Pending</Badge>;
      case 'Failed': return <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0">Failed</Badge>;
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen space-y-6 pb-12 sm:space-y-8">
      {/* Background Elements */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -right-1/4 top-1/3 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      </div>

      {/* Header Section */}
      <div className="space-y-4 sm:space-y-6">
        {/* Transactions Badge */}
        <div className="transactions-badge inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 px-3 py-1.5 backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-2">
          <Crown className="h-3.5 w-3.5 text-emerald-400 sm:h-4 sm:w-4" />
          <span className="text-xs font-medium text-emerald-400 sm:text-sm">Transaction Management</span>
        </div>

        {/* Header */}
        <div className="transactions-header space-y-2 sm:space-y-3">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                Transactions
              </span>
              <Sparkles className="transactions-sparkle absolute -right-6 -top-1 h-4 w-4 text-emerald-400 sm:-right-8 sm:-top-2 sm:h-5 sm:w-5" />
            </span>
          </h1>
          <p className="text-base text-neutral-400 sm:text-lg">Monitor and manage all platform transactions</p>
        </div>
      </div>

      {/* Pending Withdrawals Card */}
      <div className="pending-card group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm sm:rounded-3xl">
        {/* Gradient Glow on Hover */}
        <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20 sm:rounded-3xl" />

        {/* Corner Gradient */}
        <div className="absolute right-0 top-0 h-40 w-40 bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-50 blur-3xl sm:h-64 sm:w-64" />

        <CardHeader className="relative p-4 sm:p-6">
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="rounded-lg bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-2 backdrop-blur-sm sm:rounded-xl sm:p-2.5">
              <Receipt className="h-5 w-5 text-amber-400 sm:h-6 sm:w-6" />
            </div>
            <div>
              <CardTitle className="text-lg font-bold text-white sm:text-xl md:text-2xl">Pending Withdrawal Requests</CardTitle>
              <CardDescription className="text-xs text-neutral-400 sm:text-sm">
                Review and approve or decline withdrawal requests from users
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative p-4 sm:p-6 sm:pt-0">
          {pendingWithdrawals.length > 0 ? (
            <div className="overflow-x-auto">
              <Table className="min-w-[600px]">
                <TableHeader>
                  <TableRow className="border-white/10 hover:bg-white/5">
                    <TableHead className="px-4 text-xs text-neutral-400 sm:text-sm">User</TableHead>
                    <TableHead className="px-4 text-xs text-neutral-400 sm:text-sm">Date</TableHead>
                    <TableHead className="px-4 text-right text-xs text-neutral-400 sm:text-sm">Amount</TableHead>
                    <TableHead className="px-4 text-center text-xs text-neutral-400 sm:text-sm">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingWithdrawals.map((tx) => (
                    <TableRow key={tx.id} className="border-white/10 transition-colors hover:bg-white/5">
                      <TableCell className="px-4 py-3 text-xs text-white sm:py-4 sm:text-sm">
                        {tx.description}
                      </TableCell>
                      <TableCell className="whitespace-nowrap px-4 py-3 text-xs text-neutral-400 sm:py-4 sm:text-sm">{tx.date}</TableCell>
                      <TableCell className="whitespace-nowrap px-4 py-3 text-right text-xs font-medium text-red-400 sm:py-4 sm:text-sm">
                        ${Math.abs(tx.amount).toFixed(2)}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-center sm:py-4">
                        <div className="flex justify-center gap-1 sm:gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 flex-shrink-0 rounded-lg text-emerald-400 transition-all hover:bg-emerald-500/10 hover:text-emerald-300 sm:h-10 sm:w-10 sm:rounded-xl"
                          >
                            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                            <span className="sr-only">Approve</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 flex-shrink-0 rounded-lg text-red-400 transition-all hover:bg-red-500/10 hover:text-red-300 sm:h-10 sm:w-10 sm:rounded-xl"
                          >
                            <XCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                            <span className="sr-only">Decline</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <p className="text-xs text-neutral-400 sm:text-sm">No pending withdrawals to review.</p>
          )}
        </CardContent>
      </div>

      {/* All Transactions Card */}
      <div className="all-transactions-card group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm sm:rounded-3xl">
        {/* Gradient Glow on Hover */}
        <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20 sm:rounded-3xl" />

        {/* Corner Gradient */}
        <div className="absolute right-0 top-0 h-40 w-40 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-50 blur-3xl sm:h-64 sm:w-64" />

        <CardHeader className="relative p-4 sm:p-6">
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="rounded-lg bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-2 backdrop-blur-sm sm:rounded-xl sm:p-2.5">
              <Receipt className="h-5 w-5 text-emerald-400 sm:h-6 sm:w-6" />
            </div>
            <div>
              <CardTitle className="text-lg font-bold text-white sm:text-xl md:text-2xl">All Transactions</CardTitle>
              <CardDescription className="text-xs text-neutral-400 sm:text-sm">
                View, search, and manage all platform transactions, including deposits
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative p-4 sm:p-6 sm:pt-0">
          <div className="mb-3 sm:mb-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-500 sm:left-3 sm:h-4 sm:w-4" />
              <Input
                placeholder="Search transactions..."
                className="rounded-lg border-white/10 bg-white/5 pl-8 text-xs text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 sm:rounded-xl sm:pl-10 sm:text-sm"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table className="min-w-[700px]">
              <TableHeader>
                <TableRow className="border-white/10 hover:bg-white/5">
                  <TableHead className="px-4 text-xs text-neutral-400 sm:text-sm">ID</TableHead>
                  <TableHead className="px-4 text-xs text-neutral-400 sm:text-sm">User</TableHead>
                  <TableHead className="px-4 text-xs text-neutral-400 sm:text-sm">Date</TableHead>
                  <TableHead className="px-4 text-xs text-neutral-400 sm:text-sm">Type</TableHead>
                  <TableHead className="px-4 text-xs text-neutral-400 sm:text-sm">Status</TableHead>
                  <TableHead className="px-4 text-right text-xs text-neutral-400 sm:text-sm">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allTransactions.map((tx) => (
                  <TableRow key={tx.id} className="border-white/10 transition-colors hover:bg-white/5">
                    <TableCell className="px-4 py-3 font-mono text-xs text-neutral-400 sm:py-4">{tx.id}</TableCell>
                    <TableCell className="px-4 py-3 text-xs text-white sm:py-4 sm:text-sm">
                      {tx.description}
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-4 py-3 text-xs text-neutral-400 sm:py-4 sm:text-sm">{tx.date}</TableCell>
                    <TableCell className="whitespace-nowrap px-4 py-3 text-xs text-neutral-300 sm:py-4 sm:text-sm">{tx.type}</TableCell>
                    <TableCell className="px-4 py-3 sm:py-4">{getStatusBadge(tx.status)}</TableCell>
                    <TableCell className={cn('whitespace-nowrap px-4 py-3 text-right text-xs font-medium sm:py-4 sm:text-sm', tx.amount > 0 ? 'text-emerald-400' : 'text-red-400')}>
                      {tx.amount > 0 ? '+' : ''}${Math.abs(tx.amount).toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </div>
    </div>
  );
}
