"use client";

import { useState } from "react";
import { ArrowRight, Mail, Phone, MessageSquare, Calendar, Sparkles, Send, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const contactMethods = [
        {
            icon: Phone,
            title: "Call Us",
            description: "Speak directly with our support team",
            action: "+91 9004988859",
            color: "#4b277a",
            href: "tel:+919004988859"
        },
        {
            icon: Mail,
            title: "Email Us",
            description: "Get a response within 24 hours",
            action: "contact@cinuteinfomedia.com",
            color: "#fab900",
            href: "mailto:contact@cinuteinfomedia.com"
        },
        {
            icon: Phone,
            title: "Alternate Phone",
            description: "Another way to reach us",
            action: "+91 7700995410",
            color: "#97288e",
            href: "tel:+917700995410"
        },
        {
            icon: Calendar,
            title: "Book a Call",
            description: "Schedule a consultation",
            action: "Schedule Now",
            color: "#4b277a",
            href: "/contact"
        },
    ];


    return (
        <section
            className="py-16 md:py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-[150px] opacity-20" style={{ backgroundColor: "#4b277a" }} />
                <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full blur-[120px] opacity-15" style={{ backgroundColor: "#97288e" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-[100px] opacity-10" style={{ backgroundColor: "#fab900" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-full border backdrop-blur-sm"
                        style={{
                            backgroundColor: "color-mix(in srgb, #4b277a 10%, transparent)",
                            borderColor: "#4b277a",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "#4b277a" }} />
                        <span className="text-sm font-bold tracking-wide" style={{ color: "#4b277a" }}>
                            GET STARTED TODAY
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Ready to <span style={{ color: "#fab900" }}>Elevate</span> Your Support?
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Let&apos;s discuss how our support services can help your business thrive. Get in touch today.
                    </p>
                </div>

                <div className="flex flex-col items-center max-w-4xl mx-auto">
                    {/* Contact Methods */}
                    <div className="space-y-6 w-full">
                        <h3 className="text-xl md:text-2xl font-bold mb-6" style={{ color: "#4b277a" }}>Choose Your Preferred Way to Connect</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {contactMethods.map((method, index) => {
                                const Icon = method.icon;
                                const isInternal = method.href.startsWith("/");
                                const Wrapper = isInternal ? Link : "a";

                                return (
                                    <Wrapper
                                        key={index}
                                        href={method.href}
                                        className="group p-4 md:p-5 rounded-2xl border transition-all duration-300 cursor-pointer hover:scale-[1.02] md:hover:scale-105 overflow-hidden block"
                                        style={{
                                            backgroundColor: "var(--card-bg)",
                                            borderColor: "var(--border-color)",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = method.color;
                                            e.currentTarget.style.boxShadow = `0 10px 30px -10px ${method.color}40`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = "var(--border-color)";
                                            e.currentTarget.style.boxShadow = "none";
                                        }}
                                    >
                                        <div
                                            className="w-10 h-10 md:w-12 md:h-12 rounded-xl mb-3 md:mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                            style={{ backgroundColor: `${method.color}15` }}
                                        >
                                            <Icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: method.color }} />
                                        </div>
                                        <h4 className="text-base md:text-lg font-bold mb-1">{method.title}</h4>
                                        <p className="text-xs md:text-sm mb-2 md:mb-3" style={{ color: "var(--secondary-text)" }}>{method.description}</p>
                                        <span className="text-xs md:text-sm font-semibold break-all" style={{ color: method.color }}>
                                            {method.action}
                                        </span>
                                    </Wrapper>
                                );
                            })}
                        </div>

                        {/* Trust Indicators */}
                        <div
                            className="flex flex-wrap gap-6 p-6 rounded-2xl border mt-6"
                            style={{
                                backgroundColor: "color-mix(in srgb, #fab900 5%, var(--card-bg))",
                                borderColor: "color-mix(in srgb, #fab900 20%, var(--border-color))",
                            }}
                        >
                            {[
                                { value: "24/7", label: "Support Available" },
                                { value: "500+", label: "Happy Clients" },
                                { value: "<2hr", label: "Avg Response" },
                            ].map((stat, index) => (
                                <div key={index} className="text-center flex-1">
                                    <div className="text-2xl font-black" style={{ color: "#fab900" }}>{stat.value}</div>
                                    <div className="text-xs" style={{ color: "var(--secondary-text)" }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>



                    {/* Bottom CTA */}
                    <div className="mt-16 text-center">
                        <p className="mb-4" style={{ color: "var(--secondary-text)" }}>Prefer to explore on your own?</p>
                        <a
                            href="/services"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold border-2 transition-all duration-300 hover:scale-105"
                            style={{ borderColor: "#fab900", color: "#fab900" }}
                        >
                            View All Services
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
