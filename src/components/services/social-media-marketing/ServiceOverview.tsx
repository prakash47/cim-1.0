"use client";

import { Zap, Eye, MessageCircle, Users, Target } from "lucide-react";

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
                                "linear-gradient(90deg, color-mix(in srgb, var(--brand-teal) 8%, transparent), color-mix(in srgb, var(--brand-teal) 8%, transparent))",
                            borderColor: "color-mix(in srgb, var(--brand-teal) 20%, transparent)",
                            color: "var(--brand-teal)",
                        }}
                    >
                        <Zap className="w-4 h-4" />
                        <span className="text-sm font-semibold">Service Overview</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "var(--brand-teal)" }}>Transform Your Social Presence:</span> Strategic Social Media Marketing for Business Value
                    </h2>

                    <div
                        className="w-24 h-1.5 mx-auto mb-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, var(--brand-teal), var(--brand-teal))",
                        }}
                    />
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <p className="text-lg" style={{ color: "var(--foreground)", fontWeight: 500 }}>
                            Our <span style={{ color: "var(--brand-teal)", fontWeight: 700 }}>Social Media Marketing Services</span> go beyond posting content. We focus on building a strategic social presence that translates into tangible business value and measurable growth.
                        </p>

                        <p style={{ color: "var(--secondary-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
                            From initial strategy to ongoing optimization, we ensure your social channels are powerful assets driving leads, sales, and brand authority. We are your dedicated <span style={{ color: "var(--brand-teal)", fontWeight: 700 }}>Social Media Management Company</span> partner, committed to your long-term success.
                        </p>

                        <p style={{ color: "var(--secondary-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
                            We craft campaigns that are not only visually compelling but also strategically aligned with your core business objectives. Every post, every ad, and every interaction is purposefully designed to deliver measurable results and build genuine community engagement.
                        </p>

                        <div className="pt-4">
                            <h3 className="text-xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                                Our Commitment
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Data-driven strategies tailored to your audience and goals",
                                    "Transparent reporting with clear ROI metrics",
                                    "Continuous optimization based on performance analytics",
                                    "Dedicated account management and ongoing support",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span
                                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold mt-0.5"
                                            style={{
                                                background: "linear-gradient(90deg, var(--brand-teal), var(--brand-teal))",
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

                    {/* Right Visual – Social Media Metrics Grid */}
                    <div className="relative hidden md:block">
                        {/* Animated Background Glow */}
                        <div
                            className="absolute -inset-4 rounded-3xl blur-3xl animate-pulse"
                            style={{
                                background:
                                    "linear-gradient(135deg, color-mix(in srgb, var(--brand-teal) 15%, transparent), color-mix(in srgb, var(--brand-teal) 15%, transparent))",
                                animationDuration: "4s",
                            }}
                        />

                        {/* Metrics Grid */}
                        <div className="relative grid grid-cols-2 gap-4">
                            {/* Metric 1 */}
                            <div
                                className="rounded-2xl p-6 border shadow-lg transform hover:scale-105 transition-all duration-300"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <Eye className="w-8 h-8 mb-3" style={{ color: "var(--brand-teal)" }} />
                                <p style={{ color: "var(--secondary-text)", fontSize: "0.9rem" }}>Brand Awareness</p>
                                <p className="text-2xl font-bold mt-2" style={{ color: "var(--brand-teal)" }}>
                                    +240%
                                </p>
                            </div>

                            {/* Metric 2 */}
                            <div
                                className="rounded-2xl p-6 border shadow-lg transform hover:scale-105 transition-all duration-300"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <MessageCircle className="w-8 h-8 mb-3" style={{ color: "var(--brand-teal)" }} />
                                <p style={{ color: "var(--secondary-text)", fontSize: "0.9rem" }}>Engagement</p>
                                <p className="text-2xl font-bold mt-2" style={{ color: "var(--brand-teal)" }}>
                                    +185%
                                </p>
                            </div>

                            {/* Metric 3 */}
                            <div
                                className="rounded-2xl p-6 border shadow-lg transform hover:scale-105 transition-all duration-300"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <Target className="w-8 h-8 mb-3" style={{ color: "var(--brand-cyan)" }} />
                                <p style={{ color: "var(--secondary-text)", fontSize: "0.9rem" }}>Lead Generation</p>
                                <p className="text-2xl font-bold mt-2" style={{ color: "var(--brand-cyan)" }}>
                                    +320%
                                </p>
                            </div>

                            {/* Metric 4 */}
                            <div
                                className="rounded-2xl p-6 border shadow-lg transform hover:scale-105 transition-all duration-300"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <Users className="w-8 h-8 mb-3" style={{ color: "var(--brand-teal)" }} />
                                <p style={{ color: "var(--secondary-text)", fontSize: "0.9rem" }}>Community Growth</p>
                                <p className="text-2xl font-bold mt-2" style={{ color: "var(--brand-teal)" }}>
                                    +450%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
