
'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  CardContent,
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
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, DollarSign, Sparkles, Crown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

type User = {
    id: string;
    name: string;
    email: string;
    joined: string;
    status: 'Active' | 'Suspended';
    kyc: 'Verified' | 'Pending' | 'Not Submitted';
    avatar: string;
};

const users: User[] = [
    { id: 'usr_1', name: 'Alice Johnson', email: 'alice.j@example.com', joined: '2023-10-01', status: 'Active', kyc: 'Verified', avatar: '1' },
    { id: 'usr_2', name: 'Bob Williams', email: 'bob.w@example.com', joined: '2023-09-15', status: 'Active', kyc: 'Pending', avatar: '2' },
    { id: 'usr_3', name: 'Charlie Brown', email: 'charlie.b@example.com', joined: '2023-08-22', status: 'Suspended', kyc: 'Verified', avatar: '3' },
    { id: 'usr_4', name: 'Diana Miller', email: 'diana.m@example.com', joined: '2023-10-20', status: 'Active', kyc: 'Not Submitted', avatar: '4' },
];

export default function AdminUsersPage() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Badge animation
            gsap.from('.users-badge', {
                opacity: 0,
                scale: 0.8,
                duration: 0.8,
                ease: 'back.out(1.7)',
            });

            // Header animation
            gsap.from('.users-header', {
                opacity: 0,
                y: 30,
                duration: 1,
                delay: 0.2,
                ease: 'power3.out',
            });

            // Search bar animation
            gsap.from('.users-search', {
                opacity: 0,
                x: 20,
                duration: 0.8,
                delay: 0.3,
                ease: 'power3.out',
            });

            // Table animation
            gsap.from('.users-table', {
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.4,
                ease: 'power3.out',
            });

            // Floating sparkles animation
            gsap.to('.users-sparkle', {
                y: -8,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleAddProfitClick = (user: User) => {
        setSelectedUser(user);
        setIsDialogOpen(true);
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
        setSelectedUser(null);
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'Active': return <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0">Active</Badge>;
            case 'Suspended': return <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0">Suspended</Badge>;
            default: return <Badge variant="secondary">{status}</Badge>;
        }
    };

     const getKycBadge = (kyc: string) => {
        switch (kyc) {
            case 'Verified': return <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0">Verified</Badge>;
            case 'Pending': return <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">Pending</Badge>;
            case 'Not Submitted': return <Badge variant="outline" className="border-white/20 text-neutral-400">Not Submitted</Badge>;
            default: return <Badge variant="secondary">{kyc}</Badge>;
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
      <div className="space-y-6">
        {/* Users Badge */}
        <div className="users-badge inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 px-4 py-2 backdrop-blur-sm">
          <Crown className="h-4 w-4 text-emerald-400" />
          <span className="text-sm font-medium text-emerald-400">User Management</span>
        </div>

        {/* Header with Search */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="users-header space-y-3">
            <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                  Users
                </span>
                <Sparkles className="users-sparkle absolute -right-8 -top-2 h-5 w-5 text-emerald-400" />
              </span>
            </h1>
            <p className="text-lg text-neutral-400">View, search, and manage all user accounts</p>
          </div>
          <div className="users-search relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
            <Input
              placeholder="Search users..."
              className="w-full rounded-xl border-white/10 bg-white/5 pl-10 text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 sm:w-[280px]"
            />
          </div>
        </div>
      </div>

      {/* Users Table Card */}
      <div className="users-table group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
        {/* Gradient Glow on Hover */}
        <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20" />

        {/* Corner Gradient */}
        <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-50 blur-3xl" />

        <CardContent className="relative p-0">
          <Table>
            <TableHeader>
                <TableRow className="border-white/10 hover:bg-white/5">
                    <TableHead className="text-neutral-400">User</TableHead>
                    <TableHead className="hidden sm:table-cell text-neutral-400">Status</TableHead>
                    <TableHead className="hidden md:table-cell text-neutral-400">KYC Status</TableHead>
                    <TableHead className="text-right text-neutral-400">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.map(user => (
                    <TableRow key={user.id} className="border-white/10 transition-colors hover:bg-white/5">
                        <TableCell>
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 blur-md transition-opacity group-hover:opacity-75"></div>
                                    <Avatar className="relative border-2 border-white/20">
                                        <AvatarImage src={`https://picsum.photos/seed/${user.avatar}/40/40`} data-ai-hint="person face" />
                                        <AvatarFallback className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-400">{user.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                </div>
                                <div>
                                    <p className="font-medium text-white">{user.name}</p>
                                    <p className="text-sm text-neutral-400">{user.email}</p>
                                    <div className="sm:hidden mt-2 flex gap-2">
                                        {getStatusBadge(user.status)}
                                        {getKycBadge(user.kyc)}
                                    </div>
                                </div>
                            </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">{getStatusBadge(user.status)}</TableCell>
                        <TableCell className="hidden md:table-cell">{getKycBadge(user.kyc)}</TableCell>
                        <TableCell className="text-right">
                           <Button
                             variant="outline"
                             size="sm"
                             onClick={() => handleAddProfitClick(user)}
                             className="rounded-xl border-white/10 bg-white/5 text-white transition-all hover:border-emerald-500/50 hover:bg-emerald-500/10"
                           >
                                <DollarSign className="mr-0 sm:mr-2 h-4 w-4" />
                                <span className="hidden sm:inline">Add Profit</span>
                           </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </div>

      {/* Add Profit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900/95 to-neutral-950/95 backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">Add Profit for {selectedUser?.name}</DialogTitle>
            <DialogDescription className="text-neutral-400">
              Manually add profit from copy trading to this user's account. This will create a new "Deposit" transaction.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="profit-amount" className="text-white">Profit Amount (USD)</Label>
              <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                  <Input
                    id="profit-amount"
                    type="number"
                    placeholder="e.g., 250.75"
                    className="rounded-xl border-white/10 bg-white/5 pl-8 text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                  />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="profit-description" className="text-white">Description (Optional)</Label>
              <Input
                id="profit-description"
                placeholder="e.g., Weekly copy trade profit"
                className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
                <Button variant="outline" className="rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10">
                  Cancel
                </Button>
            </DialogClose>
            <Button
              onClick={handleDialogClose}
              className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-teal-600"
            >
              Confirm and Add Profit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
