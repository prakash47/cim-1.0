"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Sparkles, ChevronRight, Play, BarChart3, Lightbulb, ArrowRight } from 'lucide-react';

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
                            <Link
                                href="/contact"
                                className="group relative px-6 py-3 md:px-8 md:py-4 text-sm md:text-base text-white font-bold rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                                style={{ background: "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan))" }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Start Your Digital Audit
                                    <ChevronRight className="w-5 h-5" />
                                </span>
                            </Link>

                            {/* <button
                                className="group px-6 py-3 md:px-8 md:py-4 text-sm md:text-base border rounded-full font-bold hover:border-color transition-all duration-300 flex items-center gap-2"
                                style={{ borderColor: "var(--border-color)" }}
                            >
                                <Play className="w-5 h-5" />
                                Watch Success Stories
                            </button> */}
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

                    {/* Right Side - Case Studies */}
                    <aside className={`lg:col-span-5 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="space-y-6">
                            {/* Testriq Case Study Card */}
                            <div
                                className="relative p-6 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    border: "1px solid var(--border-color)",
                                }}
                            >
                                <div style={{ position: "absolute", right: -20, top: -20, width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(90deg, var(--brand-purple), var(--brand-cyan))", filter: "blur(30px)", opacity: 0.2 }} />

                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        {/* Testriq Logo Placeholder */}
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden"
                                            style={{ backgroundColor: "var(--background)", border: "1px solid var(--border-color)" }}
                                        >
                                            <img
                                                src="/images/logos/testriq-logo.png"
                                                alt="Testriq"
                                                className="w-10 h-10 object-contain"
                                                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).parentElement!.innerHTML = '<span style="font-weight:700;font-size:14px;">T</span>'; }}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-bold" style={{ color: "var(--foreground)" }}>Testriq</h3>
                                            <p className="text-xs" style={{ color: "var(--secondary-text)" }}>QA & Testing Solutions</p>
                                        </div>
                                    </div>
                                    <div style={{ padding: "4px 12px", borderRadius: 999, background: "linear-gradient(90deg, var(--brand-purple), var(--brand-cyan))", color: "#fff", fontWeight: 600, fontSize: 12 }}>
                                        Case Study
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="p-3 rounded-xl" style={{ backgroundColor: "var(--background)", border: "1px solid var(--border-color)" }}>
                                        <div className="text-2xl font-black" style={{ background: "linear-gradient(90deg, var(--brand-purple), var(--brand-cyan))", WebkitBackgroundClip: "text", color: "transparent" }}>+180%</div>
                                        <div className="text-xs" style={{ color: "var(--secondary-text)" }}>Lead Generation</div>
                                    </div>
                                    <div className="p-3 rounded-xl" style={{ backgroundColor: "var(--background)", border: "1px solid var(--border-color)" }}>
                                        <div className="text-2xl font-black" style={{ background: "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan))", WebkitBackgroundClip: "text", color: "transparent" }}>3x</div>
                                        <div className="text-xs" style={{ color: "var(--secondary-text)" }}>Website Traffic</div>
                                    </div>
                                </div>
                            </div>

                            {/* CDPL Case Study Card */}
                            <div
                                className="relative p-6 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    border: "1px solid var(--border-color)",
                                }}
                            >
                                <div style={{ position: "absolute", left: -20, bottom: -20, width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))", filter: "blur(30px)", opacity: 0.2 }} />

                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        {/* CDPL Logo Placeholder */}
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden"
                                            style={{ backgroundColor: "var(--background)", border: "1px solid var(--border-color)" }}
                                        >
                                            <img
                                                src="/images/logos/cdpl-logo.png"
                                                alt="CDPL"
                                                className="w-10 h-10 object-contain"
                                                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).parentElement!.innerHTML = '<span style="font-weight:700;font-size:14px;">C</span>'; }}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-bold" style={{ color: "var(--foreground)" }}>CDPL</h3>
                                            <p className="text-xs" style={{ color: "var(--secondary-text)" }}>Software Training Institute</p>
                                        </div>
                                    </div>
                                    <div style={{ padding: "4px 12px", borderRadius: 999, background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))", color: "#fff", fontWeight: 600, fontSize: 12 }}>
                                        Case Study
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="p-3 rounded-xl" style={{ backgroundColor: "var(--background)", border: "1px solid var(--border-color)" }}>
                                        <div className="text-2xl font-black" style={{ background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))", WebkitBackgroundClip: "text", color: "transparent" }}>+250%</div>
                                        <div className="text-xs" style={{ color: "var(--secondary-text)" }}>Online Inquiries</div>
                                    </div>
                                    <div className="p-3 rounded-xl" style={{ backgroundColor: "var(--background)", border: "1px solid var(--border-color)" }}>
                                        <div className="text-2xl font-black" style={{ background: "linear-gradient(90deg, var(--brand-orange), var(--brand-yellow))", WebkitBackgroundClip: "text", color: "transparent" }}>45%</div>
                                        <div className="text-xs" style={{ color: "var(--secondary-text)" }}>Cost Reduction</div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="flex items-center justify-center gap-4 text-center">
                                <div className="flex-1 p-4 rounded-2xl" style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border-color)" }}>
                                    <div className="text-2xl font-black" style={{ color: "var(--foreground)" }}>50+</div>
                                    <div className="text-xs" style={{ color: "var(--secondary-text)" }}>Projects</div>
                                </div>
                                <div className="flex-1 p-4 rounded-2xl" style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border-color)" }}>
                                    <div className="text-2xl font-black" style={{ color: "var(--foreground)" }}>98%</div>
                                    <div className="text-xs" style={{ color: "var(--secondary-text)" }}>Satisfaction</div>
                                </div>
                                <div className="flex-1 p-4 rounded-2xl" style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border-color)" }}>
                                    <div className="text-2xl font-black" style={{ color: "var(--foreground)" }}>24/7</div>
                                    <div className="text-xs" style={{ color: "var(--secondary-text)" }}>Support</div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

        </section>
    );
}
