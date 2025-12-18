"use client";

import { CheckCircle, Search, Pencil, Brain, Rocket, TestTube, Activity, ArrowRight, Zap } from "lucide-react";

export default function Process() {
    const steps = [
        {
            number: "01",
            title: "Process Analysis",
            description: "We deeply analyze your current workflows, identify bottlenecks, and understand your business objectives to design optimal automation strategies.",
            icon: Search,
            color: "from-blue-500 to-cyan-500",
            iconBg: "bg-blue-500/10",
            iconColor: "text-blue-500",
        },
        {
            number: "02",
            title: "Workflow Design",
            description: "Our experts design intelligent workflows that incorporate AI logic, decision trees, and integration points tailored to your specific needs.",
            icon: Pencil,
            color: "from-purple-500 to-pink-500",
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-500",
        },
        {
            number: "03",
            title: "AI Model Integration",
            description: "We integrate advanced AI models and APIs - from NLP to predictive analytics - to power intelligent decision-making within your workflows.",
            icon: Brain,
            color: "from-violet-500 to-purple-500",
            iconBg: "bg-violet-500/10",
            iconColor: "text-violet-500",
        },
        {
            number: "04",
            title: "Automation Setup",
            description: "We configure and deploy the automation infrastructure, integrate with your existing systems, and ensure seamless data flow.",
            icon: Zap,
            color: "from-amber-500 to-orange-500",
            iconBg: "bg-amber-500/10",
            iconColor: "text-amber-500",
        },
        {
            number: "05",
            title: "Testing & Optimization",
            description: "Rigorous testing ensures reliability and performance. We optimize workflows based on real-world data and feedback.",
            icon: TestTube,
            color: "from-green-500 to-emerald-500",
            iconBg: "bg-green-500/10",
            iconColor: "text-green-500",
        },
        {
            number: "06",
            title: "Deployment & Monitoring",
            description: "We deploy your workflows to production and provide continuous monitoring, maintenance, and optimization for peak performance.",
            icon: Activity,
            color: "from-rose-500 to-red-500",
            iconBg: "bg-rose-500/10",
            iconColor: "text-rose-500",
        },
    ];

    return (
        <>
            <style jsx>{`
                @keyframes progress-line {
                    0% { height: 0; }
                    100% { height: 100%; }
                }
                @keyframes pulse-dot {
                    0%, 100% { 
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% { 
                        transform: scale(1.5);
                        opacity: 0.5;
                    }
                }
                @keyframes slide-in-left {
                    0% { 
                        transform: translateX(-50px);
                        opacity: 0;
                    }
                    100% { 
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                @keyframes slide-in-right {
                    0% { 
                        transform: translateX(50px);
                        opacity: 0;
                    }
                    100% { 
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                @keyframes icon-rotate {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes glow-pulse {
                    0%, 100% { 
                        box-shadow: 0 0 0 0 rgba(251, 146, 60, 0.4);
                    }
                    50% { 
                        box-shadow: 0 0 30px 10px rgba(251, 146, 60, 0.2);
                    }
                }
                @keyframes number-pop {
                    0% { 
                        transform: scale(0) rotate(-180deg);
                        opacity: 0;
                    }
                    50% { 
                        transform: scale(1.2) rotate(10deg);
                    }
                    100% { 
                        transform: scale(1) rotate(0deg);
                        opacity: 1;
                    }
                }
                @keyframes connect-draw {
                    0% { stroke-dashoffset: 1000; }
                    100% { stroke-dashoffset: 0; }
                }
                
                .animate-progress-line { animation: progress-line 2s ease-out forwards; }
                .animate-pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }
                .animate-slide-in-left { animation: slide-in-left 0.6s ease-out forwards; }
                .animate-slide-in-right { animation: slide-in-right 0.6s ease-out forwards; }
                .animate-glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }
                .animate-number-pop { animation: number-pop 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; }
            `}</style>

            <section
                className="py-20 transition-colors duration-300 relative overflow-hidden"
                style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
            >
                {/* Decorative background elements */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
                </div>

                <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-20 animate-fadeIn" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                            Our AI Workflow <span style={{ color: "var(--brand-orange)" }}>Development Process</span>
                        </h2>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                            A proven, systematic approach to designing and deploying enterprise-grade AI automation solutions.
                        </p>
                    </div>

                    {/* Process Steps - Zigzag Timeline */}
                    <div className="relative max-w-6xl mx-auto">
                        {/* Central vertical line */}
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2">
                            <div className="w-full h-full bg-gradient-to-b from-blue-500 via-purple-500 via-orange-500 to-rose-500 opacity-20" />
                        </div>

                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className="relative mb-16 lg:mb-24"
                                >
                                    {/* Desktop zigzag layout */}
                                    <div className={`hidden lg:grid lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'direction-rtl'}`}>
                                        {/* Content side */}
                                        <div
                                            className={`${isEven ? 'text-right' : 'text-left lg:col-start-2'} animate-fadeIn`}
                                            style={{
                                                animationDelay: `${0.2 + index * 0.15}s`,
                                                animationFillMode: "both",
                                            }}
                                        >
                                            <div className="group relative p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                                                style={{
                                                    backgroundColor: "var(--card-bg)",
                                                    borderColor: "var(--border-color)",
                                                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                                }}
                                            >
                                                {/* Gradient background */}
                                                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                                {/* Number badge */}
                                                <div
                                                    className={`inline-block mb-4 px-4 py-2 rounded-full text-sm font-bold ${step.iconBg} ${step.iconColor}`}
                                                >
                                                    Step {step.number}
                                                </div>

                                                <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
                                                    {step.title}
                                                </h3>
                                                <p className="text-base leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                                    {step.description}
                                                </p>

                                                {/* Arrow indicator */}
                                                <div className={`absolute top-1/2 ${isEven ? '-right-8' : '-left-8'} transform -translate-y-1/2`}>
                                                    <ArrowRight
                                                        className={`w-6 h-6 ${step.iconColor} ${isEven ? '' : 'rotate-180'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Icon side with connecting line */}
                                        <div className={`${isEven ? '' : 'lg:col-start-1 lg:row-start-1'} relative`}>
                                            <div className="flex justify-center">
                                                <div
                                                    className={`relative w-32 h-32 rounded-2xl ${step.iconBg} flex items-center justify-center border-4 transition-all duration-500 hover:scale-110 hover:rotate-6 animate-fadeIn animate-glow-pulse`}
                                                    style={{
                                                        borderColor: "var(--border-color)",
                                                        animationDelay: `${0.3 + index * 0.15}s`,
                                                        animationFillMode: "both",
                                                    }}
                                                >
                                                    <Icon className={`w-16 h-16 ${step.iconColor}`} strokeWidth={2} />

                                                    {/* Number overlay */}
                                                    <div
                                                        className="absolute -top-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg animate-number-pop"
                                                        style={{
                                                            background: `linear-gradient(135deg, ${step.color})`,
                                                            color: "var(--foreground)",
                                                            animationDelay: `${0.4 + index * 0.15}s`,
                                                            animationFillMode: "both",
                                                        }}
                                                    >
                                                        {step.number}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mobile layout */}
                                    <div className="lg:hidden flex gap-4 animate-fadeIn"
                                        style={{
                                            animationDelay: `${0.2 + index * 0.1}s`,
                                            animationFillMode: "both",
                                        }}
                                    >
                                        {/* Icon */}
                                        <div className="flex-shrink-0">
                                            <div
                                                className={`relative w-20 h-20 rounded-xl ${step.iconBg} flex items-center justify-center border-2`}
                                                style={{ borderColor: "var(--border-color)" }}
                                            >
                                                <Icon className={`w-10 h-10 ${step.iconColor}`} strokeWidth={2} />
                                                <div
                                                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg"
                                                    style={{ background: `linear-gradient(135deg, ${step.color})` }}
                                                >
                                                    {step.number}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 p-6 rounded-xl border" style={{
                                            backgroundColor: "var(--card-bg)",
                                            borderColor: "var(--border-color)",
                                        }}>
                                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                            <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Connecting dots on timeline */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:block absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-12">
                                            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 animate-pulse-dot" />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Timeline & Deliverables */}
                    <div className="mt-24 p-10 rounded-3xl border animate-fadeIn relative overflow-hidden"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                            borderColor: "var(--border-color)",
                            animationDelay: "1.2s",
                            animationFillMode: "both",
                        }}
                    >
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-purple-500/10 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg">
                                    <Rocket className="w-7 h-7 text-white" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold">Timeline & Deliverables</h3>
                                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                        Expected timeframes and key outputs for each phase
                                    </p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    {
                                        phase: "Discovery",
                                        duration: "1-2 weeks",
                                        deliverables: "Requirements doc, process maps, recommendations",
                                        color: "from-blue-500 to-cyan-500",
                                        icon: Search,
                                    },
                                    {
                                        phase: "Design",
                                        duration: "2-3 weeks",
                                        deliverables: "Workflow diagrams, AI integration plan, architecture",
                                        color: "from-purple-500 to-pink-500",
                                        icon: Pencil,
                                    },
                                    {
                                        phase: "Development",
                                        duration: "3-6 weeks",
                                        deliverables: "Workflow code, integrations, test cases",
                                        color: "from-violet-500 to-purple-500",
                                        icon: Brain,
                                    },
                                    {
                                        phase: "Testing",
                                        duration: "1-2 weeks",
                                        deliverables: "Test reports, performance metrics, optimization",
                                        color: "from-green-500 to-emerald-500",
                                        icon: TestTube,
                                    },
                                    {
                                        phase: "Deployment",
                                        duration: "1 week",
                                        deliverables: "Production setup, documentation, training",
                                        color: "from-amber-500 to-orange-500",
                                        icon: Zap,
                                    },
                                    {
                                        phase: "Support",
                                        duration: "Ongoing",
                                        deliverables: "Monitoring, optimization, enhancements",
                                        color: "from-rose-500 to-red-500",
                                        icon: Activity,
                                    },
                                ].map((item, i) => {
                                    const PhaseIcon = item.icon;
                                    return (
                                        <div
                                            key={i}
                                            className="group relative p-6 rounded-2xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden"
                                            style={{
                                                backgroundColor: "var(--card-bg)",
                                                borderColor: "var(--border-color)",
                                            }}
                                        >
                                            {/* Gradient overlay */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                            {/* Icon */}
                                            <div className="relative z-10 mb-4">
                                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                                                    <PhaseIcon className="w-6 h-6 text-white" strokeWidth={2.5} />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="relative z-10">
                                                <div className="flex items-center justify-between mb-3">
                                                    <h4 className="text-lg font-bold">{item.phase}</h4>
                                                    <CheckCircle className="w-5 h-5 transition-colors duration-300 group-hover:scale-110" style={{ color: "var(--brand-orange)" }} />
                                                </div>
                                                <p className="text-sm font-semibold mb-3" style={{ color: "var(--brand-orange)" }}>
                                                    ⏱ {item.duration}
                                                </p>
                                                <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                                    {item.deliverables}
                                                </p>
                                            </div>

                                            {/* Bottom accent */}
                                            <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${item.color} group-hover:w-full transition-all duration-500`} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}