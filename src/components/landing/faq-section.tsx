'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '@/components/ui/accordion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HelpCircle, MessageCircle, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
    {
      question: 'What is Imperex Prime?',
      answer:
        'Imperex Prime is a multi-asset investment platform that provides access to cryptocurrencies, stocks, forex, and futures markets. We offer both managed investment plans and a professional-grade trading terminal.',
    },
    {
      question: 'Who can use Imperex Prime?',
      answer:
        'Our platform is designed for investors of all levels, from beginners looking for managed solutions to experienced traders who need advanced tools and analytics.',
    },
    {
      question: 'How do I open an account?',
      answer:
        'Opening an account is simple. Click the "Sign Up" button, fill out the registration form, complete the identity verification (KYC) process, and you can start investing in minutes.',
    },
    {
      question: 'What are the fees?',
      answer:
        'We believe in transparent pricing. Fees vary depending on the service you use. For managed plans, a trade commission and maintenance fee apply. For active trading, we offer competitive spreads and low commissions. Please refer to our pricing page for detailed information.',
    },
    {
      question: 'Is my money safe?',
      answer:
        'Security is our top priority. We use industry-leading security measures, including cold storage for digital assets, multi-factor authentication, and encryption to protect your funds and personal information.',
    },
  ];

export function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 1,
        ease: 'power3.out',
      });

      // Animate accordion items
      gsap.from('.faq-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        x: -30,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Animate support card
      gsap.from('.support-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
      });

      // Floating animation for icon
      gsap.to('.support-icon-float', {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-background to-card/30 py-20 sm:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[150px]"></div>
        <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-teal-500/5 blur-[150px]"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400 backdrop-blur-sm">
              <HelpCircle className="h-4 w-4" />
              <span>Support Center</span>
            </div>
          </div>

          <h2
            ref={titleRef}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-500 bg-clip-text font-cursive text-transparent">
              Frequently Asked
            </span>{' '}
            Questions
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-300 md:text-xl">
            Find answers to common questions about our platform and services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm md:p-8">
            {/* Glow effect */}
            <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 opacity-0 blur-2xl transition-opacity duration-500 hover:opacity-10"></div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="faq-item group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                >
                  <AccordionTrigger className="px-6 py-4 text-left text-lg font-bold text-white hover:no-underline [&[data-state=open]>svg]:rotate-180">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20">
                        <Sparkles className="h-4 w-4 text-emerald-400" />
                      </div>
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-base leading-relaxed text-neutral-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Support CTA Card */}
        <div className="support-card mx-auto mt-12 max-w-2xl">
          <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/30">
            {/* Hover glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20"></div>

            <div className="relative flex flex-col items-center gap-6 md:flex-row">
              {/* Icon */}
              <div className="support-icon-float flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 transition-transform duration-300 group-hover:scale-110">
                <MessageCircle className="h-8 w-8 text-emerald-400" />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="mb-2 text-xl font-bold text-white">Still have questions?</h3>
                <p className="text-neutral-300">
                  Our support team is here to help you 24/7. Get in touch and we'll respond as soon as possible.
                </p>
              </div>

              {/* CTA Button */}
              <button className="shrink-0 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 font-bold text-white transition-all duration-300 hover:from-emerald-600 hover:to-teal-600 hover:shadow-lg hover:shadow-emerald-500/25">
                Contact Support
              </button>
            </div>

            {/* Decorative corner */}
            <div className="absolute bottom-0 right-0 h-24 w-24 rounded-tl-full bg-gradient-to-tl from-teal-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
