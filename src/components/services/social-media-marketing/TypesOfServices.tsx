"use client";

import { Sparkles, Leaf, Zap, Users, Calendar, TrendingUp, BarChart3 } from "lucide-react";

export default function TypesOfServices() {
    const services = [
        {
            icon: Leaf,
            title: "Organic Social Media Marketing",
            description: "Building genuine, lasting connections with your audience through high-quality, non-promoted content. This is the foundation of brand loyalty and organic community growth.",
        },
        {
            icon: Zap,
            title: "Paid Social Media Advertising",
            description: "Targeted, high-impact campaigns across platforms to drive immediate results. Our expertise ensures your budget is spent efficiently to maximize leads and sales.",
        },
        {
            icon: Users,
            title: "Influencer Marketing",
            description: "Leveraging trusted voices in your industry to promote your brand authentically, expanding your reach to highly engaged, niche audiences.",
        },
        {
            icon: Calendar,
            title: "Content Creation & Scheduling",
            description: "Developing visually engaging and contextually relevant content (graphics, videos, copy) and scheduling it for optimal posting times to capture maximum audience attention.",
        },
        {
            icon: TrendingUp,
            title: "Social Media Management",
            description: "Full-service handling of your social channels, including profile optimization, daily posting, and brand monitoring, allowing you to focus on your core business.",
        },
        {
            icon: Users,
            title: "Community Engagement & Growth",
            description: "Proactive interaction with followers, responding to comments and messages, and implementing strategies to organically grow your follower base with qualified leads.",
        },
        {
            icon: BarChart3,
            title: "Analytics & Reporting",
            description: "Continuous monitoring of key performance indicators (KPIs) and providing transparent, actionable reports to refine strategy and prove ROI.",
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
                        <span className="text-sm font-semibold">Types of Social Media Marketing</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "var(--brand-teal)" }}>Comprehensive Social Media Solutions</span> for Every Business Need
                    </h2>

                    <div
                        className="w-24 h-1.5 mx-auto mb-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, var(--brand-teal), var(--brand-teal))",
                        }}
                    />

                    <p className="text-lg max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We cover the full spectrum of social media activities to ensure a holistic and effective strategy tailored to your unique business goals.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={idx}
                                className="rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg hover:scale-105"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                    style={{
                                        background: "linear-gradient(135deg, var(--brand-teal), var(--brand-teal))",
                                    }}
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </div>

                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {service.title}
                                </h3>

                                <p style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
