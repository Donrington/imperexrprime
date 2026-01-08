import PublicHeader from '@/components/public-header';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/footer';

const assetClasses = [
  {
    name: 'Cryptocurrencies',
    description: 'Trade Bitcoin, Ethereum, and a wide range of altcoins with high liquidity and 24/7 market access.',
    image: 'https://images.pexels.com/photos/8358136/pexels-photo-8358136.jpeg',
    features: ['24/7 Trading', 'High Volatility', 'Decentralized'],
    href: '/trades/crypto'
  },
  {
    name: 'Stocks',
    description: 'Invest in thousands of public companies from major global exchanges like the NYSE and NASDAQ.',
    image: 'https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg',
    features: ['Company Ownership', 'Dividends', 'Market Diversity'],
    href: '/trades/stock'
  },
  {
    name: 'Forex',
    description: 'Participate in the world\'s largest financial market by trading currency pairs from around the globe.',
    image: 'https://images.pexels.com/photos/6770775/pexels-photo-6770775.jpeg',
    features: ['High Liquidity', 'Global Markets', 'Leverage Options'],
    href: '/trades/forex'
  },
  {
    name: 'Futures',
    description: 'Speculate on the future price of commodities, indices, and currencies with standardized contracts.',
    image: 'https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg',
    features: ['Contract-Based', 'Hedging Tool', 'Standardized Assets'],
    href: '/trades/futures'
  },
];

export default function TradesPage() {
  return (
    <>
      <PublicHeader />
      <main className="flex-1">
        <section className="bg-background pt-24 pb-12 md:pt-32 md:pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
              Trade Across Global Markets
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
              Imperex Prime offers a comprehensive suite of trading instruments.
              Explore diverse asset classes and find your next opportunity, all
              from a single, powerful platform.
            </p>
          </div>
        </section>

        <section className="bg-background py-20 sm:py-28">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12">
              {assetClasses.map((asset, index) => (
                <Card
                  key={asset.name}
                  className="overflow-hidden border-2"
                >
                  <div className={`grid grid-cols-1 md:grid-cols-2 items-center`}>
                    <div className={`p-8 md:p-12 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <h2 className="text-3xl font-bold tracking-tight">
                        {asset.name}
                      </h2>
                      <p className="mt-4 text-muted-foreground">
                        {asset.description}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {asset.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                       <Button asChild className="mt-8">
                        <Link href={asset.href}>Start Trading {asset.name}</Link>
                      </Button>
                    </div>
                    <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      <Image
                        src={asset.image}
                        alt={`${asset.name} trading`}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover"
                        data-ai-hint="financial markets"
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
