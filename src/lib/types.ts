export type Plan = {
  name: 'Bronze' | 'Silver' | 'Gold';
  riskLevel: 'Low' | 'Medium' | 'High';
  minDeposit: number;
  description: string;
  dailyROI?: number;
  explanation?: string;
  returnOfInvestment?: string;
  tradeCommission?: number;
  support?: string;
  maintenanceFee?: boolean;
};

export type AssetClass = 'Stocks' | 'Crypto' | 'Forex' | 'Futures';

export type Transaction = {
  id: string;
  date: string;
  type: 'Deposit' | 'Withdrawal' | 'Trade' | 'Allocation';
  amount: number;
  status: 'Completed' | 'Pending' | 'Failed';
  description: string;
};

export type MarketData = {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  Icon?: React.ElementType; // Making Icon optional as it will be added on the client
};
