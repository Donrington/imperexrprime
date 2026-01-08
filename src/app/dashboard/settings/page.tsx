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
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Eye, EyeOff, Sparkles, Settings as SettingsIcon, Lock, Save, Camera } from 'lucide-react';

export default function SettingsPage() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
          <SettingsIcon className="h-4 w-4 text-emerald-400" />
          <span className="text-sm font-medium text-emerald-400">Account Settings</span>
        </div>

        {/* Settings Title */}
        <div className="settings-header space-y-3">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                Settings
              </span>
              <Sparkles className="settings-sparkle absolute -right-8 -top-2 h-5 w-5 text-emerald-400" />
            </span>
          </h1>
          <p className="text-lg text-neutral-400 md:text-xl">
            Manage your account settings and preferences
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="profile" className="settings-tabs w-full">
        <TabsList className="grid w-full grid-cols-2 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-1 backdrop-blur-sm">
          <TabsTrigger
            value="profile"
            className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white"
          >
            <User className="mr-2 h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
          >
            <Lock className="mr-2 h-4 w-4" />
            Security
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
            {/* Gradient Glow on Hover */}
            <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20" />

            {/* Corner Gradient */}
            <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-50 blur-3xl" />

            <CardHeader className="relative">
              <CardTitle className="text-2xl font-bold text-white">Profile Information</CardTitle>
              <CardDescription className="text-neutral-400">
                Update your personal details here
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-6">
              {/* Avatar Section */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-75 blur-md"></div>
                  <Avatar className="relative h-20 w-20 border-2 border-white/20">
                    <AvatarImage src="https://picsum.photos/seed/user-avatar/80/80" data-ai-hint="user avatar" />
                    <AvatarFallback className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                      <User className="h-10 w-10 text-emerald-400" />
                    </AvatarFallback>
                  </Avatar>
                </div>
                <Button
                  variant="outline"
                  className="rounded-xl border-white/10 bg-white/5 text-white hover:bg-emerald-500/20 hover:border-emerald-500/50"
                >
                  <Camera className="mr-2 h-4 w-4" />
                  Change Photo
                </Button>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name" className="text-white">First Name</Label>
                  <Input
                    id="first-name"
                    defaultValue="John"
                    className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name" className="text-white">Last Name</Label>
                  <Input
                    id="last-name"
                    defaultValue="Doe"
                    className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="john.doe@example.com"
                  className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              {/* Save Button */}
              <Button className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-6 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-teal-600">
                <Save className="mr-2 h-5 w-5" />
                Save Changes
              </Button>
            </CardContent>
          </div>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
            {/* Gradient Glow on Hover */}
            <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20" />

            {/* Corner Gradient */}
            <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 opacity-50 blur-3xl" />

            <CardHeader className="relative">
              <CardTitle className="text-2xl font-bold text-white">Security</CardTitle>
              <CardDescription className="text-neutral-400">
                Change your password and manage security settings
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-6">
              {/* Current Password */}
              <div className="space-y-2">
                <Label htmlFor="current-password" className="text-white">Current Password</Label>
                <div className="relative">
                  <Input
                    id="current-password"
                    type={showCurrentPassword ? 'text' : 'password'}
                    className="rounded-xl border-white/10 bg-white/5 pr-12 text-white placeholder:text-neutral-500 focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-400 transition-colors hover:text-teal-400"
                  >
                    {showCurrentPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div className="space-y-2">
                <Label htmlFor="new-password" className="text-white">New Password</Label>
                <div className="relative">
                  <Input
                    id="new-password"
                    type={showNewPassword ? 'text' : 'password'}
                    className="rounded-xl border-white/10 bg-white/5 pr-12 text-white placeholder:text-neutral-500 focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-400 transition-colors hover:text-teal-400"
                  >
                    {showNewPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="text-white">Confirm New Password</Label>
                <div className="relative">
                  <Input
                    id="confirm-password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    className="rounded-xl border-white/10 bg-white/5 pr-12 text-white placeholder:text-neutral-500 focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-400 transition-colors hover:text-teal-400"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Change Password Button */}
              <Button className="rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-6 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-teal-600 hover:to-cyan-600">
                <Lock className="mr-2 h-5 w-5" />
                Change Password
              </Button>
            </CardContent>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
