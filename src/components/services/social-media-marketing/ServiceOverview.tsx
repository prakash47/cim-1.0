"use client";

import { Zap } from "lucide-react";
import Image from "next/image";

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

                    {/* Right Visual – Social Media Illustration */}
                    <div className="relative hidden md:block">
                        {/* Animated Background Glow */}
                        <div
                            className="absolute -inset-8 rounded-3xl blur-3xl animate-pulse"
                            style={{
                                background:
                                    "linear-gradient(135deg, color-mix(in srgb, var(--brand-teal) 20%, transparent), color-mix(in srgb, var(--brand-cyan) 15%, transparent))",
                                animationDuration: "4s",
                            }}
                        />

                        {/* Illustration Card */}
                        <div
                            className="relative rounded-3xl p-6 border shadow-2xl overflow-hidden"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "color-mix(in srgb, var(--brand-teal) 30%, var(--border-color))",
                            }}
                        >
                            {/* Decorative Corner Accent */}
                            <div
                                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-20"
                                style={{
                                    background: "linear-gradient(135deg, var(--brand-teal), var(--brand-cyan))",
                                }}
                            />

                            {/* Illustration */}
                            <div className="relative aspect-square flex items-center justify-center">
                                <Image
                                    src="/images/services-images/smm-overview-illustration.svg"
                                    alt="Social Media Marketing - Strategic engagement across platforms with likes, comments, and community building"
                                    width={500}
                                    height={500}
                                    className="object-contain drop-shadow-lg"
                                    priority
                                />
                            </div>

                            {/* Bottom Accent Bar */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-1.5"
                                style={{
                                    background: "linear-gradient(90deg, var(--brand-teal), var(--brand-cyan), var(--brand-teal))",
                                }}
                            />
                        </div>

                        {/* Floating Social Elements */}
                        <div
                            className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg animate-bounce"
                            style={{
                                backgroundColor: "var(--brand-teal)",
                                animationDuration: "3s",
                            }}
                        >
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        </div>

                        <div
                            className="absolute -bottom-2 -left-2 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg animate-pulse"
                            style={{
                                backgroundColor: "var(--brand-cyan)",
                                animationDuration: "2s",
                            }}
                        >
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                        </div>

                        <div
                            className="absolute top-1/2 -left-6 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                            style={{
                                backgroundColor: "var(--brand-teal)",
                                animation: "pulse 2.5s infinite",
                            }}
                        >
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
