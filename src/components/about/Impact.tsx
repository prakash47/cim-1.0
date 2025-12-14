import { Award, Star, Target, TrendingUp } from 'lucide-react';

export default function Impact() {
    const stats = [
        { value: '100%', label: 'Client Satisfaction', icon: Star },
        { value: '5/5', label: 'Client Ratings', icon: Award },
        { value: '1,500+', label: 'Leads Generated Monthly', icon: TrendingUp },
        { value: '4×', label: 'Average ROI Increase', icon: Target }
    ];

    return (
        <section className="py-12 lg:py-16 bg-gradient-to-br from-[#008ac1] via-[#00b5ca] to-[#008ac1] relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Our Impact
                    </h2>
                    <div className="w-28 h-1.5 bg-white mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        We focus on delivering real outcomes, not vanity metrics
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 group"
                            >
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-6 h-6 text-[#008ac1]" />
                                </div>
                                <div className="mt-4">
                                    <div className="text-5xl md:text-6xl font-bold text-white mb-3">
                                        {stat.value}
                                    </div>
                                    <div className="text-lg text-white/90 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 max-w-4xl mx-auto">
                        <p className="text-xl text-white leading-relaxed">
                            Our work consistently transforms brand visibility, lead generation, and digital presence for businesses across industries.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
