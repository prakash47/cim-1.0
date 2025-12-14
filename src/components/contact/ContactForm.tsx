// components/about/ContactForm.tsx
"use client";

import { useState, useEffect } from "react";
import { Users, Send, CheckCircle, Star, TrendingUp, Phone, Mail, MapPin } from "lucide-react";

export default function ContactForm() {
    // Mobile mockup state
    const [messageIndex, setMessageIndex] = useState(0);
    const [particles, setParticles] = useState<Array<{ x: number; y: number; delay: number }>>([]);

    useEffect(() => {
        const msgInterval = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % 3);
        }, 4000);
        return () => clearInterval(msgInterval);
    }, []);

    useEffect(() => {
        const newParticles = Array.from({ length: 12 }, (_, i) => ({ x: Math.random() * 100, y: Math.random() * 100, delay: i * 0.15 }));
        setParticles(newParticles);
    }, []);

    const messages = [
        { text: "Hello! Need help with your project?", from: "Team", time: "2m ago" },
        { text: "We're here to help you grow!", from: "Team", time: "1m ago" },
        { text: "Let's discuss your requirements!", from: "Team", time: "Just now" },
    ];

    const features = [
        { icon: CheckCircle, text: "Fast Response", colorVar: "--brand-teal" },
        { icon: Star, text: "Expert Team", colorVar: "--brand-yellow" },
        { icon: TrendingUp, text: "Proven Results", colorVar: "--brand-blue" },
    ];

    const gradient = (startVar: string, endVar: string, angle = "135deg") =>
        `linear-gradient(${angle}, var(${startVar}), var(${endVar}))`;

    return (
        <section className="py-12 lg:py-20" style={{ background: "var(--background)", color: "var(--foreground)" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Grid: mobile mockup (left) + sidebar (right on lg) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* RIGHT COLUMN - Enhanced Visual Animation */}
                    <div className="relative lg:h-[600px] flex items-start mt-6 justify-center animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
                        <div className="relative w-full max-w-lg">
                            {/* Main 3D Card Stack */}
                            <div className="relative h-[500px]">
                                {/* Floating Device Mockup */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {/* Phone Frame */}
                                    <div
                                        className="relative w-72 h-[500px] rounded-[3rem] shadow-2xl p-3 hover:scale-105 transition-transform duration-500"
                                        style={{ background: "black", border: `1px solid var(--border-color)` }}
                                    >
                                        {/* Screen */}
                                        <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(255,255,255,1))" }}>
                                            {/* Status Bar */}
                                            <div className="h-8 flex items-center justify-between px-6 text-xs" style={{ background: gradient("--brand-blue", "--brand-teal", "90deg"), color: "#fff" }}>
                                                <span>9:41</span>
                                                <div className="flex gap-1">
                                                    <div className="w-1 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.9)" }} />
                                                    <div className="w-1 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.9)" }} />
                                                    <div className="w-1 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.9)" }} />
                                                </div>
                                            </div>

                                            {/* Chat Interface */}
                                            <div className="h-full p-4 space-y-4 overflow-hidden" style={{ background: "linear-gradient(180deg, rgba(250,250,250,1), rgba(255,255,255,1))" }}>
                                                {/* Header */}
                                                <div className="flex items-center gap-3 pb-3 border-b" style={{ borderColor: "var(--border-color)" }}>
                                                    <div className="relative">
                                                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `linear-gradient(135deg, var(--brand-blue), var(--brand-teal))` }}>
                                                            <Users className="w-5 h-5 text-white" />
                                                        </div>
                                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full" style={{ background: "var(--brand-teal)", border: `2px solid var(--card-bg)` }} />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-black">
                                                            Support Team
                                                        </h3>
                                                        <p className="text-xs flex items-center gap-1" style={{ color: "var(--brand-teal)" }}>
                                                            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--brand-teal)" }} />
                                                            Online
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Messages */}
                                                <div className="space-y-3">
                                                    {messages.map((msg, idx) => (
                                                        <div key={idx} className={`transform transition-all duration-500 ${messageIndex === idx ? "opacity-100 translate-y-0" : "opacity-40 -translate-y-2"}`}>
                                                            <div className="flex gap-2 items-end">
                                                                <div className="flex-1">
                                                                    <div className="rounded-2xl rounded-bl-sm p-3 shadow-md" style={{ background: "var(--card-bg)", border: `1px solid var(--border-color)` }}>
                                                                        <p className="text-sm" style={{ color: "var(--foreground)" }}>
                                                                            {msg.text}
                                                                        </p>
                                                                    </div>
                                                                    <p className="text-xs mt-1 ml-2" style={{ color: "var(--secondary-text)" }}>
                                                                        {msg.time}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}

                                                </div>

                                                {/* Input Area */}
                                                <div className="absolute py-4 px-4 left-0 right-0 bottom-3">
                                                    <div className="flex gap-2 rounded-full p-2 border" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
                                                        <input type="text" placeholder="Type your message..." className="flex-1 px-4 py-2 text-sm bg-transparent outline-none w-[80%]" readOnly style={{ color: "var(--foreground)" }} />
                                                        <button className="w-10 h-10 rounded-full flex items-center justify-center transition-transform" style={{ background: gradient("--brand-blue", "--brand-teal", "135deg") }}>
                                                            <Send className="w-5 h-5 text-white" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Notch */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 rounded-b-2xl" style={{ background: "black" }} />
                                    </div>
                                </div>

                                {/* Floating Feature Cards (hidden on small screens) */}
                                {features.map((feature, idx) => {
                                    const Icon = feature.icon;
                                    return (
                                        <div
                                            key={idx}
                                            className="absolute hidden md:block rounded-xl p-3 shadow-xl border cursor-pointer"
                                            style={{
                                                top: `${20 + idx * 30}%`,
                                                right: idx === 1 ? "auto" : "-10%",
                                                left: idx === 1 ? "-10%" : "auto",
                                                animationDelay: `${idx * 0.5}s`,
                                                background: "var(--card-bg)",
                                                borderColor: "var(--border-color)",
                                            }}
                                        >
                                            <div className="flex items-center gap-2">
                                                <Icon className="w-5 h-5" style={{ color: `var(${feature.colorVar})` }} />
                                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                                    {feature.text}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}

                                {/* Particle Animation Background */}
                                <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
                                    {particles.map((particle, idx) => (
                                        <div
                                            key={idx}
                                            style={{
                                                position: "absolute",
                                                width: 4,
                                                height: 4,
                                                borderRadius: 9999,
                                                left: `${particle.x}%`,
                                                top: `${particle.y}%`,
                                                background: "var(--brand-blue)",
                                                opacity: 0.35,
                                                animationDelay: `${particle.delay}s`,
                                                animationName: "particle",
                                                animationDuration: "4s",
                                                animationTimingFunction: "ease-in-out",
                                                animationIterationCount: "infinite",
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Glow Effects */}
                                <div
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse -z-20"
                                    style={{
                                        width: 384,
                                        height: 384,
                                        background:
                                            "radial-gradient(circle at center, rgba(0,138,193,0.08), rgba(188,63,235,0.03) 40%, rgba(0,239,214,0.02) 70%)",
                                    }}
                                />
                            </div>

                            {/* Bottom Notification Card */}
                            <div
                                className="hidden md:block absolute -bottom-14 left-1/2 -translate-x-2/3 rounded-2xl p-4 shadow-2xl border w-80"
                                style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: `linear-gradient(135deg, var(--brand-teal), var(--brand-blue))` }}>
                                        <CheckCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            Message Sent!
                                        </h4>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            We'll respond within 24 hours
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Sidebar with quick contact info */}
                    <aside className="hidden lg:block">
                        <div
                            className="rounded-3xl p-6 sticky top-20"
                            style={{
                                background: "var(--card-bg)",
                                border: `1px solid var(--border-color)`,
                                boxShadow: "var(--card-shadow, 0 10px 30px rgba(0,0,0,0.04))",
                            }}
                        >
                            <h4 className="text-lg font-semibold mb-4" style={{ color: "var(--foreground)" }}>
                                Quick Contact
                            </h4>

                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: gradient("--brand-blue", "--brand-teal") }}>
                                    <Phone className="w-5 h-5" style={{ color: "white" }} />
                                </div>
                                <div>
                                    <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                        Phone
                                    </div>
                                    <a href="tel:+919004988859" style={{ color: "var(--foreground)", fontWeight: 600, display: "block" }}>
                                        +91 90049 88859
                                    </a>
                                    <a href="tel:+917700995410" style={{ color: "var(--foreground)", fontWeight: 600, display: "block" }}>
                                        +91 77009 95410
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: gradient("--brand-purple", "--brand-yellow") }}>
                                    <Mail className="w-5 h-5" style={{ color: "white" }} />
                                </div>
                                <div>
                                    <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                        Email
                                    </div>
                                    <a href="mailto:contact@cinuteinfomedia.com" style={{ color: "var(--foreground)", fontWeight: 600, display: "block" }}>
                                        contact@cinuteinfomedia.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-12 h-10 rounded-lg flex items-center justify-center" style={{ background: gradient("--brand-cyan", "--brand-teal") }}>
                                    <MapPin className="w-5 h-5" style={{ color: "white" }} />
                                </div>
                                <div>
                                    <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                        Address
                                    </div>
                                    <a
                                        href="https://maps.app.goo.gl/Lk3iaPrxyzPYeh3y9"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ color: "var(--foreground)", fontWeight: 600, display: "block" }}
                                    >
                                        Office #3, Ashley Tower, Beverly Park, Mira Road (E), Mumbai, 401107
                                    </a>
                                </div>
                            </div>

                            <div className="mt-6 text-sm" style={{ color: "var(--secondary-text)" }}>
                                <strong style={{ color: "var(--foreground)" }}>Availability:</strong> Mon - Fri, 9:30 AM - 6:30 PM
                            </div>

                            <div className="mt-6">
                                <a
                                    href="/contact"
                                    className="block text-center px-4 py-2 rounded-lg font-semibold transition"
                                    style={{ background: "var(--brand-blue)", color: "white" }}
                                >
                                    Request a Call
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <style jsx>{`
        @keyframes particle {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-100px) scale(1);
          }
        }
        .animate-pulse {
          animation: pulse 2.5s infinite;
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.03);
            opacity: 0.85;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
      `}</style>
        </section>
    );
}
