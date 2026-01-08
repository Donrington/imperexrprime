'use client';

import { useEffect, useRef } from 'react';

export function TradingViewTicker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptAppended = useRef(false);

  useEffect(() => {
    if (scriptAppended.current || !containerRef.current) return;

    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://widgets.tradingview-widget.com/w/en/tv-ticker-tape.js';
    script.async = true;

    const widgetConfig = {
      symbols: [
        { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500' },
        { proName: 'FOREXCOM:NSXUSD', title: 'Nasdaq 100' },
        { proName: 'FOREXCOM:DJI', title: 'Dow 30' },
        { proName: 'FX_IDC:EURUSD', title: 'EUR/USD' },
        { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin' },
        { proName: 'BITSTAMP:ETHUSD', title: 'Ethereum' },
      ],
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: 'adaptive',
      colorTheme: 'dark',
      locale: 'en',
    };

    script.innerHTML = `
      new TradingView.widget(
        ${JSON.stringify({
          ...widgetConfig,
          container_id: 'tradingview-ticker-widget-container',
        })}
      );
    `;

    const widgetContainer = document.createElement('div');
    widgetContainer.id = 'tradingview-ticker-widget-container';
    widgetContainer.className = 'tradingview-widget-container';

    const tvWidget = document.createElement('div');
    tvWidget.className = 'tradingview-widget-container__widget';

    widgetContainer.appendChild(tvWidget);

    containerRef.current.appendChild(widgetContainer);
    containerRef.current.appendChild(script);

    scriptAppended.current = true;

  }, []);

  return <div ref={containerRef} className="tradingview-ticker-tape-container" />;
}