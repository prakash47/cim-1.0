import Hero from '@/components/services/web-design-development/Hero';
import ServiceOverview from '@/components/services/web-design-development/ServiceOverview';
import WhyChooseUs from '@/components/services/web-design-development/WhyChooseUs';
import WebsiteTypes from '@/components/services/web-design-development/WebsiteTypes';
import Process from '@/components/services/web-design-development/Process';
import Technologies from '@/components/services/web-design-development/Technologies';
import SEOPerformance from '@/components/services/web-design-development/SEOPerformance';
import CTA from '@/components/services/web-design-development/CTA';

export const metadata = {
    title: 'Web Design & Development Services | Custom Website Development Company',
    description: 'Partner with a leading Web Development Company for Custom Website Development, Responsive Web Design, and enterprise-grade Web Design Services. We build fast, scalable, and SEO-optimized web solutions that drive business growth.',
    keywords: [
        'Web Design Services',
        'Web Development Company',
        'Custom Website Development',
        'Responsive Web Design',
        'Web Design Agency',
        'Professional Website Design',
        'E-commerce Web Development',
        'Website Development Services',
    ],
    openGraph: {
        title: 'Web Design & Development Services | CIM',
        description: 'Expert Web Design & Development solutions for businesses. Fast, scalable, and SEO-optimized websites.',
        type: 'website',
    },
};

export default function WebDesignDevelopmentPage() {
    return (
        <div className="bg-white dark:bg-black">
            <Hero />
            <ServiceOverview />
            <WhyChooseUs />
            <WebsiteTypes />
            <Process />
            <Technologies />
            <SEOPerformance />
            <CTA />
        </div>
    );
}
