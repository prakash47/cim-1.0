"use client";

import { Sparkles, TrendingUp, Target, BarChart3, Users, Zap } from "lucide-react";

export default function WhyChooseUs() {
    const benefits = [
        {
            icon: Target,
            title: "Platform-Specific Strategies",
            description: "We don't use a one-size-fits-all approach. Our experts develop unique strategies tailored to the nuances of each platform, maximizing your reach and impact.",
            color: "var(--brand-teal)",
        },
        {
            icon: BarChart3,
            title: "Data-Driven Campaigns",
            description: "Every decision is backed by analytics. We continuously test, measure, and refine campaigns to ensure optimal performance and cost-efficiency.",
            color: "var(--brand-teal)",
        },
        {
            icon: Sparkles,
            title: "Consistent Branding",
            description: "We ensure your voice, visuals, and values are perfectly aligned across all channels, reinforcing your brand identity and building trust.",
            color: "var(--brand-cyan)",
        },
        {
            icon: TrendingUp,
            title: "Growth-Focused Execution",
            description: "Our focus is always on your bottom line. We execute campaigns designed to scale your business and deliver a strong return on investment.",
            color: "var(--brand-teal)",
        },
        {
            icon: Users,
            title: "Community Management",
            description: "We build and nurture genuine communities around your brand, turning followers into loyal advocates and brand ambassadors.",
            color: "var(--brand-teal)",
        },
        {
            icon: Zap,
            title: "Real-Time Optimization",
            description: "We monitor campaigns 24/7 and make real-time adjustments to maximize performance, engagement, and conversion rates.",
            color: "var(--brand-cyan)",
        },
    ];

    return (
        <section
            className="px-6 md:px-12 xl:px-20 py-16 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div>
                {/* Header */}
                <div className="text-center mb-16 max-w-6xl mx-auto">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            background:
                                "linear-gradient(90deg, color-mix(in srgb, var(--brand-teal) 8%, transparent), color-mix(in srgb, var(--brand-teal) 8%, transparent))",
                            borderColor: "color-mix(in srgb, var(--brand-teal) 20%, transparent)",
                            color: "var(--brand-teal)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-semibold">Why Choose Us</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "var(--brand-teal)" }}>The Advantage</span> of Partnering with a Premier Social Media Management Company
                    </h2>

                    <div
                        className="w-24 h-1.5 mx-auto mb-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, var(--brand-teal), var(--brand-teal))",
                        }}
                    />

                    <p className="text-lg max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Choosing the right partner is crucial. Our results-oriented approach ensures your social media presence becomes a true business asset.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, idx) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={idx}
                                className="rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                                    style={{
                                        backgroundColor: `color-mix(in srgb, ${benefit.color} 15%, transparent)`,
                                    }}
                                >
                                    <Icon className="w-6 h-6" style={{ color: benefit.color }} />
                                </div>

                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {benefit.title}
                                </h3>

                                <p style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
