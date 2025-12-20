"use client";

import { Palette, ArrowRight, Home, ChevronRight, Sparkles, Layers, PenTool, Eye, Award, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    const features = [
        { icon: Palette, label: "Visual Identity" },
        { icon: Layers, label: "Brand Strategy" },
        { icon: PenTool, label: "Logo Design" },
        { icon: Eye, label: "Brand Guidelines" },
        { icon: Award, label: "Award-Winning" },
        { icon: Zap, label: "Fast Delivery" },
    ];

    const stats = [
        { value: "500+", label: "Brands Created" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "15+", label: "Years Experience" },
    ];

    return (
        <section
            className="relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, var(--brand-yellow) 15%, transparent)" }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, var(--brand-orange) 15%, transparent)", animationDelay: "1s" }}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, var(--brand-purple) 10%, transparent)", animationDelay: "2s" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 py-12 relative">
                {/* Breadcrumbs */}
                <nav
                    className="flex items-center gap-2 text-sm mb-5 justify-center lg:justify-start"
                    aria-label="Breadcrumb"
                >
                    <Link href="/" className="flex items-center gap-1 hover:underline transition-colors" style={{ color: "var(--secondary-text)" }}>
                        <Home className="w-4 h-4" />
                        Home
                    </Link>
                    <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />
                    <Link href="/services" className="hover:underline transition-colors" style={{ color: "var(--secondary-text)" }}>
                        Services
                    </Link>
                    <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />
                    <span className="font-semibold" style={{ color: "var(--brand-yellow)" }}>
                        Brand Identity & Design
                    </span>
                </nav>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* LEFT CONTENT */}
                    <div className="text-start lg:text-left">
                        {/* Badge */}
                        <div className="flex justify-center lg:justify-start">
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border transition-colors"
                                style={{
                                    background: "linear-gradient(90deg, color-mix(in srgb, var(--brand-yellow) 10%, transparent), color-mix(in srgb, var(--brand-orange) 10%, transparent))",
                                    borderColor: "color-mix(in srgb, var(--brand-yellow) 30%, transparent)",
                                    color: "var(--brand-yellow)",
                                }}
                            >
                                <Palette className="w-4 h-4" style={{ color: "var(--brand-yellow)" }} />
                                <span className="text-sm font-semibold">Brand Identity & Design</span>
                            </div>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center lg:text-left">
                            <span
                                className="bg-clip-text text-transparent"
                                style={{ background: "var(--brand-yellow)", WebkitBackgroundClip: "text" }}
                            >
                                Craft Your Brand.
                            </span>
                            <br />
                            <span style={{ color: "var(--foreground)" }}>Define Your Identity.</span>
                        </h1>

                        <p className="mt-6 text-lg md:text-xl max-w-xl mx-auto lg:mx-0" style={{ color: "var(--secondary-text)" }}>
                            Build a memorable brand that resonates with your audience. From logo design to complete brand systems, we create identities that stand out and stand the test of time.
                        </p>

                        {/* Feature Pills */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 px-4 py-3 rounded-xl border transition-all hover:scale-105"
                                        style={{
                                            backgroundColor: "color-mix(in srgb, var(--brand-yellow) 5%, var(--card-bg))",
                                            borderColor: "var(--border-color)",
                                        }}
                                    >
                                        <Icon className="w-4 h-4" style={{ color: "var(--brand-yellow)" }} />
                                        <span className="text-sm font-medium">{feature.label}</span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Stats Row */}
                        <div className="flex flex-wrap gap-8 mt-10 justify-center lg:justify-start">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center lg:text-left">
                                    <div className="text-3xl font-black" style={{ color: "var(--brand-yellow)" }}>
                                        {stat.value}
                                    </div>
                                    <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10 justify-center lg:justify-start">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-black"
                                style={{ backgroundColor: "var(--brand-yellow)" }}
                            >
                                Start Your Brand Journey
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#portfolio"
                                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full border-2 transition-all duration-300 hover:scale-105"
                                style={{ borderColor: "var(--brand-yellow)", color: "var(--brand-yellow)" }}
                            >
                                View Our Work
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT CONTENT - Brand DNA Visualization */}
                    <div className="relative">
                        {/* Main Visual Card */}
                        <div
                            className="relative rounded-3xl shadow-2xl overflow-hidden p-6 max-w-md mx-auto"
                            style={{
                                background: "linear-gradient(135deg, color-mix(in srgb, var(--brand-yellow) 10%, var(--card-bg)), var(--card-bg))",
                                border: "1px solid var(--border-color)",
                            }}
                        >
                            {/* Brand DNA Visualization */}
                            <div className="grid grid-cols-2 gap-3">
                                {/* Logo Preview */}
                                <div
                                    className="aspect-square rounded-xl flex items-center justify-center p-4 transition-transform hover:scale-105"
                                    style={{ backgroundColor: "color-mix(in srgb, var(--brand-yellow) 15%, var(--card-bg))" }}
                                >
                                    <div className="text-center">
                                        <div
                                            className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-2"
                                            style={{ background: "linear-gradient(135deg, var(--brand-yellow), var(--brand-orange))" }}
                                        >
                                            <Sparkles className="w-6 h-6 text-black" />
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "var(--secondary-text)" }}>Logo Design</span>
                                    </div>
                                </div>

                                {/* Color Palette */}
                                <div
                                    className="aspect-square rounded-xl p-3 transition-transform hover:scale-105"
                                    style={{ backgroundColor: "color-mix(in srgb, var(--foreground) 5%, var(--card-bg))" }}
                                >
                                    <span className="text-[10px] font-bold uppercase tracking-wider mb-2 block" style={{ color: "var(--secondary-text)" }}>Colors</span>
                                    <div className="grid grid-cols-2 gap-1.5 h-[calc(100%-20px)]">
                                        <div className="rounded-lg" style={{ backgroundColor: "var(--brand-yellow)" }} />
                                        <div className="rounded-lg" style={{ backgroundColor: "var(--brand-orange)" }} />
                                        <div className="rounded-lg" style={{ backgroundColor: "#1a1a1a" }} />
                                        <div className="rounded-lg" style={{ backgroundColor: "#f5f5f5" }} />
                                    </div>
                                </div>

                                {/* Typography */}
                                <div
                                    className="aspect-square rounded-xl p-3 flex flex-col justify-center transition-transform hover:scale-105"
                                    style={{ backgroundColor: "color-mix(in srgb, var(--foreground) 5%, var(--card-bg))" }}
                                >
                                    <span className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--secondary-text)" }}>Typography</span>
                                    <div className="space-y-0.5">
                                        <div className="text-xl font-black" style={{ color: "var(--foreground)" }}>Aa</div>
                                        <div className="text-xs font-bold" style={{ color: "var(--foreground)" }}>Heading</div>
                                        <div className="text-[10px]" style={{ color: "var(--secondary-text)" }}>Body Text</div>
                                    </div>
                                </div>

                                {/* Brand Pattern */}
                                <div
                                    className="aspect-square rounded-xl p-3 overflow-hidden relative transition-transform hover:scale-105"
                                    style={{ backgroundColor: "var(--brand-yellow)" }}
                                >
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-black/70 relative z-10">Patterns</span>
                                    {/* Pattern Grid */}
                                    <div className="absolute inset-0 opacity-20">
                                        {[...Array(9)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="absolute w-6 h-6 rounded-full"
                                                style={{
                                                    backgroundColor: "#000",
                                                    top: `${Math.floor(i / 3) * 33}%`,
                                                    left: `${(i % 3) * 33}%`,
                                                    transform: `scale(${0.4 + (i % 3) * 0.3})`,
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose Us Box */}
                        <div
                            className="mt-6 p-6 rounded-2xl border"
                            style={{
                                backgroundColor: "color-mix(in srgb, var(--brand-yellow) 5%, var(--card-bg))",
                                borderColor: "color-mix(in srgb, var(--brand-yellow) 20%, var(--border-color))",
                            }}
                        >
                            <h3 className="font-bold text-lg mb-3" style={{ color: "var(--brand-yellow)" }}>
                                Why Professional Branding?
                            </h3>
                            <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
                                A strong brand identity builds trust, recognition, and lasting customer relationships.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Logo Design", "Brand Strategy", "Visual Identity", "Guidelines"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full text-xs font-medium"
                                        style={{
                                            backgroundColor: "color-mix(in srgb, var(--brand-yellow) 15%, transparent)",
                                            color: "var(--brand-yellow)",
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
