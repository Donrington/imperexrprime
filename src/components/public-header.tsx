'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BarChart, Menu, ChevronDown, TrendingUp, Bitcoin, Wallet, BarChart3, Building2, Rocket, Mail, ArrowRight } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/our-company', label: 'Our Company', icon: Building2 },
  {
    href: '/trades',
    label: 'Trades',
    icon: TrendingUp,
    megaMenu: {
      categories: [
        {
          title: 'Trading Markets',
          items: [
            { href: '/trades/forex', label: 'Forex Trading', description: 'Trade major currency pairs', icon: Wallet },
            { href: '/trades/crypto', label: 'Cryptocurrency', description: 'Bitcoin, Ethereum & more', icon: Bitcoin },
            { href: '/trades/stock', label: 'Stock Market', description: 'Global equities trading', icon: BarChart3 },
            { href: '/trades/futures', label: 'Futures Trading', description: 'Commodities & indices', icon: TrendingUp },
          ]
        },
        {
          title: 'Trading Tools',
          items: [
            { href: '/trades/terminal', label: 'Trading Terminal', description: 'Advanced charting tools', icon: BarChart },
            { href: '/trades/signals', label: 'Trading Signals', description: 'AI-powered insights', icon: Rocket },
          ]
        }
      ]
    }
  },
  { href: '/services', label: 'Services', icon: Rocket },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export default function PublicHeader() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/5" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/25 transition-all duration-300 group-hover:scale-110 group-hover:shadow-emerald-500/40">
            <BarChart className="h-5 w-5 text-white" />
          </div>
          <span className="bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-xl font-extrabold text-transparent">
            Imperex Prime
          </span>
        </Link>

        {/* Desktop Nav with Mega Menu */}
        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            link.megaMenu ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setActiveMegaMenu(link.label)}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-neutral-300 transition-all duration-300 hover:bg-white/5 hover:text-white">
                  {link.label}
                  <ChevronDown className={cn(
                    "h-4 w-4 transition-transform duration-300",
                    activeMegaMenu === link.label && "rotate-180"
                  )} />
                </button>

                {/* Mega Menu Dropdown */}
                {activeMegaMenu === link.label && (
                  <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 pt-2">
                    <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-background/95 backdrop-blur-xl shadow-2xl shadow-black/20">
                      {/* Glow effect */}
                      <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-20 blur-xl"></div>

                      <div className="p-6">
                        <div className="grid grid-cols-2 gap-6" style={{ minWidth: '600px' }}>
                          {link.megaMenu.categories.map((category) => (
                            <div key={category.title}>
                              <h3 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                                <div className="h-1 w-1 rounded-full bg-emerald-400"></div>
                                {category.title}
                              </h3>
                              <div className="space-y-2">
                                {category.items.map((item) => {
                                  const Icon = item.icon;
                                  return (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      className="group/item relative flex items-start gap-3 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:border-white/10 hover:bg-white/5"
                                      onClick={() => setActiveMegaMenu(null)}
                                    >
                                      {/* Icon */}
                                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 transition-all duration-300 group-hover/item:scale-110 group-hover/item:from-emerald-500/30 group-hover/item:to-teal-500/30">
                                        <Icon className="h-5 w-5 text-emerald-400" />
                                      </div>

                                      {/* Content */}
                                      <div className="flex-1">
                                        <div className="mb-1 flex items-center gap-2">
                                          <span className="font-bold text-white">{item.label}</span>
                                          <ArrowRight className="h-3 w-3 text-emerald-400 opacity-0 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:opacity-100" />
                                        </div>
                                        <p className="text-xs text-neutral-400">{item.description}</p>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300",
                  pathname === link.href
                    ? "bg-white/10 text-white"
                    : "text-neutral-300 hover:bg-white/5 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" asChild className="rounded-xl font-semibold">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 font-bold shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-teal-600 hover:shadow-emerald-500/40">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-xl">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-white/10 bg-background/95 backdrop-blur-xl sm:w-[400px]">
              <nav className="flex flex-col gap-6 pt-8">
                {navLinks.map((link) => (
                  link.megaMenu ? (
                    <div key={link.label} className="space-y-4">
                      <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                          <TrendingUp className="h-4 w-4 text-emerald-400" />
                        </div>
                        {link.label}
                      </h3>
                      <div className="space-y-3 pl-4">
                        {link.megaMenu.categories.map((category) => (
                          <div key={category.title} className="space-y-2">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">{category.title}</h4>
                            {category.items.map(item => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="flex items-center gap-3 rounded-xl p-2 text-sm text-neutral-300 transition-colors hover:bg-white/5 hover:text-white"
                                  onClick={() => setMenuOpen(false)}
                                >
                                  <Icon className="h-4 w-4 text-emerald-400" />
                                  <span>{item.label}</span>
                                </Link>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-3 text-lg font-semibold text-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                        {link.icon && <link.icon className="h-4 w-4 text-emerald-400" />}
                      </div>
                      {link.label}
                    </Link>
                  )
                ))}
              </nav>
              <div className="mt-8 flex flex-col gap-3">
                <Button variant="ghost" asChild className="rounded-xl">
                  <Link href="/login" onClick={() => setMenuOpen(false)}>Login</Link>
                </Button>
                <Button asChild className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 font-bold shadow-lg shadow-emerald-500/25">
                  <Link href="/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
