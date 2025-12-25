"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Zap, Globe, Palette, Search, Target, Share2, Bot, Workflow, Code, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services() {
    const [activeService, setActiveService] = useState<number | null>(0);

    const services = [
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Websites & Web Apps",
            slug: "web-design-development",
            bullets: [
                "Fast, accessible, SEO-friendly",
                "Conversion-first UX & analytics",
                "React / Next.js / Headless CMS",
            ],
            gradientStyle: { background: "linear-gradient(90deg, var(--brand-cyan), var(--brand-blue))" },
        },
        {
            icon: <Palette className="w-6 h-6" />,
            title: "Brand & Creative Design",
            slug: "brand-identity-design",
            bullets: ["Visual identity systems", "Design systems & guidelines", "Content & tone of voice"],
            gradientStyle: { background: "linear-gradient(90deg, var(--brand-purple), var(--brand-orange))" },
        },
        {
            icon: <Search className="w-6 h-6" />,
            title: "SEO & Content",
            slug: "organic-growth-seo",
            bullets: [
                "Keyword strategy & content plan",
                "On-page technical SEO & audits",
                "Link building & organic growth",
            ],
            gradientStyle: { background: "linear-gradient(90deg, var(--brand-yellow), var(--brand-orange))" },
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Performance Marketing",
            slug: "performance-marketing",
            bullets: ["Google & Meta ads", "Funnel optimisation", "CRO and tracking"],
            gradientStyle: { background: "linear-gradient(90deg, var(--brand-orange), var(--brand-purple))" },
        },
        {
            icon: <Share2 className="w-6 h-6" />,
            title: "Social & Community",
            slug: "social-media-marketing",
            bullets: ["Content calendar", "Community moderation", "Campaign creative"],
            gradientStyle: { background: "linear-gradient(90deg, var(--brand-teal), var(--brand-cyan))" },
        },
        {
            icon: <Bot className="w-6 h-6" />,
            title: "AI Chatbots & Automations",
            slug: "ai-powered-chatbots",
            bullets: ["Lead qualification flows", "CRM integrations", "Conversational UX"],
            gradientStyle: { background: "linear-gradient(90deg, var(--brand-cyan), var(--brand-purple))" },
        },
        {
            icon: <Workflow className="w-6 h-6" />,
            title: "Workflows & Integrations",
            slug: "ai-workflows-automations",
            bullets: ["Zapier / n8n / Custom APIs", "Data pipelines & reporting", "Event-driven automation"],
            gradientStyle: { background: "linear-gradient(90deg, var(--brand-purple), var(--brand-yellow))" },
        },
        {
            icon: <Code className="w-6 h-6" />,
            title: "Maintenance & Support",
            slug: "additional-support-services",
            bullets: ["Monitoring & backups", "A/B testing & experiments", "SLA-backed support"],
            gradientStyle: { background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))" },
        },
    ];

    return (
        <section className="py-20" style={{ backgroundColor: "var(--card-bg)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                <div className="text-center mb-12">
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, backgroundColor: "var(--background)", border: "1px solid var(--border-color)", marginBottom: 16 }}>
                        <Zap className="w-4 h-4" style={{ color: "var(--brand-yellow)" }} />
                        <span style={{ fontWeight: 600 }}>Full-Stack Digital Presence Services</span>
                    </div>
                    <h2 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: 8 }}>Services built for <span style={{ background: "linear-gradient(90deg, var(--brand-purple), var(--brand-cyan))", WebkitBackgroundClip: "text", color: "transparent" }}>scale</span></h2>
                    <p style={{ color: "var(--secondary-text)" }}>Modular services that work together to accelerate your growth trajectory</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <article
                            key={service.title}
                            onMouseEnter={() => setActiveService(idx)}
                            className="relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden"
                            style={{
                                backgroundColor: "var(--background)",
                                borderColor: activeService === idx ? "transparent" : "var(--border-color)",
                                boxShadow: activeService === idx ? "0 20px 60px rgba(0,0,0,0.1)" : undefined,
                                transform: activeService === idx ? "translateY(-8px) scale(1.02)" : undefined,
                            }}
                        >
                            {activeService === idx && <div style={{ position: "absolute", inset: 0, opacity: 0.06, borderRadius: 16, ...service.gradientStyle }} />}

                            <div style={{ position: "relative", zIndex: 10 }}>
                                <div style={{ display: "inline-flex", padding: 12, borderRadius: 12, color: "#fff", marginBottom: 12, ...service.gradientStyle }}>
                                    {service.icon}
                                </div>

                                <h3 style={{ fontWeight: 700, marginBottom: 8 }}>{service.title}</h3>

                                <ul style={{ marginBottom: 12, color: "var(--secondary-text)", listStyle: "none", padding: 0 }}>
                                    {service.bullets.map((bullet, i) => (
                                        <li key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 6 }}>
                                            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: "var(--brand-blue)" }} />
                                            <span className="text-sm">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 12, borderTop: "1px solid var(--border-color)" }}>
                                    <Link href={`/services/${service.slug}`} style={{ color: "var(--brand-blue)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}>
                                        Learn more <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <Link href="/contact" style={{ color: "var(--secondary-text)" }}>Get quote</Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
