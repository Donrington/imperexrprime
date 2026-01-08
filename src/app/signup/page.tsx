'use client';

import { useState, useEffect, useRef } from 'react';
import PublicHeader from '@/components/public-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import { Eye, EyeOff, UserPlus, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.signup-badge', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });

      gsap.from('.signup-title', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });

      gsap.from('.signup-form', {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out',
      });

      gsap.to('.signup-sparkle', {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }, formRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <PublicHeader />
      <div className="flex min-h-screen flex-col">
        <main className="relative flex flex-grow items-center justify-center overflow-hidden bg-gradient-to-b from-background to-card/30 px-4 py-24">
          {/* Background effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[150px]"></div>
            <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-teal-500/5 blur-[150px]"></div>
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

          <div ref={formRef} className="w-full max-w-md">
            {/* Badge */}
            <div className="signup-badge mb-8 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400 backdrop-blur-sm">
                <UserPlus className="h-4 w-4" />
                <span>Join Imperex Prime</span>
              </div>
            </div>

            {/* Form Card */}
            <div className="signup-form group relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-sm md:p-10">
              {/* Glow effect */}
              <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-10 blur-2xl"></div>

              {/* Title */}
              <div className="signup-title mb-8 text-center">
                <div className="relative inline-flex">
                  <h1 className="text-3xl font-extrabold text-white md:text-4xl">
                    Create an{' '}
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                      Account
                    </span>
                  </h1>
                  <Sparkles className="signup-sparkle absolute -right-6 -top-2 h-5 w-5 text-emerald-300" />
                </div>
                <p className="mt-3 text-sm text-neutral-400">
                  Join Imperex Prime and start your investment journey today.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-sm font-semibold text-white">
                      First Name
                    </Label>
                    <Input
                      id="first-name"
                      placeholder="John"
                      required
                      className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name" className="text-sm font-semibold text-white">
                      Last Name
                    </Label>
                    <Input
                      id="last-name"
                      placeholder="Doe"
                      required
                      className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    required
                    className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-semibold text-white">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      className="rounded-xl border-white/10 bg-white/5 pr-10 text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-400 transition-colors hover:text-emerald-400"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-sm font-semibold text-white">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirm-password"
                      type={showConfirmPassword ? 'text' : 'password'}
                      required
                      className="rounded-xl border-white/10 bg-white/5 pr-10 text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-400 transition-colors hover:text-emerald-400"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox id="terms" required className="border-white/20 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500" />
                  <Label htmlFor="terms" className="text-sm font-normal text-neutral-300">
                    I agree to the{' '}
                    <Link href="/terms-of-service" className="text-emerald-400 underline hover:text-emerald-300">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy-policy" className="text-emerald-400 underline hover:text-emerald-300">
                      Privacy Policy
                    </Link>
                    .
                  </Label>
                </div>

                <Button
                  className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-6 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-teal-600 hover:shadow-xl hover:shadow-emerald-500/25"
                  asChild
                >
                  <Link href="/dashboard">Create Account</Link>
                </Button>

                <p className="text-center text-sm text-neutral-400">
                  Already have an account?{' '}
                  <Link href="/login" className="font-semibold text-emerald-400 hover:text-emerald-300 hover:underline">
                    Login
                  </Link>
                </p>
              </form>

              {/* Decorative corners */}
              <div className="absolute left-0 top-0 h-24 w-24 rounded-br-full bg-gradient-to-br from-emerald-500/20 to-transparent"></div>
              <div className="absolute bottom-0 right-0 h-24 w-24 rounded-tl-full bg-gradient-to-tl from-teal-500/20 to-transparent"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
