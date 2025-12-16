"use client";

import { Sparkles } from "lucide-react";

export default function Platforms() {
    const platforms = [
        {
            name: "Instagram Marketing",
            description: "Visually-driven strategies focused on high-quality content, Reels, Stories, and effective use of shopping features to drive engagement and sales.",
            gradient: "linear-gradient(135deg, #E1306C, #C13584)",
            icon: "📷",
        },
        {
            name: "Facebook",
            description: "Leveraging the platform's robust advertising tools and community groups for targeted lead generation and building a loyal customer base.",
            gradient: "linear-gradient(135deg, #1877F2, #0A66C2)",
            icon: "f",
        },
        {
            name: "LinkedIn",
            description: "Professional B2B marketing, thought leadership content, and targeted outreach to key decision-makers and industry professionals.",
            gradient: "linear-gradient(135deg, #0A66C2, #0A63BC)",
            icon: "in",
        },
        {
            name: "Twitter (X)",
            description: "Real-time engagement, trend-jacking, and building a strong, authoritative brand voice through concise and impactful messaging.",
            gradient: "linear-gradient(135deg, #000000, #333333)",
            icon: "𝕏",
        },
        {
            name: "YouTube",
            description: "Developing high-value video content, optimizing for search, and utilizing YouTube Ads to capture attention and educate potential customers.",
            gradient: "linear-gradient(135deg, #FF0000, #282828)",
            icon: "▶",
        },
        {
            name: "Pinterest",
            description: "Strategy focused on visual discovery, driving traffic to e-commerce sites, and capturing users in the early stages of the buying journey.",
            gradient: "linear-gradient(135deg, #E60023, #AD081B)",
            icon: "📌",
        },
    ];

    return (
        <section
            className="px-6 md:px-12 xl:px-20 py-16 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div>
                {/* Header */}
                <div className="text-center mb-16 max-w-6xl mx-auto">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
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
                            background: "linear-gradient(90deg, var(--brand-teal), var(--brand-teal))",
                        }}
                    />

                    <p className="text-lg max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Our team has deep expertise in developing winning strategies for the world's most popular platforms.
                    </p>
                </div>

                {/* Platforms Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {platforms.map((platform, idx) => (
                        <div
                            key={idx}
                            className="rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg hover:scale-105 overflow-hidden relative group"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                            }}
                        >
                            {/* Background Gradient */}
                            <div
                                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                                style={{
                                    background: platform.gradient,
                                }}
                            />

                            {/* Content */}
                            <div className="relative z-10">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-xl font-bold text-white"
                                    style={{
                                        background: platform.gradient,
                                    }}
                                >
                                    {platform.icon}
                                </div>

                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {platform.name}
                                </h3>

                                <p style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>
                                    {platform.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
