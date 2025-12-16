"use client";

import { FaMobileAlt, FaReact, FaRocket, FaPalette, FaServer, FaShieldAlt } from "react-icons/fa";
import { MdOutlineDevices, MdSpeed } from "react-icons/md";
import { IoLogoApple, IoLogoAndroid } from "react-icons/io";

export default function ServiceOverview() {
    const services = [
        {
            icon: FaMobileAlt,
            title: "Native App Development",
            description: "Build high-performance iOS and Android apps with native technologies for optimal user experience and platform-specific features.",
            gradient: "from-[#667eea] to-[#764ba2]"
        },
        {
            icon: FaReact,
            title: "Cross-Platform Solutions",
            description: "Develop once, deploy everywhere with React Native and Flutter technologies for cost-effective multi-platform coverage.",
            gradient: "from-[#f093fb] to-[#f5576c]"
        },
        {
            icon: MdSpeed,
            title: "Performance Optimization",
            description: "Ensure lightning-fast apps with optimized code, efficient databases, and advanced caching strategies.",
            gradient: "from-[#4facfe] to-[#00f2fe]"
        },
        {
            icon: FaPalette,
            title: "User-Centric Design",
            description: "Create intuitive, beautiful interfaces that users love with our expert UI/UX design team.",
            gradient: "from-[#43e97b] to-[#38f9d7]"
        },
        {
            icon: FaServer,
            title: "Scalable Backend",
            description: "Build robust backend infrastructure that scales with your app's growth and user base.",
            gradient: "from-[#fa709a] to-[#fee140]"
        },
        {
            icon: FaShieldAlt,
            title: "Enterprise Security",
            description: "Implement industry-leading security practices including encryption, authentication, and data protection.",
            gradient: "from-[#30cfd0] to-[#330867]"
        }
    ];

    return (
        <section
            id="overview"
            className="relative transition-colors duration-300 py-20"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeIn">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl mx-auto font-extrabold mb-4">
                        Comprehensive<span style={{ color: "var(--brand-purple)" }}> Mobile App Development Services</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-5xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We offer end-to-end mobile app development solutions tailored to your business needs, from concept to deployment and beyond.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="group p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105 border"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--card-bg) 80%, var(--brand-purple) 20%)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "var(--card-bg)";
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className={`flex-shrink-0 w-12 h-12 rounded-lg p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 bg-gradient-to-br ${service.gradient}`}
                                    >
                                        <Icon className="w-full h-full text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                                            {service.title}
                                        </h3>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Key Benefits */}
                <div className="mt-16 p-8 rounded-2xl border" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                    <h3 className="text-2xl font-bold mb-6">What Makes Our Mobile App Development Services Stand Out?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--brand-purple), var(--brand-yellow))" }}>
                                <span className="text-white text-sm font-bold">✓</span>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Expert Team</h4>
                                <p style={{ color: "var(--secondary-text)" }}>Experienced developers with proven track record in delivering enterprise-grade mobile applications.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--brand-purple), var(--brand-yellow))" }}>
                                <span className="text-white text-sm font-bold">✓</span>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Agile Methodology</h4>
                                <p style={{ color: "var(--secondary-text)" }}>Flexible development approach with regular updates and transparent communication throughout the project.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--brand-purple), var(--brand-yellow))" }}>
                                <span className="text-white text-sm font-bold">✓</span>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Post-Launch Support</h4>
                                <p style={{ color: "var(--secondary-text)" }}>Comprehensive maintenance, updates, and technical support after your app goes live.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--brand-purple), var(--brand-yellow))" }}>
                                <span className="text-white text-sm font-bold">✓</span>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Proven Success</h4>
                                <p style={{ color: "var(--secondary-text)" }}>200+ mobile apps delivered with 98% client satisfaction rate and millions of active users.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}