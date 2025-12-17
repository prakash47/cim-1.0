"use client";

import { Stethoscope, DollarSign, ShoppingCart, BookOpen, Factory, Zap } from "lucide-react";

export default function IndustriesAndUseCases() {
    const industries = [
        {
            icon: Stethoscope,
            name: "Healthcare",
            useCases: [
                "Patient data processing and appointment scheduling",
                "Medical record automation and compliance",
                "Insurance claim processing",
                "Diagnostic support and triage automation",
            ],
        },
        {
            icon: DollarSign,
            name: "Finance",
            useCases: [
                "Invoice and payment processing",
                "Fraud detection and risk assessment",
                "Loan application automation",
                "Regulatory compliance and reporting",
            ],
        },
        {
            icon: ShoppingCart,
            name: "E-commerce",
            useCases: [
                "Order processing and fulfillment",
                "Customer service chatbots",
                "Inventory management automation",
                "Personalized recommendation engines",
            ],
        },
        {
            icon: BookOpen,
            name: "Education",
            useCases: [
                "Student enrollment and onboarding",
                "Grading and assessment automation",
                "Personalized learning paths",
                "Administrative task automation",
            ],
        },
        {
            icon: Factory,
            name: "Manufacturing",
            useCases: [
                "Supply chain optimization",
                "Quality control and inspection",
                "Predictive maintenance",
                "Production scheduling automation",
            ],
        },
        {
            icon: Zap,
            name: "SaaS & Enterprises",
            useCases: [
                "Customer onboarding workflows",
                "Billing and subscription management",
                "Support ticket automation",
                "Data pipeline and analytics automation",
            ],
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
                        Industries & <span style={{ color: "var(--brand-orange)" }}>Use Cases</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        AI automation transforms operations across industries. See how we're helping organizations like yours achieve operational excellence.
                    </p>
                </div>

                {/* Industries Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => {
                        const Icon = industry.icon;
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
                                <h3 className="text-xl font-bold mb-4">{industry.name}</h3>
                                <ul className="space-y-3">
                                    {industry.useCases.map((useCase, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "var(--brand-orange)" }}></span>
                                            <span className="text-sm" style={{ color: "var(--secondary-text)" }}>{useCase}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                {/* Impact Section */}
                <div className="mt-16 grid lg:grid-cols-3 gap-8">
                    {[
                        {
                            metric: "50+",
                            label: "Industries Served",
                        },
                        {
                            metric: "1000+",
                            label: "Workflows Deployed",
                        },
                        {
                            metric: "$100M+",
                            label: "Client Savings Generated",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="p-8 rounded-2xl text-center border animate-fadeIn"
                            style={{
                                backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                                borderColor: "var(--border-color)",
                                animationDelay: `${1.2 + i * 0.1}s`,
                                animationFillMode: "both",
                            }}
                        >
                            <div
                                className="text-4xl md:text-5xl font-extrabold mb-2"
                                style={{
                                    background: "linear-gradient(90deg, var(--brand-orange), var(--brand-orange))",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                {item.metric}
                            </div>
                            <p className="text-lg font-semibold" style={{ color: "var(--secondary-text)" }}>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
