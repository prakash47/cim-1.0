"use client";

import { Target } from "lucide-react";

export default function LeadJourney() {
    const journeyStages = [
        { stage: "Visibility", desc: "Build awareness with the right audience" },
        { stage: "Consideration", desc: "Prospects explore your services" },
        { stage: "Nurturing", desc: "Build trust through engagement" },
        { stage: "Conversion", desc: "Turn prospects into clients" },
        { stage: "Retention", desc: "Foster long-term relationships" },
    ];

    return (
        <section className="py-12 lg:py-16 bg-[var(--background)] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[var(--foreground)]">
                            Understanding the Lead Journey
                        </h2>

                        {/* decorative underline uses brand gradient via CSS var colors */}
                        <div
                            className="mx-auto mb-8 rounded-full w-28 h-1.5 bg-[linear-gradient(90deg,var(--brand-purple),var(--brand-blue))]"
                            aria-hidden
                        />

                        <p className="text-xl text-[var(--secondary-text)] max-w-3xl mx-auto">
                            Marketing works in stages, and it's important to understand that results take time
                        </p>
                    </div>

                    {/* Journey Stages */}
                    <div className="rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-[var(--border-color)] mb-12 bg-[linear-gradient(180deg,rgba(0,0,0,0.00),rgba(0,0,0,0.00))]">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 items-start">
                            {journeyStages.map((item, index) => (
                                <div key={index} className="relative text-center">
                                    {/* Connector Line */} {index < journeyStages.length - 1 && (<div className="hidden md:block absolute top-8 left-[calc(50%+20px)] w-[calc(100%-40px)] h-0.5 bg-gradient-to-r from-[#008ac1] to-[#00b5ca]"> <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#00b5ca] rounded-full"></div> </div>)}

                                    <div>
                                        <div className="w-16 h-16 rounded-2xl bg-[linear-gradient(135deg,var(--brand-blue),var(--brand-teal))] flex items-center justify-center mx-auto mb-4 shadow-xl hover:scale-110 transition-transform duration-300">
                                            <span className="text-white font-bold text-xl">{index + 1}</span>
                                        </div>

                                        <h4 className="text-lg font-bold mb-2 text-[var(--foreground)]">{item.stage}</h4>
                                        <p className="text-sm text-[var(--secondary-text)] leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Philosophy Card */}
                    <div className="rounded-3xl p-8 md:p-12 shadow-xl border-2 border-[var(--border-color)] bg-[linear-gradient(135deg,rgba(0,138,193,0.03),rgba(188,63,235,0.02))]">
                        <div className="flex flex-col lg:flex-row items-start gap-6">
                            <div className="flex-shrink-0 w-20 h-20 rounded-3xl bg-[linear-gradient(135deg,var(--brand-purple),var(--brand-yellow))] flex items-center justify-center shadow-xl">
                                <Target className="w-10 h-10 text-white" />
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">Our Philosophy</h3>
                                <p className="text-lg text-[var(--secondary-text)] leading-relaxed mb-4">
                                    We build systems that support this entire journey, helping businesses attract high-quality leads and turn them into long-term clients.
                                </p>
                                <p className="text-lg text-[var(--secondary-text)] leading-relaxed">
                                    This staged approach ensures that leads are not only generated but also nurtured into high-value, long-term clients.{" "}
                                    <span className="font-semibold text-[var(--brand-blue)]">Results won't appear on day one</span>, but with consistent execution, the funnel delivers sustainable growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
