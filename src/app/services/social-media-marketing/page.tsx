import dynamic from 'next/dynamic';
import Hero from '@/components/services/social-media-marketing/Hero';
import ServiceOverview from '@/components/services/social-media-marketing/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/social-media-marketing/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const TypesOfServices = dynamic(() => import('@/components/services/social-media-marketing/TypesOfServices'), {
    loading: () => <div className="py-20" />,
});
const Platforms = dynamic(() => import('@/components/services/social-media-marketing/Platforms'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/social-media-marketing/Process'), {
    loading: () => <div className="py-20" />,
});
const Analytics = dynamic(() => import('@/components/services/social-media-marketing/Analytics'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/social-media-marketing/CTA'), {
    loading: () => <div className="py-20" />,
});

export const metadata = {
    title: 'Social Media Marketing Services | Data-Driven SMM Agency',
    description: 'Elevate your brand with our expert Social Media Marketing Services. We are a top Social Media Management Company specializing in Instagram Marketing, Paid Social Media Advertising, and full-service digital strategy. Drive growth, engagement, and measurable ROI.',
    keywords: [
        'Social Media Marketing Services',
        'Social Media Management Company',
        'Instagram Marketing',
        'Paid Social Media Advertising',
        'Digital Marketing Agency',
        'Social Media Strategy',
        'Lead Generation',
        'Brand Awareness',
        'Social Media Marketing Agency',
        'Facebook Marketing',
        'LinkedIn Marketing',
        'YouTube Marketing',
    ],
    openGraph: {
        title: 'Social Media Marketing Services | CIM',
        description: 'Expert Social Media Marketing solutions for businesses. Data-driven strategies, multi-platform expertise, and proven ROI.',
        type: 'website',
    },
};

export default function SocialMediaMarketingPage() {
    return (
        <main className="bg-white dark:bg-black">
            <Hero />
            <ServiceOverview />
            <WhyChooseUs />
            <TypesOfServices />
            <Platforms />
            <Process />
            <Analytics />
            <CTA />
        </main>
    );
}
