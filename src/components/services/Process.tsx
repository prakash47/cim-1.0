"use client";

import React, { useState } from 'react';
import { MessageSquare, Lightbulb, Rocket, BarChart3, ArrowRight } from 'lucide-react';

const steps = [
    {
        number: "01",
        icon: MessageSquare,
        title: "Discovery & Consultation",
        description: "We start by understanding your business, goals, and challenges through in-depth discussions.",
        gradient: "linear-gradient(135deg, var(--brand-purple), var(--brand-blue))",
    },
    {
        number: "02",
        icon: Lightbulb,
        title: "Strategy & Planning",
        description: "Our team develops a comprehensive strategy and roadmap tailored to your specific needs.",
        gradient: "linear-gradient(135deg, var(--brand-cyan), var(--brand-teal))",
    },
    {
        number: "03",
        icon: Rocket,
        title: "Design & Development",
        description: "We bring your vision to life with cutting-edge design and development practices.",
        gradient: "linear-gradient(135deg, var(--brand-orange), var(--brand-purple))",
    },
    {
        number: "04",
        icon: BarChart3,
        title: "Launch & Optimize",
        description: "After launch, we continuously monitor, analyze, and optimize for maximum results.",
        gradient: "linear-gradient(135deg, var(--brand-yellow), var(--brand-orange))",
    },
];

export default function Process() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    return (
        <section className="py-20" style={{ backgroundColor: "var(--card-bg)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-24">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                        style={{
                            backgroundColor: "var(--background)",
                            border: "1px solid var(--border-color)",
                        }}
                    >
                        <Rocket className="w-4 h-4" style={{ color: "var(--brand-purple)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Our Process</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "var(--foreground)" }}>
                        How We{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, var(--brand-purple), var(--brand-cyan))",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            Work
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A proven methodology that delivers exceptional results every time
                    </p>
                </div>

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        const isHovered = hoveredStep === index;
                        const isLast = index === steps.length - 1;

                        return (
                            <div
                                key={index}
                                className="relative"
                                onMouseEnter={() => setHoveredStep(index)}
                                onMouseLeave={() => setHoveredStep(null)}
                            >
                                {/* Connection Line */}
                                {!isLast && (
                                    <div
                                        className="hidden lg:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-32px)] h-0.5"
                                        style={{
                                            background: "linear-gradient(90deg, var(--border-color), transparent)",
                                        }}
                                    />
                                )}

                                <div
                                    className="relative p-8 rounded-2xl border transition-all duration-300 text-center"
                                    style={{
                                        backgroundColor: "var(--background)",
                                        borderColor: isHovered ? "transparent" : "var(--border-color)",
                                        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                        boxShadow: isHovered ? "0 25px 50px -12px rgba(0, 0, 0, 0.1)" : "none",
                                    }}
                                >
                                    {/* Background gradient on hover */}
                                    <div
                                        className="absolute inset-0 transition-opacity duration-300 rounded-2xl"
                                        style={{
                                            background: step.gradient,
                                            opacity: isHovered ? 0.05 : 0,
                                        }}
                                    />

                                    <div className="relative z-10">
                                        {/* Step Number */}
                                        <div
                                            className="text-sm font-bold mb-4 opacity-50"
                                            style={{ color: "var(--secondary-text)" }}
                                        >
                                            Step {step.number}
                                        </div>

                                        {/* Icon */}
                                        <div
                                            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 mx-auto transition-transform duration-300"
                                            style={{
                                                background: step.gradient,
                                                transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
                                            }}
                                        >
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-lg font-bold mb-3" style={{ color: "var(--foreground)" }}>{step.title}</h3>

                                        {/* Description */}
                                        <p className="text-sm" style={{ color: "var(--secondary-text)", lineHeight: 1.7 }}>
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Arrow for mobile */}
                                {!isLast && (
                                    <div className="lg:hidden flex justify-center my-4">
                                        <ArrowRight
                                            className="w-6 h-6 rotate-90"
                                            style={{ color: "var(--border-color)" }}
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
