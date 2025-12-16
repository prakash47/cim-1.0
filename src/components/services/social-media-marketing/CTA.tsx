"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
    return (
        <section
            className="py-10 lg:py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-12 xl:px-20">
                {/* Animated Background */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div
                        className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-teal) 8%, transparent)",
                        }}
                    />
                    <div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-cyan) 8%, transparent)",
                            animationDelay: "1s",
                        }}
                    />
                </div>

                {/* Main CTA Card */}
                <div
                    className="relative rounded-3xl p-8 md:p-16 border text-center overflow-hidden"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    {/* Glow Effect */}
                    <div
                        className="absolute inset-0 rounded-3xl"
                        style={{
                            opacity: 0.1,
                            background: "linear-gradient(135deg, var(--brand-teal), var(--brand-cyan), var(--brand-teal))",
                            filter: "blur(30px)",
                        }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                            style={{
                                background:
                                    "linear-gradient(90deg, color-mix(in srgb, var(--brand-teal) 8%, transparent), color-mix(in srgb, var(--brand-teal) 8%, transparent))",
                                borderColor: "color-mix(in srgb, var(--brand-teal) 20%, transparent)",
                                color: "var(--brand-teal)",
                            }}
                        >
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm font-semibold">Ready to Elevate Your Social Presence?</span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background:
                                        "linear-gradient(90deg, var(--brand-teal), var(--brand-cyan), var(--brand-teal))",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                Start Your Social Media Marketing Journey Today
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12" style={{ color: "var(--secondary-text)" }}>
                            Don't let your competitors capture your audience. Partner with the <span style={{ fontWeight: 700, color: "var(--brand-teal)" }}>Social Media Management Company</span> that delivers measurable results. Contact us today to discuss your <span style={{ fontWeight: 700, color: "var(--brand-teal)" }}>Social Media Marketing</span> needs and receive a personalized strategy.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold bg-gradient-to-r from-[#008ac1] to-[#00b5ca] text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                Book Your Free Strategy Session
                                <ArrowRight className="w-5 h-5" />
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold border transition-all duration-300"
                                style={{
                                    borderColor: "var(--border-color)",
                                    color: "var(--foreground)",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--hover-bg)")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                            >
                                Schedule a Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* Bottom Text */}
                        <p className="mt-8" style={{ color: "var(--secondary-text)", fontSize: "0.95rem" }}>
                            Have questions? Our team is ready to help. <Link href="/contact" className="font-semibold hover:underline" style={{ color: "var(--brand-teal)" }}>Get in touch</Link> with us today.
                        </p>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {[
                        {
                            number: "300+",
                            label: "Campaigns Managed",
                        },
                        {
                            number: "95%",
                            label: "Client Satisfaction",
                        },
                        {
                            number: "8+",
                            label: "Years of SMM Experience",
                        },
                    ].map((indicator, idx) => (
                        <div key={idx}>
                            <div
                                className="text-4xl font-bold mb-2"
                                style={{
                                    background: "linear-gradient(90deg, var(--brand-teal), var(--brand-teal))",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                {indicator.number}
                            </div>
                            <p style={{ color: "var(--secondary-text)" }}>{indicator.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
