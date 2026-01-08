'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarContent,
  SidebarFooter,
} from '@/components/ui/sidebar';
import {
  CandlestickChart,
  Layers,
  Wallet,
  Settings,
  BarChart,
  LogOut,
  LayoutDashboard,
  AreaChart,
  UserCheck,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/managed-plans', label: 'Managed Plans', icon: Layers },
  {
    href: '/dashboard/trade-terminal',
    label: 'Trade Terminal',
    icon: CandlestickChart,
  },
  { href: '/dashboard/live-charts', label: 'Live Charts', icon: AreaChart },
  { href: '/dashboard/wallet', label: 'Wallet', icon: Wallet },
  { href: '/dashboard/kyc', label: 'KYC Verification', icon: UserCheck },
];

export function AppSidebar() {
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo animation
      gsap.from('.sidebar-logo', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });

      // Menu items stagger animation
      gsap.from('.sidebar-menu-item', {
        opacity: 0,
        x: -20,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.3,
        ease: 'power3.out',
      });

      // Footer items animation
      gsap.from('.sidebar-footer-item', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.8,
        ease: 'power3.out',
      });

      // Floating sparkle animation
      gsap.to('.sidebar-sparkle', {
        y: -3,
        rotation: 15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }, sidebarRef);

    return () => ctx.revert();
  }, []);

  return (
    <Sidebar ref={sidebarRef}>
      <SidebarHeader className="border-b border-white/10 p-4">
        <Link href="/" className="sidebar-logo group relative flex items-center gap-3">
          {/* Logo Icon with Gradient Background */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 opacity-75 blur-md transition-opacity group-hover:opacity-100"></div>
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500">
              <BarChart className="h-6 w-6 text-white" />
            </div>
          </div>

          {/* Brand Name */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <h1 className="text-lg font-bold text-white">Imperex Prime</h1>
              <Sparkles className="sidebar-sparkle h-3 w-3 text-emerald-400" />
            </div>
            <p className="text-xs text-neutral-500">Ultra Modern Trading</p>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.label} className="sidebar-menu-item">
              <Link href={item.href} className="block">
                <SidebarMenuButton
                  isActive={isActive(item.href)}
                  tooltip={{ children: item.label }}
                  className={`
                    group relative overflow-hidden rounded-xl transition-all duration-300
                    ${
                      isActive(item.href)
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25'
                        : 'text-neutral-400 hover:bg-white/5 hover:text-white'
                    }
                  `}
                >
                  {/* Active indicator glow */}
                  {isActive(item.href) && (
                    <div className="absolute -inset-1 -z-10 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-50 blur-lg"></div>
                  )}

                  {/* Icon */}
                  <item.icon className={`transition-transform duration-300 group-hover:scale-110 ${
                    isActive(item.href) ? 'text-white' : ''
                  }`} />

                  {/* Label */}
                  <span className="font-medium">{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="border-t border-white/10 p-2">
        <SidebarMenu>
          {/* Settings */}
          <SidebarMenuItem className="sidebar-footer-item">
            <Link href="/dashboard/settings" className="block">
              <SidebarMenuButton
                isActive={isActive('/dashboard/settings')}
                tooltip={{ children: 'Settings' }}
                className={`
                  group relative overflow-hidden rounded-xl transition-all duration-300
                  ${
                    isActive('/dashboard/settings')
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25'
                      : 'text-neutral-400 hover:bg-white/5 hover:text-white'
                  }
                `}
              >
                {isActive('/dashboard/settings') && (
                  <div className="absolute -inset-1 -z-10 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-50 blur-lg"></div>
                )}
                <Settings className={`transition-transform duration-300 group-hover:rotate-90 ${
                  isActive('/dashboard/settings') ? 'text-white' : ''
                }`} />
                <span className="font-medium">Settings</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>

          {/* Logout */}
          <SidebarMenuItem className="sidebar-footer-item">
            <Link href="/login" className="block">
              <SidebarMenuButton
                tooltip={{ children: 'Logout' }}
                className="group relative overflow-hidden rounded-xl text-red-400 transition-all duration-300 hover:bg-red-500/10 hover:text-red-300"
              >
                <LogOut className="transition-transform duration-300 group-hover:translate-x-1" />
                <span className="font-medium">Logout</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
