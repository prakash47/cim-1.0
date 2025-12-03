import { Target } from 'lucide-react';

export default function LeadJourney() {
    const journeyStages = [
        { stage: 'Visibility', desc: 'Build awareness with the right audience' },
        { stage: 'Consideration', desc: 'Prospects explore your services' },
        { stage: 'Nurturing', desc: 'Build trust through engagement' },
        { stage: 'Conversion', desc: 'Turn prospects into clients' },
        { stage: 'Retention', desc: 'Foster long-term relationships' }
    ];

    return (
        <section className="py-12 lg:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Understanding the Lead Journey
                        </h2>
                        <div className="w-28 h-1.5 bg-gradient-to-r from-[#bc3feb] to-[#008ac1] mx-auto mb-8 rounded-full"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Marketing works in stages, and it's important to understand that results take time
                        </p>
                    </div>

                    {/* Journey Stages */}
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-gray-100 mb-12">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
                            {journeyStages.map((item, index) => (
                                <div key={index} className="relative text-center">
                                    {/* Connector Line */}
                                    {index < journeyStages.length - 1 && (
                                        <div className="hidden md:block absolute top-8 left-[calc(50%+20px)] w-[calc(100%-40px)] h-0.5 bg-gradient-to-r from-[#008ac1] to-[#00b5ca]">
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#00b5ca] rounded-full"></div>
                                        </div>
                                    )}

                                    <div className="relative">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#008ac1] to-[#00b5ca] flex items-center justify-center mx-auto mb-4 shadow-xl hover:scale-110 transition-transform duration-300">
                                            <span className="text-white font-bold text-xl">{index + 1}</span>
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">{item.stage}</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Philosophy Card */}
                    <div className="bg-gradient-to-br from-[#008ac1]/5 via-white to-[#bc3feb]/5 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-gray-100">
                        <div className="flex items-start gap-6 mb-6">
                            <div className="flex-shrink-0 w-20 h-20 rounded-3xl bg-gradient-to-br from-[#bc3feb] to-[#fab900] flex items-center justify-center shadow-xl">
                                <Target className="w-10 h-10 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Philosophy</h3>
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                    We build systems that support this entire journey, helping businesses attract high-quality leads and turn them into long-term clients.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    This staged approach ensures that leads are not only generated but also nurtured into high-value, long-term clients.{' '}
                                    <span className="font-semibold text-[#008ac1]">Results won't appear on day one</span>, but with consistent execution, the funnel delivers sustainable growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
