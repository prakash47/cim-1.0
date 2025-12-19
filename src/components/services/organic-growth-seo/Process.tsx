"use client";

import { useState } from "react";
import { ListChecks, Search, FileText, Code, Shield, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Process() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    const steps = [
        {
            icon: ListChecks,
            title: "Comprehensive SEO Audit",
            description: "A deep dive into your current website performance, technical health, content gaps, and backlink profile to identify immediate opportunities.",
            details: ["Site health analysis", "Competitor research", "Keyword gap analysis", "Content audit"],
        },
        {
            icon: Search,
            title: "Strategic Keyword Research",
            description: "Identifying high-value, low-competition keywords that align with user intent and your business goals for maximum impact.",
            details: ["Search volume analysis", "Intent mapping", "Long-tail opportunities", "SERP analysis"],
        },
        {
            icon: FileText,
            title: "Content Optimization & Creation",
            description: "Revamping existing content and developing new, authoritative content to target identified keywords and establish topical authority.",
            details: ["Content planning", "On-page optimization", "E-A-T signals", "Content refresh"],
        },
        {
            icon: Code,
            title: "Technical Fixes & Enhancements",
            description: "Addressing Core Web Vitals, site speed, mobile responsiveness, and crawlability issues for a flawless user experience.",
            details: ["Core Web Vitals", "Mobile optimization", "Schema markup", "Crawl optimization"],
        },
        {
            icon: Shield,
            title: "Authority Building (Link Building)",
            description: "Executing ethical outreach and content promotion strategies to secure high-quality, relevant backlinks from industry leaders.",
            details: ["Outreach campaigns", "Guest posting", "Digital PR", "Broken link building"],
        },
        {
            icon: TrendingUp,
            title: "Performance Tracking & Reporting",
            description: "Continuous monitoring of rankings, traffic, and conversions, providing transparent, actionable reports and strategic adjustments.",
            details: ["Rank tracking", "Traffic analysis", "Conversion monitoring", "Monthly reports"],
        },
    ];

    return (
        <section className="py-16 md:py-24 transition-colors duration-300" style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--border-color)",
        }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-full border backdrop-blur-sm"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-seo) 10%, transparent)",
                            borderColor: "var(--brand-seo)",
                        }}
                    >
                        <ListChecks className="w-4 h-4" style={{ color: "var(--brand-seo)" }} />
                        <span className="text-sm font-bold tracking-wide" style={{ color: "var(--brand-seo)" }}>
                            OUR PROCESS
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Our Proven <span style={{ color: "var(--brand-seo)" }}>SEO Process</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We follow a structured, six-step framework to ensure every aspect of your Organic Traffic Growth strategy is covered.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Vertical Line for Timeline */}
                    <div
                        className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden lg:block rounded-full"
                        style={{ backgroundColor: "color-mix(in srgb, var(--brand-seo) 30%, transparent)" }}
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
                                                    ? "color-mix(in srgb, var(--brand-seo) 5%, var(--card-bg))"
                                                    : "color-mix(in srgb, var(--card-bg) 80%, transparent)",
                                                borderColor: isHovered ? "var(--brand-seo)" : "var(--border-color)",
                                            }}
                                        >
                                            {/* Mobile Step Number */}
                                            <div className="lg:hidden flex items-center gap-3 mb-4">
                                                <div
                                                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
                                                    style={{ backgroundColor: "var(--brand-seo)" }}
                                                >
                                                    {index + 1}
                                                </div>
                                                <span className="text-sm font-semibold" style={{ color: "var(--brand-seo)" }}>
                                                    Step {index + 1}
                                                </span>
                                            </div>

                                            <h3 className="text-xl md:text-2xl font-bold mb-3 transition-colors"
                                                style={{ color: isHovered ? "var(--brand-seo)" : "var(--foreground)" }}
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
                                                        <CheckCircle2 className="w-3 h-3" style={{ color: "var(--brand-seo)" }} />
                                                        <span className="text-xs font-medium" style={{ color: "var(--foreground)" }}>
                                                            {detail}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Center Circle - Desktop Only */}
                                    <div className="hidden lg:flex flex-col items-center z-10">
                                        <div
                                            className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}
                                            style={{
                                                backgroundColor: "var(--brand-seo)",
                                                border: "4px solid var(--background)",
                                            }}
                                        >
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                    </div>

                                    {/* Step Number on opposite side - Desktop Only */}
                                    <div className={`flex-1 hidden lg:flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}>
                                        <div
                                            className={`relative transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
                                        >
                                            {/* Large Step Number */}
                                            <span
                                                className="text-8xl font-black transition-all duration-300"
                                                style={{
                                                    color: isHovered ? "var(--brand-seo)" : "color-mix(in srgb, var(--brand-seo) 20%, transparent)",
                                                    textShadow: isHovered ? "0 0 40px color-mix(in srgb, var(--brand-seo) 30%, transparent)" : "none",
                                                }}
                                            >
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            {/* "Step" label below number */}
                                            <div
                                                className={`absolute -bottom-2 ${isEven ? 'left-0' : 'right-0'} text-xs font-bold uppercase tracking-widest transition-all duration-300`}
                                                style={{
                                                    color: isHovered ? "var(--brand-seo)" : "var(--secondary-text)",
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
                <div className="mt-16 text-center">
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-lg"
                        style={{ backgroundColor: "var(--brand-seo)" }}
                    >
                        Start Your SEO Journey
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
