import { Hero } from '@/components/sections/Hero';
import { ServiceHighlights } from '@/components/sections/ServiceHighlights';
import { IndustriesGrid } from '@/components/sections/IndustriesGrid';
import { CtaSection } from '@/components/sections/CtaSection';
import Image from 'next/image';
import { ArrowRight, CheckCircle, MapPin, Clock, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* About Section Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Redefining Last-Mile Logistics in the UAE
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Nokael Dash Logistics combines cutting-edge technology with operational excellence to deliver packages efficiently and reliably. As a trusted vendor with extensive experience, we've helped businesses of all sizes optimize their delivery operations.
              </p>
              <ul className="mt-6 space-y-3">
                {['Trusted Amazon seller delivery partner', 'Operational excellence', 'Technology-driven approach', 'Customer-centric service'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-600 dark:text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8 bg-teal-600 hover:bg-teal-700">
                <Link href="/about" className="flex items-center">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Nokael Dash Logistics Operations"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <ServiceHighlights />
      
      {/* Technology Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="https://images.pexels.com/photos/7709187/pexels-photo-7709187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Technology Platform"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight">
                Technology-Powered Delivery Solutions
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Our proprietary technology stack optimizes every aspect of the delivery process, from route planning to real-time tracking and customer notifications.
              </p>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-teal-600" />
                    </div>
                    <h3 className="font-medium">Smart Routing</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 pl-[52px]">
                    Google Maps SDK for optimal route planning and navigation
                  </p>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-teal-600" />
                    </div>
                    <h3 className="font-medium">Real-Time Tracking</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 pl-[52px]">
                    Live updates on delivery status and ETA for customers
                  </p>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center">
                      <BarChart3 className="h-5 w-5 text-teal-600" />
                    </div>
                    <h3 className="font-medium">SLA Monitoring</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 pl-[52px]">
                    Automated tracking of service level agreements and performance
                  </p>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-teal-600" />
                    </div>
                    <h3 className="font-medium">Client Portal</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 pl-[52px]">
                    Web dashboard for order management and analytics
                  </p>
                </div>
              </div>
              
              <Button asChild className="mt-8 bg-teal-600 hover:bg-teal-700">
                <Link href="/technology" className="flex items-center">
                  Explore Our Technology <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <IndustriesGrid />
      
      <CtaSection />
    </>
  );
}