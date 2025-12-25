"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { getLatestPosts } from '@/data/blog';

export default function BlogInsights() {
    const latestPosts = getLatestPosts(3);

    return (
        <section className="py-20 relative overflow-hidden" style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--border-color)",
        }}>
            {/* Background decoration */}
            <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
                style={{ background: "linear-gradient(135deg, var(--brand-purple), var(--brand-cyan))" }}
            />
            <div
                className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 blur-3xl"
                style={{ background: "linear-gradient(135deg, var(--brand-cyan), var(--brand-blue))" }}
            />

            <div className="mx-auto px-6 md:px-12 xl:px-24 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <div
                            style={{
                                display: "inline-flex",
                                gap: 8,
                                padding: "8px 16px",
                                borderRadius: 999,
                                backgroundColor: "var(--card-bg)",
                                border: "1px solid var(--border-color)",
                                marginBottom: 16
                            }}
                        >
                            <BookOpen style={{ color: "var(--brand-purple)", width: 20, height: 20 }} />
                            <span style={{ fontWeight: 600, fontSize: 14 }}>Latest from Blog</span>
                        </div>
                        <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, lineHeight: 1.2 }}>
                            Insights, strategies &{" "}
                            <span
                                style={{
                                    background: "linear-gradient(90deg, var(--brand-purple), var(--brand-cyan))",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent"
                                }}
                            >
                                industry trends
                            </span>
                        </h2>
                        <p style={{ color: "var(--secondary-text)", marginTop: 12, maxWidth: 500 }}>
                            Stay ahead with expert perspectives on digital marketing, web development, and business growth.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:gap-3"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            border: "1px solid var(--border-color)",
                            color: "var(--foreground)"
                        }}
                    >
                        View all articles
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" style={{ color: "var(--brand-purple)" }} />
                    </Link>
                </div>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestPosts.map((post, index) => {
                        const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                        });

                        return (
                            <Link
                                key={post.id}
                                href={`/blog/${post.slug}`}
                                className="group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <article
                                    className="h-full rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    {/* Image Container */}
                                    <div className="relative h-52 overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span
                                                className="px-3 py-1.5 rounded-full text-xs font-semibold text-white backdrop-blur-sm"
                                                style={{
                                                    background: "linear-gradient(135deg, var(--brand-purple), var(--brand-cyan))",
                                                }}
                                            >
                                                {post.category}
                                            </span>
                                        </div>
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Meta Info */}
                                        <div className="flex items-center gap-4 mb-4 text-xs" style={{ color: "var(--secondary-text)" }}>
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-3.5 h-3.5" />
                                                <span>{formattedDate}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="w-3.5 h-3.5" />
                                                <span>{post.readTime} min read</span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="text-lg font-bold mb-3 line-clamp-2 transition-colors duration-300 group-hover:text-[var(--brand-purple)]"
                                            style={{ lineHeight: 1.4 }}
                                        >
                                            {post.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p
                                            className="text-sm mb-5 line-clamp-2"
                                            style={{ color: "var(--secondary-text)", lineHeight: 1.6 }}
                                        >
                                            {post.excerpt}
                                        </p>

                                        {/* Author & Read More */}
                                        <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "var(--border-color)" }}>
                                            <div className="flex items-center gap-3">
                                                <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-[var(--border-color)] ring-offset-2 ring-offset-[var(--card-bg)] transition-all group-hover:ring-[var(--brand-purple)]">
                                                    <Image
                                                        src={post.author.image}
                                                        alt={post.author.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium">{post.author.name}</p>
                                                    <p className="text-xs" style={{ color: "var(--secondary-text)" }}>{post.author.title}</p>
                                                </div>
                                            </div>
                                            <div
                                                className="flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2"
                                                style={{ color: "var(--brand-purple)" }}
                                            >
                                                Read
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile View All Button */}
                <div className="mt-10 text-center md:hidden">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all"
                        style={{
                            background: "linear-gradient(135deg, var(--brand-purple), var(--brand-cyan))",
                            color: "#fff"
                        }}
                    >
                        View all articles
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
