"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Globe,
    Smartphone,
    Share2,
    Workflow,
    Bot,
    Search,
    Target,
    Palette,
    Wrench,
    ArrowRight,
    CheckCircle2
} from 'lucide-react';

const services = [
    {
        icon: Globe,
        title: "Web Design & Development",
        slug: "web-design-development",
        description: "Create stunning, high-performance websites that captivate users and drive conversions.",
        features: ["Responsive Design", "SEO Optimized", "Next.js / React"],
        gradient: "linear-gradient(135deg, var(--brand-cyan), var(--brand-blue))",
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        slug: "mobile-app-development",
        description: "Build native and cross-platform mobile apps that deliver exceptional user experiences.",
        features: ["iOS & Android", "React Native", "Flutter"],
        gradient: "linear-gradient(135deg, var(--brand-purple), var(--brand-blue))",
    },
    {
        icon: Share2,
        title: "Social Media Marketing",
        slug: "social-media-marketing",
        description: "Grow your brand presence and engage your audience across all social platforms.",
        features: ["Content Strategy", "Community Management", "Analytics"],
        gradient: "linear-gradient(135deg, var(--brand-orange), var(--brand-purple))",
    },
    {
        icon: Workflow,
        title: "AI Workflows & Automations",
        slug: "ai-workflows-automations",
        description: "Streamline operations with intelligent automation and workflow optimization.",
        features: ["Process Automation", "Custom Integrations", "n8n / Zapier"],
        gradient: "linear-gradient(135deg, var(--brand-purple), var(--brand-cyan))",
    },
    {
        icon: Bot,
        title: "AI-Powered Chatbots",
        slug: "ai-powered-chatbots",
        description: "Deploy intelligent chatbots that enhance customer experience and reduce support costs.",
        features: ["24/7 Support", "Lead Qualification", "NLP Integration"],
        gradient: "linear-gradient(135deg, var(--brand-cyan), var(--brand-teal))",
    },
    {
        icon: Search,
        title: "Organic Growth & SEO",
        slug: "organic-growth-seo",
        description: "Boost your search rankings and drive sustainable organic traffic to your website.",
        features: ["Technical SEO", "Content Strategy", "Link Building"],
        gradient: "linear-gradient(135deg, var(--brand-yellow), var(--brand-orange))",
    },
    {
        icon: Target,
        title: "Performance Marketing",
        slug: "performance-marketing",
        description: "Maximize ROI with data-driven paid advertising campaigns across platforms.",
        features: ["Google Ads", "Meta Ads", "Conversion Optimization"],
        gradient: "linear-gradient(135deg, var(--brand-orange), var(--brand-purple))",
    },
    {
        icon: Palette,
        title: "Brand Identity & Design",
        slug: "brand-identity-design",
        description: "Create a memorable brand identity that resonates with your target audience.",
        features: ["Logo Design", "Visual Identity", "Brand Guidelines"],
        gradient: "linear-gradient(135deg, var(--brand-purple), var(--brand-orange))",
    },
    {
        icon: Wrench,
        title: "Additional Support Services",
        slug: "additional-support-services",
        description: "Comprehensive support and maintenance to keep your digital assets running smoothly.",
        features: ["24/7 Monitoring", "Regular Updates", "SLA Support"],
        gradient: "linear-gradient(135deg, var(--brand-blue), var(--brand-teal))",
    },
];

export default function ServicesList() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="services-list" className="py-20" style={{ backgroundColor: "var(--card-bg)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-24">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "var(--foreground)" }}>
                        Our{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, var(--brand-purple), var(--brand-cyan))",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            Services
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Comprehensive digital solutions tailored to accelerate your business growth
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const isHovered = hoveredIndex === index;

                        return (
                            <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="group relative block"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <article
                                    className="relative h-full p-8 rounded-2xl border transition-all duration-500 overflow-hidden"
                                    style={{
                                        backgroundColor: "var(--background)",
                                        borderColor: isHovered ? "transparent" : "var(--border-color)",
                                        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                        boxShadow: isHovered ? "0 25px 50px -12px rgba(0, 0, 0, 0.15)" : "none",
                                    }}
                                >
                                    {/* Background gradient on hover */}
                                    <div
                                        className="absolute inset-0 transition-opacity duration-500"
                                        style={{
                                            background: service.gradient,
                                            opacity: isHovered ? 0.05 : 0,
                                            borderRadius: 16,
                                        }}
                                    />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div
                                            className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-transform duration-300 group-hover:scale-110"
                                            style={{ background: service.gradient }}
                                        >
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[var(--brand-purple)]" style={{ color: "var(--foreground)" }}>
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm mb-5" style={{ color: "var(--secondary-text)", lineHeight: 1.7 }}>
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <ul className="space-y-2 mb-6">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm">
                                                    <CheckCircle2
                                                        className="w-4 h-4 flex-shrink-0"
                                                        style={{ color: "var(--brand-cyan)" }}
                                                    />
                                                    <span style={{ color: "var(--secondary-text)" }}>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Learn More */}
                                        <div
                                            className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                                            style={{ color: "var(--brand-purple)" }}
                                        >
                                            Learn More
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
