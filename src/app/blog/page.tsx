"use client";

import { useState, useMemo, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { blogPosts } from "@/data/blog";
import BlogCard from "@/components/blog/BlogCard";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

function BlogPageContent() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [isTagSearch, setIsTagSearch] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Read search parameter from URL on mount and when it changes
  useEffect(() => {
    const searchFromUrl = searchParams.get("search");
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
      setIsTagSearch(true);
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      setSearchQuery("");
      setIsTagSearch(false);
    }
  }, [searchParams]);

  // Filter posts based on search query
  const filteredPosts = useMemo(() => {
    let posts = blogPosts;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.author.name.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }, [searchQuery]);

  const latestPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);
  const hasActiveSearch = !!searchQuery;

  return (
    <>
      <Head>
        <title>Blog & Insights | CIM - Digital Marketing & Web Development</title>
        <meta
          name="description"
          content="Explore expert insights on web development, digital marketing, SEO strategies, and business growth."
        />
        <link rel="canonical" href="https://cim.com/blog" />
      </Head>

      <main
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
        className="min-h-screen"
      >
        {/* Hero + Latest Post Combined Section */}
        {latestPost && !hasActiveSearch && (
          <section className="relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-5"
              style={{
                background: "radial-gradient(ellipse at top, var(--brand-purple), transparent 70%)",
              }}
            />
            <div className="relative px-6 md:px-12 xl:px-16 py-12">
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                  {/* Hero Content - Left Side */}
                  <div>
                    <span
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-purple) 15%, transparent)",
                        color: "var(--brand-purple)",
                      }}
                    >
                      <Sparkles className="w-4 h-4" />
                      Insights & Resources
                    </span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                      Blog & <span style={{ color: "var(--brand-purple)" }}>Insights</span>
                    </h1>
                    <p
                      className="text-base md:text-lg leading-relaxed mb-6"
                      style={{ color: "var(--secondary-text)" }}
                    >
                      Discover expert strategies, industry trends, and actionable insights to elevate your digital presence and grow your business.
                    </p>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div
                        className="p-4 rounded-xl text-center border"
                        style={{
                          backgroundColor: "color-mix(in srgb, var(--brand-purple) 5%, transparent)",
                          borderColor: "var(--border-color)",
                        }}
                      >
                        <div className="text-2xl lg:text-3xl font-bold" style={{ color: "var(--brand-purple)" }}>
                          {blogPosts.length}+
                        </div>
                        <div className="text-xs font-medium" style={{ color: "var(--secondary-text)" }}>
                          Articles
                        </div>
                      </div>
                      <div
                        className="p-4 rounded-xl text-center border"
                        style={{
                          backgroundColor: "color-mix(in srgb, var(--brand-cyan) 5%, transparent)",
                          borderColor: "var(--border-color)",
                        }}
                      >
                        <div className="text-2xl lg:text-3xl font-bold" style={{ color: "var(--brand-cyan)" }}>
                          4
                        </div>
                        <div className="text-xs font-medium" style={{ color: "var(--secondary-text)" }}>
                          Categories
                        </div>
                      </div>
                      <div
                        className="p-4 rounded-xl text-center border"
                        style={{
                          backgroundColor: "color-mix(in srgb, var(--brand-purple) 5%, transparent)",
                          borderColor: "var(--border-color)",
                        }}
                      >
                        <div className="text-2xl lg:text-3xl font-bold" style={{ color: "var(--brand-purple)" }}>
                          Weekly
                        </div>
                        <div className="text-xs font-medium" style={{ color: "var(--secondary-text)" }}>
                          Updates
                        </div>
                      </div>
                    </div>

                    {/* Featured Topics */}
                    <div
                      className="p-4 rounded-xl border mb-6"
                      style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                      }}
                    >
                      <h3 className="text-sm font-bold mb-3" style={{ color: "var(--foreground)" }}>
                        Popular Topics
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {["SEO Tips", "Web Design", "Social Media", "Analytics", "E-commerce", "AI & Tech"].map((topic) => (
                          <span
                            key={topic}
                            className="px-3 py-1.5 rounded-lg text-xs font-medium border"
                            style={{
                              borderColor: "var(--border-color)",
                              color: "var(--secondary-text)",
                            }}
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Quick Category Links */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["Web Development", "Digital Marketing", "Business", "Design"].map((cat) => (
                        <Link
                          key={cat}
                          href={`/blog/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                          className="px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 hover:border-[var(--brand-purple)] hover:text-[var(--brand-purple)] hover:bg-[color-mix(in_srgb,var(--brand-purple)_5%,transparent)]"
                          style={{
                            borderColor: "var(--border-color)",
                            color: "var(--foreground)",
                          }}
                        >
                          {cat}
                        </Link>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href="#posts"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
                        style={{ backgroundColor: "var(--brand-purple)" }}
                      >
                        Explore All Articles
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all duration-200 hover:border-[var(--brand-purple)]"
                        style={{
                          borderColor: "var(--border-color)",
                          color: "var(--foreground)",
                        }}
                      >
                        Subscribe
                      </Link>
                    </div>
                  </div>

                  {/* Latest Post Card - Right Side */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{
                          backgroundColor: "color-mix(in srgb, var(--brand-purple) 15%, transparent)",
                        }}
                      >
                        <Sparkles className="w-3.5 h-3.5" style={{ color: "var(--brand-purple)" }} />
                      </div>
                      <h2 className="text-lg font-bold">Latest Article</h2>
                    </div>

                    <Link
                      href={`/blog/${latestPost.slug}`}
                      className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-xl"
                      style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                      }}
                    >
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={latestPost.image}
                          alt={latestPost.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <span
                            className="inline-flex w-fit px-3 py-1 rounded-full text-xs font-semibold mb-3"
                            style={{
                              backgroundColor: "color-mix(in srgb, var(--brand-purple) 80%, transparent)",
                              color: "white",
                            }}
                          >
                            {latestPost.category}
                          </span>
                          <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors line-clamp-2">
                            {latestPost.title}
                          </h3>
                          <p className="text-sm text-gray-200 mb-4 line-clamp-2">
                            {latestPost.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Image
                                src={latestPost.author.image}
                                alt={latestPost.author.name}
                                width={28}
                                height={28}
                                className="rounded-full border-2 border-white/30"
                              />
                              <span className="text-sm text-white font-medium">{latestPost.author.name}</span>
                              <span className="text-xs text-gray-300">• {latestPost.readTime} min</span>
                            </div>
                            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:gap-2.5 transition-all">
                              Read
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Hero Only (when searching) */}
        {hasActiveSearch && (
          <section className="relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-5"
              style={{
                background: "radial-gradient(ellipse at top, var(--brand-purple), transparent 70%)",
              }}
            />
            <div className="relative px-6 md:px-12 xl:px-16 py-12 md:py-16">
              <div className="max-w-7xl mx-auto text-center">
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--brand-purple) 15%, transparent)",
                    color: "var(--brand-purple)",
                  }}
                >
                  <Sparkles className="w-4 h-4" />
                  Insights & Resources
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Blog & <span style={{ color: "var(--brand-purple)" }}>Insights</span>
                </h1>
                <p
                  className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                  style={{ color: "var(--secondary-text)" }}
                >
                  Discover expert strategies, industry trends, and actionable insights to elevate your digital presence.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Search Results Header */}
        {hasActiveSearch && (
          <section ref={contentRef} className="px-6 md:px-12 xl:px-16 py-8 scroll-mt-24">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold mb-2">
                Results for "{isTagSearch ? '#' : ''}{searchQuery}"
              </h2>
              <p style={{ color: "var(--secondary-text)" }}>
                Found <span className="font-semibold text-[var(--brand-purple)]">{filteredPosts.length}</span>{" "}
                {filteredPosts.length === 1 ? "article" : "articles"}
              </p>
            </div>
          </section>
        )}

        {/* Posts Grid */}
        <section ref={hasActiveSearch ? undefined : contentRef} className="px-6 md:px-12 xl:px-16 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Posts */}
              <div className="lg:col-span-2">
                {!hasActiveSearch && (
                  <h2 className="text-2xl font-bold mb-8">More Articles</h2>
                )}

                {(hasActiveSearch ? filteredPosts : remainingPosts).length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {(hasActiveSearch ? filteredPosts : remainingPosts).map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>
                ) : (
                  <div
                    className="rounded-2xl border p-12 text-center"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      borderColor: "var(--border-color)",
                    }}
                  >
                    <h3 className="text-xl font-semibold mb-2">No posts found</h3>
                    <p className="mb-4" style={{ color: "var(--secondary-text)" }}>
                      Try a different search term
                    </p>
                    <Link
                      href="/blog"
                      className="px-4 py-2 rounded-lg font-medium text-sm text-white transition-all inline-block"
                      style={{ backgroundColor: "var(--brand-purple)" }}
                    >
                      View All Posts
                    </Link>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-32">
                  <BlogSidebar />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 md:px-12 xl:px-16 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div
              className="rounded-3xl border p-8 md:p-12 lg:p-16 overflow-hidden relative"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background: "linear-gradient(135deg, var(--brand-purple), var(--brand-cyan))",
                }}
              />
              <div
                className="absolute top-0 right-0 w-96 h-96 opacity-20 blur-3xl"
                style={{
                  background: "radial-gradient(circle, var(--brand-purple), transparent)",
                }}
              />

              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--brand-purple) 15%, transparent)",
                    color: "var(--brand-purple)",
                  }}
                >
                  <Sparkles className="w-4 h-4" />
                  Let&apos;s Work Together
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p
                  className="text-lg md:text-xl mb-8 leading-relaxed"
                  style={{ color: "var(--secondary-text)" }}
                >
                  Get in touch with our team to discuss how we can help you achieve your digital goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105"
                    style={{ backgroundColor: "var(--brand-purple)" }}
                  >
                    Get Started
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border transition-all duration-300 hover:border-[var(--brand-purple)]"
                    style={{
                      borderColor: "var(--border-color)",
                      color: "var(--foreground)",
                    }}
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "CIM Blog",
              description: "Expert insights on web development, digital marketing, and business growth.",
              url: "https://cim.com/blog",
              publisher: {
                "@type": "Organization",
                name: "CIM",
              },
              blogPost: blogPosts.slice(0, 10).map((post) => ({
                "@type": "BlogPosting",
                headline: post.title,
                description: post.excerpt,
                datePublished: post.publishedAt,
                author: {
                  "@type": "Person",
                  name: post.author.name,
                },
              })),
            }),
          }}
        />
      </main>
    </>
  );
}

function BlogLoadingFallback() {
  return (
    <main
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
      className="min-h-screen"
    >
      <div className="flex items-center justify-center py-32">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[var(--brand-purple)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p style={{ color: "var(--secondary-text)" }}>Loading blog...</p>
        </div>
      </div>
    </main>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={<BlogLoadingFallback />}>
      <BlogPageContent />
    </Suspense>
  );
}
