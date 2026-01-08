'use client';

import PublicHeader from '@/components/public-header';
import { Footer } from '@/components/footer';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Database, Share2, Lock, UserCheck, FileText, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    icon: Database,
    number: '1',
    title: 'Information We Collect',
    content: 'We collect information you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide. We also collect information automatically when you use our Services, such as your IP address, device type, and browsing activity.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Share2,
    number: '2',
    title: 'How We Use Your Information',
    content: 'We use the information we collect to: provide, maintain, and improve our Services; process transactions and send you related information; communicate with you about products, services, offers, and events; monitor and analyze trends, usage, and activities in connection with our Services; and personalize the Services.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: UserCheck,
    number: '3',
    title: 'Information Sharing',
    content: 'We do not share your personal information with third parties except as described in this Privacy Policy. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf. We may also share information in response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law or legal process.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Lock,
    number: '4',
    title: 'Data Security',
    content: 'We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration, and destruction.',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    icon: FileText,
    number: '5',
    title: 'Your Choices',
    content: 'You may update, correct, or delete your account information at any time by logging into your account. If you wish to delete your account, please contact us, but note that we may retain certain information as required by law or for legitimate business purposes.',
    gradient: 'from-green-500 to-lime-500',
  },
  {
    icon: Shield,
    number: '6',
    title: 'Changes to This Policy',
    content: 'We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice (such as adding a statement to our homepage or sending you a notification).',
    gradient: 'from-teal-500 to-cyan-500',
  },
];

export default function PrivacyPolicyPage() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.hero-badge', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });

      gsap.from('.hero-content', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Policy section cards
      gsap.fromTo('.policy-card',
        {
          opacity: 0,
          y: 50,
        },
        {
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 70%',
          },
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
        }
      );

      // Floating sparkles
      gsap.to('.policy-sparkle', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.3,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <PublicHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section ref={heroRef} className="relative overflow-hidden bg-gradient-to-b from-background to-card/30 pt-32 pb-20 md:pt-40 md:pb-28">
          {/* Background effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[150px]"></div>
            <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-teal-500/5 blur-[150px]"></div>
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

          <div className="container mx-auto px-4 text-center">
            {/* Badge */}
            <div className="hero-badge mb-8 inline-flex">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400 backdrop-blur-sm">
                <Shield className="h-4 w-4" />
                <span>Your Privacy Matters</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="hero-content text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                Privacy
              </span>{' '}
              Policy
            </h1>

            {/* Last Updated */}
            <p className="hero-content mx-auto mt-6 text-lg text-neutral-400 md:text-xl">
              Last Updated: {new Date().toLocaleDateString()}
            </p>

            {/* Description */}
            <p className="hero-content mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-neutral-300">
              At Imperex Prime, we are committed to protecting your privacy and ensuring the security of your personal information. This policy outlines how we collect, use, and safeguard your data.
            </p>
          </div>
        </section>

        {/* Policy Content Section */}
        <section ref={contentRef} className="relative overflow-hidden bg-gradient-to-b from-card/30 to-background py-20 sm:py-28">
          {/* Background effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/3 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[150px]"></div>
          </div>

          {/* Dot pattern */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-8">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <div
                    key={section.number}
                    className="policy-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/10 md:p-10"
                  >
                    {/* Hover glow */}
                    <div className={`absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r ${section.gradient} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20`}></div>

                    <div className="flex flex-col gap-6 md:flex-row md:items-start">
                      {/* Icon and Number */}
                      <div className="flex shrink-0 items-center gap-4">
                        <div className="relative">
                          <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${section.gradient} bg-opacity-10 shadow-lg transition-all duration-300 group-hover:scale-110`}>
                            <Icon className="h-8 w-8 text-white" />
                            <Sparkles className="policy-sparkle absolute -right-1 -top-1 h-5 w-5 text-emerald-300" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="mb-3 flex items-center gap-3">
                          <span className={`bg-gradient-to-r ${section.gradient} bg-clip-text text-2xl font-extrabold text-transparent`}>
                            {section.number}.
                          </span>
                          <h2 className="text-2xl font-extrabold text-white md:text-3xl">
                            {section.title}
                          </h2>
                        </div>
                        <p className="leading-relaxed text-neutral-300">
                          {section.content}
                        </p>
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div className={`absolute bottom-0 right-0 h-24 w-24 rounded-tl-full bg-gradient-to-tl ${section.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}></div>
                  </div>
                );
              })}
            </div>

            {/* Contact CTA */}
            <div className="mx-auto mt-16 max-w-3xl">
              <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-white/30 md:p-10">
                {/* Glow effect */}
                <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-10 blur-2xl"></div>

                <Shield className="mx-auto mb-4 h-12 w-12 text-emerald-400" />
                <h3 className="mb-3 text-2xl font-extrabold text-white">Questions About Your Privacy?</h3>
                <p className="mb-6 text-neutral-300">
                  If you have any questions or concerns about our Privacy Policy or how we handle your data, please don&apos;t hesitate to contact us.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-teal-600 hover:shadow-xl hover:shadow-emerald-500/25"
                >
                  Contact Us
                </a>

                {/* Decorative corners */}
                <div className="absolute left-0 top-0 h-24 w-24 rounded-br-full bg-gradient-to-br from-emerald-500/20 to-transparent"></div>
                <div className="absolute bottom-0 right-0 h-24 w-24 rounded-tl-full bg-gradient-to-tl from-teal-500/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
