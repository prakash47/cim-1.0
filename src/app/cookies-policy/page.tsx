"use client";

import React, { useEffect, useState } from "react";

const CookiesPolicy: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const sections = [
        {
            title: "1. What are cookies?",
            content: [
                {
                    subtitle: "",
                    text:
                        "Cookies are small text files stored on your device (computer, tablet, or mobile) by websites you visit. They are widely used to make websites work, remember your preferences, and provide analytics and advertising functionality. Cookies can be 'first-party' (set by the website you are visiting) or 'third-party' (set by other domains such as analytics or advertising providers).",
                },
            ],
        },

        {
            title: "2. Why we use cookies",
            content: [
                {
                    subtitle: "",
                    text:
                        "We use cookies to improve our site functionality, remember your preferences, measure performance, provide secure authentication, and deliver a more personalized browsing and advertising experience. Specific uses include:",
                },
                {
                    subtitle: "Functional / Essential",
                    text:
                        "These cookies are required for the basic operation of our website (session management, security, form handling). Without them, some features may not work.",
                },
                {
                    subtitle: "Preference Cookies",
                    text:
                        "Allow the site to remember choices you make (language, region, theme) and provide enhanced, personalized features.",
                },
                {
                    subtitle: "Analytics & Performance",
                    text:
                        "Help us understand how visitors interact with our site — pages visited, time spent, bounce rates — so we can improve content and usability (e.g., Google Analytics).",
                },
                {
                    subtitle: "Marketing & Advertising",
                    text:
                        "Used to deliver and measure the effectiveness of advertising campaigns, build audiences, and limit repeated exposure to the same ads (e.g., Google Ads, Meta pixel).",
                },
                {
                    subtitle: "Security",
                    text:
                        "Used to detect and prevent fraudulent activity and protect your data (e.g., CSRF tokens, security-related session cookies).",
                },
            ],
        },

        {
            title: "3. Types of cookies we use (detailed)",
            content: [
                {
                    subtitle: "Session cookies",
                    text:
                        "Temporary cookies that expire when you close your browser. We use these for login sessions and to keep track of your current activity on the site.",
                },
                {
                    subtitle: "Persistent cookies",
                    text:
                        "Remain on your device until they expire or are deleted. These are commonly used for remembering preferences and login tokens across visits.",
                },
                {
                    subtitle: "First-party cookies",
                    text:
                        "Set directly by our domain to support site functionality and preferences.",
                },
                {
                    subtitle: "Third-party cookies",
                    text:
                        "Set by external services we integrate (analytics, advertising, social widgets). These are governed by the third-party's privacy policy in addition to ours.",
                },
                {
                    subtitle: "Secure & HttpOnly flags",
                    text:
                        "Some cookies are marked Secure to restrict them to HTTPS connections, and HttpOnly to prevent access from client-side scripts (reduces XSS risk).",
                },
            ],
        },

        {
            title: "4. Common cookies & examples",
            content: [
                {
                    subtitle: "",
                    text:
                        "Examples of the kinds of cookies and tracking technologies that may be present on our site (names vary by provider and configuration):",
                },
                {
                    subtitle: "Analytics",
                    text:
                        "Google Analytics: _ga, _gid — used to distinguish users and sessions for reporting and optimization.",
                },
                {
                    subtitle: "Advertising",
                    text:
                        "Google Ads / DoubleClick: IDE, AID — used for ad targeting and frequency capping. Meta Pixel: _fbp — used for ad measurement and audience building.",
                },
                {
                    subtitle: "Functional",
                    text:
                        "Session cookie for logged-in users, language preferences, and UI customizations (cookie names depend on implementation).",
                },
            ],
        },

        {
            title: "5. Consent & how we obtain it",
            content: [
                {
                    subtitle: "",
                    text:
                        "When you first visit our site we present a cookie consent banner (or modal) asking you to accept or manage cookie preferences. Your explicit consent is requested for non-essential cookies (analytics, marketing). You may update or withdraw consent at any time via the cookie settings control available on the site.",
                },
            ],
        },

        {
            title: "6. How to manage or disable cookies",
            content: [
                {
                    subtitle: "",
                    text:
                        "You can manage cookies in several ways:",
                },
                {
                    subtitle: "Browser settings",
                    text:
                        "Most browsers allow you to block cookies, delete cookies, or block third-party cookies. Please check your browser's help documentation (Chrome, Firefox, Safari, Edge) for specific instructions.",
                },
                {
                    subtitle: "Cookie banner / settings",
                    text:
                        "Use the cookie preference center on our website to accept or reject categories of cookies (essential, analytics, marketing).",
                },
                {
                    subtitle: "Platform-level opt-out",
                    text:
                        "For ads personalization you can visit platform opt-out tools such as Google’s Ad Settings, Facebook’s Ad Preferences, or the Network Advertising Initiative to opt out of targeted advertising.",
                },
                {
                    subtitle: "Note on functionality",
                    text:
                        "Disabling cookies may impact site functionality, reduce personalization, and prevent certain features (e.g., saved preferences, login persistence) from working.",
                },
            ],
        },

        {
            title: "7. Third-party cookies & embedded content",
            content: [
                {
                    subtitle: "",
                    text:
                        "Some parts of our site rely on third-party services which may set cookies (analytics, widgets, social plugins, embedded video). We do not control those third-party cookies — please consult the third party’s privacy/cookie policy for details and opt-out options.",
                },
                {
                    subtitle: "Examples",
                    text:
                        "YouTube embeds may set tracking/analytics cookies by Google; social sharing widgets may set cookies for authentication and tracking.",
                },
            ],
        },

        {
            title: "8. Cookie retention & expiration",
            content: [
                {
                    subtitle: "",
                    text:
                        "Cookie expiration depends on the cookie type and provider. Session cookies expire at end of session. Persistent cookies may last from a few days up to several years depending on purpose (e.g., analytics, advertising). Specific expiration times are controlled by the cookie issuer (our site or third party).",
                },
            ],
        },

        {
            title: "9. Aggregated & anonymized data",
            content: [
                {
                    subtitle: "",
                    text:
                        "We may aggregate or anonymize cookie-derived data for reporting and product improvement. Aggregated/anonymized data does not identify individuals and may be retained for longer periods.",
                },
            ],
        },

        {
            title: "10. Legal basis for cookie processing (EU/EEA users)",
            content: [
                {
                    subtitle: "",
                    text:
                        "For users in the EU/EEA, we rely on the following lawful bases: (a) consent for non-essential cookies (analytics, marketing); (b) legitimate interests for strictly necessary cookies and some analytics where appropriate balancing tests are done. You may withdraw consent at any time (this does not affect processing that occurred before withdrawal).",
                },
            ],
        },

        {
            title: "11. Special considerations for children",
            content: [
                {
                    subtitle: "",
                    text:
                        "Our site is not intended for children under 18. We do not knowingly set non-essential cookies for children. If you are a parent or guardian and believe we have collected cookies data for a child, contact us to request removal.",
                },
            ],
        },

        {
            title: "12. How to contact us about cookies",
            content: [
                {
                    subtitle: "",
                    text:
                        "Questions about cookie use or data protection can be sent to our privacy team:",
                },
                {
                    subtitle: "",
                    text:
                        "Privacy Team — Cinute InfoMedia\nEmail: contact@cinuteinfomedia.com\nPhone: +91-9004988859 / +91-7700995410\nAddress: Office #3, Ashley Tower, Beverly Park, Mira Road (E), Mumbai, 401107, Maharashtra, India.",
                },
            ],
        },

        {
            title: "13. Changes to this Cookies Policy",
            content: [
                {
                    subtitle: "",
                    text:
                        "We may update this Cookies Policy to reflect changes in technology, legal requirements, or our services. Material changes will be notified via a notice on our website or by other means prior to change taking effect. The 'Last Updated' date at the top will reflect the latest revision.",
                },
            ],
        },

        {
            title: "14. Where to learn more",
            content: [
                {
                    subtitle: "",
                    text:
                        "Useful resources: Your browser help pages (Chrome/Firefox/Safari/Edge), Google’s Privacy & Terms, Network Advertising Initiative (NAI) opt-out tools, and the Digital Advertising Alliance (DAA) for guidance on ads-related cookie controls.",
                },
            ],
        },
    ];

    return (
        <div className="mx-auto py-12 px-6 md:px-12 xl:px-16" style={{ background: "var(--background)", color: "var(--foreground)" }}>
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ color: "var(--foreground)" }}>
                            Cookies Policy
                        </span>
                    </h1>
                    <p className="text-lg" style={{ color: "var(--secondary-text)" }}>
                        Cinute InfoMedia (CIM)
                    </p>
                    <p className="text-sm mt-2" style={{ color: "var(--secondary-text)" }}>
                        Last Updated: December 12, 2025
                    </p>
                </div>

                {/* Intro */}
                <div className="mb-10 p-6 rounded-lg" style={{ backgroundColor: "var(--card-bg)", borderLeft: "4px solid var(--brand-cyan)", borderColor: "var(--brand-purple)", boxShadow: "0 8px 30px rgba(0,0,0,0.04)" }}>
                    <p className="text-base leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        This Cookies Policy explains how Cinute InfoMedia ("CIM", "we", "us", or "our") uses cookies and similar technologies on our website and services, why we use them, and how you can control them.
                    </p>
                    <p className="text-base leading-relaxed mt-4" style={{ color: "var(--secondary-text)" }}>
                        By using our site, you consent to our use of cookies as described in this policy (unless you decline via the cookie banner or browser settings).
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-8">
                    {sections.map((section, index) => (
                        <div key={index} className="p-6 rounded-lg transition-all duration-700" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)", borderWidth: "1px", boxShadow: "0 6px 20px rgba(0,0,0,0.03)" }}>
                            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent" style={{ background: "linear-gradient(90deg,var(--brand-purple),var(--brand-cyan))", WebkitBackgroundClip: "text" }}>
                                {section.title}
                            </h2>

                            <div className="space-y-4">
                                {section.content.map((item, idx) => (
                                    <div key={idx}>
                                        {item.subtitle && <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--brand-yellow)" }}>{item.subtitle}</h3>}
                                        <p className="text-base leading-relaxed" style={{ color: "var(--secondary-text)", whiteSpace: "pre-line" }}>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CookiesPolicy;
