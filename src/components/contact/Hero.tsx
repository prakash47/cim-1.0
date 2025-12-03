"use client"

import { MessageSquare, Mail, Phone, MapPin, ArrowRight, Sparkles, Send } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative pt-20 pb-20 lg:pt-28 lg:pb-28 overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white">
            {/* Advanced Animated Background */}
            <div className="absolute inset-0">
                {/* Gradient Orbs */}
                <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-[#008ac1]/8 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-[#bc3feb]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#00efd6]/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-3 h-3 bg-[#008ac1]/20 rounded-full animate-float"></div>
                <div className="absolute top-40 right-20 w-2 h-2 bg-[#bc3feb]/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-[#00efd6]/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-[#fab900]/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-5xl mx-auto">
                    {/* Top Badge with Animation */}
                    <div className="flex justify-center mb-8">
                        <div className="group inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#008ac1] to-[#00b5ca] rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                                <MessageSquare className="w-5 h-5 text-[#008ac1] relative animate-bounce" />
                            </div>
                            <span className="text-sm font-semibold bg-gradient-to-r from-[#008ac1] to-[#00b5ca] bg-clip-text text-transparent">
                                We're Here to Help
                            </span>
                            <Sparkles className="w-4 h-4 text-[#fab900] animate-pulse" />
                        </div>
                    </div>

                    {/* Main Heading with Split Animation Effect */}
                    <div className="text-center mb-6">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4">
                            <span className="inline-block animate-fadeInUp">
                                <span className="bg-gradient-to-r from-[#008ac1] via-[#00b5ca] to-[#00efd6] bg-clip-text text-transparent">
                                    Let's Create
                                </span>
                            </span>
                            <br />
                            <span className="inline-block animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                                <span className="bg-gradient-to-r from-[#bc3feb] via-[#fab900] to-[#ee6500] bg-clip-text text-transparent">
                                    Something Amazing
                                </span>
                            </span>
                        </h1>

                        {/* Animated Underline */}
                        <div className="flex justify-center gap-2 mb-8">
                            <div className="w-20 h-1.5 bg-gradient-to-r from-[#008ac1] to-[#00b5ca] rounded-full animate-slideInLeft"></div>
                            <div className="w-20 h-1.5 bg-gradient-to-r from-[#bc3feb] to-[#fab900] rounded-full animate-slideInRight"></div>
                        </div>
                    </div>

                    {/* Subtitle with Icon */}
                    <div className="text-center mb-12">
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                            Have a project in mind? We'd love to hear about it.
                            <br />
                            <span className="font-semibold text-gray-900">Let's discuss how we can help your business grow.</span>
                        </p>
                    </div>

                    {/* Quick Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                        {/* Email Card */}
                        <a
                            href="mailto:contact@cinuteinfomedia.com"
                            className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#008ac1]/30 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#008ac1]/5 to-[#00b5ca]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#008ac1] to-[#00b5ca] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                                    <Mail className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#008ac1] transition-colors">Email Us</h3>
                                <p className="text-sm text-gray-600">Quick response guaranteed</p>
                            </div>
                        </a>

                        {/* Phone Card */}
                        <a
                            href="tel:+919004988859"
                            className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#bc3feb]/30 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#bc3feb]/5 to-[#fab900]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#bc3feb] to-[#fab900] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                                    <Phone className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#bc3feb] transition-colors">Call Us</h3>
                                <p className="text-sm text-gray-600">Let's talk directly</p>
                            </div>
                        </a>

                        {/* Location Card */}
                        <a
                            href="https://maps.app.goo.gl/ak5SjeUnrDyWLXFNA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#00efd6]/30 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00efd6]/5 to-[#00b5ca]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00efd6] to-[#00b5ca] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                                    <MapPin className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#00efd6] transition-colors">Visit Us</h3>
                                <p className="text-sm text-gray-600">Mumbai, India</p>
                            </div>
                        </a>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center mt-12 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                        <a
                            href="#contact-form"
                            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#008ac1] to-[#00b5ca] hover:from-[#008ac1] hover:to-[#008ac1] text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                            <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            <span className="relative">Send Us a Message</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Trust Badge */}
                    <div className="text-center mt-10 animate-fadeInUp" style={{ animationDelay: '1s' }}>
                        <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            Typically responds within 24 hours
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }

                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out forwards;
                }

                .animate-slideInLeft {
                    animation: slideInLeft 0.8s ease-out forwards;
                }

                .animate-slideInRight {
                    animation: slideInRight 0.8s ease-out forwards;
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}