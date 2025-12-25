"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Phone, Mail } from 'lucide-react';

export default function CTA() {
    return (
        <section className="py-20" style={{ backgroundColor: "var(--background)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-24">
                <div
                    className="relative overflow-hidden rounded-3xl p-12 md:p-16"
                    style={{
                        background: "linear-gradient(135deg, var(--brand-purple), var(--brand-cyan))",
                    }}
                >
                    {/* Background decorations */}
                    <div
                        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-30"
                        style={{ background: "rgba(255,255,255,0.1)" }}
                    />
                    <div
                        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-20"
                        style={{ background: "rgba(255,255,255,0.1)" }}
                    />

                    <div className="relative z-10 max-w-3xl mx-auto text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-8">
                            <Sparkles className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold text-white">Ready to Get Started?</span>
                        </div>

                        {/* Headline */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6" style={{ lineHeight: 1.2 }}>
                            Let&apos;s Build Something{" "}
                            <span className="text-white/90 underline decoration-white/30 decoration-wavy underline-offset-4">
                                Amazing
                            </span>{" "}
                            Together
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
                            Transform your digital presence with our expert team. From concept to launch, we&apos;re with you every step of the way.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-[var(--brand-purple)] bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                Start Your Project
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/20"
                            >
                                Learn More About Us
                            </Link>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/80 text-sm">
                            <a
                                href="tel:+919004988859"
                                className="flex items-center gap-2 hover:text-white transition-colors"
                            >
                                <Phone className="w-4 h-4" />
                                +91 9004988859
                            </a>
                            <span className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
                            <a
                                href="mailto:contact@cinuteinfomedia.com"
                                className="flex items-center gap-2 hover:text-white transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                contact@cinuteinfomedia.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
