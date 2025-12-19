"use client";

import { ArrowRight, Search, Sparkles, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="py-16 md:py-24 transition-colors duration-300" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20 max-w-5xl">
                <div
                    className="relative p-8 md:p-12 rounded-3xl text-center shadow-2xl overflow-hidden border"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-seo) 8%, var(--card-bg))",
                        borderColor: "var(--brand-seo)",
                    }}
                >
                    {/* Background decoration */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div
                            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
                            style={{ backgroundColor: "var(--brand-seo)" }}
                        />
                        <div
                            className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-20"
                            style={{ backgroundColor: "var(--brand-seo)" }}
                        />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                        {/* Icon */}
                        <div
                            className="w-20 h-20 mx-auto mb-6 rounded-2xl p-4 shadow-lg"
                            style={{ backgroundColor: "var(--brand-seo)" }}
                        >
                            <Search className="w-full h-full text-white" />
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
                            Ready to See Your <span style={{ color: "var(--brand-seo)" }}>Organic Traffic Grow</span>?
                        </h2>
                        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                            Stop relying on expensive ads. Book an SEO audit today and discover the untapped potential of your website. Let's build a sustainable growth engine together.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-8 mb-8">
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-5 h-5" style={{ color: "var(--brand-seo)" }} />
                                <span className="font-semibold">300% Avg Growth</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5" style={{ color: "var(--brand-seo)" }} />
                                <span className="font-semibold">50+ Happy Clients</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-5 h-5" style={{ color: "var(--brand-seo)" }} />
                                <span className="font-semibold">White-Hat SEO</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-white"
                            style={{ backgroundColor: "var(--brand-seo)" }}
                        >
                            Start Your Free SEO Audit
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
