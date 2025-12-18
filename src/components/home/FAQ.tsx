"use client";

import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

export default function FAQ() {
    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    const faqs = [
        {
            q: "How quickly can I expect results from performance marketing?",
            a: "Initial improvements (lower CAC, better CTR) are often visible within 4–6 weeks. Scalable results and sustainable ROAS generally appear within 3–6 months as we iterate on data.",
        },
        {
            q: "Do you offer fixed-price projects or retainers?",
            a: "We offer both. Small website builds are typically fixed-price; growth programs and multi-channel marketing are best structured as monthly retainers so we can iterate and optimize.",
        },
        {
            q: "Can you integrate with our existing CRM and analytics?",
            a: "Yes - we integrate with common CRMs (HubSpot, Salesforce), analytics (GA4), and data warehouses, plus custom systems via APIs.",
        },
        {
            q: "Do you offer help with hiring or building internal teams?",
            a: "We can help design role specs, interview frameworks and ramp-up plans; we also provide fractional leadership for marketing/product roles.",
        },
    ];

    return (
        <section className="py-20" style={{ backgroundColor: "var(--card-bg)" }}>
            <div className="mx-auto max-w-5xl px-6 md:px-12 xl:px-20">
                <div style={{ textAlign: "center", marginBottom: 24 }}>
                    <div style={{ display: "inline-flex", gap: 8, padding: "8px 16px", borderRadius: 999, backgroundColor: "var(--background)", border: "1px solid var(--border-color)", marginBottom: 12 }}>
                        <MessageSquare className="w-4 h-4" style={{ color: "var(--brand-cyan)" }} />
                        <span style={{ fontWeight: 700 }}>FAQ</span>
                    </div>
                    <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: 8 }}>Frequently Asked Questions</h2>
                    <p style={{ color: "var(--secondary-text)" }}>Answers to common questions about services, pricing and timelines</p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {faqs.map((faq, i) => (
                        <div key={i} style={{ backgroundColor: "var(--background)", border: "1px solid var(--border-color)", padding: 20, borderRadius: 12, transition: "all 0.3s" }} className="hover:shadow-md">
                            <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", padding: 0 }}>
                                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                                    <div style={{ width: 40, height: 40, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan))", color: "#fff", flexShrink: 0 }}>
                                        <MessageSquare className="w-5 h-5" />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: 700, marginBottom: 8 }}>{faq.q}</div>
                                        {faqOpen === i && <div style={{ color: "var(--secondary-text)", marginTop: 8 }}>{faq.a}</div>}
                                    </div>
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
