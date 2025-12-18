// components/about/Hero.tsx
"use client";

import { useState, useEffect, useRef } from "react";
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
    Paperclip,
    Calendar,
    DollarSign,
    X,
    Info,
    Loader2,
    CheckCircle2,
} from "lucide-react";

export default function Hero() {
    // small helpers & state used by hero animations
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

    // Contact methods (used in left column originally)
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

    // ---------- NEW: Inline contact form (previously in ContactForm.tsx) ----------
    // We place the full form JSX here inside the right column so the form is now located in Hero.
    // Keep form logic local to Hero (copy of ContactForm state & handlers).
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        budget: "",
        timeframe: "",
        preferredDate: "",
        consent: false,
        fileName: null as string | null,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [charCount, setCharCount] = useState(0);
    const fileRef = useRef<HTMLInputElement | null>(null);

    const validate = () => {
        const e: Record<string, string> = {};
        if (!form.name.trim()) e.name = "Name is required.";
        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email is required.";
        if (!form.subject) e.subject = "Please select a topic.";
        if (!form.message.trim() || form.message.trim().length < 20) e.message = "Please enter at least 20 characters.";
        if (!form.consent) e.consent = "Please allow us to contact you.";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleChange = (k: string, v: any) => {
        setForm((prev) => ({ ...prev, [k]: v }));
        if (k === "message") setCharCount(String(v ?? "").length);
        setErrors((prev) => ({ ...prev, [k]: "" }));
    };

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                setErrors((prev) => ({ ...prev, file: "File must be smaller than 5MB." }));
                return;
            }
            handleChange("fileName", file.name);
            setErrors((prev) => ({ ...prev, file: "" }));
        }
    };

    const resetForm = () =>
        setForm({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            budget: "",
            timeframe: "",
            preferredDate: "",
            consent: false,
            fileName: null,
        });

    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setIsSubmitting(true);
        await new Promise((res) => setTimeout(res, 1400));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    // Render
    return (
        <section
            className="relative px-6 md:px-12 xl:px-20 py-12 overflow-hidden"
            style={{ background: "var(--background)", color: "var(--foreground)" }}
        >
            {/* Animated background orbs */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, var(--brand-blue) 12%, transparent)" }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, var(--brand-purple) 12%, transparent)", animationDelay: "1s" }}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, var(--brand-cyan) 12%, transparent)", animationDelay: "2s" }}
                />
            </div>

            <div className="mx-auto relative">
                {/* Badge */}
                <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-colors mb-4"
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

                <div className="grid xl:grid-cols-2 items-start gap-16">
                    {/* LEFT: Intro + contact cards */}
                    <div className="space-y-8 animate-fadeInUp">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-3">
                                <span className="inline-block">
                                    <span
                                        className="bg-clip-text text-transparent"
                                        style={{
                                            background: gradient("--brand-blue", "--brand-teal", "90deg"),
                                            WebkitBackgroundClip: "text",
                                            color: "transparent",
                                        }}
                                    >
                                        Let's Start a
                                    </span>
                                </span>
                                <br />
                                <span className="inline-block">
                                    <span
                                        className="bg-clip-text text-transparent"
                                        style={{
                                            background: gradient("--brand-purple", "--brand-yellow", "90deg"),
                                            WebkitBackgroundClip: "text",
                                            color: "transparent",
                                        }}
                                    >
                                        Conversation
                                    </span>
                                </span>
                            </h1>

                            <div className="flex gap-2 mb-6">
                                <div className="w-24 h-1.5 rounded-full animate-slideInLeft" style={{ background: gradient("--brand-blue", "--brand-teal") }} />
                                <div className="w-16 h-1.5 rounded-full animate-slideInRight" style={{ background: gradient("--brand-purple", "--brand-yellow") }} />
                            </div>

                            <p className="text-lg md:text-xl leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                Have a project in mind? We're here to turn your vision into reality.
                                <span className="block mt-2 font-semibold" style={{ color: "var(--foreground)" }}>
                                    Choose your preferred way to reach us.
                                </span>
                            </p>
                        </div>

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
                                            style={{ background: "var(--card-bg)", backdropFilter: "blur(6px)", border: `2px solid var(--border-color)` }}
                                        >
                                            <div
                                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                                                style={{ background: gradient(method.colorStartVar, method.colorEndVar, "135deg") }}
                                            />

                                            {activeCard === index && (
                                                <div className="absolute inset-0 rounded-2xl animate-pulse" style={{ background: gradient(method.colorStartVar, method.colorEndVar, "135deg"), opacity: 0.06 }} />
                                            )}

                                            <div className="relative flex items-center gap-5">
                                                <div
                                                    className="relative w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300"
                                                    style={{ background: gradient(method.colorStartVar, method.colorEndVar, "135deg"), boxShadow: "0 12px 30px rgba(0,0,0,0.06)" }}
                                                >
                                                    <Icon className="w-8 h-8 text-white" />
                                                    {activeCard === index && <div className="absolute inset-0 rounded-xl animate-ping" style={{ opacity: 0.45, background: gradient(method.colorStartVar, method.colorEndVar, "135deg") }} />}
                                                </div>

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
                        {/* Mini Value Section Below Contact Methods */}
                        <div
                            className="mt-10 p-6 rounded-2xl shadow-md border backdrop-blur-sm"
                            style={{
                                background: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                            }}
                        >
                            <h3
                                className="text-xl font-bold mb-3"
                                style={{ background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))", WebkitBackgroundClip: "text", color: "transparent" }}
                            >
                                Why People Choose Us
                            </h3>

                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span
                                        className="w-6 h-6 rounded-full flex items-center justify-center"
                                        style={{ background: "var(--brand-teal)", color: "white" }}
                                    >
                                        ✓
                                    </span>
                                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                        <strong style={{ color: "var(--foreground)" }}>Personalized Support</strong> - We respond quickly & guide you at every step.
                                    </p>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span
                                        className="w-6 h-6 rounded-full flex items-center justify-center"
                                        style={{ background: "var(--brand-blue)", color: "white" }}
                                    >
                                        ✓
                                    </span>
                                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                        <strong style={{ color: "var(--foreground)" }}>Transparent Communication</strong> - No hidden costs, no confusion.
                                    </p>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span
                                        className="w-6 h-6 rounded-full flex items-center justify-center"
                                        style={{ background: "var(--brand-purple)", color: "white" }}
                                    >
                                        ✓
                                    </span>
                                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                        <strong style={{ color: "var(--foreground)" }}>Expert Project Guidance</strong> - We help shape your idea the right way.
                                    </p>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* RIGHT: <--- NEW: Contact Form from ContactForm.tsx (swapped in here) */}
                    <div className="animate-fadeInUp">
                        <div style={{ background: "var(--card-bg)", border: `1px solid var(--border-color)` }} className="rounded-3xl shadow-2xl overflow-hidden">
                            <div className="p-8 md:p-10">
                                {/* success UI */}
                                {isSuccess ? (
                                    <div className="text-center">
                                        <div className="mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-6" style={{ background: gradient("--brand-teal", "--brand-blue") }}>
                                            <CheckCircle2 className="w-12 h-12" style={{ color: "white" }} />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                            Thanks - we'll be in touch!
                                        </h3>
                                        <p style={{ color: "var(--secondary-text)" }}>We received your message and will respond within 24 hours.</p>
                                        <div className="flex justify-center gap-3 mt-6">
                                            <button
                                                onClick={() => {
                                                    setIsSuccess(false);
                                                    resetForm();
                                                }}
                                                className="px-6 py-2 rounded-xl font-medium transition"
                                                style={{ background: "var(--brand-black)", color: "white" }}
                                            >
                                                Send another
                                            </button>
                                            <a
                                                href="/"
                                                className="px-6 py-2 rounded-xl transition inline-flex items-center gap-2"
                                                style={{ border: `1px solid var(--border-color)`, color: "var(--foreground)", background: "var(--card-bg)" }}
                                            >
                                                Back to site
                                            </a>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className="text-center mb-8">
                                            <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                                Send us a message
                                            </h2>
                                            <p style={{ color: "var(--secondary-text)" }} className="max-w-2xl mx-auto">
                                                Fill the form and we’ll respond within <strong style={{ color: "var(--foreground)" }}>24 hours</strong>. Prefer a call? add your phone and preferred time.
                                            </p>
                                        </div>

                                        <form onSubmit={submitForm} className="space-y-6" id="contact-form" noValidate>
                                            {/* row 1 */}
                                            <div className="grid grid-cols-1 gap-6">
                                                <div>
                                                    <label htmlFor="name" className="text-sm font-medium" style={{ color: "var(--secondary-text)" }}>
                                                        Full name
                                                    </label>
                                                    <input
                                                        id="name"
                                                        name="name"
                                                        value={form.name}
                                                        onChange={(e) => handleChange("name", e.target.value)}
                                                        type="text"
                                                        required
                                                        aria-invalid={!!errors.name}
                                                        aria-describedby={errors.name ? "name-error" : undefined}
                                                        className={`w-full mt-2 px-4 py-3 rounded-xl border focus:ring-2 outline-none transition`}
                                                        placeholder="John Doe"
                                                        style={{ borderColor: errors.name ? "var(--brand-orange)" : "var(--border-color)", background: "var(--hover-bg)", color: "var(--foreground)" }}
                                                    />
                                                    {errors.name && <p id="name-error" className="text-sm mt-2" style={{ color: "var(--brand-orange)" }}>{errors.name}</p>}
                                                </div>

                                                <div>
                                                    <label htmlFor="email" className="text-sm font-medium" style={{ color: "var(--secondary-text)" }}>
                                                        Email
                                                    </label>
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        value={form.email}
                                                        onChange={(e) => handleChange("email", e.target.value)}
                                                        type="email"
                                                        required
                                                        aria-invalid={!!errors.email}
                                                        aria-describedby={errors.email ? "email-error" : undefined}
                                                        className={`w-full mt-2 px-4 py-3 rounded-xl border focus:ring-2 outline-none transition`}
                                                        placeholder="john@example.com"
                                                        style={{ borderColor: errors.email ? "var(--brand-orange)" : "var(--border-color)", background: "var(--hover-bg)", color: "var(--foreground)" }}
                                                    />
                                                    {errors.email && <p id="email-error" className="text-sm mt-2" style={{ color: "var(--brand-orange)" }}>{errors.email}</p>}
                                                </div>
                                            </div>

                                            {/* row 2 */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label htmlFor="phone" className="text-sm font-medium" style={{ color: "var(--secondary-text)" }}>
                                                        Phone (optional)
                                                    </label>
                                                    <input
                                                        id="phone"
                                                        name="phone"
                                                        value={form.phone}
                                                        onChange={(e) => handleChange("phone", e.target.value)}
                                                        type="tel"
                                                        className="w-full mt-2 px-4 py-3 rounded-xl border focus:ring-2 outline-none transition"
                                                        placeholder="+91 98765 43210"
                                                        aria-label="phone number"
                                                        style={{ borderColor: "var(--border-color)", background: "var(--hover-bg)", color: "var(--foreground)" }}
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="subject" className="text-sm font-medium" style={{ color: "var(--secondary-text)" }}>
                                                        Topic
                                                    </label>
                                                    <select
                                                        id="subject"
                                                        name="subject"
                                                        value={form.subject}
                                                        onChange={(e) => handleChange("subject", e.target.value)}
                                                        required
                                                        aria-invalid={!!errors.subject}
                                                        className="w-full mt-2 px-4 py-3 rounded-xl border focus:ring-2 outline-none transition"
                                                        style={{ borderColor: errors.subject ? "var(--brand-orange)" : "var(--border-color)", background: "var(--hover-bg)", color: "var(--foreground)" }}
                                                    >
                                                        <option value="">Select topic</option>
                                                        <option value="web">Website / Web App</option>
                                                        <option value="app">Mobile App</option>
                                                        <option value="marketing">Digital Marketing</option>
                                                        <option value="seo">SEO & Growth</option>
                                                        <option value="ai">AI / Automation</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                    {errors.subject && <p className="text-sm mt-2" style={{ color: "var(--brand-orange)" }}>{errors.subject}</p>}
                                                </div>
                                            </div>

                                            {/* row 3 */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="text-sm font-medium" style={{ color: "var(--secondary-text)" }}>
                                                        Budget (est.)
                                                    </label>
                                                    <div className="mt-2 relative">
                                                        <select
                                                            value={form.budget}
                                                            onChange={(e) => handleChange("budget", e.target.value)}
                                                            className="w-full px-4 py-3 rounded-xl border focus:ring-2 outline-none transition"
                                                            style={{ borderColor: "var(--border-color)", background: "var(--hover-bg)", color: "var(--foreground)" }}
                                                        >
                                                            <option value="">Select budget</option>
                                                            <option value="under-5k">Under ₹5,000</option>
                                                            <option value="5k-25k">₹5k - ₹25k</option>
                                                            <option value="25k-1l">₹25k - ₹1L</option>
                                                            <option value="1l-plus">₹1L+</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="text-sm font-medium" style={{ color: "var(--secondary-text)" }}>
                                                        Timeframe
                                                    </label>
                                                    <div className="mt-2">
                                                        <select
                                                            value={form.timeframe}
                                                            onChange={(e) => handleChange("timeframe", e.target.value)}
                                                            className="w-full px-4 py-3 rounded-xl border focus:ring-2 outline-none transition"
                                                            style={{ borderColor: "var(--border-color)", background: "var(--hover-bg)", color: "var(--foreground)" }}
                                                        >
                                                            <option value="">Select timeframe</option>
                                                            <option value="1-2w">1 - 2 weeks</option>
                                                            <option value="1-2m">1 - 2 months</option>
                                                            <option value="2-6m">2 - 6 months</option>
                                                            <option value="ongoing">Ongoing / Retainer</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* message */}
                                            <div>
                                                <label htmlFor="message" className="text-sm font-medium" style={{ color: "var(--secondary-text)" }}>
                                                    Message
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={form.message}
                                                    onChange={(e) => handleChange("message", e.target.value)}
                                                    rows={6}
                                                    required
                                                    aria-invalid={!!errors.message}
                                                    aria-describedby={errors.message ? "msg-error" : undefined}
                                                    className="w-full h-[120px] mt-2 px-4 py-3 rounded-xl border focus:ring-2 outline-none transition resize-none"
                                                    placeholder="Tell us about your project, goals and timeline..."
                                                    style={{ borderColor: errors.message ? "var(--brand-orange)" : "var(--border-color)", background: "var(--hover-bg)", color: "var(--foreground)" }}
                                                />
                                                <div className="flex justify-between items-center mt-2 text-xs" style={{ color: "var(--secondary-text)" }}>
                                                    <div className="inline-flex items-center gap-1">
                                                        <Info className="w-4 h-4" />
                                                        <span>Try to include target audience & outcome.</span>
                                                    </div>
                                                    <div>{charCount}/1000</div>
                                                </div>
                                                {errors.message && <p id="msg-error" className="text-sm mt-2" style={{ color: "var(--brand-orange)" }}>{errors.message}</p>}
                                            </div>

                                            <div>
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-transform flex items-center justify-center gap-3"
                                                    aria-busy={isSubmitting}
                                                    style={{ background: gradient("--brand-blue", "--brand-teal"), color: "white", transform: isSubmitting ? "scale(.995)" : undefined, opacity: isSubmitting ? 0.9 : 1 }}
                                                >
                                                    {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : <><Send className="w-5 h-5" /> Send Message</>}
                                                </button>
                                            </div>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%,100% { transform: translateY(0px); } 50% { transform: translateY(-20px); }
        }
        @keyframes particle {
          0% { opacity: 0; transform: translateY(0) scale(0); } 50% { opacity: 1; } 100% { opacity: 0; transform: translateY(-100px) scale(1); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-slideInLeft { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-particle { animation: particle 4s ease-in-out infinite; }
      `}</style>
        </section>
    );
}
