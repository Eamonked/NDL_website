import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface IndustryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
}

export function IndustryCard({ title, description, imageSrc, className }: IndustryCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="relative h-48 w-full overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" asChild className="p-0 hover:bg-transparent text-teal-600 hover:text-teal-700">
          <Link href="/contact" className="flex items-center">
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}