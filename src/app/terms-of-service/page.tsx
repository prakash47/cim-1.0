"use client";

import React, { useEffect, useState } from "react";

const TermsOfService: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const sections = [
        {
            title: "1. Agreement to Terms",
            content: [
                {
                    subtitle: "",
                    text:
                        "These Terms of Service (\"Terms\") govern your access to and use of the services, websites, and products (collectively, \"Services\") provided by Cinute InfoMedia (\"CIM\", \"we\", \"us\", or \"our\"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, do not use the Services.",
                },
            ],
        },

        {
            title: "2. Services & Scope",
            content: [
                {
                    subtitle: "",
                    text:
                        "CIM provides digital growth services including but not limited to: website & web-app development, mobile app development, UI/UX design, SEO & organic growth, digital marketing (ads & social), automation, analytics, and AI-powered solutions. Specific deliverables, timelines, and pricing are set out in project proposals, statements of work (SOW), or separate service agreements.",
                },
                {
                    subtitle: "Third-Party Tools & Platforms",
                    text:
                        "Where applicable, we may integrate third-party tools or platforms (hosting providers, analytics, ad platforms, payment processors). Use of these tools may be subject to additional terms and separate privacy policies.",
                },
            ],
        },

        {
            title: "3. Proposals, Quotes & Agreements",
            content: [
                {
                    subtitle: "",
                    text:
                        "All proposals, quotes or SOWs provided by CIM are valid for the period specified therein. A binding contract is formed only when both parties sign the SOW or when the client accepts the proposal and pays any required deposit as specified.",
                },
            ],
        },

        {
            title: "4. Client Responsibilities",
            content: [
                {
                    subtitle: "",
                    text:
                        "To enable CIM to perform, the client agrees to: provide accurate information and materials (brand assets, content, access), review deliverables in a timely manner, designate a primary point of contact, and obtain any permissions for third-party content. Delays or incomplete inputs from the client may affect timelines and could incur additional charges.",
                },
            ],
        },

        {
            title: "5. Payment, Fees & Refunds",
            content: [
                {
                    subtitle: "",
                    text:
                        "Fees, payment schedules and milestones are defined in the SOW. Unless otherwise stated, payments are due within the payment terms on the invoice (commonly 7–30 days). Late payments may accrue interest and the project may be paused until payment is made. Deposits and non-refundable fees are described in the proposal. Refunds, if any, are at CIM's discretion and governed by the agreement.",
                },
                {
                    subtitle: "Taxes",
                    text:
                        "Client is responsible for all taxes, duties, and similar charges (excluding CIM's corporate taxes) arising in connection with the Services.",
                },
            ],
        },

        {
            title: "6. Intellectual Property & Licenses",
            content: [
                {
                    subtitle: "",
                    text:
                        "Unless expressly agreed otherwise in writing, CIM retains ownership of its pre-existing tools, libraries, templates, and methodologies (\"CIM IP\"). Upon full payment of fees for a project, CIM grants the client a worldwide, non-exclusive license to use deliverables for the intended business purpose described in the SOW.",
                },
                {
                    subtitle: "Third-Party Materials",
                    text:
                        "Any third-party materials (fonts, plugins, licensed images) are provided under their respective licenses. The client is responsible for complying with those license terms and any associated fees.",
                },
            ],
        },

        {
            title: "7. Confidentiality",
            content: [
                {
                    subtitle: "",
                    text:
                        "Both parties agree to keep confidential information (business plans, pricing, source code not otherwise public) private and not disclose it to third parties except as required by law. This obligation continues beyond termination for a period of three (3) years, unless otherwise stated in a separate NDA.",
                },
            ],
        },

        {
            title: "8. Warranties & Disclaimers",
            content: [
                {
                    subtitle: "",
                    text:
                        "CIM warrants that it will perform Services in a professional manner consistent with industry standards. EXCEPT FOR THE FOREGOING, SERVICES ARE PROVIDED \"AS IS\" AND CIM DISCLAIMS ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, OR NON-INFRINGEMENT.",
                },
            ],
        },

        {
            title: "9. Limitation of Liability",
            content: [
                {
                    subtitle: "",
                    text:
                        "TO THE MAXIMUM EXTENT PERMITTED BY LAW, CIM’S AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES WILL NOT EXCEED THE TOTAL FEES PAID BY THE CLIENT TO CIM IN THE 12 MONTHS PRECEDING THE CLAIM. IN NO EVENT WILL CIM BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS OR LOST DATA, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
                },
            ],
        },

        {
            title: "10. Indemnification",
            content: [
                {
                    subtitle: "",
                    text:
                        "The client agrees to indemnify, defend and hold harmless CIM and its officers, directors and employees from and against any claims, liabilities, losses, damages or expenses (including reasonable legal fees) arising out of: (a) client’s breach of these Terms; (b) client-provided content that infringes third-party rights; (c) client’s negligent or willful misconduct.",
                },
            ],
        },

        {
            title: "11. Data & Privacy",
            content: [
                {
                    subtitle: "",
                    text:
                        "CIM will process personal data in accordance with its Privacy Policy. Where CIM processes personal data on behalf of the client (as a processor), the parties will enter a separate data processing agreement (DPA) establishing responsibilities and security measures as required by applicable law (e.g., GDPR).",
                },
            ],
        },

        {
            title: "12. Maintenance, Hosting & Support",
            content: [
                {
                    subtitle: "",
                    text:
                        "Ongoing maintenance, hosting, support, or security monitoring are available under separate agreements or subscription plans. Unless otherwise agreed, CIM is not responsible for third-party service outages or for problems caused by modifications made by others after final delivery.",
                },
            ],
        },

        {
            title: "13. Changes, Revisions & Additional Work",
            content: [
                {
                    subtitle: "",
                    text:
                        "Client-approved scope changes will be documented as change requests and may affect timelines and fees. Minor revisions within scope are typically included; substantial additional work will be quoted separately.",
                },
            ],
        },

        {
            title: "14. Termination",
            content: [
                {
                    subtitle: "",
                    text:
                        "Either party may terminate a project for material breach if the other party fails to cure the breach within thirty (30) days of receiving written notice. On termination, client will pay for all work performed up to the termination date and reimburse any non-refundable third-party costs incurred.",
                },
            ],
        },

        {
            title: "15. Suspension for Non-Payment",
            content: [
                {
                    subtitle: "",
                    text:
                        "CIM reserves the right to suspend provision of Services, take down hosted sites, or disable access to client deliverables if invoices remain unpaid after the stated payment terms, until outstanding amounts are settled.",
                },
            ],
        },

        {
            title: "16. Governing Law & Dispute Resolution",
            content: [
                {
                    subtitle: "",
                    text:
                        "These Terms are governed by the laws of India without regard to conflict-of-law principles. Any dispute arising under these Terms will first be attempted to be resolved by good faith negotiations. If unresolved, disputes will be subject to the exclusive jurisdiction of courts located in Mumbai, India.",
                },
            ],
        },

        {
            title: "17. Force Majeure",
            content: [
                {
                    subtitle: "",
                    text:
                        "Neither party will be liable for delays or failures caused by events beyond reasonable control (natural disasters, strikes, pandemics, network outages, government actions). The affected party must notify the other promptly and take reasonable steps to resume performance.",
                },
            ],
        },

        {
            title: "18. Assignment",
            content: [
                {
                    subtitle: "",
                    text:
                        "Client may not assign its rights or obligations under these Terms without CIM’s prior written consent. CIM may assign these Terms in connection with a corporate reorganization, sale, or merger but will notify the client.",
                },
            ],
        },

        {
            title: "19. Entire Agreement",
            content: [
                {
                    subtitle: "",
                    text:
                        "These Terms, together with any SOW, proposal, DPA, or other written agreement between the parties, constitute the entire agreement and supersede prior agreements relating to the subject matter.",
                },
            ],
        },

        {
            title: "20. Modifications to Terms",
            content: [
                {
                    subtitle: "",
                    text:
                        "CIM may update these Terms from time to time. Material changes will be communicated on our website, with the updated 'Last Updated' date. Continued use of Services after changes indicates acceptance of the new terms.",
                },
            ],
        },

        {
            title: "21. Contact Information",
            content: [
                {
                    subtitle: "",
                    text:
                        "If you have questions about these Terms or wish to contact us, please use the details below:",
                },
                {
                    subtitle: "",
                    text:
                        "Cinute InfoMedia\nEmail: contact@cinuteinfomedia.com\nPhone: +91-9004988859 / +91-7700995410\nAddress: Office #3, Ashley Tower, Beverly Park, Mira Road (E), Mumbai, 401107, Maharashtra, India.",
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
                            Terms of Service
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
                <div className="mb-12 p-6 rounded-lg transition-all duration-1000 delay-100" style={{ backgroundColor: "var(--card-bg)", borderLeft: "4px solid var(--brand-blue)", borderColor: "var(--brand-purple)", boxShadow: "0 8px 30px rgba(0,0,0,0.04)" }}>
                    <p className="text-base leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        These Terms describe the rights and responsibilities that apply when you access or use CIM’s Services. For specific project work, the SOW or service agreement controls when conflicts arise.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-8">
                    {sections.map((section, i) => (
                        <div key={i} className="p-6 rounded-lg transition-all duration-700" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)", borderWidth: "1px", boxShadow: "0 6px 20px rgba(0,0,0,0.03)" }}>
                            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent" style={{ background: "linear-gradient(90deg,var(--brand-purple),var(--brand-cyan))", WebkitBackgroundClip: "text" }}>
                                {section.title}
                            </h2>

                            <div className="space-y-4">
                                {section.content.map((c, idx) => (
                                    <div key={idx}>
                                        {c.subtitle && <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--brand-yellow)" }}>{c.subtitle}</h3>}
                                        <p className="text-base leading-relaxed" style={{ color: "var(--secondary-text)", whiteSpace: "pre-line" }}>{c.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact & actions */}
                <div className="mt-12 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4" style={{ background: "var(--card-bg)", border: `1px solid var(--border-color)` }}>
                    <div>
                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>Questions about these terms?</p>
                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Reach out to our team for clarifications or to request a DPA for data processing arrangements.</p>
                    </div>

                    <div className="flex gap-3">
                        <a href="mailto:contact@cinuteinfomedia.com" className="px-4 py-2 rounded-lg font-semibold transition" style={{ background: "var(--brand-blue)", color: "white" }}>
                            Email Support
                        </a>
                        <a href="/contact" className="px-4 py-2 rounded-lg border font-semibold transition" style={{ borderColor: "var(--border-color)", color: "var(--foreground)", background: "var(--card-bg)" }}>
                            Contact Sales
                        </a>
                    </div>
                </div>

                {/* Footer note */}
                <div className="mt-8 text-center">
                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                        These Terms are subject to change. The version above is the current effective version as of the Last Updated date.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
