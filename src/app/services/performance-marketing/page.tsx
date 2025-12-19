import dynamic from 'next/dynamic';
import Hero from '@/components/services/performance-marketing/Hero';
import ServiceOverview from '@/components/services/performance-marketing/ServiceOverview';

// Lazy load below-the-fold components for better performance
const AdPlatforms = dynamic(() => import('@/components/services/performance-marketing/AdPlatforms'), {
    loading: () => <div className="py-20" />,
});
const WhyChooseUs = dynamic(() => import('@/components/services/performance-marketing/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const CampaignTypes = dynamic(() => import('@/components/services/performance-marketing/CampaignTypes'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/performance-marketing/Process'), {
    loading: () => <div className="py-20" />,
});
const CaseStudies = dynamic(() => import('@/components/services/performance-marketing/CaseStudies'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/performance-marketing/CTA'), {
    loading: () => <div className="py-20" />,
});

export const metadata = {
    title: 'Performance Marketing Services | Data-Driven Advertising Agency',
    description: 'Maximize your ROI with our data-driven Performance Marketing Services. Expert PPC, paid social, programmatic advertising, and conversion optimization for measurable business growth.',
    keywords: [
        'Performance Marketing',
        'PPC Advertising',
        'Paid Social Media',
        'Google Ads Management',
        'Facebook Ads',
        'Programmatic Advertising',
        'Conversion Rate Optimization',
        'ROI Marketing',
    ],
    openGraph: {
        title: 'Performance Marketing Services | CIM',
        description: 'Data-driven advertising solutions that deliver measurable ROI and scalable growth.',
        type: 'website',
    },
};

export default function PerformanceMarketingPage() {
    return (
        <main className="bg-white dark:bg-black">
            <Hero />
            <ServiceOverview />
            <AdPlatforms />
            <WhyChooseUs />
            <CampaignTypes />
            <Process />
            <CaseStudies />
            <CTA />
        </main>
    );
}
