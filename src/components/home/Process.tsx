"use client";

import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function Process() {
    const digitalAuditSteps = [
        { step: 1, title: "Discovery & Goal Setting", description: "Define your current digital footprint, target audience, and key performance indicators." },
        { step: 2, title: "Technical Audit", description: "In-depth analysis of your website, SEO, and performance infrastructure." },
        { step: 3, title: "Strategy Blueprint", description: "A customized plan outlining immediate wins and long-term growth strategies." },
        { step: 4, title: "Execution & Optimization", description: "Implementing the plan with continuous monitoring and data-driven adjustments." },
    ];

    return (
        <section id="audit-process" className="py-20" style={{ backgroundColor: "var(--background)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                <div className="text-center mb-12">
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, backgroundColor: "var(--card-bg)", border: "1px solid var(--border-color)", marginBottom: 16 }}>
                        <TrendingUp className="w-4 h-4" style={{ color: "var(--brand-cyan)" }} />
                        <span style={{ fontWeight: 600 }}>Our Proven Method</span>
                    </div>
                    <h2 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: 8 }}>Your 4-Step Digital Audit & <span style={{ background: "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan))", WebkitBackgroundClip: "text", color: "transparent" }}>Growth Roadmap</span></h2>
                    <p style={{ color: "var(--secondary-text)" }}>A structured approach to identify weaknesses and unlock exponential growth.</p>
                </div>

                <div className="relative flex flex-col items-center">
                    {/* Horizontal Line Connector */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
                        {digitalAuditSteps.map((item, index) => (
                            <div key={index} className="relative z-10 text-center p-6 rounded-xl transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border-color)" }}>
                                <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center font-bold text-white text-xl" style={{ background: "linear-gradient(90deg, var(--brand-purple), var(--brand-blue))" }}>
                                    {item.step}
                                </div>
                                <h3 style={{ fontWeight: 800, fontSize: "1.25rem", marginBottom: 8 }}>{item.title}</h3>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
