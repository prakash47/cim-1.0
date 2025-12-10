"use client"

import { useState, useEffect } from "react";
import {
    MessageSquare,
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    Sparkles,
    Send,
    Users,
    CheckCircle,
    Star,
    TrendingUp,
} from "lucide-react";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeCard, setActiveCard] = useState(0);
    const [messageIndex, setMessageIndex] = useState(0);
    const [particles, setParticles] = useState<Array<{ x: number; y: number; delay: number }>>([]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard((prev) => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const msgInterval = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % 3);
        }, 4000);
        return () => clearInterval(msgInterval);
    }, []);

    useEffect(() => {
        const newParticles = Array.from({ length: 20 }, (_, i) => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: i * 0.2,
        }));
        setParticles(newParticles);
    }, []);

    const contactMethods = [
        {
            icon: Mail,
            title: "Email Us",
            info: "Drop us a line anytime",
            description: "Mail Us your queries",
            colorStartVar: "--brand-blue",
            colorEndVar: "--brand-teal",
            href: "mailto:contact@cinuteinfomedia.com",
            badge: "Most Popular",
        },
        {
            icon: Phone,
            title: "Call Us",
            info: "+91 900 498 8859",
            description: "Mon-Fri 9AM-6PM IST",
            colorStartVar: "--brand-purple",
            colorEndVar: "--brand-yellow",
            href: "tel:+919004988859",
            badge: "Instant",
        },
        {
            icon: MapPin,
            title: "Visit Office",
            info: "Mumbai, India",
            description: "Come say hello",
            colorStartVar: "--brand-cyan",
            colorEndVar: "--brand-teal",
            href: "https://maps.app.goo.gl/ak5SjeUnrDyWLXFNA",
            badge: "By Appointment",
        },
        {
            icon: MessageSquare,
            title: "Live Chat",
            info: "Start Conversation",
            description: "Get instant answers",
            colorStartVar: "--brand-yellow",
            colorEndVar: "--brand-orange",
            href: "#contact-form",
            badge: "24/7 Available",
        },
    ];

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
        <section
            className="relative px-6 md:px-12 xl:px-20 py-28 overflow-hidden"
            style={{ background: "var(--background)", color: "var(--foreground)" }}
        >
            {/* Animated Background (dark/light adaptive via CSS vars) */}
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
                        backgroundColor: "color-mix(in srgb, var(--brand-purple) 12%, transparent)",
                        animationDelay: "1s",
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-cyan) 12%, transparent)",
                        animationDelay: "2s",
                    }}
                />
            </div>


            <div className="mx-auto relative">
                {/* Badge */}
                <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-colors"
                    style={{
                        background:
                            "linear-gradient(90deg, color-mix(in srgb, var(--brand-blue) 8%, transparent), color-mix(in srgb, var(--brand-teal) 8%, transparent))",
                        borderColor: "color-mix(in srgb, var(--brand-blue) 20%, transparent)",
                        color: "var(--brand-blue)",
                    }}
                >
                    <MessageSquare className="w-5 h-5 text-current relative animate-bounce" style={{ color: "var(--brand-blue)" }} />
                    <span className="text-sm font-semibold">Get in Touch</span>
                </div>

                <div className="grid xl:grid-cols-2 items-center gap-8">
                    {/* LEFT COLUMN - Contact Details */}
                    <div className="space-y-8 animate-fadeInUp">
                        {/* Main Heading */}
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-3">
                                <span className="inline-block">
                                    <span
                                        className="bg-clip-text text-transparent"
                                        style={{ background: gradient("--brand-blue", "--brand-teal", "90deg"), WebkitBackgroundClip: "text", color: "transparent" }}
                                    >
                                        Let's Start a
                                    </span>
                                </span>
                                <br />
                                <span className="inline-block">
                                    <span
                                        className="bg-clip-text text-transparent"
                                        style={{ background: gradient("--brand-purple", "--brand-yellow", "90deg"), WebkitBackgroundClip: "text", color: "transparent" }}
                                    >
                                        Conversation
                                    </span>
                                </span>
                            </h1>

                            {/* Animated Underline */}
                            <div className="flex gap-2 mb-6">
                                <div className="w-24 h-1.5 rounded-full animate-slideInLeft" style={{ background: gradient("--brand-blue", "--brand-teal", "90deg") }} />
                                <div className="w-16 h-1.5 rounded-full animate-slideInRight" style={{ background: gradient("--brand-purple", "--brand-yellow", "90deg") }} />
                            </div>

                            <p className="text-lg md:text-xl leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                Have a project in mind? We're here to turn your vision into reality.
                                <span className="block mt-2 font-semibold" style={{ color: "var(--foreground)" }}>
                                    Choose your preferred way to reach us.
                                </span>
                            </p>
                        </div>

                        {/* Contact Method Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {contactMethods.map((method, index) => {
                                const Icon = method.icon;
                                return (
                                    <a
                                        key={index}
                                        href={method.href}
                                        target={method.href.startsWith("http") ? "_blank" : undefined}
                                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="group block"
                                        style={{ animationDelay: `${index * 0.08}s` }}
                                    >
                                        <div
                                            className="relative rounded-2xl p-6 transition-all duration-300"
                                            style={{
                                                background: "bg-[var(--card-bg)]",
                                                backdropFilter: "blur(6px)",
                                                border: `2px solid var(--border-color)`,
                                            }}
                                        >
                                            {/* Hover gradient overlay */}
                                            <div
                                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                                                style={{ background: gradient(method.colorStartVar, method.colorEndVar, "135deg") }}
                                            />

                                            {/* Active indicator */}
                                            {activeCard === index && (
                                                <div
                                                    className="absolute inset-0 rounded-2xl animate-pulse"
                                                    style={{ background: gradient(method.colorStartVar, method.colorEndVar, "135deg"), opacity: 0.06 }}
                                                />
                                            )}

                                            <div className="relative flex items-center gap-5">
                                                {/* Icon */}
                                                <div
                                                    className="relative w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300"
                                                    style={{
                                                        background: gradient(method.colorStartVar, method.colorEndVar, "135deg"),
                                                        boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
                                                        color: "#fff",
                                                    }}
                                                >
                                                    <Icon className="w-8 h-8 text-white" />
                                                    {activeCard === index && (
                                                        <div
                                                            className="absolute inset-0 rounded-xl animate-ping"
                                                            style={{ opacity: 0.45, background: gradient(method.colorStartVar, method.colorEndVar, "135deg") }}
                                                        />
                                                    )}
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>
                                                        {method.title}
                                                    </h3>
                                                    <p className="text-base font-semibold" style={{ color: "var(--foreground)" }}>
                                                        {method.info}
                                                    </p>
                                                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                                        {method.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

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
                </div>

                {/* Bottom CTA */}
                <div className="flex justify-center mt-10 animate-fadeInUp" style={{ animationDelay: "0.8s" }}>
                    <a
                        href="#contact-form"
                        className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-semibold text-lg shadow-xl transition-all duration-300"
                        style={{ background: gradient("--brand-blue", "--brand-teal", "90deg"), color: "white", overflow: "hidden" }}
                    >
                        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0) 100%)", transform: "translateX(-100%)" }} />
                        <span className="relative">Send Us a Message</span>
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translate(-50%, 20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
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

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
          animation-delay: 1.5s;
          opacity: 0;
        }
        .animate-particle {
          animation: particle 4s ease-in-out infinite;
        }
      `}</style>
        </section>
    );
}
