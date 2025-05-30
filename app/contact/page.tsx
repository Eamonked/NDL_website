import { ContactForm } from '@/components/sections/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Nokael Dash Logistics',
  description: 'Get in touch with Nokael Dash Logistics for last-mile delivery services in the UAE. Request a partnership or learn more about our services.',
};

export default function ContactPage() {
  return (
    <>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Contact Us</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              We'd love to hear from you. Reach out to discuss your delivery needs.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Whether you're looking to partner with us for your delivery needs or have questions about our services, we're here to help. Fill out the form, and our team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      info@nokael.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      Abu Dhabi, United Arab Emirates
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Business Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      24/7 Operations<br />
                      Office Hours: 9 AM - 6 PM, Sunday to Thursday
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Request Partnership</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Find answers to common questions about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What areas do you service?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We currently provide delivery services throughout the UAE, with a focus on Abu Dhabi, Dubai, Sharjah, and other major cities.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">How quickly can you deliver?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We offer same-day delivery within cities and next-day delivery between major UAE cities, depending on the time of order placement.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What types of items can you deliver?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We handle a wide range of items from e-commerce products to sensitive medical supplies. Restrictions apply for hazardous materials and oversized items.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">How do I track my deliveries?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                All business partners receive access to our web portal where you can track deliveries in real-time. We also provide API access for system integration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}