"use client";

import {
    Sparkles,
    Instagram,
    Facebook,
    Linkedin,
    Youtube,
    Pin,
    TrendingUp,
    ArrowRight,
    Zap,
    TwitterIcon,
} from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";

export default function Platforms() {
    const platforms = [
        {
            name: "Facebook",
            description: "Leveraging the platform's robust advertising tools and community groups for targeted lead generation and building a loyal customer base.",
            gradient: "linear-gradient(135deg, #1877F2, #0A66C2)",
            icon: Facebook,
            accentColor: "#1877F2",
        },
        {
            name: "Instagram Marketing",
            description: "Visually-driven strategies focused on high-quality content, Reels, Stories, and effective use of shopping features to drive engagement and sales.",
            gradient: "linear-gradient(135deg, #E1306C, #C13584)",
            icon: Instagram,
            accentColor: "#E1306C",
        },

        {
            name: "LinkedIn",
            description: "Professional B2B marketing, thought leadership content, and targeted outreach to key decision-makers and industry professionals.",
            gradient: "linear-gradient(135deg, #0A66C2, #0A63BC)",
            icon: Linkedin,
            accentColor: "#0A66C2",
        },
        {
            name: "YouTube",
            description: "Developing high-value video content, optimizing for search, and utilizing YouTube Ads to capture attention and educate potential customers.",
            gradient: "linear-gradient(135deg, #FF0000, #282828)",
            icon: Youtube,
            accentColor: "#FF0000",
        },
        {
            name: "X (Twitter)",
            description: "Real-time engagement, trend-jacking, and building a strong, authoritative brand voice through concise and impactful messaging.",
            gradient: "linear-gradient(135deg, #000000, #333333)",
            icon: BsTwitterX,
            accentColor: "#000000",
        },

        {
            name: "Pinterest",
            description: "Strategy focused on visual discovery, driving traffic to e-commerce sites, and capturing users in the early stages of the buying journey.",
            gradient: "linear-gradient(135deg, #E60023, #AD081B)",
            icon: FaPinterest,
            accentColor: "#E60023",
        },
    ];

    return (
        <section
            className="px-6 md:px-12 xl:px-20 py-16 transition-colors duration-300 relative overflow-hidden"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-20 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-10"
                    style={{
                        background: "var(--brand-teal)",
                        animation: "float 6s ease-in-out infinite"
                    }}
                />
                <div
                    className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10"
                    style={{
                        background: "var(--brand-cyan)",
                        animation: "float 8s ease-in-out infinite reverse"
                    }}
                />
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-6xl mx-auto">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border backdrop-blur-sm"
                        style={{
                            background:
                                "linear-gradient(90deg, color-mix(in srgb, var(--brand-teal) 8%, transparent), color-mix(in srgb, var(--brand-teal) 8%, transparent))",
                            borderColor: "color-mix(in srgb, var(--brand-teal) 20%, transparent)",
                            color: "var(--brand-teal)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-semibold">Platforms We Specialize In</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "var(--brand-teal)" }}>Mastering the Ecosystem:</span> Strategies for Key Social Channels
                    </h2>

                    <div
                        className="w-24 h-1.5 mx-auto mb-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, var(--brand-teal), var(--brand-cyan))",
                        }}
                    />

                    <p className="text-lg max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Our team has deep expertise in developing winning strategies for the world's most popular platforms.
                    </p>
                </div>

                {/* Platforms Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {platforms.map((platform, idx) => {
                        const Icon = platform.icon;
                        return (
                            <div
                                key={idx}
                                className="group rounded-2xl p-8 border transition-all duration-500 hover:shadow-2xl overflow-hidden relative cursor-pointer"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                    animation: `slideIn 0.6s ease-out ${idx * 0.1}s both`
                                }}
                            >
                                {/* Animated Background Gradient - Diagonal sweep */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700"
                                    style={{
                                        background: platform.gradient,
                                        clipPath: "circle(0% at 0% 0%)",
                                        transition: "clip-path 0.7s ease-out, opacity 0.7s ease-out"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.clipPath = "circle(150% at 0% 0%)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.clipPath = "circle(0% at 0% 0%)";
                                    }}
                                />

                                {/* Static subtle gradient background */}
                                <div
                                    className="absolute inset-0 opacity-5"
                                    style={{
                                        background: platform.gradient,
                                    }}
                                />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon container with multiple animation layers */}
                                    <div className="relative mb-6 w-fit">
                                        {/* Outer rotating ring */}
                                        <div
                                            className="absolute inset-0 -m-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{
                                                border: `2px solid ${platform.accentColor}`,
                                                animation: "spin 3s linear infinite"
                                            }}
                                        />

                                        {/* Icon background */}
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-all duration-500"
                                            style={{
                                                background: platform.gradient,
                                                boxShadow: `0 8px 24px ${platform.accentColor}40`
                                            }}
                                        >
                                            {/* Shimmer effect */}
                                            <div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                style={{
                                                    background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                                                    backgroundSize: "200% 200%",
                                                    animation: "shimmer 2s infinite"
                                                }}
                                            />

                                            <Icon className="w-8 h-8 text-white relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                                        </div>

                                        {/* Trending indicator */}
                                        <div
                                            className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 delay-200"
                                            style={{
                                                background: "white",
                                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                                            }}
                                        >
                                            <TrendingUp
                                                className="w-4 h-4"
                                                style={{ color: platform.accentColor }}
                                            />
                                        </div>
                                    </div>

                                    <h3
                                        className="text-xl font-bold mb-4 group-hover:text-white transition-colors duration-500 flex items-center gap-2"
                                        style={{ color: "var(--foreground)" }}
                                    >
                                        {platform.name}
                                        <Zap
                                            className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500"
                                            style={{ color: "white" }}
                                        />
                                    </h3>

                                    <p
                                        className="mb-6 leading-relaxed group-hover:text-white/95 transition-colors duration-500"
                                        style={{ color: "var(--secondary-text)", lineHeight: "1.7" }}
                                    >
                                        {platform.description}
                                    </p>

                                    {/* Explore CTA */}
                                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100" style={{ color: "var(--secondary-text)" }}>
                                        <span className="text-sm font-semibold">Explore Strategy</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                                    </div>
                                </div>

                                {/* Decorative corner elements */}
                                <div
                                    className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(circle at top right, ${platform.accentColor}, transparent 70%)`
                                    }}
                                />
                                <div
                                    className="absolute bottom-0 left-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(circle at bottom left, ${platform.accentColor}, transparent 70%)`
                                    }}
                                />

                                {/* Bottom accent bar */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-all duration-500"
                                    style={{
                                        background: platform.gradient,
                                        transform: "scaleX(0)",
                                        transformOrigin: "left"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "scaleX(1)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "scaleX(0)";
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(40px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) scale(1);
                    }
                    50% {
                        transform: translateY(-30px) scale(1.1);
                    }
                }

                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                @keyframes shimmer {
                    0% {
                        background-position: -200% 0;
                    }
                    100% {
                        background-position: 200% 0;
                    }
                }
            `}</style>
        </section>
    );
}