'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Camera, FileUp, UserCheck, Sparkles, Shield, CheckCircle2, AlertCircle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { SelfieCapture } from '@/components/selfie-capture';

export default function KycPage() {
  const [docType, setDocType] = useState('');
  const [docFront, setDocFront] = useState<File | null>(null);
  const [docBack, setDocBack] = useState<File | null>(null);
  const [selfie, setSelfie] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge animation
      gsap.from('.kyc-badge', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });

      // Header animation
      gsap.from('.kyc-header', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Alert animation
      gsap.from('.kyc-alert', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out',
      });

      // Card animation
      gsap.from('.kyc-card', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.6,
        ease: 'power3.out',
      });

      // Floating sparkles animation
      gsap.to('.kyc-sparkle', {
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

  const handleDocFrontChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setDocFront(e.target.files[0]);
  };

  const handleDocBackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setDocBack(e.target.files[0]);
  };

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log({
      docType,
      docFront,
      docBack,
      selfie,
    });
    toast({
      title: 'Submission Successful',
      description: 'Your KYC documents have been submitted for review.',
    });
    // Reset state after submission
    setStep(1);
    setDocType('');
    setDocFront(null);
    setDocBack(null);
    setSelfie(null);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="doc-type" className="text-white">Document Type</Label>
              <Select onValueChange={setDocType} value={docType}>
                <SelectTrigger
                  id="doc-type"
                  className="rounded-xl border-white/10 bg-white/5 text-white focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                >
                  <SelectValue placeholder="Select a document type" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-white/10 bg-neutral-900">
                  <SelectItem value="passport">Passport</SelectItem>
                  <SelectItem value="id-card">National ID Card</SelectItem>
                  <SelectItem value="drivers-license">Driver's License</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {docType && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="doc-front" className="text-white">
                    {docType === 'passport' ? 'Passport Photo Page' : 'Front of Document'}
                  </Label>
                  <Input
                    id="doc-front"
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={handleDocFrontChange}
                    className="rounded-xl border-white/10 bg-white/5 text-white file:mr-4 file:rounded-lg file:border-0 file:bg-emerald-500/20 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-emerald-400 hover:file:bg-emerald-500/30"
                  />
                  {docFront && (
                    <div className="flex items-center gap-2 rounded-lg bg-emerald-500/10 p-3 text-sm text-emerald-400">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>File selected: {docFront.name}</span>
                    </div>
                  )}
                </div>
                {docType !== 'passport' && (
                  <div className="space-y-2">
                    <Label htmlFor="doc-back" className="text-white">Back of Document</Label>
                    <Input
                      id="doc-back"
                      type="file"
                      accept="image/png, image/jpeg"
                      onChange={handleDocBackChange}
                      className="rounded-xl border-white/10 bg-white/5 text-white file:mr-4 file:rounded-lg file:border-0 file:bg-emerald-500/20 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-emerald-400 hover:file:bg-emerald-500/30"
                    />
                    {docBack && (
                      <div className="flex items-center gap-2 rounded-lg bg-emerald-500/10 p-3 text-sm text-emerald-400">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>File selected: {docBack.name}</span>
                      </div>
                    )}
                  </div>
                )}
                <Button
                  onClick={() => setStep(2)}
                  className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-6 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-teal-600"
                  disabled={!docFront || (docType !== 'passport' && !docBack)}
                >
                  <Camera className="mr-2 h-5 w-5" />
                  Next: Take Selfie
                </Button>
              </>
            )}
          </div>
        );
      case 2:
        return <SelfieCapture onSelfieCaptured={(image) => { setSelfie(image); setStep(3); }} />;
      case 3:
        return (
          <div className="space-y-6 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm">
              <UserCheck className="h-10 w-10 text-emerald-400" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-white">Submission Ready</h2>
              <p className="text-neutral-400">
                You have provided all the necessary documents. Please review and submit your application.
              </p>
            </div>
            <div className="space-y-3 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 text-left backdrop-blur-sm">
              <div className="flex items-start justify-between">
                <span className="text-sm text-neutral-400">Document Type:</span>
                <span className="font-semibold text-white capitalize">{docType.replace('-', ' ')}</span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="flex items-start justify-between">
                <span className="text-sm text-neutral-400">Document Front:</span>
                <span className="font-semibold text-white">{docFront?.name}</span>
              </div>
              {docBack && (
                <>
                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="flex items-start justify-between">
                    <span className="text-sm text-neutral-400">Document Back:</span>
                    <span className="font-semibold text-white">{docBack?.name}</span>
                  </div>
                </>
              )}
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="flex items-start justify-between">
                <span className="text-sm text-neutral-400">Selfie:</span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span className="font-semibold text-emerald-400">Captured</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => setStep(1)}
                className="w-full rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10"
              >
                Start Over
              </Button>
              <Button
                onClick={handleSubmit}
                className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-6 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-teal-600"
              >
                <Shield className="mr-2 h-5 w-5" />
                Submit for Verification
              </Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

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
        {/* KYC Badge */}
        <div className="kyc-badge inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 px-4 py-2 backdrop-blur-sm">
          <Shield className="h-4 w-4 text-emerald-400" />
          <span className="text-sm font-medium text-emerald-400">Identity Verification</span>
        </div>

        {/* KYC Title */}
        <div className="kyc-header space-y-3">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                KYC
              </span>
              <Sparkles className="kyc-sparkle absolute -right-8 -top-2 h-5 w-5 text-emerald-400" />
            </span>{' '}
            Verification
          </h1>
          <p className="text-lg text-neutral-400 md:text-xl">
            Please provide the following documents to verify your identity
          </p>
        </div>
      </div>

      {/* Status Alert */}
      <div className="kyc-alert">
        <Alert className="rounded-2xl border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm">
          <AlertCircle className="h-5 w-5 text-amber-400" />
          <AlertTitle className="text-lg font-bold text-amber-400">
            Verification Status: Not Verified
          </AlertTitle>
          <AlertDescription className="text-amber-300/80">
            Your account is not yet verified. Complete the steps below to unlock all features.
          </AlertDescription>
        </Alert>
      </div>

      {/* Main KYC Card */}
      <div className="kyc-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
        {/* Gradient Glow on Hover */}
        <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20" />

        {/* Corner Gradient */}
        <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-50 blur-3xl" />

        <CardHeader className="relative">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-2.5 backdrop-blur-sm">
              {step === 1 && <FileUp className="h-5 w-5 text-emerald-400" />}
              {step === 2 && <Camera className="h-5 w-5 text-teal-400" />}
              {step === 3 && <UserCheck className="h-5 w-5 text-cyan-400" />}
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-white">
                Step {step}: {step === 1 ? 'Upload Documents' : step === 2 ? 'Take a Selfie' : 'Review & Submit'}
              </CardTitle>
              <CardDescription className="text-neutral-400">
                {step === 1 && 'Choose your document type and upload clear images'}
                {step === 2 && 'Please take a clear, well-lit selfie. Ensure your face is fully visible'}
                {step === 3 && 'Please review your documents before submitting'}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative">
          {renderStep()}
        </CardContent>
      </div>

      {/* Step Indicator */}
      <div className="flex items-center justify-center gap-3">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-2 rounded-full transition-all duration-300 ${
              s === step
                ? 'w-12 bg-gradient-to-r from-emerald-500 to-teal-500'
                : s < step
                ? 'w-8 bg-emerald-500/50'
                : 'w-8 bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
