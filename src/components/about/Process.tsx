"use client";

import { useState } from "react";
import {
    Lightbulb,
    Palette,
    Rocket,
    TrendingUp,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

export default function Process() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const process = [
        {
            icon: Lightbulb,
            title: "Discover",
            description: "Understand your business, goals, market & audience",
            // use CSS variables from globals.css via Tailwind arbitrary classes
            colorFrom: "var(--brand-blue)",
            colorTo: "var(--brand-teal)",
            details: [
                "Business goals analysis",
                "Market research",
                "Audience profiling",
                "Competitor analysis",
            ],
        },
        {
            icon: Palette,
            title: "Design",
            description: "Build digital assets & brand touchpoints that resonate",
            colorFrom: "var(--brand-purple)",
            colorTo: "var(--brand-yellow)",
            details: ["Brand strategy", "Creative concepts", "UI/UX design", "Content planning"],
        },
        {
            icon: Rocket,
            title: "Deploy",
            description: "Launch campaigns backed by data & targeting",
            colorFrom: "var(--brand-cyan)",
            colorTo: "var(--brand-teal)",
            details: ["Campaign setup", "Technical integration", "Quality assurance", "Go-live execution"],
        },
        {
            icon: TrendingUp,
            title: "Optimize",
            description: "Analyze performance, automate workflows & scale growth",
            colorFrom: "var(--brand-yellow)",
            colorTo: "var(--brand-orange)",
            details: ["Performance tracking", "A/B testing", "Workflow automation", "Continuous improvement"],
        },
    ];

    return (
        <section className="py-20 px-6 md:px-12 xl:px-16 bg-[var(--background)] transition-colors duration-300 relative overflow-hidden">
            {/* Animated Background (dark/light adaptive via CSS vars) */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-blue) 12%, transparent)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-purple) 12%, transparent)",
                        animationDelay: "1s",
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-cyan) 12%, transparent)",
                        animationDelay: "2s",
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-20">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            borderColor: "color-mix(in srgb, var(--brand-cyan) 12%, transparent)",
                            background: "linear-gradient(90deg, color-mix(in srgb,var(--brand-cyan) 8%,transparent), color-mix(in srgb,var(--brand-teal) 8%,transparent))",
                        }}
                    >
                        <Rocket className="w-4 h-4 text-[var(--brand-teal)]" />
                        <span className="text-sm font-semibold text-[var(--brand-teal)]">Our Process</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[var(--foreground)]">
                        How We Work
                    </h2>

                    <div
                        className="mx-auto mb-6 rounded-full"
                        style={{ width: 112, height: 6, background: "linear-gradient(90deg,var(--brand-cyan),var(--brand-teal))" }}
                    />

                    <p className="text-xl max-w-3xl mx-auto text-[var(--secondary-text)]">
                        Every project begins with clarity and strategy. Our structured approach ensures measurable,
                        sustainable growth.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* center line (desktop only) */}
                    <div
                        className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px opacity-20"
                        style={{
                            background: "linear-gradient(to bottom, var(--brand-blue), var(--brand-purple), var(--brand-cyan), var(--brand-yellow))",
                        }}
                        aria-hidden
                    />

                    <div className="space-y-12">
                        {process.map((step, idx) => {
                            const Icon = step.icon;
                            const isHovered = hoveredIndex === idx;
                            const isLeft = idx % 2 === 0;

                            // build gradient string for inline usages (safe small inline usage)
                            const grad = `linear-gradient(135deg, ${step.colorFrom}, ${step.colorTo})`;

                            return (
                                <div key={idx} className="relative">
                                    <div className="grid lg:grid-cols-3 items-start gap-6">
                                        {/* Left column (shows card when isLeft) */}
                                        <div className="hidden lg:flex justify-end">
                                            {isLeft && (
                                                <article
                                                    onMouseEnter={() => setHoveredIndex(idx)}
                                                    onMouseLeave={() => setHoveredIndex(null)}
                                                    aria-labelledby={`process-${idx}`}
                                                    className={`max-w-md w-full relative rounded-3xl p-8 border-2 transition-all duration-500 cursor-pointer bg-[var(--card-bg)] ${isHovered ? "shadow-2xl border-transparent -translate-y-2 scale-105" : "shadow-lg border-[var(--border-color)] hover:shadow-xl"
                                                        }`}
                                                >
                                                    {/* subtle hover backdrop */}
                                                    <div
                                                        className={`absolute inset-0 rounded-3xl -z-10 transition-opacity duration-500 ${isHovered ? "opacity-5" : "opacity-0"}`}
                                                        style={{ background: grad }}
                                                    />

                                                    <div
                                                        className={`absolute -top-4 -right-4 w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-xl z-10 transition-transform duration-500 ${isHovered ? "scale-125 rotate-12" : "scale-100 rotate-0"
                                                            }`}
                                                        style={{ background: grad }}
                                                    >
                                                        {idx + 1}
                                                    </div>

                                                    <div className="relative mb-6">
                                                        <div
                                                            className={`w-20 h-20 rounded-2xl p-4 shadow-lg transition-transform duration-500 ${isHovered ? "scale-110 -rotate-6" : "scale-100 rotate-0"
                                                                }`}
                                                            style={{ background: grad }}
                                                        >
                                                            <Icon className="w-full h-full text-white" />
                                                        </div>
                                                    </div>

                                                    <h3
                                                        id={`process-${idx}`}
                                                        className={`text-2xl font-bold mb-4 text-[var(--foreground)] ${isHovered ? "text-[var(--brand-blue)] dark:text-[var(--brand-teal)]" : ""
                                                            }`}
                                                    >
                                                        {step.title}
                                                    </h3>

                                                    <p className="text-[var(--secondary-text)] leading-relaxed mb-4">{step.description}</p>

                                                    <div className={`space-y-2 overflow-hidden transition-all duration-500 ${isHovered ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                                                        <div className="pt-4 border-t border-[var(--border-color)]">
                                                            {step.details.map((d, i) => (
                                                                <div key={i} className="flex items-center gap-2 mb-2 text-sm text-[var(--secondary-text)]">
                                                                    <CheckCircle2
                                                                        className="w-4 h-4 flex-shrink-0 text-transparent bg-clip-text"
                                                                        style={{ background: grad }}
                                                                    />
                                                                    <span>{d}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div
                                                        className={`flex items-center gap-2 text-sm font-semibold mt-4 transition-all duration-300 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                                                            }`}
                                                        style={{ background: grad, WebkitBackgroundClip: "text", color: "transparent" }}
                                                    >
                                                        Learn more
                                                        <ArrowRight className="w-4 h-4 text-[var(--brand-blue)] dark:text-[var(--brand-teal)]" />
                                                    </div>
                                                </article>
                                            )}
                                        </div>

                                        {/* Center column: dot */}
                                        <div className="flex justify-center items-start">
                                            <div className="relative mt-1">
                                                <div
                                                    className={`w-5 h-5 rounded-full shadow-lg transition-transform duration-300 ${isHovered ? "scale-125" : "scale-100"}`}
                                                    style={{ background: `linear-gradient(135deg, ${step.colorFrom}, ${step.colorTo})` }}
                                                />
                                                <div
                                                    className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-6 w-px h-12 opacity-20"
                                                    style={{
                                                        background: "linear-gradient(to bottom, var(--brand-blue), var(--brand-purple), var(--brand-cyan), var(--brand-yellow))",
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* Right column (shows card when not isLeft) */}
                                        <div className="hidden lg:flex justify-start">
                                            {!isLeft && (
                                                <article
                                                    onMouseEnter={() => setHoveredIndex(idx)}
                                                    onMouseLeave={() => setHoveredIndex(null)}
                                                    aria-labelledby={`process-${idx}`}
                                                    className={`max-w-md w-full relative rounded-3xl p-8 border-2 transition-all duration-500 cursor-pointer bg-[var(--card-bg)] ${isHovered ? "shadow-2xl border-transparent -translate-y-2 scale-105" : "shadow-lg border-[var(--border-color)] hover:shadow-xl"
                                                        }`}
                                                >
                                                    <div
                                                        className={`absolute inset-0 rounded-3xl -z-10 transition-opacity duration-500 ${isHovered ? "opacity-5" : "opacity-0"}`}
                                                        style={{ background: grad }}
                                                    />

                                                    <div
                                                        className={`absolute -top-4 -left-4 w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-xl z-10 transition-transform duration-500 ${isHovered ? "scale-125 rotate-12" : "scale-100 rotate-0"
                                                            }`}
                                                        style={{ background: grad }}
                                                    >
                                                        {idx + 1}
                                                    </div>

                                                    <div className="relative mb-6">
                                                        <div
                                                            className={`w-20 h-20 rounded-2xl p-4 shadow-lg transition-transform duration-500 ${isHovered ? "scale-110 -rotate-6" : "scale-100 rotate-0"
                                                                }`}
                                                            style={{ background: grad }}
                                                        >
                                                            <Icon className="w-full h-full text-white" />
                                                        </div>
                                                    </div>

                                                    <h3
                                                        id={`process-${idx}`}
                                                        className={`text-2xl font-bold mb-4 text-[var(--foreground)] ${isHovered ? "text-[var(--brand-blue)] dark:text-[var(--brand-teal)]" : ""
                                                            }`}
                                                    >
                                                        {step.title}
                                                    </h3>

                                                    <p className="text-[var(--secondary-text)] leading-relaxed mb-4">{step.description}</p>

                                                    <div className={`space-y-2 overflow-hidden transition-all duration-500 ${isHovered ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                                                        <div className="pt-4 border-t border-[var(--border-color)]">
                                                            {step.details.map((d, i) => (
                                                                <div key={i} className="flex items-center gap-2 mb-2 text-sm text-[var(--secondary-text)]">
                                                                    <CheckCircle2
                                                                        className="w-4 h-4 flex-shrink-0 text-transparent bg-clip-text"
                                                                        style={{ background: grad }}
                                                                    />
                                                                    <span>{d}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div
                                                        className={`flex items-center gap-2 text-sm font-semibold mt-4 transition-all duration-300 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                                                            }`}
                                                        style={{ background: grad, WebkitBackgroundClip: "text", color: "transparent" }}
                                                    >
                                                        Learn more
                                                        <ArrowRight className="w-4 h-4 text-[var(--brand-blue)] dark:text-[var(--brand-teal)]" />
                                                    </div>
                                                </article>
                                            )}
                                        </div>
                                    </div>

                                    {/* Mobile stacked card */}
                                    <div className="lg:hidden mt-6">
                                        <div
                                            onMouseEnter={() => setHoveredIndex(idx)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                            className={`relative bg-[var(--card-bg)] rounded-3xl p-6 border-2 transition-all duration-500 ${hoveredIndex === idx ? "shadow-2xl border-transparent" : "shadow-lg border-[var(--border-color)]"
                                                }`}
                                        >
                                            <div
                                                className="absolute -top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold z-10"
                                                style={{ background: `linear-gradient(135deg, ${step.colorFrom}, ${step.colorTo})` }}
                                            >
                                                {idx + 1}
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <div
                                                    className="w-14 h-14 rounded-xl p-3 shadow"
                                                    style={{ background: `linear-gradient(135deg, ${step.colorFrom}, ${step.colorTo})` }}
                                                >
                                                    <Icon className="w-full h-full text-white" />
                                                </div>

                                                <div>
                                                    <h4 className="text-lg font-semibold text-[var(--foreground)]">{step.title}</h4>
                                                    <p className="text-sm text-[var(--secondary-text)]">{step.description}</p>

                                                    <div className={`mt-3 space-y-1 ${hoveredIndex === idx ? "opacity-100" : "opacity-80"}`}>
                                                        {step.details.slice(0, 2).map((d, i) => (
                                                            <div key={i} className="text-xs text-[var(--secondary-text)] flex items-center gap-2">
                                                                <CheckCircle2
                                                                    className="w-3 h-3 text-transparent bg-clip-text"
                                                                    style={{ background: `linear-gradient(135deg, ${step.colorFrom}, ${step.colorTo})` }}
                                                                />
                                                                <span>{d}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <p className="text-[var(--secondary-text)] mb-6">Ready to transform your business?</p>
                    <button
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white transform hover:scale-105 transition-all duration-300"
                        style={{ background: "linear-gradient(90deg,var(--brand-blue),var(--brand-teal))" }}
                    >
                        Start Your Journey
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* small keyframes kept local to component */}
            <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.92; }
          50% { transform: scale(1.03); opacity: 1; }
          100% { transform: scale(1); opacity: 0.92; }
        }
        .animate-pulse { animation: pulse 6s ease-in-out infinite; }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
        </section>
    );
}
