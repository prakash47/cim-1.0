"use client";

import { CheckCircle2 } from "lucide-react";

export default function Industries() {
    const industries = [
        "IT, SaaS & Software Development",
        "EdTech & E-Learning",
        "HR & Recruitment",
        "Healthcare & Wellness",
        "Retail, Jewelry & E-Commerce",
        "Entertainment & Media",
    ];

    return (
        <section className="py-12 lg:py-16 bg-[var(--background)] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[var(--foreground)]">
                        Industries We Serve
                    </h2>

                    {/* decorative underline uses brand gradient */}
                    <div
                        className="mx-auto mb-6 rounded-full"
                        style={{
                            width: 112,
                            height: 6,
                            background:
                                "linear-gradient(90deg,var(--brand-yellow),var(--brand-orange))",
                        }}
                    />

                    <p className="text-xl max-w-3xl mx-auto text-[var(--secondary-text)]">
                        CIM has experience across multiple sectors, delivering tailored
                        solutions for diverse business needs
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {industries.map((industry, index) => (
                        <div
                            key={industry}
                            // note: using arbitrary animate shorthand so each item delays slightly
                            className={`
                group relative rounded-2xl p-6 transition-all duration-300
                bg-[var(--card-bg)] border-2 border-[var(--border-color)]
                shadow-md hover:shadow-xl flex items-center gap-4
                hover:scale-[1.02]
                animate-[fadeInUp_0.5s_ease_forwards]
              `}
                            style={{ animationDelay: `${index * 80}ms` }}
                        >
                            {/* Icon badge — gradient driven by CSS brand vars */}
                            <div
                                className={`
                  flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center
                  transition-all duration-300 shadow-lg
                  group-hover:scale-110 group-hover:rotate-6
                `}
                                style={{
                                    background:
                                        "linear-gradient(135deg, var(--brand-blue), var(--brand-teal))",
                                }}
                                aria-hidden
                            >
                                <CheckCircle2 className="w-7 h-7 text-white" />
                            </div>

                            <p className="text-base font-semibold transition-colors duration-300 text-[var(--foreground)] group-hover:text-[var(--brand-blue)]">
                                {industry}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* local keyframes used via arbitrary animation name above (kept small & component-scoped) */}
            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </section>
    );
}
