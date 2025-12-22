"use client";

import { categories, getBlogPostsByCategory, getCategoryDetails, categoryDetails } from "@/data/blog";
import BlogCard from "@/components/blog/BlogCard";
import BlogSidebar from "@/components/blog/BlogSidebar";
import {
  ArrowLeft,
  Code,
  Smartphone,
  TrendingUp,
  Bot,
  Palette,
  Search,
  Target,
  FileText,
  BookOpen,
  Sparkles,
  Tag,
  Clock,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import Head from "next/head";

// Icon mapping for categories
const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-8 h-8" />,
  Smartphone: <Smartphone className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
  Bot: <Bot className="w-8 h-8" />,
  Palette: <Palette className="w-8 h-8" />,
  Search: <Search className="w-8 h-8" />,
  Target: <Target className="w-8 h-8" />,
  FileText: <FileText className="w-8 h-8" />,
};

const smallIconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-5 h-5" />,
  Smartphone: <Smartphone className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
  Bot: <Bot className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Search: <Search className="w-5 h-5" />,
  Target: <Target className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
};

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;

  const categoryName = useMemo(() => {
    return categories.find(
      (cat) => cat.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "") === slug.replace(/&/g, "")
    );
  }, [slug]);

  const categoryInfo = useMemo(() => {
    return getCategoryDetails(slug);
  }, [slug]);

  const categoryPosts = useMemo(() => {
    if (!categoryName) return [];
    return getBlogPostsByCategory(categoryName).sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }, [categoryName]);

  const latestPosts = categoryPosts.slice(0, 3);
  const allPosts = categoryPosts;

  // Calculate stats
  const totalReadTime = categoryPosts.reduce((acc, post) => acc + post.readTime, 0);
  const uniqueAuthors = new Set(categoryPosts.map((p) => p.author.id)).size;

  if (!categoryName || !categoryInfo) {
    return (
      <main
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
        className="min-h-screen pt-20 pb-16 px-6 md:px-12 xl:px-16"
      >
        <div className="max-w-4xl mx-auto text-center py-16">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{
              backgroundColor: "color-mix(in srgb, var(--brand-purple) 15%, transparent)",
            }}
          >
            <BookOpen className="w-10 h-10" style={{ color: "var(--brand-purple)" }} />
          </div>
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <p style={{ color: "var(--secondary-text)" }} className="mb-8 text-lg">
            The category you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:shadow-lg"
            style={{
              backgroundColor: "var(--brand-purple)",
            }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>{categoryInfo.name} Articles | CIM Blog</title>
        <meta name="description" content={categoryInfo.description} />
        <meta name="keywords" content={categoryInfo.featuredTags.join(", ")} />
        <meta property="og:title" content={`${categoryInfo.name} Articles | CIM Blog`} />
        <meta property="og:description" content={categoryInfo.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${categoryInfo.name} Articles | CIM Blog`} />
        <meta name="twitter:description" content={categoryInfo.description} />
        <link rel="canonical" href={`https://cim.com/blog/category/${categoryInfo.slug}`} />
      </Head>

      <main
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
        className="min-h-screen pb-16"
      >
        {/* Back Button */}
        <div className="px-6 md:px-12 xl:px-16 py-6">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-[var(--brand-purple)] hover:underline transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
        </div>

        {/* Hero Section with Category Details */}
        <section className="px-6 md:px-12 xl:px-16 pb-12">
          <div className="max-w-7xl mx-auto">
            <div
              className="rounded-3xl border overflow-hidden relative"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              {/* Background Gradient */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background: `linear-gradient(135deg, ${categoryInfo.color}, transparent 70%)`,
                }}
              />
              <div
                className="absolute top-0 right-0 w-96 h-96 opacity-20 blur-3xl"
                style={{
                  background: `radial-gradient(circle, ${categoryInfo.color}, transparent)`,
                }}
              />

              <div className="relative z-10 p-8 md:p-12 lg:p-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                  {/* Main Content */}
                  <div className="lg:col-span-2">
                    {/* Category Badge */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${categoryInfo.color} 20%, transparent)`,
                          color: categoryInfo.color,
                        }}
                      >
                        {iconMap[categoryInfo.icon] || <BookOpen className="w-8 h-8" />}
                      </div>
                      <div>
                        <span
                          className="px-3 py-1 rounded-full text-xs font-semibold"
                          style={{
                            backgroundColor: `color-mix(in srgb, ${categoryInfo.color} 20%, transparent)`,
                            color: categoryInfo.color,
                          }}
                        >
                          CATEGORY
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                      {categoryInfo.name}
                    </h1>
                    <p
                      className="text-lg md:text-xl leading-relaxed mb-8"
                      style={{ color: "var(--secondary-text)" }}
                    >
                      {categoryInfo.longDescription}
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-6">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{
                            backgroundColor: `color-mix(in srgb, ${categoryInfo.color} 15%, transparent)`,
                          }}
                        >
                          <BookOpen className="w-5 h-5" style={{ color: categoryInfo.color }} />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">{categoryPosts.length}</p>
                          <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                            Articles
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{
                            backgroundColor: `color-mix(in srgb, ${categoryInfo.color} 15%, transparent)`,
                          }}
                        >
                          <Clock className="w-5 h-5" style={{ color: categoryInfo.color }} />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">{totalReadTime}</p>
                          <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                            Min Read Time
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{
                            backgroundColor: `color-mix(in srgb, ${categoryInfo.color} 15%, transparent)`,
                          }}
                        >
                          <Sparkles className="w-5 h-5" style={{ color: categoryInfo.color }} />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">{uniqueAuthors}</p>
                          <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                            Expert Authors
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar Info */}
                  <div className="lg:col-span-1 space-y-6">
                    {/* Related Topics */}
                    <div
                      className="rounded-2xl border p-6"
                      style={{
                        backgroundColor: "var(--background)",
                        borderColor: "var(--border-color)",
                      }}
                    >
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Tag className="w-4 h-4" style={{ color: categoryInfo.color }} />
                        Related Topics
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {categoryInfo.relatedTopics.map((topic) => (
                          <span
                            key={topic}
                            className="px-3 py-1.5 rounded-lg text-sm font-medium"
                            style={{
                              backgroundColor: "var(--hover-bg)",
                              color: "var(--foreground)",
                            }}
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Featured Tags */}
                    <div
                      className="rounded-2xl border p-6"
                      style={{
                        backgroundColor: "var(--background)",
                        borderColor: "var(--border-color)",
                      }}
                    >
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" style={{ color: categoryInfo.color }} />
                        Popular Tags
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {categoryInfo.featuredTags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 hover:border-[var(--brand-purple)]"
                            style={{
                              backgroundColor: `color-mix(in srgb, ${categoryInfo.color} 10%, transparent)`,
                              color: categoryInfo.color,
                              borderColor: `color-mix(in srgb, ${categoryInfo.color} 30%, transparent)`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Posts */}
        {latestPosts.length > 0 && (
          <section className="px-6 md:px-12 xl:px-16 py-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${categoryInfo.color} 15%, transparent)`,
                      }}
                    >
                      {smallIconMap[categoryInfo.icon] || <BookOpen className="w-5 h-5" style={{ color: categoryInfo.color }} />}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">Latest in {categoryInfo.name}</h2>
                  </div>
                  <p style={{ color: "var(--secondary-text)" }}>
                    Fresh insights and updates in this category
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {latestPosts.map((post) => (
                  <BlogCard key={post.id} post={post} variant="featured" />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="px-6 md:px-12 xl:px-16 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Posts Grid */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">All {categoryInfo.name} Articles</h2>
                    <p style={{ color: "var(--secondary-text)" }}>
                      {allPosts.length} {allPosts.length === 1 ? "article" : "articles"} available
                    </p>
                  </div>
                </div>

                {allPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {allPosts.map((post) => (
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
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${categoryInfo.color} 15%, transparent)`,
                      }}
                    >
                      <BookOpen className="w-8 h-8" style={{ color: categoryInfo.color }} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">No articles yet</h3>
                    <p className="mb-4" style={{ color: "var(--secondary-text)" }}>
                      We&apos;re working on new content for this category. Check back soon!
                    </p>
                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200"
                      style={{
                        backgroundColor: categoryInfo.color,
                        color: "white",
                      }}
                    >
                      Explore All Articles
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 self-start">
                  <BlogSidebar />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Categories */}
        <section className="px-6 md:px-12 xl:px-16 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Explore Other Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categoryDetails
                .filter((cat) => cat.slug !== categoryInfo.slug)
                .map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/blog/category/${cat.slug}`}
                    className="group p-5 rounded-xl border transition-all duration-300 hover:shadow-lg"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      borderColor: "var(--border-color)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${cat.color} 15%, transparent)`,
                        color: cat.color,
                      }}
                    >
                      {smallIconMap[cat.icon] || <BookOpen className="w-5 h-5" />}
                    </div>
                    <h3 className="font-semibold mb-1 group-hover:text-[var(--brand-purple)] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-sm line-clamp-2" style={{ color: "var(--secondary-text)" }}>
                      {cat.description}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: `${categoryInfo.name} Articles`,
              description: categoryInfo.description,
              url: `https://cim.com/blog/category/${categoryInfo.slug}`,
              mainEntity: {
                "@type": "ItemList",
                numberOfItems: categoryPosts.length,
                itemListElement: categoryPosts.map((post, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  item: {
                    "@type": "BlogPosting",
                    headline: post.title,
                    description: post.excerpt,
                    datePublished: post.publishedAt,
                    author: {
                      "@type": "Person",
                      name: post.author.name,
                    },
                  },
                })),
              },
            }),
          }}
        />
      </main>
    </>
  );
}
