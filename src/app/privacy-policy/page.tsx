"use client";

import React, { useEffect, useState } from "react";

const PrivacyPolicy: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const sections = [
        {
            title: "1. Information We Collect",
            content: [
                {
                    subtitle: "Personal Information",
                    text:
                        "We collect information that you provide directly to us, including but not limited to: name, email address, phone number, company name, job title, billing address and any other information you choose to provide when contacting us, requesting quotes, or using our services.",
                },
                {
                    subtitle: "Usage Data",
                    text:
                        "We automatically collect certain information about your device and how you interact with our website, including IP address, browser type, operating system, pages viewed, referral source, device identifiers, and time spent on pages. This helps us diagnose issues and optimize the site.",
                },
                {
                    subtitle: "Cookies & Tracking Technologies",
                    text:
                        "We use cookies, web beacons, pixels and similar technologies for essential site functionality, analytics and advertising. These help us remember preferences, analyze site traffic, run and optimize ads, and deliver personalized content. You can control cookie preferences through your browser or our cookie banner.",
                },
            ],
        },

        {
            title: "2. How We Use Your Information",
            content: [
                {
                    subtitle: "",
                    text: "We use the collected information for the following purposes:",
                },
                {
                    subtitle: "Service Delivery & Support",
                    text:
                        "To provide, customize, maintain and improve our marketing, web development, SEO, automation, and AI-powered services; to manage invoices, contracts, and deliverables; and to communicate about projects and support requests.",
                },
                {
                    subtitle: "Marketing & Outreach",
                    text:
                        "With your consent where required, we may contact you with updates, newsletters, product information and promotional materials. You may opt out at any time.",
                },
                {
                    subtitle: "Analytics & Optimization",
                    text:
                        "To analyze website and campaign performance (e.g., conversion tracking, A/B tests), to measure the effectiveness of digital marketing campaigns, and to improve UX.",
                },
                {
                    subtitle: "Advertising & Personalization",
                    text:
                        "To serve and optimize ads across platforms (Google Ads, Meta, LinkedIn). We may share hashed identifiers or event data required by ad networks to measure campaign performance and audience targeting.",
                },
                {
                    subtitle: "Legal & Security",
                    text:
                        "To detect and prevent fraud, enforce our Terms, comply with legal obligations, and protect our rights and the rights of our users.",
                },
            ],
        },

        {
            title: "3. Cookies, Tracking & Third-Party Services",
            content: [
                {
                    subtitle: "",
                    text:
                        "We use a combination of first- and third-party cookies for different purposes. Examples include:",
                },
                {
                    subtitle: "Essential Cookies",
                    text: "Required for secure sign-in, session management and form submissions.",
                },
                {
                    subtitle: "Analytics Cookies",
                    text:
                        "We use analytics platforms (e.g., Google Analytics) to collect aggregated usage data. These providers may set cookies and retain aggregated reports on our behalf.",
                },
                {
                    subtitle: "Advertising Cookies",
                    text:
                        "Platforms such as Google Ads, Meta (Facebook), and LinkedIn may use cookies and pixel data to show relevant ads and measure campaign performance. We may provide them with hashed identifiers or event conversions for attribution.",
                },
                {
                    subtitle: "How to Manage Cookies",
                    text:
                        "Most browsers allow you to block or delete cookies via settings. We also provide a cookie consent layer where you can accept or restrict tracking categories.",
                },
            ],
        },

        {
            title: "4. Subprocessors & Third-Party Providers",
            content: [
                {
                    subtitle: "",
                    text:
                        "We rely on trusted third-party service providers to operate our business (hosting, email, analytics, CRM, payment processors, advertising platforms). These subprocessors process data on our behalf under contractual obligations and security safeguards.",
                },
                {
                    subtitle: "Examples",
                    text:
                        "Hosting: Vercel / AWS / DigitalOcean; Analytics: Google Analytics; Email & CRM: SendGrid / Mailchimp / HubSpot; Ads & Attribution: Google Ads, Meta, LinkedIn; Payment: Stripe / Razorpay (if applicable).",
                },
            ],
        },

        {
            title: "5. Data Minimization & Retention",
            content: [
                {
                    subtitle: "",
                    text:
                        "We keep personal data only as long as necessary for the purposes described, or as required by law. Examples:",
                },
                {
                    subtitle: "Prospects & Leads",
                    text: "Kept for up to 3 years unless you request deletion earlier or unsubscribe.",
                },
                {
                    subtitle: "Clients & Projects",
                    text: "Kept for the duration of the engagement plus 6 years for accounting and legal compliance.",
                },
                {
                    subtitle: "Aggregated Analytics",
                    text: "Stored in anonymized or aggregated form for trend analysis and product improvement.",
                },
            ],
        },

        {
            title: "6. Security Practices",
            content: [
                {
                    subtitle: "",
                    text:
                        "We implement industry-standard technical and organisational measures to protect data: SSL/TLS, encrypted storage for sensitive fields, access controls, regular updates and security reviews. While we strive to protect your data, no internet transmission is completely secure.",
                },
            ],
        },

        {
            title: "7. Automated Decision Making & AI",
            content: [
                {
                    subtitle: "",
                    text:
                        "We use automation and AI internally to assist with marketing analytics, content suggestions, and workflow automation. We do not rely on solely automated decisions that have a legal or similarly significant effect on you without human review. If you have questions about AI usage related to your data or project, contact us.",
                },
            ],
        },

        {
            title: "8. International Transfers",
            content: [
                {
                    subtitle: "",
                    text:
                        "We operate globally. Your personal data may be transferred to, stored and processed in countries other than your home country. When transferring data internationally, we use appropriate safeguards such as standard contractual clauses or ensure transfers are made to countries with adequate protections.",
                },
            ],
        },

        {
            title: "9. Your Rights (GDPR / CCPA & Similar)",
            content: [
                {
                    subtitle: "",
                    text:
                        "Depending on your jurisdiction you may have the right to access, correct, port, or delete your personal data; restrict or object to certain processing; and opt out of marketing communications. For California residents, you may have additional rights under the CCPA/CPRA.",
                },
                {
                    subtitle: "How to Exercise Rights",
                    text:
                        "Contact us using the contact details below. We will respond to verifiable requests within the timeframes required by law.",
                },
            ],
        },

        {
            title: "10. Data Breach Notification",
            content: [
                {
                    subtitle: "",
                    text:
                        "If we become aware of a data breach affecting your personal data, we will follow applicable laws and notify affected users and regulatory authorities as required without undue delay.",
                },
            ],
        },

        {
            title: "11. Children's Privacy",
            content: [
                {
                    subtitle: "",
                    text:
                        "Our services are not intended for children under 18. We do not knowingly collect personal information from minors. If you believe we have, please contact us so we can delete the data promptly.",
                },
            ],
        },

        {
            title: "12. Changes to This Policy",
            content: [
                {
                    subtitle: "",
                    text:
                        "We may update this Privacy Policy to reflect changes in practices or legal requirements. Material changes will be posted on our site with an updated 'Last Updated' date. Continued use after changes constitutes acceptance.",
                },
            ],
        },

        {
            title: "13. Contact & Data Protection Officer",
            content: [
                {
                    subtitle: "",
                    text:
                        "If you have questions, requests, or complaints regarding this policy or our data practices, contact us at:",
                },
                {
                    subtitle: "",
                    text:
                        "Privacy Team — Cinute InfoMedia\nEmail: contact@cinuteinfomedia.com\nPhone: +91-9004988859 / +91-7700995410\nAddress: Office #3, Ashley Tower, Beverly Park, Mira Road (E), Mumbai, 401107, Maharashtra, India.",
                },
            ],
        },

        {
            title: "14. How to Opt-out of Marketing",
            content: [
                {
                    subtitle: "",
                    text:
                        "You can unsubscribe from marketing emails using the unsubscribe link included in our messages or by contacting us at contact@cinuteinfomedia.com. To opt out of personalised ads, you can adjust ad preferences on the respective platforms (Google, Meta, LinkedIn).",
                },
            ],
        },

        {
            title: "15. Legal Basis (EU users)",
            content: [
                {
                    subtitle: "",
                    text:
                        "Where applicable (e.g., EU residents), we rely on lawful bases for processing such as consent, performance of contract, legitimate interests (e.g., improving services), or compliance with legal obligations.",
                },
            ],
        },
    ];

    return (
        <div className="mx-auto py-12 px-6 md:px-12 xl:px-16" style={{ background: "var(--background)", color: "var(--foreground)" }}>
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div
                    className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ color: "var(--foreground)" }}
                        >
                            Privacy Policy
                        </span>
                    </h1>
                    <p className="text-lg" style={{ color: "var(--secondary-text)" }}>
                        Cinute InfoMedia (CIM)
                    </p>
                    <p className="text-sm mt-2" style={{ color: "var(--secondary-text)" }}>
                        Last Updated: December 12, 2025
                    </p>
                </div>

                {/* Introduction */}
                <div
                    className="mb-12 p-6 rounded-lg transition-all duration-1000 delay-100"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderLeft: "4px solid var(--brand-cyan)",
                        borderColor: "var(--brand-purple)",
                        boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
                    }}
                >
                    <p className="text-base leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        At <strong style={{ color: "var(--foreground)" }}>Cinute InfoMedia</strong> (&quot;CIM&quot;, &quot;we&quot;, &quot;us&quot;), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website, use our services, or interact with us.
                    </p>
                    <p className="text-base leading-relaxed mt-4" style={{ color: "var(--secondary-text)" }}>
                        By using our services, you agree to the collection and processing described in this policy. If you do not agree, please do not use our services.
                    </p>
                </div>

                {/* Policy Sections */}
                <div className="space-y-8">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-lg transition-all duration-700"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                                borderWidth: "1px",
                                boxShadow: "0 6px 20px rgba(0,0,0,0.03)",
                            }}
                        >
                            <h2
                                className="text-2xl font-bold mb-4 bg-clip-text text-transparent"
                                style={{ background: "linear-gradient(90deg,var(--brand-purple),var(--brand-cyan))", WebkitBackgroundClip: "text", color: "transparent", }}
                            >
                                {section.title}
                            </h2>

                            <div className="space-y-4">
                                {section.content.map((item, idx) => (
                                    <div key={idx}>
                                        {item.subtitle && (
                                            <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--brand-yellow)" }}>
                                                {item.subtitle}
                                            </h3>
                                        )}
                                        <p className="text-base leading-relaxed" style={{ color: "var(--secondary-text)", whiteSpace: "pre-line" }}>
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Information */}
                <div
                    className="mt-12 p-8 rounded-lg"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--brand-yellow)",
                        borderWidth: "2px",
                        boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
                    }}
                >
                    <h3 className="text-2xl font-bold mb-6 text-center">
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ background: "linear-gradient(90deg,var(--brand-orange),var(--brand-yellow))", WebkitBackgroundClip: "text", color: "transparent", }}
                        >
                            Get In Touch
                        </span>
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                                Cinute InfoMedia
                            </p>
                            <p className="text-sm mb-1" style={{ color: "var(--secondary-text)" }}>
                                Office #3, Ashley Tower, Beverly Park
                            </p>
                            <p className="text-sm mb-1" style={{ color: "var(--secondary-text)" }}>
                                Mira Road (E), Mumbai, 401107
                            </p>
                            <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                Maharashtra, India
                            </p>
                        </div>

                        <div>
                            <div className="mb-3">
                                <p className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                                    Email:
                                </p>
                                <a href="mailto:contact@cinuteinfomedia.com" className="text-sm hover:underline" style={{ color: "var(--secondary-text)" }}>
                                    contact@cinuteinfomedia.com
                                </a>
                            </div>

                            <div className="mb-3">
                                <p className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                                    Phone:
                                </p>
                                <a href="tel:+919004988859" className="text-sm block hover:underline" style={{ color: "var(--secondary-text)" }}>
                                    +91-9004988859
                                </a>
                                <a href="tel:+917700995410" className="text-sm block hover:underline" style={{ color: "var(--secondary-text)" }}>
                                    +91-7700995410
                                </a>
                            </div>

                            <div>
                                <p className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                                    Website:
                                </p>
                                <a href="https://www.cinuteinfomedia.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline" style={{ color: "var(--secondary-text)" }}>
                                    www.cinuteinfomedia.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-8 text-center">
                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                        Thank you for trusting Cinute InfoMedia with your information.
                    </p>
                    <p className="text-sm mt-2" style={{ color: "var(--secondary-text)" }}>
                        We are committed to maintaining the highest standards of privacy and security.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
