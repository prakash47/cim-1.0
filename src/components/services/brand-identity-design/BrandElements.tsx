"use client";

import { useState } from "react";
import { Sparkles, Palette, Type, Image, MessageSquare, FileText, Hexagon, CheckCircle2 } from "lucide-react";

export default function BrandElements() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const elements = [
        {
            icon: Hexagon,
            title: "Logo Design",
            description: "Distinctive logomarks that capture your brand essence and remain memorable across all applications.",
            features: ["Primary logo", "Logo variations", "Icon/favicon", "Monochrome versions"],
            color: "#fab900",
            preview: "logo",
        },
        {
            icon: Palette,
            title: "Color Palette",
            description: "Strategic color systems that evoke the right emotions and differentiate your brand.",
            features: ["Primary colors", "Secondary palette", "Gradient options", "Usage ratios"],
            color: "#ee6500",
            preview: "colors",
        },
        {
            icon: Type,
            title: "Typography",
            description: "Font pairings and hierarchy systems that enhance readability and brand personality.",
            features: ["Heading fonts", "Body fonts", "Size scales", "Line heights"],
            color: "#bc3feb",
            preview: "type",
        },
        {
            icon: Image,
            title: "Imagery Style",
            description: "Visual guidelines for photography, illustrations, and graphic elements that feel on-brand.",
            features: ["Photo style", "Illustration style", "Icon sets", "Filters/treatments"],
            color: "#00b5ca",
            preview: "imagery",
        },
        {
            icon: MessageSquare,
            title: "Brand Voice",
            description: "Tone and messaging guidelines that ensure consistent communication across all channels.",
            features: ["Tone of voice", "Key messages", "Do's and don'ts", "Sample copy"],
            color: "#008ac1",
            preview: "voice",
        },
        {
            icon: FileText,
            title: "Brand Guidelines",
            description: "Comprehensive documentation that ensures brand consistency across your organization.",
            features: ["Digital guide", "Print specs", "Usage rules", "Asset library"],
            color: "#6db75c",
            preview: "guidelines",
        },
    ];

    return (
        <section
            className="py-16 md:py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--card-bg)", color: "var(--foreground)" }}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: "2s" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-full border backdrop-blur-sm"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-yellow) 10%, transparent)",
                            borderColor: "var(--brand-yellow)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--brand-yellow)" }} />
                        <span className="text-sm font-bold tracking-wide" style={{ color: "var(--brand-yellow)" }}>
                            BRAND ELEMENTS
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        The Building Blocks of <span style={{ color: "var(--brand-yellow)" }}>Your Brand</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Each element works together to create a cohesive brand identity that resonates with your audience.
                    </p>
                </div>

                {/* Elements Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {elements.map((element, index) => {
                        const Icon = element.icon;
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
                                        borderColor: isHovered ? element.color : "var(--border-color)",
                                        transform: isHovered ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)",
                                        boxShadow: isHovered ? `0 25px 50px -12px ${element.color}40` : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {/* Background gradient on hover */}
                                    <div
                                        className="absolute inset-0 transition-opacity duration-500"
                                        style={{
                                            background: `radial-gradient(circle at top right, ${element.color}15, transparent 70%)`,
                                            opacity: isHovered ? 1 : 0,
                                        }}
                                    />

                                    {/* Icon */}
                                    <div
                                        className="w-14 h-14 rounded-xl p-3 mb-4 transition-all duration-500 relative z-10"
                                        style={{
                                            backgroundColor: `${element.color}20`,
                                            transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
                                        }}
                                    >
                                        <Icon className="w-full h-full" style={{ color: element.color }} />
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-xl font-bold mb-2 relative z-10 transition-colors duration-300"
                                        style={{ color: isHovered ? element.color : "var(--foreground)" }}
                                    >
                                        {element.title}
                                    </h3>
                                    <p className="text-sm mb-4 relative z-10" style={{ color: "var(--secondary-text)" }}>
                                        {element.description}
                                    </p>

                                    {/* Features List */}
                                    <div className="space-y-2 relative z-10">
                                        {element.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: element.color }} />
                                                <span className="text-xs font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Bottom accent */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                                        style={{
                                            background: `linear-gradient(90deg, ${element.color}, transparent)`,
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
