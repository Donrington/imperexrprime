'use client';

import React, { useEffect, useRef } from 'react';

export function ForexMarketOverview() {
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
      colorTheme: theme,
      dateRange: '12M',
      showChart: true,
      locale: 'en',
      largeChartUrl: '',
      isTransparent: true,
      showSymbolLogo: true,
      showFloatingTooltip: true,
      width: '100%',
      height: '550',
      plotLineColorGrowing: 'hsl(var(--primary))',
      plotLineColorFalling: 'hsl(var(--primary))',
      gridLineColor: 'hsl(var(--border) / 0.5)',
      scaleFontColor: 'hsl(var(--muted-foreground))',
      belowLineFillColorGrowing: 'hsla(var(--primary), 0.12)',
      belowLineFillColorFalling: 'hsla(var(--primary), 0.12)',
      belowLineFillColorGrowingBottom: 'hsla(var(--primary), 0.01)',
      belowLineFillColorFallingBottom: 'hsla(var(--primary), 0.01)',
      symbolActiveColor: 'hsla(var(--primary), 0.12)',
      tabs: [
        {
          title: 'Forex',
          symbols: [
            { s: 'FX:EURUSD', d: 'EUR to USD' },
            { s: 'FX:GBPUSD', d: 'GBP to USD' },
            { s: 'FX:USDJPY', d: 'USD to JPY' },
            { s: 'FX:USDCHF', d: 'USD to CHF' },
            { s: 'FX:AUDUSD', d: 'AUD to USD' },
            { s: 'FX:USDCAD', d: 'USD to CAD' },
          ],
          originalTitle: 'Forex',
        },
      ],
    });

    containerRef.current.appendChild(script);
  }, [theme]);

  return (
    <div
      className="tradingview-widget-container"
      ref={containerRef}
      style={{ height: '550px', width: '100%' }}
    >
      <div className="tradingview-widget-container__widget" style={{ height: 'calc(100% - 32px)', width: '100%' }}></div>
    </div>
  );
}
