"use client"

import { useState, useEffect } from 'react';
import { MessageSquare, Mail, Phone, MapPin, ArrowRight, Sparkles, Send, Clock, Users, Zap, Globe, CheckCircle, Star, TrendingUp } from 'lucide-react';

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeCard, setActiveCard] = useState(0);
    const [messageIndex, setMessageIndex] = useState(0);
    const [particles, setParticles] = useState<Array<{ x: number, y: number, delay: number }>>([]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard((prev) => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const msgInterval = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % 3);
        }, 4000);
        return () => clearInterval(msgInterval);
    }, []);

    useEffect(() => {
        const newParticles = Array.from({ length: 20 }, (_, i) => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: i * 0.2
        }));
        setParticles(newParticles);
    }, []);

    const contactMethods = [
        {
            icon: Mail,
            title: 'Email Us',
            info: 'contact@cinuteinfomedia.com',
            description: 'Drop us a line anytime',
            color: 'from-[#008ac1] to-[#00b5ca]',
            href: 'mailto:contact@cinuteinfomedia.com',
            badge: 'Most Popular'
        },
        {
            icon: Phone,
            title: 'Call Us',
            info: '+91 900 498 8859',
            description: 'Mon-Fri 9AM-6PM IST',
            color: 'from-[#bc3feb] to-[#fab900]',
            href: 'tel:+919004988859',
            badge: 'Instant'
        },
        {
            icon: MapPin,
            title: 'Visit Office',
            info: 'Mumbai, India',
            description: 'Come say hello',
            color: 'from-[#00efd6] to-[#00b5ca]',
            href: 'https://maps.app.goo.gl/ak5SjeUnrDyWLXFNA',
            badge: 'By Appointment'
        },
        {
            icon: MessageSquare,
            title: 'Live Chat',
            info: 'Start Conversation',
            description: 'Get instant answers',
            color: 'from-[#fab900] to-[#ee6500]',
            href: '#contact-form',
            badge: '24/7 Available'
        }
    ];

    const messages = [
        { text: "Hello! Need help with your project?", from: "Team", time: "2m ago" },
        { text: "Let's discuss your requirements!", from: "Team", time: "Just now" },
        { text: "We're here to help you grow!", from: "Team", time: "1m ago" }
    ];

    const features = [
        { icon: CheckCircle, text: "Fast Response", color: "text-green-500" },
        { icon: Star, text: "Expert Team", color: "text-yellow-500" },
        { icon: TrendingUp, text: "Proven Results", color: "text-blue-500" }
    ];

    return (
        <section className="relative py-24 px-6 md:px-12 xl:px-16 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
            {/* Advanced Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs with Mouse Parallax */}
                <div
                    className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-[#008ac1]/10 rounded-full blur-3xl animate-pulse"
                    style={{
                        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
                    }}
                ></div>
                <div
                    className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-[#bc3feb]/10 rounded-full blur-3xl animate-pulse"
                    style={{
                        animationDelay: '1s',
                        transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`
                    }}
                ></div>
                <div
                    className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-[#00efd6]/8 rounded-full blur-3xl animate-pulse"
                    style={{
                        animationDelay: '2s',
                        transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
                    }}
                ></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,138,193,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,138,193,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

                {/* Floating Elements */}
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute w-2 h-2 bg-[#008ac1]/20 rounded-full animate-float`}
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${3 + Math.random() * 2}s`
                        }}
                    ></div>
                ))}
            </div>

            <div className="mx-auto relative">
                {/* Top Badge */}
                <div className="flex justify-center lg:justify-start mb-8 animate-fadeInUp">
                    <div className="group inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#008ac1] to-[#00b5ca] rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                            <MessageSquare className="w-5 h-5 text-[#008ac1] relative animate-bounce" />
                        </div>
                        <span className="text-sm font-semibold bg-gradient-to-r from-[#008ac1] to-[#00b5ca] bg-clip-text text-transparent">
                            Get In Touch
                        </span>
                        <Sparkles className="w-4 h-4 text-[#fab900] animate-pulse" />
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16  items-center">
                    {/* LEFT COLUMN - Contact Details */}
                    <div className="space-y-8 animate-fadeInUp">
                        {/* Main Heading */}
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                                <span className="inline-block">
                                    <span className="bg-gradient-to-r from-[#008ac1] via-[#00b5ca] to-[#00efd6] bg-clip-text text-transparent">
                                        Let's Start a
                                    </span>
                                </span>
                                <br />
                                <span className="inline-block">
                                    <span className="bg-gradient-to-r from-[#bc3feb] via-[#fab900] to-[#ee6500] bg-clip-text text-transparent">
                                        Conversation
                                    </span>
                                </span>
                            </h1>

                            {/* Animated Underline */}
                            <div className="flex gap-2 mb-6">
                                <div className="w-24 h-1.5 bg-gradient-to-r from-[#008ac1] to-[#00b5ca] rounded-full animate-slideInLeft"></div>
                                <div className="w-16 h-1.5 bg-gradient-to-r from-[#bc3feb] to-[#fab900] rounded-full animate-slideInRight"></div>
                            </div>

                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                Have a project in mind? We're here to turn your vision into reality.
                                <span className="block mt-2 font-semibold text-gray-900">
                                    Choose your preferred way to reach us.
                                </span>
                            </p>
                        </div>

                        {/* Contact Method Cards */}
                        <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {contactMethods.map((method, index) => {
                                const Icon = method.icon;
                                return (
                                    <a
                                        key={index}
                                        href={method.href}
                                        target={method.href.startsWith('http') ? '_blank' : undefined}
                                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="group relative block"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className={`
                                            relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 
                                            border-2 transition-all duration-300
                                        `}>
                                            {/* Gradient Background on Hover */}
                                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                                            {/* Active Indicator */}
                                            {activeCard === index && (
                                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${method.color} opacity-5 animate-pulse`}></div>
                                            )}

                                            <div className="relative flex items-center gap-5">
                                                {/* Icon */}
                                                <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                                    <Icon className="w-8 h-8 text-white" />
                                                    {activeCard === index && (
                                                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${method.color} animate-ping opacity-50`}></div>
                                                    )}
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h3 className="text-xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-[#008ac1] group-hover:to-[#00b5ca] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                                                            {method.title}
                                                        </h3>
                                                    </div>
                                                    <p className="text-base font-semibold text-gray-700 mb-1">{method.info}</p>
                                                    <p className="text-sm text-gray-500">{method.description}</p>
                                                </div>

                                                {/* Arrow */}
                                                <ArrowRight className={`w-6 h-6 text-gray-400 group-hover:text-[#008ac1] group-hover:translate-x-2 transition-all duration-300`} />
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT COLUMN - Enhanced Visual Animation */}
                    <div className="relative lg:h-[600px] flex items-start mt-0 justify-center animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                        <div className="relative w-full max-w-lg">
                            {/* Main 3D Card Stack */}
                            <div className="relative h-[500px]">
                                {/* Floating Device Mockup */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {/* Phone Frame */}
                                    <div className="relative w-72 h-[500px] bg-gray-900 rounded-[3rem] shadow-2xl p-3 hover:scale-105 transition-transform duration-500">
                                        {/* Screen */}
                                        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                                            {/* Status Bar */}
                                            <div className="h-8 bg-gradient-to-r from-[#008ac1] to-[#00b5ca] flex items-center justify-between px-6 text-white text-xs">
                                                <span>9:41</span>
                                                <div className="flex gap-1">
                                                    <div className="w-1 h-1 bg-white rounded-full"></div>
                                                    <div className="w-1 h-1 bg-white rounded-full"></div>
                                                    <div className="w-1 h-1 bg-white rounded-full"></div>
                                                </div>
                                            </div>

                                            {/* Chat Interface */}
                                            <div className="h-full bg-gradient-to-b from-gray-50 to-white p-4 space-y-4 overflow-hidden">
                                                {/* Header */}
                                                <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                                                    <div className="relative">
                                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#008ac1] to-[#00b5ca] flex items-center justify-center">
                                                            <Users className="w-5 h-5 text-white" />
                                                        </div>
                                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900">Support Team</h3>
                                                        <p className="text-xs text-green-500 flex items-center gap-1">
                                                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                                            Online
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Messages */}
                                                <div className="space-y-3">
                                                    {/* Incoming Messages with Animation */}
                                                    {messages.map((msg, idx) => (
                                                        <div
                                                            key={idx}
                                                            className={`transform transition-all duration-500 ${messageIndex === idx ? 'opacity-100 translate-y-0' : 'opacity-40 -translate-y-2'
                                                                }`}
                                                        >
                                                            <div className="flex gap-2 items-end">
                                                                <div className="flex-1">
                                                                    <div className="bg-white rounded-2xl rounded-bl-sm p-3 shadow-md border border-gray-100">
                                                                        <p className="text-sm text-gray-800">{msg.text}</p>
                                                                    </div>
                                                                    <p className="text-xs text-gray-400 mt-1 ml-2">{msg.time}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}

                                                    {/* Typing Indicator */}
                                                    <div className="flex gap-2 items-end animate-fadeInUp">
                                                        <div className="bg-gray-100 rounded-2xl rounded-bl-sm p-3 shadow-sm">
                                                            <div className="flex gap-1">
                                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Input Area */}
                                                <div className="absolute py-4 px-4">
                                                    <div className="flex gap-2 bg-white rounded-full shadow-lg p-2 border border-gray-200">
                                                        <input
                                                            type="text"
                                                            placeholder="Type your message..."
                                                            className="flex-1 px-4 py-2 text-sm bg-transparent outline-none"
                                                            readOnly
                                                        />
                                                        <button className="w-10 h-10 rounded-full bg-gradient-to-br from-[#008ac1] to-[#00b5ca] flex items-center justify-center hover:scale-110 transition-transform">
                                                            <Send className="w-5 h-5 text-white" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Notch */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl"></div>
                                    </div>
                                </div>

                                {/* Floating Feature Cards */}
                                {features.map((feature, idx) => {
                                    const Icon = feature.icon;
                                    return (
                                        <div
                                            key={idx}
                                            className="absolute bg-white rounded-xl p-3 shadow-xl border border-gray-200 animate-float hover:scale-110 transition-transform cursor-pointer"
                                            style={{
                                                top: `${20 + idx * 30}%`,
                                                right: idx === 1 ? 'auto' : '-10%',
                                                left: idx === 1 ? '-10%' : 'auto',
                                                animationDelay: `${idx * 0.5}s`
                                            }}
                                        >
                                            <div className="flex items-center gap-2">
                                                <Icon className={`w-5 h-5 ${feature.color}`} />
                                                <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{feature.text}</span>
                                            </div>
                                        </div>
                                    );
                                })}

                                {/* Particle Animation Background */}
                                <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
                                    {particles.map((particle, idx) => (
                                        <div
                                            key={idx}
                                            className="absolute w-1 h-1 bg-[#008ac1]/30 rounded-full animate-particle"
                                            style={{
                                                left: `${particle.x}%`,
                                                top: `${particle.y}%`,
                                                animationDelay: `${particle.delay}s`
                                            }}
                                        ></div>
                                    ))}
                                </div>

                                {/* Glow Effects */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#008ac1]/20 via-[#bc3feb]/10 to-[#00efd6]/20 rounded-full blur-3xl animate-pulse -z-20"></div>
                            </div>

                            {/* Bottom Notification Card */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-2xl p-4 shadow-2xl border border-gray-200 w-80 animate-slideUp">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                                        <CheckCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-900">Message Sent!</h4>
                                        <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="flex justify-center mt-16 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                    <a
                        href="#contact-form"
                        className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#008ac1] to-[#00b5ca] hover:from-[#007a9f] hover:to-[#009fb5] text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <span className="relative">Send Us a Message</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes slideInLeft {
                    from { opacity: 0; transform: translateX(-50px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                @keyframes slideInRight {
                    from { opacity: 0; transform: translateX(50px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }

                @keyframes slideUp {
                    from { opacity: 0; transform: translate(-50%, 20px); }
                    to { opacity: 1; transform: translate(-50%, 0); }
                }

                @keyframes particle {
                    0% { 
                        opacity: 0;
                        transform: translateY(0) scale(0);
                    }
                    50% {
                        opacity: 1;
                    }
                    100% { 
                        opacity: 0;
                        transform: translateY(-100px) scale(1);
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

                .animate-slideUp {
                    animation: slideUp 1s ease-out forwards;
                    animation-delay: 1.5s;
                    opacity: 0;
                }

                .animate-particle {
                    animation: particle 4s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}