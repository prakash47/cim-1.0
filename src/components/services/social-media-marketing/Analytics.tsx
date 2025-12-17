"use client";

import {
    Sparkles,
    TrendingUp,
    Users,
    Target,
    BarChart3,
    FileText,
    Activity,
    ShoppingCart,
    TestTube2,
    DollarSign,
    Eye,
    MousePointerClick
} from "lucide-react";

export default function Analytics() {
    const metrics = [
        {
            icon: Target,
            title: "KPI Tracking",
            description: "Monitoring core metrics like Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), and Customer Lifetime Value (CLV).",
            gradient: "linear-gradient(135deg, var(--brand-teal), var(--brand-cyan))",
            accentColor: "var(--brand-teal)",
        },
        {
            icon: Activity,
            title: "Engagement Metrics",
            description: "Tracking likes, shares, comments, and save rates to gauge content resonance and audience loyalty.",
            gradient: "linear-gradient(135deg, #10b981, #059669)",
            accentColor: "#10b981",
        },
        {
            icon: ShoppingCart,
            title: "Lead & Conversion Tracking",
            description: "Implementing robust tracking to attribute leads, sales, and sign-ups directly to social media campaigns.",
            gradient: "linear-gradient(135deg, #8b5cf6, #6366f1)",
            accentColor: "#8b5cf6",
        },
        {
            icon: TestTube2,
            title: "Campaign Optimization",
            description: "Continuous A/B testing of creatives, audiences, and ad copy to ensure peak campaign efficiency.",
            gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
            accentColor: "#f59e0b",
        },
        {
            icon: FileText,
            title: "Monthly Reporting",
            description: "Providing clear, executive-level reports that translate complex data into actionable business insights.",
            gradient: "linear-gradient(135deg, #3b82f6, #2563eb)",
            accentColor: "#3b82f6",
        },
        {
            icon: DollarSign,
            title: "ROI Optimization",
            description: "Continuous refinement of strategies based on performance data to maximize your return on investment.",
            gradient: "linear-gradient(135deg, #ec4899, #db2777)",
            accentColor: "#ec4899",
        },
    ];

    return (
        <section
            className="px-6 md:px-12 xl:px-20 py-16 transition-colors duration-300 relative overflow-hidden"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            {/* Animated chart background pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="analytics-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" style={{ color: "var(--brand-teal)" }} />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#analytics-grid)" />
                </svg>
            </div>

            {/* Floating data points */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                            background: "var(--brand-teal)",
                            opacity: 0.2,
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 3) * 20}%`,
                            animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                            animationDelay: `${i * 0.2}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-6xl mx-auto">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border backdrop-blur-sm"
                        style={{
                            background:
                                "linear-gradient(90deg, color-mix(in srgb, var(--brand-teal) 8%, transparent), color-mix(in srgb, var(--brand-teal) 8%, transparent))",
                            borderColor: "color-mix(in srgb, var(--brand-teal) 20%, transparent)",
                            color: "var(--brand-teal)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-semibold">Analytics & Performance</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "var(--brand-teal)" }}>Measuring What Matters:</span> Transparent Performance and Real ROI
                    </h2>

                    <div
                        className="w-24 h-1.5 mx-auto mb-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, var(--brand-teal), var(--brand-cyan))",
                        }}
                    />

                    <p className="text-lg max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We believe in full transparency. Our reporting focuses on metrics that directly impact your business goals.
                    </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {metrics.map((metric, idx) => {
                        const Icon = metric.icon;
                        return (
                            <div
                                key={idx}
                                className="group rounded-2xl p-8 border  transition-all duration-700 hover:shadow-2xl overflow-hidden relative"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                    animation: `bounceIn 0.6s ease-out ${idx * 0.1}s both`
                                }}
                            >
                                {/* Animated progress bar background */}
                                <div className="absolute top-0 left-0 right-0 h-full overflow-hidden">
                                    <div
                                        className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-all duration-1000"
                                        style={{
                                            background: metric.gradient,
                                            transform: "translateX(-100%)",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = "translateX(0)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = "translateX(-100%)";
                                        }}
                                    />
                                </div>

                                {/* Rising gradient effect */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000"
                                    style={{
                                        background: `linear-gradient(to top, ${metric.accentColor}15, transparent)`,
                                        transform: "translateY(100%)",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateY(100%)";
                                    }}
                                />

                                <div className="relative z-10">
                                    {/* Icon container with chart animation */}
                                    <div className="relative mb-6 w-fit">
                                        {/* Expanding circles */}
                                        <div
                                            className="absolute inset-0 -m-3 opacity-0 group-hover:opacity-100 transition-all duration-1000"
                                        >
                                            <div
                                                className="absolute inset-0 rounded-full"
                                                style={{
                                                    border: `1px solid ${metric.accentColor}`,
                                                    animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite"
                                                }}
                                            />
                                        </div>

                                        {/* Icon background */}
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-all duration-500"
                                            style={{
                                                background: metric.gradient,
                                                boxShadow: `0 10px 25px ${metric.accentColor}30`,
                                            }}
                                        >
                                            {/* Scanning line effect */}
                                            <div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                                                style={{
                                                    background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.5), transparent)",
                                                    animation: "scan 2s ease-in-out infinite",
                                                    height: "30%",
                                                }}
                                            />

                                            <Icon className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-all duration-500" />
                                        </div>

                                        {/* Rising arrow indicator */}
                                        <div
                                            className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 delay-200"
                                            style={{
                                                background: "white",
                                                boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                                            }}
                                        >
                                            <TrendingUp
                                                className="w-4 h-4"
                                                style={{ color: metric.accentColor }}
                                            />
                                        </div>
                                    </div>

                                    <h3
                                        className="text-xl font-bold mb-4 transition-colors duration-500 flex items-center gap-2"
                                        style={{ color: "var(--foreground)" }}
                                    >
                                        {metric.title}
                                    </h3>

                                    <p
                                        className="mb-6 leading-relaxed transition-colors duration-500"
                                        style={{ color: "var(--secondary-text)", lineHeight: "1.7" }}
                                    >
                                        {metric.description}
                                    </p>

                                    {/* Animated metric bar */}
                                    <div className="relative h-2 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"
                                        style={{ background: `${metric.accentColor}20` }}
                                    >
                                        <div
                                            className="h-full rounded-full transition-all duration-1000 delay-500"
                                            style={{
                                                background: metric.gradient,
                                                width: "0%",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.width = `${60 + Math.random() * 40}%`;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.width = "0%";
                                            }}
                                        />
                                    </div>

                                    {/* View Details CTA */}
                                    <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-400">
                                        <Eye className="w-4 h-4" style={{ color: metric.accentColor }} />
                                        <span className="text-sm font-semibold" style={{ color: metric.accentColor }}>
                                            View Analytics
                                        </span>
                                        <MousePointerClick className="w-3 h-3" style={{ color: metric.accentColor }} />
                                    </div>
                                </div>

                                {/* Corner data visualization accent */}
                                <div className="absolute -bottom-4 -right-4 w-20 h-20 opacity-10 group-hover:opacity-20 transition-all duration-700">
                                    <svg viewBox="0 0 100 100" className="w-full h-full" style={{ color: metric.accentColor }}>
                                        <polyline
                                            points="10,90 30,70 50,80 70,50 90,60"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            className="group-hover:stroke-dashoffset-0 transition-all duration-1000"
                                            style={{
                                                strokeDasharray: "200",
                                                strokeDashoffset: "200"
                                            }}
                                        />
                                    </svg>
                                </div>

                                {/* Side accent line */}
                                <div
                                    className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-all duration-700"
                                    style={{
                                        background: metric.gradient,
                                        transform: "scaleY(0)",
                                        transformOrigin: "top"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "scaleY(1)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "scaleY(0)";
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @keyframes bounceIn {
                    0% {
                        opacity: 0;
                        transform: scale(0.8) translateY(40px);
                    }
                    60% {
                        transform: scale(1.05) translateY(-10px);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                    }
                    50% {
                        transform: translateY(-20px) translateX(10px);
                    }
                }

                @keyframes ping {
                    75%, 100% {
                        transform: scale(1.5);
                        opacity: 0;
                    }
                }

                @keyframes scan {
                    0% {
                        top: 0;
                    }
                    100% {
                        top: 100%;
                    }
                }
            `}</style>
        </section>
    );
}