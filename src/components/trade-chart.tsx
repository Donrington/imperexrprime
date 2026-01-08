'use client';

import { useState, useEffect, useMemo } from 'react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import type { AssetClass } from '@/lib/types';

const chartConfig = {
  price: {
    label: 'Price',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

const getAssetSeed = (asset: AssetClass) => {
  switch (asset) {
    case 'Crypto': return 50000;
    case 'Stocks': return 150;
    case 'Forex': return 1.07;
    case 'Futures': return 2300;
  }
}

const generateInitialData = (asset: AssetClass) => {
  const data = [];
  const now = new Date();
  const basePrice = getAssetSeed(asset);
  const volatility = basePrice * 0.02;

  for (let i = 30; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60000);
    data.push({
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      price: basePrice + Math.random() * volatility - volatility / 2,
    });
  }
  return data;
};

const generateNewPoint = (lastPrice: number, asset: AssetClass) => {
  const now = new Date();
  const basePrice = getAssetSeed(asset);
  const volatility = basePrice * 0.002;
  return {
    time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    price: lastPrice + Math.random() * volatility - volatility / 2,
  };
};

export function TradeChart({ asset }: { asset: AssetClass }) {
  const [chartData, setChartData] = useState(() => generateInitialData(asset));
  
  const priceFormatter = useMemo(() => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: asset === 'Forex' ? 4 : 2,
      maximumFractionDigits: asset === 'Forex' ? 4 : 2,
    });
  }, [asset]);

  useEffect(() => {
    setChartData(generateInitialData(asset));

    const interval = setInterval(() => {
      setChartData((prevData) => {
        const lastPoint = prevData[prevData.length - 1];
        if (!lastPoint) return prevData;
        const newPoint = generateNewPoint(lastPoint.price, asset);
        const newData = [...prevData.slice(1), newPoint];
        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [asset]);

  const yDomain = useMemo(() => {
    const prices = chartData.map(d => d.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    const padding = (max - min) * 0.1;
    return [min - padding, max + padding];
  }, [chartData]);

  return (
    <ChartContainer config={chartConfig} className="h-[400px] w-full">
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
          top: 12,
        }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="time"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => priceFormatter.format(Number(value))}
          domain={yDomain}
          width={asset === 'Forex' ? 90 : 80}
        />
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              indicator="dot"
              formatter={(value) => priceFormatter.format(Number(value))}
            />
          }
        />
        <defs>
          <linearGradient id="fillPrice" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="hsl(var(--primary))"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="hsl(var(--primary))"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="price"
          type="natural"
          fill="url(#fillPrice)"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  );
}
