"use client";

import { Palette, ArrowRight, Phone, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    const stats = [
        { value: "500+", label: "Brands Created" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "15+", label: "Years Experience" },
    ];

    return (
        <section className="py-16 md:py-24 relative overflow-hidden transition-colors duration-300" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, var(--brand-yellow) 10%, transparent)" }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, var(--brand-orange) 10%, transparent)", animationDelay: "1s" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 max-w-5xl relative z-10">
                <div
                    className="text-center p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-3xl border relative overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, color-mix(in srgb, var(--brand-yellow) 10%, var(--card-bg)), var(--card-bg))",
                        borderColor: "color-mix(in srgb, var(--brand-yellow) 30%, var(--border-color))",
                    }}
                >
                    {/* Decorative corners */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 rounded-tl-3xl" style={{ borderColor: "var(--brand-yellow)" }} />
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 rounded-br-3xl" style={{ borderColor: "var(--brand-yellow)" }} />

                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full border"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-yellow) 15%, transparent)",
                            borderColor: "var(--brand-yellow)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--brand-yellow)" }} />
                        <span className="text-sm font-bold" style={{ color: "var(--brand-yellow)" }}>FREE CONSULTATION</span>
                    </div>

                    {/* Icon */}
                    <Palette className="w-16 h-16 mx-auto mb-6" style={{ color: "var(--brand-yellow)" }} />

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
                        Ready to <span style={{ color: "var(--brand-yellow)" }}>Transform Your Brand</span>?
                    </h2>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Get a free brand consultation and discover how we can elevate your business identity.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-8 mb-10">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl md:text-3xl font-black" style={{ color: "var(--brand-yellow)" }}>
                                    {stat.value}
                                </div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-black font-semibold hover:scale-105 transition-transform shadow-lg text-base sm:text-lg"
                            style={{ backgroundColor: "var(--brand-yellow)" }}
                        >
                            Start Your Brand Journey
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 font-semibold hover:scale-105 transition-transform text-base sm:text-lg"
                            style={{ borderColor: "var(--brand-yellow)", color: "var(--brand-yellow)" }}
                        >
                            <Phone className="w-5 h-5" />
                            Schedule a Call
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
