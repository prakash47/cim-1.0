import {
    Globe,
    Palette,
    Share2,
    Search,
    BarChart3,
    Zap,
    MessageSquare,
    Headphones
} from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: Globe,
            title: 'Websites & Web Apps',
            description: 'Fast, conversion-ready, and responsive digital experiences',
            color: 'from-[#008ac1] to-[#00b5ca]'
        },
        {
            icon: Palette,
            title: 'Brand Identity & Creative Design',
            description: 'Designs that help brands stand out and communicate value',
            color: 'from-[#bc3feb] to-[#fab900]'
        },
        {
            icon: Share2,
            title: 'Social Media Marketing',
            description: 'Content, community-building, and brand presence',
            color: 'from-[#00efd6] to-[#00b5ca]'
        },
        {
            icon: Search,
            title: 'Organic Growth & SEO',
            description: 'Data-driven strategies to improve visibility and ranking',
            color: 'from-[#008ac1] to-[#bc3feb]'
        },
        {
            icon: BarChart3,
            title: 'Performance Marketing & Ads',
            description: 'Meta, Google & LinkedIn campaigns focused on leads',
            color: 'from-[#ee6500] to-[#fab900]'
        },
        {
            icon: Zap,
            title: 'AI Workflows & Automations',
            description: 'CRM, reporting, nurturing & operational automation',
            color: 'from-[#fab900] to-[#ee6500]'
        },
        {
            icon: MessageSquare,
            title: 'AI-Powered Chatbots',
            description: '24/7 smart assistants for lead generation & support',
            color: 'from-[#00b5ca] to-[#00efd6]'
        },
        {
            icon: Headphones,
            title: 'Additional Support Services',
            description: 'Analytics, virtual assistance & backend operations',
            color: 'from-[#00efd6] to-[#bc3feb]'
        }
    ];

    return (
        <section className="py-12 lg:py-16 bg-gradient-to-b from-gray-50/50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        What We Do
                    </h2>
                    <div className="w-28 h-1.5 bg-gradient-to-r from-[#bc3feb] to-[#fab900] mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Full-spectrum marketing and technology services under one roof
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                                }}
                            >
                                {/* Hover Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                <div className="relative">
                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                                        <Icon className="w-full h-full text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#008ac1] transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
