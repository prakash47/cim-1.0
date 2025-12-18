"use client";

import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function CTA() {
    return (
        <section className="py-20" style={{ backgroundColor: "var(--background)" }}>
            <div className="mx-auto max-w-6xl px-6 md:px-12 xl:px-20">
                <div style={{ padding: 48, borderRadius: 16, background: "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan))", color: "#fff", textAlign: "center", boxShadow: "0 15px 40px rgba(0, 138, 193, 0.3)" }}>
                    <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 12 }}>Ready to accelerate your digital growth?</h2>
                    <p style={{ color: "rgba(255,255,255,0.9)", marginBottom: 20 }}>Book a call, request a proposal, or get a free site audit - we'll respond within 24 hours.</p>

                    <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                        <button style={{ padding: "14px 28px", borderRadius: 999, background: "#fff", color: "var(--brand-blue)", fontWeight: 800, transition: "all 0.3s" }} className="hover:bg-gray-100">Book a Call <ChevronRight className="w-4 h-4 inline-block ml-2" /></button>
                        <button style={{ padding: "14px 28px", borderRadius: 999, background: "transparent", border: "2px solid rgba(255,255,255,0.3)", color: "#fff", fontWeight: 700, transition: "all 0.3s" }} className="hover:bg-white hover:text-cyan-600">Request Proposal</button>
                        <button style={{ padding: "14px 28px", borderRadius: 999, background: "transparent", border: "2px solid rgba(255,255,255,0.3)", color: "#fff", fontWeight: 700, transition: "all 0.3s" }} className="hover:bg-white hover:text-cyan-600">Get Free Audit</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
