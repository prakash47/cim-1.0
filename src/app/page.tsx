"use client";

import React from 'react';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import CoreValues from '@/components/home/CoreValues';
import Services from '@/components/home/Services';
import Process from '@/components/home/Process';
import CaseStudies from '@/components/home/CaseStudies';
import Industries from '@/components/home/Industries';
import BlogInsights from '@/components/home/BlogInsights';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }} className="min-h-screen overflow-hidden">
      <style jsx global>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes grow {
          from { height: 0; }
          to { height: var(--height); }
        }
        @keyframes scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(8px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation: blob 7s infinite 4s; }
        .animate-grow { animation: grow 1s ease-out forwards; }
        .animate-scroll { animation: scroll 1.5s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        .animate-spin-slow { animation: spin 3s linear infinite; }
      `}</style>

      <Hero />
      <Stats />
      <CoreValues />
      <Services />
      <Process />
      <CaseStudies />
      <Industries />
      <BlogInsights />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
