"use client";

import { useState } from "react";
import { TrendingUp, ShieldCheck, Zap, BarChart3, CheckCircle2, ArrowUpRight, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const benefits = [
        {
            icon: TrendingUp,
            decorIcon: BarChart3,
            title: "Data-Driven Strategy",
            description: "Every decision is backed by deep market analysis, competitor insights, and performance metrics, ensuring maximum ROI.",
            highlight: "Analytics-First",
            color: "#3b82f6",
        },
        {
            icon: ShieldCheck,
            decorIcon: Sparkles,
            title: "White-Hat SEO Practices",
            description: "We adhere strictly to search engine guidelines, building ethical, future-proof strategies that protect your brand's reputation.",
            highlight: "Google Compliant",
            color: "#10b981",
        },
        {
            icon: Zap,
            decorIcon: ArrowUpRight,
            title: "Continuous Optimization",
            description: "SEO is not a one-time fix. We constantly monitor, test, and refine your strategy to adapt to algorithm changes.",
            highlight: "Always Improving",
            color: "#f59e0b",
        },
        {
            icon: BarChart3,
            decorIcon: CheckCircle2,
            title: "Measurable Growth",
            description: "Clear, transparent reporting on key performance indicators like rankings, traffic, and conversions.",
            highlight: "Transparent Reporting",
            color: "#8b5cf6",
        },
    ];

    return (
        <section className="py-16 md:py-24 relative overflow-hidden transition-colors duration-300" style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--border-color)",
        }}>
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-full border backdrop-blur-sm animate-pulse-subtle"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-seo) 10%, transparent)",
                            borderColor: "var(--brand-seo)",
                        }}
                    >
                        <CheckCircle2 className="w-4 h-4" style={{ color: "var(--brand-seo)" }} />
                        <span className="text-sm font-bold tracking-wide" style={{ color: "var(--brand-seo)" }}>
                            WHY CHOOSE US
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Why Partner with Our <span style={{ color: "var(--brand-seo)" }}>SEO Agency</span>?
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We combine technical expertise with strategic thinking to deliver Organic SEO Services that are both effective and sustainable.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                                }}
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
                                    {/* Floating decorative icon */}
                                    <div
                                        className="absolute -top-2 -right-2 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500"
                                        style={{
                                            backgroundColor: `${benefit.color}15`,
                                            transform: isHovered ? "rotate(360deg) scale(1.1)" : "rotate(0deg) scale(1)",
                                            opacity: isHovered ? 1 : 0.6,
                                        }}
                                    >
                                        <DecorIcon
                                            className="w-6 h-6"
                                            style={{
                                                color: benefit.color,
                                                transform: isHovered ? "scale(1.2)" : "scale(1)",
                                                transition: "transform 0.3s ease"
                                            }}
                                        />
                                    </div>

                                    {/* Highlight Badge */}
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

                                    {/* Animated gradient background */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{
                                            background: `radial-gradient(circle at 50% 100%, ${benefit.color}15 0%, transparent 70%)`,
                                        }}
                                    />

                                    {/* Icon Container with animated ring */}
                                    <div className="relative my-6">
                                        <div
                                            className="absolute inset-0 rounded-xl transition-all duration-500"
                                            style={{
                                                backgroundColor: `${benefit.color}15`,
                                                transform: isHovered ? "scale(1.15) rotate(5deg)" : "scale(1) rotate(0deg)",
                                                opacity: isHovered ? 0.3 : 0,
                                            }}
                                        />
                                        <div
                                            className="relative w-14 h-14 rounded-xl p-3 transition-all duration-500"
                                            style={{
                                                backgroundColor: `${benefit.color}20`,
                                                transform: isHovered ? "scale(1.1) rotate(-5deg)" : "scale(1) rotate(0deg)",
                                            }}
                                        >
                                            <Icon
                                                className="w-full h-full transition-all duration-500"
                                                style={{
                                                    color: benefit.color,
                                                    transform: isHovered ? "scale(1.2) rotate(10deg)" : "scale(1) rotate(0deg)",
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-lg font-bold mb-3 transition-all duration-300"
                                        style={{
                                            color: isHovered ? benefit.color : "var(--foreground)",
                                        }}
                                    >
                                        {benefit.title}
                                    </h3>
                                    <p
                                        className="text-sm leading-relaxed transition-colors duration-300"
                                        style={{
                                            color: isHovered ? "var(--foreground)" : "var(--secondary-text)",
                                        }}
                                    >
                                        {benefit.description}
                                    </p>

                                    {/* Animated corner accents */}
                                    <div
                                        className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-2xl transition-all duration-500"
                                        style={{
                                            borderColor: benefit.color,
                                            opacity: isHovered ? 1 : 0,
                                            transform: isHovered ? "translate(0, 0)" : "translate(-10px, -10px)",
                                        }}
                                    />
                                    <div
                                        className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-2xl transition-all duration-500"
                                        style={{
                                            borderColor: benefit.color,
                                            opacity: isHovered ? 1 : 0,
                                            transform: isHovered ? "translate(0, 0)" : "translate(10px, 10px)",
                                        }}
                                    />

                                    {/* Sliding bottom accent */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500 rounded-full"
                                        style={{
                                            backgroundColor: benefit.color,
                                            width: isHovered ? "100%" : "0%",
                                        }}
                                    />

                                    {/* Pulsing glow effect */}
                                    <div
                                        className="absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none"
                                        style={{
                                            boxShadow: `inset 0 0 20px ${benefit.color}30`,
                                            opacity: isHovered ? 1 : 0,
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

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes pulse-subtle {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.8; }
                }

                .animate-blob {
                    animation: blob 7s infinite;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }

                .animation-delay-4000 {
                    animation-delay: 4s;
                }

                .animate-pulse-subtle {
                    animation: pulse-subtle 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}