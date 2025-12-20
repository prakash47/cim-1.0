"use client";

import { useState } from "react";
import {
    Wrench,
    MonitorCheck,
    ShieldCheck,
    RefreshCw,
    Cloud,
    Users,
    BarChart3,
    Headset,
    ArrowRight,
} from "lucide-react";

export default function SupportServices() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const services = [
        {
            icon: Wrench,
            title: "Technical Maintenance",
            description: "Regular updates, bug fixes, and performance optimization to keep your systems running smoothly.",
            features: ["Software Updates", "Bug Resolution", "Performance Tuning"],
        },
        {
            icon: MonitorCheck,
            title: "System Monitoring",
            description: "24/7 proactive monitoring of your applications and infrastructure for immediate issue detection.",
            features: ["Real-time Alerts", "Uptime Tracking", "Error Logging", "Health Dashboards"],
        },
        {
            icon: ShieldCheck,
            title: "Security Management",
            description: "Comprehensive security audits, vulnerability assessments, and threat prevention measures.",
            features: ["Security Audits", "Patch Management", "SSL Certificates", "Firewall Config"],
        },
        {
            icon: RefreshCw,
            title: "Backup & Recovery",
            description: "Automated backup solutions and disaster recovery plans to protect your valuable data.",
            features: ["Automated Backups", "Recovery Plans", "Data Migration", "Redundancy Setup"],
        },
        {
            icon: Cloud,
            title: "Cloud Management",
            description: "Optimize your cloud infrastructure for performance, cost-efficiency, and scalability.",
            features: ["Cost Optimization", "Resource Scaling", "Cloud Migration", "Multi-cloud Setup"],
        },
        {
            icon: Users,
            title: "User Training",
            description: "Empower your team with comprehensive training on your digital tools and platforms.",
            features: ["Onboarding Sessions", "Documentation", "Video Tutorials", "Live Workshops"],
        },
        {
            icon: BarChart3,
            title: "Analytics & Reporting",
            description: "Detailed insights and regular reports on performance, usage, and growth metrics.",
            features: ["Custom Dashboards", "Monthly Reports", "KPI Tracking", "Trend Analysis"],
        },
        {
            icon: Headset,
            title: "Dedicated Support Desk",
            description: "Direct access to our expert support team through multiple channels for quick resolution.",
            features: ["Email Support", "Phone Support", "Live Chat", "Ticket System"],
        },
    ];

    const colors = ["#4b277a", "#fab900", "#97288e"];

    return (
        <section
            id="services"
            className="py-12 md:py-16 lg:py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#4b277a] rounded-full blur-[150px] opacity-10" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#97288e] rounded-full blur-[150px] opacity-10" />
            </div>

            <div className="mx-auto px-4 sm:px-6 md:px-12 xl:px-20 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-4 md:px-5 py-2 md:py-2.5 rounded-full border backdrop-blur-sm"
                        style={{
                            backgroundColor: "color-mix(in srgb, #fab900 10%, transparent)",
                            borderColor: "#fab900",
                        }}
                    >
                        <Wrench className="w-4 h-4" style={{ color: "#fab900" }} />
                        <span className="text-xs md:text-sm font-bold tracking-wide" style={{ color: "#fab900" }}>
                            OUR SERVICES
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                        Comprehensive <span style={{ color: "#fab900" }}>Support</span> Solutions
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4" style={{ color: "var(--secondary-text)" }}>
                        From technical maintenance to strategic consulting, we offer the complete range of support services your business needs.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const color = colors[index % colors.length];
                        const isHovered = hoveredIndex === index;

                        return (
                            <div
                                key={index}
                                className="group relative p-4 sm:p-5 md:p-6 rounded-2xl border transition-all duration-500 cursor-pointer"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: isHovered ? color : "var(--border-color)",
                                    transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                    boxShadow: isHovered ? `0 20px 40px -15px ${color}40` : "none",
                                }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Icon */}
                                <div
                                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl mb-3 sm:mb-4 md:mb-5 flex items-center justify-center transition-all duration-300"
                                    style={{
                                        background: `linear-gradient(135deg, ${color}20, ${color}10)`,
                                        transform: isHovered ? "scale(1.1) rotate(-5deg)" : "scale(1) rotate(0)",
                                    }}
                                >
                                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" style={{ color }} />
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-base sm:text-lg font-bold mb-2 sm:mb-3 transition-colors duration-300"
                                    style={{ color: isHovered ? color : "var(--foreground)" }}
                                >
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {service.features.map((feature, idx) => (
                                        <span
                                            key={idx}
                                            className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full transition-all duration-300"
                                            style={{
                                                backgroundColor: isHovered ? `${color}15` : "var(--hover-bg)",
                                                color: isHovered ? color : "var(--secondary-text)",
                                            }}
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Hover Arrow */}
                                <div
                                    className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300"
                                    style={{
                                        backgroundColor: color,
                                        opacity: isHovered ? 1 : 0,
                                        transform: isHovered ? "translateX(0)" : "translateX(-10px)",
                                    }}
                                >
                                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
