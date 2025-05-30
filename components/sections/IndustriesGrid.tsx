import { IndustryCard } from '@/components/cards/IndustryCard';

export function IndustriesGrid() {
  const industries = [
    {
      title: 'E-commerce',
      description: 'Fast, reliable delivery for Shopify, WooCommerce, and other online stores.',
      imageSrc: 'https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Medical Labs & Clinics',
      description: 'Time-sensitive delivery of medical samples, reports, and supplies.',
      imageSrc: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Grocery & Pharmacy',
      description: 'Temperature-controlled delivery for food, medicine, and essentials.',
      imageSrc: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Retail Chains',
      description: 'Store-to-store transfers and customer home delivery solutions.',
      imageSrc: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Amazon Sellers',
      description: 'Third-party delivery services for Amazon marketplace sellers.',
      imageSrc: 'https://images.pexels.com/photos/5386754/pexels-photo-5386754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold">Industries We Serve</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Specialized logistics solutions for diverse business sectors.
          </p>
        </div>
        
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
  );
}