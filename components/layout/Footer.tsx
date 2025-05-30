import Link from 'next/link';
import { Truck, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Truck className="h-6 w-6 text-teal-600" />
              <span className="text-lg font-bold tracking-tight">
                Nokael<span className="text-teal-600">Dash</span>
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Modern, fast, reliable last-mile delivery for businesses across the UAE.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 transition-colors">
                  Compliance
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-base mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 transition-colors">
                  Last-Mile Delivery
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 transition-colors">
                  Same-Day Delivery
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 transition-colors">
                  Scheduled Drop-Offs
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 transition-colors">
                  Returns Handling
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 transition-colors">
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-base mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Abu Dhabi, United Arab Emirates
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-600 flex-shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  info@nokael.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Nokael Dash Logistics. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-xs text-gray-600 dark:text-gray-400 hover:text-teal-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-gray-600 dark:text-gray-400 hover:text-teal-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}