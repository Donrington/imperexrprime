
'use client';

import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';

export function FuturesMarketOverview() {
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
      showFloatingTooltip: false,
      width: '100%',
      height: '550',
      plotLineColorGrowing: 'hsl(var(--primary))',
      plotLineColorFalling: 'hsl(var(--primary))',
      gridLineColor: 'hsl(var(--border) / 0.5)',
      scaleFontColor: 'hsl(var(--muted-foreground))',
      belowLineFillColorGrowing: 'hsla(var(--primary), 0.12)',
      belowLineFillColorFalling: 'hsla(var(--primary), 0.12)',
      belowLineFillColorGrowingBottom: 'hsla(var(--primary), 0)',
      belowLineFillColorFallingBottom: 'hsla(var(--primary), 0)',
      symbolActiveColor: 'hsla(var(--primary), 0.12)',
      tabs: [
        {
          title: 'Futures',
          symbols: [
            {
              s: 'BMFBOVESPA:ISP1!',
              d: 'S&P 500',
            },
            {
              s: 'BMFBOVESPA:EUR1!',
              d: 'Euro',
            },
            {
              s: 'CMCMARKETS:GOLD',
              d: 'Gold',
            },
            {
              s: 'PYTH:WTI3!',
              d: 'WTI Crude Oil',
            },
            {
              s: 'BMFBOVESPA:CCM1!',
              d: 'Corn',
            },
          ],
          originalTitle: 'Futures',
        },
      ],
    });

    containerRef.current.appendChild(script);
  }, [theme]);

  return (
    <Card className="overflow-hidden ">
        <CardContent className="p-0">
            <div
                className="tradingview-widget-container"
                ref={containerRef}
                style={{ height: '550px', width: '100%' }}
            >
            <div
                className="tradingview-widget-container__widget"
                style={{ height: 'calc(100% - 32px)', width: '100%' }}
            ></div>
            </div>
      </CardContent>
    </Card>
  );
}
