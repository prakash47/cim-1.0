"use client";

import { useState } from "react";
import { ClipboardList, Search, Rocket, Settings, TrendingUp, FileText, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Process() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    const steps = [
        {
            icon: ClipboardList,
            title: "Discovery & Audit",
            description: "We analyze your current marketing efforts, competitors, and identify opportunities for growth.",
            details: ["Account audit", "Competitor analysis", "Opportunity mapping", "Goal alignment"],
        },
        {
            icon: Search,
            title: "Strategy Development",
            description: "Custom campaign strategy based on your goals, audience, and budget allocation.",
            details: ["Channel selection", "Audience targeting", "Budget planning", "KPI definition"],
        },
        {
            icon: Rocket,
            title: "Campaign Launch",
            description: "We build and launch your campaigns with precision tracking and optimized creatives.",
            details: ["Ad creation", "Tracking setup", "A/B testing", "Landing pages"],
        },
        {
            icon: Settings,
            title: "Continuous Optimization",
            description: "Daily monitoring and weekly optimizations to improve performance and reduce costs.",
            details: ["Bid adjustments", "Audience refinement", "Creative testing", "Quality score"],
        },
        {
            icon: TrendingUp,
            title: "Scale & Expand",
            description: "Once we find what works, we scale successful campaigns and expand to new channels.",
            details: ["Budget scaling", "New audiences", "Channel expansion", "Market testing"],
        },
        {
            icon: FileText,
            title: "Report & Iterate",
            description: "Comprehensive monthly reports with insights, learnings, and recommendations.",
            details: ["Performance reports", "ROI analysis", "Strategic insights", "Next steps"],
        },
    ];

    return (
        <section className="py-16 md:py-24 transition-colors duration-300" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-full border backdrop-blur-sm"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-orange) 10%, transparent)",
                            borderColor: "var(--brand-orange)",
                        }}
                    >
                        <ClipboardList className="w-4 h-4" style={{ color: "var(--brand-orange)" }} />
                        <span className="text-sm font-bold tracking-wide" style={{ color: "var(--brand-orange)" }}>
                            OUR PROCESS
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Our Proven <span style={{ color: "var(--brand-orange)" }}>6-Step Process</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A systematic approach to building, optimizing, and scaling high-performance campaigns.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div
                        className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden lg:block rounded-full"
                        style={{ backgroundColor: "color-mix(in srgb, var(--brand-orange) 30%, transparent)" }}
                    />

                    <div className="space-y-8 lg:space-y-0">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isEven = index % 2 === 0;
                            const isHovered = hoveredStep === index;

                            return (
                                <div
                                    key={index}
                                    className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${isEven ? '' : 'lg:flex-row-reverse'}`}
                                    onMouseEnter={() => setHoveredStep(index)}
                                    onMouseLeave={() => setHoveredStep(null)}
                                >
                                    {/* Content Card */}
                                    <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                                        <div
                                            className={`p-6 rounded-2xl border transition-all duration-300 ${isHovered ? 'shadow-2xl -translate-y-1' : 'shadow-lg'}`}
                                            style={{
                                                backgroundColor: isHovered
                                                    ? "color-mix(in srgb, var(--brand-orange) 5%, var(--card-bg))"
                                                    : "color-mix(in srgb, var(--card-bg) 80%, transparent)",
                                                borderColor: isHovered ? "var(--brand-orange)" : "var(--border-color)",
                                            }}
                                        >
                                            {/* Mobile Step Number */}
                                            <div className="lg:hidden flex items-center gap-3 mb-4">
                                                <div
                                                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
                                                    style={{ backgroundColor: "var(--brand-orange)" }}
                                                >
                                                    {index + 1}
                                                </div>
                                                <span className="text-sm font-semibold" style={{ color: "var(--brand-orange)" }}>
                                                    Step {index + 1}
                                                </span>
                                            </div>

                                            <h3
                                                className="text-xl md:text-2xl font-bold mb-3 transition-colors"
                                                style={{ color: isHovered ? "var(--brand-orange)" : "var(--foreground)" }}
                                            >
                                                {step.title}
                                            </h3>
                                            <p className="text-sm md:text-base mb-4" style={{ color: "var(--secondary-text)" }}>
                                                {step.description}
                                            </p>

                                            {/* Details */}
                                            <div className={`flex flex-wrap gap-2 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                                                {step.details.map((detail, idx) => (
                                                    <div key={idx} className="flex items-center gap-1">
                                                        <CheckCircle2 className="w-3 h-3" style={{ color: "var(--brand-orange)" }} />
                                                        <span className="text-xs font-medium">{detail}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Center Circle */}
                                    <div className="hidden lg:flex flex-col items-center z-10">
                                        <div
                                            className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}
                                            style={{
                                                backgroundColor: "var(--brand-orange)",
                                                border: "4px solid var(--background)",
                                            }}
                                        >
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                    </div>

                                    {/* Step Number */}
                                    <div className={`flex-1 hidden lg:flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}>
                                        <div className={`relative transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
                                            <span
                                                className="text-8xl font-black transition-all duration-300"
                                                style={{
                                                    color: isHovered ? "var(--brand-orange)" : "color-mix(in srgb, var(--brand-orange) 20%, transparent)",
                                                    textShadow: isHovered ? "0 0 40px color-mix(in srgb, var(--brand-orange) 30%, transparent)" : "none",
                                                }}
                                            >
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <div
                                                className={`absolute -bottom-2 ${isEven ? 'left-0' : 'right-0'} text-xs font-bold uppercase tracking-widest transition-all duration-300`}
                                                style={{
                                                    color: isHovered ? "var(--brand-orange)" : "var(--secondary-text)",
                                                    opacity: isHovered ? 1 : 0.6,
                                                }}
                                            >
                                                Step
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 sm:mt-16 text-center">
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-lg text-base sm:text-lg w-full sm:w-auto"
                        style={{ backgroundColor: "var(--brand-orange)" }}
                    >
                        Start Your Campaign
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
