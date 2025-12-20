"use client";

import { Zap, Palette, FileText, Target, Users, TrendingUp } from "lucide-react";

export default function ServiceOverview() {
    return (
        <section
            id="overview"
            className="px-6 md:px-12 xl:px-20 py-16 md:py-24 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div>
                {/* Header */}
                <div className="text-center mb-16 max-w-6xl mx-auto">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            background: "linear-gradient(90deg, color-mix(in srgb, var(--brand-yellow) 8%, transparent), color-mix(in srgb, var(--brand-orange) 8%, transparent))",
                            borderColor: "color-mix(in srgb, var(--brand-yellow) 20%, transparent)",
                            color: "var(--brand-yellow)",
                        }}
                    >
                        <Zap className="w-4 h-4" />
                        <span className="text-sm font-semibold">Service Overview</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "var(--brand-yellow)" }}>Complete Brand Identity</span> Solutions
                    </h2>

                    <div
                        className="w-24 h-1.5 mx-auto mb-8 rounded-full"
                        style={{ background: "linear-gradient(90deg, var(--brand-yellow), var(--brand-orange))" }}
                    />
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <p className="text-lg" style={{ color: "var(--foreground)", fontWeight: 500 }}>
                            Our <span style={{ color: "var(--brand-yellow)", fontWeight: 700 }}>Brand Identity Design</span> services go far beyond just a pretty logo. We build comprehensive brand systems that create lasting impressions and drive business growth.
                        </p>

                        <p style={{ color: "var(--secondary-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
                            From startups seeking their first visual identity to established companies ready for a rebrand, we partner with you to understand your vision, values, and audience. The result is a cohesive <span style={{ color: "var(--brand-yellow)", fontWeight: 700 }}>brand identity</span> that communicates your unique story.
                        </p>

                        <p style={{ color: "var(--secondary-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
                            Every element we design is purposeful—from the psychology behind your color choices to the personality expressed through typography. We create brands that don't just look beautiful but work strategically to achieve your business objectives.
                        </p>

                        <div className="pt-4">
                            <h3 className="text-xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                                What You'll Receive
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Primary and secondary logo variations",
                                    "Complete color palette with usage guidelines",
                                    "Typography system with font hierarchy",
                                    "Brand pattern and graphic elements",
                                    "Comprehensive brand guidelines document",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span
                                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-black text-sm font-bold mt-0.5"
                                            style={{ background: "linear-gradient(90deg, var(--brand-yellow), var(--brand-orange))" }}
                                        >
                                            ✓
                                        </span>
                                        <span style={{ color: "var(--secondary-text)" }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Visual – Brand Board Mockup */}
                    <div className="relative hidden md:block">
                        {/* Animated Background Glow */}
                        <div
                            className="absolute -inset-4 rounded-3xl blur-3xl animate-pulse"
                            style={{
                                background: "linear-gradient(135deg, color-mix(in srgb, var(--brand-yellow) 15%, transparent), color-mix(in srgb, var(--brand-orange) 15%, transparent))",
                                animationDuration: "4s",
                            }}
                        />

                        {/* Brand Board Card */}
                        <div
                            className="relative rounded-2xl overflow-hidden shadow-2xl border p-6"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                            }}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6 pb-4 border-b" style={{ borderColor: "var(--border-color)" }}>
                                <div className="flex items-center gap-2">
                                    <Palette className="w-5 h-5" style={{ color: "var(--brand-yellow)" }} />
                                    <span className="font-bold" style={{ color: "var(--foreground)" }}>Brand Board</span>
                                </div>
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                            </div>

                            {/* Brand Board Content */}
                            <div className="space-y-4">
                                {/* Company Name */}
                                <div className="text-center py-4 rounded-xl" style={{ backgroundColor: "color-mix(in srgb, var(--brand-yellow) 10%, var(--card-bg))" }}>
                                    <div className="text-3xl font-black mb-1" style={{ color: "var(--brand-yellow)" }}>BRAND</div>
                                    <div className="text-sm" style={{ color: "var(--secondary-text)" }}>Your Company Tagline</div>
                                </div>

                                {/* Visual Grid */}
                                <div className="grid grid-cols-3 gap-3">
                                    {/* Mission */}
                                    <div className="p-3 rounded-xl text-center" style={{ backgroundColor: "color-mix(in srgb, var(--foreground) 5%, var(--card-bg))" }}>
                                        <Target className="w-6 h-6 mx-auto mb-2" style={{ color: "var(--brand-yellow)" }} />
                                        <span className="text-xs font-bold uppercase" style={{ color: "var(--secondary-text)" }}>Mission</span>
                                    </div>
                                    {/* Audience */}
                                    <div className="p-3 rounded-xl text-center" style={{ backgroundColor: "color-mix(in srgb, var(--foreground) 5%, var(--card-bg))" }}>
                                        <Users className="w-6 h-6 mx-auto mb-2" style={{ color: "var(--brand-yellow)" }} />
                                        <span className="text-xs font-bold uppercase" style={{ color: "var(--secondary-text)" }}>Audience</span>
                                    </div>
                                    {/* Values */}
                                    <div className="p-3 rounded-xl text-center" style={{ backgroundColor: "color-mix(in srgb, var(--foreground) 5%, var(--card-bg))" }}>
                                        <TrendingUp className="w-6 h-6 mx-auto mb-2" style={{ color: "var(--brand-yellow)" }} />
                                        <span className="text-xs font-bold uppercase" style={{ color: "var(--secondary-text)" }}>Values</span>
                                    </div>
                                </div>

                                {/* Color & Type Preview */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="p-3 rounded-xl" style={{ backgroundColor: "color-mix(in srgb, var(--foreground) 5%, var(--card-bg))" }}>
                                        <span className="text-xs font-bold uppercase mb-2 block" style={{ color: "var(--secondary-text)" }}>Colors</span>
                                        <div className="flex gap-1.5">
                                            <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: "var(--brand-yellow)" }} />
                                            <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: "var(--brand-orange)" }} />
                                            <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: "#1a1a1a" }} />
                                        </div>
                                    </div>
                                    <div className="p-3 rounded-xl" style={{ backgroundColor: "color-mix(in srgb, var(--foreground) 5%, var(--card-bg))" }}>
                                        <span className="text-xs font-bold uppercase mb-2 block" style={{ color: "var(--secondary-text)" }}>Fonts</span>
                                        <div className="text-lg font-bold" style={{ color: "var(--foreground)" }}>Aa Bb Cc</div>
                                    </div>
                                </div>

                                {/* Guidelines Preview */}
                                <div
                                    className="p-4 rounded-xl flex items-center gap-3"
                                    style={{ backgroundColor: "color-mix(in srgb, var(--brand-yellow) 10%, var(--card-bg))" }}
                                >
                                    <FileText className="w-8 h-8" style={{ color: "var(--brand-yellow)" }} />
                                    <div>
                                        <div className="font-bold text-sm" style={{ color: "var(--foreground)" }}>Brand Guidelines</div>
                                        <div className="text-xs" style={{ color: "var(--secondary-text)" }}>Complete usage documentation</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
