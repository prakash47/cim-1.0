"use client";

import React, { useEffect, useState } from 'react';
import { Star, Award } from 'lucide-react';

export default function Testimonials() {
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    const testimonials = [
        {
            company: "Ved Solutions",
            industry: "IT & QA",
            quote:
                "CIM increased our qualified B2B leads by 320% in 3 months and lowered our CAC significantly — they are growth partners, not vendors.",
            result: "320% Lead Increase",
            avatar: "V",
        },
        {
            company: "Maple Solutions",
            industry: "EdTech",
            quote:
                "AI chatbots and automations saved our team 200+ hours a month and lifted student engagement by 85%.",
            result: "200+ Hours Saved",
            avatar: "M",
        },
        {
            company: "HealthCare Plus",
            industry: "Healthcare",
            quote:
                "With their SEO and content strategy we tripled organic traffic in 6 months and dominated competitive keywords.",
            result: "3x Organic Traffic",
            avatar: "H",
        },
    ];

    useEffect(() => {
        const int = setInterval(() => {
            setTestimonialIndex((i) => (i + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(int);
    }, [testimonials.length]);

    return (
        <section className="py-20" style={{ backgroundColor: "var(--background)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-64">
                <div style={{ textAlign: "center", marginBottom: 40 }}>
                    <div style={{ display: "inline-flex", gap: 8, padding: "8px 16px", borderRadius: 999, backgroundColor: "var(--card-bg)", border: "1px solid var(--border-color)", marginBottom: 12 }}>
                        <Star className="w-4 h-4" style={{ color: "var(--brand-yellow)" }} />
                        <span style={{ fontWeight: 700 }}>What Our Clients Say</span>
                    </div>
                    <h2 style={{ fontSize: "2.5rem", fontWeight: 900 }}>Trusted by <span style={{ background: "linear-gradient(90deg, var(--brand-purple), var(--brand-orange))", WebkitBackgroundClip: "text", color: "transparent" }}>Industry Leaders</span></h2>
                </div>

                <div style={{ padding: 32, borderRadius: 24, border: "2px solid var(--border-color)", backgroundColor: "var(--card-bg)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
                    <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
                        <div style={{ width: 96, height: 96, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan))", color: "#fff", fontSize: 28, fontWeight: 800, flexShrink: 0 }}>
                            {testimonials[testimonialIndex].avatar}
                        </div>

                        <div style={{ flex: 1 }}>
                            <p style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, fontStyle: "italic" }}>"{testimonials[testimonialIndex].quote}"</p>
                            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
                                <div style={{ fontWeight: 800 }}>{testimonials[testimonialIndex].company}</div>
                                <div style={{ color: "var(--secondary-text)" }}>{testimonials[testimonialIndex].industry}</div>
                            </div>
                            <div style={{ display: "inline-flex", gap: 8, alignItems: "center", padding: "8px 12px", borderRadius: 999, backgroundColor: "var(--background)", border: "1px solid var(--border-color)" }}>
                                <Award className="w-4 h-4" style={{ color: "var(--brand-blue)" }} />
                                <span style={{ fontWeight: 700, fontSize: "0.875rem" }}>{testimonials[testimonialIndex].result}</span>
                            </div>
                        </div>

                        <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                            {testimonials.map((_, i) => (
                                <button key={i} onClick={() => setTestimonialIndex(i)} style={{ width: i === testimonialIndex ? 40 : 8, height: 8, borderRadius: 999, backgroundColor: i === testimonialIndex ? "var(--brand-blue)" : "var(--border-color)", transition: "all .2s" }} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
