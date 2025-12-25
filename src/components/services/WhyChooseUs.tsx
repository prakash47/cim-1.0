"use client";

import React, { useState } from 'react';
import { Shield, Zap, Users, Award, Headphones, TrendingUp, CheckCircle } from 'lucide-react';

const reasons = [
    {
        icon: Shield,
        title: "Trusted Expertise",
        description: "Years of experience delivering successful digital solutions across industries.",
        gradient: "linear-gradient(135deg, var(--brand-purple), var(--brand-blue))",
    },
    {
        icon: Zap,
        title: "Fast Delivery",
        description: "Agile methodology ensures rapid development without compromising quality.",
        gradient: "linear-gradient(135deg, var(--brand-cyan), var(--brand-teal))",
    },
    {
        icon: Users,
        title: "Dedicated Team",
        description: "Expert designers, developers, and strategists working on your project.",
        gradient: "linear-gradient(135deg, var(--brand-orange), var(--brand-purple))",
    },
    {
        icon: Award,
        title: "Quality Assured",
        description: "Rigorous testing and quality checks at every stage of development.",
        gradient: "linear-gradient(135deg, var(--brand-yellow), var(--brand-orange))",
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        description: "Round-the-clock support to address your concerns whenever you need us.",
        gradient: "linear-gradient(135deg, var(--brand-blue), var(--brand-cyan))",
    },
    {
        icon: TrendingUp,
        title: "Results-Driven",
        description: "Data-backed strategies that deliver measurable business outcomes.",
        gradient: "linear-gradient(135deg, var(--brand-teal), var(--brand-purple))",
    },
];

const highlights = [
    "Transparent Pricing",
    "Scalable Solutions",
    "Custom Development",
    "Modern Tech Stack",
    "SEO Best Practices",
    "Mobile-First Approach",
];

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <section className="py-20" style={{ backgroundColor: "var(--background)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                border: "1px solid var(--border-color)",
                            }}
                        >
                            <Award className="w-4 h-4" style={{ color: "var(--brand-purple)" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Why Choose Us</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-black mb-6" style={{ lineHeight: 1.2, color: "var(--foreground)" }}>
                            Your Success is Our{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, var(--brand-purple), var(--brand-cyan))",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                Priority
                            </span>
                        </h2>

                        <p className="text-lg mb-8" style={{ color: "var(--secondary-text)", lineHeight: 1.7 }}>
                            We combine creativity, technology, and strategy to deliver exceptional digital experiences that drive real business results.
                        </p>

                        {/* Highlights List */}
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            {highlights.map((highlight, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-cyan)" }} />
                                    <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{highlight}</span>
                                </div>
                            ))}
                        </div>

                        {/* Stats Row */}
                        <div
                            className="grid grid-cols-3 gap-6 p-6 rounded-2xl mb-8"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                border: "1px solid var(--border-color)",
                            }}
                        >
                            {[
                                { value: "50+", label: "Projects" },
                                { value: "98%", label: "Satisfaction" },
                                { value: "5+", label: "Years" },
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div
                                        className="text-2xl md:text-3xl font-black mb-1"
                                        style={{
                                            background: "linear-gradient(135deg, var(--brand-purple), var(--brand-cyan))",
                                            WebkitBackgroundClip: "text",
                                            color: "transparent",
                                        }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-xs" style={{ color: "var(--secondary-text)" }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Testimonial Quote */}
                        <div
                            className="relative p-6 rounded-2xl"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                border: "1px solid var(--border-color)",
                            }}
                        >
                            <div
                                className="absolute -top-3 left-6 text-5xl font-serif"
                                style={{
                                    color: "var(--brand-purple)",
                                    opacity: 0.3,
                                }}
                            >
                                &ldquo;
                            </div>
                            <p
                                className="text-sm italic mb-4 pt-2"
                                style={{ color: "var(--secondary-text)", lineHeight: 1.7 }}
                            >
                                CIM transformed our digital presence completely. Their team delivered beyond expectations with exceptional attention to detail and ongoing support.
                            </p>
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                                    style={{ background: "linear-gradient(135deg, var(--brand-purple), var(--brand-cyan))" }}
                                >
                                    RK
                                </div>
                                <div>
                                    <div className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Rajesh Kumar</div>
                                    <div className="text-xs" style={{ color: "var(--secondary-text)" }}>CEO, TechStart India</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {reasons.map((reason, index) => {
                            const Icon = reason.icon;
                            const isHovered = hoveredCard === index;

                            return (
                                <div
                                    key={index}
                                    className="relative p-6 rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: isHovered ? "transparent" : "var(--border-color)",
                                        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                                        boxShadow: isHovered ? "0 20px 40px -10px rgba(0, 0, 0, 0.1)" : "none",
                                    }}
                                    onMouseEnter={() => setHoveredCard(index)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    {/* Background gradient on hover */}
                                    <div
                                        className="absolute inset-0 transition-opacity duration-300"
                                        style={{
                                            background: reason.gradient,
                                            opacity: isHovered ? 0.05 : 0,
                                        }}
                                    />

                                    <div className="relative z-10">
                                        <div
                                            className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-transform duration-300"
                                            style={{
                                                background: reason.gradient,
                                                transform: isHovered ? "scale(1.1)" : "scale(1)",
                                            }}
                                        >
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>

                                        <h3 className="text-lg font-bold mb-2" style={{ color: "var(--foreground)" }}>{reason.title}</h3>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)", lineHeight: 1.6 }}>
                                            {reason.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
