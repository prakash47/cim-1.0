"use client";

import { Zap, Cpu, TrendingUp, Shield, Workflow, Clock, Target, Sparkles } from "lucide-react";

export default function ServiceOverview() {
    const benefits = [
        {
            icon: Workflow,
            title: "Process Automation",
            description: "Streamline repetitive tasks and eliminate manual work with intelligent automation workflows that run 24/7.",
            gradient: "from-blue-500 to-cyan-500",
            iconBg: "bg-blue-500/10",
            iconColor: "text-blue-500",
        },
        {
            icon: Cpu,
            title: "Operational Efficiency",
            description: "Reduce operational costs by automating complex business processes and improving resource allocation.",
            gradient: "from-purple-500 to-pink-500",
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-500",
        },
        {
            icon: TrendingUp,
            title: "Cost Reduction",
            description: "Achieve significant savings through reduced labor costs, fewer errors, and optimized resource utilization.",
            gradient: "from-green-500 to-emerald-500",
            iconBg: "bg-green-500/10",
            iconColor: "text-green-500",
        },
        {
            icon: Sparkles,
            title: "Intelligent Decision-Making",
            description: "Leverage AI-driven insights to make data-backed decisions faster and with greater accuracy.",
            gradient: "from-orange-500 to-amber-500",
            iconBg: "bg-orange-500/10",
            iconColor: "text-orange-500",
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
                                className="group relative p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 border animate-fadeIn overflow-hidden"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                    animationDelay: `${0.2 + index * 0.1}s`,
                                    animationFillMode: "both",
                                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                }}
                            >
                                {/* Gradient overlay on hover */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                />

                                {/* Icon container with enhanced styling */}
                                <div className="relative mb-5">
                                    <div
                                        className={`w-14 h-14 rounded-xl ${benefit.iconBg} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                                    >
                                        <Icon className={`w-7 h-7 ${benefit.iconColor}`} strokeWidth={2} />
                                    </div>
                                    {/* Decorative dot */}
                                    <div
                                        className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${benefit.iconBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                    />
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold mb-3 transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                    {benefit.description}
                                </p>

                                {/* Bottom accent line */}
                                <div
                                    className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${benefit.gradient} group-hover:w-full transition-all duration-500`}
                                />
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
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                            <Target className="w-5 h-5 text-orange-500" />
                        </div>
                        <h3 className="text-2xl font-bold">Why AI Automation Matters</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5" style={{ color: "var(--brand-orange)" }} />
                                <h4 className="font-semibold" style={{ color: "var(--brand-orange)" }}>For Enterprises</h4>
                            </div>
                            <p className="leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                Large organizations face complex processes across multiple departments. AI automation enables seamless integration, real-time monitoring, and predictive insights that drive strategic growth and competitive advantage.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Zap className="w-5 h-5" style={{ color: "var(--brand-orange)" }} />
                                <h4 className="font-semibold" style={{ color: "var(--brand-orange)" }}>For Growing Businesses</h4>
                            </div>
                            <p className="leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                Scale your operations without proportionally increasing headcount. AI workflows handle increasing volumes of work while maintaining quality and consistency, allowing your team to focus on high-value activities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}