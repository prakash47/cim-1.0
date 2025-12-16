"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight } from "lucide-react";

export default function Footer() {
    const services = [
        "Web Design & Development",
        "Mobile App Development",
        "Social Media Marketing",
        "AI Workflows & Automations",
        "AI-Powered Chatbots",
        "Organic Growth & SEO",
        "Performance Marketing",
        "Brand Identity & Design",
        "Additional Support Services",
    ];

    const quickLinks = [
        { name: "About Us", href: "/about" },
        { name: "Our Services", href: "/services" },
        { name: "Contact Us", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
    ];

    // next-themes
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // avoid hydration mismatch
    useEffect(() => setMounted(true), []);

    const currentTheme = theme === "system" ? resolvedTheme : theme;
    const isDark = currentTheme === "dark";

    // Year (safe to compute on client)
    const year = new Date().getFullYear();

    // Inline styles using your CSS variables so dark mode flips automatically
    const styles = {
        footerBg: { backgroundColor: "var(--card-bg)" },
        containerBorder: { borderTopColor: "var(--border-color)" },
        heading: { color: "var(--foreground)" },
        text: { color: "var(--secondary-text)" },
        link: { color: "var(--secondary-text)" },
        divider: { color: "var(--border-color)" },
        iconBg: { backgroundColor: "var(--hover-bg)", color: "var(--foreground)" },
    } as const;

    if (!mounted) {
        // lightweight placeholder while theme resolves
        return (
            <footer style={styles.footerBg} className="w-full border-t shadow-inner">
                <div className="mx-auto px-6 md:px-12 xl:px-16">
                    <div className="py-12 lg:py-16">
                        <div className="h-36" />
                    </div>
                </div>
            </footer>
        );
    }

    return (
        <footer className="w-full" style={styles.footerBg}>
            <div className="mx-auto px-6 md:px-12 xl:px-16">
                {/* Main Footer Content */}
                <div className="py-12 lg:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {/* Brand Column */}
                        <div className="lg:col-span-1">
                            <Link href="/" className="inline-block mb-4">
                                <Image src={isDark ? "/images/cim_Logo_white.png" : "/images/cim_Logo.png"} alt="CIM Logo" height={80} width={180} className="lg:h-[75px] lg:w-[175px]" />
                            </Link>
                            <p className="text-sm leading-relaxed mb-6" style={styles.text}>
                                Empowering businesses with cutting-edge digital solutions. From web design to AI automation, we are your partner in growth.
                            </p>

                            {/* Social Media */}
                            <div className="flex space-x-4">
                                {/* Facebook */}
                                <Link
                                    href="#"
                                    className="
        w-12 h-12 rounded-full transition-all flex items-center justify-center group
        hover:bg-[linear-gradient(135deg,#1877F2,#0F68D8)]
      "
                                    style={styles.iconBg}
                                    aria-label="Visit our Facebook page"
                                >
                                    <Facebook className="h-6 w-6 text-[var(--foreground)] group-hover:text-white transition-colors" />
                                </Link>

                                {/* Twitter */}
                                <Link
                                    href="#"
                                    className="
        w-12 h-12 rounded-full transition-all flex items-center justify-center group
        hover:bg-[linear-gradient(135deg,#1DA1F2,#0AA3FF)]
      "
                                    style={styles.iconBg}
                                    aria-label="Visit our Twitter profile"
                                >
                                    <Twitter className="h-6 w-6 text-[var(--foreground)] group-hover:text-white transition-colors" />
                                </Link>

                                {/* Instagram */}
                                <Link
                                    href="#"
                                    className="
        w-12 h-12 rounded-full transition-all flex items-center justify-center group
        hover:bg-[linear-gradient(135deg,#F58529,#DD2A7B,#8134AF)]
      "
                                    style={styles.iconBg}
                                    aria-label="Visit our Instagram profile"
                                >
                                    <Instagram className="h-6 w-6 text-[var(--foreground)] group-hover:text-white transition-colors" />
                                </Link>

                                {/* LinkedIn */}
                                <Link
                                    href="#"
                                    className="
        w-12 h-12 rounded-full transition-all flex items-center justify-center group
        hover:bg-[linear-gradient(135deg,#0A66C2,#004182)]
      "
                                    style={styles.iconBg}
                                    aria-label="Visit our LinkedIn profile"
                                >
                                    <Linkedin className="h-6 w-6 text-[var(--foreground)] group-hover:text-white transition-colors" />
                                </Link>
                            </div>
                        </div>

                        {/* Services Column */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={styles.heading}>
                                Our Services
                            </h3>
                            <ul className="space-y-3">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <Link href={`/services/${service.toLowerCase().replace(/[&\s]+/g, "-")}`} className="text-sm flex items-center group py-1" style={styles.link}>
                                            <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                            {service}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Links Column */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={styles.heading}>
                                Quick Links
                            </h3>
                            <ul className="space-y-3 mb-6">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.href} className="text-sm flex items-center group py-1" style={styles.link}>
                                            <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Column */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={styles.heading}>
                                Get In Touch
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start text-sm" style={styles.text}>
                                    <Mail className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: "var(--brand-blue)" }} />
                                    <a href="mailto:contact@cinuteinfomedia.com" className="hover:underline" style={styles.link}>
                                        contact@cinuteinfomedia.com
                                    </a>
                                </li>
                                <li className="flex items-start text-sm" style={styles.text}>
                                    <Phone className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: "var(--brand-teal)" }} />
                                    <div className="flex flex-col">
                                        <a href="tel:+919004988859" className="hover:underline" style={styles.link}>
                                            +91 9004988859
                                        </a>
                                        <a href="tel:+917700995410" className="hover:underline" style={styles.link}>
                                            +91 7700995410
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start text-sm" style={styles.text}>
                                    <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: "var(--brand-purple)" }} />
                                    <span>Office #3, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road, Mira Bhayandar, Mumbai, Maharashtra 401107</span>
                                </li>
                            </ul>

                            {/* CTA Button */}
                            <Link href="/contact" className="mt-6 inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105" style={{ background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))", color: "white" }}>
                                Start Your Project
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6" style={styles.containerBorder}>
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm" style={styles.text}>
                            © {year} CIM. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-6 text-sm">
                            <Link href="/privacy-policy" className="hover:underline" style={styles.link}>
                                Privacy Policy
                            </Link>
                            <span style={{ color: "var(--border-color)" }}>|</span>
                            <Link href="/terms-of-service" className="hover:underline" style={styles.link}>
                                Terms of Service
                            </Link>
                            <span style={{ color: "var(--border-color)" }}>|</span>
                            <Link href="/cookies-policy" className="hover:underline" style={styles.link}>
                                Cookies Policy
                            </Link>
                            <span style={{ color: "var(--border-color)" }}>|</span>
                            <Link href="/sitemap" className="hover:underline" style={styles.link}>
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
