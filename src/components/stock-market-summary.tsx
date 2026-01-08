'use client';

import React, { useEffect, useRef } from 'react';

export function StockMarketSummary() {
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = 'dark';

  useEffect(() => {
    if (!containerRef.current) return;
    
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "colorTheme": theme,
      "dateRange": "12M",
      "showChart": true,
      "locale": "en",
      "largeChartUrl": "",
      "isTransparent": true,
      "showSymbolLogo": true,
      "showFloatingTooltip": false,
      "width": "100%",
      "height": "660",
      "plotLineColorGrowing": "hsl(var(--primary))",
      "plotLineColorFalling": "hsl(var(--primary))",
      "gridLineColor": "hsl(var(--border) / 0.5)",
      "scaleFontColor": "hsl(var(--muted-foreground))",
      "belowLineFillColorGrowing": "hsla(var(--primary), 0.12)",
      "belowLineFillColorFalling": "hsla(var(--primary), 0.12)",
      "belowLineFillColorGrowingBottom": "hsla(var(--primary), 0)",
      "belowLineFillColorFallingBottom": "hsla(var(--primary), 0)",
      "symbolActiveColor": "hsla(var(--primary), 0.12)",
      "tabs": [
        {
          "title": "Indices",
          "symbols": [
            { "s": "FOREXCOM:SPXUSD", "d": "S&P 500" },
            { "s": "FOREXCOM:NSXUSD", "d": "US 100" },
            { "s": "FOREXCOM:DJI", "d": "Dow 30" },
            { "s": "INDEX:NKY", "d": "Nikkei 225" },
            { "s": "INDEX:DEU40", "d": "DAX Index" },
            { "s": "FOREXCOM:UKXGBP", "d": "UK 100" }
          ],
          "originalTitle": "Indices"
        },
        {
          "title": "Futures",
          "symbols": [
            { "s": "CME_MINI:ES1!", "d": "S&P 500" },
            { "s": "CME:6E1!", "d": "Euro" },
            { "s": "COMEX:GC1!", "d": "Gold" },
            { "s": "NYMEX:CL1!", "d": "Crude Oil" },
            { "s": "NYMEX:NG1!", "d": "Natural Gas" },
            { "s": "CBOT:ZC1!", "d": "Corn" }
          ],
          "originalTitle": "Futures"
        },
        {
            "title": "Bonds",
            "symbols": [
              { "s": "CME:GE1!", "d": "Eurodollar" },
              { "s": "CBOT:ZB1!", "d": "T-Bond" },
              { "s": "CBOT:UB1!", "d": "Ultra T-Bond" },
              { "s": "EUREX:FGBL1!", "d": "Euro Bund" },
              { "s": "EUREX:FBTP1!", "d": "Euro BTP" },
              { "s": "EUREX:FGBM1!", "d": "Euro BOBL" }
            ],
            "originalTitle": "Bonds"
        }
      ]
    });
    
    containerRef.current.appendChild(script);
    
  }, [theme]);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}
