"use client";

import { Compass, Palette, Code, CheckCircle, Rocket, Wrench } from "lucide-react";

export default function Process() {
    const steps = [
        {
            icon: Compass,
            number: "01",
            title: "Discovery",
            description: "Deep dive into your business goals, target audience, and technical requirements. We ask the right questions to understand your vision.",
            color: "from-[#008ac1] to-[#00b5ca]",
        },
        {
            icon: Palette,
            number: "02",
            title: "Design",
            description: "Wireframing, prototyping, and creating the visual Responsive Web Design based on user feedback and best practices.",
            color: "from-[#bc3feb] to-[#fab900]",
        },
        {
            icon: Code,
            number: "03",
            title: "Development",
            description: "Clean, modular, and reusable code implementation using the latest technologies and industry standards.",
            color: "from-[#fab900] to-[#ee6500]",
        },
        {
            icon: CheckCircle,
            number: "04",
            title: "Testing",
            description: "Rigorous QA, cross-browser compatibility checks, performance testing, and security audits.",
            color: "from-[#00efd6] to-[#00b5ca]",
        },
        {
            icon: Rocket,
            number: "05",
            title: "Deployment",
            description: "Seamless launch with zero downtime, final SEO checks, and performance optimization.",
            color: "from-[#008ac1] to-[#bc3feb]",
        },
        {
            icon: Wrench,
            number: "06",
            title: "Maintenance",
            description: "Ongoing support, security updates, performance monitoring, and continuous improvement.",
            color: "from-[#ee6500] to-[#fab900]",
        },
    ];

    return (
        <section
            className="relative overflow-hidden py-10 lg:py-20 transition-colors duration-300"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            {/* Animated Background */}
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
                        backgroundColor: "color-mix(in srgb, var(--brand-cyan) 12%, transparent)",
                        animationDelay: "1s",
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-teal) 12%, transparent)",
                        animationDelay: "2s",
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        A Proven <span style={{ color: "var(--brand-blue)" }}>6-Step Process</span> for Digital Success
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        Our structured approach ensures every project is delivered on time, on budget, and exceeds expectations.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))",
                        }}
                    />
                </div>

                {/* Process Steps - Vertical Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div
                        className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 top-0 bottom-0 rounded-full"
                        style={{
                            background: "linear-gradient(180deg, var(--brand-blue), var(--brand-teal))",
                            opacity: 0.3,
                        }}
                    />

                    <div className="space-y-12 md:space-y-20">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            const isEven = idx % 2 === 0;

                            return (
                                <div
                                    key={idx}
                                    className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    {/* Content Card */}
                                    <div className="flex-1 w-full md:w-auto">
                                        <div
                                            className="group relative rounded-3xl p-8 border backdrop-blur-sm hover:shadow-2xl transition-all duration-500"
                                            style={{
                                                backgroundColor: "var(--card-bg)",
                                                borderColor: "var(--border-color)",
                                            }}
                                        >
                                            {/* Hover Gradient Background */}
                                            <div
                                                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${step.color}`}
                                            />

                                            <div className="relative">
                                                {/* Icon for Mobile */}
                                                <div className="lg:hidden mb-6">
                                                    <div
                                                        className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${step.color} shadow-lg`}
                                                    >
                                                        <Icon className="w-8 h-8 text-white" />
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-4">
                                                    <div
                                                        className="text-7xl font-bold opacity-10"
                                                        style={{
                                                            background: `linear-gradient(135deg, var(--brand-blue), var(--brand-teal))`,
                                                            WebkitBackgroundClip: "text",
                                                            WebkitTextFillColor: "transparent",
                                                        }}
                                                    >
                                                        {step.number}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                                            {step.title}
                                                        </h3>
                                                        <p className="text-base leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                                            {step.description}
                                                        </p>

                                                        {/* Step Status Badge */}
                                                        <div className="mt-4">
                                                            <span
                                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
                                                                style={{
                                                                    backgroundColor: "color-mix(in srgb, var(--brand-blue) 15%, transparent)",
                                                                    color: "var(--brand-blue)",
                                                                }}
                                                            >
                                                                <span className="w-2 h-2 rounded-full bg-[var(--brand-blue)]"></span>
                                                                Step {idx + 1} of {steps.length}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Center Circle Icon (Desktop Only) */}
                                    <div className="hidden lg:flex relative z-10 flex-shrink-0">
                                        <div
                                            className="relative group/icon"
                                        >
                                            {/* Outer Ring */}
                                            <div
                                                className="absolute -inset-4 rounded-full opacity-20"
                                                style={{
                                                    background: `linear-gradient(135deg, var(--brand-blue), var(--brand-teal))`,
                                                    animation: `spin 10s linear infinite`,
                                                }}
                                            />

                                            {/* Main Circle */}
                                            <div
                                                className={`relative w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br ${step.color} shadow-2xl group-hover/icon:scale-125 transition-transform duration-500`}
                                                style={{
                                                    border: "4px solid var(--background)",
                                                }}
                                            >
                                                <Icon className="w-12 h-12 text-white" />
                                            </div>

                                            {/* Step Number Badge */}
                                            <div
                                                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg"
                                                style={{
                                                    background: "linear-gradient(135deg, var(--brand-blue), var(--brand-teal))",
                                                }}
                                            >
                                                {idx + 1}
                                            </div>

                                            {/* Connecting Line */}
                                            <div
                                                className="absolute top-1/2 transform -translate-y-1/2"
                                                style={{
                                                    [isEven ? "left" : "right"]: "100%",
                                                    marginLeft: isEven ? "1rem" : "auto",
                                                    marginRight: isEven ? "auto" : "1rem",
                                                }}
                                            >
                                                <div
                                                    className="w-8 h-1 rounded-full"
                                                    style={{
                                                        background: `linear-gradient(90deg, var(--brand-blue), var(--brand-teal))`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Spacer for layout balance */}
                                    <div className="hidden lg:block flex-1" />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Process Timeline Summary */}
                <div className="mt-24">
                    <div
                        className="rounded-3xl p-8 md:p-12 border backdrop-blur-sm"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div
                                    className="text-4xl font-bold mb-2"
                                    style={{
                                        background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    100%
                                </div>
                                <p className="text-sm font-semibold" style={{ color: "var(--secondary-text)" }}>
                                    On-Time Delivery
                                </p>
                            </div>
                            <div className="text-center">
                                <div
                                    className="text-4xl font-bold mb-2"
                                    style={{
                                        background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    6 Steps
                                </div>
                                <p className="text-sm font-semibold" style={{ color: "var(--secondary-text)" }}>
                                    Proven Process
                                </p>
                            </div>
                            <div className="text-center">
                                <div
                                    className="text-4xl font-bold mb-2"
                                    style={{
                                        background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    24/7
                                </div>
                                <p className="text-sm font-semibold" style={{ color: "var(--secondary-text)" }}>
                                    Communication
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CSS Animations */}
                <style jsx>{`
                    @keyframes fadeInScale {
                        from {
                            opacity: 0;
                            transform: scale(0.9);
                        }
                        to {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }
                    @keyframes spin {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(360deg);
                        }
                    }
                `}</style>

                {/* Bottom Info */}
                <div className="mt-16 text-center">
                    <p className="text-lg mb-8" style={{ color: "var(--secondary-text)" }}>
                        Throughout every step, we maintain transparent communication and keep you informed of progress.
                    </p>

                    <button
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold bg-gradient-to-r from-[#008ac1] to-[#00b5ca] text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                        Start Your Project
                        <span>→</span>
                    </button>
                </div>
            </div>
        </section>
    );
}