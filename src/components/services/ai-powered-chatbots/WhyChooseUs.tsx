"use client";

import { Brain, MessageSquare, Languages, Shield, Sparkles, ChevronRight, Check } from "lucide-react";

export default function WhyChooseUs() {
    const benefits = [
        {
            icon: Brain,
            title: "Natural Language Understanding",
            description: "Advanced NLP algorithms that comprehend context, sentiment, and user intent with remarkable accuracy.",
            gradient: "from-violet-500 via-purple-500 to-indigo-500",
            iconBg: "bg-violet-500/10",
            iconColor: "text-violet-500",

            features: ["Context awareness", "Sentiment analysis", "Intent recognition"],
        },
        {
            icon: MessageSquare,
            title: "Context-Aware Conversations",
            description: "Chatbots that remember conversation history and provide personalized, relevant responses.",
            gradient: "from-blue-500 via-cyan-500 to-teal-500",
            iconBg: "bg-blue-500/10",
            iconColor: "text-blue-500",

            features: ["Memory retention", "Personalization", "Smart responses"],
        },
        {
            icon: Languages,
            title: "Multilingual Support",
            description: "Engage customers in 50+ languages with real-time translation and localization.",
            gradient: "from-emerald-500 via-green-500 to-teal-500",
            iconBg: "bg-emerald-500/10",
            iconColor: "text-emerald-500",

            features: ["50+ languages", "Real-time translation", "Cultural localization"],
        },
        {
            icon: Shield,
            title: "Secure & Scalable Deployment",
            description: "Enterprise-grade security with compliance to GDPR, CCPA, and industry standards. Scales to millions of conversations.",
            gradient: "from-orange-500 via-amber-500 to-yellow-500",
            iconBg: "bg-orange-500/10",
            iconColor: "text-orange-500",

            features: ["GDPR compliant", "Enterprise security", "Infinite scale"],
        },
    ];

    return (
        <>
            <style jsx>{`

                @keyframes border-glow {
                    0%, 100% { 
                        box-shadow: 0 0 0 0 rgba(139, 92, 246, 0);
                    }
                    50% { 
                        box-shadow: 0 0 20px 5px rgba(139, 92, 246, 0.3);
                    }
                }
                @keyframes ripple-expand {
                    0% {
                        transform: scale(0.8);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(1.5);
                        opacity: 0;
                    }
                }
                @keyframes shine {
                    0% { left: -100%; }
                    100% { left: 200%; }
                }
                


                .animate-ripple-expand { animation: ripple-expand 2s ease-out infinite; }
                
                .feature-item {
                    opacity: 1;
                }
                
                .shine-effect::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 50%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    animation: shine 3s infinite;
                }
            `}</style>

            <section
                className="relative transition-colors duration-300 py-20 md:py-28 overflow-hidden"
                style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
            >
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-violet-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                </div>

                <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-fadeIn">
                        <div className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-full border backdrop-blur-sm"
                            style={{
                                backgroundColor: "color-mix(in srgb, var(--brand-chatbot) 10%, transparent)",
                                borderColor: "var(--brand-chatbot)",
                            }}
                        >
                            <Sparkles className="w-4 h-4 animate-spin-slow" style={{ color: "var(--brand-chatbot)" }} />
                            <span className="text-sm font-bold tracking-wide" style={{ color: "var(--brand-chatbot)" }}>
                                CUTTING-EDGE CAPABILITIES
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Why Choose Our <span style={{ color: "var(--brand-chatbot)" }}>AI Chatbot Solutions</span>?
                        </h2>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            We combine cutting-edge AI technology with industry expertise to deliver chatbots that truly understand your customers.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;

                            return (
                                <div
                                    key={index}
                                    className="group relative rounded-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                    }}
                                >
                                    {/* Card container */}
                                    <div
                                        className="relative p-8 h-full border backdrop-blur-sm shine-effect"
                                        style={{
                                            backgroundColor: "color-mix(in srgb, var(--card-bg) 60%, transparent)",
                                            borderColor: "var(--border-color)",
                                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                        }}
                                    >
                                        {/* Animated gradient overlay */}
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 animate-gradient-wave`}
                                        />

                                        {/* Corner decorations */}
                                        <div className="absolute top-0 left-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${benefit.gradient}`} />
                                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${benefit.gradient}`} />
                                        </div>

                                        {/* Icon container with ripple effect */}
                                        <div className="relative mb-6 z-10">
                                            <div className="relative inline-block">
                                                {/* Ripple effect */}
                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                                                    <div className={`absolute inset-0 rounded-xl border-2 ${benefit.iconColor} opacity-50 animate-ripple-expand`} />
                                                </div>

                                                {/* Glow effect */}
                                                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500`} />

                                                <div
                                                    className={`relative w-20 h-20 rounded-xl ${benefit.iconBg} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl`}
                                                >
                                                    <Icon className={`w-10 h-10 ${benefit.iconColor}`} strokeWidth={2.5} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10">
                                            <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 group-hover:text-[var(--brand-chatbot)]">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--secondary-text)" }}>
                                                {benefit.description}
                                            </p>

                                            {/* Features list */}
                                            <div className="space-y-3">
                                                {benefit.features.map((feature, i) => (
                                                    <div
                                                        key={i}
                                                        className="feature-item flex items-center gap-3 group/item"
                                                    >
                                                        <div className={`w-6 h-6 rounded-full ${benefit.iconBg} flex items-center justify-center transition-all duration-300 group-hover/item:scale-110`}>
                                                            <Check className={`w-4 h-4 ${benefit.iconColor}`} strokeWidth={3} />
                                                        </div>
                                                        <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                                                            {feature}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Learn more link */}
                                            <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                                                <span className="text-sm font-semibold" style={{ color: "var(--brand-chatbot)" }}>
                                                    Learn more
                                                </span>
                                                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" style={{ color: "var(--brand-chatbot)" }} />
                                            </div>
                                        </div>

                                        {/* Bottom gradient bar */}
                                        <div
                                            className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${benefit.gradient} group-hover:w-full transition-all duration-700 ease-out`}
                                        />

                                        {/* Large background icon watermark */}
                                        <div className="absolute -bottom-8 -right-8 opacity-0 group-hover:opacity-5 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                                            <Icon className={`w-40 h-40 ${benefit.iconColor}`} strokeWidth={0.5} />
                                        </div>

                                        {/* Floating particles */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className={`absolute top-10 right-10 w-2 h-2 rounded-full bg-gradient-to-r ${benefit.gradient} animate-ping`} />
                                            <div className={`absolute bottom-20 left-10 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${benefit.gradient} animate-ping`} style={{ animationDelay: "0.5s" }} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom Stats Section */}
                    <div className="mt-16 grid md:grid-cols-3 gap-6">
                        {[
                            { label: "Accuracy Rate", value: "98%", gradient: "from-violet-500 to-purple-500" },
                            { label: "Response Time", value: "<1s", gradient: "from-blue-500 to-cyan-500" },
                            { label: "Customer Satisfaction", value: "4.9/5", gradient: "from-emerald-500 to-teal-500" },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="group relative p-6 rounded-2xl border backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--card-bg) 60%, transparent)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                                <div className="relative z-10 text-center">
                                    <div
                                        className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                                    >
                                        {stat.value}
                                    </div>
                                    <p className="text-sm font-medium" style={{ color: "var(--secondary-text)" }}>
                                        {stat.label}
                                    </p>
                                </div>
                                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${stat.gradient} group-hover:w-full transition-all duration-500`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}