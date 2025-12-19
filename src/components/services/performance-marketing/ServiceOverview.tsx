"use client";

import { useState } from "react";
import { MousePointerClick, RefreshCw, Share2, Layers, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function ServiceOverview() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const services = [
        {
            icon: MousePointerClick,
            title: "PPC Advertising",
            description: "Strategic pay-per-click campaigns on Google, Bing, and beyond that capture high-intent searchers ready to convert.",
            features: ["Keyword optimization", "Ad copy testing", "Bid management", "Quality score"],
            color: "#4285f4",
        },
        {
            icon: RefreshCw,
            title: "Retargeting & Remarketing",
            description: "Re-engage visitors who didn't convert with personalized ads across the web and social platforms.",
            features: ["Dynamic ads", "Audience segmentation", "Frequency capping", "Cross-device targeting"],
            color: "#ea4335",
        },
        {
            icon: Share2,
            title: "Paid Social Advertising",
            description: "Reach your ideal customers on Facebook, Instagram, LinkedIn, and TikTok with precision targeting.",
            features: ["Lookalike audiences", "Creative optimization", "A/B testing", "Conversion tracking"],
            color: "#34a853",
        },
        {
            icon: Layers,
            title: "Programmatic Advertising",
            description: "Automated, real-time bidding across thousands of websites for maximum reach and efficiency.",
            features: ["RTB technology", "DSP management", "Contextual targeting", "Brand safety"],
            color: "#fbbc04",
        },
    ];

    return (
        <section className="py-16 md:py-24 transition-colors duration-300" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-full border backdrop-blur-sm"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-orange) 10%, transparent)",
                            borderColor: "var(--brand-orange)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--brand-orange)" }} />
                        <span className="text-sm font-bold tracking-wide" style={{ color: "var(--brand-orange)" }}>
                            OUR SERVICES
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Full-Funnel <span style={{ color: "var(--brand-orange)" }}>Advertising Solutions</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        From awareness to conversion, we build integrated campaigns that drive measurable results at every stage.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const isHovered = hoveredIndex === index;

                        return (
                            <div
                                key={index}
                                className="group relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div
                                    className="relative p-5 sm:p-8 rounded-2xl transition-all duration-500 border overflow-hidden h-full"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--card-bg) 80%, transparent)",
                                        borderColor: isHovered ? service.color : "var(--border-color)",
                                        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                        boxShadow: isHovered ? `0 25px 50px -12px ${service.color}40` : "none",
                                    }}
                                >
                                    {/* Background gradient */}
                                    <div
                                        className="absolute inset-0 opacity-0 transition-opacity duration-500"
                                        style={{
                                            background: `radial-gradient(circle at top left, ${service.color}15, transparent 70%)`,
                                            opacity: isHovered ? 1 : 0,
                                        }}
                                    />

                                    <div className="relative z-10 flex flex-col md:flex-row gap-6">
                                        {/* Icon */}
                                        <div
                                            className="w-16 h-16 rounded-2xl p-4 flex-shrink-0 transition-all duration-500"
                                            style={{
                                                backgroundColor: `${service.color}20`,
                                                transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
                                            }}
                                        >
                                            <Icon className="w-full h-full" style={{ color: service.color }} />
                                        </div>

                                        <div className="flex-1">
                                            <h3
                                                className="text-xl font-bold mb-3 transition-colors duration-300"
                                                style={{ color: isHovered ? service.color : "var(--foreground)" }}
                                            >
                                                {service.title}
                                            </h3>
                                            <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
                                                {service.description}
                                            </p>

                                            {/* Features */}
                                            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
                                                {service.features.map((feature, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center gap-2 transition-all duration-300"
                                                        style={{
                                                            transform: isHovered ? "translateX(4px)" : "translateX(0)",
                                                            transitionDelay: `${idx * 50}ms`,
                                                        }}
                                                    >
                                                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: service.color }} />
                                                        <span className="text-xs font-medium">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom accent */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                                        style={{
                                            backgroundColor: service.color,
                                            width: isHovered ? "100%" : "0%",
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-lg"
                        style={{ backgroundColor: "var(--brand-orange)" }}
                    >
                        Start Your Campaign
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
