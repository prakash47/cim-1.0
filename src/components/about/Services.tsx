"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    Globe,
    Palette,
    Share2,
    Search,
    BarChart3,
    Zap,
    MessageSquare,
    Headphones,
    ArrowRight,
    Check
} from "lucide-react";

export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [gridCols, setGridCols] = useState(1);

    useEffect(() => {
        const updateGridCols = () => {
            if (window.innerWidth >= 1024) {
                setGridCols(3); // lg:grid-cols-3
            } else if (window.innerWidth >= 768) {
                setGridCols(2); // md:grid-cols-2
            } else {
                setGridCols(1); // grid-cols-1
            }
        };

        // Initial check
        updateGridCols();

        window.addEventListener("resize", updateGridCols);
        return () => window.removeEventListener("resize", updateGridCols);
    }, []);

    const services = [
        {
            Icon: Globe,
            title: "Websites & Web Apps",
            description: "Fast, conversion-ready, and responsive digital experiences",
            badgeGrad: "from-[var(--brand-blue)] to-[var(--brand-teal)]",
            brandText: "var(--brand-blue)",
            href: "/services/web-design-development",
            details: [
                "Custom Web Development",
                "High-Converting Landing Pages",
                "E-commerce Stores",
                "API Development & Integrations",
                "Performance Optimization",
                "SSL & Security"
            ]
        },
        {
            Icon: Palette,
            title: "Brand Identity & Creative Design",
            description: "Designs that help brands stand out and communicate value",
            badgeGrad: "from-[var(--brand-purple)] to-[var(--brand-yellow)]",
            brandText: "var(--brand-purple)",
            href: "/services/brand-identity-design",
            details: [
                "Logo & Brand Kits",
                "UI/UX Design",
                "Graphic Design",
                "Video Editing & Motion Graphics",
                "Brand Guidelines",
                "Marketing Collateral"
            ]
        },
        {
            Icon: Share2,
            title: "Social Media Marketing",
            description: "Content, community-building, and brand presence",
            badgeGrad: "from-[var(--brand-cyan)] to-[var(--brand-teal)]",
            brandText: "var(--brand-cyan)",
            href: "/services/social-media-marketing",
            details: [
                "Social Strategy & Content Calendar",
                "Short/Long Form Video Planning",
                "Static & Carousel Post Design",
                "Community Management",
                "Creator & Influencer Partnerships",
                "Social Listening & Insights"
            ]
        },
        {
            Icon: Search,
            title: "Organic Growth & SEO",
            description: "Data-driven strategies to improve visibility and ranking",
            badgeGrad: "from-[var(--brand-blue)] to-[var(--brand-purple)]",
            brandText: "var(--brand-blue)",
            href: "/services/organic-growth-seo",
            details: [
                "Website Audits",
                "On-Page Optimization",
                "Keyword Research",
                "Backlink Building",
                "Local SEO & GMB",
                "E-commerce SEO"
            ]
        },
        {
            Icon: BarChart3,
            title: "Performance Marketing & Ads",
            description: "Meta, Google & LinkedIn campaigns focused on leads",
            badgeGrad: "from-[var(--brand-orange)] to-[var(--brand-yellow)]",
            brandText: "var(--brand-orange)",
            href: "/services/performance-marketing",
            details: [
                "Meta, Google, LinkedIn Ads",
                "Retargeting",
                "Lead Funnel Strategy",
                "Pixel/Analytics Setup",
                "Campaign Performance Reports",
                "A/B Testing & Optimization"
            ]
        },
        {
            Icon: Zap,
            title: "AI Workflows & Automations",
            description: "CRM, reporting, nurturing & operational automation",
            badgeGrad: "from-[var(--brand-yellow)] to-[var(--brand-orange)]",
            brandText: "var(--brand-yellow)",
            href: "/services/ai-workflows-automations",
            details: [
                "Setup & Integration",
                "Full-Funnel Lead Nurturing",
                "Meta DPA Automations",
                "Google Apps Script",
                "WhatsApp (WACA) Automations",
                "Reporting Dashboards"
            ]
        },
        {
            Icon: MessageSquare,
            title: "AI-Powered Chatbots",
            description: "24/7 smart assistants for lead generation & support",
            badgeGrad: "from-[var(--brand-teal)] to-[var(--brand-cyan)]",
            brandText: "var(--brand-teal)",
            href: "/services/ai-powered-chatbots",
            details: [
                "AI Sales Agents",
                "Multilingual Chatbots",
                "AI Surveys & Feedback",
                "Lead Enrichment Bots",
                "Custom Training",
                "Platform Integration"
            ]
        },
        {
            Icon: Headphones,
            title: "Additional Support Services",
            description: "Analytics, virtual assistance & backend operations",
            badgeGrad: "from-[var(--brand-cyan)] to-[var(--brand-purple)]",
            brandText: "var(--brand-cyan)",
            href: "/services/additional-support-services",
            details: [
                "Data Processing & Analysis",
                "Virtual Assistance",
                "Customer Support",
                "Administrative Tasks",
                "Research & Documentation",
                "Quality Assurance"
            ]
        }
    ];

    return (
        <section className="py-16 lg:py-24 transition-colors duration-300 bg-[var(--background)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <div
                        className="
              inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border
              bg-[linear-gradient(90deg,rgba(188,63,235,0.08),rgba(250,185,0,0.06))]
              border-[rgba(188,63,235,0.12)]
              text-[var(--brand-purple)]
            "
                    >
                        <Zap className="w-4 h-4" />
                        <span className="text-sm font-semibold">Our Services</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[var(--foreground)]">
                        What We Do
                    </h2>

                    <div
                        className="w-28 h-1.5 mx-auto mb-6 rounded-full bg-[linear-gradient(90deg,var(--brand-purple),var(--brand-yellow))]"
                    />

                    <p className="text-xl text-[var(--secondary-text)] max-w-3xl mx-auto">
                        Full-spectrum marketing and technology services under one roof
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((svc, idx) => {
                        const { Icon, title, description, badgeGrad, brandText, details, href } = svc;

                        // Calculate active row
                        const hoveredRow = hoveredIndex !== null ? Math.floor(hoveredIndex / gridCols) : null;
                        const currentRow = Math.floor(idx / gridCols);

                        // Expand if any card in the same row is hovered
                        const isExpanded = hoveredRow === currentRow;
                        const isHovered = hoveredIndex === idx;

                        return (
                            <article
                                key={title}
                                className={`
                  group relative rounded-3xl overflow-hidden border transition-all duration-400
                  bg-[var(--card-bg)] border-[var(--border-color)]
                  ${isExpanded ? "shadow-2xl -translate-y-2 scale-[1.02] z-20 min-h-[420px]" : "shadow-sm min-h-[220px]"}
                `}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                aria-labelledby={`svc-${idx}`}
                            >
                                {/* subtle color glow on hover/expanded */}
                                <div className={`absolute inset-0 pointer-events-none transition-opacity duration-200 ${isExpanded ? "opacity-12" : "opacity-0"} bg-gradient-to-br ${badgeGrad}`} />

                                {/* Card content */}
                                <div className="relative p-8 h-full flex flex-col">
                                    {/* icon + title */}
                                    <div className="flex items-start gap-4">
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center p-3 flex-shrink-0 bg-gradient-to-br ${badgeGrad} shadow`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>

                                        <div className="flex-1">
                                            <h3
                                                id={`svc-${idx}`}
                                                className="text-lg font-bold text-[var(--foreground)]"
                                            >
                                                {title}
                                            </h3>
                                            <p className="mt-2 text-sm text-[var(--secondary-text)]">
                                                {description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* spacer */}
                                    <div className="flex-1" />

                                    {/* details container - collapsed by default, expands on row hover */}
                                    <div className={`mt-4 overflow-hidden transition-all duration-400 ${isExpanded ? "max-h-[320px]" : "max-h-0"}`}>
                                        <ul className="space-y-2">
                                            {details.map((d, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-[var(--secondary-text)]">
                                                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-white bg-gradient-to-br ${badgeGrad} flex-shrink-0`}>
                                                        <Check className="w-3 h-3" />
                                                    </span>
                                                    <span>{d}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-4">
                                            <Link href={href} className={`w-full py-2.5 px-4 rounded-xl text-white font-semibold text-sm bg-gradient-to-r ${badgeGrad} hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}>
                                                View Details
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* floating glow behind (for depth) */}
                                <div className={`absolute -inset-1 rounded-3xl blur-xl -z-10 transition-opacity duration-400 ${isExpanded ? "opacity-30" : "opacity-0"} bg-gradient-to-r ${badgeGrad}`} />
                            </article>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-[var(--secondary-text)] mb-6">Need a custom solution? We'd love to help.</p>

                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-2xl text-sm md:text-base font-semibold bg-[linear-gradient(90deg,var(--brand-blue),var(--brand-teal))] text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        Get Started
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
