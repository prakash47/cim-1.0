"use client";

import { Zap } from "lucide-react";
import {
    Code2,
    Search,
    ShieldCheck,
    Sparkles
} from "lucide-react";


export default function ServiceOverview() {
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
                                "linear-gradient(90deg, color-mix(in srgb, var(--brand-blue) 8%, transparent), color-mix(in srgb, var(--brand-teal) 8%, transparent))",
                            borderColor: "color-mix(in srgb, var(--brand-blue) 20%, transparent)",
                            color: "var(--brand-blue)",
                        }}
                    >
                        <Zap className="w-4 h-4" />
                        <span className="text-sm font-semibold">Service Overview</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "var(--brand-blue)" }}>Beyond Websites:</span> Strategic Digital Solutions for Business Value
                    </h2>

                    <div
                        className="w-24 h-1.5 mx-auto mb-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))",
                        }}
                    />
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <p className="text-lg" style={{ color: "var(--foreground)", fontWeight: 500 }}>
                            Our <span style={{ color: "var(--brand-blue)", fontWeight: 700 }}>Web Design Services</span> go beyond aesthetics. We focus on building a robust digital foundation that translates into tangible business value.
                        </p>

                        <p style={{ color: "var(--secondary-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
                            From initial concept to final deployment, we ensure your online presence is a powerful asset, driving leads, sales, and brand authority. We are your dedicated <span style={{ color: "var(--brand-blue)", fontWeight: 700 }}>Web Development Company</span> partner, committed to your long-term success.
                        </p>

                        <p style={{ color: "var(--secondary-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
                            We craft experiences that are not only beautiful but also highly functional and aligned with your core business objectives. Every line of code, every design element, and every interaction is purposefully built to deliver measurable results.
                        </p>

                        <div className="pt-4">
                            <h3 className="text-xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                                Our Commitment
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Transparent communication throughout the project lifecycle",
                                    "Adherence to timelines and budgets",
                                    "Continuous optimization and performance monitoring",
                                    "Post-launch support and maintenance",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span
                                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold mt-0.5"
                                            style={{
                                                background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))",
                                            }}
                                        >
                                            ✓
                                        </span>
                                        <span style={{ color: "var(--secondary-text)" }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Visual – Interactive Browser Mockup */}
                    <div className="relative hidden md:block">
                        {/* Animated Background Glow */}
                        <div
                            className="absolute -inset-4 rounded-3xl blur-3xl animate-pulse"
                            style={{
                                background:
                                    "linear-gradient(135deg, color-mix(in srgb, var(--brand-blue) 15%, transparent), color-mix(in srgb, var(--brand-teal) 15%, transparent))",
                                animationDuration: "4s",
                            }}
                        />

                        {/* Floating Tech Badges */}
                        <div className="absolute -top-4 -left-4 z-20">
                            <div
                                className="px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg animate-bounce"
                                style={{
                                    background: "linear-gradient(135deg, #61DAFB, #00D4FF)",
                                    animationDuration: "3s",
                                }}
                            >
                                React
                            </div>
                        </div>
                        <div className="absolute -top-2 right-12 z-20">
                            <div
                                className="px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg animate-bounce"
                                style={{
                                    background: "linear-gradient(135deg, #000000, #333333)",
                                    animationDuration: "3.5s",
                                    animationDelay: "0.5s",
                                }}
                            >
                                Next.js
                            </div>
                        </div>
                        <div className="absolute top-22 -right-8 z-20">
                            <div
                                className="px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg animate-bounce"
                                style={{
                                    background: "linear-gradient(135deg, #3178C6, #235A97)",
                                    animationDuration: "4s",
                                    animationDelay: "1s",
                                }}
                            >
                                TypeScript
                            </div>
                        </div>
                        <div className="absolute bottom-24 -left-6 z-20">
                            <div
                                className="px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg animate-bounce"
                                style={{
                                    background: "linear-gradient(135deg, #38BDF8, #0EA5E9)",
                                    animationDuration: "3.2s",
                                    animationDelay: "0.8s",
                                }}
                            >
                                Tailwind
                            </div>
                        </div>

                        {/* Browser Window */}
                        <div
                            className="relative rounded-2xl overflow-hidden shadow-2xl border"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                            }}
                        >
                            {/* Browser Header */}
                            <div
                                className="flex items-center gap-2 px-4 py-3 border-b"
                                style={{ borderColor: "var(--border-color)" }}
                            >
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div
                                    className="flex-1 mx-4 px-3 py-1 rounded-md text-xs truncate"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--foreground) 5%, transparent)",
                                        color: "var(--secondary-text)",
                                    }}
                                >
                                    https://your-amazing-website.com
                                </div>
                            </div>

                            {/* Split View: Code Editor + Preview */}
                            <div className="grid grid-cols-2 min-h-[280px]">
                                {/* Code Editor Panel */}
                                <div
                                    className="p-4 border-r font-mono text-xs leading-relaxed overflow-hidden"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--card-bg) 95%, #1e1e2e)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    <div className="flex items-center gap-2 mb-3 pb-2 border-b" style={{ borderColor: "var(--border-color)" }}>
                                        <Code2 className="w-3.5 h-3.5" style={{ color: "var(--brand-blue)" }} />
                                        <span style={{ color: "var(--secondary-text)" }}>index.tsx</span>
                                    </div>
                                    {/* Animated Code Lines */}
                                    <div className="space-y-1.5">
                                        <div className="flex">
                                            <span style={{ color: "#C586C0" }}>import</span>
                                            <span style={{ color: "var(--foreground)" }}>&nbsp;{"{"}&nbsp;</span>
                                            <span style={{ color: "#9CDCFE" }}>Hero</span>
                                            <span style={{ color: "var(--foreground)" }}>&nbsp;{"}"}&nbsp;</span>
                                            <span style={{ color: "#C586C0" }}>from</span>
                                            <span style={{ color: "#CE9178" }}>&nbsp;&apos;./components&apos;</span>
                                        </div>
                                        <div className="flex">
                                            <span style={{ color: "#C586C0" }}>import</span>
                                            <span style={{ color: "var(--foreground)" }}>&nbsp;{"{"}&nbsp;</span>
                                            <span style={{ color: "#9CDCFE" }}>motion</span>
                                            <span style={{ color: "var(--foreground)" }}>&nbsp;{"}"}&nbsp;</span>
                                            <span style={{ color: "#C586C0" }}>from</span>
                                            <span style={{ color: "#CE9178" }}>&nbsp;&apos;framer-motion&apos;</span>
                                        </div>
                                        <div className="h-2"></div>
                                        <div className="flex">
                                            <span style={{ color: "#569CD6" }}>export</span>
                                            <span style={{ color: "#C586C0" }}>&nbsp;default&nbsp;</span>
                                            <span style={{ color: "#569CD6" }}>function</span>
                                            <span style={{ color: "#DCDCAA" }}>&nbsp;App</span>
                                            <span style={{ color: "var(--foreground)" }}>() {"{"}</span>
                                        </div>
                                        <div className="flex pl-4">
                                            <span style={{ color: "#C586C0" }}>return</span>
                                            <span style={{ color: "var(--foreground)" }}>&nbsp;(</span>
                                        </div>
                                        <div className="flex pl-8">
                                            <span style={{ color: "#808080" }}>&lt;</span>
                                            <span style={{ color: "#4EC9B0" }}>motion.div</span>
                                        </div>
                                        <div className="flex pl-10">
                                            <span style={{ color: "#9CDCFE" }}>animate</span>
                                            <span style={{ color: "#D4D4D4" }}>={"{"}</span>
                                            <span style={{ color: "#CE9178" }}>&quot;fadeIn&quot;</span>
                                            <span style={{ color: "#D4D4D4" }}>{"}"}</span>
                                        </div>
                                        <div className="flex pl-8">
                                            <span style={{ color: "#808080" }}>&gt;</span>
                                        </div>
                                        <div className="flex pl-10 items-center gap-1">
                                            <span style={{ color: "#808080" }}>&lt;</span>
                                            <span style={{ color: "#4EC9B0" }}>Hero</span>
                                            <span style={{ color: "#808080" }}>&nbsp;/&gt;</span>
                                            <span
                                                className="inline-block w-2 h-4 animate-pulse ml-0.5"
                                                style={{ backgroundColor: "var(--brand-blue)" }}
                                            ></span>
                                        </div>
                                    </div>
                                </div>

                                {/* Live Preview Panel */}
                                <div
                                    className="p-4 relative overflow-hidden"
                                    style={{
                                        background: "linear-gradient(180deg, color-mix(in srgb, var(--brand-blue) 5%, var(--card-bg)), var(--card-bg))",
                                    }}
                                >
                                    <div className="flex items-center justify-between mb-3 pb-2 border-b" style={{ borderColor: "var(--border-color)" }}>
                                        <div className="flex items-center gap-2">
                                            <Sparkles className="w-3.5 h-3.5" style={{ color: "var(--brand-teal)" }} />
                                            <span style={{ color: "var(--secondary-text)" }} className="text-xs">Live Preview</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                                            <span className="text-[10px]" style={{ color: "var(--secondary-text)" }}>Live</span>
                                        </div>
                                    </div>

                                    {/* Enhanced Mini Website Preview */}
                                    <div className="space-y-2.5">
                                        {/* Mini Nav with Logo */}
                                        <div className="flex items-center justify-between px-2 py-1.5 rounded-md" style={{ backgroundColor: "color-mix(in srgb, var(--foreground) 3%, transparent)" }}>
                                            <div className="flex items-center gap-1.5">
                                                <div
                                                    className="w-4 h-4 rounded-md flex items-center justify-center"
                                                    style={{ background: "linear-gradient(135deg, var(--brand-blue), var(--brand-teal))" }}
                                                >
                                                    <span className="text-[6px] text-white font-bold">C</span>
                                                </div>
                                                <div className="w-8 h-1.5 rounded" style={{ backgroundColor: "var(--border-color)" }}></div>
                                            </div>
                                            <div className="flex gap-1.5">
                                                <div className="w-5 h-1 rounded" style={{ backgroundColor: "var(--border-color)" }}></div>
                                                <div className="w-5 h-1 rounded" style={{ backgroundColor: "var(--border-color)" }}></div>
                                                <div className="w-5 h-1 rounded" style={{ backgroundColor: "var(--border-color)" }}></div>
                                                <div
                                                    className="w-8 h-3 rounded-sm flex items-center justify-center"
                                                    style={{ background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))" }}
                                                >
                                                    <span className="text-[5px] text-white font-medium">CTA</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Hero Section with Profile */}
                                        <div
                                            className="rounded-lg p-3"
                                            style={{
                                                background: "linear-gradient(135deg, color-mix(in srgb, var(--brand-blue) 12%, transparent), color-mix(in srgb, var(--brand-teal) 8%, transparent))",
                                            }}
                                        >
                                            <div className="flex items-start gap-2">
                                                {/* Avatar */}
                                                <div
                                                    className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center shadow-sm"
                                                    style={{ background: "linear-gradient(135deg, #667eea, #764ba2)" }}
                                                >
                                                    <span className="text-[8px] text-white font-bold">👤</span>
                                                </div>
                                                <div className="flex-1">
                                                    <div
                                                        className="w-3/4 h-2 rounded mb-1.5"
                                                        style={{ background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))" }}
                                                    ></div>
                                                    <div className="w-full h-1 rounded mb-1" style={{ backgroundColor: "var(--border-color)" }}></div>
                                                    <div className="w-2/3 h-1 rounded" style={{ backgroundColor: "var(--border-color)" }}></div>
                                                </div>
                                            </div>
                                            {/* Stats Row */}
                                            <div className="flex gap-2 mt-2.5">
                                                {[
                                                    { value: "2.5K", icon: "👁" },
                                                    { value: "1.8K", icon: "❤️" },
                                                    { value: "324", icon: "💬" },
                                                ].map((stat, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex-1 rounded-md py-1 px-1.5 flex items-center justify-center gap-1"
                                                        style={{ backgroundColor: "color-mix(in srgb, var(--card-bg) 80%, transparent)" }}
                                                    >
                                                        <span className="text-[7px]">{stat.icon}</span>
                                                        <span className="text-[7px] font-bold" style={{ color: "var(--foreground)" }}>{stat.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Feature Cards with Icons */}
                                        <div className="grid grid-cols-3 gap-1.5">
                                            {[
                                                { icon: "🚀", color: "#f59e0b" },
                                                { icon: "⚡", color: "#10b981" },
                                                { icon: "🎯", color: "#8b5cf6" },
                                            ].map((item, i) => (
                                                <div
                                                    key={i}
                                                    className="rounded-lg p-2 text-center transition-transform hover:scale-105"
                                                    style={{ backgroundColor: "color-mix(in srgb, var(--foreground) 4%, transparent)" }}
                                                >
                                                    <div
                                                        className="w-5 h-5 rounded-md mx-auto mb-1.5 flex items-center justify-center shadow-sm"
                                                        style={{ backgroundColor: `${item.color}20` }}
                                                    >
                                                        <span className="text-[10px]">{item.icon}</span>
                                                    </div>
                                                    <div className="w-full h-1 rounded mb-0.5" style={{ backgroundColor: "var(--border-color)" }}></div>
                                                    <div className="w-2/3 h-0.5 rounded mx-auto" style={{ backgroundColor: "var(--border-color)" }}></div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Mini Analytics Chart */}
                                        <div
                                            className="rounded-lg p-2"
                                            style={{ backgroundColor: "color-mix(in srgb, var(--foreground) 3%, transparent)" }}
                                        >
                                            <div className="flex items-center justify-between mb-1.5">
                                                <div className="w-10 h-1 rounded" style={{ backgroundColor: "var(--border-color)" }}></div>
                                                <div className="flex gap-0.5">
                                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--brand-blue)" }}></div>
                                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--brand-teal)" }}></div>
                                                </div>
                                            </div>
                                            {/* Bar Chart */}
                                            <div className="flex items-end justify-between gap-1 h-8 px-1">
                                                {[40, 65, 45, 80, 60, 90, 70].map((height, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex-1 rounded-t-sm"
                                                        style={{
                                                            height: `${height}%`,
                                                            background: i === 5
                                                                ? "linear-gradient(180deg, var(--brand-blue), var(--brand-teal))"
                                                                : "color-mix(in srgb, var(--brand-blue) 30%, transparent)",
                                                        }}
                                                    ></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Animated Gradient Overlay */}
                                    <div
                                        className="absolute bottom-0 left-0 right-0 h-6 pointer-events-none"
                                        style={{
                                            background: "linear-gradient(to top, var(--card-bg), transparent)",
                                        }}
                                    ></div>
                                </div>
                            </div>

                            {/* Bottom Status Bar */}
                            <div
                                className="flex items-center justify-between px-4 py-2 border-t text-xs"
                                style={{
                                    borderColor: "var(--border-color)",
                                    backgroundColor: "color-mix(in srgb, var(--foreground) 3%, transparent)",
                                }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                        <span style={{ color: "var(--secondary-text)" }}>Live</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Zap className="w-3 h-3" style={{ color: "var(--brand-teal)" }} />
                                        <span style={{ color: "var(--secondary-text)" }}>98ms</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <ShieldCheck className="w-3 h-3" style={{ color: "var(--brand-blue)" }} />
                                    <span style={{ color: "var(--secondary-text)" }}>Secure</span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div
                            className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-20"
                            style={{
                                background: "radial-gradient(circle, var(--brand-teal), transparent)",
                            }}
                        ></div>
                        <div
                            className="absolute -top-8 right-1/3 w-16 h-16 rounded-full opacity-15"
                            style={{
                                background: "radial-gradient(circle, var(--brand-blue), transparent)",
                            }}
                        ></div>
                    </div>


                </div>
            </div>
        </section>
    );
}