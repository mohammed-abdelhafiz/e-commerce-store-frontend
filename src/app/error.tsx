"use client";

import { useEffect } from "react";
import { Button } from "@/shared/components/ui/button";
import { AlertCircle, RotateCcw } from "lucide-react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}

export default function ErrorPage({ error, unstable_retry }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[calc(100vh-80px)] w-full flex-col items-center justify-center bg-background px-4">
      <div className="flex flex-col items-center justify-center text-center max-w-md animate-in fade-in zoom-in duration-500">
        <div className="rounded-full bg-destructive/10 p-4 mb-6">
          <AlertCircle className="h-12 w-12 text-destructive" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          Something went wrong!
        </h1>
        <p className="text-muted-foreground mb-8">
          An unexpected error occurred. We&apos;ve been notified and are looking
          into it. Please try again.
        </p>
        <Button onClick={unstable_retry} variant="default" className="gap-2">
          <RotateCcw className="h-4 w-4" />
          Try again
        </Button>
      </div>
    </div>
  );
}
