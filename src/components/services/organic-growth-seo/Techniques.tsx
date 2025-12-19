"use client";

import { useState } from "react";
import {
    FileText, Code, Globe, Store, Link2, MousePointerClick, Settings,
    CheckCircle2, Zap, Search, Rocket, Target, BarChart,
    TrendingUp, Award, Sparkles, ArrowRight
} from "lucide-react";

export default function Techniques() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const techniques = [
        {
            icon: FileText,
            decorIcon: Search,
            title: "On-Page SEO",
            description: "Optimizing individual web pages to rank higher and earn more relevant traffic in search engines.",
            features: ["Title tags", "Meta descriptions", "Content quality", "Internal linking"],
            badge: "Foundation",
            color: "#3b82f6",
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            icon: Code,
            decorIcon: Settings,
            title: "Technical SEO",
            description: "Ensuring search engine crawlers can efficiently access, crawl, and index your website.",
            features: ["Site speed", "Mobile-friendliness", "Structured data", "Core web vitals"],
            badge: "Technical",
            color: "#8b5cf6",
            gradient: "from-purple-500 to-pink-500",
        },
        {
            icon: Globe,
            decorIcon: Sparkles,
            title: "Content SEO & Blogging",
            description: "Creating high-quality, valuable content that answers user queries and establishes thought leadership.",
            features: ["Keyword research", "Content strategy", "Topic clusters", "Long-tail targeting"],
            badge: "Content",
            color: "#10b981",
            gradient: "from-green-500 to-emerald-500",
        },
        {
            icon: Settings,
            decorIcon: Target,
            title: "Local SEO",
            description: "Optimizing your online presence to attract more business from relevant local searches.",
            features: ["Google My Business", "Local citations", "NAP consistency", "Reviews management"],
            badge: "Local",
            color: "#f59e0b",
            gradient: "from-amber-500 to-orange-500",
        },
        {
            icon: Store,
            decorIcon: BarChart,
            title: "E-commerce SEO",
            description: "Specialized optimization for product pages, category pages, and site architecture.",
            features: ["Product optimization", "Category pages", "Schema markup", "Site structure"],
            badge: "E-commerce",
            color: "#ec4899",
            gradient: "from-pink-500 to-rose-500",
        },
        {
            icon: Link2,
            decorIcon: Award,
            title: "Link Building",
            description: "Acquiring high-quality backlinks from authoritative websites to boost your domain authority.",
            features: ["Outreach campaigns", "Guest posting", "Resource link building", "Digital PR"],
            badge: "Authority",
            color: "#06b6d4",
            gradient: "from-cyan-500 to-blue-500",
        },
        {
            icon: MousePointerClick,
            decorIcon: TrendingUp,
            title: "Conversion Rate Optimization",
            description: "Optimizing your website to increase the percentage of visitors who take desired actions.",
            features: ["A/B testing", "UX optimization", "Landing pages", "Call-to-action"],
            badge: "CRO",
            color: "#14b8a6",
            gradient: "from-teal-500 to-green-500",
        },
    ];

    return (
        <section className="py-16 md:py-24 relative overflow-hidden transition-colors duration-300" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            {/* Animated Grid Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, var(--brand-seo) 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                    animation: 'gridMove 20s linear infinite'
                }}></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
                <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-delayed"></div>
                <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow"></div>
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-full border backdrop-blur-sm animate-shimmer"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-seo) 10%, transparent)",
                            borderColor: "var(--brand-seo)",
                        }}
                    >
                        <Rocket className="w-4 h-4 animate-bounce-subtle" style={{ color: "var(--brand-seo)" }} />
                        <span className="text-sm font-bold tracking-wide" style={{ color: "var(--brand-seo)" }}>
                            SEO TECHNIQUES
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Types of <span style={{ color: "var(--brand-seo)" }}>SEO Techniques</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Our comprehensive approach covers every facet of Search Engine Optimization to ensure maximum Organic Traffic Growth.
                    </p>
                </div>

                {/* Techniques Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {techniques.map((tech, index) => {
                        const Icon = tech.icon;
                        const DecorIcon = tech.decorIcon;
                        const isHovered = hoveredIndex === index;

                        return (
                            <div
                                key={index}
                                className="group relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    animation: `fadeInScale 0.6s ease-out ${index * 0.08}s both`,
                                }}
                            >
                                <div
                                    className="relative p-6 rounded-2xl transition-all duration-500 border overflow-hidden h-full"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--card-bg) 90%, transparent)",
                                        borderColor: isHovered ? tech.color : "var(--border-color)",
                                        transform: isHovered ? "translateY(-8px) rotateX(2deg)" : "translateY(0) rotateX(0deg)",
                                        boxShadow: isHovered
                                            ? `0 25px 50px -12px ${tech.color}50, 0 0 0 1px ${tech.color}30`
                                            : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {/* Animated Gradient Background */}
                                    <div
                                        className="absolute inset-0 opacity-0 transition-opacity duration-500"
                                        style={{
                                            background: `linear-gradient(135deg, ${tech.color}15 0%, transparent 50%, ${tech.color}10 100%)`,
                                            opacity: isHovered ? 1 : 0,
                                        }}
                                    />

                                    {/* Orbiting Decoration */}
                                    <div
                                        className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full flex items-center justify-center transition-all duration-700"
                                        style={{
                                            background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}10)`,
                                            transform: isHovered ? "rotate(180deg) scale(1.2)" : "rotate(0deg) scale(1)",
                                            opacity: isHovered ? 0.8 : 0.4,
                                        }}
                                    >
                                        <DecorIcon
                                            className="w-10 h-10"
                                            style={{
                                                color: tech.color,
                                                transform: isHovered ? "rotate(-180deg)" : "rotate(0deg)",
                                                transition: "transform 0.7s ease"
                                            }}
                                        />
                                    </div>

                                    {/* Badge with Pulse Effect */}
                                    <div className="absolute top-4 right-4 z-10">
                                        <div
                                            className="relative px-3 py-1 rounded-full text-xs font-bold transition-all duration-300"
                                            style={{
                                                backgroundColor: `${tech.color}25`,
                                                color: tech.color,
                                                transform: isHovered ? "scale(1.1)" : "scale(1)",
                                            }}
                                        >
                                            {tech.badge}
                                            {isHovered && (
                                                <div
                                                    className="absolute inset-0 rounded-full animate-ping"
                                                    style={{
                                                        backgroundColor: tech.color,
                                                        opacity: 0.3,
                                                    }}
                                                />
                                            )}
                                        </div>
                                    </div>

                                    {/* Icon Container with 3D Effect */}
                                    <div className="relative mb-5 z-10">
                                        {/* Background Ring */}
                                        <div
                                            className="absolute inset-0 rounded-xl transition-all duration-500"
                                            style={{
                                                backgroundColor: `${tech.color}20`,
                                                transform: isHovered ? "scale(1.3) rotate(-10deg)" : "scale(1) rotate(0deg)",
                                                opacity: isHovered ? 0.4 : 0,
                                                filter: "blur(8px)",
                                            }}
                                        />

                                        {/* Icon Box */}
                                        <div
                                            className="relative w-16 h-16 rounded-xl p-3.5 transition-all duration-500"
                                            style={{
                                                background: `linear-gradient(135deg, ${tech.color}30, ${tech.color}15)`,
                                                transform: isHovered ? "scale(1.15) rotate(5deg)" : "scale(1) rotate(0deg)",
                                                boxShadow: isHovered ? `0 8px 16px ${tech.color}40` : "none",
                                            }}
                                        >
                                            <Icon
                                                className="w-full h-full transition-all duration-500"
                                                style={{
                                                    color: tech.color,
                                                    transform: isHovered ? "scale(1.1) rotate(-5deg)" : "scale(1) rotate(0deg)",
                                                    filter: isHovered ? "drop-shadow(0 0 8px currentColor)" : "none",
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-xl font-bold mb-3 transition-all duration-300 relative z-10"
                                        style={{
                                            color: isHovered ? tech.color : "var(--foreground)",
                                        }}
                                    >
                                        {tech.title}
                                        {isHovered && (
                                            <ArrowRight
                                                className="inline-block ml-2 w-5 h-5 animate-slide-right"
                                                style={{ color: tech.color }}
                                            />
                                        )}
                                    </h3>
                                    <p
                                        className="text-sm leading-relaxed mb-5 transition-colors duration-300 relative z-10"
                                        style={{
                                            color: isHovered ? "var(--foreground)" : "var(--secondary-text)",
                                        }}
                                    >
                                        {tech.description}
                                    </p>

                                    {/* Features with Stagger Animation */}
                                    <div className="space-y-2 relative z-10">
                                        {tech.features.map((feature, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-2 transition-all duration-300"
                                                style={{
                                                    transform: isHovered ? "translateX(4px)" : "translateX(0)",
                                                    transitionDelay: `${idx * 50}ms`,
                                                }}
                                            >
                                                <div
                                                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300"
                                                    style={{
                                                        backgroundColor: isHovered ? `${tech.color}25` : `${tech.color}15`,
                                                        transform: isHovered ? "rotate(360deg) scale(1.1)" : "rotate(0deg) scale(1)",
                                                        transitionDelay: `${idx * 50}ms`,
                                                    }}
                                                >
                                                    <CheckCircle2
                                                        className="w-3.5 h-3.5"
                                                        style={{ color: tech.color }}
                                                    />
                                                </div>
                                                <span
                                                    className="text-xs font-medium transition-colors duration-300"
                                                    style={{
                                                        color: isHovered ? "var(--foreground)" : "var(--secondary-text)",
                                                    }}
                                                >
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Animated Corner Borders */}
                                    <div
                                        className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 rounded-tl-2xl transition-all duration-500"
                                        style={{
                                            borderColor: tech.color,
                                            opacity: isHovered ? 1 : 0,
                                            transform: isHovered ? "translate(0, 0)" : "translate(-8px, -8px)",
                                        }}
                                    />
                                    <div
                                        className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 rounded-br-2xl transition-all duration-500"
                                        style={{
                                            borderColor: tech.color,
                                            opacity: isHovered ? 1 : 0,
                                            transform: isHovered ? "translate(0, 0)" : "translate(8px, 8px)",
                                        }}
                                    />

                                    {/* Progressive Bottom Bar */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-700 rounded-full"
                                        style={{
                                            background: `linear-gradient(90deg, ${tech.color}, transparent)`,
                                            width: isHovered ? "100%" : "0%",
                                        }}
                                    />

                                    {/* Shine Effect */}
                                    <div
                                        className="absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none"
                                        style={{
                                            background: `linear-gradient(135deg, transparent 0%, ${tech.color}10 50%, transparent 100%)`,
                                            opacity: isHovered ? 1 : 0,
                                            transform: isHovered ? "translateX(0)" : "translateX(-100%)",
                                            transition: "all 0.7s ease",
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInScale {
                    from {
                        opacity: 0;
                        transform: scale(0.9) translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }

                @keyframes float {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    33% { transform: translate(30px, -30px) rotate(120deg); }
                    66% { transform: translate(-20px, 20px) rotate(240deg); }
                }

                @keyframes gridMove {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(40px, 40px); }
                }

                @keyframes shimmer {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }

                @keyframes bounce-subtle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-4px); }
                }

                @keyframes slide-right {
                    0% { transform: translateX(0); }
                    50% { transform: translateX(4px); }
                    100% { transform: translateX(0); }
                }

                .animate-float {
                    animation: float 15s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float 18s ease-in-out 2s infinite;
                }

                .animate-float-slow {
                    animation: float 20s ease-in-out 4s infinite;
                }

                .animate-shimmer {
                    animation: shimmer 3s ease-in-out infinite;
                }

                .animate-bounce-subtle {
                    animation: bounce-subtle 2s ease-in-out infinite;
                }

                .animate-slide-right {
                    animation: slide-right 0.6s ease-in-out;
                }
            `}</style>
        </section>
    );
}