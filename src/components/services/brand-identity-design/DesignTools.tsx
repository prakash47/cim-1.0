"use client";

import { useState } from "react";
import { Sparkles, Wrench } from "lucide-react";
import Image from "next/image";

export default function DesignTools() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const tools = [
        {
            name: "Adobe Photoshop",
            description: "Photo editing & compositing",
            logo: "/images/brand-identity-design-logos/Adobe_Photoshop_logo.png",
            color: "#31A8FF", // Photoshop Blue
        },
        {
            name: "Adobe Illustrator",
            description: "Vector graphics & illustration",
            logo: "/images/brand-identity-design-logos/Adobe_Illustrator_logo.png",
            color: "#FF9A00", // Illustrator Orange
        },
        {
            name: "Figma",
            description: "UI/UX design & prototyping",
            logo: "/images/brand-identity-design-logos/Figma-logo.svg",
            color: "#A259FF", // Figma Purple
        },
        {
            name: "Adobe XD",
            description: "User experience design",
            logo: "/images/brand-identity-design-logos/Adobe_XD_logo.png",
            color: "#FF61F6", // XD Pink/Magenta
        },
        {
            name: "Sketch",
            description: "Digital design toolkit",
            logo: "/images/brand-identity-design-logos/Sketch_Logo.png",
            color: "#F7B500", // Sketch Yellow/Orange
        },
        {
            name: "Adobe InDesign",
            description: "Layout & publishing",
            logo: "/images/brand-identity-design-logos/Adobe_InDesign_logo.png",
            color: "#FF3366", // InDesign Pink/Magenta
        },
        {
            name: "Canva",
            description: "Quick design & templates",
            logo: "/images/brand-identity-design-logos/canva-logo.png",
            color: "#00C4CC", // Canva Teal
        },
        {
            name: "After Effects",
            description: "Motion graphics & animation",
            logo: "/images/brand-identity-design-logos/Adobe_After_Effects_logo.png",
            color: "#9999FF", // After Effects Purple
        },
    ];

    return (
        <section
            id="tools"
            className="py-16 md:py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(135deg, var(--brand-yellow) 0%, transparent 50%)`,
                    opacity: 0.1,
                }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-full border backdrop-blur-sm"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-yellow) 10%, transparent)",
                            borderColor: "var(--brand-yellow)",
                        }}
                    >
                        <Wrench className="w-4 h-4" style={{ color: "var(--brand-yellow)" }} />
                        <span className="text-sm font-bold tracking-wide" style={{ color: "var(--brand-yellow)" }}>
                            OUR TOOLKIT
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Industry-Leading <span style={{ color: "var(--brand-yellow)" }}>Design Tools</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We use the best-in-class design software to bring your brand vision to life with precision and creativity.
                    </p>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
                    {tools.map((tool, index) => {
                        const isHovered = hoveredIndex === index;
                        return (
                            <div
                                key={index}
                                className="group relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div
                                    className="relative p-6 rounded-2xl transition-all duration-500 border overflow-hidden text-center h-full"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--card-bg) 90%, transparent)",
                                        borderColor: isHovered ? tool.color : "var(--border-color)",
                                        transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                                        boxShadow: isHovered ? `0 20px 40px -12px ${tool.color}40` : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {/* Background gradient on hover */}
                                    <div
                                        className="absolute inset-0 transition-opacity duration-500"
                                        style={{
                                            background: `radial-gradient(circle at center, ${tool.color}15, transparent 70%)`,
                                            opacity: isHovered ? 1 : 0,
                                        }}
                                    />

                                    {/* Tool Logo */}
                                    <div
                                        className="w-16 h-16 mx-auto mb-4 rounded-xl p-3 transition-all duration-500 relative z-10"
                                        style={{
                                            backgroundColor: `${tool.color}15`,
                                            transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
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
                                    <h3
                                        className="text-sm font-bold mb-1 relative z-10 transition-colors duration-300"
                                        style={{ color: isHovered ? tool.color : "var(--foreground)" }}
                                    >
                                        {tool.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-xs relative z-10" style={{ color: "var(--secondary-text)" }}>
                                        {tool.description}
                                    </p>

                                    {/* Bottom accent */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                                        style={{
                                            background: tool.color,
                                            width: isHovered ? "100%" : "0%",
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom tagline */}
                <div className="text-center mt-12">
                    <div
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-yellow) 10%, var(--card-bg))",
                            border: "1px solid color-mix(in srgb, var(--brand-yellow) 20%, var(--border-color))",
                        }}
                    >
                        <Sparkles className="w-5 h-5" style={{ color: "var(--brand-yellow)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                            Mastery of professional tools for exceptional results
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
