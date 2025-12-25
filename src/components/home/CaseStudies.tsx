"use client";

import React from 'react';
import Link from 'next/link';
import { Award, ArrowRight } from 'lucide-react';

export default function CaseStudies() {
    const caseStudies = [
        {
            company: "Ved Solutions",
            industry: "B2B SaaS",
            title: "Lead-gen overhaul that scaled pipeline",
            description: "Comprehensive funnel redesign, targeted content and a paid media program resulted in a 320% increase in qualified leads and a 45% reduction in CAC within 3 months.",
            metric: "+320%",
            metricLabel: "Leads",
            gradientStyle: { background: "linear-gradient(90deg, var(--brand-cyan), var(--brand-blue))" },
        },
        {
            company: "Maple",
            industry: "EdTech",
            title: "Automation & chatbot for student engagement",
            description: "Implemented an AI chatbot paired with CRM automation to reduce manual support and increase student engagement; saved 200+ hours per month and improved retention.",
            metric: "200h",
            metricLabel: "Saved",
            gradientStyle: { background: "linear-gradient(90deg, var(--brand-purple), var(--brand-cyan))" },
        },
        {
            company: "HealthCare Plus",
            industry: "Healthcare",
            title: "SEO & content growth program",
            description: "A targeted technical SEO program and topical content strategy tripled organic traffic across multiple service lines within 6 months.",
            metric: "3x",
            metricLabel: "Traffic",
            gradientStyle: { background: "linear-gradient(90deg, var(--brand-yellow), var(--brand-orange))" },
        },
    ];

    return (
        <section className="py-20" style={{ backgroundColor: "var(--card-bg)", borderTop: "1px solid var(--border-color)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <div style={{ display: "inline-flex", gap: 8, padding: "8px 16px", borderRadius: 999, backgroundColor: "var(--background)", border: "1px solid var(--border-color)", marginBottom: 12 }}>
                            <Award style={{ color: "var(--brand-yellow)" }} />
                            <span style={{ fontWeight: 600 }}>Client Success</span>
                        </div>
                        <h2 style={{ fontSize: "2.5rem", fontWeight: 900 }}>
                            Real projects, <span style={{ background: "linear-gradient(90deg, var(--brand-yellow), var(--brand-orange))", WebkitBackgroundClip: "text", color: "transparent" }}>measurable outcomes</span>
                        </h2>
                    </div>
                    {/* <Link href="/case-studies" style={{ color: "var(--brand-blue)", fontWeight: 600 }} className="hidden md:inline-flex items-center gap-2">View all cases <ArrowRight className="w-5 h-5" /></Link> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {caseStudies.map((cs) => (
                        <article key={cs.company} style={{ backgroundColor: "var(--background)", border: "1px solid var(--border-color)", borderRadius: 16, padding: 24, transition: "all 0.3s", transform: "translateY(0)", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }} className="hover:shadow-lg hover:-translate-y-1">
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 12 }}>
                                <div>
                                    <div style={{ color: "var(--secondary-text)", fontSize: 13, marginBottom: 6 }}>{cs.industry}</div>
                                    <div style={{ fontWeight: 800 }}>{cs.company}</div>
                                </div>
                                <div style={{ padding: "6px 12px", borderRadius: 999, color: "#fff", fontWeight: 700, ...cs.gradientStyle }}>
                                    {cs.metric}
                                    <div style={{ fontSize: 10, opacity: 0.9 }}>{cs.metricLabel}</div>
                                </div>
                            </div>

                            <h3 style={{ fontWeight: 800, marginBottom: 8 }}>{cs.title}</h3>
                            <p style={{ color: "var(--secondary-text)", marginBottom: 16 }}>{cs.description}</p>

                            {/* <Link href={`/case-studies/${cs.company.toLowerCase().replace(/\s+/g, "-")}`} style={{ color: "var(--brand-blue)", fontWeight: 600 }}>Read case study <ArrowRight className="w-4 h-4 inline-block ml-1" /></Link> */}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
