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
    Info
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
        fileName: null
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
        setForm(prev => ({ ...prev, [k]: v }));
        if (k === "message") {
            setCharCount(String(v ?? "").length);
        }
        setErrors(prev => ({ ...prev, [k]: "" }));
    };

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // small client-side check
            if (file.size > 5 * 1024 * 1024) {
                setErrors(prev => ({ ...prev, file: "File must be smaller than 5MB." }));
                return;
            }
            handleChange("fileName", file.name);
            setErrors(prev => ({ ...prev, file: "" }));
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
            fileName: null
        });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setIsSubmitting(true);
        // simulate API
        await new Promise(resolve => setTimeout(resolve, 1400));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <section id="contact-form" className="py-12 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 text-center">
                        <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center mb-6">
                            <CheckCircle2 className="w-12 h-12 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thanks — we'll be in touch!</h3>
                        <p className="text-gray-600 mb-6">We received your message and will respond within 24 hours.</p>
                        <div className="flex justify-center gap-3">
                            <button
                                onClick={() => {
                                    setIsSuccess(false);
                                    resetForm();
                                }}
                                className="px-6 py-2 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition"
                            >
                                Send another
                            </button>
                            <a
                                href="/"
                                className="px-6 py-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition inline-flex items-center gap-2"
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
        <section id="contact-form" className="py-12 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Form Card */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                            <div className="p-8 md:p-12">
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Send us a message</h2>
                                    <p className="text-gray-600 max-w-2xl mx-auto">
                                        Fill the form and we’ll respond within <strong>24 hours</strong>. Prefer a call? add your phone and preferred time.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="text-sm font-medium text-gray-700">
                                                Full name
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                value={form.name}
                                                onChange={e => handleChange("name", e.target.value)}
                                                type="text"
                                                required
                                                aria-invalid={!!errors.name}
                                                aria-describedby={errors.name ? "name-error" : undefined}
                                                className={`w-full mt-2 px-4 py-3 rounded-xl border ${errors.name ? "border-red-300" : "border-gray-200"} focus:border-[#008ac1] focus:ring-2 focus:ring-[#008ac1]/20 outline-none transition bg-gray-50 placeholder:text-gray-500`}
                                                placeholder="John Doe"
                                            />
                                            {errors.name && <p id="name-error" className="text-sm text-red-600 mt-2">{errors.name}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                                Email
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                value={form.email}
                                                onChange={e => handleChange("email", e.target.value)}
                                                type="email"
                                                required
                                                aria-invalid={!!errors.email}
                                                aria-describedby={errors.email ? "email-error" : undefined}
                                                className={`w-full mt-2 px-4 py-3 rounded-xl border ${errors.email ? "border-red-300" : "border-gray-200"} focus:border-[#008ac1] focus:ring-2 focus:ring-[#008ac1]/20 outline-none transition bg-gray-50 placeholder:text-gray-500`}
                                                placeholder="john@example.com"
                                            />
                                            {errors.email && <p id="email-error" className="text-sm text-red-600 mt-2">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                                                Phone (optional)
                                            </label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                value={form.phone}
                                                onChange={e => handleChange("phone", e.target.value)}
                                                type="tel"
                                                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 focus:border-[#008ac1] focus:ring-2 focus:ring-[#008ac1]/20 outline-none transition bg-gray-50 placeholder:text-gray-500"
                                                placeholder="+91 98765 43210"
                                                aria-label="phone number"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                                                Topic
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={form.subject}
                                                onChange={e => handleChange("subject", e.target.value)}
                                                required
                                                aria-invalid={!!errors.subject}
                                                className={`w-full mt-2 px-4 py-3 rounded-xl border ${errors.subject ? "border-red-300" : "border-gray-200"} focus:border-[#008ac1] focus:ring-2 focus:ring-[#008ac1]/20 outline-none transition bg-gray-50 text-gray-500`}
                                            >
                                                <option value="">Select topic</option>
                                                <option value="web">Website / Web App</option>
                                                <option value="app">Mobile App</option>
                                                <option value="marketing">Digital Marketing</option>
                                                <option value="seo">SEO & Growth</option>
                                                <option value="ai">AI / Automation</option>
                                                <option value="other">Other</option>
                                            </select>
                                            {errors.subject && <p className="text-sm text-red-600 mt-2">{errors.subject}</p>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div>
                                            <label className="text-sm font-medium text-gray-700">Budget (est.)</label>
                                            <div className="mt-2 relative text-gray-500">
                                                <select
                                                    value={form.budget}
                                                    onChange={e => handleChange("budget", e.target.value)}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#008ac1] focus:ring-2 focus:ring-[#008ac1]/20 outline-none bg-gray-50 placeholder:text-gray-500"
                                                >
                                                    <option value="">Select budget</option>
                                                    <option value="under-5k">Under ₹5,000</option>
                                                    <option value="5k-25k">₹5k - ₹25k</option>
                                                    <option value="25k-1l">₹25k - ₹1L</option>
                                                    <option value="1l-plus">₹1L+</option>
                                                </select>
                                                <div className="absolute right-3 top-3 text-gray-400"><DollarSign className="w-4 h-4" /></div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-sm font-medium text-gray-700">Timeframe</label>
                                            <div className="mt-2 text-gray-500">
                                                <select
                                                    value={form.timeframe}
                                                    onChange={e => handleChange("timeframe", e.target.value)}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#008ac1] focus:ring-2 focus:ring-[#008ac1]/20 outline-none bg-gray-50 placeholder:text-gray-500"
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
                                            <label className="text-sm font-medium text-gray-700">Preferred contact</label>
                                            <div className="mt-2 relative text-gray-500">
                                                <input
                                                    type="date"
                                                    value={form.preferredDate}
                                                    onChange={e => handleChange("preferredDate", e.target.value)}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#008ac1] focus:ring-2 focus:ring-[#008ac1]/20 outline-none bg-gray-50 placeholder:text-gray-500"
                                                />
                                                <div className="absolute right-3 top-3 text-gray-400"><Calendar className="w-4 h-4" /></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="text-sm font-medium text-gray-700">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={form.message}
                                            onChange={e => handleChange("message", e.target.value)}
                                            rows={6}
                                            required
                                            aria-invalid={!!errors.message}
                                            aria-describedby={errors.message ? "msg-error" : undefined}
                                            className={`w-full mt-2 px-4 py-3 rounded-xl border ${errors.message ? "border-red-300" : "border-gray-200"} focus:border-[#008ac1] focus:ring-2 focus:ring-[#008ac1]/20 outline-none transition bg-gray-50 placeholder:text-gray-500 resize-none`}
                                            placeholder="Tell us about your project, goals and timeline..."
                                        />
                                        <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                                            <div className="inline-flex items-center gap-1">
                                                <Info className="w-4 h-4 text-gray-400" />
                                                <span>Try to include target audience & outcome.</span>
                                            </div>
                                            <div>{charCount}/1000</div>
                                        </div>
                                        {errors.message && <p id="msg-error" className="text-sm text-red-600 mt-2">{errors.message}</p>}
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={form.consent}
                                                onChange={e => handleChange("consent", e.target.checked)}
                                                className="sr-only"
                                                aria-checked={form.consent}
                                            />
                                            <span className={`w-11 h-6 inline-block rounded-full transition-colors ${form.consent ? "bg-[#008ac1]" : "bg-gray-200"}`}></span>
                                            <span className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${form.consent ? "translate-x-5" : ""}`} />
                                        </label>

                                        <div className="text-sm text-gray-600">
                                            I give permission to contact me about my inquiry. <span className="text-xs text-gray-400 block">You can unsubscribe anytime.</span>
                                            {errors.consent && <p className="text-sm text-red-600 mt-1">{errors.consent}</p>}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <label className="inline-flex items-center gap-2 cursor-pointer">
                                            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600">
                                                <Paperclip className="w-5 h-5" />
                                            </div>
                                            <span className="text-sm text-gray-700">Attach brief or file</span>
                                            <input
                                                ref={fileRef}
                                                type="file"
                                                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                                                onChange={handleFile}
                                                className="sr-only"
                                            />
                                        </label>

                                        <div className="text-sm text-gray-500">
                                            {form.fileName ? (
                                                <div className="inline-flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                                                    <span className="text-xs">{form.fileName}</span>
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            handleChange("fileName", null);
                                                            if (fileRef.current) fileRef.current.value = "";
                                                        }}
                                                        className="p-1 rounded-full hover:bg-gray-100"
                                                        aria-label="Remove file"
                                                    >
                                                        <X className="w-4 h-4 text-gray-400" />
                                                    </button>
                                                </div>
                                            ) : (
                                                <span className="text-xs">Max 5MB • .pdf, .doc, .png</span>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 bg-gradient-to-r from-[#008ac1] to-[#00b5ca] hover:from-[#0077a6] hover:to-[#009db0] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-transform hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                            aria-busy={isSubmitting}
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
                        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sticky top-20">
                            <h4 className="text-lg font-semibold mb-4 text-black">Quick Contact</h4>

                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#008ac1] to-[#00b5ca] flex items-center justify-center text-white">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-600">Phone</div>
                                    <a href="tel:+919004988859" className="text-gray-900 font-medium">+91 90049 88859</a>
                                    <br />
                                    <a href="tel:+917700995410" className="text-gray-900 font-medium">+91 77009 95410</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#bc3feb] to-[#fab900] flex items-center justify-center text-white">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-600">Email</div>
                                    <a href="mailto:contact@cinuteinfomedia.com" className="text-gray-900 font-medium">contact@cinuteinfomedia.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-20 h-10 rounded-lg bg-gradient-to-br from-[#00efd6] to-[#00b5ca] flex items-center justify-center text-white">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-600">Address</div>
                                    <a href="https://maps.app.goo.gl/Lk3iaPrxyzPYeh3y9" target="_blank" rel="noreferrer" className="text-gray-900 font-medium block">
                                        Office #3, Ashley Tower, Beverly Park, Mira Road (E), Mumbai, 401107
                                    </a>
                                </div>
                            </div>

                            <div className="mt-6 text-sm text-gray-600">
                                <strong>Availability:</strong> Mon - Fri, 9:30 AM - 6:30 PM
                            </div>

                            <div className="mt-6">
                                <a
                                    href="/contact"
                                    className="block text-center px-4 py-2 rounded-lg bg-[#008ac1] text-white font-semibold hover:bg-[#0077a6] transition"
                                >
                                    Request a Call
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
