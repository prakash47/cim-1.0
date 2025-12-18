"use client";

import { Sparkles, ArrowRight, Home, ChevronRight, Zap, MessageCircle, Brain, Gauge } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            className="relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            {/* Animated Background with AI-centric visuals */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-chatbot) 15%, transparent)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-blue) 15%, transparent)",
                        animationDelay: "1s",
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-blue) 15%, transparent)",
                        animationDelay: "2s",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 py-12 relative">
                {/* Breadcrumbs */}
                <nav
                    className="flex items-center gap-2 text-sm mb-5 justify-center lg:justify-start animate-fadeIn"
                    aria-label="Breadcrumb"
                    style={{ animationDelay: "0.1s", animationFillMode: "both" }}
                >
                    <Link
                        href="/"
                        className="flex items-center gap-1 hover:underline transition-colors"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        <Home className="w-4 h-4" />
                        Home
                    </Link>

                    <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />

                    <Link
                        href="/services"
                        className="hover:underline transition-colors"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Services
                    </Link>

                    <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />

                    <span
                        className="font-semibold"
                        style={{ color: "var(--brand-chatbot)" }}
                    >
                        AI-Powered Chatbots
                    </span>
                </nav>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div
                        className="text-center lg:text-left animate-fadeIn"
                        style={{ animationDelay: "0.2s", animationFillMode: "both" }}
                    >
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border transition-colors"
                            style={{
                                background:
                                    "linear-gradient(90deg, color-mix(in srgb, var(--brand-chatbot) 8%, transparent), color-mix(in srgb, var(--brand-blue) 8%, transparent))",
                                borderColor: "color-mix(in srgb, var(--brand-chatbot) 20%, transparent)",
                                color: "var(--brand-chatbot)",
                            }}
                        >
                            <Sparkles className="w-4 h-4" style={{ color: "var(--brand-chatbot)" }} />
                            <span className="text-sm font-semibold">AI-Powered Chatbots</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background:
                                        "var(--brand-chatbot)",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                <span style={{ color: "var(--foreground)" }}>Intelligent</span> Conversations <span style={{ color: "var(--foreground)" }}>at Scale</span>
                            </span>
                        </h1>

                        {/* Underline */}
                        <div
                            className="w-32 h-1.5 mb-8 rounded-full lg:mx-0 mx-auto mt-4"
                            style={{
                                background:
                                    "linear-gradient(90deg, var(--brand-chatbot), var(--brand-blue))",
                            }}
                        />

                        {/* Tagline */}
                        <p className="text-xl md:text-2xl mb-8" style={{ color: "var(--secondary-text)" }}>
                            Deploy <span style={{ color: "var(--brand-chatbot)", fontWeight: 700 }}>AI-Powered Chatbots</span> that understand context, engage customers, and drive conversions <span style={{ color: "var(--brand-blue)", fontWeight: 700 }}>24/7</span>.
                        </p>

                        {/* Feature Highlights */}
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-chatbot) 8%, transparent)",
                                }}
                            >
                                <Brain className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-chatbot)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    AI-Powered
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-chatbot) 8%, transparent)",
                                }}
                            >
                                <MessageCircle className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-chatbot)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    24/7 Support
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-chatbot) 8%, transparent)",
                                }}
                            >
                                <Zap className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-chatbot)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Lightning Fast
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-chatbot) 8%, transparent)",
                                }}
                            >
                                <Gauge className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-chatbot)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Scalable
                                </span>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-3 gap-4 mb-8 p-6 rounded-2xl"
                            style={{
                                backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid var(--border-color)",
                            }}
                        >
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, var(--brand-blue), var(--brand-chatbot))",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    10M+
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Conversations
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, var(--brand-blue), var(--brand-chatbot))",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    98%
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Satisfaction
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, var(--brand-blue), var(--brand-chatbot))",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    50+
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Industries
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[var(--brand-chatbot)] to-[#008ac1] hover:from-[var(--brand-chatbot)] hover:to-[var(--brand-chatbot)] text-white rounded-full text-sm md:text-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Build Your AI Chatbot
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* RIGHT VISUAL ELEMENT */}
                    <div
                        className="relative flex flex-col items-center gap-12 justify-center animate-fadeIn -mt-10"
                        style={{ animationDelay: "0.3s", animationFillMode: "both" }}
                    >
                        <div
                            className="absolute inset-0 rounded-3xl blur-2xl"
                            style={{
                                background:
                                    "linear-gradient(135deg, color-mix(in srgb, var(--brand-chatbot) 10%, transparent), color-mix(in srgb, var(--brand-blue) 10%, transparent))",
                            }}
                        />

                        {/* Feature Card */}
                        <div
                            className="relative flex items-center justify-center rounded-3xl shadow-2xl border hover:scale-105 transition-transform duration-300 max-w-lg w-full"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                                backdropFilter: "blur(6px)",
                            }}
                        >
                            <Image
                                src="/images/services-images/ai-chatbot-illustration-2.png"
                                alt="AI-Powered Chatbots"
                                width={638}
                                height={565}
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 638px"
                                className="w-[90%] h-[90%] rounded-3xl p-5"
                            />
                        </div>

                        {/* Additional Info Section */}
                        <div
                            className="w-full p-6 rounded-2xl border"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                                backdropFilter: "blur(10px)",
                            }}
                        >
                            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                Why Choose Us?
                            </h2>
                            <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
                                We combine cutting-edge AI technology with proven methodologies to deliver intelligent chatbot solutions that enhance customer experiences and drive business growth.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-chatbot) 15%, transparent)",
                                        color: "var(--brand-chatbot)",
                                    }}
                                >
                                    NLP & ML
                                </span>
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-chatbot) 15%, transparent)",
                                        color: "var(--brand-chatbot)",
                                    }}
                                >
                                    Multi-Platform
                                </span>
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-chatbot) 15%, transparent)",
                                        color: "var(--brand-chatbot)",
                                    }}
                                >
                                    24/7 Support
                                </span>
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-chatbot) 15%, transparent)",
                                        color: "var(--brand-chatbot)",
                                    }}
                                >
                                    Analytics
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
