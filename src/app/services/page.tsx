import Hero from '@/components/services/Hero';
import ServicesList from '@/components/services/ServicesList';
import WhyChooseUs from '@/components/services/WhyChooseUs';
import Process from '@/components/services/Process';
import CTA from '@/components/services/CTA';

export const metadata = {
    title: 'Our Services | Cinute InfoMedia',
    description: 'Explore our comprehensive digital services including web development, mobile apps, SEO, social media marketing, AI automation, and more. Transform your business with CIM.',
    keywords: 'web development, mobile app development, SEO, social media marketing, AI automation, digital marketing, brand design',
};

export default function ServicesPage() {
    return (
        <main>
            <Hero />
            <ServicesList />
            <WhyChooseUs />
            <Process />
            <CTA />
        </main>
    );
}
