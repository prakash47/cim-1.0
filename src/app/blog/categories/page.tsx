"use client";

import { Suspense } from "react";
import {
  categories,
  categoryDetails,
  getBlogPostsByCategory,
  getCategorySlug,
  getCategoryDetails
} from "@/data/blog";
import BlogSidebar from "@/components/blog/BlogSidebar";
import {
  Code,
  Smartphone,
  TrendingUp,
  Bot,
  Palette,
  Search,
  Target,
  FileText,
  ArrowRight,
  BookOpen,
  Clock,
  Users,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Bot: <Bot className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  Search: <Search className="w-6 h-6" />,
  Target: <Target className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
};

function CategoriesContent() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    return categoryDetails.filter((category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Calculate total stats
  const totalArticles = categories.reduce((acc, cat) => acc + getBlogPostsByCategory(cat).length, 0);
  const totalReadTime = categories.reduce((acc, cat) => {
    const posts = getBlogPostsByCategory(cat);
    return acc + posts.reduce((sum, post) => sum + post.readTime, 0);
  }, 0);

  return (
    <main
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
      className="min-h-screen pb-16"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background: "radial-gradient(ellipse at top, var(--brand-purple), transparent 70%)",
          }}
        />
        <div className="relative px-6 md:px-12 xl:px-16 py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8" style={{ color: "var(--secondary-text)" }}>
            <Link href="/blog" className="hover:text-[var(--brand-purple)] transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-[var(--foreground)]">Categories</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--brand-purple) 15%, transparent)",
                  }}
                >
                  <Sparkles className="w-6 h-6 text-[var(--brand-purple)]" />
                </div>
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--brand-purple) 15%, transparent)",
                    color: "var(--brand-purple)",
                  }}
                >
                  {categories.length} CATEGORIES
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Explore All Categories
              </h1>
              <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: "var(--secondary-text)" }}>
                Discover our comprehensive collection of articles organized by topic.
                From web development to business strategy, we cover everything you need to succeed in the digital world.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "color-mix(in srgb, var(--brand-purple) 15%, transparent)" }}
                  >
                    <BookOpen className="w-5 h-5 text-[var(--brand-purple)]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{totalArticles}</p>
                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Total Articles</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "color-mix(in srgb, var(--brand-cyan) 15%, transparent)" }}
                  >
                    <Clock className="w-5 h-5 text-[var(--brand-cyan)]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{totalReadTime}</p>
                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Min Total Read</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "color-mix(in srgb, var(--brand-purple) 15%, transparent)" }}
                  >
                    <Users className="w-5 h-5 text-[var(--brand-purple)]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{categories.length}</p>
                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Categories</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="hidden lg:block relative">
              <div className="relative flex justify-center items-center">
                <svg
                  viewBox="0 0 320 240"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[80%] h-[80%]"
                >
                  {/* Row 1 */}
                  {/* Code Icon */}
                  <g>
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 0,-4; 0,0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                    <circle cx="80" cy="55" r="30" fill="none" stroke="#6B00D7" strokeWidth="2" />
                    <path d="M68 55 L60 63 L68 71 M92 55 L100 63 L92 71" stroke="#6B00D7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </g>

                  {/* Mobile Icon */}
                  <g>
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 0,-5; 0,0"
                      dur="3.5s"
                      repeatCount="indefinite"
                    />
                    <circle cx="160" cy="40" r="30" fill="none" stroke="#00B5CA" strokeWidth="2" />
                    <rect x="149" y="26" width="22" height="36" rx="3" stroke="#00B5CA" strokeWidth="2" fill="none" />
                    <circle cx="160" cy="56" r="2" fill="#00B5CA" />
                  </g>

                  {/* Chart Icon */}
                  <g>
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 0,-4; 0,0"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                    <circle cx="240" cy="55" r="30" fill="none" stroke="#FF6B35" strokeWidth="2" />
                    <path d="M220 70 L228 58 L236 64 L244 48 L252 54" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </g>

                  {/* Row 2 */}
                  {/* AI/Bot Icon */}
                  <g>
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 0,-5; 0,0"
                      dur="3.8s"
                      repeatCount="indefinite"
                    />
                    <circle cx="60" cy="135" r="30" fill="none" stroke="#9B59B6" strokeWidth="2" />
                    <circle cx="60" cy="128" r="9" stroke="#9B59B6" strokeWidth="2" fill="none" />
                    <circle cx="60" cy="143" r="6" stroke="#9B59B6" strokeWidth="1.5" fill="none" />
                  </g>

                  {/* Design/Palette Icon */}
                  <g>
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 0,-4; 0,0"
                      dur="3.2s"
                      repeatCount="indefinite"
                    />
                    <circle cx="160" cy="125" r="30" fill="none" stroke="#E91E63" strokeWidth="2" />
                    <circle cx="151" cy="118" r="4" fill="#6B00D7" />
                    <circle cx="169" cy="118" r="4" fill="#00B5CA" />
                    <circle cx="151" cy="132" r="4" fill="#FF6B35" />
                    <circle cx="169" cy="132" r="4" fill="#27AE60" />
                  </g>

                  {/* Search/SEO Icon */}
                  <g>
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 0,-5; 0,0"
                      dur="4.2s"
                      repeatCount="indefinite"
                    />
                    <circle cx="260" cy="135" r="30" fill="none" stroke="#27AE60" strokeWidth="2" />
                    <circle cx="254" cy="129" r="10" stroke="#27AE60" strokeWidth="2" fill="none" />
                    <line x1="262" y1="137" x2="272" y2="147" stroke="#27AE60" strokeWidth="2.5" strokeLinecap="round" />
                  </g>

                  {/* Row 3 - Centered */}
                  {/* Target/Strategy Icon */}
                  <g>
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 0,-4; 0,0"
                      dur="3.6s"
                      repeatCount="indefinite"
                    />
                    <circle cx="110" cy="205" r="30" fill="none" stroke="#3498DB" strokeWidth="2" />
                    <circle cx="110" cy="205" r="14" stroke="#3498DB" strokeWidth="1.5" fill="none" />
                    <circle cx="110" cy="205" r="5" fill="#3498DB" />
                  </g>

                  {/* Document/Case Study Icon */}
                  <g>
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 0,-5; 0,0"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                    <circle cx="210" cy="205" r="30" fill="none" stroke="#F39C12" strokeWidth="2" />
                    <rect x="196" y="188" width="28" height="34" rx="2" stroke="#F39C12" strokeWidth="1.5" fill="none" />
                    <line x1="202" y1="197" x2="218" y2="197" stroke="#F39C12" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="202" y1="205" x2="218" y2="205" stroke="#F39C12" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="202" y1="213" x2="212" y2="213" stroke="#F39C12" strokeWidth="1.5" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="px-6 md:px-12 xl:px-16 mb-12">
        <div className="max-w-xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: "var(--secondary-text)" }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search categories..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border text-sm transition-all duration-200 focus:outline-none focus:ring-2"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
                color: "var(--foreground)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-6 md:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {filteredCategories.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCategories.map((category) => {
                  const categoryPosts = getBlogPostsByCategory(category.name);
                  const totalReadTime = categoryPosts.reduce((acc, post) => acc + post.readTime, 0);
                  const uniqueAuthors = new Set(categoryPosts.map((p) => p.author.id)).size;

                  return (
                    <Link
                      key={category.slug}
                      href={`/blog/category/${category.slug}`}
                      className="group"
                    >
                      <div
                        className="rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl h-full cursor-pointer relative overflow-hidden"
                        style={{
                          backgroundColor: "var(--card-bg)",
                          borderColor: "var(--border-color)",
                        }}
                      >
                        {/* Background gradient */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                          style={{
                            background: `linear-gradient(135deg, ${category.color}, transparent)`,
                          }}
                        />

                        <div className="relative z-10">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div
                              className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                              style={{
                                backgroundColor: `color-mix(in srgb, ${category.color} 15%, transparent)`,
                                color: category.color,
                              }}
                            >
                              {iconMap[category.icon] || <BookOpen className="w-6 h-6" />}
                            </div>
                            <ArrowRight
                              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                              style={{ color: category.color }}
                            />
                          </div>

                          {/* Title & Description */}
                          <h3
                            className="text-xl font-bold mb-2 transition-colors"
                            style={{ color: "var(--foreground)" }}
                          >
                            <span className="group-hover:text-[var(--brand-purple)]">{category.name}</span>
                          </h3>
                          <p
                            className="text-sm mb-4 line-clamp-2"
                            style={{ color: "var(--secondary-text)" }}
                          >
                            {category.description}
                          </p>

                          {/* Stats */}
                          <div className="flex items-center gap-4 mb-4 text-sm" style={{ color: "var(--secondary-text)" }}>
                            <span className="flex items-center gap-1">
                              <BookOpen className="w-4 h-4" />
                              {categoryPosts.length} articles
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {totalReadTime} min
                            </span>
                          </div>

                          {/* Featured Tags */}
                          <div className="flex flex-wrap gap-2">
                            {category.featuredTags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2.5 py-1 rounded-full font-medium"
                                style={{
                                  backgroundColor: `color-mix(in srgb, ${category.color} 10%, transparent)`,
                                  color: category.color,
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                            {category.featuredTags.length > 3 && (
                              <span
                                className="text-xs px-2.5 py-1 rounded-full font-medium"
                                style={{
                                  backgroundColor: "var(--hover-bg)",
                                  color: "var(--secondary-text)",
                                }}
                              >
                                +{category.featuredTags.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
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
                  style={{ backgroundColor: "color-mix(in srgb, var(--brand-purple) 15%, transparent)" }}
                >
                  <Search className="w-8 h-8 text-[var(--brand-purple)]" />
                </div>
                <h3 className="text-xl font-bold mb-2">No categories found</h3>
                <p style={{ color: "var(--secondary-text)" }}>
                  Try adjusting your search criteria
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function CategoriesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--background)" }}>
        <div className="animate-pulse text-center">
          <div className="w-12 h-12 border-4 border-[var(--brand-purple)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p style={{ color: "var(--secondary-text)" }}>Loading categories...</p>
        </div>
      </div>
    }>
      <CategoriesContent />
    </Suspense>
  );
}
