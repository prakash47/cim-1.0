"use client";

import { Suspense } from "react";
import { categories, getBlogPostsByCategory } from "@/data/blog";
import BlogSidebar from "@/components/blog/BlogSidebar";
import SearchBar from "@/components/blog/SearchBar";
import { Folder, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";

function CategoriesContent() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    return categories.filter((category) =>
      category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <main
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
      className="min-h-screen pt-20 pb-16"
    >
      {/* Hero Section */}
      <section className="px-6 md:px-12 xl:px-16 py-12 md:py-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog Categories</h1>
          <p className="text-lg md:text-xl" style={{ color: "var(--secondary-text)" }}>
            Explore our comprehensive collection of blog categories covering web development, digital marketing, design, and more.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="px-6 md:px-12 xl:px-16 mb-12">
        <div className="max-w-2xl">
          <SearchBar
            onSearch={setSearchQuery}
            placeholder="Search categories..."
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Categories Grid */}
          <div className="lg:col-span-2">
            {filteredCategories.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCategories.map((category) => {
                  const categoryPosts = getBlogPostsByCategory(category);
                  const categorySlug = category.toLowerCase().replace(/\s+/g, "-");

                  return (
                    <Link
                      key={category}
                      href={`/blog/category/${categorySlug}`}
                      className="group"
                    >
                      <div
                        className="rounded-xl border p-6 transition-all duration-300 hover:shadow-lg hover:border-[var(--brand-purple)] h-full cursor-pointer"
                        style={{
                          backgroundColor: "var(--card-bg)",
                          borderColor: "var(--border-color)",
                        }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div
                            className="w-12 h-12 rounded-lg flex items-center justify-center"
                            style={{
                              backgroundColor: "color-mix(in srgb, var(--brand-purple) 15%, transparent)",
                            }}
                          >
                            <Folder className="w-6 h-6 text-[var(--brand-purple)]" />
                          </div>
                          <ArrowRight className="w-5 h-5 text-[var(--brand-purple)] group-hover:translate-x-1 transition-transform" />
                        </div>

                        <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--brand-purple)] transition-colors">
                          {category}
                        </h3>

                        <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
                          {categoryPosts.length} {categoryPosts.length === 1 ? "article" : "articles"}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {categoryPosts.slice(0, 3).map((post) => (
                            <span
                              key={post.id}
                              className="text-xs px-2 py-1 rounded-full"
                              style={{
                                backgroundColor: "color-mix(in srgb, var(--brand-purple) 10%, transparent)",
                                color: "var(--brand-purple)",
                              }}
                            >
                              {post.title.substring(0, 15)}...
                            </span>
                          ))}
                          {categoryPosts.length > 3 && (
                            <span
                              className="text-xs px-2 py-1 rounded-full"
                              style={{
                                backgroundColor: "color-mix(in srgb, var(--brand-purple) 10%, transparent)",
                                color: "var(--brand-purple)",
                              }}
                            >
                              +{categoryPosts.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div
                className="rounded-xl border p-12 text-center"
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--border-color)",
                }}
              >
                <h3 className="text-lg font-semibold mb-2">No categories found</h3>
                <p style={{ color: "var(--secondary-text)" }}>
                  Try adjusting your search criteria
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar />
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
