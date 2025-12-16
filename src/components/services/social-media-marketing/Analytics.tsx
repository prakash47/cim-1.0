"use client";

import { Sparkles, TrendingUp, Users, Target, BarChart3, Zap } from "lucide-react";

export default function Analytics() {
    const metrics = [
        {
            icon: Target,
            title: "KPI Tracking",
            description: "Monitoring core metrics like Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), and Customer Lifetime Value (CLV).",
            color: "var(--brand-teal)",
        },
        {
            icon: Users,
            title: "Engagement Metrics",
            description: "Tracking likes, shares, comments, and save rates to gauge content resonance and audience loyalty.",
            color: "var(--brand-teal)",
        },
        {
            icon: BarChart3,
            title: "Lead & Conversion Tracking",
            description: "Implementing robust tracking to attribute leads, sales, and sign-ups directly to social media campaigns.",
            color: "var(--brand-cyan)",
        },
        {
            icon: TrendingUp,
            title: "Campaign Optimization",
            description: "Continuous A/B testing of creatives, audiences, and ad copy to ensure peak campaign efficiency.",
            color: "var(--brand-teal)",
        },
        {
            icon: Zap,
            title: "Monthly Reporting",
            description: "Providing clear, executive-level reports that translate complex data into actionable business insights.",
            color: "var(--brand-teal)",
        },
        {
            icon: BarChart3,
            title: "ROI Optimization",
            description: "Continuous refinement of strategies based on performance data to maximize your return on investment.",
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
                        <span className="text-sm font-semibold">Analytics & Performance</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "var(--brand-teal)" }}>Measuring What Matters:</span> Transparent Performance and Real ROI
                    </h2>

                    <div
                        className="w-24 h-1.5 mx-auto mb-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, var(--brand-teal), var(--brand-teal))",
                        }}
                    />

                    <p className="text-lg max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We believe in full transparency. Our reporting focuses on metrics that directly impact your business goals.
                    </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {metrics.map((metric, idx) => {
                        const Icon = metric.icon;
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
                                        backgroundColor: `color-mix(in srgb, ${metric.color} 15%, transparent)`,
                                    }}
                                >
                                    <Icon className="w-6 h-6" style={{ color: metric.color }} />
                                </div>

                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {metric.title}
                                </h3>

                                <p style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>
                                    {metric.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
