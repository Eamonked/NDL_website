import { IndustryCard } from '@/components/cards/IndustryCard';
import { CtaSection } from '@/components/sections/CtaSection';
import { ShoppingBag, Stethoscope, ShoppingCart, Store, Box } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Industries | Nokael Dash Logistics',
  description: 'Specialized last-mile delivery solutions for e-commerce, medical labs, grocery, retail chains, and Amazon sellers across the UAE.',
};

export default function IndustriesPage() {
  const industries = [
    {
      icon: ShoppingBag,
      title: 'E-commerce',
      description: 'Fast, reliable delivery for Shopify, WooCommerce, and other online stores.',
      imageSrc: 'https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      benefits: [
        'Same-day delivery options for local orders',
        'Integration with major e-commerce platforms',
        'Branded tracking and delivery experience',
        'Efficient returns processing'
      ]
    },
    {
      icon: Stethoscope,
      title: 'Medical Labs & Clinics',
      description: 'Time-sensitive delivery of medical samples, reports, and supplies.',
      imageSrc: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      benefits: [
        'Temperature-controlled transport',
        'Priority handling for urgent specimens',
        'Specialized training for medical deliveries',
        'Strict chain of custody protocols'
      ]
    },
    {
      icon: ShoppingCart,
      title: 'Grocery & Pharmacy',
      description: 'Temperature-controlled delivery for food, medicine, and essentials.',
      imageSrc: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      benefits: [
        'Cold chain compliance for perishables',
        'Scheduled delivery windows',
        'Real-time temperature monitoring',
        'Contactless delivery options'
      ]
    },
    {
      icon: Store,
      title: 'Retail Chains',
      description: 'Store-to-store transfers and customer home delivery solutions.',
      imageSrc: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      benefits: [
        'Inventory transfers between locations',
        'Click-and-collect fulfillment',
        'Home delivery from local stores',
        'Seasonal capacity scaling'
      ]
    },
    {
      icon: Box,
      title: 'Amazon Sellers',
      description: 'Third-party delivery services for Amazon marketplace sellers.',
      imageSrc: 'https://images.pexels.com/photos/5386754/pexels-photo-5386754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      benefits: [
        'Experienced Amazon delivery partner',
        'SLA compliance monitoring',
        'Seamless fulfillment integration',
        'Dedicated account management'
      ]
    }
  ];

  return (
    <>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Industries We Serve</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Specialized delivery solutions for diverse business sectors.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <IndustryCard
                key={index}
                title={industry.title}
                description={industry.description}
                imageSrc={industry.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>
      
      {industries.map((industry, index) => (
        <section key={index} className={`py-16 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900' : ''}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
              <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center">
                    <industry.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h2 className="text-3xl font-bold">{industry.title}</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  {industry.description}
                </p>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">How We Help</h3>
                  <ul className="space-y-3">
                    {industry.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <svg className="h-6 w-6 text-teal-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-400">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={index % 2 !== 0 ? 'lg:col-start-1' : ''}>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src={industry.imageSrc} 
                    alt={industry.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      
      <CtaSection 
        title="Looking for industry-specific solutions?" 
        description="Contact us to discuss how we can tailor our delivery services to your unique business needs."
        buttonText="Discuss Your Requirements"
      />
    </>
  );
}