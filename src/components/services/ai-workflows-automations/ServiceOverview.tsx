"use client";

import { Zap, Cpu, TrendingUp, Shield } from "lucide-react";

export default function ServiceOverview() {
    const benefits = [
        {
            icon: Zap,
            title: "Process Automation",
            description: "Streamline repetitive tasks and eliminate manual work with intelligent automation workflows that run 24/7.",
        },
        {
            icon: Cpu,
            title: "Operational Efficiency",
            description: "Reduce operational costs by automating complex business processes and improving resource allocation.",
        },
        {
            icon: TrendingUp,
            title: "Cost Reduction",
            description: "Achieve significant savings through reduced labor costs, fewer errors, and optimized resource utilization.",
        },
        {
            icon: Shield,
            title: "Intelligent Decision-Making",
            description: "Leverage AI-driven insights to make data-backed decisions faster and with greater accuracy.",
        },
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeIn" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                        What Are <span style={{ color: "var(--brand-orange)" }}>AI Workflows & Automations?</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        AI Workflows & Automations represent the intersection of intelligent technology and business optimization. By combining artificial intelligence with workflow automation, we help organizations transform their operations into intelligent, self-optimizing systems that work smarter, not harder.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg border animate-fadeIn"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                    animationDelay: `${0.2 + index * 0.1}s`,
                                    animationFillMode: "both",
                                }}
                            >
                                <div
                                    className="w-12 h-12 rounded-lg p-2.5 mb-4 flex items-center justify-center"
                                    style={{
                                        background: "linear-gradient(135deg, var(--brand-orange), var(--brand-orange))",
                                    }}
                                >
                                    <Icon className="w-full h-full text-white" />
                                </div>
                                <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                                <p style={{ color: "var(--secondary-text)" }}>{benefit.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Deep Dive Section */}
                <div className="mt-16 p-8 rounded-2xl border animate-fadeIn"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                        borderColor: "var(--border-color)",
                        animationDelay: "0.6s",
                        animationFillMode: "both",
                    }}
                >
                    <h3 className="text-2xl font-bold mb-4">Why AI Automation Matters</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-semibold mb-2" style={{ color: "var(--brand-orange)" }}>For Enterprises</h4>
                            <p style={{ color: "var(--secondary-text)" }}>
                                Large organizations face complex processes across multiple departments. AI automation enables seamless integration, real-time monitoring, and predictive insights that drive strategic growth and competitive advantage.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2" style={{ color: "var(--brand-orange)" }}>For Growing Businesses</h4>
                            <p style={{ color: "var(--secondary-text)" }}>
                                Scale your operations without proportionally increasing headcount. AI workflows handle increasing volumes of work while maintaining quality and consistency, allowing your team to focus on high-value activities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
