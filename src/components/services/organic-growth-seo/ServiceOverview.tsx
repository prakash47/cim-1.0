"use client";

import { Eye, Globe, TrendingUp, Users, CheckCircle2, ArrowRight } from "lucide-react";

export default function ServiceOverview() {
    const features = [
        {
            icon: Eye,
            title: "Long-Term Visibility",
            description: "We build a robust foundation that ensures your brand remains visible and relevant in search results for years to come.",
        },
        {
            icon: TrendingUp,
            title: "Sustainable Traffic",
            description: "Focusing on high-quality, organic traffic sources that provide consistent, reliable growth without continuous ad spend.",
        },
        {
            icon: Users,
            title: "High-Intent Leads",
            description: "Targeting users actively searching for your solutions, resulting in higher conversion rates and efficient sales funnels.",
        },
        {
            icon: Globe,
            title: "Brand Authority",
            description: "Establishing your website as a trusted, authoritative source in your industry through expert content and strategic link building.",
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
                            backgroundColor: "color-mix(in srgb, var(--brand-seo) 10%, transparent)",
                            borderColor: "var(--brand-seo)",
                        }}
                    >
                        <TrendingUp className="w-4 h-4" style={{ color: "var(--brand-seo)" }} />
                        <span className="text-sm font-bold tracking-wide" style={{ color: "var(--brand-seo)" }}>
                            ORGANIC GROWTH
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        The Power of <span style={{ color: "var(--brand-seo)" }}>Organic Growth</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Organic Growth and SEO are not just marketing tactics—they are a fundamental business strategy for long-term visibility and sustainable traffic.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="group p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--card-bg) 80%, transparent)",
                                    borderColor: "var(--border-color)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = "var(--brand-seo)";
                                    e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--brand-seo) 5%, var(--card-bg))";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = "var(--border-color)";
                                    e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--card-bg) 80%, transparent)";
                                }}
                            >
                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-xl p-3 mb-5 group-hover:scale-110 transition-transform"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-seo) 15%, transparent)",
                                    }}
                                >
                                    <Icon className="w-full h-full" style={{ color: "var(--brand-seo)" }} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--brand-seo)] transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div
                        className="inline-flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 rounded-2xl border"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-seo) 5%, var(--card-bg))",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-6 h-6" style={{ color: "var(--brand-seo)" }} />
                            <span className="text-lg font-semibold">Ready to grow organically?</span>
                        </div>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transition-transform"
                            style={{ backgroundColor: "var(--brand-seo)" }}
                        >
                            Get Started
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
