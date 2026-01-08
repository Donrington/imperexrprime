import { ForexMarketOverview } from '@/components/forex-market-overview';
import PublicHeader from '@/components/public-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/footer';

export default function ForexPage() {
  return (
    <>
      <PublicHeader />
      <main className="flex-1">
        <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center text-center text-white">
          <Image
            src="https://picsum.photos/seed/forex-hero/1920/1080"
            alt="Forex Background"
            fill
            className="object-cover"
            data-ai-hint="currency exchange abstract"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 p-4">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
              Forex Trading
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg">
              Participate in the world's largest financial market by trading
              currency pairs from around the globe.
            </p>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Understanding the Forex Market
                </h2>
                <p className="mt-4 text-muted-foreground">
                  The foreign exchange (Forex) market is a global marketplace
                  for exchanging national currencies. Because of the worldwide
                  reach of trade, commerce, and finance, forex markets tend to
                  be the largest and most liquid asset markets in the world.
                  Currencies trade against each other as exchange rate pairs.
                  For example, EUR/USD is a currency pair for trading the euro
                  against the U.S. dollar.
                </p>
                <h3 className="text-2xl font-bold tracking-tight mt-8">How It Works</h3>
                <p className="mt-4 text-muted-foreground">
                  Forex trading involves buying one currency while simultaneously selling another. You speculate on whether one currency will strengthen or weaken against another. For instance, if you buy the EUR/USD pair, you are betting that the Euro will rise in value against the US Dollar. Our platform provides access to leverage, which allows you to control a large position with a small amount of capital, amplifying potential profits (and losses).
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Access to major, minor, and exotic currency pairs.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Trade 24 hours a day, 5 days a week.</span>
                  </li>
                   <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Utilize leverage to control larger positions.</span>
                  </li>
                </ul>
                <Button asChild className="mt-8">
                  <Link href="/signup">Start Trading Forex</Link>
                </Button>
              </div>
              <div>
                <Image
                  src="https://picsum.photos/seed/forex-chart/800/600"
                  alt="Forex Chart"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                  data-ai-hint="financial chart forex"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card/30 py-20 sm:py-28">
            <div className="container mx-auto px-4">
                 <div className="mx-auto mb-16 max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Forex Market Overview
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Stay updated with real-time data from the Forex markets.
                    </p>
                </div>
                <Card className="overflow-hidden">
                    <CardContent className="p-0">
                        <ForexMarketOverview />
                    </CardContent>
                </Card>
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
