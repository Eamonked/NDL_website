import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CtaSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

export function CtaSection({
  title = "Ready to revolutionize your delivery operations?",
  description = "Partner with Nokael Dash Logistics and experience seamless, tech-enabled last-mile delivery solutions.",
  buttonText = "Get Started Today",
  buttonLink = "/contact",
  className = "",
}: CtaSectionProps) {
  return (
    <section className={`bg-teal-600 py-16 md:py-20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
          <p className="mt-4 text-lg text-teal-50 max-w-2xl">{description}</p>
          <Button asChild className="mt-8 bg-white text-teal-600 hover:bg-teal-50" size="lg">
            <Link href={buttonLink} className="flex items-center">
              {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}