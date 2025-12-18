"use client";

import { ArrowRight, MessageSquare, Calendar } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    return (
        <section
            className="relative transition-colors duration-300 py-20 md:py-28 overflow-hidden"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-30"
                    style={{
                        background: "linear-gradient(135deg, var(--brand-chatbot), var(--brand-blue))",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative">
                <div className="max-w-4xl mx-auto">
                    {/* Main CTA Card */}
                    <div
                        className="p-12 md:p-16 rounded-3xl border text-center"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                            borderColor: "var(--border-color)",
                            backdropFilter: "blur(10px)",
                        }}
                    >
                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Ready to Transform Your <span style={{ color: "var(--brand-chatbot)" }}>Customer Interactions</span>?
                        </h2>

                        {/* Subheading */}
                        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                            Let's discuss your chatbot requirements and create an intelligent solution that drives business growth.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[var(--brand-chatbot)] to-[#008ac1] hover:from-[var(--brand-chatbot)] hover:to-[var(--brand-chatbot)] text-white rounded-full text-sm md:text-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                Build Your AI Chatbot
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 border-2 rounded-full text-sm md:text-lg font-semibold transition-all"
                                style={{
                                    borderColor: "var(--brand-chatbot)",
                                    color: "var(--brand-chatbot)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--brand-chatbot) 10%, transparent)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "transparent";
                                }}
                            >
                                <Calendar className="w-5 h-5" />
                                Book a Demo
                            </Link>
                        </div>

                        {/* Additional Info */}
                        <p style={{ color: "var(--secondary-text)" }}>
                            No credit card required. Get a personalized demo in 15 minutes.
                        </p>
                    </div>

                    {/* Features Highlight */}
                    <div className="mt-16 grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: MessageSquare,
                                title: "Expert Consultation",
                                description: "Our AI specialists will understand your needs and recommend the best solution.",
                            },
                            {
                                icon: ArrowRight,
                                title: "Rapid Deployment",
                                description: "Get your chatbot live in weeks, not months, with our proven development process.",
                            },
                            {
                                icon: Calendar,
                                title: "Ongoing Support",
                                description: "Continuous monitoring, optimization, and support to ensure your chatbot performs.",
                            },
                        ].map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="p-6 rounded-2xl border text-center transition-all duration-300"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                                        borderColor: "var(--border-color)",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--brand-chatbot) 5%, var(--card-bg))";
                                        e.currentTarget.style.borderColor = "var(--brand-chatbot)";
                                        e.currentTarget.style.transform = "translateY(-4px)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--card-bg) 50%, transparent)";
                                        e.currentTarget.style.borderColor = "var(--border-color)";
                                        e.currentTarget.style.transform = "translateY(0)";
                                    }}
                                >
                                    <div
                                        className="w-12 h-12 rounded-lg p-2.5 mb-4 mx-auto"
                                        style={{
                                            background: "linear-gradient(135deg, var(--brand-chatbot), var(--brand-blue))",
                                        }}
                                    >
                                        <Icon className="w-full h-full text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
