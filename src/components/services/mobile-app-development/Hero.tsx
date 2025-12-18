"use client";

import { Sparkles, ArrowRight, Home, ChevronRight, Rocket, Zap, Smartphone, TrendingUp, ShieldCheck, Code } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


export default function Hero() {
    return (
        <section
            className="relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            {/* Animated Background with Mobile App Theme */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-purple) 12%, transparent)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-yellow) 12%, transparent)",
                        animationDelay: "1s",
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-blue) 12%, transparent)",
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
                        style={{ color: "var(--brand-purple)" }}
                    >
                        Mobile App Development
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
                                    "linear-gradient(90deg, color-mix(in srgb, var(--brand-purple) 8%, transparent), color-mix(in srgb, var(--brand-yellow) 8%, transparent))",
                                borderColor: "color-mix(in srgb, var(--brand-purple) 20%, transparent)",
                                color: "var(--brand-purple)",
                            }}
                        >
                            <Smartphone className="w-4 h-4" style={{ color: "var(--brand-purple)" }} />
                            <span className="text-sm font-semibold">Mobile App Development</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background:
                                        "var(--foreground)",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                Transform Your Ideas Into <span className="text-[var(--brand-purple)]">Powerful Mobile Apps</span>
                            </span>
                        </h1>

                        {/* Underline */}
                        <div
                            className="w-32 h-1.5 mb-8 rounded-full lg:mx-0 mx-auto mt-4"
                            style={{
                                background:
                                    "linear-gradient(90deg, var(--brand-purple), var(--brand-blue))",
                            }}
                        />

                        {/* Tagline */}
                        <p className="text-xl md:text-2xl mb-8" style={{ color: "var(--secondary-text)" }}>
                            As a premier <span style={{ color: "var(--brand-purple)", fontWeight: 700 }}>Mobile App Development Company</span>, we deliver high-performance, secure, and user-centric <span style={{ color: "var(--foreground)", fontWeight: 700 }}>Custom Mobile App Solutions</span> for iOS, Android, and cross-platform needs.
                        </p>

                        {/* Feature Highlights */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-purple) 8%, transparent)",
                                }}
                            >
                                <Rocket className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-purple)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Fast Launch
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-purple) 8%, transparent)",
                                }}
                            >
                                <Zap className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-purple)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    High Performance
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-purple) 8%, transparent)",
                                }}
                            >
                                <Smartphone className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-purple)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    All Platforms
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-purple) 8%, transparent)",
                                }}
                            >
                                <TrendingUp className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-purple)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Scalable
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-purple) 8%, transparent)",
                                }}
                            >
                                <ShieldCheck className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-purple)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Enterprise Secure
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-purple) 8%, transparent)",
                                }}
                            >
                                <Code className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-purple)" }} />
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
                                        background: "linear-gradient(90deg, var(--brand-purple), var(--brand-blue))",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    200+
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Apps Delivered
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, var(--brand-purple), var(--brand-blue))",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    5M+
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Users Impacted
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, var(--brand-purple), var(--brand-blue))",
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
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105" style={{ background: "linear-gradient(135deg, var(--brand-purple), var(--brand-blue))", color: "white" }}>
                                Start Your App Project
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="#overview" className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-semibold border transition-all hover:scale-105" style={{ borderColor: "var(--border-color)", color: "var(--foreground)" }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--hover-bg)")} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}>
                                Learn More
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
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
                                    "linear-gradient(135deg, color-mix(in srgb, var(--brand-blue) 10%, transparent), color-mix(in srgb, var(--brand-cyan) 10%, transparent), color-mix(in srgb, var(--brand-teal) 10%, transparent))",
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
                                src="/images/services-images/mobile-app-development-illustration.webp"
                                alt="Mobile App Development"
                                width={638}
                                height={565}
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 638px"
                                className="w-[80%] h-[80%] rounded-3xl p-5"
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBRIhBhMiMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAYEQEBAQEBAAAAAAAAAAAAAAABAgADEf/aAAwDAQACEQMRAD8AzTR9I1C5sY57izt7eKVQ8Ud1KImkU8g7cEgH5nHNWP6Y/EfxSlFNmSuf/9k="
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
                                We combine cutting-edge technology with proven methodologies to deliver exceptional mobile app solutions tailored to your business needs.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-purple) 15%, transparent)",
                                        color: "var(--brand-purple)",
                                    }}
                                >
                                    Java & Kotlin
                                </span>
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-purple) 15%, transparent)",
                                        color: "var(--brand-purple)",
                                    }}
                                >
                                    Flutter
                                </span>
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-purple) 15%, transparent)",
                                        color: "var(--brand-purple)",
                                    }}
                                >
                                    Native Apps
                                </span>
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-purple) 15%, transparent)",
                                        color: "var(--brand-purple)",
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
