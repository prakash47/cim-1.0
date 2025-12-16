"use client";

import { Lightbulb, Pencil, Code, TestTube, Rocket, Wrench } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function Process() {
    const steps = [
        {
            icon: Lightbulb,
            title: "Ideation & Strategy",
            description: "We collaborate with you to understand your vision, target audience, and business goals. We conduct market research and competitive analysis to ensure your app stands out.",
            details: ["Business Analysis", "Market Research", "Competitive Analysis", "Strategy Development"]
        },
        {
            icon: Pencil,
            title: "Wireframing & UI/UX Design",
            description: "Our design team creates detailed wireframes and stunning UI designs. We focus on user experience, accessibility, and platform guidelines.",
            details: ["User Research", "Wireframing", "UI Design", "Prototyping", "User Testing"]
        },
        {
            icon: Code,
            title: "Development & Coding",
            description: "Our expert developers build your app using the latest technologies and best practices. We maintain clean, scalable code and follow agile methodologies.",
            details: ["Frontend Development", "Backend Development", "API Integration", "Database Design", "Code Reviews"]
        },
        {
            icon: TestTube,
            title: "Testing & QA",
            description: "Comprehensive testing across devices, platforms, and scenarios. We ensure your app is bug-free, performant, and meets all requirements.",
            details: ["Unit Testing", "Integration Testing", "Performance Testing", "Security Testing", "User Acceptance Testing"]
        },
        {
            icon: Rocket,
            title: "Deployment & Launch",
            description: "We handle all aspects of app store submission, including compliance checks, documentation, and optimization for discoverability.",
            details: ["App Store Submission", "Play Store Submission", "Launch Strategy", "Marketing Support", "Performance Monitoring"]
        },
        {
            icon: Wrench,
            title: "Maintenance & Updates",
            description: "Ongoing support, bug fixes, feature updates, and optimization. We ensure your app stays current with OS updates and user needs.",
            details: ["Bug Fixes", "Feature Updates", "Performance Optimization", "Security Patches", "User Support"]
        }
    ];

    return (
        <section
            className="relative transition-colors duration-300 py-20 md:py-28"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-30"
                    style={{ backgroundColor: "color-mix(in srgb, var(--brand-purple) 20%, transparent)" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeIn">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
                        <span style={{ color: "var(--foreground)" }}>Our Mobile App Development</span> <span style={{ color: "var(--brand-purple)" }}>Process</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A structured, transparent approach that ensures your app is delivered on time, within budget, and exceeds expectations.
                    </p>
                </div>

                {/* Process Timeline */}
                <div className="space-y-8 mb-16">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={index}
                                className="animate-fadeIn"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    animationFillMode: "both",
                                    animation: `slideInRight 0.6s ease-out ${index * 0.1}s both`
                                }}
                            >
                                <div className="grid lg:grid-cols-12 gap-8 items-start">
                                    {/* Left Side - Number and Icon */}
                                    <div className="lg:col-span-2 flex flex-col items-center">
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 hover:scale-125 hover:rotate-12 cursor-pointer relative group"
                                            style={{
                                                background: "linear-gradient(135deg, var(--brand-purple), var(--brand-yellow))",
                                            }}
                                        >
                                            {/* Pulsing ring */}
                                            <div
                                                className="absolute inset-0 rounded-2xl animate-ping opacity-0 group-hover:opacity-75"
                                                style={{
                                                    background: "linear-gradient(135deg, var(--brand-purple), var(--brand-yellow))",
                                                }}
                                            />
                                            <Icon className="w-8 h-8 text-white relative z-10" />
                                        </div>
                                        <div className="text-sm font-bold" style={{ color: "var(--brand-purple)" }}>
                                            Step {index + 1}
                                        </div>
                                        {index < steps.length - 1 && (
                                            <div
                                                className="hidden lg:block w-1 h-20 mt-4 relative overflow-hidden"
                                                style={{ backgroundColor: "color-mix(in srgb, var(--border-color) 50%, transparent)" }}
                                            >
                                                {/* Animated progress line */}
                                                <div
                                                    className="absolute top-0 left-0 w-full h-0 transition-all duration-1000"
                                                    style={{
                                                        background: "linear-gradient(180deg, var(--brand-purple), var(--brand-yellow))",
                                                        animation: `fillDown 2s ease-out ${index * 0.3}s forwards`
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Right Side - Content */}
                                    <div
                                        className="group/card lg:col-span-10 p-6 rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer relative overflow-hidden"
                                        style={{
                                            backgroundColor: "var(--card-bg)",
                                            borderColor: "var(--border-color)"
                                        }}
                                    >
                                        {/* Animated gradient overlay */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover/card:opacity-10 transition-opacity duration-500"
                                            style={{
                                                background: "linear-gradient(135deg, var(--brand-purple), var(--brand-yellow))",
                                            }}
                                        />

                                        <div className="relative z-10">
                                            <h3 className="text-2xl font-bold mb-2 transition-colors duration-300 text-[var(--foreground)] group-hover/card:text-[var(--brand-purple)]">
                                                {step.title}
                                            </h3>
                                            <p className="text-base mb-4" style={{ color: "var(--secondary-text)" }}>
                                                {step.description}
                                            </p>

                                            {/* Details Grid */}
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                {step.details.map((detail, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center gap-2 text-sm transition-transform duration-300 hover:translate-x-1"
                                                        style={{
                                                            animation: `fadeIn 0.5s ease-out ${idx * 0.1}s both`
                                                        }}
                                                    >
                                                        <span
                                                            className="w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover/card:w-2 group-hover/card:h-2"
                                                            style={{ backgroundColor: "var(--brand-purple)" }}
                                                        />
                                                        <span style={{ color: "var(--secondary-text)" }}>{detail}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Decorative corner accent */}
                                        <div
                                            className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover/card:opacity-20 transition-opacity duration-500"
                                            style={{
                                                background: "linear-gradient(225deg, var(--brand-purple), transparent)",
                                                borderTopRightRadius: "1rem",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CSS Animations */}
                <style jsx>{`
                    @keyframes slideInRight {
                        from {
                            opacity: 0;
                            transform: translateX(-50px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }
                    @keyframes fillDown {
                        from {
                            height: 0%;
                        }
                        to {
                            height: 100%;
                        }
                    }
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }
                `}</style>

                {/* Process Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl border text-center" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                        <div className="text-4xl font-bold mb-2" style={{ color: "var(--brand-purple)" }}>
                            Agile
                        </div>
                        <p style={{ color: "var(--secondary-text)" }}>
                            Flexible methodology with regular sprints and iterations
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl border text-center" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                        <div className="text-4xl font-bold mb-2" style={{ color: "var(--brand-yellow)" }}>
                            Transparent
                        </div>
                        <p style={{ color: "var(--secondary-text)" }}>
                            Regular updates, demos, and clear communication throughout
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl border text-center" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                        <div className="text-4xl font-bold mb-2" style={{ color: "var(--brand-blue)" }}>
                            Quality
                        </div>
                        <p style={{ color: "var(--secondary-text)" }}>
                            Rigorous testing and quality assurance at every stage
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}