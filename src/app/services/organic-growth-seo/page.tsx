import dynamic from 'next/dynamic';
import Hero from '@/components/services/organic-growth-seo/Hero';
import ServiceOverview from '@/components/services/organic-growth-seo/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/organic-growth-seo/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const Techniques = dynamic(() => import('@/components/services/organic-growth-seo/Techniques'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/organic-growth-seo/Process'), {
    loading: () => <div className="py-20" />,
});
const ToolsReporting = dynamic(() => import('@/components/services/organic-growth-seo/ToolsReporting'), {
    loading: () => <div className="py-20" />,
});
const Industries = dynamic(() => import('@/components/services/organic-growth-seo/Industries'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/organic-growth-seo/CTA'), {
    loading: () => <div className="py-20" />,
});

export const metadata = {
    title: 'Organic Growth & SEO Services | Search Engine Optimization Company',
    description: 'Drive sustainable traffic and high-intent leads with our data-driven Organic SEO Services. We are a leading Search Engine Optimization Company focused on long-term growth and measurable results.',
    keywords: [
        'Organic SEO Services',
        'Search Engine Optimization Company',
        'Organic Traffic Growth',
        'SEO Agency',
        'On-Page SEO',
        'Technical SEO',
        'Content SEO',
        'Link Building',
    ],
    openGraph: {
        title: 'Organic Growth & SEO Services | CIM',
        description: 'Expert Organic SEO Services for long-term visibility and sustainable traffic growth.',
        type: 'website',
    },
};

export default function OrganicGrowthSEOPage() {
    return (
        <main className="bg-white dark:bg-black">
            <Hero />
            <ServiceOverview />
            <WhyChooseUs />
            <Techniques />
            <Process />
            <ToolsReporting />
            <Industries />
            <CTA />
        </main>
    );
}
