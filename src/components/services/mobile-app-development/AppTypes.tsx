"use client";

import { IoLogoApple, IoLogoAndroid } from "react-icons/io5";
import { TbDeviceMobileCode } from "react-icons/tb";
import { MdWeb } from "react-icons/md";
import { HiOfficeBuilding } from "react-icons/hi";
import { FaRocket, FaPaintBrush } from "react-icons/fa";
import { BiGitMerge } from "react-icons/bi";

export default function AppTypes() {
    const appTypes = [
        {
            icon: IoLogoApple,
            title: "iOS App Development",
            description: "Native iOS apps built with Swift and SwiftUI. We create beautiful, performant apps that leverage Apple's latest technologies and frameworks.",
            features: ["Swift & SwiftUI", "App Store Optimization", "iCloud Integration", "Push Notifications"],
            gradient: "from-[#000000] to-[#434343]"
        },
        {
            icon: IoLogoAndroid,
            title: "Android App Development",
            description: "Robust Android applications using Kotlin and Jetpack. Our apps are optimized for the diverse Android ecosystem and device variations.",
            features: ["Kotlin & Jetpack", "Play Store Optimization", "Firebase Integration", "Material Design"],
            gradient: "from-[#3ddc84] to-[#07c160]"
        },
        {
            icon: BiGitMerge,
            title: "Cross-Platform App Development",
            description: "React Native and Flutter solutions that work seamlessly across iOS and Android. Reduce development time while maintaining native performance.",
            features: ["React Native", "Flutter", "Code Reusability", "Faster Time-to-Market"],
            gradient: "from-[#667eea] to-[#764ba2]"
        },
        {
            icon: MdWeb,
            title: "Hybrid App Development",
            description: "Web-based mobile apps using technologies like Ionic and Cordova. Perfect for rapid prototyping and MVP development.",
            features: ["Ionic Framework", "Cordova", "Web Technologies", "Quick Deployment"],
            gradient: "from-[#f093fb] to-[#f5576c]"
        },
        {
            icon: HiOfficeBuilding,
            title: "Enterprise Mobile Applications",
            description: "Large-scale, mission-critical applications for enterprises. We handle complex requirements, security, and integration with existing systems.",
            features: ["Enterprise Security", "Legacy System Integration", "Scalability", "Compliance & Governance"],
            gradient: "from-[#4facfe] to-[#00f2fe]"
        },
        {
            icon: FaRocket,
            title: "MVP App Development",
            description: "Rapid development of minimum viable products to validate your business idea. Get to market quickly with essential features.",
            features: ["Agile Development", "Cost-Effective", "Rapid Prototyping", "Quick Iterations"],
            gradient: "from-[#fa709a] to-[#fee140]"
        },
        {
            icon: FaPaintBrush,
            title: "UI/UX Focused Mobile Apps",
            description: "Apps designed with user experience at the core. Beautiful interfaces combined with intuitive navigation and delightful interactions.",
            features: ["User Research", "Wireframing & Prototyping", "Interactive Design", "Accessibility"],
            gradient: "from-[#30cfd0] to-[#330867]"
        }
    ];

    return (
        <section
            className="relative transition-colors duration-300 py-20 md:py-28"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-30"
                    style={{ backgroundColor: "color-mix(in srgb, var(--brand-yellow) 20%, transparent)" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeIn">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
                        <span style={{ color: "var(--brand-purple)" }}>Types</span> of Mobile App Development
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We specialize in all types of mobile app development, from native platforms to cross-platform solutions. Choose the approach that best fits your business needs.
                    </p>
                </div>

                {/* App Types Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {appTypes.map((type, index) => {
                        const Icon = type.icon;
                        return (
                            <div
                                key={index}
                                className="group relative h-full p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105 border overflow-hidden"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                {/* Gradient Overlay */}
                                <div
                                    className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${type.gradient}`}
                                />

                                <div className="relative z-10">
                                    <div
                                        className={`w-12 h-12 rounded-lg p-2.5 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 bg-gradient-to-br ${type.gradient}`}
                                    >
                                        <Icon className="w-full h-full text-white" />
                                    </div>

                                    <h3 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                        {type.title}
                                    </h3>

                                    <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
                                        {type.description}
                                    </p>

                                    {/* Features List */}
                                    <div className="space-y-2">
                                        {type.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm">
                                                <span
                                                    className="w-1.5 h-1.5 rounded-full"
                                                    style={{ backgroundColor: "var(--brand-purple)" }}
                                                />
                                                <span style={{ color: "var(--secondary-text)" }}>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Detailed Comparison */}
                <div className="p-8 rounded-2xl border" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                    <h3 className="text-2xl font-bold mb-8">Choosing the Right Approach</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr style={{ borderBottomColor: "var(--border-color)" }} className="border-b">
                                    <th className="text-left py-3 px-4 font-semibold">Approach</th>
                                    <th className="text-left py-3 px-4 font-semibold">Best For</th>
                                    <th className="text-left py-3 px-4 font-semibold">Development Time</th>
                                    <th className="text-left py-3 px-4 font-semibold">Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { approach: "Native (iOS)", best: "Premium iOS experience", time: "Moderate", cost: "Higher" },
                                    { approach: "Native (Android)", best: "Android optimization", time: "Moderate", cost: "Higher" },
                                    { approach: "Cross-Platform", best: "Multi-platform reach", time: "Fast", cost: "Moderate" },
                                    { approach: "Hybrid", best: "Rapid prototyping", time: "Very Fast", cost: "Lower" },
                                    { approach: "Enterprise", best: "Complex requirements", time: "Variable", cost: "Higher" },
                                ].map((row, index) => (
                                    <tr key={index} style={{ borderBottomColor: "var(--border-color)" }} className="border-b hover:bg-opacity-50 transition-colors" onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--brand-purple) 5%, transparent)")} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}>
                                        <td className="py-3 px-4 font-medium">{row.approach}</td>
                                        <td className="py-3 px-4">{row.best}</td>
                                        <td className="py-3 px-4">{row.time}</td>
                                        <td className="py-3 px-4">{row.cost}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}