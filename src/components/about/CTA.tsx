import Link from "next/link";
import { ArrowRight, Rocket } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-12 lg:py-16 bg-[var(--background)] transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="
            relative rounded-3xl p-12 md:p-16 shadow-2xl overflow-hidden
            bg-[linear-gradient(135deg,var(--brand-blue),var(--brand-teal))]
            text-center
          "
                >
                    {/* Animated Glow Background */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 dark:bg-white/5 rounded-full blur-3xl animate-pulse"></div>
                        <div
                            className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 dark:bg-white/5 rounded-full blur-3xl animate-pulse"
                            style={{ animationDelay: "1s" }}
                        ></div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                        {/* Icon Badge */}
                        <div className="inline-flex w-24 h-24 rounded-3xl bg-white/20 dark:bg-white/10 backdrop-blur-xl items-center justify-center mx-auto mb-8 shadow-xl">
                            <Rocket className="w-12 h-12 text-white" />
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Ready to Transform Your Business?
                        </h2>

                        <p className="text-xl text-white/90 dark:text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Let’s build a growth ecosystem that drives real results for your brand.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            {/* Primary Button */}
                            <Link
                                href="/contact"
                                className="
                  group inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 
                  bg-white dark:bg-[var(--card-bg)] 
                  text-[var(--brand-blue)] dark:text-[var(--brand-teal)]
                  rounded-2xl text-sm md:text-lg font-semibold 
                  transition-all shadow-xl hover:shadow-2xl hover:scale-105
                "
                            >
                                Start Your Journey
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            {/* Secondary Button */}
                            <Link
                                href="/services"
                                className="
                  inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 
                  bg-white/10 hover:bg-white/20 dark:bg-white/10 dark:hover:bg-white/20 
                  backdrop-blur-xl text-white border-2 border-white/30 
                  rounded-2xl text-sm md:text-lg font-semibold transition-all hover:scale-105
                "
                            >
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
