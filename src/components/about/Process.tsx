import { Lightbulb, Palette, Rocket, TrendingUp } from 'lucide-react';

export default function Process() {
    const process = [
        {
            icon: Lightbulb,
            title: 'Discover',
            description: 'Understand your business, goals, market & audience',
            color: 'from-[#008ac1] to-[#00b5ca]'
        },
        {
            icon: Palette,
            title: 'Design',
            description: 'Build digital assets & brand touchpoints that resonate',
            color: 'from-[#bc3feb] to-[#fab900]'
        },
        {
            icon: Rocket,
            title: 'Deploy',
            description: 'Launch campaigns backed by data & targeting',
            color: 'from-[#00efd6] to-[#00b5ca]'
        },
        {
            icon: TrendingUp,
            title: 'Optimize',
            description: 'Analyze performance, automate workflows & scale growth',
            color: 'from-[#fab900] to-[#ee6500]'
        }
    ];

    return (
        <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#00efd6]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#bc3feb]/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        How We Work
                    </h2>
                    <div className="w-28 h-1.5 bg-gradient-to-r from-[#00efd6] to-[#00b5ca] mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Every project begins with clarity and strategy. Our structured approach ensures measurable, sustainable growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                    {process.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="relative">
                                {/* Connector */}
                                {index < process.length - 1 && (
                                    <div className="hidden lg:block absolute top-16 left-[calc(50%+40px)] w-[calc(100%-80px)] h-1 bg-gradient-to-r from-gray-200 to-gray-300">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-300 rounded-full"></div>
                                    </div>
                                )}

                                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#008ac1]/30 group">
                                    {/* Step Number Badge */}
                                    <div className={`absolute -top-5 -right-5 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-xl z-10 group-hover:scale-110 transition-transform duration-300`}>
                                        {index + 1}
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color} p-5 mb-6 group-hover:scale-105 group-hover:-rotate-3 transition-all duration-500 shadow-xl`}>
                                        <Icon className="w-full h-full text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Growth Arrow */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#fab900] to-[#ee6500] rounded-full shadow-xl">
                        <Rocket className="w-6 h-6 text-white animate-bounce" />
                        <span className="text-xl font-bold text-white">Growth!</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
