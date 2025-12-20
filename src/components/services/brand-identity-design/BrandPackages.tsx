"use client";

import { useState } from "react";
import { Package, Check, Star, Sparkles, ArrowRight, Crown, Zap } from "lucide-react";

export default function BrandPackages() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const packages = [
        {
            name: "Starter",
            icon: Zap,
            description: "Perfect for startups and small businesses launching their brand",
            price: "Starting at",
            amount: "$2,500",
            popular: false,
            features: [
                { text: "Primary logo design", included: true },
                { text: "2 logo variations", included: true },
                { text: "Color palette (3 colors)", included: true },
                { text: "Typography selection", included: true },
                { text: "Basic brand guide (PDF)", included: true },
                { text: "2 revision rounds", included: true },
                { text: "Social media templates", included: false },
                { text: "Stationery design", included: false },
                { text: "Brand strategy session", included: false },
            ],
            color: "#00b5ca",
            cta: "Get Started",
        },
        {
            name: "Professional",
            icon: Star,
            description: "Complete brand identity for growing businesses ready to stand out",
            price: "Starting at",
            amount: "$5,000",
            popular: true,
            features: [
                { text: "Primary + secondary logos", included: true },
                { text: "5 logo variations", included: true },
                { text: "Full color system", included: true },
                { text: "Custom typography", included: true },
                { text: "Comprehensive brand guide", included: true },
                { text: "4 revision rounds", included: true },
                { text: "Social media kit", included: true },
                { text: "Business stationery", included: true },
                { text: "Brand strategy session", included: false },
            ],
            color: "#fab900",
            cta: "Most Popular",
        },
        {
            name: "Enterprise",
            icon: Crown,
            description: "Premium brand ecosystem for established companies and rebrands",
            price: "Starting at",
            amount: "$10,000",
            popular: false,
            features: [
                { text: "Complete logo system", included: true },
                { text: "Unlimited variations", included: true },
                { text: "Extended color system", included: true },
                { text: "Custom font licensing", included: true },
                { text: "Premium brand book", included: true },
                { text: "Unlimited revisions", included: true },
                { text: "Full social media kit", included: true },
                { text: "Complete stationery suite", included: true },
                { text: "Strategic brand workshop", included: true },
            ],
            color: "#bc3feb",
            cta: "Contact Us",
        },
    ];

    return (
        <section
            className="py-16 md:py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--card-bg)", color: "var(--foreground)" }}
        >
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-10 animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: "2s" }} />
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
                        <Package className="w-4 h-4" style={{ color: "var(--brand-yellow)" }} />
                        <span className="text-sm font-bold tracking-wide" style={{ color: "var(--brand-yellow)" }}>
                            PACKAGES
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Brand Identity <span style={{ color: "var(--brand-yellow)" }}>Packages</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Choose the perfect package for your business needs. All packages include dedicated support.
                    </p>
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {packages.map((pkg, index) => {
                        const Icon = pkg.icon;
                        const isHovered = hoveredIndex === index;
                        const isPopular = pkg.popular;

                        return (
                            <div
                                key={index}
                                className="relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Popular Badge */}
                                {isPopular && (
                                    <div
                                        className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-sm font-bold text-black z-10"
                                        style={{ backgroundColor: "var(--brand-yellow)" }}
                                    >
                                        <Sparkles className="w-3.5 h-3.5 inline mr-1" />
                                        Recommended
                                    </div>
                                )}

                                <div
                                    className={`relative p-6 md:p-8 rounded-2xl border transition-all duration-500 h-full ${isPopular ? 'border-2' : ''}`}
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--background) 90%, transparent)",
                                        borderColor: isPopular ? "var(--brand-yellow)" : isHovered ? pkg.color : "var(--border-color)",
                                        transform: isHovered ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)",
                                        boxShadow: isPopular
                                            ? `0 25px 50px -12px var(--brand-yellow)30`
                                            : isHovered
                                                ? `0 25px 50px -12px ${pkg.color}30`
                                                : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {/* Header */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div
                                            className="w-12 h-12 rounded-xl p-2.5 transition-all duration-300"
                                            style={{
                                                backgroundColor: `${pkg.color}20`,
                                                transform: isHovered ? "rotate(-5deg) scale(1.1)" : "rotate(0) scale(1)",
                                            }}
                                        >
                                            <Icon className="w-full h-full" style={{ color: pkg.color }} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>
                                                {pkg.name}
                                            </h3>
                                            <span className="text-xs" style={{ color: "var(--secondary-text)" }}>
                                                {pkg.price}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className="mb-4">
                                        <span className="text-4xl font-black" style={{ color: pkg.color }}>
                                            {pkg.amount}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm mb-6" style={{ color: "var(--secondary-text)" }}>
                                        {pkg.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-3 mb-8">
                                        {pkg.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div
                                                    className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${feature.included ? '' : 'opacity-40'}`}
                                                    style={{
                                                        backgroundColor: feature.included ? `${pkg.color}20` : "color-mix(in srgb, var(--foreground) 10%, transparent)",
                                                    }}
                                                >
                                                    <Check
                                                        className="w-3 h-3"
                                                        style={{
                                                            color: feature.included ? pkg.color : "var(--secondary-text)",
                                                        }}
                                                    />
                                                </div>
                                                <span
                                                    className={`text-sm ${feature.included ? '' : 'line-through opacity-50'}`}
                                                    style={{ color: "var(--foreground)" }}
                                                >
                                                    {feature.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <a
                                        href="/contact"
                                        className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                                        style={{
                                            backgroundColor: isPopular ? "var(--brand-yellow)" : `${pkg.color}20`,
                                            color: isPopular ? "#000" : pkg.color,
                                        }}
                                    >
                                        {pkg.cta}
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Custom Note */}
                <p className="text-center mt-10 text-sm" style={{ color: "var(--secondary-text)" }}>
                    Need a custom solution? <a href="/contact" className="font-semibold underline" style={{ color: "var(--brand-yellow)" }}>Contact us</a> for a tailored quote.
                </p>
            </div>
        </section>
    );
}
