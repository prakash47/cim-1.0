import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://cim-10.vercel.app';

    // Static routes
    const routes = [
        '',
        '/about',
        '/contact',
        '/blog',
        '/careers',
        '/privacy-policy',
        '/terms-of-service',
        '/cookies-policy',
        '/get-in-touch',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Service routes
    const services = [
        'web-design-development',
        'mobile-app-development',
        'ai-workflows-automations',
        'ai-powered-chatbots',
        'brand-identity-design',
        'organic-growth-seo',
        'performance-marketing',
        'social-media-marketing',
        'additional-support-services',
    ].map((service) => ({
        url: `${baseUrl}/services/${service}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...routes, ...services];
}
