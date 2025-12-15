"use client";

import { Sparkles, ArrowRight, Home, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaRocket, FaChartLine, FaMobile, FaCode } from "react-icons/fa";
import { MdSpeed, MdSecurity } from "react-icons/md";


export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section
            className="relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-blue) 12%, transparent)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-cyan) 12%, transparent)",
                        animationDelay: "1s",
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-teal) 12%, transparent)",
                        animationDelay: "2s",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 py-12 relative">
                {/* Breadcrumbs */}
                <nav
                    className={`flex items-center gap-2 text-sm mb-5 justify-center lg:justify-start transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                    aria-label="Breadcrumb"
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
                        style={{ color: "var(--brand-blue)" }}
                    >
                        Web Design & Development
                    </span>
                </nav>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div
                        className={`text-center lg:text-left transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            }`}
                    >
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border transition-colors"
                            style={{
                                background:
                                    "linear-gradient(90deg, color-mix(in srgb, var(--brand-blue) 8%, transparent), color-mix(in srgb, var(--brand-teal) 8%, transparent))",
                                borderColor: "color-mix(in srgb, var(--brand-blue) 20%, transparent)",
                                color: "var(--brand-blue)",
                            }}
                        >
                            <Sparkles className="w-4 h-4" style={{ color: "var(--brand-blue)" }} />
                            <span className="text-sm font-semibold">Web Design & Development</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background:
                                        "var(--brand-blue)",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                Elevate Your Digital Presence
                            </span>
                        </h1>

                        {/* Underline */}
                        <div
                            className="w-32 h-1.5 mb-8 rounded-full lg:mx-0 mx-auto mt-4"
                            style={{
                                background:
                                    "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))",
                            }}
                        />

                        {/* Tagline */}
                        <p className="text-xl md:text-2xl mb-8" style={{ color: "var(--secondary-text)" }}>
                            As a premier <span style={{ color: "var(--brand-blue)", fontWeight: 700 }}>Web Development Company</span>, we deliver fast, scalable, and SEO-optimized <span style={{ color: "var(--brand-teal)", fontWeight: 700 }}>Custom Website Development</span> solutions that drive business growth.
                        </p>

                        {/* Feature Highlights */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-blue) 8%, transparent)",
                                }}
                            >
                                <FaRocket className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-blue)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Fast Launch
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-blue) 8%, transparent)",
                                }}
                            >
                                <MdSpeed className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-blue)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Lightning Fast
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-blue) 8%, transparent)",
                                }}
                            >
                                <FaMobile className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-blue)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Mobile First
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-blue) 8%, transparent)",
                                }}
                            >
                                <FaChartLine className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-blue)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    SEO Ready
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-blue) 8%, transparent)",
                                }}
                            >
                                <MdSecurity className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-blue)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Secure
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-blue) 8%, transparent)",
                                }}
                            >
                                <FaCode className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-blue)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Clean Code
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
                                        background: "linear-gradient(90deg, var(--brand-teal), var(--brand-blue))",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    500+
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Projects Delivered
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, var(--brand-teal), var(--brand-blue))",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    98%
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Client Satisfaction
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, var(--brand-teal), var(--brand-blue))",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    24/7
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Support Available
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold bg-gradient-to-r from-[#008ac1] to-[#00b5ca] text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                Schedule a Free Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#services"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold border transition-all duration-300"
                                style={{
                                    borderColor: "var(--border-color)",
                                    color: "var(--foreground)",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--hover-bg)")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                            >
                                Explore Services
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT VISUAL ELEMENT */}
                    <div
                        className={`relative flex flex-col items-center gap-12 justify-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            }`}
                    >
                        <div
                            className="absolute inset-0 rounded-3xl blur-2xl"
                            style={{
                                background:
                                    "linear-gradient(135deg, color-mix(in srgb, var(--brand-blue) 10%, transparent), color-mix(in srgb, var(--brand-cyan) 10%, transparent), color-mix(in srgb, var(--brand-teal) 10%, transparent))",
                            }}
                        />

                        {/* Feature Card */}
                        <div
                            className="relative rounded-3xl shadow-2xl border hover:scale-105 transition-transform duration-300 max-w-lg w-full"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                                backdropFilter: "blur(6px)",
                            }}
                        >
                            {/* Glow inside */}
                            {/* <div
                                className="absolute inset-0 rounded-3xl"
                                style={{
                                    opacity: 0.15,
                                    background:
                                        "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan), var(--brand-teal))",
                                    filter: "blur(22px)",
                                }}
                            /> */}
                            <Image
                                src="/images/web-development-illustration.png"
                                alt="Web Design & Development"
                                width={500}
                                height={500}
                                className="w-full h-auto rounded-3xl"
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
                            <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                Why Choose Us?
                            </h3>
                            <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
                                We combine cutting-edge technology with proven methodologies to deliver exceptional web solutions tailored to your business needs.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-blue) 15%, transparent)",
                                        color: "var(--brand-blue)",
                                    }}
                                >
                                    React & Next.js
                                </span>
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-blue) 15%, transparent)",
                                        color: "var(--brand-blue)",
                                    }}
                                >
                                    Tailwind CSS
                                </span>
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-blue) 15%, transparent)",
                                        color: "var(--brand-blue)",
                                    }}
                                >
                                    SEO Optimized
                                </span>
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-blue) 15%, transparent)",
                                        color: "var(--brand-blue)",
                                    }}
                                >
                                    Mobile Responsive
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}