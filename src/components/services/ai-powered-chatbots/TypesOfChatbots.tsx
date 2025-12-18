"use client";

import { Headphones, TrendingUp, FileText, Smartphone, MessageSquare, Building2, Sparkles, CheckCircle2, ArrowRight, Zap, Users, Search, Target } from "lucide-react";

export default function TypesOfChatbots() {
    const chatbotTypes = [
        {
            icon: Headphones,
            title: "Customer Support Chatbots",
            description: "Handle customer inquiries, resolve issues, and provide instant support 24/7. Reduce support ticket volume and improve response times.",
            features: ["Ticket automation", "Knowledge base integration", "Issue resolution", "Escalation handling"],
            gradient: "from-blue-600 to-cyan-500",
            iconBg: "bg-blue-500/10",
            iconColor: "text-blue-500",
            animation: "headphone-wave",
            badge: "Support",
        },
        {
            icon: Target,
            title: "Sales & Lead Generation Chatbots",
            description: "Qualify leads, nurture prospects, and guide them through the sales funnel. Increase conversion rates and reduce sales cycle time.",
            features: ["Lead scoring", "Qualification flows", "Product recommendations", "Appointment scheduling"],
            gradient: "from-purple-600 to-pink-500",
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-500",
            animation: "target-focus",
            badge: "Sales",
        },
        {
            icon: Search,
            title: "FAQ & Knowledge Base Bots",
            description: "Automatically answer frequently asked questions and provide instant access to knowledge base content. Reduce repetitive inquiries.",
            features: ["FAQ automation", "Document search", "Content recommendations", "Self-service support"],
            gradient: "from-emerald-600 to-teal-500",
            iconBg: "bg-emerald-500/10",
            iconColor: "text-emerald-500",
            animation: "search-scan",
            badge: "Knowledge",
        },
        {
            icon: Smartphone,
            title: "AI Assistants for Websites & Apps",
            description: "Embed intelligent assistants directly into your website or mobile app. Provide contextual help and improve user experience.",
            features: ["In-app guidance", "Contextual assistance", "User onboarding", "Feature discovery"],
            gradient: "from-orange-600 to-amber-500",
            iconBg: "bg-orange-500/10",
            iconColor: "text-orange-500",
            animation: "phone-vibrate",
            badge: "Web & App",
        },
        {
            icon: MessageSquare,
            title: "WhatsApp / Messenger / Telegram Bots",
            description: "Reach customers where they are. Deploy chatbots on WhatsApp, Facebook Messenger, Telegram, and other messaging platforms.",
            features: ["Multi-platform support", "Rich media messaging", "Broadcast campaigns", "Conversation management"],
            gradient: "from-rose-600 to-pink-500",
            iconBg: "bg-rose-500/10",
            iconColor: "text-rose-500",
            animation: "message-bounce",
            badge: "Messaging",
        },
        {
            icon: Building2,
            title: "Enterprise Internal Chatbots",
            description: "Streamline internal operations with HR chatbots, IT support bots, and employee assistance systems. Improve productivity and reduce overhead.",
            features: ["HR automation", "IT ticketing", "Policy guidance", "Employee self-service"],
            gradient: "from-indigo-600 to-blue-500",
            iconBg: "bg-indigo-500/10",
            iconColor: "text-indigo-500",
            animation: "building-grow",
            badge: "Enterprise",
        },
        {
            icon: Sparkles,
            title: "Custom AI Chatbot Solutions",
            description: "Tailored chatbot solutions designed specifically for your unique business requirements. From industry-specific workflows to custom integrations.",
            features: ["Custom workflows", "API integrations", "Business logic", "Advanced analytics"],
            gradient: "from-violet-600 to-purple-500",
            iconBg: "bg-violet-500/10",
            iconColor: "text-violet-500",
            animation: "sparkle-shine",
            badge: "Custom",
        },
    ];

    return (
        <>
            <style jsx>{`
                @keyframes headphone-wave {
                    0%, 100% { transform: rotate(0deg) translateY(0); }
                    25% { transform: rotate(-15deg) translateY(-3px); }
                    75% { transform: rotate(15deg) translateY(-3px); }
                }
                @keyframes target-focus {
                    0%, 100% { transform: scale(1) rotate(0deg); }
                    50% { transform: scale(1.15) rotate(180deg); }
                }
                @keyframes search-scan {
                    0%, 100% { transform: translate(0, 0); }
                    25% { transform: translate(5px, -5px); }
                    50% { transform: translate(-5px, 5px); }
                    75% { transform: translate(5px, 5px); }
                }
                @keyframes phone-vibrate {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
                    20%, 40%, 60%, 80% { transform: translateX(2px); }
                }
                @keyframes message-bounce {
                    0%, 100% { transform: translateY(0) scale(1); }
                    50% { transform: translateY(-8px) scale(1.1); }
                }
                @keyframes building-grow {
                    0%, 100% { transform: scaleY(1); transform-origin: bottom; }
                    50% { transform: scaleY(1.1); transform-origin: bottom; }
                }
                @keyframes sparkle-shine {
                    0%, 100% { 
                        transform: rotate(0deg) scale(1);
                        filter: brightness(1);
                    }
                    25% { 
                        transform: rotate(90deg) scale(1.2);
                        filter: brightness(1.5);
                    }
                    50% { 
                        transform: rotate(180deg) scale(1);
                        filter: brightness(1);
                    }
                    75% { 
                        transform: rotate(270deg) scale(1.2);
                        filter: brightness(1.5);
                    }
                }
                @keyframes gradient-shift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                @keyframes float-up-down {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes badge-pulse {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.05); opacity: 0.8; }
                }
                @keyframes feature-appear {
                    0% { 
                        transform: translateX(-10px);
                        opacity: 0;
                    }
                    100% { 
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                @keyframes border-rotate {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes glow-pulse {
                    0%, 100% { 
                        box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
                    }
                    50% { 
                        box-shadow: 0 0 30px 10px rgba(59, 130, 246, 0.2);
                    }
                }
                
                .animate-headphone-wave { animation: headphone-wave 3s ease-in-out infinite; }
                .animate-target-focus { animation: target-focus 3s ease-in-out infinite; }
                .animate-search-scan { animation: search-scan 2s ease-in-out infinite; }
                .animate-phone-vibrate { animation: phone-vibrate 2s ease-in-out infinite; }
                .animate-message-bounce { animation: message-bounce 2s ease-in-out infinite; }
                .animate-building-grow { animation: building-grow 3s ease-in-out infinite; }
                .animate-sparkle-shine { animation: sparkle-shine 4s ease-in-out infinite; }
                .animate-gradient-shift {
                    background-size: 200% 200%;
                    animation: gradient-shift 4s ease infinite;
                }
                .animate-float-up-down { animation: float-up-down 3s ease-in-out infinite; }
                .animate-badge-pulse { animation: badge-pulse 2s ease-in-out infinite; }
                .animate-glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }
                
                .feature-item {
                    animation: feature-appear 0.4s ease-out forwards;
                }
                .feature-item:nth-child(1) { animation-delay: 0.1s; opacity: 0; }
                .feature-item:nth-child(2) { animation-delay: 0.2s; opacity: 0; }
                .feature-item:nth-child(3) { animation-delay: 0.3s; opacity: 0; }
                .feature-item:nth-child(4) { animation-delay: 0.4s; opacity: 0; }
            `}</style>

            <section
                className="relative transition-colors duration-300 py-20 md:py-28 overflow-hidden"
                style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
            >
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-pink-500/30 to-orange-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
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
                            <Zap className="w-4 h-4" style={{ color: "var(--brand-chatbot)" }} />
                            <span className="text-sm font-bold tracking-wide" style={{ color: "var(--brand-chatbot)" }}>
                                COMPREHENSIVE SOLUTIONS
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Types of <span style={{ color: "var(--brand-chatbot)" }}>AI-Powered Chatbots</span>
                        </h2>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            We develop diverse chatbot solutions tailored to your industry and business objectives.
                        </p>
                    </div>

                    {/* Chatbot Types Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {chatbotTypes.map((type, index) => {
                            const Icon = type.icon;
                            const animationClass = `animate-${type.animation}`;

                            return (
                                <div
                                    key={index}
                                    className="group relative rounded-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                    }}
                                >
                                    {/* Card container */}
                                    <div
                                        className="relative p-6 h-full border backdrop-blur-sm"
                                        style={{
                                            backgroundColor: "color-mix(in srgb, var(--card-bg) 60%, transparent)",
                                            borderColor: "var(--border-color)",
                                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                        }}
                                    >
                                        {/* Animated gradient overlay */}
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 animate-gradient-shift`}
                                        />

                                        {/* Badge */}
                                        <div className="absolute top-4 right-4 z-20">
                                            <div
                                                className={`px-3 py-1 rounded-full text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-badge-pulse bg-gradient-to-r ${type.gradient}`}
                                            >
                                                {type.badge}
                                            </div>
                                        </div>

                                        {/* Corner decoration */}
                                        <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className={`absolute top-0 right-0 w-full h-1 bg-gradient-to-l ${type.gradient}`} />
                                            <div className={`absolute top-0 right-0 w-1 h-full bg-gradient-to-b ${type.gradient}`} />
                                        </div>

                                        {/* Icon container */}
                                        <div className="relative mb-5 z-10">
                                            <div className="relative inline-block">
                                                {/* Rotating border */}
                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                    <div
                                                        className={`absolute -inset-1 rounded-xl bg-gradient-to-r ${type.gradient} opacity-30 blur-md`}
                                                    />
                                                </div>

                                                {/* Icon box */}
                                                <div
                                                    className={`relative w-16 h-16 rounded-xl ${type.iconBg} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl`}
                                                >
                                                    <Icon className={`w-8 h-8 ${type.iconColor} ${animationClass}`} strokeWidth={2.5} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10">
                                            <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[var(--brand-chatbot)]">
                                                {type.title}
                                            </h3>
                                            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--secondary-text)" }}>
                                                {type.description}
                                            </p>

                                            {/* Features */}
                                            <div className="space-y-2">
                                                {type.features.map((feature, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="feature-item flex items-center gap-2 group/item"
                                                    >
                                                        <div className={`w-5 h-5 rounded-full ${type.iconBg} flex items-center justify-center transition-all duration-300 group-hover/item:scale-110`}>
                                                            <CheckCircle2 className={`w-3 h-3 ${type.iconColor}`} strokeWidth={3} />
                                                        </div>
                                                        <span className="text-xs font-medium" style={{ color: "var(--foreground)" }}>
                                                            {feature}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Explore button */}
                                            <div className="mt-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                                                <span className="text-sm font-semibold" style={{ color: "var(--brand-chatbot)" }}>
                                                    Explore
                                                </span>
                                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" style={{ color: "var(--brand-chatbot)" }} />
                                            </div>
                                        </div>

                                        {/* Bottom gradient line */}
                                        <div
                                            className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${type.gradient} group-hover:w-full transition-all duration-700 ease-out`}
                                        />

                                        {/* Large background icon watermark */}
                                        <div className="absolute -bottom-6 -right-6 opacity-0 group-hover:opacity-5 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                                            <Icon className={`w-32 h-32 ${type.iconColor}`} strokeWidth={0.5} />
                                        </div>

                                        {/* Floating particles */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className={`absolute top-8 right-8 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${type.gradient} animate-ping`} />
                                            <div className={`absolute bottom-12 left-8 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${type.gradient} animate-ping`} style={{ animationDelay: "0.5s" }} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom CTA Section */}
                    <div className="mt-16">
                        <div
                            className="relative p-8 rounded-3xl border backdrop-blur-sm overflow-hidden group hover:shadow-xl transition-all duration-500"
                            style={{
                                backgroundColor: "color-mix(in srgb, var(--card-bg) 60%, transparent)",
                                borderColor: "var(--border-color)",
                            }}
                        >
                            {/* Animated background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift" />

                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-lg opacity-50 animate-pulse" />
                                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                                            <Users className="w-8 h-8 text-white animate-float-up-down" strokeWidth={2.5} />
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xl font-bold mb-1" style={{ color: "var(--foreground)" }}>
                                            Need a Custom Chatbot Solution?
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Let's discuss your specific requirements and build the perfect solution
                                        </p>
                                    </div>
                                </div>

                                <button className="group/button px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                                    <span>Get Started</span>
                                    <ArrowRight className="w-5 h-5 group-hover/button:translate-x-1 transition-transform duration-300" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}