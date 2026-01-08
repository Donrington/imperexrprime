'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import type { Transaction } from '@/lib/types';
import { cn } from '@/lib/utils';
import { DollarSign, Wallet, Copy, Sparkles, ArrowDownToLine, ArrowUpFromLine, History } from 'lucide-react';
import { cryptoOptions, adminWallets, type NetworkOption, getNetworksForCoin } from '@/lib/admin-wallets';
import { useToast } from '@/hooks/use-toast';

const transactions: Transaction[] = [
  {
    id: 'txn_1',
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    type: 'Deposit',
    amount: 5000.0,
    status: 'Completed',
    description: 'Initial account funding',
  },
  {
    id: 'txn_2',
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    type: 'Trade',
    amount: -1250.75,
    status: 'Completed',
    description: 'Buy 0.02 BTC',
  },
  {
    id: 'txn_3',
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    type: 'Allocation',
    amount: 1000.0,
    status: 'Completed',
    description: 'Allocated to Gold Plan',
  },
  {
    id: 'txn_4',
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    type: 'Withdrawal',
    amount: -500.0,
    status: 'Pending',
    description: 'Withdrawal to bank account',
  },
  {
    id: 'txn_5',
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    type: 'Trade',
    amount: 250.5,
    status: 'Completed',
    description: 'Sell 10 AAPL shares',
  },
];

const getStatusBadge = (status: Transaction['status']) => {
  switch (status) {
    case 'Completed':
      return (
        <Badge className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border-emerald-500/30">
          Completed
        </Badge>
      );
    case 'Pending':
      return (
        <Badge className="bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 border-amber-500/30">
          Pending
        </Badge>
      );
    case 'Failed':
      return (
        <Badge className="bg-red-500/20 text-red-400 hover:bg-red-500/30 border-red-500/30">
          Failed
        </Badge>
      );
  }
};

