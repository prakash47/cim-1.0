import { Layout, Smartphone, Palette, TrendingUp } from 'lucide-react';

const services = [
    {
        title: 'Web Design Development',
        description: 'Custom, responsive websites built with modern technologies to drive growth and engagement.',
        icon: Layout,
        color: 'bg-blue-500',
    },
    {
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications that deliver seamless user experiences.',
        icon: Smartphone,
        color: 'bg-violet-500',
    },
    {
        title: 'UI/UX Branding',
        description: 'Strategic branding and intuitive design that connects with your audience and builds trust.',
        icon: Palette,
        color: 'bg-purple-500',
    },
    {
        title: 'Digital Marketing',
        description: 'Data-driven marketing strategies to increase visibility, traffic, and conversions.',
        icon: TrendingUp,
        color: 'bg-pink-500',
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Our Services
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Comprehensive digital solutions tailored to your business needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-800"
                        >
                            <div className={`inline-flex p-3 rounded-xl ${service.color} bg-opacity-10 text-white mb-6 group-hover:scale-110 transition-transform`}>
                                <service.icon className={`h-6 w-6 ${service.color.replace('bg-', 'text-')}`} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
