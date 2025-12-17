import dynamic from 'next/dynamic';
import Hero from '@/components/services/ai-workflows-automations/Hero';
import ServiceOverview from '@/components/services/ai-workflows-automations/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/ai-workflows-automations/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const TypesOfAutomations = dynamic(() => import('@/components/services/ai-workflows-automations/TypesOfAutomations'), {
    loading: () => <div className="py-20" />,
});
const IndustriesAndUseCases = dynamic(() => import('@/components/services/ai-workflows-automations/IndustriesAndUseCases'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/ai-workflows-automations/Process'), {
    loading: () => <div className="py-20" />,
});
const Technologies = dynamic(() => import('@/components/services/ai-workflows-automations/Technologies'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/ai-workflows-automations/CTA'), {
    loading: () => <div className="py-20" />,
});

export const metadata = {
    title: 'AI Workflows & Automations | Intelligent Business Process Automation',
    description: 'Transform your operations with AI-powered workflows and intelligent automation. Reduce costs, eliminate errors, and scale your business with our enterprise-grade automation solutions.',
    keywords: [
        'AI Workflow Automation',
        'Business Process Automation',
        'AI Automation Services',
        'Intelligent Automation Solutions',
        'Workflow Automation',
        'Business Automation',
        'AI-Powered Workflows',
        'Enterprise Automation',
        'Process Automation',
        'Intelligent Business Processes',
    ],
    openGraph: {
        title: 'AI Workflows & Automations | CIM',
        description: 'Transform your operations with AI-powered workflows and intelligent automation solutions.',
        type: 'website',
    },
};

export default function AIWorkflowsAutomationsPage() {
    return (
        <main className="bg-white dark:bg-black">
            <Hero />
            <ServiceOverview />
            <WhyChooseUs />
            <TypesOfAutomations />
            <IndustriesAndUseCases />
            <Process />
            <Technologies />
            <CTA />
        </main>
    );
}
