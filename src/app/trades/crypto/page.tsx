import PublicHeader from '@/components/public-header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import { CryptoMarketSummary } from '@/components/crypto-market-summary';
import { Card, CardContent } from '@/components/ui/card';

export default function CryptoPage() {
  return (
    <>
      <PublicHeader />
      <main className="flex-1">
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-center text-white">
          <Image
            src="https://picsum.photos/seed/crypto-hero/1920/1080"
            alt="Crypto Background"
            fill
            className="object-cover"
            data-ai-hint="cryptocurrency abstract"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 p-4">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
              Cryptocurrency Trading
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg">
              Trade Bitcoin, Ethereum, and a wide range of altcoins with high liquidity and 24/7 market access.
            </p>
          </div>
        </section>
        <section className="py-20 sm:py-28">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">The World of Digital Assets</h2>
                        <p className="mt-4 text-muted-foreground">
                          Cryptocurrency trading involves speculating on cryptocurrency price movements via a CFD trading account, or buying and selling the underlying coins via an exchange. The crypto market is decentralized, meaning it is not issued or backed by a central authority such as a government. Instead, it runs on a network of computers. Unlike traditional currencies, cryptocurrencies exist only as a shared digital record of ownership, stored on a blockchain.
                        </p>
                         <h3 className="text-2xl font-bold tracking-tight mt-8">How It Works</h3>
                        <p className="mt-4 text-muted-foreground">
                          When you trade cryptocurrencies on our platform, you can either buy the actual coins and store them in your secure Imperex Prime wallet, or you can trade cryptocurrency CFDs (Contracts for Difference). CFDs allow you to speculate on price movements without owning the underlying asset. This provides opportunities to profit from both rising and falling markets. Our platform offers advanced charting tools, real-time data, and a seamless order execution process to help you navigate the volatile crypto market.
                        </p>
                         <Button asChild className="mt-8">
                            <Link href="/signup">Start Trading Crypto</Link>
                        </Button>
                    </div>
                    <div>
                        <Image src="https://picsum.photos/seed/crypto-chart/800/600" alt="Crypto Chart" width={800} height={600} className="rounded-lg shadow-lg" data-ai-hint="financial chart crypto"/>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-card/30 py-20 sm:py-28">
          <div className="container mx-auto px-4">
             <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Cryptocurrency Market Overview
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Stay updated with real-time data from the crypto markets.
              </p>
            </div>
            <Card className="overflow-hidden">
                <CardContent className="p-0">
                    <CryptoMarketSummary />
                </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
