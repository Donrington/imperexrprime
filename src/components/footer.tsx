'use client';

import Link from 'next/link';
import { BarChart, Linkedin, Github, Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const footerLinks = {
  company: [
    { href: '/our-company', label: 'Our Company' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ],
  trading: [
    { href: '/trades/forex', label: 'Forex' },
    { href: '/trades/crypto', label: 'Crypto' },
    { href: '/trades/stock', label: 'Stock' },
    { href: '/trades/futures', label: 'Futures' },
  ],
  legal: [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
  ],
};

// X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  { href: '#', icon: XIcon, label: 'X (Twitter)' },
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
  { href: '#', icon: Github, label: 'GitHub' },
  { href: '#', icon: Mail, label: 'Email' },
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate footer sections
      gsap.from('.footer-section', {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Floating animation for sparkles
      gsap.to('.footer-sparkle', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.3,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-background to-card/30">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[150px]"></div>
        <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-teal-500/5 blur-[150px]"></div>
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand Section */}
          <div className="footer-section lg:col-span-4">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/25 transition-all duration-300 group-hover:scale-110 group-hover:shadow-emerald-500/40">
                <BarChart className="h-6 w-6 text-white" />
                <Sparkles className="footer-sparkle absolute -right-1 -top-1 h-4 w-4 text-emerald-300" />
              </div>
              <span className="bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-2xl font-extrabold text-transparent">
                Imperex Prime
              </span>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-neutral-400">
              A professional multi-asset investment platform that leverages cutting-edge technology to empower your financial decisions and maximize returns.
            </p>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="mb-3 text-sm font-bold text-white">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
                <Button className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 font-bold shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-teal-600">
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4 text-neutral-400 transition-colors group-hover:text-emerald-400" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          <div className="footer-section grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {/* Company */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-400">
                <div className="h-1 w-1 rounded-full bg-emerald-400"></div>
                Company
              </h3>
              <nav className="flex flex-col gap-3">
                {footerLinks.company.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-neutral-400 transition-all duration-300 hover:text-white hover:translate-x-1"
                  >
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Trading */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-teal-400">
                <div className="h-1 w-1 rounded-full bg-teal-400"></div>
                Trading
              </h3>
              <nav className="flex flex-col gap-3">
                {footerLinks.trading.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-neutral-400 transition-all duration-300 hover:text-white hover:translate-x-1"
                  >
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Legal */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-400">
                <div className="h-1 w-1 rounded-full bg-cyan-400"></div>
                Legal
              </h3>
              <nav className="flex flex-col gap-3">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-neutral-400 transition-all duration-300 hover:text-white hover:translate-x-1"
                  >
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-section mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-neutral-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Imperex Prime. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="transition-colors hover:text-white">
              Terms
            </Link>
            <Link href="/cookies" className="transition-colors hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative gradient line */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
    </footer>
  );
}
