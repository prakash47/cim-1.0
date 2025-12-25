"use client";

import Image from "next/image";
import { Code2, Database, Cloud, Zap } from "lucide-react";
import Link from "next/link";

export default function Technologies() {
    const frontendTech = [
        { name: "React", logo: "/images/techstack_logos/react-logo.svg" },
        { name: "Next.js", logo: "/images/techstack_logos/nextjs-logo.svg" },
        { name: "Vue.js", logo: "/images/techstack_logos/vuejs-logo.svg" },
        { name: "Angular", logo: "/images/techstack_logos/angularjs-logo.svg" },
        { name: "TypeScript", logo: "/images/techstack_logos/typescript-logo.svg" },
        { name: "JavaScript", logo: "/images/techstack_logos/javascript-logo.svg" },
        { name: "HTML5", logo: "/images/techstack_logos/html5-logo.svg" },
        { name: "CSS3", logo: "/images/techstack_logos/css3-logo.svg" },
        { name: "Tailwind CSS", logo: "/images/techstack_logos/tailwindcss-logo.svg" },
        { name: "Bootstrap", logo: "/images/techstack_logos/bootstrap-logo.svg" },
    ];

    const backendTech = [
        { name: "Node.js", logo: "/images/techstack_logos/nodejs-logo.svg" },
        { name: "Python", logo: "/images/techstack_logos/python-logo.svg" },
        { name: "PHP", logo: "/images/techstack_logos/php-logo.svg" },
        { name: "Java", logo: "/images/techstack_logos/java-logo.svg" },
        { name: "MongoDB", logo: "/images/techstack_logos/mongodb-logo.svg" },
        { name: "PostgreSQL", logo: "/images/techstack_logos/postgresql-logo.svg" },
        { name: "MySQL", logo: "/images/techstack_logos/mysql-logo.svg" },
        { name: "Redis", logo: "/images/techstack_logos/redis-logo.svg" },
        { name: "Express", logo: "/images/techstack_logos/express-logo.svg" },
        { name: "Django", logo: "/images/techstack_logos/django-logo.svg" },
    ];

    const cloudTech = [
        { name: "AWS", logo: "/images/techstack_logos/amazonwebservices-logo.svg" },
        { name: "Docker", logo: "/images/techstack_logos/docker-logo.svg" },
        { name: "Kubernetes", logo: "/images/techstack_logos/kubernetes-logo.svg" },
        { name: "Git", logo: "/images/techstack_logos/git-logo.svg" },
        { name: "GitHub", logo: "/images/techstack_logos/github-logo.svg" },
        { name: "GitLab", logo: "/images/techstack_logos/gitlab-logo.svg" },
        { name: "Jenkins", logo: "/images/techstack_logos/jenkins-logo.svg" },
        { name: "Nginx", logo: "/images/techstack_logos/nginx-logo.svg" },
        { name: "Linux", logo: "/images/techstack_logos/linux-logo.svg" },
        { name: "Firebase", logo: "/images/techstack_logos/firebase-logo.svg" },
    ];

    const toolsTech = [
        { name: "VS Code", logo: "/images/techstack_logos/vscode-logo.svg" },
        { name: "Figma", logo: "/images/techstack_logos/figma-logo.svg" },
        { name: "Webpack", logo: "/images/techstack_logos/webpack-logo.svg" },
        { name: "Vite", logo: "/images/techstack_logos/vitejs-logo.svg" },
        { name: "npm", logo: "/images/techstack_logos/npm-logo.svg" },
        { name: "Yarn", logo: "/images/techstack_logos/yarn-logo.svg" },
        { name: "Postman", logo: "/images/techstack_logos/postman-logo.svg" },
        { name: "Jira", logo: "/images/techstack_logos/jira-logo.svg" },
        { name: "Slack", logo: "/images/techstack_logos/slack-logo.svg" },
        { name: "WordPress", logo: "/images/techstack_logos/wordpress-logo.svg" },
    ];

    const TechCard = ({ tech, idx }: { tech: { name: string; logo: string }; idx: number }) => (
        <div
            key={idx}
            className="group relative rounded-2xl p-6 border backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
                animation: `fadeInUp 0.5s ease-out ${idx * 0.05}s both`,
            }}
        >
            <div className="relative flex flex-col items-center gap-3">
                <div
                    className="w-16 h-16 flex items-center justify-center rounded-xl p-2 transition-transform duration-300 group-hover:scale-110"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--foreground) 5%, transparent)",
                    }}
                >
                    <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                    />
                </div>
                <span className="text-sm font-semibold text-center" style={{ color: "var(--foreground)" }}>
                    {tech.name}
                </span>
            </div>
        </div>
    );

    return (
        <section
            className="py-10 lg:py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Building with the <span style={{ fontWeight: 700, color: "var(--brand-blue)" }}>Modern Web Stack</span>
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        As a forward-thinking <span style={{ fontWeight: 700, color: "var(--brand-blue)" }}>Web Development Company</span>, we leverage the best tools to build high-performance applications.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))",
                        }}
                    />
                </div>

                {/* Tech Stack Categories */}
                <div className="space-y-16">
                    {/* Frontend Technologies */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#008ac1] to-[#00b5ca]"
                            >
                                <Code2 className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
                                Frontend Technologies
                            </h3>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {frontendTech.map((tech, idx) => (
                                <TechCard key={idx} tech={tech} idx={idx} />
                            ))}
                        </div>
                    </div>

                    {/* Backend Technologies */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#bc3feb] to-[#fab900]"
                            >
                                <Database className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
                                Backend & Database
                            </h3>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {backendTech.map((tech, idx) => (
                                <TechCard key={idx} tech={tech} idx={idx} />
                            ))}
                        </div>
                    </div>

                    {/* Cloud & DevOps */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#fab900] to-[#ee6500]"
                            >
                                <Cloud className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
                                Cloud & DevOps
                            </h3>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {cloudTech.map((tech, idx) => (
                                <TechCard key={idx} tech={tech} idx={idx} />
                            ))}
                        </div>
                    </div>

                    {/* Tools & Others */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#00efd6] to-[#00b5ca]"
                            >
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
                                Tools & Platforms
                            </h3>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {toolsTech.map((tech, idx) => (
                                <TechCard key={idx} tech={tech} idx={idx} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* CSS Animations */}
                <style jsx>{`
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}</style>

                {/* Bottom CTA */}
                <div
                    className="mt-16 rounded-2xl p-8 md:p-12 border text-center"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                        Custom Tech Stack for Your Needs
                    </h3>

                    <p className="mb-8 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)", lineHeight: "1.8" }}>
                        While we specialize in the modern web stack, we&apos;re flexible and can adapt to your specific requirements or existing infrastructure. Let&apos;s discuss the best approach for your project.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-2xl text-sm md:text-base font-semibold bg-gradient-to-r from-[#008ac1] to-[#00b5ca] text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                        Discuss Your Tech Stack
                        <span>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}