"use client";

import { Sparkles, TrendingUp, Target, BarChart3, Users, Zap, Award, Shield } from "lucide-react";

export default function WhyChooseUs() {
    const benefits = [
        {
            icon: Target,
            title: "Platform-Specific Strategies",
            description: "We don't use a one-size-fits-all approach. Our experts develop unique strategies tailored to the nuances of each platform, maximizing your reach and impact.",
            color: "var(--brand-teal)",
            gradient: "linear-gradient(135deg, var(--brand-teal), var(--brand-cyan))",
        },
        {
            icon: BarChart3,
            title: "Data-Driven Campaigns",
            description: "Every decision is backed by analytics. We continuously test, measure, and refine campaigns to ensure optimal performance and cost-efficiency.",
            color: "var(--brand-teal)",
            gradient: "linear-gradient(135deg, var(--brand-teal), var(--brand-cyan))",
        },
        {
            icon: Sparkles,
            title: "Consistent Branding",
            description: "We ensure your voice, visuals, and values are perfectly aligned across all channels, reinforcing your brand identity and building trust.",
            color: "var(--brand-cyan)",
            gradient: "linear-gradient(135deg, var(--brand-cyan), var(--brand-teal))",
        },
        {
            icon: TrendingUp,
            title: "Growth-Focused Execution",
            description: "Our focus is always on your bottom line. We execute campaigns designed to scale your business and deliver a strong return on investment.",
            color: "var(--brand-teal)",
            gradient: "linear-gradient(135deg, var(--brand-teal), var(--brand-cyan))",
        },
        {
            icon: Users,
            title: "Community Management",
            description: "We build and nurture genuine communities around your brand, turning followers into loyal advocates and brand ambassadors.",
            color: "var(--brand-teal)",
            gradient: "linear-gradient(135deg, var(--brand-teal), var(--brand-cyan))",
        },
        {
            icon: Zap,
            title: "Real-Time Optimization",
            description: "We monitor campaigns 24/7 and make real-time adjustments to maximize performance, engagement, and conversion rates.",
            color: "var(--brand-cyan)",
            gradient: "linear-gradient(135deg, var(--brand-cyan), var(--brand-teal))",
        },
    ];

    return (
        <section
            className="px-6 md:px-12 xl:px-20 py-16 transition-colors duration-300 relative overflow-hidden"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl opacity-10"
                    style={{ background: "var(--brand-teal)" }}
                />
                <div
                    className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-10"
                    style={{ background: "var(--brand-cyan)" }}
                />
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-6xl mx-auto">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border backdrop-blur-sm"
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
                            background: "linear-gradient(90deg, var(--brand-teal), var(--brand-cyan))",
                        }}
                    />

                    <p className="text-lg max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Choosing the right partner is crucial. Our results-oriented approach ensures your social media presence becomes a true business asset.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {benefits.map((benefit, idx) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={idx}
                                className="relative rounded-2xl p-8 border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group overflow-hidden"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                {/* Gradient overlay on hover */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                                    style={{ background: benefit.gradient }}
                                />

                                {/* Animated corner accent */}
                                <div
                                    className="absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-2xl"
                                    style={{ backgroundColor: benefit.color }}
                                />

                                <div className="relative z-10">
                                    {/* Icon container with gradient background */}
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative"
                                        style={{
                                            background: benefit.gradient,
                                        }}
                                    >
                                        <Icon className="w-7 h-7 text-white" />

                                        {/* Glow effect */}
                                        <div
                                            className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                                            style={{ backgroundColor: benefit.color }}
                                        />
                                    </div>

                                    <h3
                                        className="text-xl font-bold mb-3 group-hover:text-[var(--brand-teal)] transition-colors duration-300"
                                        style={{ color: "var(--foreground)" }}
                                    >
                                        {benefit.title}
                                    </h3>

                                    <p style={{ color: "var(--secondary-text)", lineHeight: "1.7" }}>
                                        {benefit.description}
                                    </p>

                                    {/* Bottom accent line */}
                                    <div
                                        className="mt-6 h-1 w-0 group-hover:w-16 transition-all duration-500 rounded-full"
                                        style={{ background: benefit.gradient }}
                                    />
                                </div>

                                {/* Decorative dots */}
                                <div className="absolute bottom-4 right-4 flex gap-1 opacity-20">
                                    <div className="w-1 h-1 rounded-full" style={{ backgroundColor: benefit.color }} />
                                    <div className="w-1 h-1 rounded-full" style={{ backgroundColor: benefit.color }} />
                                    <div className="w-1 h-1 rounded-full" style={{ backgroundColor: benefit.color }} />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA or badge */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border backdrop-blur-sm"
                        style={{
                            background: "color-mix(in srgb, var(--brand-teal) 5%, transparent)",
                            borderColor: "color-mix(in srgb, var(--brand-teal) 20%, transparent)",
                        }}
                    >
                        <Award className="w-5 h-5" style={{ color: "var(--brand-teal)" }} />
                        <span className="font-semibold" style={{ color: "var(--foreground)" }}>
                            Trusted by 500+ Growing Businesses
                        </span>
                        <Shield className="w-5 h-5" style={{ color: "var(--brand-teal)" }} />
                    </div>
                </div>
            </div>
        </section>
    );
}