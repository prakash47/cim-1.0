"use client";

import { Zap, Smartphone, Eye, Lock, Gauge, Accessibility } from "lucide-react";

export default function SEOPerformance() {
    const features = [
        {
            icon: Gauge,
            title: "Core Web Vitals Optimization",
            description: "We optimize for Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) to meet Google's performance standards.",
            items: ["LCP < 2.5s", "FID < 100ms", "CLS < 0.1", "Mobile-first approach"],
            color: "from-[#fab900] to-[#ee6500]",
        },
        {
            icon: Smartphone,
            title: "Responsive Web Design",
            description: "Our mobile-first approach guarantees a perfect experience on any device, a critical ranking factor for search engines.",
            items: ["Mobile optimization", "Tablet compatibility", "Desktop perfection", "Touch-friendly UI"],
            color: "from-[#00efd6] to-[#00b5ca]",
        },
        {
            icon: Eye,
            title: "Semantic HTML & H-Tags",
            description: "Proper use of H1, H2, and H3 tags ensures search engines correctly understand your content hierarchy and keyword focus.",
            items: ["Proper heading hierarchy", "Schema markup", "Semantic structure", "Keyword optimization"],
            color: "from-[#008ac1] to-[#bc3feb]",
        },
        {
            icon: Zap,
            title: "Technical SEO Foundation",
            description: "Strategic placement of keywords like Web Design Services, Web Development Company, and Custom Website Development within content and meta tags.",
            items: ["Meta optimization", "Keyword targeting", "Internal linking", "Sitemap generation"],
            color: "from-[#bc3feb] to-[#fab900]",
        },
        {
            icon: Accessibility,
            title: "Accessibility (A11Y)",
            description: "Adherence to WCAG guidelines for an inclusive and compliant user experience that benefits both users and SEO.",
            items: ["WCAG 2.1 AA compliance", "Screen reader support", "Keyboard navigation", "Color contrast"],
            color: "from-[#ee6500] to-[#fab900]",
        },
        {
            icon: Lock,
            title: "Security & Trust Signals",
            description: "SSL certificates, secure headers, and best practices that build trust with users and search engines.",
            items: ["SSL/TLS encryption", "Security headers", "HTTPS everywhere", "Trust badges"],
            color: "from-[#008ac1] to-[#00b5ca]",
        },
    ];

    return (
        <section
            className="relative overflow-hidden py-10 lg:py-20 transition-colors duration-300"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-blue) 12%, transparent)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-cyan) 12%, transparent)",
                        animationDelay: "1s",
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-teal) 12%, transparent)",
                        animationDelay: "2s",
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ fontWeight: 700, color: "var(--brand-blue)" }}>Technical SEO</span> <span style={{ fontWeight: 700, color: "var(--foreground)" }}>and Performance</span>
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        We ensure your website is a high-performing asset from day one. Our focus on technical SEO and speed is integral to our <span style={{ fontWeight: 700, color: "var(--brand-blue)" }}>Web Design Services</span>.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))",
                        }}
                    />
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={idx}
                                className="group rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg hover:-translate-y-2 h-full"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                {/* Icon */}
                                <div
                                    className={`w-14 h-14 rounded-xl flex items-center justify-center p-3 mb-6 bg-gradient-to-br ${feature.color} shadow-lg group-hover:scale-110 transition-transform`}
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm mb-6" style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>
                                    {feature.description}
                                </p>

                                {/* Items */}
                                <ul className="space-y-2">
                                    {feature.items.map((item, iidx) => (
                                        <li key={iidx} className="flex items-start gap-2 text-sm">
                                            <span
                                                className={`w-4 h-4 rounded-full flex-shrink-0 mt-0.5 bg-gradient-to-br ${feature.color}`}
                                            />
                                            <span style={{ color: "var(--secondary-text)" }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                {/* Performance Metrics */}
                <div
                    className="rounded-2xl p-8 md:p-12 border mb-16"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    <h3 className="text-2xl font-bold mb-8" style={{ color: "var(--foreground)" }}>
                        Our Performance Standards
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { label: "Page Speed", value: "< 2s" },
                            { label: "Lighthouse Score", value: "95+" },
                            { label: "Mobile Score", value: "90+" },
                            { label: "SEO Score", value: "100" },
                        ].map((metric, idx) => (
                            <div key={idx} className="text-center">
                                <div
                                    className="text-4xl font-bold mb-2"
                                    style={{
                                        background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    {metric.value}
                                </div>
                                <p style={{ color: "var(--secondary-text)" }}>{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <p className="text-lg mb-8" style={{ color: "var(--secondary-text)" }}>
                        Ready to build a website that performs? Let's create something exceptional together.
                    </p>

                    <button
                        className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-2xl text-sm md:text-base font-semibold bg-gradient-to-r from-[#008ac1] to-[#00b5ca] text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                        Get Started Today
                        <span>→</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
