"use client";

import { useState } from "react";
import { BarChart3, Shield, Eye, Award, CheckCircle2, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const benefits = [
        {
            icon: BarChart3,
            decorIcon: Sparkles,
            title: "Data-Driven Decisions",
            description: "Every campaign is backed by deep analytics. We don't guess—we test, measure, and optimize based on real performance data.",
            highlight: "Analytics-First",
            color: "#4285f4",
        },
        {
            icon: Shield,
            decorIcon: CheckCircle2,
            title: "Transparent Reporting",
            description: "Full visibility into your ad spend, conversions, and ROI. Real-time dashboards and detailed monthly reports.",
            highlight: "100% Transparent",
            color: "#34a853",
        },
        {
            icon: Eye,
            decorIcon: BarChart3,
            title: "Dedicated Account Team",
            description: "Your campaigns are managed by certified experts who know your business inside and out.",
            highlight: "Expert Team",
            color: "#fbbc04",
        },
        {
            icon: Award,
            decorIcon: Shield,
            title: "Proven Track Record",
            description: "Over $50M in ad spend managed with an average 500% ROAS across industries.",
            highlight: "500% ROAS",
            color: "#ea4335",
        },
    ];

    return (
        <section className="py-16 md:py-24 relative overflow-hidden transition-colors duration-300" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            {/* Animated background blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
                <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" style={{ animationDelay: "2s" }} />
                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" style={{ animationDelay: "4s" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-full border backdrop-blur-sm"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-orange) 10%, transparent)",
                            borderColor: "var(--brand-orange)",
                        }}
                    >
                        <CheckCircle2 className="w-4 h-4" style={{ color: "var(--brand-orange)" }} />
                        <span className="text-sm font-bold tracking-wide" style={{ color: "var(--brand-orange)" }}>
                            WHY CHOOSE US
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Why Partner with Our <span style={{ color: "var(--brand-orange)" }}>Performance Team</span>?
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We combine cutting-edge technology with human expertise to deliver campaigns that consistently exceed expectations.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        const DecorIcon = benefit.decorIcon;
                        const isHovered = hoveredIndex === index;

                        return (
                            <div
                                key={index}
                                className="group relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div
                                    className="relative p-6 rounded-2xl transition-all duration-500 border overflow-hidden h-full"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--card-bg) 80%, transparent)",
                                        borderColor: isHovered ? benefit.color : "var(--border-color)",
                                        transform: isHovered ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
                                        boxShadow: isHovered ? `0 20px 40px -12px ${benefit.color}40` : "none",
                                    }}
                                >
                                    {/* Decorative icon */}
                                    <div
                                        className="absolute -top-2 -right-2 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500"
                                        style={{
                                            backgroundColor: `${benefit.color}15`,
                                            transform: isHovered ? "rotate(360deg) scale(1.1)" : "rotate(0deg) scale(1)",
                                            opacity: isHovered ? 1 : 0.6,
                                        }}
                                    >
                                        <DecorIcon className="w-6 h-6" style={{ color: benefit.color }} />
                                    </div>

                                    {/* Badge */}
                                    <div
                                        className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold transition-all duration-300"
                                        style={{
                                            backgroundColor: `${benefit.color}20`,
                                            color: benefit.color,
                                            transform: isHovered ? "translateX(0) scale(1)" : "translateX(-20px) scale(0.9)",
                                            opacity: isHovered ? 1 : 0,
                                        }}
                                    >
                                        {benefit.highlight}
                                    </div>

                                    {/* Icon Container */}
                                    <div className="relative my-6">
                                        <div
                                            className="relative w-14 h-14 rounded-xl p-3 transition-all duration-500"
                                            style={{
                                                backgroundColor: `${benefit.color}20`,
                                                transform: isHovered ? "scale(1.1) rotate(-5deg)" : "scale(1) rotate(0deg)",
                                            }}
                                        >
                                            <Icon className="w-full h-full" style={{ color: benefit.color }} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-lg font-bold mb-3 transition-all duration-300"
                                        style={{ color: isHovered ? benefit.color : "var(--foreground)" }}
                                    >
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                        {benefit.description}
                                    </p>

                                    {/* Bottom accent */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500 rounded-full"
                                        style={{
                                            backgroundColor: benefit.color,
                                            width: isHovered ? "100%" : "0%",
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(20px, -20px) scale(1.1); }
                    50% { transform: translate(-20px, 20px) scale(0.9); }
                    75% { transform: translate(20px, 20px) scale(1.05); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
            `}</style>
        </section>
    );
}
