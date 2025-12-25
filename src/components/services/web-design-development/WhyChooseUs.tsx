"use client";

import { Zap, Smartphone, Lock, TrendingUp, Search, Accessibility } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const benefits = [
        {
            icon: Zap,
            title: "Blazing Fast Performance",
            description: "Optimized for Core Web Vitals and speed. Lower bounce rates and higher search rankings.",
            color: "from-[#fab900] to-[#ee6500]",
        },
        {
            icon: TrendingUp,
            title: "Future-Proof Scalability",
            description: "Built on modern stacks to handle exponential growth. Your website grows seamlessly with your business.",
            color: "from-[#008ac1] to-[#bc3feb]",
        },
        {
            icon: Smartphone,
            title: "Responsive Web Design",
            description: "Flawless display on all devices. Maximum reach and accessibility for all users.",
            color: "from-[#00efd6] to-[#00b5ca]",
        },
        {
            icon: Lock,
            title: "Enterprise-Grade Security",
            description: "Robust protocols to protect data and customers. Peace of mind and compliance assurance.",
            color: "from-[#bc3feb] to-[#fab900]",
        },
        {
            icon: Search,
            title: "Inherent SEO Foundation",
            description: "Every site is built with a strong technical SEO base. Immediate search visibility and organic traffic.",
            color: "from-[#008ac1] to-[#00b5ca]",
        },
        {
            icon: Accessibility,
            title: "Intuitive User Experience",
            description: "Data-driven design that guides users to conversion. Increased lead generation and sales.",
            color: "from-[#00efd6] to-[#bc3feb]",
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
                        The CIM <span style={{ fontWeight: 700, color: "var(--brand-blue)" }}>Advantage</span>
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        Performance, Scalability, and User Experience. Choosing the right <span style={{ fontWeight: 700, color: "var(--brand-blue)" }}>Web Development Company</span> is crucial.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))",
                        }}
                    />
                </div>

                {/* Benefits - Enhanced Layout */}
                <div className="space-y-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {benefits.map((benefit, idx) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={idx}
                                className="group relative"
                                style={{
                                    animation: `slideInLeft 0.6s ease-out ${idx * 0.1}s both`,
                                }}
                            >
                                {/* Animated Background Glow */}
                                <div
                                    className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                                    style={{
                                        background: `linear-gradient(90deg, var(--brand-blue), var(--brand-teal))`,
                                    }}
                                />

                                <div
                                    className="relative rounded-3xl p-8 border backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                                        {/* Left Side - Icon & Number */}
                                        <div className="flex items-center gap-6">

                                            {/* Icon */}
                                            <div
                                                className={`w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br ${benefit.color} shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                                            >
                                                <Icon className="w-10 h-10 text-white" />
                                            </div>
                                        </div>

                                        {/* Right Side - Content */}
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--brand-blue)] transition-colors" style={{ color: "var(--foreground)" }}>
                                                {benefit.title}
                                            </h3>
                                            <p className="text-lg leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                                {benefit.description}
                                            </p>

                                            {/* Progress Bar */}
                                            <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full bg-gradient-to-r ${benefit.color} transition-all duration-1000 group-hover:w-full`}
                                                    style={{
                                                        width: "0%",
                                                        animation: `expandWidth 1.5s ease-out ${idx * 0.15}s forwards`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Stats Section */}
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { value: "99.9%", label: "Uptime Guarantee" },
                        { value: "< 2s", label: "Load Time" },
                        { value: "100%", label: "Mobile Optimized" },
                        { value: "24/7", label: "Support" },
                    ].map((stat, idx) => (
                        <div
                            key={idx}
                            className="text-center p-6 rounded-2xl border backdrop-blur-sm hover:scale-105 transition-transform duration-300"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                                animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                            }}
                        >
                            <div
                                className="text-4xl font-bold mb-2"
                                style={{
                                    background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                {stat.value}
                            </div>
                            <div className="text-sm font-semibold" style={{ color: "var(--secondary-text)" }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CSS Animations */}
                <style jsx>{`
                    @keyframes slideInLeft {
                        from {
                            opacity: 0;
                            transform: translateX(-30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }
                    @keyframes expandWidth {
                        from {
                            width: 0%;
                        }
                        to {
                            width: 85%;
                        }
                    }
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}</style>

                {/* Bottom CTA */}
                <div className="mt-8 text-center">
                    <p className="text-lg mb-8" style={{ color: "var(--secondary-text)" }}>
                        Ready to experience the CIM difference? Let's build something extraordinary together.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-2xl text-sm md:text-base font-semibold bg-gradient-to-r from-[#008ac1] to-[#00b5ca] text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                        Get Started Today
                        <span>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}