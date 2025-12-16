"use client";

import { Code2, Server, Database, Cloud } from "lucide-react";
import Image from "next/image";

export default function Technologies() {
    const techCategories = [
        {
            icon: Code2,
            title: "Mobile Frameworks",
            technologies: [
                { name: "React Native", description: "Cross-platform development", logo: "/images/techstack_logos/react-logo.svg" },
                { name: "Flutter", description: "High-performance apps", logo: "/images/techstack_logos/flutter-logo.svg" },
                { name: "Swift", description: "Native iOS development", logo: "/images/techstack_logos/swift-logo.svg" },
                { name: "Kotlin", description: "Native Android development", logo: "/images/techstack_logos/kotlin-logo.svg" },
                { name: "Ionic", description: "Hybrid app development", logo: "/images/techstack_logos/ionic-logo.svg" },
                { name: "Xamarin", description: "Cross-platform .NET", logo: "/images/techstack_logos/xamarin-logo.svg" }
            ]
        },
        {
            icon: Server,
            title: "Backend & APIs",
            technologies: [
                { name: "Node.js", description: "JavaScript runtime", logo: "/images/techstack_logos/nodejs-logo.svg" },
                { name: "Python", description: "Fast backend development", logo: "/images/techstack_logos/python-logo.svg" },
                { name: "Java", description: "Enterprise solutions", logo: "/images/techstack_logos/java-logo.svg" },
                { name: "Firebase", description: "Real-time database", logo: "/images/techstack_logos/firebase-logo.svg" },
                { name: "GraphQL", description: "Efficient data queries", logo: "/images/techstack_logos/graphql-logo.svg" },
                { name: "Express", description: "Fast web framework", logo: "/images/techstack_logos/express-logo.svg" }
            ]
        },
        {
            icon: Database,
            title: "Databases",
            technologies: [
                { name: "MongoDB", description: "NoSQL flexibility", logo: "/images/techstack_logos/mongodb-logo.svg" },
                { name: "PostgreSQL", description: "Relational reliability", logo: "/images/techstack_logos/postgresql-logo.svg" },
                { name: "MySQL", description: "Proven stability", logo: "/images/techstack_logos/mysql-logo.svg" },
                { name: "Firebase", description: "Cloud-native DB", logo: "/images/techstack_logos/firebase-logo.svg" },
                { name: "Redis", description: "Caching & sessions", logo: "/images/techstack_logos/redis-logo.svg" },
                { name: "SQLite", description: "Lightweight database", logo: "/images/techstack_logos/sqlite-logo.svg" }
            ]
        },
        {
            icon: Cloud,
            title: "Cloud & DevOps",
            technologies: [
                { name: "AWS", description: "Cloud infrastructure", logo: "/images/techstack_logos/amazonwebservices-logo.svg" },
                { name: "Google Cloud", description: "Scalable services", logo: "/images/techstack_logos/googlecloud-logo.svg" },
                { name: "Azure", description: "Microsoft ecosystem", logo: "/images/techstack_logos/azure-logo.svg" },
                { name: "Docker", description: "Containerization", logo: "/images/techstack_logos/docker-logo.svg" },
                { name: "Kubernetes", description: "Orchestration", logo: "/images/techstack_logos/kubernetes-logo.svg" },
                { name: "Jenkins", description: "CI/CD automation", logo: "/images/techstack_logos/jenkins-logo.svg" }
            ]
        }
    ];

    return (
        <section
            className="relative transition-colors duration-300 py-20 md:py-28"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            {/* Background */}
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
                        <span style={{ color: "var(--brand-purple)" }}>Technologies & Tools</span> We Use
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We leverage cutting-edge technologies and industry best practices to build robust, scalable, and future-proof mobile applications.
                    </p>
                </div>

                {/* Tech Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {techCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <div
                                key={index}
                                className="group p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                {/* Gradient overlay on hover */}
                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        background: "linear-gradient(135deg, var(--brand-purple), var(--brand-yellow))",
                                    }}
                                />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div
                                            className="w-12 h-12 rounded-lg p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                                            style={{
                                                background: "linear-gradient(135deg, var(--brand-purple), var(--brand-yellow))",
                                            }}
                                        >
                                            <Icon className="w-full h-full text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold">{category.title}</h3>
                                    </div>

                                    {/* Technologies List */}
                                    <div className="space-y-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        {category.technologies.map((tech, idx) => (
                                            <div
                                                key={idx}
                                                className="group/tech p-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
                                                style={{
                                                    backgroundColor: "color-mix(in srgb, var(--brand-purple) 5%, transparent)",
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--brand-purple) 10%, transparent)";
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--brand-purple) 5%, transparent)";
                                                }}
                                            >
                                                <div className="flex items-center gap-3">
                                                    {/* Technology Logo */}
                                                    <div
                                                        className="relative flex-shrink-0 w-12 h-12 flex items-center justify-center rounded p-1 transition-transform duration-300 group-hover/tech:scale-110"
                                                        style={{
                                                            backgroundColor: "color-mix(in srgb, var(--foreground) 5%, transparent)",
                                                        }}
                                                    >
                                                        <Image
                                                            src={tech.logo}
                                                            alt={tech.name}
                                                            fill
                                                            className="object-contain p-1"
                                                            sizes="32px"
                                                        />
                                                    </div>

                                                    <div className="flex-1">
                                                        <div className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>
                                                            {tech.name}
                                                        </div>
                                                        <div className="text-xs mt-1" style={{ color: "var(--secondary-text)" }}>
                                                            {tech.description}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Tech Stack Highlights */}
                <div className="p-8 rounded-2xl border" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                    <h3 className="text-2xl font-bold mb-6">Why Our Tech Stack Matters</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Performance",
                                description: "We choose technologies that deliver lightning-fast apps with minimal resource consumption."
                            },
                            {
                                title: "Scalability",
                                description: "Our architecture and tools support seamless scaling from thousands to millions of users."
                            },
                            {
                                title: "Security",
                                description: "We implement industry-leading security practices and use battle-tested frameworks."
                            },
                            {
                                title: "Maintainability",
                                description: "Clean, well-documented code using established patterns ensures long-term maintainability."
                            },
                            {
                                title: "Community Support",
                                description: "We rely on technologies with strong communities, extensive documentation, and active development."
                            },
                            {
                                title: "Future-Proof",
                                description: "We stay updated with the latest trends and ensure your app remains competitive and modern."
                            }
                        ].map((highlight, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1" style={{ background: "linear-gradient(135deg, var(--brand-purple), var(--brand-yellow))" }}>
                                    <span className="text-white text-sm font-bold">✓</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">{highlight.title}</h4>
                                    <p style={{ color: "var(--secondary-text)" }}>{highlight.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}