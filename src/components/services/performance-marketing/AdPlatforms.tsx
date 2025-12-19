"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, TrendingUp, Users, Target } from "lucide-react";

export default function AdPlatforms() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const platforms = [
        {
            name: "Google Ads",
            logo: "/images/performance-marketing-logos/google-ads-logo.svg",
            description: "Search, Display, Shopping & YouTube campaigns",
            stats: { reach: "5B+ daily searches", ctr: "4.2% avg CTR" },
            color: "#4285f4",
            gradient: "from-blue-500 to-green-500",
        },
        {
            name: "Meta Ads",
            logo: "/images/performance-marketing-logos/meta-ads-logo.png",
            description: "Facebook & Instagram advertising",
            stats: { reach: "3B+ users", ctr: "1.6% avg CTR" },
            color: "#1877f2",
            gradient: "from-blue-600 to-purple-600",
        },
        {
            name: "LinkedIn Ads",
            logo: "/images/performance-marketing-logos/linkedin-ads-logo.svg",
            description: "B2B lead generation & thought leadership",
            stats: { reach: "900M+ professionals", ctr: "0.5% avg CTR" },
            color: "#0a66c2",
            gradient: "from-blue-700 to-cyan-600",
        },
        {
            name: "TikTok Ads",
            logo: "/images/performance-marketing-logos/tiktok-ads-logo.webp",
            description: "Short-form video ads for Gen Z & Millennials",
            stats: { reach: "1B+ users", ctr: "2.5% avg CTR" },
            color: "#ff59ffff",
            gradient: "from-pink-500 to-cyan-400",
        },
        {
            name: "YouTube Ads",
            logo: "/images/performance-marketing-logos/youtube-ads-logo.png",
            description: "Video advertising at scale",
            stats: { reach: "2B+ monthly users", ctr: "0.5% avg CTR" },
            color: "#ff0000",
            gradient: "from-red-600 to-red-400",
        },
        {
            name: "Amazon Ads",
            logo: "/images/performance-marketing-logos/Amazon-ads-logo.svg",
            description: "E-commerce & product advertising",
            stats: { reach: "300M+ customers", ctr: "0.4% avg CTR" },
            color: "#ff9900",
            gradient: "from-orange-500 to-yellow-500",
        },
    ];

    return (
        <section className="py-16 md:py-24 relative overflow-hidden transition-colors duration-300" style={{ backgroundColor: "var(--card-bg)", color: "var(--foreground)" }}>
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, var(--brand-orange) 1px, transparent 0)`,
                    backgroundSize: '50px 50px',
                }} />
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
                        <ExternalLink className="w-4 h-4" style={{ color: "var(--brand-orange)" }} />
                        <span className="text-sm font-bold tracking-wide" style={{ color: "var(--brand-orange)" }}>
                            AD PLATFORMS
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        We Manage Ads Across <span style={{ color: "var(--brand-orange)" }}>All Major Platforms</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Certified experts across every major advertising platform, delivering integrated campaigns for maximum reach.
                    </p>
                </div>

                {/* Platforms Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {platforms.map((platform, index) => {
                        const isHovered = hoveredIndex === index;

                        return (
                            <div
                                key={index}
                                className="group relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div
                                    className="relative p-6 rounded-2xl transition-all duration-500 border overflow-hidden h-full backdrop-blur-sm"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--background) 90%, transparent)",
                                        borderColor: isHovered ? platform.color : "var(--border-color)",
                                        transform: isHovered ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
                                        boxShadow: isHovered ? `0 25px 50px -12px ${platform.color}50` : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {/* Gradient background */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 transition-opacity duration-500`}
                                        style={{ opacity: isHovered ? 0.1 : 0 }}
                                    />

                                    {/* Logo */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div
                                            className="w-16 h-16 rounded-xl p-3 transition-all duration-500 flex items-center justify-center"
                                            style={{
                                                backgroundColor: `${platform.color}15`,
                                                transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
                                            }}
                                        >
                                            <Image
                                                src={platform.logo}
                                                alt={platform.name}
                                                width={40}
                                                height={40}
                                                className="w-10 h-10 object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h3
                                                className="text-xl font-bold transition-colors duration-300"
                                                style={{ color: isHovered ? platform.color : "var(--foreground)" }}
                                            >
                                                {platform.name}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
                                        {platform.description}
                                    </p>

                                    {/* Stats */}
                                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4">
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4 flex-shrink-0" style={{ color: platform.color }} />
                                            <span className="text-xs font-medium">{platform.stats.reach}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <TrendingUp className="w-4 h-4 flex-shrink-0" style={{ color: platform.color }} />
                                            <span className="text-xs font-medium">{platform.stats.ctr}</span>
                                        </div>
                                    </div>

                                    {/* Bottom accent */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500 rounded-full"
                                        style={{
                                            background: `linear-gradient(90deg, ${platform.color}, transparent)`,
                                            width: isHovered ? "100%" : "0%",
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Certified Badge */}
                <div className="mt-12 sm:mt-16 text-center px-4">
                    <div
                        className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 rounded-2xl sm:rounded-full border"
                        style={{ backgroundColor: "color-mix(in srgb, var(--brand-orange) 5%, var(--card-bg))", borderColor: "var(--brand-orange)" }}
                    >
                        <Target className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-orange)" }} />
                        <span className="font-semibold text-center text-sm sm:text-base" style={{ color: "var(--brand-orange)" }}>
                            Google Partner | Meta Business Partner | LinkedIn Marketing Partner
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
