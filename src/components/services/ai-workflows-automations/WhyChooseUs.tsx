"use client";

import { Zap, Layers, TrendingUp, Link2, Shield, CheckCircle, Clock, Target, BarChart3, Lock } from "lucide-react";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Clock,
            title: "Faster Execution",
            description: "Automate processes that previously took hours or days, completing them in minutes with AI-powered intelligence.",
            gradient: "from-blue-500 to-cyan-500",
            iconBg: "bg-blue-500/10",
            iconColor: "text-blue-500",
            animation: "float",
        },
        {
            icon: Target,
            title: "Reduced Human Error",
            description: "Eliminate manual mistakes with consistent, rule-based automation and AI validation at every step.",
            gradient: "from-red-500 to-pink-500",
            iconBg: "bg-red-500/10",
            iconColor: "text-red-500",
            animation: "pulse",
        },
        {
            icon: Layers,
            title: "Scalable Workflows",
            description: "Build workflows that grow with your business, handling increased volume without additional resources.",
            gradient: "from-purple-500 to-indigo-500",
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-500",
            animation: "slide",
        },
        {
            icon: BarChart3,
            title: "AI-Driven Insights",
            description: "Extract actionable intelligence from your processes to continuously optimize and improve performance.",
            gradient: "from-green-500 to-emerald-500",
            iconBg: "bg-green-500/10",
            iconColor: "text-green-500",
            animation: "bounce",
        },
        {
            icon: Link2,
            title: "Seamless Integrations",
            description: "Connect with your existing tools and systems - CRM, ERP, databases, APIs - for unified automation.",
            gradient: "from-amber-500 to-orange-500",
            iconBg: "bg-amber-500/10",
            iconColor: "text-amber-500",
            animation: "rotate",
        },
        {
            icon: Lock,
            title: "Enterprise-Grade Security",
            description: "Protect sensitive data with encryption, compliance standards, and secure data pipelines throughout your workflows.",
            gradient: "from-slate-600 to-slate-800",
            iconBg: "bg-slate-500/10",
            iconColor: "text-slate-600",
            animation: "shake",
        },
    ];

    const getAnimationClass = (animation: string) => {
        switch (animation) {
            case "float": return "animate-float";
            case "pulse": return "animate-pulse-custom";
            case "slide": return "animate-slide";
            case "bounce": return "animate-bounce-custom";
            case "rotate": return "animate-rotate-custom";
            case "shake": return "animate-shake";
            default: return "";
        }
    };

    return (
        <>
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes pulse-custom {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
                @keyframes slide {
                    0%, 100% { transform: translateX(0px); }
                    50% { transform: translateX(5px); }
                }
                @keyframes bounce-custom {
                    0%, 100% { transform: translateY(0px); }
                    25% { transform: translateY(-5px); }
                    75% { transform: translateY(-2px); }
                }
                @keyframes rotate-custom {
                    0%, 100% { transform: rotate(0deg); }
                    50% { transform: rotate(5deg); }
                }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-2px); }
                    75% { transform: translateX(2px); }
                }
                .animate-float { animation: float 3s ease-in-out infinite; }
                .animate-pulse-custom { animation: pulse-custom 2s ease-in-out infinite; }
                .animate-slide { animation: slide 2.5s ease-in-out infinite; }
                .animate-bounce-custom { animation: bounce-custom 2s ease-in-out infinite; }
                .animate-rotate-custom { animation: rotate-custom 3s ease-in-out infinite; }
                .animate-shake { animation: shake 2s ease-in-out infinite; }
                
                @keyframes shimmer {
                    0% { background-position: -1000px 0; }
                    100% { background-position: 1000px 0; }
                }
                .shimmer-effect {
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
                    background-size: 1000px 100%;
                    animation: shimmer 3s infinite;
                }
            `}</style>

            <section
                className="py-20 transition-colors duration-300"
                style={{
                    backgroundColor: "var(--card-bg)",
                    borderColor: "var(--border-color)",
                }}
            >
                <div className="mx-auto px-6 md:px-12 xl:px-20">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-fadeIn" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ color: "var(--foreground)" }}>
                            Why Choose Our <span style={{ color: "var(--brand-orange)" }}>AI Automation Solutions?</span>
                        </h2>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                            We deliver enterprise-grade AI automation solutions that combine cutting-edge technology with deep business expertise to drive measurable results.
                        </p>
                    </div>

                    {/* Reasons Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reasons.map((reason, index) => {
                            const Icon = reason.icon;
                            return (
                                <div
                                    key={index}
                                    className="group relative p-6 rounded-2xl transition-all duration-500 hover:-translate-y-3 border animate-fadeIn overflow-hidden"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                        animationDelay: `${0.2 + index * 0.1}s`,
                                        animationFillMode: "both",
                                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {/* Animated gradient background */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                    />

                                    {/* Shimmer effect on hover */}
                                    <div className="shimmer-effect absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Animated corner accents */}
                                    <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className={`absolute top-0 right-0 w-2 h-full bg-gradient-to-b ${reason.gradient}`} />
                                        <div className={`absolute top-0 right-0 w-full h-2 bg-gradient-to-r ${reason.gradient}`} />
                                    </div>

                                    {/* Icon container with unique animation */}
                                    <div className="relative mb-5 z-10">
                                        <div
                                            className={`w-16 h-16 rounded-xl ${reason.iconBg} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg ${getAnimationClass(reason.animation)}`}
                                        >
                                            <Icon className={`w-8 h-8 ${reason.iconColor}`} strokeWidth={2.5} />
                                        </div>

                                        {/* Orbiting dots */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className={`absolute top-0 right-0 w-2 h-2 rounded-full ${reason.iconBg} animate-ping`} />
                                            <div className={`absolute bottom-0 left-0 w-2 h-2 rounded-full ${reason.iconBg}`} style={{ animationDelay: "0.5s" }} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold mb-3 transition-colors duration-300" style={{ color: "var(--foreground)" }}>
                                            {reason.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                            {reason.description}
                                        </p>
                                    </div>

                                    {/* Animated bottom border */}
                                    <div
                                        className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${reason.gradient} group-hover:w-full transition-all duration-700 ease-out`}
                                    />

                                    {/* Corner decoration */}
                                    <div className="absolute bottom-22 right-4 opacity-0 group-hover:opacity-20 transition-all duration-500">
                                        <Icon className={`w-24 h-24 ${reason.iconColor}`} strokeWidth={0.5} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Competitive Advantage */}
                    <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fadeIn" style={{ animationDelay: "0.8s", animationFillMode: "both" }}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
                                    <Zap className="w-6 h-6 text-orange-500" />
                                </div>
                                <h3 className="text-3xl font-bold" style={{ color: "var(--foreground)" }}>Our Competitive Edge</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Expert team with deep AI and automation expertise",
                                    "Proven track record across multiple industries",
                                    "Custom solutions tailored to your specific needs",
                                    "Continuous optimization and monitoring",
                                    "24/7 support and maintenance",
                                    "ROI-focused approach with measurable KPIs",
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300"
                                    >
                                        <div className="mt-1 relative">
                                            <CheckCircle
                                                className="w-5 h-5 flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                                                style={{ color: "var(--brand-orange)" }}
                                            />
                                            <div className="absolute inset-0 bg-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
                                        </div>
                                        <span style={{ color: "var(--foreground)" }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div
                            className="p-8 rounded-2xl border animate-fadeIn relative overflow-hidden group"
                            style={{
                                backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                                borderColor: "var(--border-color)",
                                animationDelay: "1s",
                                animationFillMode: "both",
                            }}
                        >
                            {/* Animated background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                                        <TrendingUp className="w-5 h-5 text-orange-500" />
                                    </div>
                                    <h4 className="text-xl font-bold" style={{ color: "var(--brand-orange)" }}>
                                        Success Metrics
                                    </h4>
                                </div>
                                <div className="space-y-6">
                                    {[
                                        { label: "Process Efficiency", value: "+85%", width: "85%" },
                                        { label: "Cost Savings", value: "-60%", width: "60%" },
                                        { label: "Error Reduction", value: "-95%", width: "95%" },
                                    ].map((metric, i) => (
                                        <div key={i} className="group/metric">
                                            <div className="flex justify-between mb-2">
                                                <span className="font-semibold" style={{ color: "var(--foreground)" }}>{metric.label}</span>
                                                <span
                                                    className="font-bold transition-transform duration-300 group-hover/metric:scale-110"
                                                    style={{ color: "var(--brand-orange)" }}
                                                >
                                                    {metric.value}
                                                </span>
                                            </div>
                                            <div
                                                className="w-full rounded-full h-3 overflow-hidden"
                                                style={{ backgroundColor: "var(--border-color)" }}
                                            >
                                                <div
                                                    className="bg-gradient-to-r from-[#fab900] to-[#ee6500] h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                                                    style={{
                                                        width: metric.width,
                                                        animationDelay: `${i * 0.2}s`
                                                    }}
                                                >
                                                    {/* Shine effect */}
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent shimmer-effect" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}