'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { adminWallets, cryptoOptions } from '@/lib/admin-wallets';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Settings, Sparkles, Key, Wallet, Shield, Save, Plus } from 'lucide-react';

export default function AdminSettingsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge animation
      gsap.from('.settings-badge', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });

      // Header animation
      gsap.from('.settings-header', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Tabs animation
      gsap.from('.settings-tabs', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out',
      });

      // Floating sparkles animation
      gsap.to('.settings-sparkle', {
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
        {/* Settings Badge */}
        <div className="settings-badge inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 px-4 py-2 backdrop-blur-sm">
          <Settings className="h-4 w-4 text-emerald-400" />
          <span className="text-sm font-medium text-emerald-400">Admin Panel</span>
        </div>

        {/* Settings Title */}
        <div className="settings-header space-y-3">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            Admin{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                Settings
              </span>
              <Sparkles className="settings-sparkle absolute -right-8 -top-2 h-5 w-5 text-emerald-400" />
            </span>
          </h1>
        </div>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="general" className="settings-tabs w-full">
        <TabsList className="grid w-full grid-cols-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-1 backdrop-blur-sm">
          <TabsTrigger
            value="general"
            className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white"
          >
            <Settings className="mr-2 h-4 w-4" />
            General
          </TabsTrigger>
          <TabsTrigger
            value="apikeys"
            className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
          >
            <Key className="mr-2 h-4 w-4" />
            API Keys
          </TabsTrigger>
          <TabsTrigger
            value="payments"
            className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white"
          >
            <Wallet className="mr-2 h-4 w-4" />
            Payments
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-green-500 data-[state=active]:text-white"
          >
            <Shield className="mr-2 h-4 w-4" />
            Security
          </TabsTrigger>
        </TabsList>

        {/* General Tab */}
        <TabsContent value="general">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
            {/* Gradient Glow on Hover */}
            <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20" />

            {/* Corner Gradient */}
            <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-50 blur-3xl" />

            <CardHeader className="relative">
              <CardTitle className="text-2xl font-bold text-white">General Settings</CardTitle>
              <CardDescription className="text-neutral-400">
                Manage global platform settings and configurations
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-6">
              <div className="space-y-2">
                <Label htmlFor="platform-name" className="text-white">Platform Name</Label>
                <Input
                  id="platform-name"
                  defaultValue="Imperex Prime"
                  className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm">
                <div className="space-y-0.5">
                  <Label className="text-base text-white" htmlFor="maintenance-mode">
                    Maintenance Mode
                  </Label>
                  <p className="text-sm text-neutral-400">
                    Temporarily disable user access to the platform for updates
                  </p>
                </div>
                <Switch id="maintenance-mode" />
              </div>
              <Button className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-6 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-teal-600">
                <Save className="mr-2 h-5 w-5" />
                Save Settings
              </Button>
            </CardContent>
          </div>
        </TabsContent>

        {/* API Keys Tab */}
        <TabsContent value="apikeys">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
            {/* Gradient Glow on Hover */}
            <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20" />

            {/* Corner Gradient */}
            <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 opacity-50 blur-3xl" />

            <CardHeader className="relative">
              <CardTitle className="text-2xl font-bold text-white">API Keys</CardTitle>
              <CardDescription className="text-neutral-400">
                Manage third-party API integrations
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-6">
              <div className="space-y-2">
                <Label htmlFor="tradingview-api" className="text-white">TradingView API Key</Label>
                <Input
                  id="tradingview-api"
                  placeholder="Enter TradingView API Key"
                  className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="google-maps-api" className="text-white">Google Maps API Key</Label>
                <Input
                  id="google-maps-api"
                  placeholder="Enter Google Maps API Key"
                  className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20"
                />
              </div>
              <Button className="rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-6 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-teal-600 hover:to-cyan-600">
                <Save className="mr-2 h-5 w-5" />
                Save API Keys
              </Button>
            </CardContent>
          </div>
        </TabsContent>

        {/* Payments Tab */}
        <TabsContent value="payments">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
            {/* Gradient Glow on Hover */}
            <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-cyan-500 via-emerald-500 to-teal-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20" />

            {/* Corner Gradient */}
            <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 opacity-50 blur-3xl" />

            <CardHeader className="relative">
              <CardTitle className="text-2xl font-bold text-white">Payment & Wallet Settings</CardTitle>
              <CardDescription className="text-neutral-400">
                Manage the wallet addresses used for user deposits
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-8">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/10 bg-white/5 hover:bg-white/5">
                      <TableHead className="text-neutral-300">Coin</TableHead>
                      <TableHead className="text-neutral-300">Network</TableHead>
                      <TableHead className="text-neutral-300">Address</TableHead>
                      <TableHead className="hidden text-neutral-300 sm:table-cell">Memo</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cryptoOptions.flatMap(coin =>
                      adminWallets[coin.value]?.map(wallet => (
                        <TableRow key={`${wallet.coinName}-${wallet.networkValue}`} className="border-white/10 hover:bg-white/5">
                          <TableCell className="font-medium text-white">{wallet.coinName}</TableCell>
                          <TableCell className="text-neutral-300">{wallet.networkName}</TableCell>
                          <TableCell className="break-all font-mono text-xs text-neutral-400">{wallet.address}</TableCell>
                          <TableCell className="hidden font-mono text-xs text-neutral-400 sm:table-cell">{wallet.memo || 'N/A'}</TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 p-2.5 backdrop-blur-sm">
                    <Plus className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Add New Wallet</h3>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="coin-select" className="text-white">Coin</Label>
                      <Select>
                        <SelectTrigger
                          id="coin-select"
                          className="rounded-xl border-white/10 bg-white/5 text-white focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                        >
                          <SelectValue placeholder="Select a coin" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-white/10 bg-neutral-900">
                          {cryptoOptions.map(option => (
                            <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="network-name" className="text-white">Network Name</Label>
                      <Input
                        id="network-name"
                        placeholder="e.g., Bitcoin (BTC)"
                        className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="wallet-address" className="text-white">Wallet Address</Label>
                    <Input
                      id="wallet-address"
                      placeholder="Enter wallet address"
                      className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="wallet-memo" className="text-white">Memo / Tag (Optional)</Label>
                    <Input
                      id="wallet-memo"
                      placeholder="Enter memo if required"
                      className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                    />
                  </div>
                  <Button className="rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-6 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-cyan-600 hover:to-emerald-600">
                    <Plus className="mr-2 h-5 w-5" />
                    Add Wallet
                  </Button>
                </div>
              </div>
            </CardContent>
          </div>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
            {/* Gradient Glow on Hover */}
            <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20" />

            {/* Corner Gradient */}
            <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-emerald-500/10 to-green-500/10 opacity-50 blur-3xl" />

            <CardHeader className="relative">
              <CardTitle className="text-2xl font-bold text-white">Security Settings</CardTitle>
              <CardDescription className="text-neutral-400">
                Configure security policies for the admin panel
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-6">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm">
                <div className="space-y-0.5">
                  <Label className="text-base text-white" htmlFor="admin-2fa">
                    Two-Factor Authentication (2FA)
                  </Label>
                  <p className="text-sm text-neutral-400">
                    Require all admins to use 2FA for added security
                  </p>
                </div>
                <Switch id="admin-2fa" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label className="text-white">Permitted IP Addresses</Label>
                <p className="pb-2 text-sm text-neutral-400">
                  Only allow admin access from these IP addresses (comma-separated). Leave blank to allow all.
                </p>
                <Input
                  id="ip-whitelist"
                  placeholder="e.g., 203.0.113.1, 198.51.100.5"
                  className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
              <Button className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 px-6 py-6 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-green-600">
                <Save className="mr-2 h-5 w-5" />
                Save Security Settings
              </Button>
            </CardContent>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
