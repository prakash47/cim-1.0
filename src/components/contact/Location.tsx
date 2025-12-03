// /components/about/Location.tsx
"use client";

import { MapPin } from "lucide-react";

export default function Location() {
    const address = encodeURIComponent(
        "Cinute InfoMedia, Office #3, Ashley Tower, Beverly Park, Mira Road (E), Mumbai, 401107"
    );
    const embedUrl = `https://maps.google.com/maps?q=${address}&t=m&z=15&output=embed`;

    return (
        <section className="py-12 lg:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-[#008ac1] to-[#00b5ca] rounded-3xl p-1 shadow-2xl overflow-hidden">
                    <div className="bg-white rounded-[22px] overflow-hidden relative h-[400px] lg:h-[500px]">
                        {/* Embedded interactive map */}
                        <iframe
                            title="Cinute InfoMedia Office Map"
                            src={embedUrl}
                            className="absolute inset-0 w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            aria-label="Interactive map showing Cinute InfoMedia office location"
                        />

                        {/* Floating info card (keeps CTA on top of iframe) */}
                        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100 max-w-xs">
                            <div className="flex items-start gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#008ac1] to-[#00b5ca] rounded-full flex items-center justify-center text-white">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">Visit Our Office</h3>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Office #3, Ashley Tower, Beverly Park, Mira Road (E), Mumbai, 401107
                                    </p>
                                    <a
                                        href="https://maps.app.goo.gl/ak5SjeUnrDyWLXFNA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-3 px-4 py-2 bg-[#008ac1] text-white rounded-lg text-sm font-medium hover:bg-[#0077a6] transition-colors"
                                    >
                                        Open in Google Maps
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
