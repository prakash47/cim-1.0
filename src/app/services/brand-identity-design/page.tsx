import dynamic from 'next/dynamic';
import Hero from '@/components/services/brand-identity-design/Hero';
import ServiceOverview from '@/components/services/brand-identity-design/ServiceOverview';

// Lazy load below-the-fold components for better performance
const BrandElements = dynamic(() => import('@/components/services/brand-identity-design/BrandElements'), {
    loading: () => <div className="py-20" />,
});
const WhyChooseUs = dynamic(() => import('@/components/services/brand-identity-design/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const DesignProcess = dynamic(() => import('@/components/services/brand-identity-design/DesignProcess'), {
    loading: () => <div className="py-20" />,
});
const DesignTools = dynamic(() => import('@/components/services/brand-identity-design/DesignTools'), {
    loading: () => <div className="py-20" />,
});
const BrandPackages = dynamic(() => import('@/components/services/brand-identity-design/BrandPackages'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/brand-identity-design/CTA'), {
    loading: () => <div className="py-20" />,
});

export const metadata = {
    title: 'Brand Identity & Design Services | Creative Branding Agency',
    description: 'Transform your business with professional brand identity design. We create powerful logos, visual identities, brand guidelines, and complete branding solutions that captivate and convert.',
    keywords: [
        'Brand Identity Design',
        'Logo Design',
        'Visual Identity',
        'Brand Guidelines',
        'Corporate Branding',
        'Brand Strategy',
        'Creative Design Agency',
        'Rebranding Services',
    ],
    openGraph: {
        title: 'Brand Identity & Design Services | CIM',
        description: 'Professional brand identity design that captures your essence and connects with your audience.',
        type: 'website',
    },
};

export default function BrandIdentityDesignPage() {
    return (
        <main className="bg-white dark:bg-black">
            <Hero />
            <ServiceOverview />
            <BrandElements />
            <WhyChooseUs />
            <DesignProcess />
            <DesignTools />
            <BrandPackages />
            <CTA />
        </main>
    );
}
