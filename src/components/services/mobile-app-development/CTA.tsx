"use client";

import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CTA() {
    return (
        <section
            className="relative transition-colors duration-300 py-20 md:py-28 overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-purple) 15%, transparent)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-yellow) 15%, transparent)",
                        animationDelay: "1.5s",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative">
                {/* Main CTA Card */}
                <div
                    className="p-12 md:p-16 rounded-3xl border text-center overflow-hidden relative"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    {/* Gradient Overlay */}
                    <div
                        className="absolute inset-0 opacity-5"
                        style={{
                            background: "linear-gradient(135deg, var(--brand-purple), var(--brand-yellow))",
                        }}
                    />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: "var(--foreground)" }}>
                            Ready to Build Your Mobile App?
                        </h2>

                        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                            Let's transform your idea into a powerful, scalable mobile application that drives real business results.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
                                style={{
                                    background: "linear-gradient(135deg, var(--brand-purple), var(--brand-yellow))",
                                    color: "white",
                                }}
                            >
                                Start Your Project
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold border transition-all hover:scale-105"
                                style={{
                                    borderColor: "var(--border-color)",
                                    color: "var(--foreground)",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--hover-bg)")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                            >
                                Schedule Consultation
                                <Phone className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8 border-t" style={{ borderColor: "var(--border-color)" }}>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5" style={{ color: "var(--brand-purple)" }} />
                                <div className="text-left">
                                    <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                        Email Us
                                    </div>
                                    <Link href="mailto:contact@cinuteinfomedia.com" className="font-semibold hover:underline" style={{ color: "var(--secondary-text)" }}>
                                        contact@cinuteinfomedia.com
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden sm:block w-px h-8" style={{ backgroundColor: "var(--border-color)" }} />
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5" style={{ color: "var(--brand-yellow)" }} />
                                <div className="text-left">
                                    <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                        Call Us
                                    </div>
                                    <Link href="tel:+91 9004988859" className="font-semibold hover:underline" style={{ color: "var(--secondary-text)" }}>
                                        +91 9004988859
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="text-4xl font-bold mb-2" style={{ color: "var(--brand-purple)" }}>
                            200+
                        </div>
                        <p style={{ color: "var(--secondary-text)" }}>
                            Mobile apps delivered successfully
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold mb-2" style={{ color: "var(--brand-yellow)" }}>
                            5M+
                        </div>
                        <p style={{ color: "var(--secondary-text)" }}>
                            Active users across all apps
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold mb-2" style={{ color: "var(--brand-blue)" }}>
                            98%
                        </div>
                        <p style={{ color: "var(--secondary-text)" }}>
                            Client satisfaction rate
                        </p>
                    </div>
                </div>

                {/* Process Steps */}
                <div className="mt-16 p-8 rounded-2xl border" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                    <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: "var(--foreground)" }}>How to Get Started</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: "1", title: "Consultation", desc: "Discuss your app idea and requirements" },
                            { step: "2", title: "Proposal", desc: "Receive detailed project proposal and timeline" },
                            { step: "3", title: "Development", desc: "Our team builds your app with regular updates" },
                            { step: "4", title: "Launch", desc: "Deploy to app stores and ongoing support" }
                        ].map((item, index) => (
                            <div key={index} className="relative text-center">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg"
                                    style={{
                                        background: "linear-gradient(135deg, var(--brand-purple), var(--brand-yellow))",
                                        color: "white",
                                    }}
                                >
                                    {item.step}
                                </div>
                                <h4 className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>{item.title}</h4>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                    {item.desc}
                                </p>
                                {index < 3 && (
                                    <div
                                        className="hidden md:block absolute top-6 -right-3 w-6 h-0.5"
                                        style={{ backgroundColor: "var(--border-color)" }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
