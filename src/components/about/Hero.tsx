import { Sparkles } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#008ac1]/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#bc3feb]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#00efd6]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-5xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#008ac1]/10 to-[#00b5ca]/10 rounded-full mb-8 border border-[#008ac1]/20">
                        <Sparkles className="w-4 h-4 text-[#008ac1]" />
                        <span className="text-sm font-semibold text-[#008ac1]">Digital Growth Agency</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-[#008ac1] via-[#00b5ca] to-[#00efd6] bg-clip-text text-transparent">
                            Who We Are
                        </span>
                    </h1>

                    <div className="w-32 h-1.5 bg-gradient-to-r from-[#008ac1] via-[#00b5ca] to-[#00efd6] mx-auto mb-10 rounded-full"></div>

                    <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                        <p className="font-medium">
                            <span className="text-[#008ac1] font-bold">Cinute InfoMedia (CIM)</span> is a digital growth agency that helps businesses build, market, and scale through a combination of{' '}
                            <span className="text-[#bc3feb] font-semibold">creativity, data, and technology</span>.
                        </p>
                        <p>
                            We don't just run campaigns - we build{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10 font-bold text-[#008ac1]">growth ecosystems</span>
                                <span className="absolute bottom-0 left-0 w-full h-3 bg-[#00efd6]/20 -z-0"></span>
                            </span>
                            {' '}that connect websites, branding, SEO, ads, automations, and AI-driven experiences.
                        </p>
                        <p className="text-2xl font-semibold text-gray-900">
                            Creating systems that help brands grow{' '}
                            <span className="bg-gradient-to-r from-[#bc3feb] to-[#fab900] bg-clip-text text-transparent">
                                faster, smarter, and sustainably
                            </span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
