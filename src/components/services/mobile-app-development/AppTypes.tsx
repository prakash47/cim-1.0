"use client";

import { IoLogoApple, IoLogoAndroid } from "react-icons/io5";
import {
    Clock,
    IndianRupee
} from "lucide-react";

import { MdWeb } from "react-icons/md";
import { HiOfficeBuilding } from "react-icons/hi";
import { FaRocket, FaPaintBrush } from "react-icons/fa";
import { BiGitMerge } from "react-icons/bi";
import { SiHuawei } from "react-icons/si";


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
            icon: SiHuawei,
            title: "HarmonyOS App Development",
            description: "Custom HarmonyOS applications built for Huawei’s ecosystem. We develop seamless, distributed apps that run smoothly across phones, tablets, wearables, and IoT devices.",
            features: [
                "HarmonyOS SDK",
                "Distributed App Architecture",
                "Huawei AppGallery Deployment",
                "IoT & Multi-Device Support"
            ],
            gradient: "from-[#ff4b4b] to-[#d6001c]"
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
                <div
                    className="p-10 rounded-3xl border"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    {/* Heading */}
                    <h3
                        className="text-2xl md:text-3xl font-bold mb-10"
                        style={{ color: "var(--foreground)" }}
                    >
                        Choosing the Right Mobile App Development Approach
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full border-separate border-spacing-y-3 text-sm">
                            {/* Table Head */}
                            <thead>
                                <tr>
                                    <th className="text-left px-6 py-4 font-semibold" style={{ color: "var(--secondary-text)" }}>
                                        Approach
                                    </th>
                                    <th className="text-left px-6 py-4 font-semibold" style={{ color: "var(--secondary-text)" }}>
                                        Best For
                                    </th>
                                    <th className="text-left px-6 py-4 font-semibold" style={{ color: "var(--secondary-text)" }}>
                                        Development Time
                                    </th>
                                    <th className="text-left px-6 py-4 font-semibold" style={{ color: "var(--secondary-text)" }}>
                                        Cost
                                    </th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody>
                                {[
                                    {
                                        approach: "Native (iOS)",
                                        icon: IoLogoApple,
                                        gradient: "from-[#000000] to-[#434343]",
                                        best: "Premium iOS experience",
                                        time: "Moderate",
                                        cost: "Higher",
                                    },
                                    {
                                        approach: "Native (Android)",
                                        icon: IoLogoAndroid,
                                        gradient: "from-[#3ddc84] to-[#07c160]",
                                        best: "Android optimization",
                                        time: "Moderate",
                                        cost: "Higher",
                                    },
                                    {
                                        approach: "Cross-Platform",
                                        icon: BiGitMerge,
                                        gradient: "from-[#667eea] to-[#764ba2]",
                                        best: "Multi-platform reach",
                                        time: "Fast",
                                        cost: "Moderate",
                                    },
                                    {
                                        approach: "Hybrid",
                                        icon: MdWeb,
                                        gradient: "from-[#f093fb] to-[#f5576c]",
                                        best: "Rapid prototyping",
                                        time: "Very Fast",
                                        cost: "Lower",
                                    },
                                    {
                                        approach: "Enterprise",
                                        icon: HiOfficeBuilding,
                                        gradient: "from-[#4facfe] to-[#00f2fe]",
                                        best: "Complex & large-scale systems",
                                        time: "Variable",
                                        cost: "Higher",
                                    },
                                ].map((row, index) => (
                                    <tr
                                        key={index}
                                        className="transition-all"
                                        onMouseEnter={(e) =>
                                        (e.currentTarget.style.backgroundColor =
                                            "color-mix(in srgb, var(--brand-purple) 6%, transparent)")
                                        }
                                        onMouseLeave={(e) =>
                                            (e.currentTarget.style.backgroundColor = "transparent")
                                        }
                                    >
                                        {/* Approach */}
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${row.gradient}`}
                                                >
                                                    <row.icon
                                                        className="w-6 h-6 text-white"
                                                    />
                                                </div>
                                                <span
                                                    className="font-semibold"
                                                    style={{ color: "var(--foreground)" }}
                                                >
                                                    {row.approach}
                                                </span>
                                            </div>
                                        </td>

                                        {/* Best For */}
                                        <td className="px-6 py-5" style={{ color: "var(--secondary-text)" }}>
                                            {row.best}
                                        </td>

                                        {/* Time */}
                                        <td className="px-6 py-5">
                                            <span
                                                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                                                style={{
                                                    backgroundColor:
                                                        "color-mix(in srgb, var(--brand-purple) 10%, transparent)",
                                                    color: "var(--brand-purple)",
                                                }}
                                            >
                                                <Clock className="w-3.5 h-3.5" />
                                                {row.time}
                                            </span>
                                        </td>

                                        {/* Cost */}
                                        <td className="px-6 py-5">
                                            <span
                                                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                                                style={{
                                                    backgroundColor:
                                                        "color-mix(in srgb, var(--border-color) 35%, transparent)",
                                                    color: "var(--foreground)",
                                                }}
                                            >
                                                <IndianRupee className="w-3.5 h-3.5" />
                                                {row.cost}
                                            </span>
                                        </td>
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