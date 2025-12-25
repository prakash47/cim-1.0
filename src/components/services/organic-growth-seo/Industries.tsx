"use client";

import { useState } from "react";
import {
    Rocket, Cloud, ShoppingCart, Building2, Briefcase, ArrowRight, Users,
    TrendingUp, Zap, Package, MapPin, Globe2, Target, Star, Sparkles,
    BarChart3, Award, ChevronRight
} from "lucide-react";

export default function Industries() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const industries = [
        {
            icon: Rocket,
            decorIcon: TrendingUp,
            accentIcon: Zap,
            title: "Startups",
            description: "Rapidly establish brand presence and acquire early customers through targeted content and technical SEO.",
            color: "#10b981",
            gradient: "from-green-500 to-emerald-600",
            stats: "2x Growth",
        },
        {
            icon: Cloud,
            decorIcon: BarChart3,
            accentIcon: Target,
            title: "SaaS",
            description: "Drive high-intent sign-ups and demos by targeting solution-based keywords and optimizing for recurring revenue.",
            color: "#14b8a6",
            gradient: "from-emerald-500 to-teal-600",
            stats: "3x Sign-ups",
        },
        {
            icon: ShoppingCart,
            decorIcon: Package,
            accentIcon: Star,
            title: "E-commerce",
            description: "Increase product visibility, optimize category pages, and boost transactional traffic to maximize online sales.",
            color: "#06b6d4",
            gradient: "from-teal-500 to-cyan-600",
            stats: "5x Sales",
        },
        {
            icon: Building2,
            decorIcon: MapPin,
            accentIcon: Award,
            title: "Local Businesses",
            description: "Dominate local search results (Google Maps, 'near me' searches) to drive foot traffic and local inquiries.",
            color: "#3b82f6",
            gradient: "from-cyan-500 to-blue-600",
            stats: "#1 Local Rank",
        },
        {
            icon: Briefcase,
            decorIcon: Globe2,
            accentIcon: Sparkles,
            title: "Enterprises",
            description: "Manage complex site architectures and execute global SEO strategies across multiple markets and languages.",
            color: "#6366f1",
            gradient: "from-blue-500 to-indigo-600",
            stats: "Global Scale",
        },
    ];

    return (
        <section className="py-16 md:py-24 relative overflow-hidden transition-colors duration-300" style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--border-color)",
        }}>


            {/* Floating Particles - Using fixed positions to avoid hydration mismatch */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[
                    { left: 10, top: 20, duration: 8, delay: 1 },
                    { left: 85, top: 15, duration: 12, delay: 3 },
                    { left: 25, top: 70, duration: 10, delay: 0 },
                    { left: 70, top: 80, duration: 9, delay: 2 },
                    { left: 50, top: 40, duration: 11, delay: 4 },
                    { left: 15, top: 55, duration: 7, delay: 1.5 },
                    { left: 90, top: 45, duration: 13, delay: 2.5 },
                    { left: 35, top: 25, duration: 8, delay: 0.5 },
                    { left: 60, top: 65, duration: 10, delay: 3.5 },
                    { left: 5, top: 85, duration: 9, delay: 1 },
                    { left: 75, top: 10, duration: 11, delay: 2 },
                    { left: 45, top: 90, duration: 12, delay: 0 },
                    { left: 20, top: 35, duration: 8, delay: 4 },
                    { left: 80, top: 60, duration: 10, delay: 1 },
                    { left: 55, top: 5, duration: 9, delay: 3 },
                ].map((particle, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-current opacity-20"
                        style={{
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                            animationName: 'float',
                            animationDuration: `${particle.duration}s`,
                            animationTimingFunction: 'ease-in-out',
                            animationDelay: `${particle.delay}s`,
                            animationIterationCount: 'infinite',
                            animationDirection: i % 2 === 0 ? 'normal' : 'reverse',
                        }}
                    />
                ))}
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10" >
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-full border backdrop-blur-sm animate-pulse-glow"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-seo) 10%, transparent)",
                            borderColor: "var(--brand-seo)",
                        }}
                    >
                        <Users className="w-4 h-4 animate-scale-pulse" style={{ color: "var(--brand-seo)" }} />
                        <span className="text-sm font-bold tracking-wide" style={{ color: "var(--brand-seo)" }}>
                            INDUSTRIES WE SERVE
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Industries & <span style={{ color: "var(--brand-seo)" }}>Growth Use Cases</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Our Organic SEO Services are tailored to the unique challenges and opportunities of diverse sectors.
                    </p>
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, index) => {
                        const Icon = industry.icon;
                        const DecorIcon = industry.decorIcon;
                        const AccentIcon = industry.accentIcon;
                        const isHovered = hoveredIndex === index;

                        return (
                            <div
                                key={index}
                                className="group relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    animation: `popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${index * 0.1}s both`,
                                }}
                            >
                                <div
                                    className="relative p-6 rounded-2xl text-center transition-all duration-700 border overflow-hidden h-full backdrop-blur-sm"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--card-bg) 85%, transparent)",
                                        borderColor: isHovered ? industry.color : "var(--border-color)",
                                        transform: isHovered
                                            ? "translateY(-16px) scale(1.05) rotateY(5deg)"
                                            : "translateY(0) scale(1) rotateY(0deg)",
                                        boxShadow: isHovered
                                            ? `0 35px 60px -15px ${industry.color}60, 0 0 0 2px ${industry.color}30, inset 0 0 60px ${industry.color}10`
                                            : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                        perspective: "1000px",
                                    }}
                                >
                                    {/* Animated Background Gradient */}
                                    <div
                                        className="absolute inset-0 opacity-0 transition-all duration-700"
                                        style={{
                                            background: `radial-gradient(circle at center, ${industry.color}20 0%, transparent 70%)`,
                                            opacity: isHovered ? 1 : 0,
                                            transform: isHovered ? "scale(1)" : "scale(0.8)",
                                        }}
                                    />

                                    {/* Orbiting Decoration */}
                                    <div
                                        className="absolute -top-6 -right-6 w-24 h-24 transition-all duration-1000"
                                        style={{
                                            transform: isHovered ? "rotate(360deg) scale(1)" : "rotate(0deg) scale(0.7)",
                                            opacity: isHovered ? 0.4 : 0.15,
                                        }}
                                    >
                                        <div
                                            className="w-full h-full rounded-full flex items-center justify-center"
                                            style={{
                                                background: `conic-gradient(from 0deg, ${industry.color}40, transparent, ${industry.color}20)`,
                                            }}
                                        >
                                            <DecorIcon
                                                className="w-10 h-10"
                                                style={{
                                                    color: industry.color,
                                                    transform: isHovered ? "rotate(-360deg)" : "rotate(0deg)",
                                                    transition: "transform 1s ease"
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Stats Badge */}
                                    <div
                                        className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 backdrop-blur-md transition-all duration-500"
                                        style={{
                                            background: `linear-gradient(135deg, ${industry.color}30, ${industry.color}15)`,
                                            color: industry.color,
                                            border: `1px solid ${industry.color}40`,
                                            transform: isHovered ? "scale(1.05) translateY(0)" : "scale(0.9) translateY(-5px)",
                                            opacity: isHovered ? 1 : 0,
                                        }}
                                    >
                                        <AccentIcon className="w-3 h-3" />
                                        {industry.stats}
                                    </div>

                                    {/* Main Icon Container */}
                                    <div className="relative mb-5 z-10">


                                        {/* Icon Box */}
                                        <div
                                            className={`relative w-20 h-20 mx-auto rounded-2xl p-4 transition-all duration-700 bg-gradient-to-br ${industry.gradient}`}
                                            style={{
                                                transform: isHovered
                                                    ? "scale(1.2) rotateZ(10deg) translateY(-5px)"
                                                    : "scale(1) rotateZ(0deg) translateY(0)",
                                                boxShadow: isHovered
                                                    ? `0 20px 40px ${industry.color}60, 0 0 0 4px ${industry.color}20`
                                                    : "none",
                                            }}
                                        >
                                            <Icon
                                                className="w-full h-full text-white transition-all duration-500"
                                                style={{
                                                    transform: isHovered ? "scale(1.1) rotateZ(-10deg)" : "scale(1) rotateZ(0deg)",
                                                    filter: isHovered ? "drop-shadow(0 0 10px rgba(255,255,255,0.8))" : "none",
                                                }}
                                            />
                                        </div>

                                        {/* Rotating Ring */}
                                        <div
                                            className="absolute inset-0 rounded-2xl transition-all duration-1000"
                                            style={{
                                                border: `2px dashed ${industry.color}`,
                                                opacity: isHovered ? 0.6 : 0,
                                                transform: isHovered ? "scale(1.4) rotate(180deg)" : "scale(1.2) rotate(0deg)",
                                            }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-lg font-bold mb-3 transition-all duration-300 relative z-10"
                                        style={{
                                            color: isHovered ? industry.color : "var(--foreground)",
                                            transform: isHovered ? "scale(1.05)" : "scale(1)",
                                        }}
                                    >
                                        {industry.title}
                                    </h3>
                                    <p
                                        className="text-sm leading-relaxed transition-all duration-300 relative z-10"
                                        style={{
                                            color: isHovered ? "var(--foreground)" : "var(--secondary-text)",
                                            transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                                        }}
                                    >
                                        {industry.description}
                                    </p>

                                    {/* Hover Arrow with Bounce */}
                                    <div
                                        className="mt-4 flex items-center justify-center gap-2 transition-all duration-500 relative z-10"
                                        style={{
                                            opacity: isHovered ? 1 : 0,
                                            transform: isHovered ? "translateY(0)" : "translateY(10px)",
                                        }}
                                    >
                                        {/* <span
                                            className="text-xs font-bold tracking-wide"
                                            style={{ color: industry.color }}
                                        >
                                            EXPLORE
                                        </span> */}
                                        <ChevronRight
                                            className="w-4 h-4 animate-bounce-horizontal"
                                            style={{ color: industry.color }}
                                        />
                                    </div>

                                    {/* Animated Bottom Border */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-700"
                                        style={{
                                            background: `linear-gradient(90deg, ${industry.color}, transparent)`,
                                            width: isHovered ? "100%" : "0%",
                                        }}
                                    />

                                    <div
                                        className="absolute bottom-2 left-2 transition-all duration-500"
                                        style={{
                                            opacity: isHovered ? 1 : 0,
                                            transform: isHovered ? "scale(1) rotate(0deg)" : "scale(0) rotate(180deg)",
                                            transitionDelay: "100ms",
                                        }}
                                    >
                                        <Sparkles className="w-4 h-4" style={{ color: industry.color }} />
                                    </div>

                                    {/* Diagonal Accent Lines */}
                                    <div
                                        className="absolute top-0 left-0 w-16 h-16 transition-all duration-700"
                                        style={{
                                            background: `linear-gradient(135deg, ${industry.color}20, transparent)`,
                                            opacity: isHovered ? 1 : 0,
                                            borderRadius: "0 0 100% 0",
                                        }}
                                    />
                                    <div
                                        className="absolute bottom-0 right-0 w-16 h-16 transition-all duration-700"
                                        style={{
                                            background: `linear-gradient(315deg, ${industry.color}20, transparent)`,
                                            opacity: isHovered ? 1 : 0,
                                            borderRadius: "100% 0 0 0",
                                            transitionDelay: "100ms",
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @keyframes popIn {
                    0% {
                        opacity: 0;
                        transform: scale(0.5) translateY(30px);
                    }
                    50% {
                        transform: scale(1.1) translateY(-5px);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }

                @keyframes float {
                    0%, 100% { 
                        transform: translate(0, 0); 
                        opacity: 0.2;
                    }
                    50% { 
                        transform: translate(50px, -50px); 
                        opacity: 0.4;
                    }
                }

                @keyframes grid-flow {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(40px, 40px); }
                }

                @keyframes pulse-glow {
                    0%, 100% { 
                        box-shadow: 0 0 10px var(--brand-seo);
                        opacity: 1;
                    }
                    50% { 
                        box-shadow: 0 0 20px var(--brand-seo);
                        opacity: 0.8;
                    }
                }

                @keyframes scale-pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.2); }
                }

                @keyframes ping-slow {
                    75%, 100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }

                @keyframes pulse-slow {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 0.2;
                    }
                    50% {
                        transform: scale(1.05);
                        opacity: 0.3;
                    }
                }

                @keyframes bounce-horizontal {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(5px); }
                }

                .animate-grid-flow {
                    animation: grid-flow 20s linear infinite;
                }

                .animate-pulse-glow {
                    animation: pulse-glow 3s ease-in-out infinite;
                }

                .animate-scale-pulse {
                    animation: scale-pulse 2s ease-in-out infinite;
                }

                .animate-ping-slow {
                    animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
                }

                .animate-pulse-slow {
                    animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }

                .animate-bounce-horizontal {
                    animation: bounce-horizontal 1s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}