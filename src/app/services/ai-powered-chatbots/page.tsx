import dynamic from 'next/dynamic';
import Hero from '@/components/services/ai-powered-chatbots/Hero';
import ServiceOverview from '@/components/services/ai-powered-chatbots/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/ai-powered-chatbots/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const TypesOfChatbots = dynamic(() => import('@/components/services/ai-powered-chatbots/TypesOfChatbots'), {
    loading: () => <div className="py-20" />,
});
const IndustriesAndUseCases = dynamic(() => import('@/components/services/ai-powered-chatbots/IndustriesAndUseCases'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/ai-powered-chatbots/Process'), {
    loading: () => <div className="py-20" />,
});
const Technologies = dynamic(() => import('@/components/services/ai-powered-chatbots/Technologies'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/ai-powered-chatbots/CTA'), {
    loading: () => <div className="py-20" />,
});

export const metadata = {
    title: 'AI-Powered Chatbots | Intelligent Customer Support & Conversational AI Solutions',
    description: 'Deploy intelligent AI chatbots for 24/7 customer support, lead generation, and engagement. Our conversational AI solutions reduce costs by 60% while improving customer satisfaction. Get started today.',
    keywords: [
        'AI Chatbot Development',
        'AI-Powered Chatbots',
        'Conversational AI Solutions',
        'Chatbot Development Company',
        'Customer Support Chatbots',
        'AI Customer Service',
        'Intelligent Chatbots',
        'Chatbot Solutions',
        'AI Conversation Platform',
        'Enterprise Chatbots',
    ],
    openGraph: {
        title: 'AI-Powered Chatbots | CIM',
        description: 'Deploy intelligent AI chatbots for 24/7 customer support, lead generation, and engagement. Reduce costs by 60% while improving customer satisfaction.',
        type: 'website',
    },
};

export default function AIPoweredChatbotsPage() {
    return (
        <main className="bg-white dark:bg-black">
            <Hero />
            <ServiceOverview />
            <WhyChooseUs />
            <TypesOfChatbots />
            <IndustriesAndUseCases />
            <Process />
            <Technologies />
            <CTA />
        </main>
    );
}
