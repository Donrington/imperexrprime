'use client';

import PublicHeader from '@/components/public-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Building, Mail, Phone, Send, Sparkles, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Footer } from '@/components/footer';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
    details: [
      { label: 'General Inquiries', value: 'contact@imperexprime.com', link: 'mailto:contact@imperexprime.com' },
      { label: 'Support', value: 'support@imperexprime.com', link: 'mailto:support@imperexprime.com' },
    ],
  },
  {
    icon: Phone,
    title: 'Phone',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    details: [
      { label: 'Sales Department', value: '+1 (800) 555-0100' },
      { label: 'Customer Support', value: '+1 (800) 555-0199' },
    ],
  },
  {
    icon: Building,
    title: 'Office',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    details: [
      { label: 'Address', value: '123 Financial District, Suite 450' },
      { label: 'Location', value: 'New York, NY 10005, USA' },
    ],
  },
];

const quickInfo = [
  { icon: Clock, label: '24/7 Support', color: 'text-emerald-400' },
  { icon: MessageCircle, label: 'Live Chat Available', color: 'text-teal-400' },
  { icon: MapPin, label: 'Global Coverage', color: 'text-cyan-400' },
];

export default function ContactPage() {
  const heroRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

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

      // Quick info badges
      gsap.from('.quick-info-badge', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 60%',
        },
        opacity: 0,
        x: -30,
        stagger: 0.1,
        duration: 0.8,
        delay: 0.5,
        ease: 'power3.out',
      });

      // Contact method cards
      gsap.fromTo('.contact-card',
        {
          opacity: 0,
          y: 50,
        },
        {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 70%',
          },
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
        }
      );

      // Form animation
      gsap.from('.contact-form', {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        x: 50,
        duration: 1,
        ease: 'power3.out',
      });

      // Floating sparkles
      gsap.to('.contact-sparkle', {
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
                <MessageCircle className="h-4 w-4" />
                <span>Get In Touch</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="hero-content text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                Contact
              </span>{' '}
              Us
            </h1>

            {/* Description */}
            <p className="hero-content mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300 md:text-xl">
              Have questions about our platform, services, or partnerships? We&apos;d love to hear from you. Our team is here to help 24/7.
            </p>

            {/* Quick Info Badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              {quickInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.label}
                    className="quick-info-badge group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 hover:bg-white/10"
                  >
                    <Icon className={`h-5 w-5 ${info.color} transition-transform group-hover:scale-110`} />
                    <span className="text-sm font-semibold text-white">{info.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-card/30 to-background py-20 sm:py-28">
          {/* Background effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/3 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[150px]"></div>
          </div>

          {/* Dot pattern */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Contact Methods */}
              <div ref={cardsRef} className="space-y-6">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={method.title}
                      className="contact-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/10"
                    >
                      {/* Hover glow */}
                      <div className={`absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r ${method.gradient} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20`}></div>

                      <div className="flex items-start gap-6">
                        {/* Icon */}
                        <div className="relative">
                          <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${method.bgGradient} shadow-lg transition-all duration-300 group-hover:scale-110`}>
                            <Icon className="h-8 w-8 text-white" />
                            <Sparkles className="contact-sparkle absolute -right-1 -top-1 h-5 w-5 text-emerald-300" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="mb-4 text-2xl font-extrabold text-white">{method.title}</h3>
                          <div className="space-y-3">
                            {method.details.map((detail) => (
                              <div key={detail.label}>
                                <p className="text-sm font-semibold text-neutral-400">{detail.label}</p>
                                {detail.link ? (
                                  <a
                                    href={detail.link}
                                    className={`bg-gradient-to-r ${method.gradient} bg-clip-text text-lg font-bold text-transparent transition-all hover:opacity-80`}
                                  >
                                    {detail.value}
                                  </a>
                                ) : (
                                  <p className="text-lg font-bold text-white">{detail.value}</p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Decorative corner */}
                      <div className={`absolute bottom-0 right-0 h-24 w-24 rounded-tl-full bg-gradient-to-tl ${method.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}></div>
                    </div>
                  );
                })}
              </div>

              {/* Contact Form */}
              <div ref={formRef}>
                <div className="contact-form group relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-sm md:p-10">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-10 blur-2xl"></div>

                  <h2 className="mb-8 text-3xl font-extrabold text-white">Send us a message</h2>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name" className="text-sm font-semibold text-white">
                          First Name
                        </Label>
                        <Input
                          id="first-name"
                          placeholder="John"
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
                          className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-white">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-semibold text-white">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Your message..."
                        rows={6}
                        className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-6 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-teal-600 hover:shadow-xl hover:shadow-emerald-500/25"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>

                  {/* Decorative corners */}
                  <div className="absolute left-0 top-0 h-24 w-24 rounded-br-full bg-gradient-to-br from-emerald-500/20 to-transparent"></div>
                  <div className="absolute bottom-0 right-0 h-24 w-24 rounded-tl-full bg-gradient-to-tl from-teal-500/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
