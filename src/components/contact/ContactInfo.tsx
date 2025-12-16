import { Mail, MapPin, Phone, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function ContactInfo() {
    const contactDetails = [
        {
            icon: Mail,
            title: 'Email Us',
            content: 'contact@cinuteinfomedia.com',
            link: 'mailto:contact@cinuteinfomedia.com',
            color: 'from-[#008ac1] to-[#00b5ca]'
        },
        {
            icon: Phone,
            title: 'Call Us',
            content: '+91 9004988859',
            link: 'tel:+919004988859',
            color: 'from-[#bc3feb] to-[#fab900]'
        },
        {
            icon: MapPin,
            title: 'Visit Us',
            content: 'Office #3, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road, Mira Bhayandar, Mumbai, Maharashtra 401107',
            link: '#',
            color: 'from-[#00efd6] to-[#00b5ca]'
        },
        {
            icon: Clock,
            title: 'Working Hours',
            content: 'Mon - Fri: 9:00 AM - 6:00 PM',
            link: '#',
            color: 'from-[#fab900] to-[#ee6500]'
        }
    ];

    return (
        <section className="py-12 lg:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contactDetails.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent text-center"
                                style={{
                                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                                }}
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-4 mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                                    <Icon className="w-full h-full text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {item.title}
                                </h3>
                                <a href={item.link} className="text-gray-600 hover:text-[#008ac1] transition-colors leading-relaxed block">
                                    {item.content}
                                </a>
                            </div>
                        );
                    })}
                </div>

                {/* Social Links */}
                <div className="mt-16 text-center">
                    <p className="text-lg text-gray-600 mb-6">Follow us on social media</p>
                    <div className="flex justify-center space-x-6">
                        {[
                            { icon: Facebook, color: 'hover:text-[#1877F2]' },
                            { icon: Twitter, color: 'hover:text-[#1DA1F2]' },
                            { icon: Instagram, color: 'hover:text-[#E4405F]' },
                            { icon: Linkedin, color: 'hover:text-[#0A66C2]' }
                        ].map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <Link
                                    key={index}
                                    href="#"
                                    className={`w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 ${social.color} transition-all hover:scale-110 hover:shadow-md`}
                                    aria-label={`Visit our social profile`}
                                >
                                    <Icon className="w-6 h-6" />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
