"use client";

import { Zap, Lock, TrendingUp, Palette, Smartphone, Award } from "lucide-react";
import { CheckCircle2, XCircle, ShieldCheck, Rocket, Gauge, Wrench, Layers, Building2 } from "lucide-react";
import Image from "next/image";


export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Zap,
            title: "Lightning-Fast Performance",
            description: "Optimized code and architecture ensure your app runs smoothly with minimal battery drain and fast load times."
        },
        {
            icon: Lock,
            title: "Enterprise-Grade Security",
            description: "Implement industry-leading security practices including end-to-end encryption, secure authentication, and data protection."
        },
        {
            icon: TrendingUp,
            title: "Scalability at Scale",
            description: "Build apps that grow with your business. Our architecture supports millions of users without performance degradation."
        },
        {
            icon: Palette,
            title: "Exceptional UX/UI",
            description: "Beautiful, intuitive interfaces designed with user psychology in mind. Every pixel serves a purpose."
        },
        {
            icon: Smartphone,
            title: "App Store Ready",
            description: "Full compliance with Apple App Store and Google Play Store guidelines. We handle all submission and approval processes."
        },
        {
            icon: Award,
            title: "Award-Winning Quality",
            description: "Our apps have won multiple industry awards and recognition for innovation, design, and user experience."
        }
    ];

    return (
        <section
            className="relative transition-colors duration-300 py-20 md:py-28"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-30"
                    style={{ backgroundColor: "color-mix(in srgb, var(--brand-purple) 20%, transparent)" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeIn">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
                        <span style={{ color: "var(--foreground)" }}>Why Choose Our</span> <span style={{ color: "var(--brand-purple)" }}>Mobile App Solutions</span>?
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We combine technical excellence with strategic thinking to deliver mobile apps that drive real business results.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;
                        return (
                            <div
                                key={index}
                                className="group relative p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border overflow-hidden"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                {/* Gradient Background on Hover */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                    style={{
                                        background: "linear-gradient(135deg, var(--brand-purple), var(--brand-yellow))",
                                    }}
                                />

                                <div className="relative z-10">
                                    <div
                                        className="w-14 h-14 rounded-xl p-3 mb-4 transition-all duration-300 group-hover:scale-110"
                                        style={{
                                            background: "linear-gradient(135deg, var(--brand-purple), var(--brand-yellow))",
                                        }}
                                    >
                                        <Icon className="w-full h-full text-white" />
                                    </div>

                                    <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                        {reason.title}
                                    </h3>

                                    <p className="text-base" style={{ color: "var(--secondary-text)" }}>
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Comparison Section */}
                <div
                    className="mt-20 p-10 rounded-3xl border"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    {/* Heading */}
                    <h3
                        className="text-2xl md:text-3xl font-bold mb-10 text-center"
                        style={{ color: "var(--foreground)" }}
                    >
                        Our Competitive Advantages
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full border-separate border-spacing-y-3">
                            {/* Table Head */}
                            <thead>
                                <tr>
                                    <th className="text-left px-6 py-4 text-lg font-semibold" style={{ color: "var(--secondary-text)" }}>
                                        Feature
                                    </th>

                                    {/* CIM Header */}
                                    <th className="text-center px-6 py-4">
                                        <div className="flex flex-col items-center gap-1">
                                            <Image src="/images/CIM_Brand_Logo.png" alt="CIM Logo" width={50} height={50} />
                                        </div>
                                        <span className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            CIM
                                        </span>
                                    </th>

                                    {/* Others Header */}
                                    <th className="text-center px-6 py-4">
                                        <div className="flex flex-col items-center gap-1">
                                            <div
                                                className="w-15 h-15 rounded-full flex items-center justify-center"
                                                style={{
                                                    backgroundColor: "var(--border-color)",
                                                }}
                                            >
                                                <Building2 className="w-8 h-8" style={{ color: "var(--secondary-text)" }} />
                                            </div>
                                            <span className="font-semibold" style={{ color: "var(--foreground)" }}>
                                                Others
                                            </span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody>
                                {[
                                    { label: "Custom Development", icon: Layers, cim: true, others: false },
                                    { label: "Post-Launch Support", icon: Wrench, cim: true, others: false },
                                    { label: "App Store Optimization", icon: Rocket, cim: true, others: false },
                                    { label: "Security Audit", icon: ShieldCheck, cim: true, others: false },
                                    { label: "Performance Testing", icon: Gauge, cim: true, others: true },
                                    { label: "Agile Methodology", icon: Layers, cim: true, others: true },
                                ].map((row, index) => (
                                    <tr
                                        key={index}
                                        className="transition-all"
                                        onMouseEnter={(e) =>
                                        (e.currentTarget.style.backgroundColor =
                                            "color-mix(in srgb, var(--brand-purple) 6%, transparent)")
                                        }
                                        onMouseLeave={(e) =>
                                            (e.currentTarget.style.backgroundColor = "transparent")
                                        }
                                    >
                                        {/* Feature */}
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                                                    style={{
                                                        backgroundColor:
                                                            "color-mix(in srgb, var(--brand-purple) 12%, transparent)",
                                                    }}
                                                >
                                                    <row.icon
                                                        className="w-5 h-5"
                                                        style={{ color: "var(--brand-purple)" }}
                                                    />
                                                </div>
                                                <span className="font-medium" style={{ color: "var(--foreground)" }}>
                                                    {row.label}
                                                </span>
                                            </div>
                                        </td>

                                        {/* CIM Cell */}
                                        <td className="text-center px-6 py-5">
                                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold"
                                                style={{
                                                    backgroundColor:
                                                        "color-mix(in srgb, var(--brand-purple) 15%, transparent)",
                                                    color: "var(--brand-purple)",
                                                }}
                                            >
                                                <CheckCircle2 className="w-4 h-4" />
                                                Included
                                            </span>
                                        </td>

                                        {/* Others Cell */}
                                        <td className="text-center px-6 py-5">
                                            {row.others ? (
                                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold"
                                                    style={{
                                                        backgroundColor:
                                                            "color-mix(in srgb, var(--border-color) 40%, transparent)",
                                                        color: "var(--secondary-text)",
                                                    }}
                                                >
                                                    <CheckCircle2 className="w-4 h-4" />
                                                    Limited
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold"
                                                    style={{
                                                        backgroundColor:
                                                            "color-mix(in srgb, var(--border-color) 20%, transparent)",
                                                        color: "var(--secondary-text)",
                                                    }}
                                                >
                                                    <XCircle className="w-4 h-4" />
                                                    Not Included
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </section>
    );
}
