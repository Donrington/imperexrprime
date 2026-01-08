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
import { CheckCircle, XCircle, Sparkles, Crown, ShieldCheck } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const applications = [
  { id: 'usr_1', name: 'Bob Johnson', email: 'bob.j@example.com', date: '2023-10-26', status: 'Pending', avatar: '3' },
  { id: 'usr_2', name: 'Charlie Brown', email: 'charlie.b@example.com', date: '2023-10-25', status: 'Pending', avatar: '4' },
  { id: 'usr_3', name: 'Diana Miller', email: 'diana.m@example.com', date: '2023-10-24', status: 'Pending', avatar: '5' },
];


export default function AdminKycPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge animation
      gsap.from('.kyc-badge', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });

      // Header animation
      gsap.from('.kyc-header', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Card animation
      gsap.from('.kyc-card', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out',
      });

      // Floating sparkles animation
      gsap.to('.kyc-sparkle', {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

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
        {/* KYC Badge */}
        <div className="kyc-badge inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 px-3 py-1.5 backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-2">
          <Crown className="h-3.5 w-3.5 text-emerald-400 sm:h-4 sm:w-4" />
          <span className="text-xs font-medium text-emerald-400 sm:text-sm">KYC Verification</span>
        </div>

        {/* Header */}
        <div className="kyc-header space-y-2 sm:space-y-3">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            KYC{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                Applications
              </span>
              <Sparkles className="kyc-sparkle absolute -right-6 -top-1 h-4 w-4 text-emerald-400 sm:-right-8 sm:-top-2 sm:h-5 sm:w-5" />
            </span>
          </h1>
          <p className="text-base text-neutral-400 sm:text-lg">Review and verify user identity submissions</p>
        </div>
      </div>

      {/* Applications Card */}
      <div className="kyc-card group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm sm:rounded-3xl">
        {/* Gradient Glow on Hover */}
        <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20 sm:rounded-3xl" />

        {/* Corner Gradient */}
        <div className="absolute right-0 top-0 h-40 w-40 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-50 blur-3xl sm:h-64 sm:w-64" />

        <CardHeader className="relative p-4 sm:p-6">
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-2 backdrop-blur-sm sm:rounded-xl sm:p-2.5">
              <ShieldCheck className="h-5 w-5 text-cyan-400 sm:h-6 sm:w-6" />
            </div>
            <div>
              <CardTitle className="text-lg font-bold text-white sm:text-xl md:text-2xl">Pending Applications</CardTitle>
              <CardDescription className="text-xs text-neutral-400 sm:text-sm">
                Review and approve or reject user KYC submissions
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative p-0 sm:p-6 sm:pt-0">
           <div className="overflow-x-auto px-4 sm:px-0">
             <Table className="min-w-full">
              <TableHeader>
                <TableRow className="border-white/10 hover:bg-white/5">
                  <TableHead className="min-w-[180px] text-xs text-neutral-400 sm:min-w-0 sm:text-sm">User</TableHead>
                  <TableHead className="hidden min-w-[100px] text-xs text-neutral-400 sm:table-cell sm:text-sm">Submission Date</TableHead>
                  <TableHead className="min-w-[80px] text-xs text-neutral-400 sm:min-w-0 sm:text-sm">Status</TableHead>
                  <TableHead className="min-w-[120px] text-right text-xs text-neutral-400 sm:min-w-0 sm:text-sm">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.map((app) => (
                  <TableRow key={app.id} className="border-white/10 transition-colors hover:bg-white/5">
                    <TableCell className="py-3 sm:py-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="relative flex-shrink-0">
                          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 blur-md transition-opacity group-hover:opacity-75"></div>
                          <Avatar className="relative h-8 w-8 border-2 border-white/20 sm:h-10 sm:w-10">
                            <AvatarImage src={`https://picsum.photos/seed/${app.avatar}/40/40`} data-ai-hint="person face" />
                            <AvatarFallback className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-xs text-cyan-400 sm:text-sm">{app.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-xs font-medium text-white sm:text-sm">{app.name}</p>
                          <p className="truncate text-xs text-neutral-400 sm:text-sm">{app.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden whitespace-nowrap text-xs text-neutral-400 sm:table-cell sm:text-sm">{app.date}</TableCell>
                    <TableCell className="py-3 sm:py-4">
                      <Badge className="whitespace-nowrap border-0 bg-gradient-to-r from-amber-500 to-orange-500 text-xs text-white">{app.status}</Badge>
                    </TableCell>
                    <TableCell className="py-3 text-right sm:py-4">
                      <div className="flex justify-end gap-1 sm:gap-2">
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
                          <span className="sr-only">Reject</span>
                        </Button>
                      </div>
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
