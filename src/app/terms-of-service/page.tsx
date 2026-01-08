'use client';

import PublicHeader from '@/components/public-header';
import { Footer } from '@/components/footer';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, UserCheck, XCircle, AlertTriangle, ShieldAlert, Scale, Edit, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    icon: FileText,
    number: '1',
    title: 'Introduction',
    content: 'Welcome to Imperex Prime. These Terms of Service ("Terms") govern your use of our website, platform, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: UserCheck,
    number: '2',
    title: 'Use of Services',
    content: 'You must be at least 18 years old to use our Services. You agree to provide accurate and complete information when creating an account and to keep this information up to date. You are responsible for maintaining the confidentiality of your account and password.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: XCircle,
    number: '3',
    title: 'Prohibited Activities',
    content: 'You agree not to engage in any of the following prohibited activities: (a) copying, distributing, or disclosing any part of the Services in any medium; (b) using any automated system, including "robots," "spiders," "offline readers," etc., to access the Services; (c) transmitting spam, chain letters, or other unsolicited email; (d) attempting to interfere with, compromise the system integrity or security or decipher any transmissions to or from the servers running the Services.',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    icon: AlertTriangle,
    number: '4',
    title: 'Disclaimers',
    content: 'The Services are provided on an "as is" and "as available" basis. Use of the Services is at your own risk. To the maximum extent permitted by applicable law, the Services are provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.',
    gradient: 'from-yellow-500 to-amber-500',
  },
  {
    icon: ShieldAlert,
    number: '5',
    title: 'Limitation of Liability',
    content: 'To the maximum extent permitted by applicable law, in no event shall Imperex Prime, its affiliates, agents, directors, employees, suppliers, or licensors be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data, or other intangible losses, arising out of or relating to the use of, or inability to use, this Service.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Scale,
    number: '6',
    title: 'Governing Law',
    content: 'These Terms shall be governed by the laws of the State of New York, without respect to its conflict of laws principles.',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Edit,
    number: '7',
    title: 'Changes to Terms',
    content: 'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.',
    gradient: 'from-teal-500 to-cyan-500',
  },
];

export default function TermsOfServicePage() {
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

      // Terms section cards
      gsap.fromTo('.terms-card',
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
      gsap.to('.terms-sparkle', {
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
                <FileText className="h-4 w-4" />
                <span>Legal Agreement</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="hero-content text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                Terms of Service
              </span>
            </h1>

            {/* Last Updated */}
            <p className="hero-content mx-auto mt-6 text-lg text-neutral-400 md:text-xl">
              Last Updated: {new Date().toLocaleDateString()}
            </p>

            {/* Description */}
            <p className="hero-content mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-neutral-300">
              Please read these Terms of Service carefully before using Imperex Prime. By accessing or using our services, you agree to be bound by these terms.
            </p>
          </div>
        </section>

        {/* Terms Content Section */}
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
                    className="terms-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/10 md:p-10"
                  >
                    {/* Hover glow */}
                    <div className={`absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r ${section.gradient} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20`}></div>

                    <div className="flex flex-col gap-6 md:flex-row md:items-start">
                      {/* Icon and Number */}
                      <div className="flex shrink-0 items-center gap-4">
                        <div className="relative">
                          <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${section.gradient} bg-opacity-10 shadow-lg transition-all duration-300 group-hover:scale-110`}>
                            <Icon className="h-8 w-8 text-white" />
                            <Sparkles className="terms-sparkle absolute -right-1 -top-1 h-5 w-5 text-emerald-300" />
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

                <FileText className="mx-auto mb-4 h-12 w-12 text-emerald-400" />
                <h3 className="mb-3 text-2xl font-extrabold text-white">Questions About Our Terms?</h3>
                <p className="mb-6 text-neutral-300">
                  If you have any questions or concerns about our Terms of Service, please don&apos;t hesitate to reach out to our legal team.
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
