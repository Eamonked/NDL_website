import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Truck } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="mb-6">
        <Truck className="h-16 w-16 text-teal-600 mx-auto" />
      </div>
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        We couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <Button asChild className="bg-teal-600 hover:bg-teal-700">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}