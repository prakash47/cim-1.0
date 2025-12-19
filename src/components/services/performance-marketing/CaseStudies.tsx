"use client";

import { useState, useEffect } from "react";
import { TrendingUp, DollarSign, Users, Target, ArrowUpRight, Sparkles } from "lucide-react";

export default function CaseStudies() {
    const [counters, setCounters] = useState({
        roas: 0,
        leads: 0,
        cpa: 0,
        revenue: 0,
    });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const element = document.getElementById("case-studies");
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        const targets = { roas: 500, leads: 150, cpa: 45, revenue: 2.5 };
        let step = 0;

        const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const eased = 1 - Math.pow(1 - progress, 3);

            setCounters({
                roas: Math.round(targets.roas * eased),
                leads: Math.round(targets.leads * eased),
                cpa: Math.round(targets.cpa * eased),
                revenue: Math.round(targets.revenue * eased * 10) / 10,
            });

            if (step >= steps) clearInterval(timer);
        }, interval);

        return () => clearInterval(timer);
    }, [isVisible]);

    const caseStudies = [
        {
            industry: "E-commerce",
            icon: TrendingUp,
            before: { spend: "$10K/mo", roas: "150%", leads: "500" },
            after: { spend: "$25K/mo", roas: "520%", leads: "3,200" },
            improvement: "+247%",
            color: "#34a853",
        },
        {
            industry: "SaaS",
            icon: Users,
            before: { spend: "$5K/mo", cpa: "$120", demos: "25" },
            after: { spend: "$15K/mo", cpa: "$45", demos: "180" },
            improvement: "+620%",
            color: "#4285f4",
        },
        {
            industry: "Local Services",
            icon: Target,
            before: { spend: "$2K/mo", leads: "30", costPerLead: "$67" },
            after: { spend: "$5K/mo", leads: "150", costPerLead: "$33" },
            improvement: "+400%",
            color: "#fbbc04",
        },
    ];

    return (
        <section
            id="case-studies"
            className="py-16 md:py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--card-bg)", color: "var(--foreground)" }}
        >
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(135deg, var(--brand-orange) 0%, transparent 50%)`,
                    opacity: 0.1,
                }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-full border backdrop-blur-sm"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-orange) 10%, transparent)",
                            borderColor: "var(--brand-orange)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--brand-orange)" }} />
                        <span className="text-sm font-bold tracking-wide" style={{ color: "var(--brand-orange)" }}>
                            PROVEN RESULTS
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Real Results, <span style={{ color: "var(--brand-orange)" }}>Real Growth</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        See how we've transformed advertising performance for businesses across industries.
                    </p>
                </div>

                {/* Animated Stats Dashboard */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16">
                    {[
                        { label: "Avg. ROAS", value: `${counters.roas}%`, icon: TrendingUp, color: "#34a853" },
                        { label: "Leads Generated", value: `${counters.leads}K+`, icon: Users, color: "#4285f4" },
                        { label: "CPA Reduction", value: `${counters.cpa}%`, icon: DollarSign, color: "#fbbc04" },
                        { label: "Revenue Driven", value: `$${counters.revenue}M+`, icon: Target, color: "#ea4335" },
                    ].map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="p-6 rounded-2xl border text-center transition-all duration-500 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--background) 90%, transparent)",
                                    borderColor: `${stat.color}40`,
                                }}
                            >
                                <Icon className="w-8 h-8 mx-auto mb-3" style={{ color: stat.color }} />
                                <div className="text-3xl lg:text-4xl font-black mb-1" style={{ color: stat.color }}>
                                    {stat.value}
                                </div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>{stat.label}</div>
                            </div>
                        );
                    })}
                </div>

                {/* Case Study Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {caseStudies.map((study, index) => {
                        const Icon = study.icon;
                        return (
                            <div
                                key={index}
                                className="p-6 rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--background) 90%, transparent)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-12 h-12 rounded-xl p-2.5"
                                            style={{ backgroundColor: `${study.color}20` }}
                                        >
                                            <Icon className="w-full h-full" style={{ color: study.color }} />
                                        </div>
                                        <span className="font-bold text-lg">{study.industry}</span>
                                    </div>
                                    <div
                                        className="flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold"
                                        style={{ backgroundColor: `${study.color}20`, color: study.color }}
                                    >
                                        <ArrowUpRight className="w-4 h-4" />
                                        {study.improvement}
                                    </div>
                                </div>

                                {/* Before/After */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-xl" style={{ backgroundColor: "color-mix(in srgb, var(--border-color) 30%, transparent)" }}>
                                        <div className="text-xs font-bold mb-2" style={{ color: "var(--secondary-text)" }}>BEFORE</div>
                                        {Object.entries(study.before).map(([key, value]) => (
                                            <div key={key} className="text-sm mb-1">
                                                <span style={{ color: "var(--secondary-text)" }}>{key}: </span>
                                                <span className="font-medium">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="p-4 rounded-xl" style={{ backgroundColor: `${study.color}15` }}>
                                        <div className="text-xs font-bold mb-2" style={{ color: study.color }}>AFTER</div>
                                        {Object.entries(study.after).map(([key, value]) => (
                                            <div key={key} className="text-sm mb-1">
                                                <span style={{ color: "var(--secondary-text)" }}>{key}: </span>
                                                <span className="font-bold" style={{ color: study.color }}>{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
