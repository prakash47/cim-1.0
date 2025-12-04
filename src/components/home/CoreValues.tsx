"use client";

import React from 'react';
import { Layers, Briefcase, Heart } from 'lucide-react';

export default function CoreValues() {
    const coreValues = [
        {
            icon: <Layers className="w-6 h-6" />,
            title: "Full-Stack Strategy",
            description: "We cover everything from brand identity and web development to performance marketing and AI automation.",
            color: "var(--brand-blue)",
        },
        {
            icon: <Briefcase className="w-6 h-6" />,
            title: "Measurable ROI",
            description: "Every campaign is tied to a clear business metric. We focus on unit economics, not vanity metrics.",
            color: "var(--brand-yellow)",
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Partner-Centric Approach",
            description: "We embed with your team, offering transparent communication and fractional leadership to drive results.",
            color: "var(--brand-purple)",
        },
    ];

    return (
        <section id="core-values" className="py-20" style={{ backgroundColor: "var(--background)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                <div className="text-center mb-12">
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, backgroundColor: "var(--card-bg)", border: "1px solid var(--border-color)", marginBottom: 16 }}>
                        <Heart className="w-4 h-4" style={{ color: "var(--brand-purple)" }} />
                        <span style={{ fontWeight: 600 }}>Our Philosophy</span>
                    </div>
                    <h2 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: 8 }}>Why CIM is your <span style={{ background: "linear-gradient(90deg, var(--brand-yellow), var(--brand-orange))", WebkitBackgroundClip: "text", color: "transparent" }}>Growth Partner</span></h2>
                    <p style={{ color: "var(--secondary-text)" }}>Our approach is built on transparency, measurable results, and deep partnership.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {coreValues.map((value, index) => (
                        <div key={index} className="p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                            <div style={{ display: "inline-flex", padding: 16, borderRadius: 12, color: "#fff", marginBottom: 16, background: value.color }}>
                                {value.icon}
                            </div>
                            <h3 style={{ fontWeight: 800, fontSize: "1.5rem", marginBottom: 8 }}>{value.title}</h3>
                            <p style={{ color: "var(--secondary-text)" }}>{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
