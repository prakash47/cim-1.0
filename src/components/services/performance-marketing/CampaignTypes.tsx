"use client";

import { useState } from "react";
import { Search, Monitor, Share2, Play, ShoppingCart, RefreshCw, TrendingUp, DollarSign, Users, ArrowRight } from "lucide-react";

export default function CampaignTypes() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const campaigns = [
        {
            icon: Search,
            title: "Search Campaigns",
            description: "Capture high-intent users actively searching for your products or services.",
            metrics: { impressions: "1M+", clicks: "50K+", conversions: "5K+" },
            features: ["Keyword targeting", "Ad extensions", "Smart bidding"],
            color: "#4285f4",
        },
        {
            icon: Monitor,
            title: "Display Campaigns",
            description: "Build brand awareness with visual ads across millions of websites.",
            metrics: { impressions: "10M+", clicks: "100K+", reach: "5M+" },
            features: ["Custom audiences", "Responsive ads", "Placement targeting"],
            color: "#34a853",
        },
        {
            icon: Share2,
            title: "Social Campaigns",
            description: "Engage audiences on Facebook, Instagram, LinkedIn, and TikTok.",
            metrics: { engagement: "500K+", leads: "10K+", reach: "2M+" },
            features: ["Lookalike audiences", "Lead forms", "Carousel ads"],
            color: "#1877f2",
        },
        {
            icon: Play,
            title: "Video Campaigns",
            description: "Tell your story with compelling video ads on YouTube and beyond.",
            metrics: { views: "5M+", watchTime: "1M hrs", subscribers: "50K+" },
            features: ["Skippable ads", "Bumper ads", "Discovery ads"],
            color: "#ff0000",
        },
        {
            icon: ShoppingCart,
            title: "Shopping Campaigns",
            description: "Showcase your products directly in search results with rich visuals.",
            metrics: { products: "10K+", sales: "$1M+", roas: "800%" },
            features: ["Product feeds", "Smart Shopping", "Local inventory"],
            color: "#fbbc04",
        },
        {
            icon: RefreshCw,
            title: "Remarketing Campaigns",
            description: "Re-engage visitors who've shown interest but haven't converted yet.",
            metrics: { returnRate: "35%", convRate: "15%", costReduction: "50%" },
            features: ["Dynamic ads", "RLSA", "Cross-device targeting"],
            color: "#ea4335",
        },
    ];

    return (
        <section className="py-16 md:py-24 relative overflow-hidden transition-colors duration-300" style={{ backgroundColor: "var(--card-bg)", color: "var(--foreground)" }}>
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
                        <TrendingUp className="w-4 h-4" style={{ color: "var(--brand-orange)" }} />
                        <span className="text-sm font-bold tracking-wide" style={{ color: "var(--brand-orange)" }}>
                            CAMPAIGN TYPES
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Multi-Channel <span style={{ color: "var(--brand-orange)" }}>Campaign Strategies</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We deploy the right campaign type for each stage of your customer journey.
                    </p>
                </div>

                {/* Campaigns Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {campaigns.map((campaign, index) => {
                        const Icon = campaign.icon;
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
                                        backgroundColor: "color-mix(in srgb, var(--background) 90%, transparent)",
                                        borderColor: isHovered ? campaign.color : "var(--border-color)",
                                        transform: isHovered ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)",
                                        boxShadow: isHovered ? `0 25px 50px -12px ${campaign.color}40` : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {/* Background gradient */}
                                    <div
                                        className="absolute inset-0 transition-opacity duration-500"
                                        style={{
                                            background: `radial-gradient(circle at top right, ${campaign.color}10, transparent 70%)`,
                                            opacity: isHovered ? 1 : 0,
                                        }}
                                    />

                                    {/* Icon */}
                                    <div
                                        className="w-14 h-14 rounded-xl p-3 mb-4 transition-all duration-500"
                                        style={{
                                            backgroundColor: `${campaign.color}20`,
                                            transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
                                        }}
                                    >
                                        <Icon className="w-full h-full" style={{ color: campaign.color }} />
                                    </div>

                                    <h3
                                        className="text-xl font-bold mb-2 transition-colors duration-300"
                                        style={{ color: isHovered ? campaign.color : "var(--foreground)" }}
                                    >
                                        {campaign.title}
                                    </h3>
                                    <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
                                        {campaign.description}
                                    </p>

                                    {/* Metrics */}
                                    <div
                                        className="grid grid-cols-3 gap-2 mb-4 p-3 rounded-xl transition-all duration-300"
                                        style={{
                                            backgroundColor: `${campaign.color}10`,
                                            opacity: isHovered ? 1 : 0.7,
                                        }}
                                    >
                                        {Object.entries(campaign.metrics).map(([key, value], idx) => (
                                            <div key={idx} className="text-center">
                                                <div className="text-sm font-bold" style={{ color: campaign.color }}>{value}</div>
                                                <div className="text-xs capitalize" style={{ color: "var(--secondary-text)" }}>{key}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2">
                                        {campaign.features.map((feature, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-1 rounded-full text-xs font-medium"
                                                style={{
                                                    backgroundColor: `${campaign.color}15`,
                                                    color: campaign.color,
                                                }}
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Bottom accent */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                                        style={{
                                            background: `linear-gradient(90deg, ${campaign.color}, transparent)`,
                                            width: isHovered ? "100%" : "0%",
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
