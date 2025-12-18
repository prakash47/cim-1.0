"use client";

import { Bot, MessageCircle, Clock, PiggyBank, Sparkles, Zap, Users, ArrowRight } from "lucide-react";

export default function ServiceOverview() {
    const features = [
        {
            icon: Bot,
            title: "Automation",
            description: "Automate repetitive customer interactions and reduce manual workload by up to 80%.",
            gradient: "from-cyan-500 via-blue-500 to-indigo-600",
            iconBg: "bg-blue-500/10",
            iconColor: "text-blue-500",

            stat: "80%",
            statLabel: "Reduction",
        },
        {
            icon: MessageCircle,
            title: "Customer Engagement",
            description: "Deliver personalized, context-aware conversations that improve customer satisfaction and loyalty.",
            gradient: "from-purple-500 via-pink-500 to-rose-500",
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-500",

            stat: "95%",
            statLabel: "Satisfaction",
        },
        {
            icon: Clock,
            title: "24/7 Availability",
            description: "Provide round-the-clock support without increasing operational costs or team size.",
            gradient: "from-emerald-500 via-teal-500 to-cyan-500",
            iconBg: "bg-emerald-500/10",
            iconColor: "text-emerald-500",

            stat: "24/7",
            statLabel: "Support",
        },
        {
            icon: PiggyBank,
            title: "Cost Efficiency",
            description: "Reduce customer support costs by 60% while improving response times and resolution rates.",
            gradient: "from-orange-500 via-amber-500 to-yellow-500",
            iconBg: "bg-orange-500/10",
            iconColor: "text-orange-500",

            stat: "60%",
            statLabel: "Cost Down",
        },
    ];

    return (
        <>
            <style jsx>{`

                @keyframes gradient-rotate {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @keyframes particle-orbit {
                    0% { 
                        transform: rotate(0deg) translateX(30px) rotate(0deg);
                        opacity: 0.3;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% { 
                        transform: rotate(360deg) translateX(30px) rotate(-360deg);
                        opacity: 0.3;
                    }
                }
                @keyframes stat-count {
                    0% { 
                        transform: scale(0.5) rotate(-5deg);
                        opacity: 0;
                    }
                    50% {
                        transform: scale(1.2) rotate(5deg);
                    }
                    100% { 
                        transform: scale(1) rotate(0deg);
                        opacity: 1;
                    }
                }
                @keyframes border-dance {
                    0%, 100% { 
                        clip-path: inset(0 0 98% 0);
                    }
                    25% { 
                        clip-path: inset(0 0 0 98%);
                    }
                    50% { 
                        clip-path: inset(98% 0 0 0);
                    }
                    75% { 
                        clip-path: inset(0 98% 0 0);
                    }
                }
                @keyframes float-subtle {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes glow-pulse {
                    0%, 100% { 
                        box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
                    }
                    50% { 
                        box-shadow: 0 0 30px 5px rgba(59, 130, 246, 0.3);
                    }
                }
                

                .animate-gradient-rotate { 
                    background-size: 200% 200%;
                    animation: gradient-rotate 4s ease infinite;
                }
                .animate-particle-orbit { animation: particle-orbit 4s linear infinite; }
                .animate-stat-count { animation: stat-count 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
                .animate-border-dance { animation: border-dance 3s linear infinite; }
                .animate-float-subtle { animation: float-subtle 3s ease-in-out infinite; }
                .animate-glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }
                
                .particle-1 { animation-delay: 0s; }
                .particle-2 { animation-delay: 1s; }
                .particle-3 { animation-delay: 2s; }
            `}</style>

            <section
                className="relative transition-colors duration-300 py-20 md:py-28 overflow-hidden"
                style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
            >
                {/* Animated background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-pink-500/30 to-orange-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
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
                                NEXT-GEN AI TECHNOLOGY
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            What Are <span style={{ color: "var(--brand-chatbot)" }}>AI-Powered Chatbots</span>?
                        </h2>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            AI-powered chatbots are intelligent conversational agents that use natural language processing and machine learning to understand customer intent, provide accurate responses, and handle complex interactions seamlessly.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={index}
                                    className="group relative rounded-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                    }}
                                >
                                    {/* Card container */}
                                    <div
                                        className="relative p-7 h-full border backdrop-blur-sm"
                                        style={{
                                            backgroundColor: "color-mix(in srgb, var(--card-bg) 60%, transparent)",
                                            borderColor: "var(--border-color)",
                                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                        }}
                                    >
                                        {/* Animated gradient overlay */}
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 animate-gradient-rotate`}
                                        />

                                        {/* Dancing border */}
                                        <div
                                            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                        >
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient}`}
                                                style={{
                                                    padding: "2px",
                                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                    WebkitMaskComposite: "xor",
                                                    maskComposite: "exclude",
                                                }}
                                            />
                                        </div>

                                        {/* Icon container */}
                                        <div className="relative mb-5 z-10">
                                            <div className="relative inline-block">
                                                {/* Glow effect */}
                                                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500`} />

                                                {/* Icon box */}
                                                <div
                                                    className={`relative w-16 h-16 rounded-xl ${feature.iconBg} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl`}
                                                >
                                                    <Icon className={`w-8 h-8 ${feature.iconColor}`} strokeWidth={2.5} />
                                                </div>

                                                {/* Stat badge */}
                                                <div
                                                    className={`absolute -top-2 -right-2 px-2.5 py-1 rounded-full text-xs font-bold text-white shadow-lg opacity-0 group-hover:opacity-100 animate-stat-count bg-gradient-to-r ${feature.gradient}`}
                                                    style={{
                                                        animationDelay: "0.2s",
                                                        animationFillMode: "both",
                                                    }}
                                                >
                                                    {feature.stat}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10">
                                            <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[var(--brand-chatbot)]">
                                                {feature.title}
                                            </h3>
                                            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--secondary-text)" }}>
                                                {feature.description}
                                            </p>

                                            {/* Stat label */}
                                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient}`} />
                                                <span className="text-xs font-semibold" style={{ color: "var(--brand-chatbot)" }}>
                                                    {feature.statLabel}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Bottom gradient bar */}
                                        <div
                                            className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${feature.gradient} group-hover:w-full transition-all duration-700 ease-out`}
                                        />

                                        {/* Large background icon watermark */}
                                        <div className="absolute -bottom-4 -right-4 opacity-0 group-hover:opacity-5 transition-all duration-500 transform group-hover:scale-110">
                                            <Icon className={`w-28 h-28 ${feature.iconColor}`} strokeWidth={0.5} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom Info Card */}
                    <div className="mt-16 relative">
                        <div
                            className="relative p-8 rounded-3xl border backdrop-blur-sm overflow-hidden group hover:shadow-xl transition-all duration-500"
                            style={{
                                backgroundColor: "color-mix(in srgb, var(--card-bg) 60%, transparent)",
                                borderColor: "var(--border-color)",
                            }}
                        >
                            {/* Animated background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-rotate" />

                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <div className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-lg opacity-50 animate-pulse`} />
                                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                                            <Zap className="w-8 h-8 text-white animate-float-subtle" strokeWidth={2.5} />
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xl font-bold mb-1" style={{ color: "var(--foreground)" }}>
                                            Powered by Advanced NLP & Machine Learning
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Continuously learning and improving from every interaction
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 group/button">
                                    <span>Learn More</span>
                                    <ArrowRight className="w-5 h-5 group-hover/button:translate-x-1 transition-transform duration-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}