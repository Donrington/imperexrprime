'use client';

import React, { useEffect, useRef } from 'react';

export function StockHotlists() {
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = 'dark';

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      exchange: 'US',
      colorTheme: theme,
      dateRange: '12M',
      showChart: true,
      locale: 'en',
      largeChartUrl: '',
      isTransparent: true,
      showSymbolLogo: true,
      showFloatingTooltip: false,
      width: '100%',
      height: '600',
      plotLineColorGrowing: 'hsl(var(--primary))',
      plotLineColorFalling: 'hsl(var(--destructive))',
      gridLineColor: 'hsl(var(--border) / 0.5)',
      scaleFontColor: 'hsl(var(--muted-foreground))',
      belowLineFillColorGrowing: 'hsla(var(--primary), 0.12)',
      belowLineFillColorFalling: 'hsla(var(--destructive), 0.12)',
      belowLineFillColorGrowingBottom: 'hsla(var(--primary), 0.01)',
      belowLineFillColorFallingBottom: 'hsla(var(--destructive), 0.01)',
      symbolActiveColor: 'hsla(var(--primary), 0.12)',
    });

    containerRef.current.appendChild(script);
  }, [theme]);

  return (
    <div
      className="tradingview-widget-container"
      ref={containerRef}
      style={{ height: '600px', width: '100%' }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: '100%', width: '100%' }}
      ></div>
    </div>
  );
}
