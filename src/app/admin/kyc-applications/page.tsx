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
        {/* KYC Badge */}
        <div className="kyc-badge inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 px-4 py-2 backdrop-blur-sm">
          <Crown className="h-4 w-4 text-emerald-400" />
          <span className="text-sm font-medium text-emerald-400">KYC Verification</span>
        </div>

        {/* Header */}
        <div className="kyc-header space-y-3">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            KYC{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                Applications
              </span>
              <Sparkles className="kyc-sparkle absolute -right-8 -top-2 h-5 w-5 text-emerald-400" />
            </span>
          </h1>
          <p className="text-lg text-neutral-400">Review and verify user identity submissions</p>
        </div>
      </div>

      {/* Applications Card */}
      <div className="kyc-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
        {/* Gradient Glow on Hover */}
        <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20" />

        {/* Corner Gradient */}
        <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-50 blur-3xl" />

        <CardHeader className="relative">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-2.5 backdrop-blur-sm">
              <ShieldCheck className="h-6 w-6 text-cyan-400" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-white">Pending Applications</CardTitle>
              <CardDescription className="text-neutral-400">
                Review and approve or reject user KYC submissions
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative">
           <Table>
            <TableHeader>
              <TableRow className="border-white/10 hover:bg-white/5">
                <TableHead className="text-neutral-400">User</TableHead>
                <TableHead className="hidden sm:table-cell text-neutral-400">Submission Date</TableHead>
                <TableHead className="text-neutral-400">Status</TableHead>
                <TableHead className="text-right text-neutral-400">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((app) => (
                <TableRow key={app.id} className="border-white/10 transition-colors hover:bg-white/5">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 blur-md transition-opacity group-hover:opacity-75"></div>
                        <Avatar className="relative border-2 border-white/20">
                          <AvatarImage src={`https://picsum.photos/seed/${app.avatar}/40/40`} data-ai-hint="person face" />
                          <AvatarFallback className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400">{app.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <p className="font-medium text-white">{app.name}</p>
                        <p className="text-sm text-neutral-400">{app.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell text-neutral-400">{app.date}</TableCell>
                  <TableCell>
                    <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">{app.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-xl text-emerald-400 transition-all hover:bg-emerald-500/10 hover:text-emerald-300"
                    >
                      <CheckCircle className="h-5 w-5" />
                      <span className="sr-only">Approve</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-xl text-red-400 transition-all hover:bg-red-500/10 hover:text-red-300"
                    >
                      <XCircle className="h-5 w-5" />
                      <span className="sr-only">Reject</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </div>
    </div>
  );
}
