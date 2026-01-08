'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import {
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Sparkles, Crown, ShieldCheck, Eye, X, Download } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Image from 'next/image';

interface KYCDocument {
  type: string;
  url: string;
  uploadedAt: string;
}

interface Application {
  id: string;
  name: string;
  email: string;
  date: string;
  status: string;
  avatar: string;
  documents: KYCDocument[];
}

const applications: Application[] = [
  {
    id: 'usr_1',
    name: 'Bob Johnson',
    email: 'bob.j@example.com',
    date: '2023-10-26',
    status: 'Pending',
    avatar: '3',
    documents: [
      { type: 'ID Document (Front)', url: 'https://images.pexels.com/photos/6287298/pexels-photo-6287298.jpeg', uploadedAt: '2023-10-26 09:30 AM' },
      { type: 'ID Document (Back)', url: 'https://images.pexels.com/photos/6287322/pexels-photo-6287322.jpeg', uploadedAt: '2023-10-26 09:31 AM' },
      { type: 'Proof of Address', url: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg', uploadedAt: '2023-10-26 09:32 AM' },
    ]
  },
  {
    id: 'usr_2',
    name: 'Charlie Brown',
    email: 'charlie.b@example.com',
    date: '2023-10-25',
    status: 'Pending',
    avatar: '4',
    documents: [
      { type: 'Passport', url: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg', uploadedAt: '2023-10-25 02:15 PM' },
      { type: 'Utility Bill', url: 'https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg', uploadedAt: '2023-10-25 02:16 PM' },
    ]
  },
  {
    id: 'usr_3',
    name: 'Diana Miller',
    email: 'diana.m@example.com',
    date: '2023-10-24',
    status: 'Pending',
    avatar: '5',
    documents: [
      { type: 'Driver License (Front)', url: 'https://images.pexels.com/photos/7821681/pexels-photo-7821681.jpeg', uploadedAt: '2023-10-24 11:45 AM' },
      { type: 'Driver License (Back)', url: 'https://images.pexels.com/photos/7821684/pexels-photo-7821684.jpeg', uploadedAt: '2023-10-24 11:46 AM' },
      { type: 'Bank Statement', url: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg', uploadedAt: '2023-10-24 11:47 AM' },
    ]
  },
];


export default function AdminKycPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);

  const handleViewDocuments = (app: Application) => {
    setSelectedApplication(app);
    setIsViewDialogOpen(true);
  };

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

      // Card animation
      gsap.from('.kyc-card', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out',
      });

      // Floating sparkles animation
      gsap.to('.kyc-sparkle', {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen space-y-6 pb-12 sm:space-y-8">
      {/* Background Elements */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -right-1/4 top-1/3 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      </div>

      {/* Header Section */}
      <div className="space-y-4 sm:space-y-6">
        {/* KYC Badge */}
        <div className="kyc-badge inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 px-3 py-1.5 backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-2">
          <Crown className="h-3.5 w-3.5 text-emerald-400 sm:h-4 sm:w-4" />
          <span className="text-xs font-medium text-emerald-400 sm:text-sm">KYC Verification</span>
        </div>

        {/* Header */}
        <div className="kyc-header space-y-2 sm:space-y-3">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            KYC{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text font-cursive text-transparent">
                Applications
              </span>
              <Sparkles className="kyc-sparkle absolute -right-6 -top-1 h-4 w-4 text-emerald-400 sm:-right-8 sm:-top-2 sm:h-5 sm:w-5" />
            </span>
          </h1>
          <p className="text-base text-neutral-400 sm:text-lg">Review and verify user identity submissions</p>
        </div>
      </div>

      {/* Applications Card */}
      <div className="kyc-card group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm sm:rounded-3xl">
        {/* Gradient Glow on Hover */}
        <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20 sm:rounded-3xl" />

        {/* Corner Gradient */}
        <div className="absolute right-0 top-0 h-40 w-40 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-50 blur-3xl sm:h-64 sm:w-64" />

        <CardHeader className="relative p-4 sm:p-6">
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-2 backdrop-blur-sm sm:rounded-xl sm:p-2.5">
              <ShieldCheck className="h-5 w-5 text-cyan-400 sm:h-6 sm:w-6" />
            </div>
            <div>
              <CardTitle className="text-lg font-bold text-white sm:text-xl md:text-2xl">Pending Applications</CardTitle>
              <CardDescription className="text-xs text-neutral-400 sm:text-sm">
                Review and approve or reject user KYC submissions
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative p-4 sm:p-6 sm:pt-0">
          <div className="overflow-x-auto">
            <Table className="min-w-[700px]">
              <TableHeader>
                <TableRow className="border-white/10 hover:bg-white/5">
                  <TableHead className="px-4 text-xs text-neutral-400 sm:text-sm">User</TableHead>
                  <TableHead className="px-4 text-xs text-neutral-400 sm:text-sm">Submission Date</TableHead>
                  <TableHead className="px-4 text-xs text-neutral-400 sm:text-sm">Status</TableHead>
                  <TableHead className="px-4 text-right text-xs text-neutral-400 sm:text-sm">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.map((app) => (
                  <TableRow key={app.id} className="border-white/10 transition-colors hover:bg-white/5">
                    <TableCell className="px-4 py-3 sm:py-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="relative flex-shrink-0">
                          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 blur-md transition-opacity group-hover:opacity-75"></div>
                          <Avatar className="relative h-8 w-8 border-2 border-white/20 sm:h-10 sm:w-10">
                            <AvatarImage src={`https://picsum.photos/seed/${app.avatar}/40/40`} data-ai-hint="person face" />
                            <AvatarFallback className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-xs text-cyan-400 sm:text-sm">{app.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-medium text-white sm:text-sm">{app.name}</p>
                          <p className="text-xs text-neutral-400 sm:text-sm">{app.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-4 py-3 text-xs text-neutral-400 sm:py-4 sm:text-sm">{app.date}</TableCell>
                    <TableCell className="px-4 py-3 sm:py-4">
                      <Badge className="whitespace-nowrap border-0 bg-gradient-to-r from-amber-500 to-orange-500 text-xs text-white">{app.status}</Badge>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-right sm:py-4">
                      <div className="flex justify-end gap-1 sm:gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleViewDocuments(app)}
                          className="h-8 w-8 flex-shrink-0 rounded-lg text-cyan-400 transition-all hover:bg-cyan-500/10 hover:text-cyan-300 sm:h-10 sm:w-10 sm:rounded-xl"
                        >
                          <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                          <span className="sr-only">View Documents</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 flex-shrink-0 rounded-lg text-emerald-400 transition-all hover:bg-emerald-500/10 hover:text-emerald-300 sm:h-10 sm:w-10 sm:rounded-xl"
                        >
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                          <span className="sr-only">Approve</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 flex-shrink-0 rounded-lg text-red-400 transition-all hover:bg-red-500/10 hover:text-red-300 sm:h-10 sm:w-10 sm:rounded-xl"
                        >
                          <XCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                          <span className="sr-only">Reject</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </div>

      {/* View Documents Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto border-white/10 bg-gradient-to-br from-neutral-900/95 to-neutral-800/95 backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">
              KYC Documents - {selectedApplication?.name}
            </DialogTitle>
            <DialogDescription className="text-neutral-400">
              Review submitted identification and verification documents
            </DialogDescription>
          </DialogHeader>

          {selectedApplication && (
            <div className="space-y-6 py-4">
              {/* User Info */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 border-2 border-white/20">
                    <AvatarImage src={`https://picsum.photos/seed/${selectedApplication.avatar}/100/100`} data-ai-hint="person face" />
                    <AvatarFallback className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400">
                      {selectedApplication.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-white">{selectedApplication.name}</p>
                    <p className="text-sm text-neutral-400">{selectedApplication.email}</p>
                    <p className="text-xs text-neutral-500">Submitted on {selectedApplication.date}</p>
                  </div>
                </div>
              </div>

              {/* Documents Grid */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Submitted Documents</h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  {selectedApplication.documents.map((doc, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-emerald-500/30"
                    >
                      {/* Document Image */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-800">
                        <Image
                          src={doc.url}
                          alt={doc.type}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint="document identification"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>

                      {/* Document Info */}
                      <div className="p-4">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <h4 className="font-medium text-white">{doc.type}</h4>
                            <p className="text-xs text-neutral-400">Uploaded: {doc.uploadedAt}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 flex-shrink-0 rounded-lg text-emerald-400 transition-all hover:bg-emerald-500/10 hover:text-emerald-300"
                            onClick={() => window.open(doc.url, '_blank')}
                          >
                            <Download className="h-4 w-4" />
                            <span className="sr-only">Download</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-end">
                <Button
                  variant="outline"
                  className="border-red-500/20 bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:text-red-300"
                  onClick={() => setIsViewDialogOpen(false)}
                >
                  <XCircle className="mr-2 h-4 w-4" />
                  Reject Application
                </Button>
                <Button
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600"
                  onClick={() => setIsViewDialogOpen(false)}
                >
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Approve Application
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
