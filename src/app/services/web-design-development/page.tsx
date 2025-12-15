import dynamic from 'next/dynamic';
import Hero from '@/components/services/web-design-development/Hero';
import ServiceOverview from '@/components/services/web-design-development/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/web-design-development/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const WebsiteTypes = dynamic(() => import('@/components/services/web-design-development/WebsiteTypes'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/web-design-development/Process'), {
    loading: () => <div className="py-20" />,
});
const Technologies = dynamic(() => import('@/components/services/web-design-development/Technologies'), {
    loading: () => <div className="py-20" />,
});
const SEOPerformance = dynamic(() => import('@/components/services/web-design-development/SEOPerformance'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/web-design-development/CTA'), {
    loading: () => <div className="py-20" />,
});

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
        <main className="bg-white dark:bg-black">
            <Hero />
            <ServiceOverview />
            <WhyChooseUs />
            <WebsiteTypes />
            <Process />
            <Technologies />
            <SEOPerformance />
            <CTA />
        </main>
    );
}
