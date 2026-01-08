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


export default function LandingPage() {
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
    </>
  );
}
