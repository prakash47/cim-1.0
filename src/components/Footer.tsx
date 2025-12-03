import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

export default function Footer() {
    const services = [
        'Web Design & Development',
        'Mobile App Development',
        'Social Media Marketing',
        'AI Workflows & Automations',
        'AI-Powered Chatbots',
        'Organic Growth & SEO',
        'Performance Marketing',
        'Brand Identity & Design',
        'Additional Support Services'
    ];

    const quickLinks = [
        { name: 'About Us', href: '#about' },
        { name: 'Our Services', href: '#services' },
        { name: 'Contact Us', href: '#contact' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' }
    ];

    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-12 lg:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {/* Brand Column */}
                        <div className="lg:col-span-1">
                            <Link href="/" className="inline-block mb-4">
                                <Image
                                    src="/images/cim_Logo.png"
                                    alt="CIM Logo"
                                    height={80}
                                    width={180}
                                    className="lg:h-[75px] lg:w-[175px]"
                                />
                            </Link>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                Empowering businesses with cutting-edge digital solutions. From web design to AI automation, we are your partner in growth.
                            </p>

                            {/* Social Media */}
                            <div className="flex space-x-4">
                                <Link
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-[#008ac1] hover:to-[#00b5ca] text-[#000000] hover:text-white transition-all flex items-center justify-center group"
                                >
                                    <Facebook className="h-6 w-6" />
                                </Link>
                                <Link
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-[#00efd6] hover:to-[#00b5ca] text-[#000000] hover:text-white transition-all flex items-center justify-center group"
                                >
                                    <Twitter className="h-6 w-6" />
                                </Link>
                                <Link
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-[#bc3feb] hover:to-[#fab900] text-[#000000] hover:text-white transition-all flex items-center justify-center group"
                                >
                                    <Instagram className="h-6 w-6" />
                                </Link>
                                <Link
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-[#008ac1] hover:to-[#bc3feb] text-[#000000] hover:text-white transition-all flex items-center justify-center group"
                                >
                                    <Linkedin className="h-6 w-6" />
                                </Link>
                            </div>
                        </div>

                        {/* Services Column */}
                        <div>
                            <h3 className="text-sm font-bold text-[#000000] uppercase tracking-wider mb-4">
                                Our Services
                            </h3>
                            <ul className="space-y-3">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <Link
                                            href={`/services/${service.toLowerCase().replace(/[&\s]+/g, '-')}`}
                                            className="text-gray-600 hover:text-[#008ac1] transition-colors text-sm flex items-center group"
                                        >
                                            <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                            {service}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Links Column */}
                        <div>
                            <h3 className="text-sm font-bold text-[#000000] uppercase tracking-wider mb-4">
                                Quick Links
                            </h3>
                            <ul className="space-y-3 mb-6">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-600 hover:text-[#008ac1] transition-colors text-sm flex items-center group"
                                        >
                                            <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Column */}
                        <div>
                            <h3 className="text-sm font-bold text-[#000000] uppercase tracking-wider mb-4">
                                Get In Touch
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start text-gray-600 text-sm">
                                    <Mail className="h-5 w-5 mr-3 mt-0.5 text-[#008ac1] flex-shrink-0" />
                                    <a href="mailto:contact@cinuteinfomedia.com" className="hover:text-[#008ac1] transition-colors">
                                        contact@cinuteinfomedia.com
                                    </a>
                                </li>
                                <li className="flex items-start text-gray-600 text-sm">
                                    <Phone className="h-5 w-5 mr-3 mt-0.5 text-[#00b5ca] flex-shrink-0" />
                                    <div className="flex flex-col">
                                        <a href="tel:+919004988859" className="hover:text-[#008ac1] transition-colors">
                                            +91 9004988859
                                        </a>
                                        <a href="tel:+917700995410" className="hover:text-[#008ac1] transition-colors">
                                            +91 7700995410
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start text-gray-600 text-sm">
                                    <MapPin className="h-5 w-5 mr-3 mt-0.5 text-[#bc3feb] flex-shrink-0" />
                                    <span>Office #3, Ashley Tower, Beverly Park, Mira Road (E), Mumbai, 401107</span>
                                </li>
                            </ul>

                            {/* CTA Button */}
                            <Link
                                href="/contact"
                                className="mt-6 inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-[#008ac1] to-[#00b5ca] hover:from-[#008ac1] hover:to-[#008ac1] text-white rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                Start Your Project
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-600">
                            © {new Date().getFullYear()} CIM. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-6 text-sm">
                            <Link href="/privacy" className="text-gray-600 hover:text-[#008ac1] transition-colors">
                                Privacy Policy
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/terms" className="text-gray-600 hover:text-[#008ac1] transition-colors">
                                Terms of Service
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/sitemap" className="text-gray-600 hover:text-[#008ac1] transition-colors">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}