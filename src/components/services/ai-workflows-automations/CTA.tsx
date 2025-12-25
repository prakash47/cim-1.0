"use client";

import { ArrowRight, Zap, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Main CTA Card */}
                <div
                    className="rounded-3xl p-12 md:p-16 text-center border animate-fadeIn overflow-hidden relative"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                        animationDelay: "0.1s",
                        animationFillMode: "both",
                    }}
                >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div
                            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
                            style={{
                                backgroundColor: "var(--brand-orange)",
                            }}
                        />
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                            Ready to Transform Your <span style={{ color: "var(--brand-orange)" }}>Operations?</span>
                        </h2>
                        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                            Let's discuss how AI-powered workflows can automate your business, reduce costs, and drive growth.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#fab900] to-[#ee6500] hover:from-[#fab900] hover:to-[#fab900] text-black rounded-full text-sm md:text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                <Zap className="w-5 h-5" />
                                Book Your AI Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            {/* <button
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 border-2 rounded-full text-sm md:text-lg font-bold transition-all hover:scale-105"
                                style={{
                                    borderColor: "var(--brand-orange)",
                                    color: "var(--brand-orange)",
                                }}
                            >
                                <MessageSquare className="w-5 h-5" />
                                Chat with Our Experts
                            </button> */}
                        </div>

                        {/* Benefits Summary */}
                        <div className="grid md:grid-cols-3 gap-6 pt-8 border-t" style={{ borderColor: "var(--border-color)" }}>
                            {[
                                {
                                    title: "Free Consultation",
                                    description: "Discuss your automation needs with our AI experts",
                                },
                                {
                                    title: "Custom Proposal",
                                    description: "Receive a tailored solution and ROI projection",
                                },
                                {
                                    title: "Fast Implementation",
                                    description: "Deploy your first workflow in weeks, not months",
                                },
                            ].map((benefit, i) => (
                                <div key={i} className="py-4">
                                    <h4 className="font-bold mb-2">{benefit.title}</h4>
                                    <p style={{ color: "var(--secondary-text)" }}>{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Secondary CTA Section */}
                <div className="mt-16 grid md:grid-cols-2 gap-8">
                    {[
                        {
                            title: "Automate Your Workflows",
                            description: "Start building intelligent automation solutions today",
                            link: "/contact",
                            icon: Zap,
                        },
                        {
                            title: "Learn More About AI Automation",
                            description: "Explore case studies and success stories from our clients",
                            link: "/contact",
                            icon: MessageSquare,
                        },
                    ].map((cta, i) => {
                        const Icon = cta.icon;
                        return (
                            <Link
                                key={i}
                                href={cta.link}
                                className="p-8 rounded-2xl border transition-all duration-300 hover:scale-105 group animate-fadeIn"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                    animationDelay: `${0.4 + i * 0.1}s`,
                                    animationFillMode: "both",
                                }}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div
                                        className="w-12 h-12 rounded-lg p-2.5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                                        style={{
                                            background: "linear-gradient(135deg, var(--brand-orange), var(--brand-orange))",
                                        }}
                                    >
                                        <Icon className="w-full h-full text-white" />
                                    </div>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" style={{ color: "var(--brand-orange)" }} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{cta.title}</h3>
                                <p style={{ color: "var(--secondary-text)" }}>{cta.description}</p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
