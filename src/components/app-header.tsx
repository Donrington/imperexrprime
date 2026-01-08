'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Search, User, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';

export function AppHeader() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Search bar animation
      gsap.from('.header-search', {
        opacity: 0,
        x: -20,
        duration: 0.6,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Avatar animation
      gsap.from('.header-avatar', {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        delay: 0.4,
        ease: 'back.out(1.7)',
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-white/10 bg-neutral-950/80 px-4 backdrop-blur-xl sm:h-16 sm:px-6"
    >
      {/* Mobile Sidebar Trigger */}
      <SidebarTrigger className="text-neutral-400 hover:text-white md:hidden" />

      {/* Search Bar */}
      <div className="header-search relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
        <Input
          type="search"
          placeholder="Search assets, transactions..."
          className="w-full rounded-xl border-white/10 bg-white/5 pl-10 text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 md:w-[200px] lg:w-[320px]"
        />
      </div>

      {/* User Avatar Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="header-avatar relative cursor-pointer">
            {/* Gradient glow around avatar */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 blur-md transition-opacity hover:opacity-75"></div>
            <Avatar className="relative h-9 w-9 border-2 border-white/20 transition-transform hover:scale-110">
              <AvatarImage
                src="https://picsum.photos/seed/user-avatar/40/40"
                data-ai-hint="user avatar"
                alt="User Avatar"
              />
              <AvatarFallback className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                <User className="h-5 w-5 text-emerald-400" />
              </AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-56 rounded-2xl border border-white/10 bg-neutral-900/95 p-2 backdrop-blur-xl"
        >
          {/* Header */}
          <DropdownMenuLabel className="px-3 py-2">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-semibold text-white">My Account</p>
              <p className="text-xs text-neutral-400">john.doe@example.com</p>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator className="bg-white/10" />

          {/* Profile Link */}
          <DropdownMenuItem asChild className="rounded-xl cursor-pointer focus:bg-white/5 focus:text-white">
            <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 text-neutral-300">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/10 to-teal-500/10">
                <User className="h-4 w-4 text-emerald-400" />
              </div>
              <span className="font-medium">Profile</span>
            </Link>
          </DropdownMenuItem>

          {/* Settings Link */}
          <DropdownMenuItem asChild className="rounded-xl cursor-pointer focus:bg-white/5 focus:text-white">
            <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 text-neutral-300">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500/10 to-cyan-500/10">
                <Settings className="h-4 w-4 text-teal-400" />
              </div>
              <span className="font-medium">Settings</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator className="bg-white/10" />

          {/* Logout Link */}
          <DropdownMenuItem asChild className="rounded-xl cursor-pointer focus:bg-red-500/10 focus:text-red-300">
            <Link href="/login" className="flex items-center gap-3 px-3 py-2 text-red-400">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-red-500/10 to-orange-500/10">
                <LogOut className="h-4 w-4 text-red-400" />
              </div>
              <span className="font-medium">Logout</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
