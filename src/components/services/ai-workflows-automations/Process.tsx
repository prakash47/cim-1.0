"use client";

import { CheckCircle } from "lucide-react";

export default function Process() {
    const steps = [
        {
            number: "01",
            title: "Process Analysis",
            description: "We deeply analyze your current workflows, identify bottlenecks, and understand your business objectives to design optimal automation strategies.",
        },
        {
            number: "02",
            title: "Workflow Design",
            description: "Our experts design intelligent workflows that incorporate AI logic, decision trees, and integration points tailored to your specific needs.",
        },
        {
            number: "03",
            title: "AI Model Integration",
            description: "We integrate advanced AI models and APIs—from NLP to predictive analytics—to power intelligent decision-making within your workflows.",
        },
        {
            number: "04",
            title: "Automation Setup",
            description: "We configure and deploy the automation infrastructure, integrate with your existing systems, and ensure seamless data flow.",
        },
        {
            number: "05",
            title: "Testing & Optimization",
            description: "Rigorous testing ensures reliability and performance. We optimize workflows based on real-world data and feedback.",
        },
        {
            number: "06",
            title: "Deployment & Monitoring",
            description: "We deploy your workflows to production and provide continuous monitoring, maintenance, and optimization for peak performance.",
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
                        Our AI Workflow <span style={{ color: "var(--brand-orange)" }}>Development Process</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A proven, systematic approach to designing and deploying enterprise-grade AI automation solutions.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="space-y-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="grid lg:grid-cols-12 gap-6 items-start animate-fadeIn"
                            style={{
                                animationDelay: `${0.2 + index * 0.1}s`,
                                animationFillMode: "both",
                            }}
                        >
                            {/* Step Number */}
                            <div className="lg:col-span-2">
                                <div
                                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg"
                                    style={{
                                        background: "linear-gradient(135deg, var(--brand-orange), var(--brand-orange))",
                                        color: "white",
                                    }}
                                >
                                    {step.number}
                                </div>
                            </div>

                            {/* Step Content */}
                            <div className="lg:col-span-10 p-6 rounded-2xl border"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                <p style={{ color: "var(--secondary-text)" }}>{step.description}</p>
                            </div>

                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block lg:col-span-2 absolute left-1/2 transform -translate-x-1/2 h-12 border-l-2" style={{ borderColor: "var(--border-color)", marginTop: "80px" }}></div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Process Timeline Alternative View */}
                <div className="mt-16 p-8 rounded-2xl border animate-fadeIn"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                        borderColor: "var(--border-color)",
                        animationDelay: "1.2s",
                        animationFillMode: "both",
                    }}
                >
                    <h3 className="text-2xl font-bold mb-6">Timeline & Deliverables</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { phase: "Discovery", duration: "1-2 weeks", deliverables: "Requirements doc, process maps, recommendations" },
                            { phase: "Design", duration: "2-3 weeks", deliverables: "Workflow diagrams, AI integration plan, architecture" },
                            { phase: "Development", duration: "3-6 weeks", deliverables: "Workflow code, integrations, test cases" },
                            { phase: "Testing", duration: "1-2 weeks", deliverables: "Test reports, performance metrics, optimization" },
                            { phase: "Deployment", duration: "1 week", deliverables: "Production setup, documentation, training" },
                            { phase: "Support", duration: "Ongoing", deliverables: "Monitoring, optimization, enhancements" },
                        ].map((item, i) => (
                            <div key={i} className="p-4 rounded-xl" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                <div className="flex items-start gap-3 mb-3">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "var(--brand-orange)" }} />
                                    <div>
                                        <h4 className="font-bold">{item.phase}</h4>
                                        <p className="text-sm" style={{ color: "var(--brand-orange)" }}>{item.duration}</p>
                                    </div>
                                </div>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>{item.deliverables}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
