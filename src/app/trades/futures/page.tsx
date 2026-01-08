import PublicHeader from '@/components/public-header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import { FuturesMarketOverview } from '@/components/futures-market-overview';

export default function FuturesPage() {
  return (
    <>
      <PublicHeader />
      <main className="flex-1">
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-center text-white">
          <Image
            src="https://picsum.photos/seed/futures-hero/1920/1080"
            alt="Futures Background"
            fill
            className="object-cover"
            data-ai-hint="commodities abstract"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 p-4">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
              Futures Trading
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg">
             Speculate on the future price of commodities, indices, and currencies with standardized contracts.
            </p>
          </div>
        </section>
        <section className="py-20 sm:py-28">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">Contract-Based Speculation</h2>
                        <p className="mt-4 text-muted-foreground">
                          Futures trading involves contracts to buy or sell an asset at a predetermined price on a specific future date. These contracts are standardized and traded on exchanges. Futures are used for both hedging against price movements and for speculation. Traders can speculate on the direction of a wide range of assets, including commodities like oil and gold, stock indices, and currencies, often with significant leverage.
                        </p>
                        <h3 className="text-2xl font-bold tracking-tight mt-8">How It Works</h3>
                        <p className="mt-4 text-muted-foreground">
                          When you trade a futures contract, you are agreeing to a future transaction at a price set today. If you buy (go long on) a futures contract and the price of the underlying asset rises, you can sell the contract at a profit. Conversely, if you sell (go short) and the price falls, you can buy it back for a profit. Imperex Prime provides access to a variety of futures markets with powerful tools to manage your positions and analyze market trends.
                        </p>
                         <Button asChild className="mt-8">
                            <Link href="/signup">Start Trading Futures</Link>
                        </Button>
                    </div>
                    <div>
                        <Image src="https://picsum.photos/seed/futures-chart/800/600" alt="Futures Chart" width={800} height={600} className="rounded-lg shadow-lg" data-ai-hint="financial chart futures"/>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-card/30 py-20 sm:py-28 bg-dark">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Futures Market Overview
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Stay updated with real-time data from the futures markets.
              </p>
            </div>
            <FuturesMarketOverview />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
