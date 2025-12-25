"use client";

import { Heart, DollarSign, ShoppingBag, GraduationCap, Factory, Briefcase, CheckCircle2, TrendingUp, Users, Award, Lightbulb, GitBranch } from "lucide-react";
import Link from "next/link";

export default function IndustriesAndUseCases() {
    const industries = [
        {
            icon: Heart,
            name: "Healthcare",
            useCases: [
                "Patient data processing and appointment scheduling",
                "Medical record automation and compliance",
                "Insurance claim processing",
                "Diagnostic support and triage automation",
            ],
            gradient: "from-red-500 to-pink-500",
            iconBg: "bg-red-500/10",
            iconColor: "text-red-500",
            animation: "heartbeat",
        },
        {
            icon: DollarSign,
            name: "Finance",
            useCases: [
                "Invoice and payment processing",
                "Fraud detection and risk assessment",
                "Loan application automation",
                "Regulatory compliance and reporting",
            ],
            gradient: "from-green-500 to-emerald-500",
            iconBg: "bg-green-500/10",
            iconColor: "text-green-500",
            animation: "coin-flip",
        },
        {
            icon: ShoppingBag,
            name: "E-commerce",
            useCases: [
                "Order processing and fulfillment",
                "Customer service chatbots",
                "Inventory management automation",
                "Personalized recommendation engines",
            ],
            gradient: "from-purple-500 to-violet-500",
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-500",
            animation: "cart-bounce",
        },
        {
            icon: GraduationCap,
            name: "Education",
            useCases: [
                "Student enrollment and onboarding",
                "Grading and assessment automation",
                "Personalized learning paths",
                "Administrative task automation",
            ],
            gradient: "from-blue-500 to-cyan-500",
            iconBg: "bg-blue-500/10",
            iconColor: "text-blue-500",
            animation: "graduation-toss",
        },
        {
            icon: Factory,
            name: "Manufacturing",
            useCases: [
                "Supply chain optimization",
                "Quality control and inspection",
                "Predictive maintenance",
                "Production scheduling automation",
            ],
            gradient: "from-slate-600 to-slate-800",
            iconBg: "bg-slate-500/10",
            iconColor: "text-slate-600",
            animation: "gear-rotate",
        },
        {
            icon: Briefcase,
            name: "SaaS & Enterprises",
            useCases: [
                "Customer onboarding workflows",
                "Billing and subscription management",
                "Support ticket automation",
                "Data pipeline and analytics automation",
            ],
            gradient: "from-orange-500 to-amber-500",
            iconBg: "bg-orange-500/10",
            iconColor: "text-orange-500",
            animation: "briefcase-swing",
        },
    ];

    return (
        <>
            <style jsx>{`
                @keyframes metric-count {
                    0% { transform: scale(0.8); opacity: 0; }
                    50% { transform: scale(1.1); }
                    100% { transform: scale(1); opacity: 1; }
                }
                @keyframes ripple {
                    0% { 
                        box-shadow: 0 0 0 0 rgba(251, 146, 60, 0.4),
                                    0 0 0 0 rgba(251, 146, 60, 0.4);
                    }
                    50% {
                        box-shadow: 0 0 0 10px rgba(251, 146, 60, 0),
                                    0 0 0 0 rgba(251, 146, 60, 0.4);
                    }
                    100% {
                        box-shadow: 0 0 0 10px rgba(251, 146, 60, 0),
                                    0 0 0 20px rgba(251, 146, 60, 0);
                    }
                }
                @keyframes float-subtle {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-5px); }
                }
                @keyframes pulse-glow {
                    0%, 100% { 
                        box-shadow: 0 0 0 0 rgba(251, 146, 60, 0.2);
                        transform: scale(1);
                    }
                    50% { 
                        box-shadow: 0 0 20px 10px rgba(251, 146, 60, 0.1);
                        transform: scale(1.02);
                    }
                }
                
                .animate-metric-count { animation: metric-count 0.8s ease-out forwards; }
                .animate-ripple { animation: ripple 2s ease-out infinite; }
                .animate-float-subtle { animation: float-subtle 3s ease-in-out infinite; }
                .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
            `}</style>

            <section
                className="py-20 transition-colors duration-300"
                style={{
                    backgroundColor: "var(--card-bg)",
                    borderColor: "var(--border-color)",
                }}
            >
                <div className="mx-auto px-6 md:px-12 xl:px-20">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-fadeIn" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ color: "var(--foreground)" }}>
                            Industries & <span style={{ color: "var(--brand-orange)" }}>Use Cases</span>
                        </h2>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                            AI automation transforms operations across industries. See how we're helping organizations like yours achieve operational excellence.
                        </p>
                    </div>

                    {/* Industries Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((industry, index) => {
                            const Icon = industry.icon;

                            return (
                                <div
                                    key={index}
                                    className="group relative p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 border animate-fadeIn overflow-hidden"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                        animationDelay: `${0.2 + index * 0.1}s`,
                                        animationFillMode: "both",
                                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {/* Gradient overlay */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                    />

                                    {/* Animated corner lines */}
                                    <div className="absolute top-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${industry.gradient} transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500`} />
                                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${industry.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100`} />
                                    </div>

                                    {/* Icon container */}
                                    <div className="relative mb-5 z-10">
                                        <div
                                            className={`w-16 h-16 rounded-xl ${industry.iconBg} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}
                                        >
                                            <Icon className={`w-8 h-8 ${industry.iconColor} transition-transform duration-300 group-hover:scale-110`} strokeWidth={2.5} />
                                        </div>

                                        {/* Decorative ring */}
                                        <div className={`absolute inset-0 rounded-xl border-2 ${industry.iconColor} opacity-0 group-hover:opacity-20 group-hover:animate-ripple`} />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: "var(--foreground)" }}>
                                            {industry.name}
                                        </h3>
                                        <ul className="space-y-3">
                                            {industry.useCases.map((useCase, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200"
                                                >
                                                    <CheckCircle2
                                                        className="w-4 h-4 flex-shrink-0 mt-0.5 transition-all duration-200 group-hover/item:scale-110"
                                                        style={{ color: "var(--brand-orange)" }}
                                                    />
                                                    <span className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                                        {useCase}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Bottom gradient line */}
                                    <div
                                        className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${industry.gradient} group-hover:w-full transition-all duration-700 ease-out`}
                                    />

                                    {/* Background icon watermark */}
                                    <div className="absolute -bottom-4 -right-4 opacity-0 group-hover:opacity-5 transition-all duration-500 transform group-hover:scale-110">
                                        <Icon className={`w-28 h-28 ${industry.iconColor}`} strokeWidth={1} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Impact Section */}
                    <div className="mt-16 grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Award,
                                metric: "50+",
                                label: "Industries Served",
                                gradient: "from-blue-500 to-cyan-500",
                                delay: "1.2s",
                            },
                            {
                                icon: TrendingUp,
                                metric: "1000+",
                                label: "Workflows Deployed",
                                gradient: "from-purple-500 to-pink-500",
                                delay: "1.3s",
                            },
                            {
                                icon: Users,
                                metric: "$10M+",
                                label: "Client Savings Generated",
                                gradient: "from-green-500 to-emerald-500",
                                delay: "1.4s",
                            },
                        ].map((item, i) => {
                            const MetricIcon = item.icon;
                            return (
                                <div
                                    key={i}
                                    className="group relative p-8 rounded-2xl text-center border animate-fadeIn overflow-hidden animate-pulse-glow"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                                        borderColor: "var(--border-color)",
                                        animationDelay: item.delay,
                                        animationFillMode: "both",
                                    }}
                                >
                                    {/* Animated gradient background */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                    />

                                    {/* Icon */}
                                    <div className="relative z-10 flex justify-center mb-4">
                                        <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center animate-float-subtle`}>
                                            <MetricIcon className="w-7 h-7 text-white" strokeWidth={2.5} />
                                        </div>
                                    </div>

                                    {/* Metric */}
                                    <div className="relative z-10">
                                        <div
                                            className="text-5xl md:text-6xl font-extrabold mb-3 animate-metric-count"
                                            style={{
                                                background: `linear-gradient(135deg, var(--brand-orange), var(--brand-orange))`,
                                                WebkitBackgroundClip: "text",
                                                backgroundClip: "text",
                                                color: "transparent",
                                                animationDelay: item.delay,
                                            }}
                                        >
                                            {item.metric}
                                        </div>
                                        <p className="text-lg font-semibold" style={{ color: "var(--secondary-text)" }}>
                                            {item.label}
                                        </p>
                                    </div>

                                    {/* Decorative circles */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br ${item.gradient} animate-ping`} />
                                        <div className={`absolute bottom-4 left-4 w-2 h-2 rounded-full bg-gradient-to-br ${item.gradient} animate-ping`} style={{ animationDelay: "0.5s" }} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Custom Solutions CTA */}
                    <div
                        className="mt-16 p-8 md:p-10 rounded-2xl border text-center animate-fadeIn relative overflow-hidden group"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                            borderColor: "var(--border-color)",
                            animationDelay: "1.2s",
                            animationFillMode: "both",
                        }}
                    >
                        {/* Animated gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Decorative elements */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-orange-500/30 animate-ping" />
                            <div className="absolute top-20 right-20 w-2 h-2 rounded-full bg-amber-500/30 animate-ping" style={{ animationDelay: "0.5s" }} />
                            <div className="absolute bottom-10 left-1/4 w-2 h-2 rounded-full bg-orange-500/30 animate-ping" style={{ animationDelay: "1s" }} />
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center animate-pulse">
                                    <Lightbulb className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <h3 className="text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>Don't See Your Use Case?</h3>
                            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                                We specialize in custom AI workflow solutions tailored to your unique business requirements. Whether it's a complex integration, predictive analytics, or a completely novel automation, our team can build it.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#fab900] to-[#ee6500] hover:from-[#ee6500] hover:to-[#fab900] text-white font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group/button"
                            >
                                <span>Discuss Your Custom Solution</span>
                                <GitBranch className="w-5 h-5 group-hover/button:rotate-12 transition-transform duration-300" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}