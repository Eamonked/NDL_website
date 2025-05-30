import { ComplianceCard } from '@/components/cards/ComplianceCard';
import { CtaSection } from '@/components/sections/CtaSection';
import { FileCheck, Shield, Users, Banknote } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Compliance | Nokael Dash Logistics',
  description: 'Our compliance with UAE regulations including DED Delivery Services License, cargo insurance, labor law compliance, and VAT registration.',
};

export default function CompliancePage() {
  const complianceAreas = [
    {
      icon: FileCheck,
      title: 'Business Licensing',
      points: [
        'DED Delivery Services License',
        'Commercial registration in Abu Dhabi',
        'Trade license renewals up-to-date',
        'Operating permits for all service areas'
      ]
    },
    {
      icon: Shield,
      title: 'Insurance & Protection',
      points: [
        'Comprehensive cargo insurance',
        'Vehicle insurance for delivery fleet',
        'General liability coverage',
        'Package value protection up to 10,000 AED'
      ]
    },
    {
      icon: Users,
      title: 'Labor Law Compliance',
      points: [
        'UAE Labor Law adherence',
        'Proper employment contracts',
        'Health and safety compliance',
        'Driver qualifications and training'
      ]
    },
    {
      icon: Banknote,
      title: 'Financial Compliance',
      points: [
        'VAT Registration',
        'Proper accounting practices',
        'Financial record keeping',
        'Transparent billing and invoicing'
      ]
    }
  ];

  return (
    <>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Compliance & Credentials</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Our commitment to operating with integrity and adhering to all regulatory requirements.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <ComplianceCard
                key={index}
                icon={area.icon}
                title={area.title}
                points={area.points}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">Our Commitment to Compliance</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                At Nokael Dash Logistics, we recognize that operating in the logistics industry requires strict adherence to regulatory standards. We maintain all necessary licenses, insurance, and compliance with UAE laws to ensure our operations are above board.
              </p>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Our compliance team continuously monitors regulatory changes and updates our policies and procedures accordingly. This commitment to compliance provides our clients with peace of mind, knowing they're partnering with a fully legitimate and responsible logistics provider.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Compliance Documentation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold">Safety & Security</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Ensuring the safety of packages, personnel, and the public.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm text-center">
              <div className="h-12 w-12 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Package Security</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Secure handling protocols, tamper-evident packaging, and chain of custody tracking for all items.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm text-center">
              <div className="h-12 w-12 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Driver Safety</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Comprehensive driver training, vehicle maintenance protocols, and safety equipment for all personnel.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm text-center">
              <div className="h-12 w-12 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Data Security</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Encrypted data transmission, secure storage, and strict access controls for all customer information.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CtaSection 
        title="Questions about our compliance?" 
        description="Our team is ready to provide all the documentation and information you need."
        buttonText="Contact Our Compliance Team"
      />
    </>
  );
}