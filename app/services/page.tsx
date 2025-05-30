import { CtaSection } from '@/components/sections/CtaSection';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { Truck, Clock, Calendar, RotateCcw, Settings, PhoneCall, ShieldCheck, Headphones, Route } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Services | Nokael Dash Logistics',
  description: 'Explore our last-mile delivery services including same-day delivery, scheduled drop-offs, returns handling, and custom logistics solutions.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: Truck,
      title: 'Last-Mile Delivery',
      description: 'The critical final step in the delivery process, bringing packages from our distribution centers directly to your customers\' doorsteps. We ensure timely, accurate delivery with proof of delivery and real-time updates.'
    },
    {
      icon: Clock,
      title: 'Same-Day Delivery',
      description: 'For urgent shipments, our same-day delivery service ensures your packages reach their destination within hours. Available across major cities in the UAE with priority handling and expedited processing.'
    },
    {
      icon: Calendar,
      title: 'Scheduled Drop-Offs',
      description: 'Let your customers choose their preferred delivery windows. Our scheduled delivery service accommodates specific time slots, ensuring recipients are available to receive their packages.'
    },
    {
      icon: RotateCcw,
      title: 'Returns Handling',
      description: 'Simplify the returns process with our comprehensive solution. We pick up returns from customers, process them efficiently, and provide detailed reporting on all returned items.'
    },
    {
      icon: Settings,
      title: 'Custom Solutions',
      description: 'Every business has unique logistics needs. Our team works with you to develop tailored delivery solutions that align with your specific requirements, integrating seamlessly with your operations.'
    },
    {
      icon: PhoneCall,
      title: '24/7 Delivery',
      description: 'Our round-the-clock service ensures your deliveries can happen at any time, day or night. Perfect for time-sensitive industries like healthcare, emergency services, or night-time operations.'
    }
  ];

  const additionalFeatures = [
    {
      icon: Route,
      title: 'Route Optimization',
      description: 'AI-powered routing algorithms find the most efficient delivery paths, reducing time and fuel consumption.'
    },
    {
      icon: ShieldCheck,
      title: 'Secure Handling',
      description: 'Enhanced security protocols for high-value items, including signature confirmation and specialized packaging.'
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'A dedicated account manager for each business partner, ensuring personalized service and quick issue resolution.'
    }
  ];

  return (
    <>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Our Services</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Comprehensive delivery solutions designed for modern businesses.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                className="h-full"
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">The Nokael Dash Difference</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                What sets our delivery services apart is our commitment to excellence in every aspect of the logistics process. We combine technological innovation with operational expertise to provide a delivery experience that exceeds expectations.
              </p>
              
              <div className="mt-8 grid grid-cols-1 gap-6">
                {additionalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="h-10 w-10 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">{feature.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="https://images.pexels.com/photos/7363101/pexels-photo-7363101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Delivery Service"
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
            <h2 className="text-3xl font-bold">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Our streamlined process makes delivery simple and efficient.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 text-teal-600 text-2xl font-bold mb-4 mx-auto">
                1
              </div>
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-full h-1 bg-teal-100 hidden md:block" />
              <h3 className="text-xl font-bold text-center mb-3">Connect</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Integrate with our system through our API or web portal to submit delivery requests.
              </p>
            </div>
            
            <div className="relative">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 text-teal-600 text-2xl font-bold mb-4 mx-auto">
                2
              </div>
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-full h-1 bg-teal-100 hidden md:block" />
              <h3 className="text-xl font-bold text-center mb-3">Track</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Monitor your deliveries in real-time through our dashboard or receive automated updates.
              </p>
            </div>
            
            <div>
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 text-teal-600 text-2xl font-bold mb-4 mx-auto">
                3
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Deliver</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Our professional drivers complete the delivery with proof of delivery and customer feedback.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CtaSection 
        title="Ready to streamline your delivery operations?" 
        description="Contact us today to discuss how our services can benefit your business."
      />
    </>
  );
}