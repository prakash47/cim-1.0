"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Monitor, LineChart, Search, Layers, Settings,
    BarChart3, TrendingUp, Eye, Activity, Zap,
    ChevronRight, Sparkles
} from "lucide-react";

export default function ToolsReporting() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const reportingFeatures = [
        {
            icon: Search,
            decorIcon: Activity,
            title: "Search Console & Analytics",
            description: "Direct integration and expert analysis of Google Search Console and Analytics data to understand user behavior.",
            tools: [
                { name: "Google Analytics", logo: "/images/organic_growth_and_seo/google-analytics-logo.webp" },
                { name: "Search Console", logo: "/images/organic_growth_and_seo/google-search-console-logo.webp" },
            ],
            color: "#4285f4",
            metric: "Real-time Data",
        },
        {
            icon: TrendingUp,
            decorIcon: BarChart3,
            title: "Rank Tracking & Monitoring",
            description: "Daily monitoring of target keyword rankings across major search engines to quickly identify shifts and opportunities.",
            tools: [
                { name: "SEMrush", logo: "/images/organic_growth_and_seo/semrush-logo.png" },
                { name: "Ahrefs", logo: "/images/organic_growth_and_seo/Ahrefs-logo.png" },
            ],
            color: "#ea4335",
            metric: "Daily Updates",
        },
        {
            icon: Monitor,
            decorIcon: Eye,
            title: "Performance Dashboards",
            description: "Custom, easy-to-understand dashboards providing a real-time view of your SEO progress, traffic, and conversions.",
            tools: [
                { name: "Google Data Studio", logo: "/images/organic_growth_and_seo/google-data-studio-logo.webp" },
                { name: "Tableau", logo: "/images/organic_growth_and_seo/tableau-logo.svg" },
            ],
            color: "#fbbc04",
            metric: "Live Insights",
        },
        {
            icon: Layers,
            decorIcon: Zap,
            title: "Advanced SEO Tools",
            description: "Leveraging industry-leading tools for technical audits, competitor analysis, and backlink profile management.",
            tools: [
                { name: "Screaming Frog", logo: "/images/organic_growth_and_seo/screaming-frog-logo.png" },
                { name: "Moz", logo: "/images/organic_growth_and_seo/Moz_logo.png" },
            ],
            color: "#34a853",
            metric: "Deep Analysis",
        },
    ];

    return (
        <section className="py-16 md:py-24 relative overflow-hidden transition-colors duration-300" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full opacity-5">
                    <div className="absolute top-20 left-20 w-96 h-96 border border-current rounded-full animate-pulse-slow"></div>
                    <div className="absolute bottom-20 right-20 w-80 h-80 border border-current rounded-full animate-pulse-slow animation-delay-2000"></div>
                    <div className="absolute top-1/2 left-1/2 w-72 h-72 border border-current rounded-full animate-pulse-slow animation-delay-4000"></div>
                </div>
            </div>

            {/* Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-drift"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-drift-reverse"></div>
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-full border backdrop-blur-sm animate-glow"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-seo) 10%, transparent)",
                            borderColor: "var(--brand-seo)",
                        }}
                    >
                        <Settings className="w-4 h-4 animate-spin-slow" style={{ color: "var(--brand-seo)" }} />
                        <span className="text-sm font-bold tracking-wide" style={{ color: "var(--brand-seo)" }}>
                            TOOLS & REPORTING
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Tools, Analytics & <span style={{ color: "var(--brand-seo)" }}>Transparent Reporting</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We believe in full transparency. Our reporting provides clear, actionable insights into your Organic Traffic Growth.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reportingFeatures.map((feature, index) => {
                        const Icon = feature.icon;
                        const DecorIcon = feature.decorIcon;
                        const isHovered = hoveredIndex === index;

                        return (
                            <div
                                key={index}
                                className="group relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                                }}
                            >
                                <div
                                    className="relative p-6 rounded-2xl transition-all duration-500 border overflow-hidden h-full backdrop-blur-sm"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--card-bg) 85%, transparent)",
                                        borderColor: isHovered ? feature.color : "var(--border-color)",
                                        transform: isHovered ? "translateY(-12px) scale(1.03)" : "translateY(0) scale(1)",
                                        boxShadow: isHovered
                                            ? `0 30px 60px -15px ${feature.color}40, 0 0 0 2px ${feature.color}20`
                                            : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {/* Animated Gradient Background */}
                                    <div
                                        className="absolute inset-0 opacity-0 transition-opacity duration-700"
                                        style={{
                                            background: `radial-gradient(circle at top right, ${feature.color}15, transparent 70%)`,
                                            opacity: isHovered ? 1 : 0,
                                        }}
                                    />

                                    {/* Metric Badge */}
                                    <div
                                        className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all duration-500"
                                        style={{
                                            backgroundColor: `${feature.color}20`,
                                            color: feature.color,
                                            transform: isHovered ? "scale(1.05) translateX(0)" : "scale(0.95) translateX(10px)",
                                            opacity: isHovered ? 1 : 0.7,
                                        }}
                                    >
                                        <Sparkles className="w-3 h-3" />
                                        {feature.metric}
                                    </div>

                                    {/* Floating Decor Icon */}
                                    <div
                                        className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-700"
                                        style={{
                                            background: `radial-gradient(circle, ${feature.color}20, transparent)`,
                                            transform: isHovered ? "rotate(180deg) scale(1.2)" : "rotate(0deg) scale(0.8)",
                                            opacity: isHovered ? 0.6 : 0.2,
                                        }}
                                    >
                                        <DecorIcon
                                            className="w-8 h-8"
                                            style={{
                                                color: feature.color,
                                                transform: isHovered ? "rotate(-180deg)" : "rotate(0deg)",
                                                transition: "transform 0.7s ease"
                                            }}
                                        />
                                    </div>

                                    {/* Icon Container with Pulse */}
                                    <div className="relative mb-5 z-10">

                                        {/* Icon Box */}
                                        <div
                                            className="relative w-16 h-16 rounded-xl p-3.5 transition-all duration-500"
                                            style={{
                                                background: `linear-gradient(135deg, ${feature.color}25, ${feature.color}10)`,
                                                transform: isHovered ? "scale(1.15) rotate(5deg)" : "scale(1) rotate(0deg)",
                                                boxShadow: isHovered ? `0 10px 25px ${feature.color}30` : "none",
                                            }}
                                        >
                                            <Icon
                                                className="w-full h-full transition-all duration-500"
                                                style={{
                                                    color: feature.color,
                                                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                                                    filter: isHovered ? `drop-shadow(0 0 8px ${feature.color})` : "none",
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-lg font-bold mb-3 transition-all duration-300 relative z-10 flex items-center gap-2"
                                        style={{
                                            color: isHovered ? feature.color : "var(--foreground)",
                                        }}
                                    >
                                        {feature.title}
                                        {isHovered && (
                                            <ChevronRight
                                                className="w-4 h-4 animate-bounce-x"
                                                style={{ color: feature.color }}
                                            />
                                        )}
                                    </h3>
                                    <p
                                        className="text-sm leading-relaxed mb-5 transition-colors duration-300 relative z-10"
                                        style={{
                                            color: "var(--secondary-text)",
                                        }}
                                    >
                                        {feature.description}
                                    </p>

                                    {/* Tools Logos */}
                                    <div className="flex items-center gap-4 relative z-10">
                                        {feature.tools.map((tool, idx) => (
                                            <div
                                                key={idx}
                                                className="group/tool flex flex-col items-center gap-2 transition-all duration-300"
                                                style={{
                                                    transform: isHovered ? `translateY(0) scale(1.05)` : "translateY(0) scale(1)",
                                                    transitionDelay: `${idx * 100}ms`,
                                                }}
                                            >
                                                <div
                                                    className="w-14 h-14 rounded-xl p-2.5 transition-all duration-300 backdrop-blur-sm group-hover/tool:scale-110"
                                                    style={{
                                                        backgroundColor: `${feature.color}15`,
                                                        border: `1px solid ${feature.color}30`,
                                                    }}
                                                >
                                                    <Image
                                                        src={tool.logo}
                                                        alt={tool.name}
                                                        width={40}
                                                        height={40}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                {/* Tool Name */}
                                                <span
                                                    className="text-xs font-medium text-center transition-colors duration-300"
                                                    style={{
                                                        color: isHovered ? feature.color : "var(--secondary-text)",
                                                    }}
                                                >
                                                    {tool.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Animated Bottom Border */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-700 rounded-full"
                                        style={{
                                            background: `linear-gradient(90deg, ${feature.color}, transparent)`,
                                            width: isHovered ? "100%" : "0%",
                                        }}
                                    />

                                    {/* Corner Accents */}
                                    <div
                                        className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 rounded-tr-2xl transition-all duration-500"
                                        style={{
                                            borderColor: feature.color,
                                            opacity: isHovered ? 0.5 : 0,
                                            transform: isHovered ? "translate(0, 0)" : "translate(8px, -8px)",
                                        }}
                                    />
                                    <div
                                        className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 rounded-bl-2xl transition-all duration-500"
                                        style={{
                                            borderColor: feature.color,
                                            opacity: isHovered ? 0.5 : 0,
                                            transform: isHovered ? "translate(0, 0)" : "translate(-8px, 8px)",
                                        }}
                                    />

                                    {/* Light Sweep Effect */}
                                    <div
                                        className="absolute inset-0 rounded-2xl pointer-events-none"
                                        style={{
                                            background: `linear-gradient(120deg, transparent 0%, ${feature.color}15 50%, transparent 100%)`,
                                            transform: isHovered ? "translateX(100%)" : "translateX(-100%)",
                                            transition: "transform 1s ease",
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
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes drift {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(50px, -50px) scale(1.1); }
                }

                @keyframes drift-reverse {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-50px, 50px) scale(1.1); }
                }

                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.05); }
                }

                @keyframes glow {
                    0%, 100% { box-shadow: 0 0 5px var(--brand-seo); }
                    50% { box-shadow: 0 0 20px var(--brand-seo); }
                }

                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @keyframes bounce-x {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(4px); }
                }

                .animate-drift {
                    animation: drift 20s ease-in-out infinite;
                }

                .animate-drift-reverse {
                    animation: drift-reverse 25s ease-in-out infinite;
                }

                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }

                .animation-delay-4000 {
                    animation-delay: 4s;
                }

                .animate-glow {
                    animation: glow 3s ease-in-out infinite;
                }

                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }

                .animate-bounce-x {
                    animation: bounce-x 0.6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}