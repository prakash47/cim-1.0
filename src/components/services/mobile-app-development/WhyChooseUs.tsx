"use client";

import { Zap, Lock, TrendingUp, Palette, Smartphone, Award } from "lucide-react";

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
                <div className="mt-20 p-8 rounded-2xl border" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                    <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: "var(--foreground)" }}>Our Competitive Advantages</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr style={{ borderBottomColor: "var(--border-color)", color: "var(--foreground)" }} className="border-b">
                                    <th className="text-left py-4 px-4 font-semibold">Feature</th>
                                    <th className="text-center py-4 px-4 font-semibold">CIM</th>
                                    <th className="text-center py-4 px-4 font-semibold">Others</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { feature: "Custom Development", cim: true, others: false },
                                    { feature: "Post-Launch Support", cim: true, others: false },
                                    { feature: "App Store Optimization", cim: true, others: false },
                                    { feature: "Security Audit", cim: true, others: false },
                                    { feature: "Performance Testing", cim: true, others: true },
                                    { feature: "Agile Methodology", cim: true, others: true },
                                ].map((row, index) => (
                                    <tr key={index} style={{ borderBottomColor: "var(--border-color)", color: "var(--secondary-text)" }} className="border-b hover:bg-opacity-50 transition-colors" onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--brand-purple) 5%, transparent)")} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}>
                                        <td className="py-4 px-4 font-medium">{row.feature}</td>
                                        <td className="text-center py-4 px-4">
                                            <span style={{ color: "var(--brand-purple)" }} className="text-lg font-bold">✓</span>
                                        </td>
                                        <td className="text-center py-4 px-4">
                                            {row.others ? <span style={{ color: "var(--brand-purple)" }} className="text-lg font-bold">✓</span> : <span style={{ color: "var(--secondary-text)" }}>—</span>}
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
