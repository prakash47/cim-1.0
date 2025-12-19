"use client";

import { Target, ArrowRight, Home, ChevronRight, TrendingUp, DollarSign, BarChart3, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    const features = [
        { icon: TrendingUp, label: "ROI-Focused", value: "300%+ Returns" },
        { icon: DollarSign, label: "Cost-Efficient", value: "Lower CPA" },
        { icon: BarChart3, label: "Data-Driven", value: "Real-Time Analytics" },
        { icon: Zap, label: "Fast Results", value: "Quick Wins" },
    ];

    const stats = [
        { value: "$50M+", label: "Ad Spend Managed" },
        { value: "500%", label: "Avg. ROAS" },
        { value: "200+", label: "Campaigns Run" },
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
                    style={{ backgroundColor: "color-mix(in srgb, var(--brand-orange) 15%, transparent)" }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, var(--brand-yellow) 15%, transparent)", animationDelay: "1s" }}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, var(--brand-orange) 10%, transparent)", animationDelay: "2s" }}
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
                    <span className="font-semibold" style={{ color: "var(--brand-orange)" }}>
                        Performance Marketing
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
                                    background: "linear-gradient(90deg, color-mix(in srgb, var(--brand-orange) 10%, transparent), color-mix(in srgb, var(--brand-yellow) 10%, transparent))",
                                    borderColor: "color-mix(in srgb, var(--brand-orange) 30%, transparent)",
                                    color: "var(--brand-orange)",
                                }}
                            >
                                <Target className="w-4 h-4" style={{ color: "var(--brand-orange)" }} />
                                <span className="text-sm font-semibold">Performance Marketing</span>
                            </div>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center lg:text-left">
                            <span
                                className="bg-clip-text text-transparent"
                                style={{ background: "var(--brand-orange)", WebkitBackgroundClip: "text" }}
                            >
                                Data-Driven Ads.
                            </span>
                            <br />
                            <span style={{ color: "var(--foreground)" }}>Measurable Results.</span>
                        </h1>

                        <p className="mt-6 text-lg md:text-xl max-w-xl mx-auto lg:mx-0" style={{ color: "var(--secondary-text)" }}>
                            Maximize your ROI with precision-targeted campaigns across Google, Meta, LinkedIn, and beyond. Every dollar tracked, every conversion optimized.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all hover:scale-105"
                                        style={{
                                            backgroundColor: "color-mix(in srgb, var(--brand-orange) 5%, var(--card-bg))",
                                            borderColor: "var(--border-color)",
                                        }}
                                    >
                                        <Icon className="w-4 h-4" style={{ color: "var(--brand-orange)" }} />
                                        <span className="text-sm font-medium">{feature.label}</span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Stats Row */}
                        <div className="flex flex-wrap gap-8 mt-10 justify-center lg:justify-start">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center lg:text-left">
                                    <div className="text-3xl font-black" style={{ color: "var(--brand-orange)" }}>
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
                                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-white"
                                style={{ backgroundColor: "var(--brand-orange)" }}
                            >
                                Get Your Free Audit
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#case-studies"
                                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full border-2 transition-all duration-300 hover:scale-105"
                                style={{ borderColor: "var(--brand-orange)", color: "var(--brand-orange)" }}
                            >
                                View Case Studies
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="relative">
                        {/* Illustration Card */}
                        <div
                            className="flex items-center justify-center relative rounded-3xl shadow-2xl overflow-hidden"
                            style={{
                                background: "linear-gradient(135deg, color-mix(in srgb, var(--brand-orange) 10%, var(--card-bg)), var(--card-bg))",
                                border: "1px solid var(--border-color)",
                            }}
                        >
                            <Image
                                src="/images/services-images/performance-marketing-illustration.svg"
                                alt="Performance Marketing"
                                width={638}
                                height={565}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 638px"
                                className="w-[70%] h-[70%] rounded-2xl"
                            />
                        </div>

                        {/* Why Choose Us Box */}
                        <div
                            className="mt-6 p-6 rounded-2xl border"
                            style={{
                                backgroundColor: "color-mix(in srgb, var(--brand-orange) 5%, var(--card-bg))",
                                borderColor: "color-mix(in srgb, var(--brand-orange) 20%, var(--border-color))",
                            }}
                        >
                            <h3 className="font-bold text-lg mb-3" style={{ color: "var(--brand-orange)" }}>
                                Why Performance Marketing?
                            </h3>
                            <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
                                Only pay for results. Track every conversion. Scale what works.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Google Ads", "Meta Ads", "LinkedIn", "Programmatic"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full text-xs font-medium"
                                        style={{
                                            backgroundColor: "color-mix(in srgb, var(--brand-orange) 15%, transparent)",
                                            color: "var(--brand-orange)",
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
