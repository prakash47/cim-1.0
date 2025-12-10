// components/about/ContactForm.tsx
"use client";

import { useState, useRef } from "react";
import {
    Send,
    CheckCircle2,
    Loader2,
    Phone,
    Mail,
    MapPin,
    Paperclip,
    Calendar,
    Clock,
    DollarSign,
    X,
    Info,
} from "lucide-react";

type FormState = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    budget: string;
    timeframe: string;
    preferredDate?: string;
    consent: boolean;
    fileName?: string | null;
};

export default function ContactForm() {
    const [form, setForm] = useState<FormState>({
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

    const handleChange = (k: keyof FormState, v: any) => {
        setForm((prev) => ({ ...prev, [k]: v }));
        if (k === "message") {
            setCharCount(String(v ?? "").length);
        }
        setErrors((prev) => ({ ...prev, [k]: "" }));
    };

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // small client-side check
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setIsSubmitting(true);
        // simulate API
        await new Promise((resolve) => setTimeout(resolve, 1400));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    // helper to build gradient string from CSS vars
    const gradient = (startVar: string, endVar: string, angle = "135deg") =>
        `linear-gradient(${angle}, var(${startVar}), var(${endVar}))`;

    if (isSuccess) {
        return (
            <section
                id="contact-form"
                className="py-12 lg:py-20"
                style={{ background: "linear-gradient(135deg, var(--background), var(--background))" }}
            >
                <div className="max-w-3xl mx-auto px-4">
                    <div
                        className="rounded-3xl shadow-2xl p-8 text-center"
                        style={{ background: "var(--card-bg)", border: `1px solid var(--border-color)` }}
                    >
                        <div
                            className="mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-6"
                            style={{ background: gradient("--brand-teal", "--brand-blue") }}
                        >
                            <CheckCircle2 className="w-12 h-12" style={{ color: "white" }} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                            Thanks — we'll be in touch!
                        </h3>
                        <p className="mb-6" style={{ color: "var(--secondary-text)" }}>
                            We received your message and will respond within 24 hours.
                        </p>
                        <div className="flex justify-center gap-3">
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
                </div>
            </section>
        );
    }

    return (
        <section
            id="contact-form"
            className="py-12 lg:py-20"
            style={{ background: "linear-gradient(135deg, var(--background), var(--background))" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Form Card */}
                    <div className="lg:col-span-2">
                        <div style={{ background: "var(--card-bg)", border: `1px solid var(--border-color)` }} className="rounded-3xl shadow-2xl overflow-hidden">
                            <div className="p-8 md:p-12">
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                        Send us a message
                                    </h2>
                                    <p style={{ color: "var(--secondary-text)" }} className="max-w-2xl mx-auto">
                                        Fill the form and we’ll respond within <strong style={{ color: "var(--foreground)" }}>24 hours</strong>. Prefer a call? add your phone and preferred time.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                                style={{
                                                    borderColor: errors.name ? "var(--brand-orange)" : "var(--border-color)",
                                                    background: "var(--hover-bg)",
                                                    color: "var(--foreground)",
                                                }}
                                            />
                                            {errors.name && (
                                                <p id="name-error" className="text-sm mt-2" style={{ color: "var(--brand-orange)" }}>
                                                    {errors.name}
                                                </p>
                                            )}
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
                                                style={{
                                                    borderColor: errors.email ? "var(--brand-orange)" : "var(--border-color)",
                                                    background: "var(--hover-bg)",
                                                    color: "var(--foreground)",
                                                }}
                                            />
                                            {errors.email && (
                                                <p id="email-error" className="text-sm mt-2" style={{ color: "var(--brand-orange)" }}>
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>
                                    </div>

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

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

                                        <div>
                                            <label className="text-sm font-medium" style={{ color: "var(--secondary-text)" }}>
                                                Preferred contact
                                            </label>
                                            <div className="mt-2 relative">
                                                <input
                                                    type="date"
                                                    value={form.preferredDate}
                                                    onChange={(e) => handleChange("preferredDate", e.target.value)}
                                                    className="w-full px-4 py-3 rounded-xl border focus:ring-2 outline-none transition"
                                                    style={{ borderColor: "var(--border-color)", background: "var(--hover-bg)", color: "var(--foreground)" }}
                                                />
                                                <div className="absolute right-3 top-3" style={{ color: "var(--secondary-text)" }}>
                                                    <Calendar className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

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
                                            className="w-full mt-2 px-4 py-3 rounded-xl border focus:ring-2 outline-none transition resize-none"
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
                                        {errors.message && (
                                            <p id="msg-error" className="text-sm mt-2" style={{ color: "var(--brand-orange)" }}>
                                                {errors.message}
                                            </p>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={form.consent}
                                                onChange={(e) => handleChange("consent", e.target.checked)}
                                                className="sr-only"
                                                aria-checked={form.consent}
                                            />
                                            <span
                                                className="w-11 h-6 inline-block rounded-full transition-colors"
                                                style={{ background: form.consent ? "var(--brand-blue)" : "var(--border-color)" }}
                                            />
                                            <span
                                                className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform"
                                                style={{ transform: form.consent ? "translateX(22px)" : "translateX(0)" }}
                                            />
                                        </label>

                                        <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            I give permission to contact me about my inquiry. <span className="text-xs block" style={{ color: "var(--secondary-text)" }}>You can unsubscribe anytime.</span>
                                            {errors.consent && <p className="text-sm mt-1" style={{ color: "var(--brand-orange)" }}>{errors.consent}</p>}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <label className="inline-flex items-center gap-2 cursor-pointer">
                                            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "var(--hover-bg)", color: "var(--secondary-text)" }}>
                                                <Paperclip className="w-5 h-5" />
                                            </div>
                                            <span className="text-sm" style={{ color: "var(--foreground)" }}>Attach brief or file</span>
                                            <input ref={fileRef} type="file" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" onChange={handleFile} className="sr-only" />
                                        </label>

                                        <div className="text-sm">
                                            {form.fileName ? (
                                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full" style={{ background: "var(--hover-bg)", border: `1px solid var(--border-color)` }}>
                                                    <span className="text-xs" style={{ color: "var(--foreground)" }}>{form.fileName}</span>
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            handleChange("fileName", null);
                                                            if (fileRef.current) fileRef.current.value = "";
                                                        }}
                                                        className="p-1 rounded-full"
                                                        aria-label="Remove file"
                                                        style={{ color: "var(--secondary-text)" }}
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            ) : (
                                                <span className="text-xs" style={{ color: "var(--secondary-text)" }}>Max 5MB • .pdf, .doc, .png</span>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-transform flex items-center justify-center gap-3"
                                            aria-busy={isSubmitting}
                                            style={{
                                                background: gradient("--brand-blue", "--brand-teal"),
                                                color: "white",
                                                transform: isSubmitting ? "scale(.995)" : undefined,
                                                opacity: isSubmitting ? 0.9 : 1,
                                            }}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar with quick contact info */}
                    <aside className="hidden lg:block">
                        <div className="rounded-3xl p-6 sticky top-20" style={{ background: "var(--card-bg)", border: `1px solid var(--border-color)`, boxShadow: "var(--card-shadow, 0 10px 30px rgba(0,0,0,0.04))" }}>
                            <h4 className="text-lg font-semibold mb-4" style={{ color: "var(--foreground)" }}>Quick Contact</h4>

                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: gradient("--brand-blue", "--brand-teal") }}>
                                    <Phone className="w-5 h-5" style={{ color: "white" }} />
                                </div>
                                <div>
                                    <div className="text-sm" style={{ color: "var(--secondary-text)" }}>Phone</div>
                                    <a href="tel:+919004988859" style={{ color: "var(--foreground)", fontWeight: 600, display: "block" }}>+91 90049 88859</a>
                                    <a href="tel:+917700995410" style={{ color: "var(--foreground)", fontWeight: 600, display: "block" }}>+91 77009 95410</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: gradient("--brand-purple", "--brand-yellow") }}>
                                    <Mail className="w-5 h-5" style={{ color: "white" }} />
                                </div>
                                <div>
                                    <div className="text-sm" style={{ color: "var(--secondary-text)" }}>Email</div>
                                    <a href="mailto:contact@cinuteinfomedia.com" style={{ color: "var(--foreground)", fontWeight: 600, display: "block" }}>contact@cinuteinfomedia.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-20 h-10 rounded-lg flex items-center justify-center" style={{ background: gradient("--brand-cyan", "--brand-teal") }}>
                                    <MapPin className="w-5 h-5" style={{ color: "white" }} />
                                </div>
                                <div>
                                    <div className="text-sm" style={{ color: "var(--secondary-text)" }}>Address</div>
                                    <a href="https://maps.app.goo.gl/Lk3iaPrxyzPYeh3y9" target="_blank" rel="noreferrer" style={{ color: "var(--foreground)", fontWeight: 600, display: "block" }}>
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
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
      `}</style>
        </section>
    );
}
