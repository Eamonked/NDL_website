"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Menu, X, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/technology', label: 'Technology' },
  { href: '/industries', label: 'Industries' },
  { href: '/compliance', label: 'Compliance' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-md dark:bg-gray-950" 
          : "bg-white/80 backdrop-blur-sm dark:bg-gray-950/80"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logo.jpg" alt="Nokael Dash Logistics Logo" width={120} height={48} priority />
            </Link>
          </div>
          
          <nav className="hidden md:flex md:space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-teal-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <Link href="/contact">Request Partnership</Link>
            </Button>
          </div>
          
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-base font-medium transition-colors hover:text-teal-600 py-2"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 bg-teal-600 hover:bg-teal-700">
                  <Link href="/contact">Request Partnership</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}