export default function WalletPage() {
  const { toast } = useToast();
  const containerRef = useRef<HTMLDivElement>(null);

  // Deposit state
  const [depositCoin, setDepositCoin] = useState<string>('');
  const [depositNetwork, setDepositNetwork] = useState<string>('');

  // Withdrawal state
  const [withdrawalCoin, setWithdrawalCoin] = useState<string>('');
  const [withdrawalNetwork, setWithdrawalNetwork] = useState<string>('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge animation
      gsap.from('.wallet-badge', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });

      // Header animation
      gsap.from('.wallet-header', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Balance cards stagger animation
      gsap.fromTo(
        '.balance-card',
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          delay: 0.4,
          ease: 'power3.out',
          clearProps: 'all',
        }
      );

      // Tabs animation
      gsap.from('.wallet-tabs', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.6,
        ease: 'power3.out',
      });

      // Floating sparkles animation
      gsap.to('.wallet-sparkle', {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied to clipboard!',
      description: 'The address has been copied.',
    });
  };

  const depositNetworks = getNetworksForCoin(depositCoin);
  const selectedDepositWallet = adminWallets[depositCoin]?.find(w => w.networkValue === depositNetwork);

  const withdrawalNetworks = getNetworksForCoin(withdrawalCoin);

  return (
    <div ref={containerRef} className="relative min-h-screen space-y-8 pb-12">
      {/* Background Elements */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -right-1/4 top-1/3 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      </div>

      {/* Header Section */}
      <div className="space-y-6">
        {/* Wallet Badge */}
        <div className="wallet-badge inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 px-4 py-2 backdrop-blur-sm">
          <Wallet className="h-4 w-4 text-emerald-400" />
          <span className="text-sm font-medium text-emerald-400">Financial Hub</span>
        </div>

        {/* Wallet Title */}
        <div className="wallet-header space-y-3">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            My{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                Wallet
              </span>
              <Sparkles className="wallet-sparkle absolute -right-8 -top-2 h-5 w-5 text-emerald-400" />
            </span>
          </h1>
          <p className="text-lg text-neutral-400 md:text-xl">
            Manage your funds, deposits, and withdrawals
          </p>
        </div>
      </div>

      {/* Balance Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Total Balance Card */}
        <div className="balance-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20">
          {/* Gradient Glow on Hover */}
          <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20" />

          {/* Corner Gradient */}
          <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-50 blur-3xl" />

          {/* Content */}
          <div className="relative space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-neutral-400">Total Balance</p>
              <div className="rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-2.5 backdrop-blur-sm">
                <DollarSign className="h-5 w-5 text-emerald-400" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-4xl font-bold text-white">$14,382.54</p>
              <p className="text-xs text-neutral-500">Includes all managed and trading funds</p>
            </div>
          </div>
        </div>

        {/* Available to Withdraw Card */}
        <div className="balance-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20">
          {/* Gradient Glow on Hover */}
          <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20" />

          {/* Corner Gradient */}
          <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 opacity-50 blur-3xl" />

          {/* Content */}
          <div className="relative space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-neutral-400">Available to Withdraw</p>
              <div className="rounded-xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 p-2.5 backdrop-blur-sm">
                <Wallet className="h-5 w-5 text-teal-400" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-4xl font-bold text-white">$3,382.54</p>
              <p className="text-xs text-neutral-500">Funds not currently in trades or plans</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="deposit" className="wallet-tabs">
        <TabsList className="grid w-full grid-cols-3 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-1 backdrop-blur-sm">
          <TabsTrigger
            value="deposit"
            className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white"
          >
            <ArrowDownToLine className="mr-2 h-4 w-4" />
            Deposit
          </TabsTrigger>
          <TabsTrigger
            value="withdrawal"
            className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
          >
            <ArrowUpFromLine className="mr-2 h-4 w-4" />
            Withdrawal
          </TabsTrigger>
          <TabsTrigger
            value="history"
            className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
          >
            <History className="mr-2 h-4 w-4" />
            History
          </TabsTrigger>
        </TabsList>

        {/* Deposit Tab */}
        <TabsContent value="deposit">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
            {/* Gradient Glow on Hover */}
            <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20" />

            {/* Corner Gradient */}
            <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-50 blur-3xl" />

            <CardHeader className="relative">
              <CardTitle className="text-2xl font-bold text-white">Deposit Funds</CardTitle>
              <CardDescription className="text-neutral-400">
                Choose a payment method and amount to add funds to your account
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-6">
              <div className="space-y-2">
                <Label htmlFor="deposit-amount" className="text-white">Amount (USD)</Label>
                <Input
                  id="deposit-amount"
                  type="number"
                  placeholder="500.00"
                  className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deposit-coin" className="text-white">Payment Method</Label>
                <Select onValueChange={(value) => { setDepositCoin(value); setDepositNetwork(''); }}>
                  <SelectTrigger
                    id="deposit-coin"
                    className="rounded-xl border-white/10 bg-white/5 text-white focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                  >
                    <SelectValue placeholder="Select a coin" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-white/10 bg-neutral-900">
                    {cryptoOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        <div className="flex items-center gap-2">
                          <Wallet className="h-4 w-4" /> {option.label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {depositNetworks.length > 0 && (
                <div className="space-y-2">
                  <Label htmlFor="deposit-network" className="text-white">Network</Label>
                  <Select onValueChange={setDepositNetwork} value={depositNetwork}>
                    <SelectTrigger
                      id="deposit-network"
                      className="rounded-xl border-white/10 bg-white/5 text-white focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                    >
                      <SelectValue placeholder="Select a network" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-white/10 bg-neutral-900">
                      {depositNetworks.map((network) => (
                        <SelectItem key={network.networkValue} value={network.networkValue}>
                          {network.networkName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {selectedDepositWallet && (
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">Deposit {selectedDepositWallet.coinName}</h3>
                      <p className="mt-1 text-sm text-neutral-400">
                        Send your {selectedDepositWallet.coinName} to the address below. Ensure you select the correct network ({selectedDepositWallet.networkName}).
                      </p>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-white">Wallet Address</Label>
                      <div className="flex items-center gap-2">
                        <Input
                          readOnly
                          value={selectedDepositWallet.address}
                          className="rounded-xl border-white/10 bg-white/5 font-mono text-white"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleCopyToClipboard(selectedDepositWallet.address)}
                          className="rounded-xl border-white/10 bg-white/5 hover:bg-emerald-500/20"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    {selectedDepositWallet.memo && (
                      <div className="space-y-1">
                        <Label className="text-white">Memo / Tag</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            readOnly
                            value={selectedDepositWallet.memo}
                            className="rounded-xl border-white/10 bg-white/5 font-mono text-white"
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleCopyToClipboard(selectedDepositWallet.memo!)}
                            className="rounded-xl border-white/10 bg-white/5 hover:bg-emerald-500/20"
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                    <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
                      <p><strong>Important:</strong> Only send {selectedDepositWallet.coinName} via the {selectedDepositWallet.networkName} network. Sending any other coin or using the wrong network may result in the permanent loss of your deposit.</p>
                    </div>
                  </div>
                </div>
              )}

              <Button
                className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-6 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-teal-600"
                size="lg"
              >
                I Have Made the Deposit
              </Button>
            </CardContent>
          </div>
        </TabsContent>

        {/* Withdrawal Tab */}
        <TabsContent value="withdrawal">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
            {/* Gradient Glow on Hover */}
            <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20" />

            {/* Corner Gradient */}
            <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 opacity-50 blur-3xl" />

            <CardHeader className="relative">
              <CardTitle className="text-2xl font-bold text-white">Withdraw Funds</CardTitle>
              <CardDescription className="text-neutral-400">
                Transfer your available funds to your desired destination
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-6">
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
                <p><strong>Important:</strong> Please double-check the wallet address and network before submitting. Transactions on the blockchain are irreversible, and sending funds to the wrong address will result in permanent loss.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="withdrawal-amount" className="text-white">Amount (USD)</Label>
                <Input
                  id="withdrawal-amount"
                  type="number"
                  placeholder="500.00"
                  className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="withdrawal-coin" className="text-white">Withdrawal Method</Label>
                <Select onValueChange={(value) => { setWithdrawalCoin(value); setWithdrawalNetwork(''); }}>
                  <SelectTrigger
                    id="withdrawal-coin"
                    className="rounded-xl border-white/10 bg-white/5 text-white focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20"
                  >
                    <SelectValue placeholder="Select a coin" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-white/10 bg-neutral-900">
                    {cryptoOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        <div className="flex items-center gap-2">
                          <Wallet className="h-4 w-4" /> {option.label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {withdrawalNetworks.length > 0 && (
                <div className="space-y-2">
                  <Label htmlFor="withdrawal-network" className="text-white">Network</Label>
                  <Select onValueChange={setWithdrawalNetwork} value={withdrawalNetwork}>
                    <SelectTrigger
                      id="withdrawal-network"
                      className="rounded-xl border-white/10 bg-white/5 text-white focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20"
                    >
                      <SelectValue placeholder="Select a network" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-white/10 bg-neutral-900">
                      {withdrawalNetworks.map((network) => (
                        <SelectItem key={network.networkValue} value={network.networkValue}>
                          {network.networkName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="wallet-address" className="text-white">Your Wallet Address</Label>
                <Input
                  id="wallet-address"
                  type="text"
                  placeholder="Enter your destination wallet address"
                  className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20"
                />
              </div>
              {withdrawalCoin === 'xrp' && (
                <div className="space-y-2">
                  <Label htmlFor="withdrawal-memo" className="text-white">Memo / Tag (Optional)</Label>
                  <Input
                    id="withdrawal-memo"
                    type="text"
                    placeholder="Enter destination tag if required"
                    className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20"
                  />
                </div>
              )}
              <Button
                className="w-full rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-6 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-teal-600 hover:to-cyan-600"
                size="lg"
              >
                Submit Withdrawal Request
              </Button>
            </CardContent>
          </div>
        </TabsContent>

        {/* History Tab */}
        <TabsContent value="history">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
            {/* Gradient Glow on Hover */}
            <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20" />

            {/* Corner Gradient */}
            <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-50 blur-3xl" />

            <CardHeader className="relative">
              <CardTitle className="text-2xl font-bold text-white">Transaction History</CardTitle>
              <CardDescription className="text-neutral-400">
                A record of all your account activity
              </CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10 hover:bg-white/5">
                    <TableHead className="text-neutral-400">Date</TableHead>
                    <TableHead className="text-neutral-400">Type</TableHead>
                    <TableHead className="text-neutral-400">Description</TableHead>
                    <TableHead className="text-right text-neutral-400">Amount</TableHead>
                    <TableHead className="text-center text-neutral-400">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow
                      key={transaction.id}
                      className="border-white/10 transition-colors hover:bg-white/5"
                    >
                      <TableCell className="text-white">
                        {new Date(transaction.date).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="font-medium text-white">
                        {transaction.type}
                      </TableCell>
                      <TableCell className="text-neutral-400">
                        {transaction.description}
                      </TableCell>
                      <TableCell
                        className={cn(
                          'text-right font-mono font-semibold',
                          transaction.amount > 0
                            ? 'text-emerald-400'
                            : 'text-red-400'
                        )}
                      >
                        {transaction.amount > 0 ? '+' : ''}$
                        {Math.abs(transaction.amount).toFixed(2)}
                      </TableCell>
                      <TableCell className="text-center">
                        {getStatusBadge(transaction.status)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
