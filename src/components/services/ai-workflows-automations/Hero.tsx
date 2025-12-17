"use client";

import { Sparkles, ArrowRight, Home, ChevronRight, Zap, Cpu, Workflow, BarChart3, ShieldCheck, Rocket } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            className="relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            {/* Animated Background with AI-inspired gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-orange) 12%, transparent)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-orange) 12%, transparent)",
                        animationDelay: "1s",
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-blue) 12%, transparent)",
                        animationDelay: "2s",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 py-12 relative">
                {/* Breadcrumbs */}
                <nav
                    className="flex items-center gap-2 text-sm mb-5 justify-center lg:justify-start animate-fadeIn"
                    aria-label="Breadcrumb"
                    style={{ animationDelay: "0.1s", animationFillMode: "both" }}
                >
                    <Link
                        href="/"
                        className="flex items-center gap-1 hover:underline transition-colors"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        <Home className="w-4 h-4" />
                        Home
                    </Link>

                    <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />

                    <Link
                        href="/services"
                        className="hover:underline transition-colors"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Services
                    </Link>

                    <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />

                    <span
                        className="font-semibold"
                        style={{ color: "var(--brand-orange)" }}
                    >
                        AI Workflows & Automations
                    </span>
                </nav>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div
                        className="text-center lg:text-left animate-fadeIn"
                        style={{ animationDelay: "0.2s", animationFillMode: "both" }}
                    >
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border transition-colors"
                            style={{
                                background:
                                    "linear-gradient(90deg, color-mix(in srgb, var(--brand-orange) 8%, transparent), color-mix(in srgb, var(--brand-orange) 8%, transparent))",
                                borderColor: "color-mix(in srgb, var(--brand-orange) 20%, transparent)",
                                color: "var(--brand-orange)",
                            }}
                        >
                            <Sparkles className="w-4 h-4" style={{ color: "var(--brand-orange)" }} />
                            <span className="text-sm font-semibold">AI Workflows & Automations</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background:
                                        "linear-gradient(90deg, var(--brand-orange), var(--brand-orange))",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                Automate Your Business with AI
                            </span>
                        </h1>

                        {/* Underline */}
                        <div
                            className="w-32 h-1.5 mb-8 rounded-full lg:mx-0 mx-auto mt-4"
                            style={{
                                background:
                                    "linear-gradient(90deg, var(--brand-orange), var(--brand-orange))",
                            }}
                        />

                        {/* Tagline */}
                        <p className="text-xl md:text-2xl mb-8" style={{ color: "var(--secondary-text)" }}>
                            Transform your operations with <span style={{ color: "var(--brand-orange)", fontWeight: 700 }}>Intelligent Automation</span>. Reduce costs, eliminate errors, and scale your business with <span style={{ color: "var(--brand-orange)", fontWeight: 700 }}>AI-powered workflows</span>.
                        </p>

                        {/* Feature Highlights */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-orange) 8%, transparent)",
                                }}
                            >
                                <Zap className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-orange)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Lightning Fast
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-orange) 8%, transparent)",
                                }}
                            >
                                <Cpu className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-orange)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    AI-Powered
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-orange) 8%, transparent)",
                                }}
                            >
                                <Workflow className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-orange)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Workflow Design
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-orange) 8%, transparent)",
                                }}
                            >
                                <BarChart3 className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-orange)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Data-Driven
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-orange) 8%, transparent)",
                                }}
                            >
                                <ShieldCheck className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-orange)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Secure
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-orange) 8%, transparent)",
                                }}
                            >
                                <Rocket className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-orange)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Scalable
                                </span>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-3 gap-4 mb-8 p-6 rounded-2xl"
                            style={{
                                backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid var(--border-color)",
                            }}
                        >
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, var(--brand-orange), var(--brand-orange))",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    80%
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Cost Reduction
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, var(--brand-orange), var(--brand-orange))",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    10x
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Faster Execution
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, var(--brand-orange), var(--brand-orange))",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    99%
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Error Reduction
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#fab900] to-[#ee6500] hover:from-[#fab900] hover:to-[#fab900] text-black rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Start Your AI Journey
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* RIGHT SIDE - Futuristic AI Visualization */}
                    <div
                        className="hidden lg:flex items-center justify-center animate-fadeIn"
                        style={{ animationDelay: "0.4s", animationFillMode: "both" }}
                    >
                        <div className="relative w-full h-96">
                            {/* Central AI Core */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div
                                    className="w-32 h-32 rounded-full flex items-center justify-center shadow-2xl animate-pulse"
                                    style={{
                                        background: "linear-gradient(135deg, var(--brand-orange), var(--brand-orange))",
                                    }}
                                >
                                    <Cpu className="w-16 h-16 text-white" />
                                </div>
                            </div>

                            {/* Orbiting Elements */}
                            <div className="absolute inset-0">
                                {[0, 120, 240].map((angle, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-20 h-20 rounded-lg flex items-center justify-center shadow-lg"
                                        style={{
                                            background: i === 0 ? "linear-gradient(135deg, var(--brand-blue), var(--brand-cyan))" :
                                                i === 1 ? "linear-gradient(135deg, var(--brand-purple), var(--brand-orange))" :
                                                    "linear-gradient(135deg, var(--brand-teal), var(--brand-blue))",
                                            top: "50%",
                                            left: "50%",
                                            transform: `rotate(${angle}deg) translateX(120px) rotate(-${angle}deg)`,
                                            animation: `float 6s ease-in-out infinite`,
                                            animationDelay: `${i * 0.2}s`,
                                        }}
                                    >
                                        {i === 0 && <Workflow className="w-10 h-10 text-white" />}
                                        {i === 1 && <BarChart3 className="w-10 h-10 text-white" />}
                                        {i === 2 && <Zap className="w-10 h-10 text-white" />}
                                    </div>
                                ))}
                            </div>

                            {/* Connection Lines */}
                            <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
                                <line x1="50%" y1="50%" x2="50%" y2="20%" stroke="var(--brand-orange)" strokeWidth="2" opacity="0.3" />
                                <line x1="50%" y1="50%" x2="80%" y2="70%" stroke="var(--brand-orange)" strokeWidth="2" opacity="0.3" />
                                <line x1="50%" y1="50%" x2="20%" y2="70%" stroke="var(--brand-blue)" strokeWidth="2" opacity="0.3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
