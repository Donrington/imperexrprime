'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import PublicHeader from '@/components/public-header';
import { HeroSection } from '@/components/landing/hero-section';
import { FeaturesSection } from '@/components/landing/features-section';
import { AssetClassesSection } from '@/components/landing/asset-classes-section';
import { ManagedPlansSection } from '@/components/landing/managed-plans-section';
import { OptionsTradingSection } from '@/components/landing/options-trading-section';
import { CryptoMarketSection } from '@/components/landing/crypto-market-section';
import { StockMarketSection } from '@/components/landing/stock-market-section';
import { AssetManagementSection } from '@/components/landing/asset-management-section';
import { PartnersSection } from '@/components/landing/partners-section';
import { FaqSection } from '@/components/landing/faq-section';
import { Footer } from '@/components/footer';
import { MarketDataSection } from '@/components/landing/market-data-section';
import { ArrowUp } from 'lucide-react';

export default function LandingPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down 400px
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (showScrollTop) {
      // Animate button in
      gsap.fromTo(
        '.scroll-to-top-button',
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: 'back.out(1.7)' }
      );
    }
  }, [showScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <PublicHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <AssetClassesSection />
        <ManagedPlansSection />
        <OptionsTradingSection />
        <CryptoMarketSection />
        <MarketDataSection />
        <StockMarketSection />
        <AssetManagementSection />
        <PartnersSection />
        <FaqSection />
      </main>
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-button group fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-emerald-500/40 hover:shadow-emerald-500/50"
          aria-label="Scroll to top"
        >
          {/* Gradient glow on hover */}
          <div className="absolute -inset-1 -z-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-30" />

          <ArrowUp className="h-5 w-5 text-emerald-400 transition-transform group-hover:-translate-y-1" />
        </button>
      )}
    </>
  );
}
