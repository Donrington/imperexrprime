
'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Camera, RefreshCcw } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from './ui/alert';

interface SelfieCaptureProps {
  onSelfieCaptured: (imageDataUrl: string) => void;
}

export function SelfieCapture({ onSelfieCaptured }: SelfieCaptureProps) {
  const { toast } = useToast();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [selfie, setSelfie] = useState<string | null>(null);

  useEffect(() => {
    const getCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setHasCameraPermission(true);

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
        setHasCameraPermission(false);
        toast({
          variant: 'destructive',
          title: 'Camera Access Denied',
          description: 'Please enable camera permissions in your browser settings to use this app.',
        });
      }
    };

    if (selfie === null) {
      getCameraPermission();
    }
    
    return () => {
        // Stop camera stream when component unmounts or selfie is taken
        if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject as MediaStream;
            stream.getTracks().forEach(track => track.stop());
        }
    }
  }, [selfie, toast]);

  const takeSelfie = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg');
        setSelfie(dataUrl);
      }
    }
  };

  const retakeSelfie = () => {
    setSelfie(null);
  };
  
  const confirmSelfie = () => {
    if (selfie) {
      onSelfieCaptured(selfie);
    }
  }

  return (
    <div className="space-y-4">
      <div className="relative w-full aspect-video rounded-md overflow-hidden bg-muted flex items-center justify-center">
        {selfie ? (
          <img src={selfie} alt="User selfie" className="w-full h-full object-cover" />
        ) : (
          <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted playsInline />
        )}
        {hasCameraPermission === false && (
             <div className="absolute inset-0 flex items-center justify-center p-4">
                <Alert variant="destructive" className="max-w-sm">
                    <AlertTitle>Camera Access Required</AlertTitle>
                    <AlertDescription>
                        Please allow camera access to use this feature. You might need to refresh the page and grant permission.
                    </AlertDescription>
                </Alert>
             </div>
        )}
      </div>
      
      <canvas ref={canvasRef} className="hidden" />
      
      {selfie ? (
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" onClick={retakeSelfie}>
            <RefreshCcw className="mr-2" />
            Retake
          </Button>
          <Button onClick={confirmSelfie}>
            Confirm Selfie
          </Button>
        </div>
      ) : (
        <Button onClick={takeSelfie} disabled={!hasCameraPermission} className="w-full">
          <Camera className="mr-2" />
          Take Selfie
        </Button>
      )}
    </div>
  );
}
