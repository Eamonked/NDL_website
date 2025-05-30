"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Truck, Package, Clock, BarChart3 } from 'lucide-react';

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-50 via-blue-50 to-teal-50" />
        <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMkQzRUUiIGZpbGwtb3BhY2l0eT0iLjQiPjxwYXRoIGQ9Ik0yOS41IDI0LjVoMXYxaC0xek0yOS41IDI1LjVoMXYxaC0xek0zMC41IDI1LjVoMXYxaC0xeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {loaded && (
          <motion.div
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              variants={itemVariants}
            >
              Smart Delivery. <span className="text-teal-600">Real Speed.</span> Total Control.
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
              variants={itemVariants}
            >
              Modern, fast, reliable last-mile delivery for businesses across the UAE.
            </motion.p>
            
            <motion.div
              className="mt-10"
              variants={itemVariants}
            >
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                <Link href="/contact">Request Partnership</Link>
              </Button>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-16 w-full"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-teal-50 dark:bg-teal-900/20 p-3 rounded-full">
                  <Package className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="mt-4 text-sm md:text-base font-medium">Express Delivery</h3>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-teal-50 dark:bg-teal-900/20 p-3 rounded-full">
                  <BarChart3 className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="mt-4 text-sm md:text-base font-medium">Real-Time Tracking</h3>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-teal-50 dark:bg-teal-900/20 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="mt-4 text-sm md:text-base font-medium">24/7 Availability</h3>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-teal-50 dark:bg-teal-900/20 p-3 rounded-full">
                  <Truck className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="mt-4 text-sm md:text-base font-medium">Tech-Powered Operations</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}