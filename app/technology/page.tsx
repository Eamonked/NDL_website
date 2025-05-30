import Image from 'next/image';
import { CtaSection } from '@/components/sections/CtaSection';
import { MapPin, BarChart3, MessageSquare, ShieldCheck, Smartphone, Truck } from 'lucide-react';

export const metadata = {
  title: 'Technology | Nokael Dash Logistics',
  description: 'Our technology stack powers efficient last-mile delivery with Firebase backend, Google Maps SDK routing, WhatsApp integration, and real-time tracking.',
};

export default function TechnologyPage() {
  const techComponents = [
    {
      icon: Truck,
      title: 'Route Optimization',
      description: 'Google Maps SDK integration for efficient route planning, real-time traffic updates, and navigation assistance for drivers.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Custom driver apps for delivery management and customer apps for real-time tracking and notifications.'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive reporting tools providing insights into delivery performance, SLA compliance, and operational efficiency.'
    },
    {
      icon: MessageSquare,
      title: 'Communication APIs',
      description: 'WhatsApp Business API integration for real-time customer notifications and driver communications.'
    },
    {
      icon: ShieldCheck,
      title: 'Security Protocols',
      description: 'End-to-end encryption for all data, secure authentication, and comprehensive audit logs for all transactions.'
    },
    {
      icon: MapPin,
      title: 'Geofencing',
      description: 'Location-based triggers for automated notifications and delivery confirmation upon arrival at destination.'
    },
  ];

  return (
    <>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Our Technology</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              The digital backbone powering our delivery operations.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">Technology-Driven Logistics</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                At Nokael Dash Logistics, technology is at the core of everything we do. Our proprietary platform combines industry-leading tools with custom solutions to create a seamless delivery experience for businesses and their customers.
              </p>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                From sophisticated route optimization to real-time tracking and instant communications, our technology stack ensures efficiency, transparency, and reliability at every step of the delivery process.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Technology Platform"
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
            <h2 className="text-3xl font-bold">Our Technology Stack</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              The digital tools that power our logistics operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techComponents.map((tech, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center mb-4">
                  <tech.icon className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold">Client Web Portal</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Our comprehensive web dashboard provides businesses with complete visibility and control over their deliveries.
              </p>
              
              <ul className="mt-6 space-y-3">
                {[
                  'Real-time delivery tracking',
                  'Order management and scheduling',
                  'Performance analytics and reporting',
                  'Custom delivery zones and pricing',
                  'API documentation for system integration',
                  'User role management and permissions'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className="h-6 w-6 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center flex-shrink-0">
                      <svg className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-3 relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Client Dashboard"
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
            <h2 className="text-3xl font-bold">Integration Capabilities</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Seamlessly connect your systems with our delivery platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-bold mb-3">API Integration</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect your e-commerce platform, ERP, or custom systems directly to our delivery API for automated order processing.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-bold mb-3">E-commerce Plugins</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ready-to-use integrations for popular platforms like Shopify, WooCommerce, and Magento for quick setup.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-bold mb-3">Custom Solutions</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our development team can create bespoke integrations tailored to your specific business requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CtaSection 
        title="Experience our technology in action" 
        description="Request a demo of our platform and see how it can transform your delivery operations."
        buttonText="Request Demo"
      />
    </>
  );
}