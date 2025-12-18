"use client";

import { Brain, Zap, Lock, BarChart3 } from "lucide-react";

export default function Technologies() {
    const capabilities = [
        {
            icon: Brain,
            title: "LLMs & Natural Language Processing",
            description: "Powered by state-of-the-art large language models and advanced NLP techniques for human-like conversations.",
            details: ["GPT-4 & Claude integration", "Semantic understanding", "Context retention", "Intent classification"],
        },
        {
            icon: Zap,
            title: "API Integrations",
            description: "Seamlessly connect with your existing systems, databases, and third-party services.",
            details: ["REST & GraphQL APIs", "Webhook support", "Real-time data sync", "Custom integrations"],
        },
        {
            icon: Lock,
            title: "Security & Data Privacy",
            description: "Enterprise-grade security with full compliance to industry standards and regulations.",
            details: ["End-to-end encryption", "GDPR & CCPA compliant", "Data anonymization", "Regular security audits"],
        },
        {
            icon: BarChart3,
            title: "Analytics & Learning Loops",
            description: "Comprehensive analytics and continuous learning mechanisms to improve performance over time.",
            details: ["Conversation analytics", "User behavior tracking", "Performance metrics", "Automated optimization"],
        },
    ];

    return (
        <section
            className="relative transition-colors duration-300 py-20 md:py-28"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Technology Stack & <span style={{ color: "var(--brand-chatbot)" }}>AI Capabilities</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We leverage cutting-edge AI technologies and best practices to build intelligent, scalable chatbots.
                    </p>
                </div>

                {/* Capabilities Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {capabilities.map((capability, index) => {
                        const Icon = capability.icon;
                        return (
                            <div
                                key={index}
                                className="group p-8 rounded-2xl transition-all duration-300 border"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                                    borderColor: "var(--border-color)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--brand-chatbot) 5%, var(--card-bg))";
                                    e.currentTarget.style.borderColor = "var(--brand-chatbot)";
                                    e.currentTarget.style.transform = "translateY(-4px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--card-bg) 50%, transparent)";
                                    e.currentTarget.style.borderColor = "var(--border-color)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                {/* Icon */}
                                <div
                                    className="w-16 h-16 rounded-xl p-3 mb-6 group-hover:scale-110 transition-transform"
                                    style={{
                                        background: "linear-gradient(135deg, var(--brand-chatbot), var(--brand-blue))",
                                    }}
                                >
                                    <Icon className="w-full h-full text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {capability.title}
                                </h3>

                                {/* Description */}
                                <p className="mb-6" style={{ color: "var(--secondary-text)" }}>
                                    {capability.description}
                                </p>

                                {/* Details */}
                                <ul className="space-y-2">
                                    {capability.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--brand-chatbot)" }} />
                                            <span className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                                {detail}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                {/* Tech Stack Highlight */}
                <div className="mt-16 p-8 rounded-2xl border"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Supported Platforms & Channels
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            "Web Chat",
                            "WhatsApp Business",
                            "Facebook Messenger",
                            "Telegram",
                            "Slack",
                            "Microsoft Teams",
                            "Custom Integrations",
                            "Mobile Apps",
                        ].map((platform, idx) => (
                            <div
                                key={idx}
                                className="p-4 rounded-lg text-center transition-all duration-300"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-chatbot) 8%, transparent)",
                                    border: "1px solid var(--border-color)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--brand-chatbot) 15%, transparent)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--brand-chatbot) 8%, transparent)";
                                }}
                            >
                                <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                    {platform}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
