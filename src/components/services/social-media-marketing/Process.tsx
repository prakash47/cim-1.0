"use client";

import { Sparkles, Search, Calendar, Palette, Send, MessageSquare, TrendingUp } from "lucide-react";

export default function Process() {
    const steps = [
        {
            number: "01",
            icon: Search,
            title: "Strategy & Research",
            description: "Deep dive into your brand, audience, competitors, and industry trends to define clear, measurable goals.",
        },
        {
            number: "02",
            icon: Calendar,
            title: "Content Planning",
            description: "Developing a comprehensive content calendar, mapping out themes, formats, and messaging for the upcoming period.",
        },
        {
            number: "03",
            icon: Palette,
            title: "Creative Design",
            description: "Producing high-quality, on-brand visual assets and compelling copy tailored for each platform.",
        },
        {
            number: "04",
            icon: Send,
            title: "Publishing & Promotion",
            description: "Executing the content calendar and launching targeted paid social media advertising campaigns.",
        },
        {
            number: "05",
            icon: MessageSquare,
            title: "Engagement & Monitoring",
            description: "Actively managing comments, messages, and mentions, and tracking real-time performance metrics.",
        },
        {
            number: "06",
            icon: TrendingUp,
            title: "Optimization & Reporting",
            description: "Analyzing data, identifying areas for improvement, and providing monthly reports with clear insights.",
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
                        <span className="text-sm font-semibold">Our Process</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "var(--brand-teal)" }}>A Proven 6-Step Process</span> for Guaranteed Social Success
                    </h2>

                    <div
                        className="w-24 h-1.5 mx-auto mb-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, var(--brand-teal), var(--brand-teal))",
                        }}
                    />
                </div>

                {/* Process Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={idx}
                                className="rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg hover:scale-105 relative group"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                {/* Step Number Background */}
                                <div
                                    className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                                    style={{
                                        background: "linear-gradient(135deg, var(--brand-teal), var(--brand-teal))",
                                    }}
                                />

                                {/* Step Number */}
                                <div
                                    className="text-4xl font-bold mb-4"
                                    style={{
                                        background: "linear-gradient(90deg, var(--brand-teal), var(--brand-teal))",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                    style={{
                                        background: "linear-gradient(135deg, var(--brand-teal), var(--brand-teal))",
                                    }}
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
