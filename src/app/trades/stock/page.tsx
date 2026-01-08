import PublicHeader from '@/components/public-header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import { StockHotlists } from '@/components/stock-hotlists';
import { Card, CardContent } from '@/components/ui/card';
import { AllStockMarketSummary } from '@/components/all-stock-market-summary';

export default function StockPage() {
  return (
    <>
      <PublicHeader />
      <main className="flex-1">
        <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center text-center text-white">
          <Image
            src="https://picsum.photos/seed/stock-hero/1920/1080"
            alt="Stock Market Background"
            fill
            className="object-cover"
            data-ai-hint="stock market abstract"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 p-4">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
              Stock Trading
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg">
              Invest in thousands of public companies from major global
              exchanges like the NYSE and NASDAQ.
            </p>
          </div>
        </section>
        <section className="py-20 sm:py-28">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Invest in Company Ownership
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Stock trading involves buying and selling shares in publicly
                  traded companies. When you own stock, you own a piece of the
                  company. Investors aim to profit from capital gains by
                  selling stocks at a higher price than they bought them, or
                  from dividends, which are portions of a company's profit paid
                  out to shareholders. The stock market is influenced by
                  company performance, economic data, and market sentiment.
                </p>
                <h3 className="text-2xl font-bold tracking-tight mt-8">
                  How It Works
                </h3>
                <p className="mt-4 text-muted-foreground">
                  With Imperex Prime, you can buy and sell stocks from major
                  global exchanges. Simply search for the company you're
                  interested in, analyze its performance with our advanced
                  tools, and place your order. You can hold stocks for
                  long-term growth and potential dividends, or actively trade
                  them to capitalize on short-term market fluctuations. Our
                  platform gives you the data and execution speed you need to
                  make informed decisions.
                </p>
                <Button asChild className="mt-8">
                  <Link href="/signup">Start Trading Stocks</Link>
                </Button>
              </div>
              <div>
                <Image
                  src="https://picsum.photos/seed/stock-chart/800/600"
                  alt="Stock Chart"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                  data-ai-hint="financial chart stock"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-card/30 py-20 sm:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Today's Stock Market Hotlists
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Stay updated with the most active, top-gaining, and top-losing
                stocks.
              </p>
            </div>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <StockHotlists />
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="py-20 sm:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                All Stocks by Sector
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Explore stocks from different sectors of the economy.
              </p>
            </div>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <AllStockMarketSummary />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
