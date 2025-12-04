"use client";

import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Industries() {
    const industriesServed = [
        "IT & SaaS",
        "EdTech & E-Learning",
        "Healthcare & Wellness",
        "Financial Services",
        "E-Commerce & Retail",
        "B2B Professional Services",
    ];

    return (
        <section id="industries" className="py-20" style={{ backgroundColor: "var(--background)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                <div className="text-center mb-12">
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, backgroundColor: "var(--card-bg)", border: "1px solid var(--border-color)", marginBottom: 16 }}>
                        <Briefcase className="w-4 h-4" style={{ color: "var(--brand-teal)" }} />
                        <span style={{ fontWeight: 600 }}>Industry Focus</span>
                    </div>
                    <h2 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: 8 }}>Expertise Across <span style={{ background: "linear-gradient(90deg, var(--brand-teal), var(--brand-cyan))", WebkitBackgroundClip: "text", color: "transparent" }}>Key Sectors</span></h2>
                    <p style={{ color: "var(--secondary-text)" }}>Our experience spans diverse industries, ensuring tailored strategies that deliver results.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {industriesServed.map((industry, index) => (
                        <div key={index} className="px-6 py-3 rounded-full font-medium transition-all duration-300" style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--brand-teal)", color: "var(--foreground)" }}>
                            {industry}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
