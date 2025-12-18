"use client";

import { Cloud, Zap, Database, Shield, Brain, Sparkles, Lock, Activity, Server, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Technologies() {
    // Technology logos mapping
    const techLogos: Record<string, string> = {
        // AI Models & APIs
        openai: "/images/ai_automation_logos/openai-logo.svg",
        tensorflow: "/images/ai_automation_logos/tensorflow-logo.png",
        pytorch: "/images/ai_automation_logos/pytorch-logo.png",
        dialogflow: "/images/ai_automation_logos/dialogflow-logo.webp",
        // Cloud Services
        aws: "/images/techstack_logos/amazonwebservices-logo.svg",
        gcp: "/images/techstack_logos/googlecloud-logo.svg",
        azure: "/images/techstack_logos/azure-logo.svg",
        kubernetes: "/images/techstack_logos/kubernetes-logo.svg",
        docker: "/images/techstack_logos/docker-logo.svg",
        // CRM/ERP
        salesforce: "/images/ai_automation_logos/salesforce-logo.png",
        hubspot: "/images/ai_automation_logos/hubspot-logo.png",
        // No-Code/Low-Code
        zapier: "/images/ai_automation_logos/zapier-logo.svg",
        // External logos for those not available locally
        sap: "/images/ai_automation_logos/sap-logo.webp",
        oracle: "/images/ai_automation_logos/oracle-logo.png",
        make: "/images/ai_automation_logos/make-logo.png",
        n8n: "/images/ai_automation_logos/n8n-logo.png",

    };

    const techCategories = [
        {
            icon: Brain,
            title: "AI Models & APIs",
            description: "Cutting-edge AI technology powering intelligent workflows",
            gradient: "from-purple-600 to-violet-500",
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-500",
            items: [
                { name: "OpenAI GPT Models", logo: techLogos.openai },
                { name: "TensorFlow", logo: techLogos.tensorflow },
                { name: "PyTorch", logo: techLogos.pytorch },
                { name: "Dialogflow", logo: techLogos.dialogflow },
            ],
            features: ["Natural Language Processing", "Computer Vision & OCR", "Predictive Analytics", "Custom ML Models"],
        },
        {
            icon: Cloud,
            title: "Cloud Services",
            description: "Scalable, reliable infrastructure for production workflows",
            gradient: "from-blue-600 to-cyan-500",
            iconBg: "bg-blue-500/10",
            iconColor: "text-blue-500",
            items: [
                { name: "Amazon Web Services", logo: techLogos.aws },
                { name: "Google Cloud Platform", logo: techLogos.gcp },
                { name: "Microsoft Azure", logo: techLogos.azure },
                { name: "Kubernetes", logo: techLogos.kubernetes },
            ],
            features: ["Serverless Architecture", "Auto-scaling Solutions", "Multi-region Deployment", "High Availability"],
        },
        {
            icon: Database,
            title: "CRM / ERP Integrations",
            description: "Seamless connectivity with your existing business systems",
            gradient: "from-emerald-600 to-teal-500",
            iconBg: "bg-emerald-500/10",
            iconColor: "text-emerald-500",
            items: [
                { name: "Salesforce", logo: techLogos.salesforce },
                { name: "HubSpot CRM", logo: techLogos.hubspot },
                { name: "SAP", logo: techLogos.sap },
                { name: "Oracle ERP", logo: techLogos.oracle },
            ],
            features: ["Custom API Integrations", "NetSuite", "Microsoft Dynamics", "Real-time Sync"],
        },
        {
            icon: Zap,
            title: "No-Code / Low-Code Tools",
            description: "Rapid development and deployment platforms",
            gradient: "from-orange-600 to-amber-500",
            iconBg: "bg-orange-500/10",
            iconColor: "text-orange-500",
            items: [
                { name: "Zapier", logo: techLogos.zapier },
                { name: "Make (Integromat)", logo: techLogos.make },
                { name: "n8n Workflows", logo: techLogos.n8n },
                { name: "Docker", logo: techLogos.docker },
            ],
            features: ["Visual Automation Builders", "Custom Workflow Engines", "Integration Platforms", "Rapid Prototyping"],
        },
    ];

    const securityFeatures = [
        { text: "End-to-end encryption for data in transit", icon: Lock },
        { text: "Data encryption at rest with industry standards", icon: Shield },
        { text: "Role-based access control (RBAC)", icon: CheckCircle2 },
        { text: "Audit logging and compliance tracking", icon: Activity },
        { text: "GDPR, HIPAA, SOC 2 compliance", icon: Shield },
        { text: "Regular security audits and penetration testing", icon: Lock },
    ];

    const dataPipelineFeatures = [
        {
            title: "Data Flow Architecture",
            description: "Our data pipelines are designed with security-first principles, ensuring data integrity and compliance at every step.",
            icon: Server,
        },
        {
            title: "Real-time Monitoring",
            description: "Continuous monitoring and alerting systems detect anomalies and ensure optimal pipeline performance.",
            icon: Activity,
        },
        {
            title: "Disaster Recovery",
            description: "Automated backup and recovery mechanisms ensure business continuity in any scenario.",
            icon: Shield,
        },
    ];

    return (
        <>
            <style jsx>{`
                @keyframes float-logo {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-5px); }
                }
                @keyframes glow {
                    0%, 100% { 
                        box-shadow: 0 0 5px rgba(251, 146, 60, 0.2);
                    }
                    50% { 
                        box-shadow: 0 0 20px rgba(251, 146, 60, 0.4);
                    }
                }
                @keyframes pulse-border {
                    0%, 100% { border-color: var(--border-color); }
                    50% { border-color: var(--brand-orange); }
                }
                @keyframes gradient-shift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                .animate-float-logo { animation: float-logo 3s ease-in-out infinite; }
                .animate-glow { animation: glow 2s ease-in-out infinite; }
                .animate-pulse-border { animation: pulse-border 3s ease-in-out infinite; }
                .animate-gradient { 
                    background-size: 200% 200%;
                    animation: gradient-shift 3s ease infinite;
                }
            `}</style>

            <section
                className="py-20 transition-colors duration-300 relative overflow-hidden"
                style={{
                    backgroundColor: "var(--card-bg)",
                    borderColor: "var(--border-color)",
                }}
            >
                {/* Decorative background elements */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-40 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
                    <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500 rounded-full blur-3xl" />
                </div>

                <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-20 animate-fadeIn" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                            <Sparkles className="w-4 h-4" style={{ color: "var(--brand-orange)" }} />
                            <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>Powered by Industry Leaders</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                            <span style={{ color: "var(--foreground)" }}>Technology Stack & </span><span style={{ color: "var(--brand-orange)" }}>Integrations</span>
                        </h2>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                            We leverage the latest AI technologies and enterprise integrations to build robust, scalable automation solutions.
                        </p>
                    </div>

                    {/* Technology Categories */}
                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        {techCategories.map((category, index) => {
                            const Icon = category.icon;
                            return (
                                <div
                                    key={index}
                                    className="group relative p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-fadeIn"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                        animationDelay: `${0.2 + index * 0.1}s`,
                                        animationFillMode: "both",
                                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {/* Gradient overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                    {/* Corner decoration */}
                                    <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className={`absolute top-0 right-0 w-1 h-full bg-gradient-to-b ${category.gradient} opacity-30`} />
                                        <div className={`absolute top-0 right-0 w-full h-1 bg-gradient-to-l ${category.gradient} opacity-30`} />
                                    </div>

                                    {/* Header */}
                                    <div className="flex items-start gap-4 mb-6">
                                        <div
                                            className={`w-16 h-16 rounded-2xl ${category.iconBg} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                                        >
                                            <Icon className={`w-8 h-8 ${category.iconColor}`} strokeWidth={2} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold mb-2 transition-colors duration-300" style={{ color: "var(--foreground)" }}>
                                                {category.title}
                                            </h3>
                                            <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                                {category.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Technology Logos Grid */}
                                    <div className="grid grid-cols-4 gap-4 mb-6">
                                        {category.items.map((item, i) => (
                                            <div
                                                key={i}
                                                className="group/logo relative flex flex-col items-center"
                                                title={item.name}
                                            >
                                                <div
                                                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover/logo:scale-110 group-hover/logo:shadow-md border border-gray-200"
                                                    style={{ backgroundColor: "#ffffff" }}
                                                >
                                                    <Image
                                                        src={item.logo}
                                                        alt={item.name}
                                                        width={32}
                                                        height={32}
                                                        className="object-contain opacity-90 group-hover/logo:opacity-100 transition-opacity duration-300"
                                                        unoptimized={item.logo.startsWith('http')}
                                                    />
                                                </div>
                                                <span className="text-xs mt-2 text-center truncate w-full" style={{ color: "var(--secondary-text)" }}>
                                                    {item.name.split(' ')[0]}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Features List */}
                                    <div className="pt-6 border-t" style={{ borderColor: "var(--border-color)" }}>
                                        <p className="text-xs font-bold mb-3 uppercase tracking-wider" style={{ color: "var(--brand-orange)" }}>
                                            Capabilities
                                        </p>
                                        <div className="grid grid-cols-2 gap-2">
                                            {category.features.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-2 group/item hover:translate-x-1 transition-transform duration-200">
                                                    <CheckCircle2
                                                        className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110"
                                                        style={{ color: "var(--brand-orange)" }}
                                                    />
                                                    <span className="text-sm" style={{ color: "var(--secondary-text)" }}>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bottom gradient line */}
                                    <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${category.gradient} group-hover:w-full transition-all duration-700 ease-out`} />
                                </div>
                            );
                        })}
                    </div>

                    {/* Security & Data Pipelines */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Security Card */}
                        <div
                            className="group relative p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-fadeIn"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                                animationDelay: "0.8s",
                                animationFillMode: "both",
                                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                    <Shield className="w-7 h-7 text-white" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold transition-colors duration-300 " style={{ color: "var(--foreground)" }}>
                                        Security & Compliance
                                    </h3>
                                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Enterprise-grade protection</p>
                                </div>
                            </div>

                            <ul className="space-y-4 relative z-10">
                                {securityFeatures.map((feature, i) => {
                                    const FeatureIcon = feature.icon;
                                    return (
                                        <li key={i} className="flex items-start gap-4 group/item hover:translate-x-1 transition-transform duration-200">
                                            <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover/item:scale-110">
                                                <FeatureIcon className="w-4 h-4 text-green-500" strokeWidth={2.5} />
                                            </div>
                                            <span className="text-sm leading-relaxed pt-1" style={{ color: "var(--secondary-text)" }}>
                                                {feature.text}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>

                            {/* Bottom gradient line */}
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-green-500 to-emerald-500 group-hover:w-full transition-all duration-700 ease-out" />
                        </div>

                        {/* Data Pipelines Card */}
                        <div
                            className="group relative p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-fadeIn"
                            style={{
                                backgroundColor: "color-mix(in srgb, var(--card-bg) 80%, transparent)",
                                borderColor: "var(--border-color)",
                                animationDelay: "1s",
                                animationFillMode: "both",
                                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                    <Database className="w-7 h-7 text-white" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold transition-colors duration-300 " style={{ color: "var(--foreground)" }}>
                                        Secure Data Pipelines
                                    </h3>
                                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Built for reliability</p>
                                </div>
                            </div>

                            <div className="space-y-6 relative z-10">
                                {dataPipelineFeatures.map((feature, i) => {
                                    const FeatureIcon = feature.icon;
                                    return (
                                        <div key={i} className="group/item hover:translate-x-1 transition-transform duration-200">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center transition-all duration-200 group-hover/item:scale-110">
                                                    <FeatureIcon className="w-4 h-4 text-blue-500" strokeWidth={2.5} />
                                                </div>
                                                <h4 className="font-bold transition-colors duration-200" style={{ color: "var(--foreground)" }}>
                                                    {feature.title}
                                                </h4>
                                            </div>
                                            <p className="text-sm leading-relaxed pl-11" style={{ color: "var(--secondary-text)" }}>
                                                {feature.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Bottom gradient line */}
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-700 ease-out" />
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div
                        className="mt-16 p-10 rounded-3xl border text-center animate-fadeIn relative overflow-hidden group"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                            borderColor: "var(--border-color)",
                            animationDelay: "1.2s",
                            animationFillMode: "both",
                        }}
                    >
                        {/* Background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-orange-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                                Need a Custom Integration?
                            </h3>
                            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                                Our team can integrate with virtually any system, API, or platform. Let's discuss your specific requirements.
                            </p>
                            <button className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#fab900] to-[#ee6500] hover:from-[#ee6500] hover:to-[#fab900] text-white text-sm md:text-base font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2 md:gap-3 mx-auto group/button">
                                <span>Discuss Integration Options</span>
                                <ArrowRight className="w-5 h-5 group-hover/button:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
