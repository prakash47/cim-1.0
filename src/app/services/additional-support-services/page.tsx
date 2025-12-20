import dynamic from 'next/dynamic';
import Hero from '@/components/services/additional-support-services/Hero';
import SupportServices from '@/components/services/additional-support-services/SupportServices';

// Lazy load below-the-fold components for better performance
const SupportPlans = dynamic(() => import('@/components/services/additional-support-services/SupportPlans'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/additional-support-services/CTA'), {
    loading: () => <div className="py-20" />,
});

export const metadata = {
    title: 'Additional Support Services | Ongoing Maintenance & Technical Support',
    description: 'Comprehensive additional support services including 24/7 technical support, system monitoring, security management, backup solutions, and dedicated account management. Keep your digital solutions running at peak performance.',
    keywords: [
        'Technical Support Services',
        '24/7 IT Support',
        'System Monitoring',
        'Security Management',
        'Backup and Recovery',
        'Cloud Management',
        'Dedicated Support Team',
        'Maintenance Services',
    ],
    openGraph: {
        title: 'Additional Support Services | CIM',
        description: 'Expert ongoing support and maintenance services to keep your digital solutions thriving. 24/7 availability, proactive monitoring, and dedicated success teams.',
        type: 'website',
    },
};

export default function AdditionalSupportServicesPage() {
    return (
        <main className="bg-white dark:bg-black">
            <Hero />
            <SupportServices />
            <SupportPlans />
            <CTA />
        </main>
    );
}
