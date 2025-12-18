"use client";

import React, { useEffect, useState } from 'react';
import { Sparkles, ChevronRight, Play, BarChart3, Lightbulb, ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [newsletterMsg, setNewsletterMsg] = useState("");

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background (uses brand colors) */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute w-[800px] h-[800px] rounded-full mix-blend-multiply filter blur-3xl opacity-16 transition-all duration-500 ease-out"
                    style={{
                        background: `radial-gradient(circle, var(--brand-purple) 0%, transparent 70%)`,
                        left: `${mousePosition.x - 400}px`,
                        top: `${mousePosition.y - 400}px`,
                    }}
                />
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-16 animate-blob" style={{ backgroundColor: "var(--brand-cyan)" }} />
                <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-16 animate-blob animation-delay-2000" style={{ backgroundColor: "var(--brand-yellow)" }} />
                <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-16 animate-blob animation-delay-4000" style={{ backgroundColor: "var(--brand-purple)" }} />

                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.02), transparent)" }} />
            </div>

            <div className="relative z-10 mx-auto px-6 md:px-12 xl:px-20 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Content */}
                    <div className={`lg:col-span-7 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold mb-6 shadow-lg animate-fade-in"
                            style={{ background: "linear-gradient(90deg, var(--brand-purple), var(--brand-cyan))" }}
                        >
                            <Sparkles className="w-4 h-4 animate-spin-slow" />
                            <span>Digital Presence & Growth Studio</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                            Dominate Your Digital Presence.
                            <br />
                            <span
                                className="bg-clip-text text-transparent animate-fade-in"
                                style={{ background: "linear-gradient(90deg, var(--brand-blue), var(--brand-purple), var(--brand-cyan)) ", WebkitBackgroundClip: "text", color: "transparent" }}
                            >
                                Engineered for Growth.
                            </span>
                        </h1>

                        <p className="text-xl max-w-2xl mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            We are your full-stack partner for online success, specializing in high-converting websites, strategic SEO, performance marketing, and AI-driven automation to ensure your brand stands out and scales.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <button
                                className="group relative px-6 py-3 md:px-8 md:py-4 text-sm md:text-base text-white font-bold rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                                style={{ background: "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan))" }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Start Your Digital Audit
                                    <ChevronRight className="w-5 h-5" />
                                </span>
                            </button>

                            <button
                                className="group px-6 py-3 md:px-8 md:py-4 text-sm md:text-base border rounded-full font-bold hover:border-color transition-all duration-300 flex items-center gap-2"
                                style={{ borderColor: "var(--border-color)" }}
                            >
                                <Play className="w-5 h-5" />
                                Watch Success Stories
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="group p-4 rounded-2xl" style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border-color)" }}>
                                <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg" style={{ background: "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan))", color: "#fff" }}>
                                        <BarChart3 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Data-first growth</h3>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Continuous testing, analytics & dashboards</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group p-4 rounded-2xl" style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border-color)" }}>
                                <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg" style={{ background: "linear-gradient(90deg, var(--brand-yellow), var(--brand-orange))", color: "var(--foreground)" }}>
                                        <Lightbulb className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Human-centered design</h3>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>UX backed by research</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side (Keeping the existing visual element) */}
                    <aside className={`lg:col-span-5 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="relative">
                            <div
                                className="relative p-8 rounded-3xl"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    border: "1px solid var(--border-color)",
                                    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                                }}
                            >
                                <div style={{ position: "absolute", right: -28, top: -28, width: 96, height: 96, borderRadius: "50%", background: "linear-gradient(90deg, var(--brand-purple), var(--brand-cyan))", filter: "blur(24px)", opacity: 0.2 }} />

                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <div className="text-sm mb-1" style={{ color: "var(--secondary-text)" }}>Monthly growth</div>
                                        <div className="text-4xl font-black" style={{ background: "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan))", WebkitBackgroundClip: "text", color: "transparent" }}>+320%</div>
                                    </div>
                                    <div style={{ padding: "6px 12px", borderRadius: 999, background: "linear-gradient(90deg, var(--brand-yellow), var(--brand-orange))", color: "var(--foreground)", fontWeight: 700 }}>
                                        Ved Solutions
                                    </div>
                                </div>

                                <div className="relative h-40 rounded-2xl p-4 mb-6" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.02), transparent)", border: "1px solid var(--border-color)" }}>
                                    <div className="relative flex items-end justify-around h-full gap-2">
                                        {[40, 55, 70, 85, 95, 100].map((height, i) => (
                                            <div
                                                key={i}
                                                className="w-full rounded-t-lg"
                                                style={{
                                                    height: `${height}%`,
                                                    background: "linear-gradient(180deg, var(--brand-blue), var(--brand-cyan))",
                                                    transition: "height .7s ease",
                                                    marginLeft: 6,
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center justify-between gap-3 flex-wrap">
                                    {["Ved", "Maple", "Health+"].map((name) => (
                                        <div key={name} style={{ padding: "8px 16px", borderRadius: 12, backgroundColor: "var(--background)", border: "1px solid var(--border-color)", fontWeight: 600 }}>
                                            {name}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 flex items-center justify-between">
                                    <a style={{ color: "var(--brand-blue)", fontWeight: 600 }} className="hover:underline" href="/case-studies">
                                        Read case study <ArrowRight className="w-4 h-4 inline-block ml-1" />
                                    </a>
                                    <a style={{ color: "var(--secondary-text)" }} href="/contact">
                                        Talk to expert →
                                    </a>
                                </div>
                            </div>

                            <div className="mt-6 p-6 rounded-2xl" style={{ background: "linear-gradient(90deg, var(--brand-purple), var(--brand-cyan))", color: "#fff", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}>
                                <div className="flex items-center gap-2 mb-3">
                                    <Mail className="w-5 h-5" />
                                    <h3 className="font-bold">Free Growth Checklist</h3>
                                </div>
                                <p className="text-sm text-white text-opacity-90 mb-4">Subscribe & receive a 12-point website growth checklist.</p>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        value={newsletterEmail}
                                        onChange={(e) => setNewsletterEmail(e.target.value)}
                                        style={{ padding: "12px 16px", borderRadius: 12, border: "none", flex: 1, color: "var(--foreground)" }}
                                    />
                                    <button
                                        onClick={() => {
                                            if (!newsletterEmail.includes("@")) {
                                                setNewsletterMsg("Please enter valid email");
                                                return;
                                            }
                                            setNewsletterMsg("Subscribed! Check inbox 📧");
                                            setNewsletterEmail("");
                                            setTimeout(() => setNewsletterMsg(""), 5000);
                                        }}
                                        className="font-bold"
                                        style={{ padding: "12px 18px", borderRadius: 12, background: "white", color: "var(--brand-blue)" }}
                                    >
                                        Subscribe
                                    </button>
                                </div>
                                {newsletterMsg && <div className="mt-3 text-sm" style={{ background: "rgba(255,255,255,0.1)", padding: 8, borderRadius: 8 }}>{newsletterMsg}</div>}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

        </section>
    );
}
