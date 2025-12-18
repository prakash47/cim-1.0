"use client";

import { MessageSquare, BarChart3, Headphones, TrendingUp, FileText, Lightbulb, Workflow, Bot, Database, Mail, GitBranch, Sparkles, CheckCircle2 } from "lucide-react";

export default function TypesOfAutomations() {
    const automationTypes = [
        {
            icon: Workflow,
            title: "Business Process Automation (BPA)",
            description: "Automate end-to-end business processes including order processing, invoice handling, HR workflows, and approval chains. Reduce manual touchpoints and accelerate cycle times.",
            features: ["Workflow orchestration", "Multi-step automation", "Conditional logic", "Error handling"],
            gradient: "from-blue-600 to-cyan-500",
            iconBg: "bg-blue-500/10",
            iconColor: "text-blue-500",
            logos: ["zapier", "nodedotjs", "ifttt"],
        },
        {
            icon: Bot,
            title: "AI-Powered Chatbots & Assistants",
            description: "Deploy intelligent conversational agents that handle customer inquiries, provide support, and qualify leads 24/7. Powered by advanced NLP and machine learning.",
            features: ["Natural language processing", "Multi-language support", "Context awareness", "Escalation handling"],
            gradient: "from-purple-600 to-pink-500",
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-500",
            logos: ["openai", "dialogflow", "microsoftazure"],
        },
        {
            icon: BarChart3,
            title: "Data & Reporting Automation",
            description: "Automatically collect, process, and visualize data from multiple sources. Generate real-time reports and dashboards for informed decision-making.",
            features: ["Data extraction", "Real-time dashboards", "Scheduled reports", "Data validation"],
            gradient: "from-emerald-600 to-teal-500",
            iconBg: "bg-emerald-500/10",
            iconColor: "text-emerald-500",
            logos: ["tableau", "powerbi", "looker"],
        },
        {
            icon: Headphones,
            title: "Customer Support Automation",
            description: "Streamline support operations with intelligent ticket routing, automated responses, and AI-powered knowledge base systems. Improve response times and customer satisfaction.",
            features: ["Ticket automation", "Knowledge base AI", "Sentiment analysis", "Response suggestions"],
            gradient: "from-orange-600 to-amber-500",
            iconBg: "bg-orange-500/10",
            iconColor: "text-orange-500",
            logos: ["zendesk", "intercom", "livechat"],
        },
        {
            icon: TrendingUp,
            title: "Marketing & Sales Automation",
            description: "Automate lead scoring, email campaigns, social media posting, and sales pipeline management. Nurture leads and close deals faster with AI-driven insights.",
            features: ["Lead scoring", "Campaign automation", "Email sequences", "Sales pipeline management"],
            gradient: "from-rose-600 to-pink-500",
            iconBg: "bg-rose-500/10",
            iconColor: "text-rose-500",
            logos: ["hubspot", "salesforce", "mailchimp"],
        },
        {
            icon: FileText,
            title: "Document Processing & OCR Automation",
            description: "Automatically extract, classify, and process documents using advanced OCR and AI. Handle invoices, contracts, forms, and more with high accuracy.",
            features: ["OCR technology", "Document classification", "Data extraction", "Compliance validation"],
            gradient: "from-indigo-600 to-blue-500",
            iconBg: "bg-indigo-500/10",
            iconColor: "text-indigo-500",
            logos: ["adobe", "docusign", "googlecloud"],
        },
        {
            icon: Sparkles,
            title: "Custom AI Workflow Solutions",
            description: "Tailored automation solutions designed specifically for your unique business challenges. From predictive analytics to custom integrations, we build what you need.",
            features: ["Custom development", "API integrations", "Predictive models", "Scalable architecture"],
            gradient: "from-violet-600 to-purple-500",
            iconBg: "bg-violet-500/10",
            iconColor: "text-violet-500",
            logos: ["tensorflow", "pytorch", "openai"],
        },
    ];

    // Mapping of logo names to their local image paths
    const logoUrls: Record<string, string> = {
        // Business Process Automation
        zapier: "/images/ai_automation_logos/zapier-logo.svg",
        nodedotjs: "/images/techstack_logos/nodejs-logo.svg",
        ifttt: "/images/ai_automation_logos/IFTTT_Logo.svg.png",
        // AI Chatbots
        openai: "/images/ai_automation_logos/openai-logo.svg",
        dialogflow: "/images/ai_automation_logos/dialogflow-logo.webp",
        microsoftazure: "/images/techstack_logos/azure-logo.svg",
        // Data & Reporting
        tableau: "/images/ai_automation_logos/tableau-logo.svg",
        powerbi: "/images/ai_automation_logos/powerBI-logo.png",
        looker: "/images/ai_automation_logos/looker-logo.svg",
        // Customer Support
        zendesk: "/images/ai_automation_logos/zendesk-logo.svg",
        intercom: "/images/ai_automation_logos/intercom-logo.svg",
        livechat: "/images/ai_automation_logos/Livechat-logo.png",
        // Marketing & Sales
        hubspot: "/images/ai_automation_logos/hubspot-logo.png",
        salesforce: "/images/ai_automation_logos/salesforce-logo.png",
        mailchimp: "/images/ai_automation_logos/mailchimp-logo.svg",
        // Document Processing
        adobe: "/images/ai_automation_logos/adobe-logo.png",
        docusign: "/images/ai_automation_logos/docusign-logo.png",
        googlecloud: "/images/techstack_logos/googlecloud-logo.svg",
        // Custom AI
        tensorflow: "/images/ai_automation_logos/tensorflow-logo.png",
        pytorch: "/images/ai_automation_logos/pytorch-logo.png",
    };

    return (
        <>
            <style jsx>{`
                @keyframes morph {
                    0%, 100% { 
                        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
                        transform: rotate(0deg) scale(1);
                    }
                    25% { 
                        border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
                    }
                    50% { 
                        border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
                        transform: rotate(5deg) scale(1.05);
                    }
                    75% { 
                        border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
                    }
                }
                @keyframes swing {
                    0%, 100% { 
                        transform: rotate(0deg);
                        transform-origin: top center;
                    }
                    25% { transform: rotate(8deg); }
                    75% { transform: rotate(-8deg); }
                }
                @keyframes spiral {
                    0% { 
                        transform: rotate(0deg) scale(1) translateY(0);
                    }
                    50% { 
                        transform: rotate(180deg) scale(1.1) translateY(-5px);
                    }
                    100% { 
                        transform: rotate(360deg) scale(1) translateY(0);
                    }
                }
                @keyframes bounce-3d {
                    0%, 100% { 
                        transform: translateY(0) translateZ(0) rotateX(0deg);
                    }
                    25% { 
                        transform: translateY(-10px) translateZ(20px) rotateX(-5deg);
                    }
                    50% { 
                        transform: translateY(0) translateZ(0) rotateX(0deg);
                    }
                    75% { 
                        transform: translateY(-5px) translateZ(10px) rotateX(-2deg);
                    }
                }
                @keyframes wave {
                    0%, 100% { 
                        transform: skewY(0deg) translateX(0);
                    }
                    25% { 
                        transform: skewY(2deg) translateX(3px);
                    }
                    75% { 
                        transform: skewY(-2deg) translateX(-3px);
                    }
                }
                @keyframes breathe {
                    0%, 100% { 
                        transform: scale(1);
                        box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4);
                    }
                    50% { 
                        transform: scale(1.03);
                        box-shadow: 0 0 20px 5px rgba(99, 102, 241, 0.2);
                    }
                }
                @keyframes shimmer-rotate {
                    0% { 
                        transform: rotate(0deg);
                        filter: brightness(1) contrast(1);
                    }
                    50% { 
                        transform: rotate(180deg);
                        filter: brightness(1.2) contrast(1.1);
                    }
                    100% { 
                        transform: rotate(360deg);
                        filter: brightness(1) contrast(1);
                    }
                }
                @keyframes gradient-shift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                @keyframes float-up {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }
                
                .animate-morph { animation: morph 6s ease-in-out infinite; }
                .animate-swing { animation: swing 3s ease-in-out infinite; }
                .animate-spiral { animation: spiral 4s ease-in-out infinite; }
                .animate-bounce-3d { 
                    animation: bounce-3d 2.5s ease-in-out infinite;
                    transform-style: preserve-3d;
                }
                .animate-wave { animation: wave 3s ease-in-out infinite; }
                .animate-breathe { animation: breathe 3s ease-in-out infinite; }
                .animate-shimmer-rotate { animation: shimmer-rotate 5s linear infinite; }
                .animate-gradient { 
                    background-size: 200% 200%;
                    animation: gradient-shift 3s ease infinite;
                }
                .float-up-delay-1 { animation: float-up 2s ease-in-out infinite 0.2s; }
                .float-up-delay-2 { animation: float-up 2s ease-in-out infinite 0.4s; }
                .float-up-delay-3 { animation: float-up 2s ease-in-out infinite 0.6s; }
            `}</style>

            <section
                className="py-20 transition-colors duration-300"
                style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
            >
                <div className="mx-auto px-6 md:px-12 xl:px-20">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-fadeIn" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                            Types of <span style={{ color: "var(--brand-orange)" }}>AI Workflows & Automations</span>
                        </h2>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                            We specialize in a comprehensive range of AI-powered automation solutions. Whether you need process automation, intelligent chatbots, or custom workflows, we have the expertise to deliver.
                        </p>
                    </div>

                    {/* Automation Types Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {automationTypes.map((type, index) => {
                            const Icon = type.icon;

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
                                        className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 animate-gradient`}
                                    />

                                    {/* Animated particles */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className={`absolute top-10 left-10 w-1 h-1 rounded-full ${type.iconBg} float-up-delay-1`} />
                                        <div className={`absolute top-20 right-10 w-1.5 h-1.5 rounded-full ${type.iconBg} float-up-delay-2`} />
                                        <div className={`absolute bottom-20 left-20 w-1 h-1 rounded-full ${type.iconBg} float-up-delay-3`} />
                                    </div>

                                    {/* Corner decoration */}
                                    <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className={`absolute top-0 right-0 w-1 h-full bg-gradient-to-b ${type.gradient} opacity-30`} />
                                        <div className={`absolute top-0 right-0 w-full h-1 bg-gradient-to-l ${type.gradient} opacity-30`} />
                                    </div>

                                    {/* Icon container with unique animation */}
                                    <div className="relative mb-5 z-10">
                                        <div
                                            className={`w-16 h-16 rounded-xl ${type.iconBg} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl`}
                                        >
                                            <Icon className={`w-8 h-8 ${type.iconColor}`} strokeWidth={2.5} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 mb-4">
                                        <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
                                            {type.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--secondary-text)" }}>
                                            {type.description}
                                        </p>
                                    </div>

                                    {/* Features with enhanced styling */}
                                    <div className="relative z-10 mb-4">
                                        <p className="text-xs font-bold mb-3 uppercase tracking-wider" style={{ color: "var(--brand-orange)" }}>
                                            Key Features
                                        </p>
                                        <ul className="space-y-2">
                                            {type.features.map((feature, i) => (
                                                <li
                                                    key={i}
                                                    className="text-sm flex items-start gap-2 group/item hover:translate-x-1 transition-transform duration-200"
                                                >
                                                    <CheckCircle2
                                                        className="w-4 h-4 flex-shrink-0 mt-0.5 transition-colors duration-200 group-hover/item:scale-110"
                                                        style={{ color: "var(--brand-orange)" }}
                                                    />
                                                    <span style={{ color: "var(--secondary-text)" }}>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Technology logos */}
                                    <div className="relative z-10 pt-4 border-t" style={{ borderColor: "var(--border-color)" }}>
                                        <p className="text-xs font-semibold mb-2 opacity-60">Powered by:</p>
                                        <div className="flex items-center gap-3">
                                            {type.logos.map((logo, i) => (
                                                <div
                                                    key={i}
                                                    className="group/logo relative"
                                                    title={logo.charAt(0).toUpperCase() + logo.slice(1)}
                                                >
                                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover/logo:scale-110 border border-gray-200" style={{ backgroundColor: "#ffffff" }}>
                                                        <img
                                                            src={logoUrls[logo] || `/images/ai_automation_logos/${logo}-logo.svg`}
                                                            alt={logo}
                                                            width={28}
                                                            height={28}
                                                            className="opacity-90 group-hover/logo:opacity-100 transition-opacity duration-300"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Animated bottom border */}
                                    <div
                                        className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${type.gradient} group-hover:w-full transition-all duration-700 ease-out`}
                                    />

                                    {/* Large background icon */}
                                    <div className="absolute -bottom-0 -right-0 opacity-0 group-hover:opacity-5 transition-all duration-500 transform group-hover:scale-110">
                                        <Icon className={`w-32 h-32 ${type.iconColor}`} strokeWidth={1} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Custom Solutions CTA */}
                    <div
                        className="mt-16 p-10 rounded-2xl border text-center animate-fadeIn relative overflow-hidden group"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                            borderColor: "var(--border-color)",
                            animationDelay: "1.2s",
                            animationFillMode: "both",
                        }}
                    >
                        {/* Animated gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" />

                        {/* Decorative elements */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-orange-500/30 animate-ping" />
                            <div className="absolute top-20 right-20 w-2 h-2 rounded-full bg-amber-500/30 animate-ping" style={{ animationDelay: "0.5s" }} />
                            <div className="absolute bottom-10 left-1/4 w-2 h-2 rounded-full bg-orange-500/30 animate-ping" style={{ animationDelay: "1s" }} />
                        </div>

                        <div className="relative z-10">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center animate-pulse">
                                    <Lightbulb className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Don't See Your Use Case?</h3>
                            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                                We specialize in custom AI workflow solutions tailored to your unique business requirements. Whether it's a complex integration, predictive analytics, or a completely novel automation, our team can build it.
                            </p>
                            <button
                                className="px-6 py-3 md:px-10 md:py-4 bg-gradient-to-r from-[#fab900] to-[#ee6500] hover:from-[#ee6500] hover:to-[#fab900] text-white text-sm md:text-base font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2 md:gap-3 mx-auto group/button"
                            >
                                <span>Discuss Your Custom Solution</span>
                                <GitBranch className="w-5 h-5 group-hover/button:rotate-12 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}