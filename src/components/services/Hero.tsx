"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Rocket } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative px-6 md:px-12 xl:px-20 py-12 overflow-hidden" style={{ backgroundColor: "var(--background)" }}>
            {/* Background decorations */}
            <div
                className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
                style={{ background: "linear-gradient(135deg, var(--brand-purple), var(--brand-cyan))" }}
            />
            <div
                className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-15"
                style={{ background: "linear-gradient(135deg, var(--brand-blue), var(--brand-teal))" }}
            />

            {/* Animated grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            border: "1px solid var(--border-color)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--brand-purple)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Full-Stack Digital Solutions</span>
                    </div>

                    {/* Headline */}
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
                        style={{ lineHeight: 1.1, color: "var(--foreground)" }}
                    >
                        Transform Your Business with{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, var(--brand-purple), var(--brand-cyan))",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            Digital Excellence
                        </span>
                    </h1>

                    {/* Description */}
                    <p
                        className="text-lg md:text-xl mb-10 max-w-2xl mx-auto"
                        style={{ color: "var(--secondary-text)", lineHeight: 1.7 }}
                    >
                        From stunning websites to AI-powered automations, we deliver end-to-end digital solutions that drive growth, engagement, and measurable results.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            style={{
                                background: "linear-gradient(135deg, var(--brand-purple), var(--brand-cyan))",
                            }}
                        >
                            <Rocket className="w-5 h-5" />
                            Start Your Project
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="#services-list"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                border: "1px solid var(--border-color)",
                                color: "var(--foreground)",
                            }}
                        >
                            Explore Services
                        </Link>
                    </div>

                    {/* Stats row */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: "50+", label: "Projects Delivered" },
                            { value: "98%", label: "Client Satisfaction" },
                            { value: "9+", label: "Digital Services" },
                            { value: "24/7", label: "Support Available" },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div
                                    className="text-3xl md:text-4xl font-black mb-2"
                                    style={{
                                        background: "linear-gradient(135deg, var(--brand-purple), var(--brand-cyan))",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    {stat.value}
                                </div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
