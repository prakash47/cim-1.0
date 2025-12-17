"use client";

import { Cloud, Zap, Database, Shield } from "lucide-react";

export default function Technologies() {
    const techCategories = [
        {
            icon: Zap,
            title: "AI Models & APIs",
            description: "Cutting-edge AI technology powering intelligent workflows",
            items: [
                "Large Language Models (LLMs)",
                "Computer Vision & OCR",
                "Natural Language Processing",
                "Predictive Analytics",
                "Machine Learning Models",
                "Custom AI Models",
            ],
        },
        {
            icon: Cloud,
            title: "Cloud Services",
            description: "Scalable, reliable infrastructure for production workflows",
            items: [
                "AWS Lambda & EC2",
                "Google Cloud Platform",
                "Microsoft Azure",
                "Serverless Architecture",
                "Auto-scaling Solutions",
                "Multi-region Deployment",
            ],
        },
        {
            icon: Database,
            title: "CRM / ERP Integrations",
            description: "Seamless connectivity with your existing business systems",
            items: [
                "Salesforce Integration",
                "SAP & Oracle ERP",
                "HubSpot CRM",
                "NetSuite",
                "Microsoft Dynamics",
                "Custom API Integrations",
            ],
        },
        {
            icon: Shield,
            title: "No-Code / Low-Code Tools",
            description: "Rapid development and deployment platforms",
            items: [
                "Zapier & Make",
                "Automation.io",
                "n8n Workflows",
                "Custom Workflow Engines",
                "Visual Automation Builders",
                "Integration Platforms",
            ],
        },
    ];

    const securityFeatures = [
        "End-to-end encryption for data in transit",
        "Data encryption at rest with industry standards",
        "Role-based access control (RBAC)",
        "Audit logging and compliance tracking",
        "GDPR, HIPAA, SOC 2 compliance",
        "Regular security audits and penetration testing",
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
                        Technology Stack & <span style={{ color: "var(--brand-orange)" }}>Integrations</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We leverage the latest AI technologies and enterprise integrations to build robust, scalable automation solutions.
                    </p>
                </div>

                {/* Technology Categories */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {techCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <div
                                key={index}
                                className="p-8 rounded-2xl border animate-fadeIn"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                    animationDelay: `${0.2 + index * 0.1}s`,
                                    animationFillMode: "both",
                                }}
                            >
                                <div
                                    className="w-14 h-14 rounded-lg p-3 mb-4 flex items-center justify-center shadow-lg"
                                    style={{
                                        background: "linear-gradient(135deg, var(--brand-orange), var(--brand-orange))",
                                    }}
                                >
                                    <Icon className="w-full h-full text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                                <p className="mb-6" style={{ color: "var(--secondary-text)" }}>{category.description}</p>
                                <ul className="space-y-3">
                                    {category.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--brand-orange)" }}></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                {/* Security & Data Pipelines */}
                <div className="grid lg:grid-cols-2 gap-8">
                    <div
                        className="p-8 rounded-2xl border animate-fadeIn"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                            animationDelay: "0.8s",
                            animationFillMode: "both",
                        }}
                    >
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Shield className="w-6 h-6" style={{ color: "var(--brand-orange)" }} />
                            Security & Compliance
                        </h3>
                        <ul className="space-y-4">
                            {securityFeatures.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "var(--brand-orange)" }}></span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div
                        className="p-8 rounded-2xl border animate-fadeIn"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                            borderColor: "var(--border-color)",
                            animationDelay: "1s",
                            animationFillMode: "both",
                        }}
                    >
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Database className="w-6 h-6" style={{ color: "var(--brand-orange)" }} />
                            Secure Data Pipelines
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2" style={{ color: "var(--brand-orange)" }}>Data Flow Architecture</h4>
                                <p style={{ color: "var(--secondary-text)" }}>
                                    Our data pipelines are designed with security-first principles, ensuring data integrity and compliance at every step.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2" style={{ color: "var(--brand-orange)" }}>Real-time Monitoring</h4>
                                <p style={{ color: "var(--secondary-text)" }}>
                                    Continuous monitoring and alerting systems detect anomalies and ensure optimal pipeline performance.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2" style={{ color: "var(--brand-orange)" }}>Disaster Recovery</h4>
                                <p style={{ color: "var(--secondary-text)" }}>
                                    Automated backup and recovery mechanisms ensure business continuity in any scenario.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
