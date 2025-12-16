import dynamic from 'next/dynamic';
import Hero from '@/components/services/mobile-app-development/Hero';
import ServiceOverview from '@/components/services/mobile-app-development/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/mobile-app-development/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const AppTypes = dynamic(() => import('@/components/services/mobile-app-development/AppTypes'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/mobile-app-development/Process'), {
    loading: () => <div className="py-20" />,
});
const Technologies = dynamic(() => import('@/components/services/mobile-app-development/Technologies'), {
    loading: () => <div className="py-20" />,
});
const SecurityAndSEO = dynamic(() => import('@/components/services/mobile-app-development/SecurityAndSEO'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/mobile-app-development/CTA'), {
    loading: () => <div className="py-20" />,
});

export const metadata = {
    title: 'Custom Mobile App Development Services | iOS & Android App Company',
    description: 'As a leading Mobile App Development Company, we build high-performance, secure, and user-centric Custom Mobile App Solutions for iOS, Android, and Cross-Platform needs. Get a free consultation.',
    keywords: [
        'Mobile App Development Company',
        'Android App Development Services',
        'iOS App Development',
        'Cross Platform Mobile Apps',
        'Custom Mobile App Solutions',
        'MVP App Development',
        'Enterprise Mobile Applications',
    ],
    openGraph: {
        title: 'Mobile App Development | CIM',
        description: 'Expert Mobile App Development solutions for businesses. Fast, scalable, and secure apps for all platforms.',
        type: 'website',
    },
};

export default function MobileAppDevelopmentPage() {
    return (
        <main className="bg-white dark:bg-black">
            <Hero />
            <ServiceOverview />
            <WhyChooseUs />
            <AppTypes />
            <Process />
            <Technologies />
            <SecurityAndSEO />
            <CTA />
        </main>
    );
}
