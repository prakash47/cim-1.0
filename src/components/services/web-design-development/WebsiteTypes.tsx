"use client";

import { Globe, ShoppingCart, Zap, BookOpen, Image as ImageIcon, Layout, Code, Settings } from "lucide-react";

export default function WebsiteTypes() {
    const types = [
        {
            icon: Layout,
            title: "Static Websites",
            description: "Ideal for simple, fast-loading sites where content rarely changes. Excellent for performance and security.",
            features: ["Lightning-fast loading", "Minimal maintenance", "High security", "Perfect for portfolios"],
            color: "from-[#008ac1] to-[#00b5ca]",
        },
        {
            icon: Zap,
            title: "Dynamic Websites",
            description: "Perfect for content that updates frequently, such as blogs, news portals, or personalized user dashboards.",
            features: ["Real-time updates", "User personalization", "Database-driven", "Content management"],
            color: "from-[#bc3feb] to-[#fab900]",
        },
        {
            icon: Globe,
            title: "Business Websites",
            description: "Professional, authoritative sites designed to establish credibility and communicate brand value to stakeholders.",
            features: ["Brand authority", "Lead generation", "Professional design", "Trust building"],
            color: "from-[#fab900] to-[#ee6500]",
        },
        {
            icon: ShoppingCart,
            title: "E-commerce Websites",
            description: "High-converting online stores with secure payment gateways, inventory management, and seamless checkout flows.",
            features: ["Secure payments", "Inventory management", "Shopping cart", "Order tracking"],
            color: "from-[#00efd6] to-[#00b5ca]",
        },
        {
            icon: Code,
            title: "Web Applications",
            description: "Complex, interactive software solutions like CRMs, project management tools, or custom business automation platforms.",
            features: ["Real-time interactions", "Complex logic", "Scalable", "API integrations"],
            color: "from-[#008ac1] to-[#bc3feb]",
        },
        {
            icon: BookOpen,
            title: "Landing Pages",
            description: "Single-page sites hyper-focused on a specific campaign goal, designed for maximum conversion rates.",
            features: ["High conversion focus", "Campaign-specific", "Fast loading", "Clear CTA"],
            color: "from-[#ee6500] to-[#fab900]",
        },
        {
            icon: ImageIcon,
            title: "Portfolio Websites",
            description: "Visually stunning platforms to showcase creative work, case studies, and professional achievements.",
            features: ["Visual showcase", "Case studies", "Professional presentation", "Client testimonials"],
            color: "from-[#bc3feb] to-[#008ac1]",
        },
        {
            icon: Settings,
            title: "CMS-Based Websites",
            description: "Easy-to-manage sites built on platforms like WordPress, Strapi, or Contentful, giving you full control over content.",
            features: ["Easy content updates", "No coding required", "Flexible", "Scalable"],
            color: "from-[#00b5ca] to-[#00efd6]",
        },
    ];

    return (
        <section
            className="py-10 lg:py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Comprehensive <span style={{ color: "var(--brand-blue)", fontWeight: 700 }}>Custom Website Development</span> Solutions
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        We offer a full spectrum of web solutions to meet any business need. Our expertise covers every type of website imaginable.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))",
                        }}
                    />
                </div>

                {/* Website Types Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {types.map((type, idx) => {
                        const Icon = type.icon;
                        return (
                            <div
                                key={idx}
                                className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg hover:-translate-y-2 h-full flex flex-col"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                {/* Header with Icon */}
                                <div
                                    className={`flex gap-3 p-6 bg-gradient-to-br ${type.color} relative overflow-hidden`}
                                >
                                    <div className="absolute inset-0 opacity-10" style={{ background: "linear-gradient(135deg, white, transparent)" }} />
                                    <Icon className="w-8 h-8 text-white relative z-10" />
                                    <h3 className="text-lg font-bold mb-3 text-white">
                                        {type.title}
                                    </h3>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">


                                    <p className="text-sm mb-6 flex-1" style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>
                                        {type.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-2">
                                        {type.features.map((feature, fidx) => (
                                            <li key={fidx} className="flex items-start gap-2 text-sm">
                                                <span
                                                    className={`w-4 h-4 rounded-full flex-shrink-0 mt-0.5 bg-gradient-to-br ${type.color}`}
                                                />
                                                <span style={{ color: "var(--secondary-text)" }}>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Info Box */}
                <div
                    className="mt-16 rounded-2xl p-8 md:p-12 border"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                        Not Sure Which Type You Need?
                    </h3>

                    <p className="mb-6" style={{ color: "var(--secondary-text)", lineHeight: "1.8" }}>
                        Our team of experts can help you determine the best solution for your specific business needs. Whether you need a simple landing page, a complex web application, or an e-commerce platform, we have the expertise to deliver.
                    </p>

                    <button
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#008ac1] to-[#00b5ca] text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        Schedule a Consultation
                        <span>→</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
