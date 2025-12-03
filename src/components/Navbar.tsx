"use client"

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Globe,
  Smartphone,
  Share2,
  Zap,
  MessageSquare,
  TrendingUp,
  Target,
  Palette,
  Headphones,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Design & Development',
    description: 'Custom websites that drive results',
    color: 'bg-gradient-to-br from-[#008ac1] to-[#00b5ca]'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native & cross-platform solutions',
    color: 'bg-gradient-to-br from-[#bc3feb] to-[#fab900]'
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Engage and grow your audience',
    color: 'bg-gradient-to-br from-[#00efd6] to-[#00b5ca]'
  },
  {
    icon: Zap,
    title: 'AI Workflows & Automations',
    description: 'Streamline your operations',
    color: 'bg-gradient-to-br from-[#fab900] to-[#ee6500]'
  },
  {
    icon: MessageSquare,
    title: 'AI-Powered Chatbots',
    description: 'Intelligent customer support',
    color: 'bg-gradient-to-br from-[#00b5ca] to-[#00efd6]'
  },
  {
    icon: TrendingUp,
    title: 'Organic Growth & SEO',
    description: 'Rank higher, reach more',
    color: 'bg-gradient-to-br from-[#008ac1] to-[#bc3feb]'
  },
  {
    icon: Target,
    title: 'Performance Marketing',
    description: 'Data-driven ad campaigns',
    color: 'bg-gradient-to-br from-[#ee6500] to-[#fab900]'
  },
  {
    icon: Palette,
    title: 'Brand Identity & Design',
    description: 'Stand out with unique branding',
    color: 'bg-gradient-to-br from-[#bc3feb] to-[#008ac1]'
  },
  {
    icon: Headphones,
    title: 'Additional Support Services',
    description: 'Ongoing assistance & maintenance',
    color: 'bg-gradient-to-br from-[#00efd6] to-[#bc3feb]'
  }
];

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileServicesOpen(false);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative overflow-hidden rounded-lg transition-transform group-hover:scale-105">
                <Image
                  src="/images/cim_Logo.png"
                  alt="CIM Logo"
                  height={80}
                  width={180}
                  className="lg:h-[75px] lg:w-[175px]"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-3">
              {/* Services Mega Menu */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 text-[#000000] hover:text-[#008ac1] px-4 py-2 rounded-lg text-md font-medium transition-all hover:bg-gray-50">
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Mega Menu Dropdown */}
                {isServicesOpen && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 xl:-translate-x-1/2 lg:-translate-x-[55%] mt-2 w-screen lg:max-w-4xl xl:max-w-5xl">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 overflow-hidden">
                      <div className="grid grid-cols-3 gap-6">
                        {services.map((service, index) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={index}
                              href={`/services/${service.title.toLowerCase().replace(/[&\s]+/g, '-')}`}
                              className="group p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-gray-200 hover:shadow-md"
                            >
                              <div className="flex items-start space-x-3">
                                <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${service.color} p-2.5 group-hover:scale-110 transition-transform shadow-lg`}>
                                  <Icon className="w-full h-full text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-sm font-semibold text-[#000000] mb-1 group-hover:text-[#008ac1] transition-colors">
                                    {service.title}
                                  </h3>
                                  <p className="text-xs text-gray-600 line-clamp-2">
                                    {service.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Bottom CTA */}
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-semibold text-[#000000]">
                              Not sure which service you need?
                            </h4>
                            <p className="text-xs text-gray-600 mt-1">
                              Let's discuss your project and find the perfect solution
                            </p>
                          </div>
                          <Link
                            href="/contact"
                            className="px-6 py-2.5 bg-gradient-to-r from-[#008ac1] to-[#00b5ca] hover:from-[#008ac1] hover:to-[#008ac1] text-white rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105"
                          >
                            Schedule Consultation
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="#about"
                className="text-[#000000] hover:text-[#008ac1] px-4 py-2 rounded-lg text-md font-medium transition-all hover:bg-gray-50"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-[#000000] hover:text-[#008ac1] px-4 py-2 rounded-lg text-md font-medium transition-all hover:bg-gray-50"
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="ml-4 bg-gradient-to-r from-[#008ac1] to-[#00b5ca] hover:from-[#008ac1] hover:to-[#008ac1] text-white px-6 py-2.5 rounded-full text-md font-medium transition-all shadow-lg shadow-[#008ac1]/30 hover:shadow-xl hover:shadow-[#008ac1]/40 hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-[#000000] hover:bg-gray-50 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 py-4 space-y-3">
            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={toggleMobileServices}
                className="flex items-center justify-between w-full text-[#000000] hover:text-[#008ac1] px-4 py-3 rounded-lg text-base font-medium transition-all hover:bg-gray-50"
              >
                <span>Services</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mobile Services List */}
              {isMobileServicesOpen && (
                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3 pl-2">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={index}
                        href={`/services/${service.title.toLowerCase().replace(/[&\s]+/g, '-')}`}
                        onClick={toggleMobileMenu}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all"
                      >
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${service.color} p-2 shadow-md`}>
                          <Icon className="w-full h-full text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-[#000000]">
                            {service.title}
                          </h3>
                          <p className="text-xs text-gray-600 truncate">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="#about"
              onClick={toggleMobileMenu}
              className="block text-[#000000] hover:text-[#008ac1] px-4 py-3 rounded-lg text-base font-medium transition-all hover:bg-gray-50"
            >
              About
            </Link>
            <Link
              href="#contact"
              onClick={toggleMobileMenu}
              className="block text-[#000000] hover:text-[#008ac1] px-4 py-3 rounded-lg text-base font-medium transition-all hover:bg-gray-50"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={toggleMobileMenu}
              className="block w-full text-center bg-gradient-to-r from-[#008ac1] to-[#00b5ca] hover:from-[#008ac1] hover:to-[#008ac1] text-white px-6 py-3 rounded-full text-base font-medium transition-all shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}