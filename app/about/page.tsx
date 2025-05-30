import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CtaSection } from '@/components/sections/CtaSection';
import { ArrowRight, Award, CheckCircle, Heart, TrendingUp, Users, Zap } from 'lucide-react';

export const metadata = {
  title: 'About Us | Nokael Dash Logistics',
  description: 'Learn about Nokael Dash Logistics, our mission, vision, and core values as a leading last-mile delivery service in the UAE.',
};

export default function AboutPage() {
  return (
    <>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">About Nokael Dash Logistics</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Building the future of last-mile delivery in the UAE.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Nokael Dash Logistics was founded in Abu Dhabi with a clear vision: to transform last-mile delivery through a combination of operational excellence and cutting-edge technology.
              </p>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Our journey began as a trusted delivery partner for Amazon sellers, where we learned the intricacies of efficient logistics operations. From these roots, we've expanded to serve businesses across various industries, always maintaining our commitment to reliability and customer satisfaction.
              </p>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Today, we're proud to be a leading logistics provider in the UAE, known for our innovative approach and dedication to excellence in every delivery.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="https://images.pexels.com/photos/8132754/pexels-photo-8132754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Nokael Dash Logistics Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold">Our Mission, Vision & Values</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              The principles that drive us forward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mission</h3>
              <p className="text-gray-600 dark:text-gray-400">
                To revolutionize last-mile delivery through technology, providing businesses with reliable, efficient, and transparent logistics solutions that delight their customers.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Vision</h3>
              <p className="text-gray-600 dark:text-gray-400">
                To be the most trusted logistics partner in the UAE, known for our innovation, reliability, and exceptional service quality across all industries.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Core Values</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-600 dark:text-gray-400">Excellence in service</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-600 dark:text-gray-400">Innovation & continuous improvement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-600 dark:text-gray-400">Integrity & transparency</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-600 dark:text-gray-400">Customer-centric approach</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="https://images.pexels.com/photos/4506108/pexels-photo-4506108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Delivery Partners"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold">Why Choose Us</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Nokael Dash Logistics offers a unique combination of technological innovation and operational excellence that sets us apart in the logistics industry.
              </p>
              
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="h-4 w-4 text-teal-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Experienced Team</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Our team brings years of logistics experience, including partnerships with Amazon and other major e-commerce platforms.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="h-4 w-4 text-teal-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Technology-First Approach</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Our proprietary platform optimizes routes, provides real-time tracking, and ensures transparent communication.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Heart className="h-4 w-4 text-teal-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Customer-Centric</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      We understand that each delivery represents your brand, and we treat every package with care and attention.
                    </p>
                  </div>
                </li>
              </ul>
              
              <Button asChild className="mt-8 bg-teal-600 hover:bg-teal-700">
                <Link href="/contact" className="flex items-center">
                  Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <CtaSection 
        title="Ready to experience better delivery?" 
        description="Join businesses across the UAE who trust Nokael Dash Logistics for their last-mile delivery needs."
      />
    </>
  );
}