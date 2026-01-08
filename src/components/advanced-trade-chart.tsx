'use client';

import React, { useEffect, useRef } from 'react';

export function AdvancedTradeChart() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
        if (typeof window.TradingView !== 'undefined' && containerRef.current) {
            new window.TradingView.widget({
                "autosize": true,
                "symbol": "NASDAQ:AAPL",
                "interval": "D",
                "timezone": "Etc/UTC",
                "theme": "dark",
                "style": "1",
                "locale": "en",
                "toolbar_bg": "#f1f3f6",
                "enable_publishing": false,
                "withdateranges": true,
                "hide_side_toolbar": false,
                "allow_symbol_change": true,
                "container_id": "tradingview-advanced-chart",
            });
        }
    };

    const chartContainer = document.createElement('div');
    chartContainer.id = 'tradingview-advanced-chart';
    chartContainer.style.height = '100%';
    
    containerRef.current.appendChild(chartContainer);
    containerRef.current.appendChild(script);

  }, []);

  return (
    <div className="tradingview-widget-container h-full" ref={containerRef}>
      <div className="tradingview-widget-container__widget h-full"></div>
    </div>
  );
}
