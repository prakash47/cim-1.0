"use client";

import React from 'react';
import { TrendingUp, Users, Star } from 'lucide-react';

export default function Stats() {
    const stats = [
        { value: "4x", label: "Average ROI", icon: <TrendingUp className="w-5 h-5" /> },
        { value: "1,500+", label: "Leads Monthly", icon: <Users className="w-5 h-5" /> },
        { value: "100%", label: "Satisfaction", icon: <Star className="w-5 h-5" /> },
    ];

    return (
        <section style={{ borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", backgroundColor: "var(--card-bg)" }} className="py-12">
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: 999, background: "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan))", color: "#fff", margin: "0 auto 10px" }}>
                                {stat.icon}
                            </div>
                            <div style={{ fontSize: 32, fontWeight: 800, background: "linear-gradient(90deg, var(--brand-blue), var(--brand-purple))", WebkitBackgroundClip: "text", color: "transparent" }}>{stat.value}</div>
                            <div style={{ color: "var(--secondary-text)", fontWeight: 600 }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
