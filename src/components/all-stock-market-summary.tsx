'use client';

import React, { useEffect, useRef } from 'react';

export function AllStockMarketSummary() {
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = 'dark';

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      title: 'Stocks',
      tabs: [
        {
          title: 'Financial',
          symbols: [
            { s: 'NYSE:JPM', d: 'JPMorgan Chase' },
            { s: 'NYSE:WFC', d: 'Wells Fargo Co New' },
            { s: 'NYSE:BAC', d: 'Bank Amer Corp' },
            { s: 'NYSE:HSBC', d: 'Hsbc Hldgs Plc' },
            { s: 'NYSE:C', d: 'Citigroup Inc' },
            { s: 'NYSE:MA', d: 'Mastercard Incorporated' },
          ],
        },
        {
          title: 'Technology',
          symbols: [
            { s: 'NASDAQ:AAPL', d: 'Apple' },
            { s: 'NASDAQ:GOOGL', d: 'Alphabet' },
            { s: 'NASDAQ:MSFT', d: 'Microsoft' },
            { s: 'NASDAQ:FB', d: 'Meta Platforms' },
            { s: 'NYSE:ORCL', d: 'Oracle Corp' },
            { s: 'NASDAQ:INTC', d: 'Intel Corp' },
          ],
        },
        {
          title: 'Services',
          symbols: [
            { s: 'NASDAQ:AMZN', d: 'Amazon' },
            { s: 'NYSE:BABA', d: 'Alibaba Group Hldg Ltd' },
            { s: 'NYSE:T', d: 'At&t Inc' },
            { s: 'NYSE:WMT', d: 'Walmart' },
            { s: 'NYSE:V', d: 'Visa' },
          ],
        },
      ],
      width: '100%',
      height: 660,
      showChart: true,
      showFloatingTooltip: false,
      locale: 'en',
      plotLineColorGrowing: 'hsl(var(--primary))',
      plotLineColorFalling: 'hsl(var(--primary))',
      belowLineFillColorGrowing: 'hsla(var(--primary), 0.12)',
      belowLineFillColorFalling: 'hsla(var(--primary), 0.12)',
      belowLineFillColorGrowingBottom: 'hsla(var(--primary), 0)',
      belowLineFillColorFallingBottom: 'hsla(var(--primary), 0)',
      gridLineColor: 'hsl(var(--border) / 0.5)',
      scaleFontColor: 'hsl(var(--muted-foreground))',
      showSymbolLogo: true,
      symbolActiveColor: 'hsla(var(--primary), 0.12)',
      colorTheme: theme,
    });

    containerRef.current.appendChild(script);
  }, [theme]);

  return (
    <div
      className="tradingview-widget-container"
      style={{ height: 660, width: '100%' }}
      ref={containerRef}
    >
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}
