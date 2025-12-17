"use client";

import { Zap, Layers, TrendingUp, Zap as ZapIcon, Cpu, CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Zap,
            title: "Faster Execution",
            description: "Automate processes that previously took hours or days, completing them in minutes with AI-powered intelligence.",
        },
        {
            icon: CheckCircle,
            title: "Reduced Human Error",
            description: "Eliminate manual mistakes with consistent, rule-based automation and AI validation at every step.",
        },
        {
            icon: Layers,
            title: "Scalable Workflows",
            description: "Build workflows that grow with your business, handling increased volume without additional resources.",
        },
        {
            icon: TrendingUp,
            title: "AI-Driven Insights",
            description: "Extract actionable intelligence from your processes to continuously optimize and improve performance.",
        },
        {
            icon: ZapIcon,
            title: "Seamless Integrations",
            description: "Connect with your existing tools and systems—CRM, ERP, databases, APIs—for unified automation.",
        },
        {
            icon: Cpu,
            title: "Enterprise-Grade Security",
            description: "Protect sensitive data with encryption, compliance standards, and secure data pipelines throughout your workflows.",
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
                        Why Choose Our <span style={{ color: "var(--brand-orange)" }}>AI Automation Solutions?</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We deliver enterprise-grade AI automation solutions that combine cutting-edge technology with deep business expertise to drive measurable results.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;
                        return (
                            <div
                                key={index}
                                className="p-6 rounded-2xl transition-all duration-300 hover:scale-105 border animate-fadeIn"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                    animationDelay: `${0.2 + index * 0.1}s`,
                                    animationFillMode: "both",
                                }}
                            >
                                <div
                                    className="w-14 h-14 rounded-lg p-3 mb-4 flex items-center justify-center shadow-lg"
                                    style={{
                                        background: "linear-gradient(135deg, var(--brand-orange), var(--brand-orange))",
                                    }}
                                >
                                    <Icon className="w-full h-full text-white" />
                                </div>
                                <h3 className="text-lg font-bold mb-3">{reason.title}</h3>
                                <p style={{ color: "var(--secondary-text)" }}>{reason.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Competitive Advantage */}
                <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-fadeIn" style={{ animationDelay: "0.8s", animationFillMode: "both" }}>
                        <h3 className="text-3xl font-bold mb-6">Our Competitive Edge</h3>
                        <ul className="space-y-4">
                            {[
                                "Expert team with deep AI and automation expertise",
                                "Proven track record across multiple industries",
                                "Custom solutions tailored to your specific needs",
                                "Continuous optimization and monitoring",
                                "24/7 support and maintenance",
                                "ROI-focused approach with measurable KPIs",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "var(--brand-orange)" }} />
                                    <span style={{ color: "var(--foreground)" }}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div
                        className="p-8 rounded-2xl border animate-fadeIn"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                            borderColor: "var(--border-color)",
                            animationDelay: "1s",
                            animationFillMode: "both",
                        }}
                    >
                        <h4 className="text-xl font-bold mb-4" style={{ color: "var(--brand-orange)" }}>Success Metrics</h4>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">Process Efficiency</span>
                                    <span style={{ color: "var(--brand-orange)" }}>+85%</span>
                                </div>
                                <div className="w-full bg-gray-300 rounded-full h-2" style={{ backgroundColor: "var(--border-color)" }}>
                                    <div className="bg-gradient-to-r from-[#fab900] to-[#ee6500] h-2 rounded-full" style={{ width: "85%" }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">Cost Savings</span>
                                    <span style={{ color: "var(--brand-orange)" }}>-60%</span>
                                </div>
                                <div className="w-full bg-gray-300 rounded-full h-2" style={{ backgroundColor: "var(--border-color)" }}>
                                    <div className="bg-gradient-to-r from-[#fab900] to-[#ee6500] h-2 rounded-full" style={{ width: "60%" }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">Error Reduction</span>
                                    <span style={{ color: "var(--brand-orange)" }}>-95%</span>
                                </div>
                                <div className="w-full bg-gray-300 rounded-full h-2" style={{ backgroundColor: "var(--border-color)" }}>
                                    <div className="bg-gradient-to-r from-[#fab900] to-[#ee6500] h-2 rounded-full" style={{ width: "95%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
