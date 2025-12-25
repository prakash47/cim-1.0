"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { categories, getPopularPosts, getAllTags, getCategorySlug } from "@/data/blog";
import { TrendingUp, Folder, Tag, ArrowRight } from "lucide-react";

interface BlogSidebarProps {
  currentPostSlug?: string;
}

export default function BlogSidebar({ currentPostSlug }: BlogSidebarProps) {
  const router = useRouter();
  const popularPosts = getPopularPosts(5);
  const tags = getAllTags();

  const handleTagClick = (tag: string) => {
    // Navigate to blog page with tag as search parameter and scroll to search bar
    router.push(`/blog?search=${encodeURIComponent(tag)}#search-section`);
  };

  return (
    <aside className="space-y-6">
      {/* Popular Posts */}
      <div className="rounded-xl border p-6"
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--border-color)",
        }}>
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-[var(--brand-purple)]" />
          <h3 className="text-lg font-bold">Popular Posts</h3>
        </div>
        <div className="space-y-3">
          {popularPosts.slice(0, 3).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-[var(--hover-bg)]"
            >
              <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold line-clamp-2 group-hover:text-[var(--brand-purple)] transition-colors">
                  {post.title}
                </p>
                <p className="text-xs mt-1" style={{ color: "var(--secondary-text)" }}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="rounded-xl border p-6"
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--border-color)",
        }}>
        <div className="flex items-center space-x-2 mb-4">
          <Folder className="w-5 h-5 text-[var(--brand-purple)]" />
          <h3 className="text-lg font-bold">Categories</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/blog/category/${getCategorySlug(category)}`}
              className="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border hover:border-[var(--brand-purple)]"
              style={{
                backgroundColor: "color-mix(in srgb, var(--brand-purple) 10%, transparent)",
                color: "var(--brand-purple)",
                borderColor: "var(--border-color)",
              }}
            >
              {category}
            </Link>
          ))}
        </div>
        <Link
          href="/blog/categories"
          className="flex items-center justify-center gap-2 mt-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 hover:bg-[var(--hover-bg)]"
          style={{ color: "var(--brand-purple)" }}
        >
          View all categories
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Tags */}
      <div className="rounded-xl border p-6"
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--border-color)",
        }}>
        <div className="flex items-center space-x-2 mb-4">
          <Tag className="w-5 h-5 text-[var(--brand-purple)]" />
          <h3 className="text-lg font-bold">Tags</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 12).map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className="px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200 border cursor-pointer hover:bg-[color-mix(in_srgb,var(--brand-purple)_10%,transparent)] hover:text-[var(--brand-purple)] hover:border-[var(--brand-purple)]"
              style={{
                backgroundColor: "transparent",
                color: "var(--secondary-text)",
                borderColor: "var(--border-color)",
              }}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Links / CTA Section */}
      <div className="rounded-xl border p-6 overflow-hidden relative"
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--border-color)",
        }}>
        <div className="absolute inset-0 opacity-10" style={{
          background: "linear-gradient(135deg, var(--brand-purple), var(--brand-cyan))",
        }} />
        <div className="relative z-10">
          <h3 className="text-lg font-bold mb-2">Need Help?</h3>
          <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
            Let&apos;s discuss how we can help grow your business.
          </p>
          <div className="space-y-2">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg font-semibold text-white text-sm transition-all duration-200 hover:shadow-lg"
              style={{
                backgroundColor: "var(--brand-purple)",
              }}
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg font-semibold text-sm border transition-all duration-200 hover:border-[var(--brand-purple)] hover:text-[var(--brand-purple)]"
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
    </aside>
  );
}
