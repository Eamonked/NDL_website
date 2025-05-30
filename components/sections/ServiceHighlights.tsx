import { Truck, Clock, Calendar, RotateCcw, Settings, PhoneCall } from 'lucide-react';
import { ServiceCard } from '@/components/cards/ServiceCard';

export function ServiceHighlights() {
  const services = [
    {
      icon: Truck,
      title: 'Last-Mile Delivery',
      description: 'Efficient final-leg delivery from distribution centers to the customer\'s doorstep.'
    },
    {
      icon: Clock,
      title: 'Same-Day Delivery',
      description: 'Ultra-fast delivery options for time-sensitive packages across the UAE.'
    },
    {
      icon: Calendar,
      title: 'Scheduled Drop-Offs',
      description: 'Plan deliveries at specific times that work best for your customers.'
    },
    {
      icon: RotateCcw,
      title: 'Returns Handling',
      description: 'Seamless processing of customer returns with tracking and reporting.'
    },
    {
      icon: Settings,
      title: 'Custom Solutions',
      description: 'Tailored logistics solutions designed for your specific business needs.'
    },
    {
      icon: PhoneCall,
      title: '24/7 Delivery',
      description: 'Round-the-clock delivery service for businesses that never sleep.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Comprehensive delivery solutions designed for modern businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}