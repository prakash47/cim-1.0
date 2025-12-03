import { CheckCircle2 } from 'lucide-react';

export default function Industries() {
    const industries = [
        'IT, SaaS & Software Development',
        'EdTech & E-Learning',
        'HR & Recruitment',
        'Healthcare & Wellness',
        'Retail, Jewelry & E-Commerce',
        'Entertainment & Media'
    ];

    return (
        <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Industries We Serve
                    </h2>
                    <div className="w-28 h-1.5 bg-gradient-to-r from-[#fab900] to-[#ee6500] mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        CIM has experience across multiple sectors, delivering tailored solutions for diverse business needs
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#008ac1]/30 flex items-center gap-4"
                            style={{
                                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                            }}
                        >
                            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#008ac1] to-[#00b5ca] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                                <CheckCircle2 className="w-7 h-7 text-white" />
                            </div>
                            <p className="text-base font-semibold text-gray-900 group-hover:text-[#008ac1] transition-colors">
                                {industry}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
