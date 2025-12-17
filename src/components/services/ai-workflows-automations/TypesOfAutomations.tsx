"use client";

import { Zap, MessageSquare, BarChart3, Headphones, TrendingUp, FileText, Lightbulb } from "lucide-react";

export default function TypesOfAutomations() {
    const automationTypes = [
        {
            icon: Zap,
            title: "Business Process Automation (BPA)",
            description: "Automate end-to-end business processes including order processing, invoice handling, HR workflows, and approval chains. Reduce manual touchpoints and accelerate cycle times.",
            features: ["Workflow orchestration", "Multi-step automation", "Conditional logic", "Error handling"],
        },
        {
            icon: MessageSquare,
            title: "AI-Powered Chatbots & Assistants",
            description: "Deploy intelligent conversational agents that handle customer inquiries, provide support, and qualify leads 24/7. Powered by advanced NLP and machine learning.",
            features: ["Natural language processing", "Multi-language support", "Context awareness", "Escalation handling"],
        },
        {
            icon: BarChart3,
            title: "Data & Reporting Automation",
            description: "Automatically collect, process, and visualize data from multiple sources. Generate real-time reports and dashboards for informed decision-making.",
            features: ["Data extraction", "Real-time dashboards", "Scheduled reports", "Data validation"],
        },
        {
            icon: Headphones,
            title: "Customer Support Automation",
            description: "Streamline support operations with intelligent ticket routing, automated responses, and AI-powered knowledge base systems. Improve response times and customer satisfaction.",
            features: ["Ticket automation", "Knowledge base AI", "Sentiment analysis", "Response suggestions"],
        },
        {
            icon: TrendingUp,
            title: "Marketing & Sales Automation",
            description: "Automate lead scoring, email campaigns, social media posting, and sales pipeline management. Nurture leads and close deals faster with AI-driven insights.",
            features: ["Lead scoring", "Campaign automation", "Email sequences", "Sales pipeline management"],
        },
        {
            icon: FileText,
            title: "Document Processing & OCR Automation",
            description: "Automatically extract, classify, and process documents using advanced OCR and AI. Handle invoices, contracts, forms, and more with high accuracy.",
            features: ["OCR technology", "Document classification", "Data extraction", "Compliance validation"],
        },
        {
            icon: Lightbulb,
            title: "Custom AI Workflow Solutions",
            description: "Tailored automation solutions designed specifically for your unique business challenges. From predictive analytics to custom integrations, we build what you need.",
            features: ["Custom development", "API integrations", "Predictive models", "Scalable architecture"],
        },
    ];

    return (
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
                                className="p-6 rounded-2xl transition-all duration-300 hover:scale-105 border animate-fadeIn group"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                    animationDelay: `${0.2 + index * 0.1}s`,
                                    animationFillMode: "both",
                                }}
                            >
                                <div
                                    className="w-14 h-14 rounded-lg p-3 mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                                    style={{
                                        background: "linear-gradient(135deg, var(--brand-orange), var(--brand-orange))",
                                    }}
                                >
                                    <Icon className="w-full h-full text-white" />
                                </div>
                                <h3 className="text-lg font-bold mb-3">{type.title}</h3>
                                <p className="mb-4" style={{ color: "var(--secondary-text)" }}>{type.description}</p>
                                <div className="space-y-2">
                                    <p className="text-sm font-semibold" style={{ color: "var(--brand-orange)" }}>Key Features:</p>
                                    <ul className="space-y-1">
                                        {type.features.map((feature, i) => (
                                            <li key={i} className="text-sm flex items-center gap-2" style={{ color: "var(--secondary-text)" }}>
                                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--brand-orange)" }}></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Custom Solutions CTA */}
                <div
                    className="mt-16 p-8 rounded-2xl border text-center animate-fadeIn"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                        borderColor: "var(--border-color)",
                        animationDelay: "1.2s",
                        animationFillMode: "both",
                    }}
                >
                    <h3 className="text-2xl font-bold mb-4">Don't See Your Use Case?</h3>
                    <p className="mb-6 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We specialize in custom AI workflow solutions tailored to your unique business requirements. Whether it's a complex integration, predictive analytics, or a completely novel automation, our team can build it.
                    </p>
                    <button
                        className="px-8 py-3 bg-gradient-to-r from-[#fab900] to-[#ee6500] hover:from-[#fab900] hover:to-[#fab900] text-black rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        Discuss Your Custom Solution
                    </button>
                </div>
            </div>
        </section>
    );
}
