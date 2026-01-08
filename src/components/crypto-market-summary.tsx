'use client';

import React, { useEffect, useRef } from 'react';

export function CryptoMarketSummary() {
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = 'dark';

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "title": "Cryptocurrencies",
      "tabs": [
        {
          "title": "Overview",
          "symbols": [
            { "s": "CRYPTOCAP:TOTAL" },
            { "s": "BITSTAMP:BTCUSD" },
            { "s": "BITSTAMP:ETHUSD" },
            { "s": "COINBASE:SOLUSD" },
            { "s": "BINANCE:AVAXUSD" },
            { "s": "COINBASE:UNIUSD" }
          ],
          "quick_link": {
            "title": "More cryptocurrencies",
            "href": "/markets/cryptocurrencies/prices-all/"
          }
        },
        {
          "title": "Bitcoin",
          "symbols": [
            { "s": "BITSTAMP:BTCUSD" },
            { "s": "COINBASE:BTCEUR" },
            { "s": "COINBASE:BTCGBP" },
            { "s": "BITFLYER:BTCJPY" },
            { "s": "BMFBOVESPA:BIT1!" }
          ],
          "quick_link": {
            "title": "More Bitcoin pairs",
            "href": "/symbols/BTCUSD/markets/"
          }
        },
        {
          "title": "Ethereum",
          "symbols": [
            { "s": "BITSTAMP:ETHUSD" },
            { "s": "KRAKEN:ETHEUR" },
            { "s": "COINBASE:ETHGBP" },
            { "s": "BITFLYER:ETHJPY" },
            { "s": "BINANCE:ETHBTC" },
            { "s": "BINANCE:ETHUSDT" }
          ],
          "quick_link": {
            "title": "More Ethereum pairs",
            "href": "/symbols/ETHUSD/markets/"
          }
        },
        {
          "title": "Solana",
          "symbols": [
            { "s": "COINBASE:SOLUSD" },
            { "s": "BINANCE:SOLEUR" },
            { "s": "COINBASE:SOLGBP" },
            { "s": "BINANCE:SOLBTC" },
            { "s": "COINBASE:SOLETH" },
            { "s": "BINANCE:SOLUSDT" }
          ],
          "quick_link": {
            "title": "More Solana pairs",
            "href": "/symbols/SOLUSD/markets/"
          }
        },
        {
          "title": "Uniswap",
          "symbols": [
            { "s": "COINBASE:UNIUSD" },
            { "s": "KRAKEN:UNIEUR" },
            { "s": "COINBASE:UNIGBP" },
            { "s": "BINANCE:UNIBTC" },
            { "s": "KRAKEN:UNIETH" },
            { "s": "BINANCE:UNIUSDT" }
          ],
          "quick_link": {
            "title": "More Uniswap pairs",
            "href": "/symbols/UNIUSD/markets/"
          }
        }
      ],
      "title_link": "/markets/cryptocurrencies/prices-all/",
      "width": "100%",
      "height": "660",
      "showChart": true,
      "showFloatingTooltip": false,
      "locale": "en",
      "plotLineColorGrowing": "hsl(var(--primary))",
      "plotLineColorFalling": "hsl(var(--primary))",
      "belowLineFillColorGrowing": "hsla(var(--primary), 0.12)",
      "belowLineFillColorFalling": "hsla(var(--primary), 0.12)",
      "belowLineFillColorGrowingBottom": "hsla(var(--primary), 0)",
      "belowLineFillColorFallingBottom": "hsla(var(--primary), 0)",
      "gridLineColor": "hsl(var(--border) / 0.5)",
      "scaleFontColor": "hsl(var(--muted-foreground))",
      "showSymbolLogo": true,
      "symbolActiveColor": "hsla(var(--primary), 0.12)",
      "colorTheme": theme,
    });
    
    containerRef.current.appendChild(script);
    
  }, [theme]);

  return (
    <div className="tradingview-widget-container" style={{ height: 660, width: '100%' }} ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}
