"use client";

import React from 'react';
import { Lightbulb, ArrowRight } from 'lucide-react';

export default function BlogInsights() {
    const blogs = [
        {
            title: "The 2025 Playbook for Low-Cost Lead Gen",
            description: "A practical guide for founders to lower acquisition costs without sacrificing lead quality.",
            href: "/blog/low-cost-lead-gen",
        },
        {
            title: "How to Audit Your Funnel in 30 Minutes",
            description: "A checklist-driven approach to find revenue leaks and quick wins.",
            href: "/blog/funnel-audit",
        },
        {
            title: "A Beginner's Guide to AI Chatbots for Support",
            description: "What to ask your vendor, and how to measure ROI from automation.",
            href: "/blog/ai-chatbots",
        },
    ];

    return (
        <section className="py-20" style={{ backgroundColor: "var(--card-bg)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-24">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 24 }}>
                    <div>
                        <div style={{ display: "inline-flex", gap: 8, padding: "8px 16px", borderRadius: 999, backgroundColor: "var(--background)", border: "1px solid var(--border-color)", marginBottom: 12 }}>
                            <Lightbulb style={{ color: "var(--brand-yellow)" }} />
                            <span style={{ fontWeight: 600 }}>Latest Insights</span>
                        </div>
                        <h2 style={{ fontSize: "2.25rem", fontWeight: 900 }}>Strategies, tools & <span style={{ background: "linear-gradient(90deg, var(--brand-cyan), var(--brand-blue))", WebkitBackgroundClip: "text", color: "transparent" }}>growth playbooks</span></h2>
                    </div>
                    <a href="/blog" style={{ color: "var(--brand-blue)", fontWeight: 600 }} className="hidden md:inline-flex items-center gap-2">View all articles <ArrowRight className="w-5 h-5" /></a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogs.map((b) => (
                        <article key={b.title} style={{ backgroundColor: "var(--background)", border: "1px solid var(--border-color)", borderRadius: 16, padding: 24, transition: "all 0.3s", transform: "translateY(0)", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }} className="hover:shadow-lg hover:-translate-y-1">
                            <h3 style={{ fontWeight: 800, marginBottom: 8 }}>{b.title}</h3>
                            <p style={{ color: "var(--secondary-text)", marginBottom: 16 }}>{b.description}</p>
                            <a href={b.href} style={{ color: "var(--brand-blue)", fontWeight: 600 }}>Read article <ArrowRight className="w-4 h-4 inline-block ml-1" /></a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
