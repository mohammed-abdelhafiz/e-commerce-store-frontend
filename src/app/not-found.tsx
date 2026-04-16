import Link from 'next/link';
import { Button } from '@/shared/components/ui/button';
import { FileQuestion, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-80px)] w-full flex-col items-center justify-center bg-background px-4">
      <div className="flex flex-col items-center justify-center text-center max-w-md animate-in fade-in zoom-in duration-500">
        <div className="rounded-full bg-primary/10 p-4 mb-6">
          <FileQuestion className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">404 - Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          We couldn&apos;t find the page you were looking for. It might have been moved or doesn&apos;t exist.
        </p>
        <Button asChild className="gap-2">
          <Link href="/">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
